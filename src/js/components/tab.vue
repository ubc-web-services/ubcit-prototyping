<template>
  <div class="tabcordion__content-wrapper">
    <button
      class="tabcordion__heading"
      :class="{ 'is-active': isActive }"
      :href="href"
      @click="selectTab"
    >{{ name }}</button>
    <transition name="fade-alt">
      <div
        v-show="isActive"
        :id="id"
        class="tabcordion__content"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Tab",
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
    id() {
      return this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  mounted() {
    this.isActive = this.selected;
  },
  methods: {
    selectTab () {
      this.$emit("update-tab", (this.isActive = !this.isActive));
    },
  },
};
</script>
