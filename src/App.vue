<template>
  <v-app class="changeBg">

    <router-view />

    <!-- <router-view /> -->
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {};
    }
  };
</script>

<style scoped>

.changeBg {
  background: #f7f7f7 !important;
}
</style>