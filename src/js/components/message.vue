<template>
  <transition name="fade">
    <div class="message" role="status"
      aria-live="polite" :class="[classes]" v-if="isactive">
      <button class="close message__close"
      @click="close"><span class="visually-hidden">Close</span>×</button>
      <template v-if="svgicon">
        <svg role="presentation" class="pointer-events-none message__icon">
          <use :xlink:href="iconPath"></use>
        </svg>
      </template>
      <div class="message__content">
        <h4 class="mt-0">{{title}}</h4>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      classes: String,
      svgicon: String,
      title: String,
    },
    data() {
      return {
        iconpath: '',
        isactive: true,
      };
    },
    methods: {
      close() {
        this.isactive = false;
      },
    },
    computed: {
      iconPath() {
        return '#' + this.svgicon;
      },
    }
  }
</script>
