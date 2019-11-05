<template>
  <v-navigation-drawer
    app
    class="primary"
    :mini-variant.sync="$store.state.mini"
    v-model="$store.state.show"
  >
    <v-list rounded>
      <v-list-item-group>
        <!-- main start -->
        <v-subheader
          v-show="!$store.state.mini"
          class="white--text"
        >
          Main category
        </v-subheader>
        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon class="white--text">
              mdi-view-dashboard
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            Dashboard
          </v-list-item-content>
        </v-list-item>
        <!-- main end -->

        <v-subheader
          v-show="!$store.state.mini"
          class="white--text"
        >
          Appearance
        </v-subheader>

        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon class="white--text">
                mdi-format-list-bulleted
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="white--text">
              category
            </v-list-item-content>
          </template>

          <v-list-item
            class="pl-6 mb-0"
            to="/category/edit"
          >
            <v-list-item-icon>
              <v-icon class="white--text">
                mdi-playlist-plus
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="white--text">
              Add category
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="pl-6 mb-0">
            <v-list-item-icon>
              <v-icon class="white--text">
                mdi-format-list-checks
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="white--text">
              Manage Category
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

      </v-list-item-group>
    </v-list>
    </v-list-item-group>

    </v-list>
  </v-navigation-drawer>

</template>
<script>
  export default {
    name: "Drawer",
    data() {
      return {
        active: false
      };
    }
  };
</script>
<style scoped>

</style>