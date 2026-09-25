<template>
  <div id="home" class="content">
    <img class="profile" src="https://github.com/Flemmli97.png" />
    <h1 class="title">Flemmli97</h1>
    <h1 class="subtitle">Software Developer & Minecraft Mod Dev</h1>
    <p class="intro">
      Welcome to my humble website. Feel free to look around here. This website serves both as a
      portfolio and a gateway to other services I have.
    </p>
    <p class="about">
      I'm Flemmli97 and I am a software developer and a minecraft mod developer. You might know some
      projects from me such as the Mob Battle Mod, Improved Mobs or the claiming mod FLAN. I started
      modding around 2016 and have been at it since. You can check out all my relevant projects
      under the Project page (or under my github).
    </p>
    <p class="ending">This website has been created using Vue.js</p>
  </div>
</template>

<style scoped>
#home {
  text-align: center;
  word-wrap: break-word;
  padding-top: 5vh;
}

.profile {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 5vh;
  border: 2px solid var(--color-primary);
}

.title {
  font-size: 40px;
  font-weight: 600;
}

.subtitle {
  font-size: x-large;
  font-weight: 500;
  font-style: italic;
}

.intro {
  margin: var(--margin-more);
}

.about {
  margin: var(--margin-more);
}
</style>
