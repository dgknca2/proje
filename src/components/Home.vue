<template>
  <div class="grid">
    <div class="cell" v-for="(item,index) in imgArray" v-bind:key="item + index">
      <div class="border" :style="'background-image:url(' + item + ')'"></div>
      <div class="cont">
        <div class="card">
          <div class="card-img">
            <img alt class="card__img" :src="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArray: [
        "https://cdn.dribbble.com/users/414694/screenshots/8424211/shot_2x.png",
        "https://cdn.dribbble.com/users/414694/screenshots/5449131/shot.gif",
        "https://cdn.dribbble.com/users/1811807/screenshots/7705471/media/828c314b7390e94f0cedc482240e8590.gif",
        "https://cdn.dribbble.com/users/4149933/screenshots/8197731/media/06efadcb54a98d5040114eb2e4d86364.png",
        "https://cdn.dribbble.com/users/3528777/screenshots/8432601/media/219345c2e14bc53cc448880f222685ae.gif",
        "https://cdn.dribbble.com/users/3089969/screenshots/8397842/media/f19c57e6c1a498150080f01ba71346e1.gif",
        "https://cdn.dribbble.com/users/29348/screenshots/3297555/small.jpg",
        "https://cdn.dribbble.com/users/2627149/screenshots/8360275/media/356f847e2d82f38d172ef28b6191174b.gif",
        "https://cdn.dribbble.com/users/1709297/screenshots/5306470/1-_food_dribbble_shot_2x.png",
        "https://cdn.dribbble.com/users/1357768/screenshots/8432519/media/6682d1d5018cd6c72171bfaa6bd29e2a.gif",
        "https://cdn.dribbble.com/users/2062120/screenshots/7744886/media/63c3c49b909f2a0752db49f8038f5659.png",
        "https://cdn.dribbble.com/users/638037/screenshots/8372313/media/26d077e27204c52fa06f2d28412462ba.gif",
        "https://cdn.dribbble.com/users/108183/screenshots/3844909/switcher_on_off.gif",
        "https://cdn.dribbble.com/users/898669/screenshots/6982196/ipad.png",
        "https://cdn.dribbble.com/users/4051761/screenshots/8193680/media/0353ced9ab66e4f170f7020d5b9530a5.png",
        "https://cdn.dribbble.com/users/914722/screenshots/6681943/quzi-app-ui_2x.png",
        "https://cdn.dribbble.com/users/950018/screenshots/6720007/1-july-ui.gif",
        "https://cdn.dribbble.com/users/3131039/screenshots/7175941/media/64e3b6974af5ee1c0350553fd2b4d694.jpg",
        "https://cdn.dribbble.com/users/108183/screenshots/4273389/menu_by_volorf.gif",
        "https://cdn.dribbble.com/users/298809/screenshots/2533187/800.png",
        "https://cdn.dribbble.com/users/259660/screenshots/3943794/book-detail.jpg",
        "https://cdn.dribbble.com/users/1051782/screenshots/4874485/bookshlef.jpg",
        "https://cdn.dribbble.com/users/806561/screenshots/7220968/media/7dd53dcf8cc25177ca7dad4580ccf991.jpg",
        "https://cdn.dribbble.com/users/2667384/screenshots/8384892/media/94a52f2f77c75f5ffc4b7d52b69ae90f.gif",
        "https://cdn.dribbble.com/users/1774675/screenshots/8297994/media/8fe64f17312e2d19b8231185e78c7a4f.gif",
        "https://cdn.dribbble.com/users/234397/screenshots/6196504/identyum_app3_2x.jpg",
        "https://cdn.dribbble.com/users/1841353/screenshots/8287344/media/eb7327e3db2df07481c30662225b596b.gif",
        "https://cdn.dribbble.com/users/642604/screenshots/8277519/media/aa7321768f6ea9da539a4b452dbf636d.gif",
        "https://cdn.dribbble.com/users/2466744/screenshots/5764833/__tabbar______.gif",
        "https://cdn.dribbble.com/users/191647/screenshots/3087466/recruitment.png",
        "https://cdn.dribbble.com/users/414694/screenshots/5487895/shot.gif",
        "https://cdn.dribbble.com/users/719258/screenshots/7834997/media/47fe065281255fdfe130c99e908e2165.png"
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.cell {
  width: calc(100% / 4 - 50px);
  height: 275px;
  margin: 0 25px 30px 25px;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
}

.border {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  filter: blur(2px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.cont {
  height: 100%;
  width: 100%;
  padding: 5px;
  position: relative;
  z-index: 2;
}

.card {
  height: 100%;
  width: 100%;
  border: 5px solid #f0f4f5;

  &-img {
    height: 100%;
    width: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;
    position: relative;
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>