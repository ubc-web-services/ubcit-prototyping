<template>
  <div class="tabcordion">
    <div class="tabs tabcordion__tabs">
      <ul class="tabcordion__links">
        <li v-for="(tab, index) in tabs" class="tabcordion__tab" :class="{ 'is-active': tab.isActive }" @update-tab="selectTab(tab)" v-bind:key="index">
          <button :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</button>
        </li>
      </ul>
    </div>
    <div class="tabs-details tabcordion__content-wrapper text-formatted">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabs',
    data() {
      return {tabs: [] };
    },
    created() {
      this.tabs = this.$children;
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        });
      }
    }
  }
</script>
