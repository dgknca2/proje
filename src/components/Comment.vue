<template>
  <li class="comment">
    <div class="comment-left">
      <div class="comment-owner">
        <a href="#0" class="comment-username">dgknca</a>
        <span class="comment-date">2.11.2019 13:45</span>
      </div>
      <div class="comment-actions">
        <button class="button comment-btn">
          <span class="icon-wrap comment-btn__icon comment-btn__icon--flag">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#flag" />
            </svg>
          </span>
        </button>
        <button class="button comment-btn" :class="{active: isActive}" @click="likeComment">
          <span class="icon-wrap comment-btn__icon comment-btn__icon--like">
            <svg class="icon">
              <use xlink:href="assets/img/icons.svg#heart" />
            </svg>
          </span>
        </button>
        <span class="comment-like-count" v-show="likeCount">{{ likeCount }}</span>
      </div>
    </div>
    <div class="comment-text">
      <div class="comment-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio beatae quod maxime dignissimos officiis doloremque quis nulla provident fuga laudantium laborum odit nisi veritatis dolorem tempore explicabo nesciunt, temporibus
        sunt!
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.comment-btn {
  &.active {
    .comment-btn__icon--like {
      color: red;
    }
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      isActive: false,
      likeCount: 1,
      likeToggle: 0
    };
  },
  methods: {
    likeComment() {
      this.isActive = !this.isActive;

      if (this.likeToggle % 2 == 0) {
        this.likeCount++;
        this.likeToggle++;
      } else {
        this.likeCount--;
        this.likeToggle++;
      }
    }
  }
};
</script>