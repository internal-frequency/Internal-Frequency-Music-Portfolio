<template>
  <div class="container">
    <nav class="nav">
      <!-- <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a>
       -->
      <!-- <a href="https://www.flaticon.com/free-icons/instagram-sketched" title="instagram sketched icons">Instagram sketched icons created by Pixel perfect - Flaticon</a> -->
      <!-- <a href="https://www.flaticon.com/free-icons/soundcloud" title="soundcloud icons">Soundcloud icons created by Pixel perfect - Flaticon</a> -->
      <div class="left">
        <a class="icons" href="https://www.facebook.com/InternalFrequency84"
          ><img class="icons-img" src="./assets/facebook.png" alt="facebook"
        /></a>
        <a class="icons" href="https://www.instagram.com/internalfrequency/">
          <img class="icons-img" src="./assets/instagram.png" alt="instagram"
        /></a>
        &nbsp;&nbsp;
        <a class="icons" href="https://soundcloud.com/internalfrequency">
          <img class="icons-img" src="./assets/soundcloud.png" alt="soundcloud"
        /></a>
      </div>

      <div class="center">
        <img class="logo" src="./assets/if-logo.png" alt="logo" />
      </div>
      <div class="right">
        <transition-group tag="ul" name="link" hover>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Music</router-link>

            &nbsp;&nbsp;
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/EPK">EPK</router-link>&nbsp;&nbsp;
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Merch">Merchandise</router-link
            >&nbsp;&nbsp;
          </li>
        </transition-group>
      </div>
    </nav>
    <!-- enables router -->
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <!-- Data binding of Component -->
        <component :is="Component"></component>
      </transition>
    </router-view>

    <div class="footer">
      <a class="nav-link" href="mailto:internalfrequency@gmail.com">Email</a>
      <p class="tag-line">Channeling the Frequencies of the Universe Through Sound</p>
      <p>Phone: 1-403-619-7348</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: right;
  height: inherit;
  width: inherit;
}

.container {
  background-image: url("./assets/hero-bg.png");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.nav {
  display: flex;
  justify-content: space-between;
}
.nav-link {
  text-decoration: none;
  transition: 0.4s ease;
}
.nav-link:hover {
  color: rgb(162, 100, 170);
}

h2 {
  font-size: 8ch;

  /* box-shadow: 2px 2px 10px 5px black;
  background-color: rgba(0, 0, 0, 0.582); */
}

h3 {
  margin: 40px 0 0;
}
.icons-img {
  width: 50px;
  height: 50px;
  display: inline-block;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}

.icons {
  width: 50px;
  height: 50px;
  padding-top: 15%;
  display: inline-block;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
}

.icons:hover {
  animation: bounce 0.4s cubic-bezier(0.59, -0.67, 0.24, 0.79) 2;
  animation-direction: alternate;
}

.nav-item:hover {
  text-decoration: underline;
  animation: bounce 0.4s cubic-bezier(0.59, -0.67, 0.24, 0.79) 2;
  animation-direction: alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
    transform: translateX(0);
  }
  100% {
    transform: translateY(-5px);
    transform: translateX(-5px);
  }
}

.logo {
  width: 250px;
  padding-left: 22%;
}

ul {
  list-style-type: none;
  padding-top: 2rem;
  padding-right: 0.5rem;
}
li {
  display: inline-block;
  margin: 40px;
}

a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1vw;
  transition: 0.4s ease;
}

.footer {
  color: white;
  justify-content: space-between;
  display: flex;
  padding-bottom: 1rem;
  padding-top: 2rem;
  padding-left: 2%;
  padding-right: 2%;
  box-shadow: 0px 0px 5px 1px rgb(128, 128, 128);
  background-color: rgb(0, 0, 0);
}

.tag-line {
  padding-left: 5%;
}

.nav-item {
  text-decoration: none;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  /* transform: translateX(50px); */
}
.route-enter-active {
  transition: ass 0.8s ease-out;
}

.route-leave-to {
  opacity: 0;
  /* transform: translateX(-50px); */
}

.route-leave-active {
  transition: all 0.8s ease-in;
}
</style>
