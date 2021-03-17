<template lang="pug">
div
  button(@click='decrement') -
  span {{ count }}
  button(@click='increment') +
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
    })
    const count = computed(() => state.count)

    return {
      count,
      increment() {
        state.count += 1
      },
      decrement() {
        state.count -= 1
      },
    }
  },
})
</script>
