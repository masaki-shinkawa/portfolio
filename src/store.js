import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import Butter from "buttercms";
import config from "@/config";
export const butter = Butter(config.butter.key);

const firebaseConfig = {
  projectId: "m-shinkawa-portfolio",
  databaseURL: "https://m-shinkawa-portfolio.firebaseio.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: firebaseApp.firestore(),
    career: [],
    isSp: false,
    scrollY: 0,
    butter: null,
    blogPage: 1,
    blogList: {},
    openPost: {}
  },
  getters: {
    getCareer: state => {
      return state.career.timeline;
    },
    getSelfIntroduction: state => {
      return state.career.selfIntroduction;
    },
    blogPageLength: state => {
      return state.blogList.meta
        ? Math.ceil(state.blogList.meta.count / config.blog.pageSize)
        : 0;
    },
    getBlogList: state => {
      return state.blogList.data ? state.blogList.data : [];
    },
    previous_post_url: state => {
      return `/blog/detail/${state.openPost.meta.previous_post.slug}`;
    },
    next_post_url: state => {
      return `/blog/detail/${state.openPost.meta.next_post.slug}`;
    }
  },
  mutations: {
    ...vuexfireMutations,
    setButter(state, butter) {
      state.butter = butter;
    },
    setSp(state, isSp) {
      state.isSp = isSp;
    },
    setScrollY(state, scrollY) {
      state.scrollY = scrollY;
    },
    setBlogPage(state, { blogPage, blogList }) {
      state.blogPage = blogPage;
      state.blogList = blogList;
    },
    setOpenPost(state, openPost) {
      state.openPost = openPost;
    }
  },
  actions: {
    initialize: ({ commit }, butter) => {
      commit("setButter", butter);
    },
    setCareerBind: firestoreAction(async ({ bindFirestoreRef, state }) => {
      const ref = state.db.collection("profile");
      await bindFirestoreRef("career", ref.doc("career"));
    }),
    onResize: ({ commit }) => {
      commit("setSp", window.innerWidth < 960);
    },
    onScroll: ({ commit }) => {
      commit("setScrollY", window.scrollY);
    },
    async getPosts({ commit }, blogPage) {
      const res = await butter.post.list({
        page: blogPage,
        page_size: config.blog.pageSize
      });
      commit("setBlogPage", { blogPage, blogList: res.data });
    },
    async setPostNumber({ commit }, postNumber) {
      const openPost = await butter.post.retrieve(postNumber);
      commit("setOpenPost", openPost.data);
    }
  }
});
