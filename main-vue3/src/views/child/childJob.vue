<script setup>
// const mounted = () => {
//     const loading = document.getElementById('appLoading')
//     console.log('childJob mounted',loading)
//   }
</script>

<template>
  <div>
    <!-- <micro-app name="childJob" base-url="/childJob" @mounted="mounted"></micro-app> -->
    <micro-app name="childJob" url="http://localhost:8080" ></micro-app>
  </div>
</template>

<style></style>
