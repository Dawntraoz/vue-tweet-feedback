# vue-tweet-feedback

Twitter feedback message button linked to your account ❤ Add it to your blog posts on Nuxt.js / Vue app

- [Install](#install)
- [Use](#use)
- [Options](#options)
  - [Buttons with a counter](#buttons-with-a-counter)
  - [Buttons without a counter](#buttons-without-a-counter)
  - [Buttons for instant messengers](#buttons-for-instant-messengers)
  - [Send a message via email](#send-a-message-via-email)
  - [Full list of social networks](#full-list-of-social-networks)
- [Example](#example)
- [Author](#author)
- [Link](#link)
- [License](#license)

## Install

Using npm run

```bash
npm i vue-tweet-feedback
```
[https://www.npmjs.com/package/vue-tweet-feedback](https://www.npmjs.com/package/vue-tweet-feedback)

## Use

You need to import the component. To do it you need: 

```js
import VueTweetFeedback from "VueTweetFeedback";

const app = new Vue({
  el: "#app",
  components: {
    VueTweetFeedback
  }
});
```

Add the feedback button to your template

```html
<div id="app">
  <vue-tweet-feedback
    classList="myclass"
    user="mytwitteruser"
    shareUrl="https://mywebsite.extension/"
    message="I read your post"
  >
    Give me your feedback
  </vue-tweet-feedback>
</div>
```

## Options

Here you can see the options available to create your own feedback.

**Option**|**Type**|**Default**|**Description**
-----|-----|-----|-----
user|String|`dawntraoz`|twitter user you want to be mentioned
shareUrl|String|`document.location.href`|url you want people to share
message|String|`document.title`|Messages you want people to share
classList|String|`bg-gray-900 text-white`|Classes to be added on the twitter share button

## Author

This component was developed by [Dawntraoz](https://github.com/Dawntraoz) for a personal project and published to Open Source. The idea came from [Danywalls](https://twitter.com/danywalls)
I hope it helps someone 😊

## License

[The MIT License (MIT)](https://github.com/Dawntraoz/vue-tweet-feedback/blob/master/LICENSE)