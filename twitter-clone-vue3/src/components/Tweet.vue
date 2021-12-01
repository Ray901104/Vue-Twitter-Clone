<template>
  <!-- tweets -->
  <div
      class="
      flex
      px-3
      py-3
      border-b border-gray-100
      hover:bg-gray-50
      cursor-pointer
    "
  >
    <img
        :src="currentUser.profile_image_url"
        class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
    />
    <div class="flex-1 flex flex-col ml-3 space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">{{ tweet.email }}</span>
        <span class="text-gray-500 text-xs">{{ tweet.username }}</span>
        <span>·</span>
        <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
      </div>
      <!-- tweet body -->
      <div>
        {{ tweet.tweet_body }}
      </div>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <div
            class="
            text-gray-500
            hover:bg-blue-50 hover:text-primary
            rounded-full
            p-2
          "
        >
          <i class="far fa-comment"></i>
          <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
        </div>
        <div
            class="
            text-gray-500
            hover:bg-green-50 hover:text-green-500
            rounded-full
            p-2
          "
        >
          <i class="fas fa-retweet"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <div
            class="
            text-gray-500
            hover:bg-blue-50 hover:text-red-500
            rounded-full
            p-2
          "
        >
          <i class="far fa-heart"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <div
            class="
            text-gray-500
            hover:bg-blue-50 hover:text-primary
            rounded-full
            p-2
          "
        >
          <i class="far fa-share-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['currentUser', 'tweet'],
  setup() {
    return {moment};
  }
};
</script>

<style></style>
