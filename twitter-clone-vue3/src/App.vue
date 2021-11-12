<template>
  <div class="flex h-screen container mx-auto">
    <!-- side section(1/4) -->
    <Side></Side>
    <!-- main & trend section  -->
    <div class="flex-1">
      <div class="flex h-screen">
        <!-- main section -->
        <Main></Main>
        <!-- trend section -->
        <Trends></Trends>
      </div>
    </div>
  </div>
</template>

<script>
import Side from './components/Side.vue'
import Main from './components/Main.vue'
import Trends from './components/Trends.vue';

export default {
  components: {
    Side,
    Main,
    Trends,
  },
  setup() {

  },
};
</script>

<style></style>