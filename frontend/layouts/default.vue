<template>
  <div class="container">
    <Header />
    <main><slot /></main>
    <Footer />
  </div>
</template>


<style lang="scss" scoped>
.container {
  max-width: 1280px;
  width: 100%;
  margin: auto;
}
</style>
