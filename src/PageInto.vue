<template>
  <div>
    <Nav></Nav>
    <div class="page-wrapper">
      <Menu></Menu>
      <div class="content">
        <div class="question">
          <div class="question-container">
            <h1
              class="question-title"
            >Is it possible to set width of second child to the biggest one in a list of rows?</h1>
            <div class="question-content">
              <div class="shot">
                <div class="shot-container">
                  <div class="shot-img">
                    <img
                      src="https://cdn.dribbble.com/users/950018/screenshots/6745653/7-july-ui.gif"
                      alt
                      class="shot__img"
                    />
                  </div>
                </div>
                <div class="shot-infos">
                  <a
                    href="https://dribbble.com/shots/6745653-Simple-tab-bar"
                    class="shot__link"
                    target="_blank"
                  >
                    <img src="assets/img/dribbble.svg" alt class="shot__link__icon" />
                    <span data-id="0" class="shot__link__txt">Go to Dribbble shot</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="question-txt"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cupiditate nisi porro rem modi natus dolore laboriosam tempora atque molestias beatae debitis est magni molestiae aspernatur reprehenderit, inventore expedita! Distinctio!</div>
          </div>
          <Profile></Profile>
          <Comments></Comments>
        </div>
        <Answer></Answer>
      </div>
      <footer></footer>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Profile from "./Profile";
import Comments from "./Comments";
import Answer from "./Answer";
import Menu from "./Menu";

export default {
  components: {
    Profile: Profile,
    Comments: Comments,
    Menu: Menu,
    Answer: Answer
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>
