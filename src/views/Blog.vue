<template>
  <v-layout justify-center align-center>
    <v-flex xs10 my-4>
      <template v-for="(post, index) in getBlogList">
        <router-link :key="index" :to="`/blog/detail/${post.slug}`">
          <v-card>
            <v-layout row wrap align-center>
              <v-flex sm1>
                <v-img
                  v-if="post.featured_image"
                  :src="post.featured_image"
                  aspect-ratio="1"
                />
              </v-flex>
              <v-flex sm11>
                <v-card-title>
                  <h2 class="title is-5">{{ post.title }}</h2>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </router-link>
      </template>
      <v-card>
        <v-card-text>
          <v-pagination
            v-model="blogPage"
            :length="blogPageLength"
          ></v-pagination>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import config from "@/config";
import { mapGetters } from "vuex";

export default {
  name: "blog-home",
  data() {
    return {
      page_title: "Blog",
      posts: [],
      categories: []
    };
  },
  computed: {
    ...mapGetters(["blogPageLength", "getBlogList"]),
    blogPage: {
      get() {
        return this.$store.state.blogPage;
      },
      set(blogPage) {
        this.$router.push({ path: `/blog/${blogPage}` });
        this.$store.dispatch("getPosts", blogPage);
      }
    },
    blogList() {
      return this.$store.store.blogList();
    }
  },
  created() {
    this.$store.dispatch(
      "getPosts",
      Number(this.$route.params.id || config.blog.defaultBlogPage)
    );
  }
};
</script>
