<template>
  <div>
    <nav class="nav">
      <div class="logo">
        <img src="./../assets/img/logo.png" alt="Logo" class="logo__img" />
      </div>
      <div class="search-box">
        <input type="text" placeholder="Write something" class="search-input" />
        <span class="search-icon">
          <svg class="icon">
            <use xlink:href="assets/img/icons.svg#search" />
          </svg>
        </span>
      </div>
      <div class="nav-right">
        <a href="#0" class="button button--white">
          <span class="button__wrp">
            <span class="button__txt">Log in</span>
          </span>
        </a>
        <a href="#0" class="button button--orange" @click="loginModal = !loginModal">
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
    <CreateAccount @data="loginModal = $event" :loginModal="loginModal"></CreateAccount>
  </div>
</template>

<style lang="scss">
</style>

<script>
import CreateAccount from "./CreateAccount";

export default {
  components: {
    CreateAccount: CreateAccount
  },
  data: function() {
    return {
      loginModal: false
    };
  },
  methods: {
    // openCommentBox() {
    //   event.target.classList.add("d-none");
    //   event.target.nextElementSibling.classList.add("d-block");
    // }
  }
};
</script>