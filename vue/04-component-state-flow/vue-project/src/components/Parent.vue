<template>
  <div>
    <ParentChild 
      my-msg="message" 
      :dynamic-props="name"
      @some-event="someCallback"
      @emit-args="getNumbers"
      @update-name="updateName"
    />
    <ParentItem 
      v-for="item in items"
      :key="item.id"
      :my-prop="item"
    />
  </div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue'
import ParentItem from '@/components/ParentItem.vue'
import { ref } from 'vue'

const name = ref('Alice')

const items = ref([
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' },
  { id: 3, name: '딸기' }
])

const someCallback = function () {
  console.log('자식 컴포넌트에서 발신한 이벤트를 수신했어요.')
}

const getNumbers = function (...args) {
  console.log(args)
  console.log(`자식 컴포넌트로 부터 데이터 ${args}를 받았습니다.`)
}

const updateName = function () {
  name.value = 'Bella'
}


</script>

<style scoped>

</style>
