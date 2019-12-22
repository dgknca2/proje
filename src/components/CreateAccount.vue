<template>
  <div>
    <div class="overlay" :class="{ 'd-block': createAccountModal }" @click="sendToParent"></div>
    <div :class="{ 'd-block': createAccountModal }" class="modal login">
      <span class="close" @click="sendToParent">
        <svg height="9" fill="#686F75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
          <path d="M10 11a1 1 0 0 1-.73-.3L.3 1.76A1 1 0 0 1 1.76.3l8.94 8.94A1 1 0 0 1 10 11z" />
          <path d="M1 11a1 1 0 0 1-.7-1.76L9.24.3a1 1 0 0 1 1.46 1.46L1.76 10.7A1 1 0 0 1 1 11z" />
        </svg>
      </span>
      <div class="login-logo">
        <img src alt class="login-logo__img" />
      </div>
      <div class="login-title">Create Your Account</div>
      <form action>
        <label class="label-input">
          <span class="icon-wrap login-icon">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#user" />
            </svg>
          </span>
          <input type="text" class="login-input" placeholder="Full Name" required />
        </label>
        <label class="label-input">
          <span class="icon-wrap login-icon">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#at-sign" />
            </svg>
          </span>
          <input type="text" class="login-input" placeholder="Username" required />
        </label>
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
              <use xlink:href="assets/img/icons.svg#mail" />
            </svg>
          </span>
          <input type="email" class="login-input" placeholder="Repeat email address" required />
        </label>
        <label class="label-input">
          <span class="icon-wrap login-icon">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#lock" />
            </svg>
          </span>
          <input type="password" class="login-input" placeholder="Password" required />
        </label>
        <label class="label-input">
          <span class="icon-wrap login-icon">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#lock" />
            </svg>
          </span>
          <input type="password" class="login-input" placeholder="Repeat password" required />
        </label>
        <button class="button button--orange button--fw login-button">Create Account</button>
      </form>

      <div class="footer">
        <p>
          Already have an account?&nbsp;
          <br class="mobile-only" />
          <a href="#0" @click="ihaveanaccount">Log In</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  props: ["createAccountModal"],
  data: function() {},
  methods: {
    sendToParent() {
      this.createAccountModal = !this.createAccountModal;
      this.$emit("data", this.createAccountModal);
    },
    ihaveanaccount() {}
  }
};
</script>