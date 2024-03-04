<template>
  <h1>Hello World from the Full-stack App</h1>
  <p>{{postMessage}}</p>
  <button @click.prevent="handleGetReq">Get</button>
  <button @click.prevent="handlePostReq">Post</button>
  <ul>
    <li class="list-item" v-for="item in apiData" :key="item.id">
      <p>id: {{item.id}}</p>
      <p>{{item.name}}</p>
    </li>
  </ul>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from "axios"

onMounted(() => {
  console.log(import.meta.env.VITE_API_URL, import.meta.env.MODE)
})

const baseApiUrl = import.meta.env.VITE_API_URL

const apiData = ref()
const postMessage = ref("")

const handleGetReq = () => {
  axios.get(baseApiUrl)
      .then(response => {
        apiData.value = response.data.data
      })
}

const handlePostReq = () => {
  axios.post(baseApiUrl, {
    body: 'some body data'
  })
      .then(response => {
        console.log(response.data)
        postMessage.value = response.data.message
      })
  handleGetReq()
}
</script>