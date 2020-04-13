import TweetFeedback from "./TweetFeedback.vue";

export default {
 install(Vue, options) {
  Vue.component("tweet-feedback", TweetFeedback);
 }
};