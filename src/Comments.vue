<template>
  <div class="comments">
    <ul class="comments-list">
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </ul>
    <div class="add-comment">
      <a
        href="#0"
        class="add-comment-btn"
        :class="{'d-none': isOpen}"
        @click="openCommentBox"
      >Add a comment</a>
      <div class="add-comment-cont" :class="{'d-block': isOpen}">
        <textarea class="add-comment-box" placeholder="Enter at least 10 characters"></textarea>
        <button class="button button--white comment-send">Add comment</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Comment from "./Comment";

export default {
  components: {
    Comment: Comment
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openCommentBox() {
      this.isOpen = true;
    }
  }
};
</script>