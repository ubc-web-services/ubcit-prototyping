<template>
  <div
    class="disclosebutton"
    :aria-expanded="active ? 'true' : 'false'"
    aria-haspopup="true"
  >
    <div :class="classes">
      <button
        class="disclose__trigger"
        :aria-expanded="active ? 'true' : 'false'"
        :class="[triggerclasses, active ? 'is-open' : '']"
        aria-label="Dropdown toggle"
        @click.prevent="active = !active"
      >
        {{ title }}
        <slot name="icon">
          <svg
            aria-hidden="true"
            class="self-center flex-none inline-block w-3 h-3 fill-current unit-button__icon stroke-none"
          >
            <use :xlink:href="active ? '#icon-minus' : '#icon-plus'"></use>
          </svg>
        </slot>
      </button>
    </div>
    <transition name="fade">
      <div
        v-show="active"
        class="disclose__content"
        :class="[contentclasses, active ? 'is-open' : '']"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Closebutton",
  props: {
    classes: String,
    contentclasses: String,
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
