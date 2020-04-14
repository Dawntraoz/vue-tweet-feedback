<template>
  <div :class="classesPrefix">
    <slot name="header"></slot>
    <a
      :href="`https://twitter.com/intent/tweet?&text=${message}&url=${shareUrl}&screen_name=${user}`"
      :class="classesPrefix + '__button'"
      target="_blank"
      title="You could give me your feedback on Twitter"
    >
      <slot></slot>
    </a>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
 props: {
  classesPrefix: {
   type: String,
   default: "tweet-feedback"
  },
  user: {
   type: String,
   default: "dawntraoz"
  },
  message: {
   type: String,
   default: "I use your package! Thanks"
  },
  shareUrl: {
    type: String,
    default: document.location.href
  }
 }
};
</script>

<style>
.tweet-feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 360px;
  margin: 0 auto;
}
.tweet-feedback__button {
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: .75rem;
  padding-bottom: .75rem;
  margin: 1rem auto;
  color: #fff;
  border-radius: 9999px;
  background-color: #6b46c1;
  text-decoration: inherit;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
}
</style>