<template>
  <nav
    :id="[id]"
    :class="[classes, scrolled ? 'stickynav--unpinned' : 'stickynav--pinned']"
    class="stickynav"
  >
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "Stickynav",
  props: {
    classes: String,
    id: String,
  },
  data() {
    return {
      lastPosition: 0,
      limitPosition: 175,
      scrolled: false,
      offset: 50,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        // move up
        this.scrolled = true;
      }
      if (this.lastPosition > (window.scrollY + this.offset)) {
        // move down
        this.scrolled = false;

      }
      this.lastPosition = window.scrollY;
    },
  },
};
</script>
