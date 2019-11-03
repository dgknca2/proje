import Vue from "vue";
import App from "./App.vue";
import PageInto from "./PageInto";
import Answer from "./Answer";
import Comment from "./Comment";
import Menu from "./Menu";
import Nav from "./Nav";
import Profile from "./Profile";

Vue.component("Page-Into", PageInto);
Vue.component("Answer", Answer);
Vue.component("Comment", Comment);
Vue.component("Menu", Menu);
Vue.component("Nav", Nav);
Vue.component("Profile", Profile);

new Vue({
  el: "#app",
  render: h => h(App)
});
