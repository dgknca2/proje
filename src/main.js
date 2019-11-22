import Vue from "vue";
import App from "./App.vue";
import PageInto from "./PageInto";
import Answer from "./components/Answer";
import Comment from "./components/Comment";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

Vue.component("Answer", Answer);
Vue.component("Comment", Comment);
Vue.component("Menu", Menu);
Vue.component("Nav", Nav);
Vue.component("Profile", Profile);

new Vue({
  el: "#app",
  render: h => h(App)
});

new Vue({
  el: "#page_into",
  render: h => h(PageInto)
});
