import {LIKE_COLLECTION, RETWEET_COLLECTION, USER_COLLECTION} from "../firebase";
import store from "../store";

export default async (tweet, currentUser) => {
    // user info
    const doc = await USER_COLLECTION.doc(tweet.uid).get()
    tweet.profile_image_url = doc.data().profile_image_url
    tweet.email = doc.data().email
    tweet.username = doc.data().username

    // retweet info
    const snapshot = await RETWEET_COLLECTION.where('from_tweet_id', '==', tweet.id).where(
        'uid', '==', store.state.user.uid).get();
    if (snapshot.empty) {
        tweet.isRetweeted = false;
    } else {
        tweet.isRetweeted = true;
    }

    // like info
    const likeSnapshot = await LIKE_COLLECTION.where('from_tweet_id', '==', tweet.id).where('uid', '==', store.state.user.uid).get();
    if (likeSnapshot.empty) {
        tweet.isLiked = false;
    } else {
        tweet.isLiked = true;
    }
    return tweet;
}