<script setup>
import microApp from '@micro-zoe/micro-app'

  const handleDataChange = (e) => {
    console.log('datachange', e.detail.data)
    console.log(microApp.router)
    
  }
</script>

<template>
  <div>
    <micro-app
      name="childHome"
      url="http://localhost:3000/childHome/"
      ssr
      iframe
      keep-alive
      @datachange="handleDataChange"
    ></micro-app>
    
  </div>
</template>

<style></style>
