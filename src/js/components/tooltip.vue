<template>
  <div class="tooltip" :class="[classes]">
    <button aria-describedby="tooltip-desc" @click="toggle" class="tooltip__trigger" :class="[triggerclasses]">
      <svg role="img" class="pointer-events-none tooltip__icon" :class="[svgiconclasses]">
        <use :xlink:href="iconPath"></use>
      </svg>{{title}}
    </button>
    <transition name="fade">
      <div role="tooltip" id="tooltip-desc" v-if="isactive" class="tooltip__tip" :class="[tooltipclasses]">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Tooltip',
    props: {
      classes: String,
      svgicon: String,
      svgiconclasses: String,
      title: String,
      tooltipclasses: String,
      triggerclasses: String,
    },
    data() {
      return {
        iconpath: '',
        isactive: false,
      };
    },
    methods: {
      toggle() {
        this.isactive = !this.isactive;
      },
    },
    computed: {
      iconPath() {
        return '#' + this.svgicon;
      },
    }
  }
</script>
