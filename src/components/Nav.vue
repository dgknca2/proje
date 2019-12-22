<template>
  <div>
    <nav class="nav">
      <a href="./index.html" class="logo">
        <img src="./../assets/img/logo.png" alt="Logo" class="logo__img" />
      </a>
      <div class="search-box">
        <input type="text" placeholder="Write something" class="search-input" />
        <span class="search-icon">
          <svg class="icon">
            <use xlink:href="assets/img/icons.svg#search" />
          </svg>
        </span>
      </div>
      <div class="nav-right">
        <a href="#0" class="button button--white" @click="loginModal = !loginModal">
          <span class="button__wrp">
            <span class="button__txt">Log in</span>
          </span>
        </a>
        <a
          href="#0"
          class="button button--orange"
          @click="createAccountModal = !createAccountModal"
        >
          <span class="button__wrp">
            <span class="button__txt">Create Account</span>
          </span>
        </a>
        <a href="#0" class="button button--green">
          <span class="button__wrp">
            <span class="button__txt">Share a Post</span>
          </span>
        </a>
      </div>
    </nav>
    <CreateAccount @data="createAccountModal = $event" :createAccountModal="createAccountModal"></CreateAccount>
    <Login @data="loginModal = $event" :loginModal="loginModal"></Login>
  </div>
</template>

<style lang="scss">
</style>

<script>
import CreateAccount from "./CreateAccount";
import Login from "./Login";

export default {
  components: {
    CreateAccount: CreateAccount,
    Login
  },
  data: function() {
    return {
      createAccountModal: false,
      loginModal: false
    };
  },
  methods: {}
};
</script>