<template>
  <label class="container">
    <slot/>
    <input @bind:checked="checked" @change="$emit('change', $event.target.checked)" type="Checkbox">
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
}
</script>

<style scoped>

  .container {
    display: block;
    position: relative;
    padding-left: 45px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--color-gray-dark);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input {
    width:0;
    height: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    transition: all .2s;
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--color-light);
    border: 1px solid var(--color-gray-dark);
  }

  .container input:checked ~ .checkmark {
    transition: all .2s;
    background-color: var(--color-gray-dark);
  }

</style>