<template>
  <a href="./page-into.html" class="grid">
    <div class="cell" v-for="(item,index) in imgArray" v-bind:key="item.title + index">
      <div class="border" :style="'background-image:url(' + item.img + ')'"></div>
      <div class="cont">
        <div class="card">
          <div class="card-img">
            <img alt class="card__img" :src="item.img" />
          </div>
          <div class="infos">
            <div>
              <h2 class="card-title">{{item.title}}</h2>
              <p class="date">{{ item.date }}</p>
            </div>
            <div>
              <a href="#0" class="card-btn expand">Expand</a>
              <a href="#0" class="card-btn goto">Go to page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      imgArray: [
        {
          img:
            "https://cdn.dribbble.com/users/414694/screenshots/8424211/shot_2x.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/414694/screenshots/5449131/shot.gif",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/4149933/screenshots/8237323/media/f03dd64ce6e202f9319470b5fd13d06e.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/4149933/screenshots/8197731/media/06efadcb54a98d5040114eb2e4d86364.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/8303005/media/6513be0f9215f4285d8fd0ccce2d9af7.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/8141450/media/fcf9fe44dd839c3a05f0282474ec1a22.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/29348/screenshots/3297555/small.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/8086363/media/62d7cb6ffed38907fa80fbf03b8f0277.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/1709297/screenshots/5306470/1-_food_dribbble_shot_2x.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/1357768/screenshots/8432519/media/6682d1d5018cd6c72171bfaa6bd29e2a.gif",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/7744886/media/63c3c49b909f2a0752db49f8038f5659.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/638037/screenshots/8372313/media/26d077e27204c52fa06f2d28412462ba.gif",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2530474/screenshots/7992101/media/c136b9b1b6e3c17f52b5f6de35a9de67.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/898669/screenshots/6982196/ipad.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/4051761/screenshots/8193680/media/0353ced9ab66e4f170f7020d5b9530a5.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/914722/screenshots/6681943/quzi-app-ui_2x.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2255641/screenshots/7819590/media/7f439db9d918f040d38c6017b445d450.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/3131039/screenshots/7175941/media/64e3b6974af5ee1c0350553fd2b4d694.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/108183/screenshots/4273389/menu_by_volorf.gif",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/298809/screenshots/2533187/800.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/259660/screenshots/3943794/book-detail.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/1051782/screenshots/4874485/bookshlef.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/806561/screenshots/7220968/media/7dd53dcf8cc25177ca7dad4580ccf991.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/7522832/media/449cef04c3aa38d9eaccc19515800720.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/7717293/media/4e62a6f69585da3147f4ddd08fcdebf9.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/234397/screenshots/6196504/identyum_app3_2x.jpg",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/883236/screenshots/7277852/media/cc933053f7e5e40c70227a2a2d260d9b.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/7337813/media/ce100f356861fe4c1638613d94c897a6.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/883236/screenshots/7434211/media/6109a8763c973f5e3c0d5e586ff928eb.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/191647/screenshots/3087466/recruitment.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/2062120/screenshots/7597905/media/a2aa343a5d0365c1d6988e5c938dbfc1.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        },
        {
          img:
            "https://cdn.dribbble.com/users/719258/screenshots/7834997/media/47fe065281255fdfe130c99e908e2165.png",
          title: "Smoke Slider",
          date: "November 12, 2019"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.infos {
  display: flex;
  position: absolute;
  left: 0;
  bottom: -50px;
  width: 100%;
  background: #fff;
  padding: 0 10px;
  will-change: transition;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  height: 50px;

  div {
    display: flex;
    height: 100%;
    flex: 1;
  }

  div:nth-child(1) {
    flex-direction: column;
    justify-content: center;
  }
  div:nth-child(2) {
    flex-direction: row;
    align-items: center;
  }
}

.card:hover .infos {
  bottom: 0;
}

.card-title {
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3em;
  color: #333;
  margin: 0 0 2px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.date {
  font-size: 12px;
  line-height: 1em;
  color: #999;
  font-weight: 500;
  padding: 0;
  margin: 0;
}

.card-btn {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  border: none;
  text-decoration: none;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  padding: 6px 10px;
  margin: 0;
  margin-left: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.07);
  color: #757575;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 0 1px #bbb, 0 1px 2px rgba(0, 0, 0, 0.07);
  }
}

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