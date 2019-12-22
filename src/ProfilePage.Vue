<template>
  <div>
    <Nav></Nav>
    <div class="page-wrapper">
      <div class="content"></div>
    </div>
  </div>
</template>


<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav: Nav
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding-left: 0;
}
</style>