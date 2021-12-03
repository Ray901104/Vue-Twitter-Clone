import {LIKE_COLLECTION, TWEET_COLLECTION} from "../firebase";
import store from "../store";
import firebase from "firebase/compat/app";

export default async (tweet) => {
    try {
        // 이미 좋아요한 상황
        if (tweet.isLiked) {
            // Delete retweet doc
            const snapshot = await LIKE_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get();
            await snapshot.docs[0].ref.delete();
            // Decrease retweet number
            await TWEET_COLLECTION.doc(tweet.id).update({
                'num_likes': firebase.firestore.FieldValue.increment(-1),
            })
        } else {
            // 아직 좋아요 안한 상황
            const doc = LIKE_COLLECTION.doc();
            await doc.set({
                id: doc.id,
                from_tweet_id: tweet.id,
                uid: store.state.user.uid,
                created_at: Date.now(),
            });

            await TWEET_COLLECTION.doc(tweet.id).update({
                'num_likes': firebase.firestore.FieldValue.increment(1),
            });
        }

    } catch (e) {
        console.log('handle like error:', e);
    }
}