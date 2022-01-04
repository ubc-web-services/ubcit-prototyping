<template>
  <div
    class="disclose"
    :aria-expanded="active ? 'true' : 'false'"
    aria-haspopup="true"
  >
    <div :class="classes">
      <a
        :href="link"
        class="disclose__trigger"
        :aria-expanded="active ? 'true' : 'false'"
        :class="[triggerclasses, active ? 'is-open' : '']"
      >
        {{ title }}
      </a>
      <slot name="icon">
        <button
          class="js-reveal__trigger"
          aria-label="Dropdown toggle"
          @click.prevent="active = !active"
        >
          <svg
            aria-hidden="true"
            class="inline-block w-4 h-4 -mt-1 -ml-2 fill-current text-ubc-blue hover--text-ubc-blue-cobalt stroke-none"
          >
            <use :xlink:href="active ? '#icon-minus' : '#icon-plus'"></use>
          </svg>
        </button>
      </slot>
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
  name: "Disclose",
  props: {
    classes: String,
    contentclasses: String,
    isactive: {
      type: Boolean,
      default: false,
    },
    link: String,
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
