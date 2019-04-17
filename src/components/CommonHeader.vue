<template>
  <div>
    <v-toolbar app height="64">
      <v-toolbar-side-icon
        v-if="isSp"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Portfolio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(item, i) in items">
          <v-btn :key="i" flat @click="clickMenu(item.path)">
            {{ item.title }}
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="images.avatar" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <!-- <v-list-tile-title>@NicoShioSaba</v-list-tile-title> -->
            <v-list-tile-title>Masaki Shinkawa</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="clickMenu(item.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { routeItems } from "@/consts/route.js";
import { avatar } from "@/consts/image.js";

export default {
  data() {
    return {
      drawer: null,
      items: routeItems,
      images: { avatar }
    };
  },
  computed: {
    ...mapState(["isSp"])
  },
  methods: {
    clickMenu(path) {
      this.$router.push({ path });
    }
  }
};
</script>
