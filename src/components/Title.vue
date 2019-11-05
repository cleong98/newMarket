<template>
  <v-col
    cols="12"
    class="white border-radius"
  >
    <h2 class="ml-2 font-weight-regular display-1 py-2">Categories Creation</h2>
    <v-divider></v-divider>
    <v-breadcrumbs
      :items="items"
      class="pb-0 pl-2 mt-3"
    >
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

  </v-col>

</template>
<script>
  export default {
    name: "Title",
    props: {
      title: {
        type: String,
        default: "Title"
      },
      items: {
        type: Array,
        required: true,
        default: [
          {
            text: "home",
            disabled: false,
            to: "/dashboard"
          }
        ]
      }
    }
  };
</script>
<style scoped>

</style>