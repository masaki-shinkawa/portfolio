<template>
  <v-layout justify-center align-center class="content">
    <v-flex xs10 my-4>
      <v-layout row wrap>
        <template v-for="(repo, i) in getRepositories">
          <v-flex xs12 md6 :key="i">
            <v-card>
              <v-card-title>
                <h3>{{ repo.name }}</h3>
                <v-img :src="repo.image" height="200px" width="100%" />
                <v-flex xs12>
                  <h6>公開日: {{ repo.publish }}</h6>
                </v-flex>
                <v-flex xs12>
                  <h6>
                    Web: <a target="_blank" :href="repo.url">{{ repo.url }}</a>
                  </h6>
                </v-flex>
                <v-flex xs12>
                  <h6>
                    Github:
                    <a target="_blank" :href="repo.github">{{ repo.github }}</a>
                  </h6>
                </v-flex>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>{{ repo.description }}</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-layout>
                  <v-flex>
                    <template v-for="(tec, i) in repo.technology">
                      <v-chip :key="i">{{ tec }}</v-chip>
                    </template>
                  </v-flex>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getRepositories"])
  },
  created() {
    console.log(this.getRepositories);
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  margin: 4px;
}
</style>
