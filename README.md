# vue-tweet-feedback

Twitter feedback message button linked to your account ❤ Add it to your blog posts on Nuxt.js / Vue app

- [Install](#install)
- [Use](#use)
- [Options](#options)
- [Project setup on dev](#project-setup)
- [Author](#author)
- [License](#license)

## Install

Using npm run

```bash
npm i tweet-feedback
```
[https://www.npmjs.com/package/tweet-feedback](https://www.npmjs.com/package/tweet-feedback)

## Use

You need to import the component. To do it you need: 

```js
import 'tweet-feedback'

// In case you want to add the css
import 'tweet-feedback/dist/vue-tweet-feedback.css'
```

You can directly use it in your template, add the feedback button:

```html
<div id="app">
  <VueTweetFeedback
      user="dawntraoz"
      shareUrl="https://dawntraoz.com/"
      message="I read your post"
    >
    <template slot="header">If you want to send me your feedback,</template>

    Give me your feedback <!-- + Icon -->

    <template slot="footer">Thank you! It will help me a lot 🙌</template>
  </VueTweetFeedback>
</div>
```

## Options

Here you can see the options available to create your own feedback.

**Option**|**Type**|**Default**|**Description**
-----|-----|-----|-----
user|String|`dawntraoz`|twitter user you want to be mentioned
shareUrl|String|`document.location.href`|url you want people to share
message|String|`I use your package! Thanks`|Messages you want people to share
classesPrefix|String|`tweet-feedback`|Prefix used as a class on the parent and as classPrefix__button on the Twitter button

## Slots

Here you can see the slots availables to add your content.

**Slot**|**Description**
-----|-----
default|Button content, i.e. text + icon
header|Any content before the twitter button
footer|Any content after the twitter button

## Project setup on dev
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Author

This component was developed by [Dawntraoz](https://github.com/Dawntraoz) for a personal project and published to Open Source. The idea came from [Danywalls](https://twitter.com/danywalls)
I hope it helps someone 😊

## License

[The MIT License (MIT)](https://github.com/Dawntraoz/vue-tweet-feedback/blob/master/LICENSE)