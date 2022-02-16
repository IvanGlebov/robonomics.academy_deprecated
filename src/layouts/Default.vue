<template>
  <transition name="fade" appear>
    <div>
      <HeaderNav/>
      <div class="content-wrapper">
        <slot/>
      </div>
    </div>

  </transition>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

html {
  font-size: 14px;

}
body {
  margin:0;
  padding:0;
  line-height: 1.5;
  color: black;
}

h2 {
  font-size: 2rem;
  font-family: var(--font-family-yeseva);
  color: var(--color-gray-dark);
  margin-block-end: 0;
}

h3 {
  font-size: 1.75rem;
  font-family: var(--font-family-yeseva);
  color: var(--color-gray-dark);
  margin-block-end: 0;
}

h4 {
  font-size: 1.3rem;
  font-family: var(--font-family-yeseva);
  color: var(--color-gray-dark);
  margin-block-end: 0;
}

p {
  font-size: 1.25rem;
  font-family: var(--font-family-roboto);
  color: var(--color-gray-dark);
}

a {
  text-decoration: none;
}

.content-wrapper {
  margin-top: 45px;
}

</style>
<script>

export default {
  components: {
    HeaderNav: () => import('~/components/HeaderNav')
  }
}
</script>