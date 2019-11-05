<template>
  <v-snackbar
    v-model="success"
    :color="color"
    :top="true"
    :timeout="timeout"
    class="white--text"
  >
    <v-row>
      <v-col cols="2">
        <v-icon class="white--text">
          {{ icon}}
        </v-icon>
      </v-col>
      <v-col cols="10">
        <span class="text-left">{{text}}</span>
      </v-col>
    </v-row>
  </v-snackbar>

</template>
<script>
  export default {
    name: "Snackbars",
    props: {
      success: {
        type: Boolean,
        require: true
      },
      color: {
        type: String
      },
      timeout: {
        type: Number,
        default: 5000
      },
      icon: {
        type: String,
        default: "mdi-check"
      },
      text: {
        type: String,
        default: "Halo"
      }
    }
  };
</script>
<style scoped>

</style>