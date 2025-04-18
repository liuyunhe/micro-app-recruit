<script setup>
import ma from '@micro-zoe/micro-app'

ma.setGlobalData({
  name: 'childEnterprise'
})
const globalData = ma.getGlobalData()
ma.setData('childEnterprise', globalData) // 设置子应用数据(第二种方式)

const handleDataChange = (e) => {
  debugger
  let { activeIndex } = e.detail.data
  localStorage.setItem('activeIndex', activeIndex)
}

const unmount = () => {
  console.log('子应用卸载')
}
const afterhidden = () => {
  console.log('子应用隐藏')
}
const beforeshow = () => {
  console.log('子应用推入前台之前')
  const routeInfo = ma.router.current.get('childEnterprise')
  console.log(routeInfo)
}
const aftershow = () => {
  console.log('子应用推入前台')
}
</script>

<template>
  <div>
    <!-- <micro-app
     name="childEnterprise"
     :data="globalData"
     url="http://localhost:3002/child/findEnterprise#/"
     iframe>
    </micro-app> -->
    <!-- 第二种方式 -->
    <micro-app
      name="childEnterprise"
      url="http://localhost:3002/child/findEnterprise#/"
      @unmount="unmount"
      @afterhidden="afterhidden"
      @beforeshow="beforeshow"
      @aftershow="aftershow"
      @datachange="handleDataChange"
      iframe
    >
    </micro-app>
  </div>
</template>

<style></style>
