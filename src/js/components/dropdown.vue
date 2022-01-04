<template>
  <div
    class="dropdown"
    :aria-expanded="active ? 'true' : 'false'"
    aria-haspopup="true"
    :class="classes"
    @mouseleave="active = false"
  >
    <button
      class="dropdown__trigger"
      :aria-expanded="active ? 'true' : 'false'"
      :class="[triggerclasses, active ? 'is-open' : '']"
      @click.prevent="active = !active"
    >
      {{ title }}
      <slot name="icon">
        <svg
          aria-hidden="true"
          class="inline-block w-8 h-8 -ml-2"
          :class="active ? 'rotate-270' : 'rotate-90'"
        >
          <use :xlink:href="'#icon-caret'"></use>
        </svg>
      </slot>
    </button>
    <transition name="fade">
      <div
        v-show="active"
        class="dropdown__content"
        :class="[dropclasses, active ? 'is-open' : '']"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    classes: String,
    dropclasses: String,
    isactive: {
      type: Boolean,
      default: false,
    },
    title: String,
    triggerclasses: String,
  },
  data() {
    return {
      active: this.isactive,
    };
  },
};
</script>
