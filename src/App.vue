<template>
  <div>
    <Nav></Nav>
    <div class="page-wrapper">
      <Menu></Menu>
      <Home></Home>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Home from "./components/Home";

export default {
  components: {
    Menu: Menu,
    Nav: Nav,
    Home: Home
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
</style>