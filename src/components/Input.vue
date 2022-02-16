<template>
  <div class="input-wrapper">
    <p class="input-header"><slot/></p>
    <input :class="{blocked: blocked}" @change="$emit('change', $event.target.value)" :value="value" type="text">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: String,
    blocked: Boolean
  },
  model: {
    event: 'change',
    props: {
      value: String,
      blocked: Boolean
    }
  }
}
</script>

<style scoped>

  .input-header {
    font-family: var(--font-family-yeseva);
    float: left;
    background-color: var(--color-ocher);
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 9px 8px 9px 0;
  }

  .input-wrapper {
    width: 100%;
  }

  .input-wrapper input {
    background-color: var(--color-light);
    border: 1px solid var(--color-gray-dark);
    border-radius: 0;
    height: 20px;
    width: calc(100% - 40px);
    padding: 14px 20px;
    font-family: var(--font-family-roboto);
  }
  input:focus {
    outline: none;
  }

  .blocked {
    cursor: none;
  }

</style>