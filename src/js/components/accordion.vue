<template>
  <div
    :id="id"
    class="accordion"
    :class="classes"
  >
    <div
      class="accordion__heading"
      :class="headingclasses"
    >
      <button
        class="accordion__trigger"
        :aria-expanded="active ? 'true' : 'false'"
        :class="{ 'is-open': active }"
        @click.prevent="active = !active"
      >
        {{ title }}
      </button>
    </div>
    <transition name="fade">
      <div
        v-show="active"
        class="accordion__content text-formatted"
        :class="{ 'is-open': active }"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    classes: String,
    headingclasses: String,
    id: String,
    isactive: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  data() {
    return {
      active: this.isactive,
    };
  },
};
</script>
