<template>
  <div>
    <Nav></Nav>
    <div class="page-wrapper">
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Nav from "./components/Nav";

export default {
  components: {
    Menu: Menu,
    Nav: Nav
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
</style>