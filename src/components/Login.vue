<template>
  <div>
    <div class="overlay" :class="{ 'd-block': loginModal }" @click="sendToParent"></div>
    <div :class="{ 'd-block': loginModal }" class="modal login">
      <span class="close" @click="sendToParent">
        <svg height="9" fill="#686F75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
          <path d="M10 11a1 1 0 0 1-.73-.3L.3 1.76A1 1 0 0 1 1.76.3l8.94 8.94A1 1 0 0 1 10 11z" />
          <path d="M1 11a1 1 0 0 1-.7-1.76L9.24.3a1 1 0 0 1 1.46 1.46L1.76 10.7A1 1 0 0 1 1 11z" />
        </svg>
      </span>
      <div class="login-logo">
        <img src alt class="login-logo__img" />
      </div>
      <div class="login-title">Login</div>
      <form action>
        <label class="label-input">
          <span class="icon-wrap login-icon">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#mail" />
            </svg>
          </span>
          <input type="email" class="login-input" placeholder="Email address" required />
        </label>
        <label class="label-input">
          <span class="icon-wrap login-icon">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#lock" />
            </svg>
          </span>
          <input type="password" class="login-input" placeholder="Password" required />
        </label>
        <button class="button button--orange button--fw login-button">Login</button>
        <label class="remember-me">
          <input type="checkbox" />
          <span class="checkbox-box"></span>
          <span class="remember-me__txt">Remember me</span>
        </label>
      </form>
      <div class="footer"></div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  props: ["loginModal"],
  data: function() {},
  methods: {
    sendToParent() {
      this.loginModal = !this.loginModal;
      this.$emit("data", this.loginModal);
    }
  }
};
</script>