<template>
  <div class="answers">
    <div class="answers-header">
      <div class="subheader answers-subheader">
        <h2 data-answercount="1">1 Answer</h2>
        <div>
          <div id="tabs">
            <a
              href="#0"
              title="Answers in the order they were provided"
              data-value="oldest"
              data-shortcut="O"
            >oldest</a>
            <a
              class="youarehere is-selected"
              href="#0"
              title="Answers with the highest score first"
              data-value="votes"
              data-shortcut="V"
            >votes</a>
          </div>
        </div>
      </div>
    </div>
    <div class="answer first">
      <div class="post-layout">
        <div class="votecell post-layout--left">
          <div class="js-voting-container d-flex fd-column ai-stretch">
            <button
              class="grid--cell c-pointer s-btn"
              title="This answer is useful"
              :class="{active: isLiked}"
              @click="like"
            >
              <span class="answer-like">
                <svg class="icon">
                  <use xlink:href="assets/img/icons.svg#heart" />
                </svg>
              </span>
            </button>
            <div class="like-count">{{ likeCount }}</div>
            <button
              class="grid--cell c-pointer s-btn"
              title="Click to accept this answer because it solved your problem or was the most helpful in finding your solution (click again to undo)"
              :class="{active: isAccepted}"
              @click="accept"
            >
              <span class="answer-accepted">
                <svg class="icon">
                  <use xlink:href="assets/img/icons.svg#check" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="answercell post-layout--right">
          <div class="post-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut eligendi libero vel cupiditate commodi quos unde sint iste. Obcaecati rerum vero ad beatae eaque ex quibusdam nulla totam fugiat.</p>
            <iframe
              height="600"
              style="width: 100%;"
              scrolling="no"
              title="Mobile Tab Bar Animation"
              src="https://codepen.io/dgknca/embed/preview/vYBPBjb?height=300&theme-id=35989&default-tab=html,result"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen
              <a href="https://codepen.io/dgknca/pen/vYBPBjb">Mobile Tab Bar Animation</a> by Doğukan Çavuş (
              <a href="https://codepen.io/dgknca">@dgknca</a>) on
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
        </div>
      </div>
      <div class="d-flex jc-end">
        <Profile></Profile>
      </div>
      <Comments></Comments>
    </div>
  </div>
</template>

<style lang="scss">
.hidden {
  visibility: hidden;
}
</style>

<script>
import Profile from "./Profile";
import Comments from "./Comments";

export default {
  components: {
    Profile: Profile,
    Comments: Comments
  },
  data() {
    return {
      isLiked: false,
      isAccepted: false,
      likeCount: 0,
      toggleLikeCount: 0
    };
  },
  methods: {
    like() {
      this.isLiked = !this.isLiked;

      if (!(this.toggleLikeCount % 2)) {
        this.likeCount++;
        this.toggleLikeCount++;
      } else {
        this.likeCount--;
        this.toggleLikeCount++;
      }
    },
    accept() {
      this.isAccepted = !this.isAccepted;
    }
  }
};
</script>