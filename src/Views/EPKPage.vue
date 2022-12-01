<template>
  <div class="container">
    <div class="epk">
      <!-- demonstrate scope with class title -->
      <transition tag="img" name="list" appear>
        <div class="title">
          <h2>Electronic Press Kit</h2>
        </div>
      </transition>
      <br />
      <transition tag="img" name="list" appear>
        <img class="epk-png" src="../assets/If-epk.png" alt="epk" />
      </transition>
      <br />
      <transition tag="div" name="list" appear>
        <div class="button-container">
          <a
            href="https://drive.google.com/file/d/1h12VdXayPlAVCumkiFGloD_YKGbWLH-u/view?usp=share_link"
          >
            <button class="button">Download EPK</button>
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script></script>

<style>
.epk {
  padding-top: 5rem;
  text-align: center;
  color: white;
}

.epk-png {
  width: 1400px;
  box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.897);
}
.button-container {
  padding-top: 10px;
  padding-bottom: 30px;
  margin-right: 60%;
}
.button {
  font-size: 40px;
  background-color: rgba(0, 0, 0, 0.753);
  color: white;
  padding: 10px;

  border-radius: 10px;
  box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.897);
  cursor: pointer;
  transition: 0.3s;
  position: relative;
}

.button:hover {
  background-color: rgba(3, 49, 3, 0.877);
  color: white;
}

/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 2s ease;
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-leave-active {
  transition: all 2s ease;
}
</style>
