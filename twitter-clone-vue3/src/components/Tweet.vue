<template>
  <!-- tweets -->
  <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
    <router-link :to="`/profile/${tweet.uid}`">
      <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"/>
    </router-link>
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm flex justify-between items-center">
        <div class="space-x-1">
          <span class="font-bold">{{ tweet.email }}</span>
          <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
          <span>·</span>
          <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
        </div>
        <button v-if="currentUser.uid === tweet.uid" @click="onDeleteTweet(tweet)">
          <i class="fas fa-trash text-red-400 p-2 rounded-full hover:bg-red-50"></i>
        </button>
      </div>
      <!-- tweet body -->
      <router-link :to="`/tweet/${tweet.id}`">{{ tweet.tweet_body }}</router-link>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <!-- comment button -->
        <div class="text-gray-500 hover:text-primary" @click="showCommentModal=true">
          <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
        </div>
        <!-- retweet button - 아직 리트윗 하지 않은 상태 -->
        <div v-if="!tweet.isRetweeted" class="text-gray-500 hover:text-green-400" @click="handleRetweet(tweet)">
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <!-- retweet button - 이미 리트윗 한 상태 -->
        <div v-else class="text-green-400" @click="handleRetweet(tweet)">
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <!-- like button - 아직 좋아요 누르지 않은 상태 -->
        <div v-if="!tweet.isLiked" class="text-gray-400 hover:text-red-400">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2" @click="handleLike(tweet)"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <!-- like button - 좋아요 누른 않은 상태 -->
        <div v-else class="text-red-400">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2" @click="handleLike(tweet)"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <!-- share button -->
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
        </div>
      </div>
    </div>
  </div>
  <comment-modal v-if="showCommentModal" @close-modal="showCommentModal = false" :tweet="tweet"></comment-modal>
</template>

<script>
import moment from 'moment'
import {ref} from "vue";
import CommentModal from "./CommentModal.vue";
import handleRetweet from "../utils/handleRetweet";
import handleLike from "../utils/handleLike";
import {TWEET_COLLECTION, COMMENT_COLLECTION, RETWEET_COLLECTION, LIKE_COLLECTION, USER_COLLECTION} from "../firebase";
import firebase from "firebase/compat/app";

export default {
  components: {CommentModal},
  props: ['currentUser', 'tweet'],
  setup() {
    const showCommentModal = ref(false);

    const onDeleteTweet = async (tweet) => {
      if (confirm("정말 트윗을 삭제하시겠습니까?")) {
        // 트윗 삭제
        await TWEET_COLLECTION.doc(tweet.id).delete();

        // 댓글 삭제
        const commentSnapshot = await COMMENT_COLLECTION.where('from_tweet_id', '==', tweet.id).get();
        commentSnapshot.docs.forEach((doc) => {
          doc.ref.delete();
        });

        // 리트윗 삭제
        const retweetSnapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).get();
        retweetSnapshot.docs.forEach((doc) => {
          doc.ref.delete();
        });

        // 좋아요 삭제
        const likeSnapshot = await LIKE_COLLECTION.where('from_tweet_id', '==', tweet.id).get();
        likeSnapshot.docs.forEach((doc) => {
          doc.ref.delete();
        });
        // USER_COLLECTION에서 num_tweets 1 감소
        await USER_COLLECTION.doc(tweet.uid).update({
          num_tweets: firebase.firestore.FieldValue.increment(-1),
        })
      }
    }


    return {
      moment,
      showCommentModal,
      handleRetweet,
      handleLike,
      onDeleteTweet,
    }
  },
}
</script>

<style></style>