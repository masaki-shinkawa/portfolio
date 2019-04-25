import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Blog from "./views/Blog.vue";
import BlogDetail from "./views/BlogDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/blog/:id",
      name: "BlogId",
      component: Blog
    },
    {
      path: "/blog/detail/:id",
      name: "BlogDetail",
      component: BlogDetail
    }
  ]
});
