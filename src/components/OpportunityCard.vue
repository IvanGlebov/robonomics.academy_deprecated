<template>
  <div class="card-wrapper">
    <g-image class="card-image" :src="require(`!!assets-loader!@images/${img_src}`)"></g-image>
    <div>
      <h4>{{ header }}</h4>
      <div class="card-description">{{ additional_info }}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OpportunityCard",
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
  }
}
</script>

<style scoped>
  .card-wrapper {
    width: calc(100% - 59px);
    padding: 29px 15px 30px 29px;
    border: 1px solid var(--color-gray-dark);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .card-image {
    height: 200px;
    width: 100%;
  }

  .card-description {
    padding-top: var(--space);
    font-size: 1rem;
    font-family: var(--font-family-roboto);
    color: var(--color-gray-dark);
  }
</style>