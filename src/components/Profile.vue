<template>
  <div class="profile">
    <div class="user-action-time">
      <a href="#0" class="started-link">
        Opened
        <span class="relativetime">7 mins ago</span> by:
      </a>
    </div>
    <div class="profile__user-cont">
      <div class="d-flex">
        <div class="profile-img">
          <img
            src="https://www.gravatar.com/avatar/20e83447969ece90aaabc36feead417f?s=64&d=identicon&r=PG&f=1"
            class="profile-img__img"
          />
        </div>
        <div>
          <div class="d-flex ai-center">
            <span class="profile__icon badge">
              <svg class="icon">
                <use xlink:href="assets/img/icons.svg#award" />
              </svg>
            </span>
            <span class="profile__txt">5.478</span>
          </div>
          <div class="d-flex ai-center mt-10">
            <span class="profile__icon accepted">
              <svg class="icon">
                <use xlink:href="assets/img/icons.svg#check" />
              </svg>
            </span>
            <span class="profile__txt">234</span>
          </div>
        </div>
      </div>
      <a href="./profile.html" class="profile-username">dgknca</a>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {};
</script>