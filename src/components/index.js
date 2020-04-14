import Vue from "vue";
import  VueTweetFeedback from "./VueTweetFeedback.vue";

const Components = {
    VueTweetFeedback
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
