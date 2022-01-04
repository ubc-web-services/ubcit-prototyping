<template>
  <input
    type="text"
    :class="classes"
    :placeholder="placeholdertext"
    v-bind:value="value"
    @input="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
  name: "Custominput",
  props: ["value", "classes", "placeholdertext"],
};
</script>
