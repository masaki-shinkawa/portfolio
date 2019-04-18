<template>
  <footer>
    <v-layout row wrap>
      <v-layout justify-center>
        <div class="line" />
      </v-layout>
      <v-flex xs12>
        <v-layout justify-center>
          <a class="link--icon" href="https://www.adglobe.co.jp/">
            <v-icon>business</v-icon>
          </a>
          <a class="link--icon" href="mailto:masaki.shinkawa0303@gmail.com">
            <v-icon>email</v-icon>
          </a>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <p class="copylight">© 2019 · {{ username }} · ALL RIGHTS RESERVED</p>
      </v-flex>
    </v-layout>
  </footer>
</template>

<script>
import config from "@/config";

export default {
  data: () => {
    return {
      username: config.username
    };
  }
};
</script>

<style lang="scss" scoped>
.copylight {
  text-align: center;
  margin-top: 10px;
}
.link--icon {
  padding: 0 5px;
  text-decoration: none;
}
.line {
  width: 300px;
  border: solid 1px #328cc1;
  margin: 0 0 10px;
}
</style>
