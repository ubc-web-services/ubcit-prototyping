<template>
  <div
    v-cloak
    v-show="showToast"
    class="fixed flex flex-col-reverse toast"
  >
    <transition
      name="toaster"
      appear
    >
      <div class="shadow-lg toast__inner">
        <div role="alert" class="toast__body">
          <h2 class="mt-0 text-xl">{{ title }}</h2>
          <a
            :href="link"
            class="text-white underline hover--text-white hover--no-underline"
            @click="hideToast"
          >
            {{ text }}
          </a>
        </div>
        <button
          aria-label="close"
          class="toast__button"
          @click="hideToast"
        > &times;
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Simpletoast",
  props: {
    title: String,
    link: String,
    text: String,
  },
  data() {
    return {
      showToast: false,
    };
  },
  mounted () {
    if (
      document.cookie.split(";").some(function (item) {
        return item.trim().indexOf("hidetoast=") == 0;
})) {
      this.showToast = false;
    } else {
      this.showToast = true;
    }
  },
  methods: {
    hideToast() {
      this.showToast = false;
      document.cookie = "hidetoast=1";
    },
  },
};
</script>
