<template>
  <v-container
    fluid
    class="pa-0 pt-1"
  >

    <top-nav />
    <drawer />

    <v-content>
      <v-row class=" mt-5 mx-11 d-flex justify-center">
        <router-view />
      </v-row>
    </v-content>

  </v-container>

</template>

<script>
  import topNav from "@/components/TopNav";
  import drawer from "@/components/Drawer";
  export default {
    name: "Admin",
    data() {
      return {};
    },
    components: {
      topNav,
      drawer
    },
    methods: {}
  };
</script>
<style scoped>

  
  </style>