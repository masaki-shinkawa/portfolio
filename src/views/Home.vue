<template>
  <v-layout row wrap>
    <v-parallax :src="home.background" height="700">
      <v-layout align-center column justify-center>
        <h1 class="display-2 mb-3">{{ username }}</h1>
        <h4 class="subheading">Front End Engineer</h4>
      </v-layout>
    </v-parallax>
    <v-flex xs12 md10 offset-md1>
      <v-layout row wrap>
        <v-flex class="fade" :class="getFade" xs12 md4>
          <img class="fade--image" :src="home.profile" />
          <router-link class="fade--title" to="/profile">Profile</router-link>
        </v-flex>
        <v-flex class="fade" :class="getFade" xs12 md4>
          <img class="fade--image" :src="home.production" />
          <router-link class="fade--title" to="/production"
            >Production</router-link
          >
        </v-flex>
        <v-flex class="fade" :class="getFade" xs12 md4>
          <img class="fade--image" :src="home.blog" />
          <router-link class="fade--title" to="/blog">Blog</router-link>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import { home } from "@/consts/image.js";
import config from "@/config";

export default {
  data: () => {
    return {
      home,
      username: config.username
    };
  },
  computed: {
    ...mapState(["scrollY"]),
    getFade() {
      return this.scrollY > window.outerHeight - window.innerHeight
        ? "fadein"
        : "fadeout";
    }
  }
};
</script>

<style lang="scss" scoped>
.v-parallax {
  width: 100%;
  height: 100vh !important;
}
.fade {
  transition: all 0.5s;

  &--title {
    font-size: 24px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
    transition: all 0.5s;
    opacity: 0;
    transform: scaleY(0);
  }

  .fade--image {
    width: 100%;
    transition: all 0.5s;
  }

  &:hover {
    .fade--image {
      filter: blur(2px) brightness(50%);
    }
    .fade--title {
      opacity: 1;
      transform: scaleY(1);
    }
  }
}
.fadeout {
  opacity: 0;
  transform: translateY(-100px);
}
.fadein {
  opacity: 1;
  transform: translateY(-50px);
}
</style>
