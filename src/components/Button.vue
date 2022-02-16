<template>
  <div @click=checkIfDisabled
       class="button-container"
       :class="{'disabled': loading === true || finished === true,
                'button-container__loading': loading === true && finished !== true,
                'button-container__finished': loading !== true && finished === true
       }">
    <span class="icon loading-icon" :class="{'hidden': !loading}"></span>
    <g-image src="~/assets/images/approved_icon.svg" class="icon approved-icon" :class="{'hidden': !finished}"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    loading: Boolean,
    finished: Boolean
  },
  data: () => {
    return {
      load: false
    }
  },
  methods: {
    checkIfDisabled() {
      if (!this.$props.finished)
        this.$emit('click')
    }
  }
}
</script>

<style scoped>

  .button-container {
    height: 76px;
    width: 360px;
    background-color: var(--color-purple-strong);
    color: var(--color-light);
    font-family: var(--font-family-yeseva);
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    transition: all .2s;
    position: relative;
  }
  .icon {
    position: absolute;
    left: 96px;
  }
  .disabled {
    cursor: none;
  }

  .loading-icon {
    border-top: 1px solid var(--color-light);
    border-left: 1px solid var(--color-light);
    border-right: 1px solid var(--color-light);
    border-bottom: 1px solid var(--color-purple-strong);
    border-radius: 100%;
    width: 33px;
    height: 33px;
    transition: all .2s;
    animation: spin 2s linear infinite;
  }

  .button-container__loading {
    opacity: 72%;
  }

  .button-container__finished {
    background-color: var(--color-gray-dark);
    transition: all .2s;
  }

  .hidden {
    transform: scale(0);
    width: 0;
    visibility: hidden;
    transition: all .1s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }


</style>