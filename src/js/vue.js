/* Import Vue */
import Vue from "vue";

/* Import libraries */
import ClickoutEvent from "clickout-event";
import VueScrollto from "vue-scrollto";
import SlideUpDown from "vue-slide-up-down";
import VueTinySlider from "vue-tiny-slider";

/* Import custom components globally */
import Accordion from "./components/accordion.vue";
import Disclose from "./components/disclose.vue";
import Discloseclf from "./components/discloseclf.vue";
import Disclosebutton from "./components/disclosebutton.vue";
import Dropdown from "./components/dropdown.vue";
import Stickynav from "./components/stickynav.vue";
import Tab from "./components/tab.vue";
import Tabcordion from "./components/tabcordion.vue";
import Tabs from "./components/tabs.vue";

/* Declare global components */
Vue.component("SlideUpDown", SlideUpDown);
Vue.component("Accordion", Accordion);
Vue.component("Disclose", Disclose);
Vue.component("Discloseclf", Discloseclf);
Vue.component("Disclosebutton", Disclosebutton);
Vue.component("Dropdown", Dropdown);
Vue.component("Stickynav", Stickynav);
Vue.component("Tab", Tab);
Vue.component("Tabcordion", Tabcordion);
Vue.component("Tabs", Tabs);
Vue.component("TinySlider", VueTinySlider);

/* Declare plugins */
Vue.use(VueScrollto);

/* Adjust Vue settings */
Vue.config.productionTip = false;

/* Add global filters */
Vue.filter("round", function(value) {
  value = Math.round(value * 10) / 10;
  return value;
});

Vue.filter("dashSeparated", function(value) {
  if (value) {
    return value.replace(/\s+/g, "-");
  }
});

Vue.filter("lowercase", function(value) {
  return value.toLowerCase();
});

/* Declare main Vue instance */
const maincontent = new Vue({
  el: "#main-content",
  delimiters: ["<%", "%>"],
  data() {
    return {
      showSearch: false,
      showMobileNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
    }
  }
});
