<template>
  <v-app v-resize="onResize">
    <common-header />
    <v-content>
      <v-layout v-scroll="onScroll">
        <transition mode="out-in">
          <router-view />
        </transition>
      </v-layout>
    </v-content>
    <common-footer />
  </v-app>
</template>

<script>
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";

export default {
  name: "App",
  components: {
    CommonHeader,
    CommonFooter
  },
  created() {
    this.$store.dispatch("setCareerBind");
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.$store.dispatch("onResize");
    },
    onScroll() {
      this.$store.dispatch("onScroll");
    }
  }
};
</script>

<style lang="scss">
.application {
  width: 100%;
}
.v-content {
  display: flex;
  justify-content: center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
