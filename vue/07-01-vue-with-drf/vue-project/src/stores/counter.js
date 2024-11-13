import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 이 부분이 이제 빈 배열이 되어야 함
  // const articles = ref([
  //   { id: 1, title: 'article 1', content: 'content 1'},
  //   { id: 2, title: 'article 2', content: 'content 2'}
  // ])

  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'

  // action 1 DRF로 전체 게시글 요청을 보내고 응답을 받아 aritlces에 저장하는 함수
  // 화면에 마운트 되기 전에 배열을 채워야 함 (미리)
  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`
    })
      // res = response
      .then((res) => {
        // console.log(res)
        articles.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { articles, API_URL, getArticles }
}, { persist: true })
