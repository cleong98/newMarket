<template>
  <v-app-bar
    app
    class="primary border-radius mx-2 mt-2"
    flat
    fixed
  >
    <v-app-bar-nav-icon
      @click="onShow"
      class="white--text"
    ></v-app-bar-nav-icon>

    <v-spacer v-show="hide"></v-spacer>

    <v-toolbar-title
      v-show="hide"
      class="white--text  font-weight-bold "
    >
      Admin
    </v-toolbar-title>
    <v-spacer v-show="hide"></v-spacer>

    <v-btn
      class="mt-0"
      text
      icon
      @click="hide = false"
    >
      <v-icon
        v-if="!searching"
        class="white--text"
      >mdi-magnify</v-icon>
      <v-progress-circular
        v-else
        indeterminate
        class="white--text"
      ></v-progress-circular>

    </v-btn>
    <template>

      <v-text-field
        class="mt-5 "
        v-show="!hide"
        label="searching something"
        single-line
        color="white"
        @keyup.enter.native="onEnter"
        @input="onInsert"
        v-model="searchData"
        @keyup.delete.native="onDel"
      >
        <v-btn
          text
          icon
          slot="append"
          @click="onExit"
        >
          <v-icon class="white--text">mdi-close</v-icon>
        </v-btn>
      </v-text-field>
    </template>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          icon
          v-on="on"
          v-show="hide"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Test</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: "TopNav",
    data() {
      return {
        // mini: false,
        // show: true,

        hide: true,
        searching: false,
        searchData: ""
      };
    },
    methods: {
      onEnter() {
        this.searching = false;
      },
      onInsert() {
        this.searching = true;
      },
      onDel() {
        let data = this.searchData;
        if (data === "") {
          this.searching = false;
        }
      },
      onShow() {
        let sm = this.$vuetify.breakpoint.sm;
        let xs = this.$vuetify.breakpoint.xs;

        if (sm || xs) {
          this.$store.commit("changeShow");
        } else {
          this.$store.commit("changeMini");
        }
      },
      onExit() {
        if (this.searchData) {
          this.searchData = "";
          this.searching = false;
        } else {
          this.hide = true;
        }
      }
    }
  };
</script>
<style scoped>
.border-radius {
  border-radius: 5px;
}

 

</style>
