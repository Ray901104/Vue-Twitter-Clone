import {RETWEET_COLLECTION, TWEET_COLLECTION} from "../firebase";
import store from "../store";
import firebase from "firebase/compat/app";

export default async (tweet) => {
    try {
        // 이미 리트윗 한 상황
        if (tweet.isRetweeted) {
            // doc에서 리트윗 데이터를 지우기
            const snapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id)
                .where('uid', '==', store.state.user.uid).get();
            await snapshot.docs[0].ref.delete();
            // 리트윗 수 감소
            await TWEET_COLLECTION.doc(tweet.id).update({
                'num_retweets': firebase.firestore.FieldValue.increment(-1),
            })
        } else {
            // 아직 리트윗 안한 상황
            const doc = RETWEET_COLLECTION.doc();
            await doc.set({
                id: doc.id,
                from_tweet_id: tweet.id,
                uid: store.state.user.uid,
                created_at: Date.now(),
            });

            await TWEET_COLLECTION.doc(tweet.id).update({
                'num_retweets': firebase.firestore.FieldValue.increment(1),
            });
        }

    } catch (e) {
        console.log('handle retweet error:', e);
    }
}