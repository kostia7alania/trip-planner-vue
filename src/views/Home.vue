<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div class="wrapper">
      <Places />
      <Countries />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Places: () => import('@/components/Places'),
    Countries: () => import('@/components/Countries')
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100px;
}
</style>