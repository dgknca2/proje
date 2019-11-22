<template>
  <div>
    <Nav></Nav>
    <div class="page-wrapper">
      <Menu></Menu>
      <Home></Home>
      <div class="infinite shot-grid-width" style="display: block;">
        <a href="#" class="form-btn load-more">Load more…</a>
      </div>
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
.infinite {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 50px;
}

.load-more {
  display: block;
  margin: 0 auto;
  padding: 15px 12px;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>