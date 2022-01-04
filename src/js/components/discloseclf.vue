<template>
  <div
    class="btn-group"
    :aria-expanded="active ? 'true' : 'false'"
    aria-haspopup="true"
    :class="[active ? 'open' : '']"
    @clickout="hide"
  >
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
        class="btn dropdown-toggle"
        data-toggle="dropdown"
        aria-label="Dropdown toggle"
        @click.prevent="active = !active"
      >
        <span class="ubc7-arrow blue down-arrow"></span>
      </button>
    </slot>
    <transition name="fade">
      <div
        v-if="active"
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
  name: "Discloseclf",
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
    }
  },
  methods: {
    hide() {
      this.active = false;
    },
  },
};
</script>
