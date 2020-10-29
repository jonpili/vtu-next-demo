<template>
  <div class="hello">
    <h3>Contain Test</h3>
    <ul>
      <li>{{ string }}</li>
      <li>{{ integer }}</li>
      <li>{{ float }}</li>
    </ul>
    <h3>Click Test</h3>
    <button @click="say">say</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      string: "smartcamp",
      integer: 100,
      float: 0.1
    };
  },
  methods: {
    say() {
      this.$emit('say')
    }
  }
});
</script>
