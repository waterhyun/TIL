<template>
  <div>
    <p>{{ myMsg }}</p>
    <button @click="ssafy">이름 변경!</button>
  </div>
</template>

<script setup>
defineProps({
  myMsg: String
})

const emit = defineEmits(['updateName'])

const ssafy = function () {
  emit('updateName')
}

</script>

<style scoped>

</style>
