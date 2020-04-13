<template>
  <div>
    <a
      :href="`https://twitter.com/intent/tweet?&text=${message}&url=${shareUrl}&screen_name=${user}`"
      :class="classList"
      target="_blank"
      title="You could give me your feedback on Twitter"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
 props: {
  classList: {
   type: String,
   default: "tweet-feedback"
  },
  user: {
   type: String,
   default: "dawntraoz"
  },
  message: {
   type: String,
   default: "I use your package!"
  },
  shareUrl: {
    type: String,
    default: 'https://dawntraoz.com/'
  }
 }
};
</script>

<style>
.tweet-feedback {

  display: inline-block;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: .75rem;
  padding-bottom: .75rem;
  margin-left: auto;
  margin-right: auto;
  
  color: #fff;
  border-radius: 9999px;
  background-color: #6b46c1;
  text-decoration: inherit;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
}
</style>