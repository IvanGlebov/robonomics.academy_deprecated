<template>
  <nav class="header-side animate-inside-reverse" v-in-viewport.once>
    <div class="nav-content">
      <a href="#slide1" class="header">
        Robonomics Academy
        <g-image class="academy-logo" :class="{hidden: !is_scrolled}" src="~/assets/images/academy_logo.svg"></g-image>
      </a>
      <div class="nav-anchors">
        <a href="#slide2">About Robonomics</a>
        <a href="#slide3">Online school</a>
        <a href="#slide4">Skills</a>
        <a href="#slide5">Results</a>
        <a href="#secondForm">Register</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data: () => {
    return {
      is_scrolled: false
    }
  },
  methods: {
    checkScrollPosition() {
      let scrollLimit = 150
      let scroll = window.scrollY
      if (scroll > scrollLimit) {
        this.$data.is_scrolled = true
      } else if (scroll <= scrollLimit - 20) {
        this.$data.is_scrolled = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollPosition)
  }
}
</script>

<style scoped>
  .header-side {
    display: flex;
    justify-content: center;
    min-height: 45px;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--color-gray-dark);
    color: var(--color-light);
    font-family: var(--font-family-yeseva);
    font-size: 1.3rem;
    z-index: 10;
  }

  .header {
    position: relative;
  }

  .nav-content {
    width: 100%;
    height: 100%;
    max-width: 1088px;
    padding: 6px var(--space);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .academy-logo {
    position: absolute;
    height: 78px;
    top: 0;
    left: -70%;
    opacity: 1;
    transition: all .2s;
    animation: FadeIn;
    animation-duration: .2s;
    animation-direction: normal;
    animation-timing-function: linear;
  }

  .hidden {
    opacity: 0;
    transition: all .2s;
  }

  .nav-content > a {
    color: var(--color-light);
  }

  .nav-anchors {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .nav-anchors > a {
    color: var(--color-ocher);
    text-decoration: none;
    transition: all .3s;
  }

  .nav-anchors > a:hover {
    color: var(--color-light);
    transition: all .3s;
  }

  @media screen and (max-width: 1270px) {
    .academy-logo {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {

    .header {
      font-size: .85rem;
    }

    .header-side {
      font-size: .7rem;
    }

    .nav-content {
      padding: 6px;
    }

    .nav-anchors {
      gap: 10px;
    }


  }
</style>
