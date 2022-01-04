<template>
  <div
    class="tabcordion"
    :class="classes"
  >
    <ul class="tabcordion__links">
      <li
        v-for="tab in tabs"
        :key="tab"
        class="tabcordion__tab"
        :class="{
          'is-active': activeTab === tab,
        }"
        @click="switchTab(tab);"
      >
        <button>
          <slot :name="tabHeadSlotName(tab)">
            {{ tab }}
          </slot>
        </button>
      </li>
    </ul>
    <div class="tabcordion__content-wrapper text-formatted">
      <div
        v-for="tab in tabs"
        :key="tab"
      >
        <button
          :id="tab"
          v-scroll-to="{ el: '#' + tab, offset: -2 }"
          class="tabcordion__heading"
          :class="{
            'is-active': activeTab === tab
          }"
          @click="switchTab(tab);"
        >
          <slot :name="tabHeadSlotName(tab)">
            {{ tab }}
          </slot>
        </button>
        <div
          class="tabcordion__content"
          :class="{
            'hidden': activeTab != tab }"
        >
          <slot :name="tabPanelSlotName"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabcordion",
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
  },
};
</script>
