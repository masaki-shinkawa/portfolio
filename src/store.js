import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import { vuexfireMutations, firestoreAction } from "vuexfire";

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
    butter: null
  },
  getters: {
    getCareer: state => {
      return state.career.timeline;
    },
    getSelfIntroduction: state => {
      return state.career.selfIntroduction;
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
    }
  }
});
