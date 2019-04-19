<template>
  <div>blog</div>
</template>

<script>
import Butter from "buttercms";
import config from "@/config";
export const butter = Butter(config.butter.key);

export default {
  created() {
    console.log("created");

    butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
      console.log(response);
    });
  }
};
</script>
