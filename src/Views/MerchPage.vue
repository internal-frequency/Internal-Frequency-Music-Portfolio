<template>
  <div class="merch">
    <transition tag="img" name="con" appear>
      <img src="../assets/UnderConstruction.png" alt="underconstruction" />
    </transition>
  </div>
</template>

<script></script>

<style scoped>
.merch {
  justify-content: center;
  display: flex;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  padding-top: 5%;
}

img {
  box-shadow: 5px 5px 8px 5px rgba(19, 19, 19, 0.76);
  width: 100%;
  height: 100%;
}

/* list transitions */
.con-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.con-enter-to {
  opacity: 1;
  transform: scale(1);
}
.con-enter-active {
  transition: all 2s ease;
}

.con-leave-from {
  opacity: 1;
  transform: scale(1);
}
.con-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.con-leave-active {
  transition: all 2s ease;
}
</style>
