<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'hello text'
  }
})

const { text } = toRefs(props)
console.log('text prop：', text.value);
</script>

<template>
  <h2>{{ text }}</h2>
</template>