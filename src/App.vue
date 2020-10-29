<template>
  <div>
    <h2>Vue 3 + TypeScript + Jest</h2>
    <Hello @say="say" />
    Message: {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from './Hello.vue'

export default defineComponent({
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    say() {
      this.msg = 'わーい'
    }
  }
})
</script>
