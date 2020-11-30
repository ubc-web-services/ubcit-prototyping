<template>
  <div class="accordion" :class="classes" :id="id">
    <div class="accordion__heading" :class="headingclasses">
      <button class="accordion__trigger" :aria-expanded="active ? 'true' : 'false'" :class="{ 'is-open': active }" @click.prevent="active = !active">{{title}}</button>
    </div>
    <transition name="fade">
      <div class="accordion__content text-formatted" :class="{ 'is-open': active }" v-show="active">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
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
      }
    }
  }
</script>

<style scoped>

</style>
