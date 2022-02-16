<template>
  <div class="card-container">
    <div>
      <h4>{{ header }}</h4>
      <div @click="flipCard" class="toggle-button">{{flip ? "Less" : "More"}}</div>
    </div>
    <div>
      <div class="additional-info-container" :class="{'changed': flip}">
        <g-image class="card-front" :style="imgStyles" :src="require(`!!assets-loader!@images/${img_src}`)"></g-image>
        <div class="card-back">{{ additional_info }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  model: {
    props: {
      img_src: String,
      header: String,
      additional_info: String,
      scale: String
    }
  },
  props: {
    img_src: String,
    header: String,
    additional_info: String,
    scale: String
  },
  data: () => {
    return {
      flip: false
    }
  },
  methods: {
    flipCard() {
      this.$data.flip = !this.$data.flip
    }
  },
  computed: {
    imgStyles () {
      return {
        width: this.$props.scale
      }
    }
  }
}
</script>

<style scoped>

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
    border: 1px solid var(--color-gray-dark);
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: all .2s;
  }

  .card-container h4 {
    margin-block-start: 0;
  }

  .toggle-button {
    margin-top: 10px;
    font-family: var(--font-family-roboto);
    color: var(--color-blue-strong);
    font-size: .9rem;
  }

  .additional-info-container {
    margin-top: 20px;
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content:center;
    position: relative;
    transition: all .2s;
  }

  .card-front {
    animation-name: FadeIn;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-duration: .2s;
  }

  .changed > .card-front {
    visibility: hidden;
    opacity: 0;
    display: none;

    transition: all .2s;
    animation-name: FadeOut;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-duration: .2s;
  }

  .card-back {
    font-family: var(--font-family-roboto);
    font-size: 1rem;
    color: var(--color-blue-strong);
    display: none;

    visibility: hidden;
    opacity: 0;

    transition: all .2s;
    animation-name: FadeOut;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-duration: .2s;
  }

  .changed > .card-back {
    display: block;
    animation-name: FadeIn;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-duration: .2s;
  }

  @media scren and (max-width: 1100px) {
    .card-back {
      font-size: .8rem;
    }
  }


</style>