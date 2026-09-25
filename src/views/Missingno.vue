<template>
  <div class="content">
    <h1 class="header">Ooops! Nothing here. Did you misstype or something?</h1>
    <p class="sub">Meanwhile you can look at this cat</p>
    <img src="@/assets/meow.jpeg" />
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  word-wrap: break-word;
  padding-top: 5vh;
  img {
    height: 500px;
  }
}

.header {
  font-weight: 600;
}

.sub {
  font-size: x-large;
  font-weight: 500;
  font-style: italic;
}
</style>
