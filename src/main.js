import "~/assets/style/variables.css"
import "~/assets/style/animation.css"
import "~/assets/style/base.css"
import "~/assets/style/typography.css"

import Default from '~/layouts/Default.vue'

import Vue from "vue";

// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'

Vue.directive('in-viewport', inViewportDirective)

export default function (Vue, { router, head, isClient }) {
  if (isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default
    Vue.use(vueSmoothScroll)
  }

  head.meta.push({
    property: "og:type",
    content: "website"
  })
  head.meta.push({
    property: "og:site_name",
    content: "Robonomics academy"
  })
  head.meta.push({
    property: "og:title",
    content: "Robonomics academy"
  })
  head.meta.push({
    property: "og:description",
    content: "Robonomics academy description"
  })
  head.meta.push({
    property: "og:image",
    content: "http://localhost:8080/og_cover.png"
  })
  head.meta.push({
    property: "og:image:width",
    content: "1280"
  })
  head.meta.push({
    property: "og:image:height",
    content: "650"
  })
  head.meta.push({
    property: "twitter:card",
    content: "http://localhost:8080/og_cover.png"
  })
  head.meta.push({
    property: "twitter:title",
    content: "Robonomics academy"
  })
  head.meta.push({
    property: "twitter:description",
    content: "Robonomics academy description"
  })
  head.meta.push({
    property: "twitter:image",
    content: "http://localhost:8080/og_cover.png"
  })
  head.meta.push({
    property: "twitter:image:width",
    content: "1280"
  })
  head.meta.push({
    property: "twitter:image:height",
    content: "650"
  })


  // Set default layout as a global component
  Vue.component('layout', Default)
}
