<template>
  <div class="tabcordion" :class="classes">
    <ul class="tabcordion__links">
      <li
        class="tabcordion__tab"
        v-for="tab in tabs"
        :key="tab"
        v-bind:class="{
          'is-active': activeTab === tab
        }"
        v-on:click="switchTab(tab);"
      >
        <button><slot :name="tabHeadSlotName(tab)">{{ tab }}</slot></button>
      </li>
    </ul>
    <div class="tabcordion__content-wrapper text-formatted">
      <div v-for="tab in tabs"
        :key="tab">
        <button
          class="tabcordion__heading"
          v-bind:class="{
            'is-active': activeTab === tab
          }"
          :id="tab"
          v-on:click="switchTab(tab);"
          v-scroll-to="{ el: '#' + tab, offset: -2 }">
          <slot :name="tabHeadSlotName(tab)">{{ tab }}</slot>
        </button>
        <div class="tabcordion__content" v-bind:class="{
            'hidden': activeTab != tab }">
          <slot :name="tabPanelSlotName"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tabcordion',
    props: {
      initial: String,
      tabs: Array,
      classes: String,
    },
    data() {
      return {
        activeTab: this.initial,
      };
    },
    computed: {
      tabPanelSlotName() {
        return `tab-panel-${this.activeTab}`;
      }
    },
    methods: {
      tabHeadSlotName(tabName) {
        return `tab-head-${tabName}`;
      },
      switchTab(tabName) {
        this.activeTab = tabName;
      },
    }
  }
</script>
