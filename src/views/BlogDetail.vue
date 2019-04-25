<template>
  <v-layout justify-center align-center class="content">
    <v-flex xs10 my-4>
      <v-flex xs2 mb-2>
        <router-link to="/blog" class="blog__paging">
          <v-layout align-center>
            <v-icon>keyboard_arrow_left</v-icon>
            Topへ戻る
          </v-layout>
        </router-link>
      </v-flex>
      <template v-if="openPost.data">
        <v-card>
          <v-card-title>
            <v-layout raw wrap>
              <v-flex xs12>
                <h1>{{ openPost.data.title }}</h1>
              </v-flex>
              <v-flex xs12>
                <h6 class="text-xs-right">
                  更新日時: {{ openPost.data.published }}
                </h6>
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <div class="content" v-html="openPost.data.body"></div>
          </v-card-text>
        </v-card>
      </template>
      <template v-if="openPost.meta">
        <v-layout my-4 align-center>
          <v-flex xs5 class="text-xs-left" @click="getBlog">
            <template v-if="openPost.meta.previous_post">
              <router-link :to="previous_post_url" class="blog__paging">
                <v-layout row wrap align-center>
                  <v-flex xs1>
                    <v-icon>keyboard_arrow_left</v-icon>
                  </v-flex>
                  <v-flex xs11>
                    <span>{{ openPost.meta.previous_post.title }}</span>
                  </v-flex>
                </v-layout>
              </router-link>
            </template>
          </v-flex>
          <v-flex xs5 offset-xs2 class="text-xs-right" @click="getBlog">
            <template v-if="openPost.meta.next_post">
              <router-link :to="next_post_url" class="blog__paging">
                <v-layout row wrap align-center>
                  <v-flex xs11>
                    <span>{{ openPost.meta.next_post.title }}</span>
                  </v-flex>
                  <v-flex xs1>
                    <v-icon>keyboard_arrow_right</v-icon>
                  </v-flex>
                </v-layout>
              </router-link>
            </template>
          </v-flex>
        </v-layout>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-gist.css";
hljs.registerLanguage("javascript", javascript);

export default {
  computed: {
    ...mapState(["openPost"]),
    ...mapGetters(["previous_post_url", "next_post_url"])
  },
  methods: {
    async getBlog() {
      document.scrollingElement.scrollTop = 0;
      await this.$store.dispatch("setPostNumber", this.$route.params.id);
      for (const block of document.querySelectorAll(
        "pre.language-javascript code"
      )) {
        hljs.highlightBlock(block);
      }
    }
  },
  async created() {
    this.getBlog();
  }
};
</script>

<style lang="scss" scoped>
.content {
  h2 {
    padding: 10px 0;
  }
}
.blog__paging {
  text-decoration: none;
}
.content {
  scroll-behavior: smooth;
}
</style>
<style lang="scss">
img {
  width: 100%;
}
</style>
