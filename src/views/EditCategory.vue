<template>
  <v-row cols=12>
    <Snackbars
      :success="success"
      :color="color"
      :timeout="timeout"
      icon="mdi-check"
      :text="succ_text"
    />
    </v-snackbar>
    <Loading v-if="loading" />
    <v-row v-else>
      <Title
        :title="title"
        :items="items"
      />
      <v-col class="white border-radius mt-8">
        <h2 class="ml-3 font-weight-regular title py-2">Create Categories</h2>
        <v-col>
          <v-form
            ref="form"
            v-model="valid"
          >

            <v-select
              v-model="parent"
              :items="parentItems"
              :rules="parentRules"
              label="Parent"
              required
            ></v-select>
            <v-text-field
              label="Category"
              v-model="category"
              :rules="categoriesRules"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="add"
            >
              Add
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Rest
            </v-btn>

          </v-form>
        </v-col>
      </v-col>
    </v-row>

  </v-row>

</template>
<script>
  import Snackbars from "@/components/Snackbars";
  import Title from "@/components/Title";
  import Loading from "@/components/Loading";
  import { request } from "@/network/index";

  export default {
    name: "EditCategory",
    data() {
      return {
        loading: true,
        title: "Categories Creation",
        // for breadcumbs
        items: [
          {
            text: "home",
            disabled: false,
            to: "/dashboard"
          },
          {
            text: "catgories",
            disabled: false,
            to: ""
          },
          {
            text: "Add Categories",
            disabled: true,
            to: ""
          }
        ],
        // form
        valid: true,
        category: null,
        parentItems: ["No Parent"],
        parent: null,
        categoriesRules: [
          v => !!v || "category can not empty",
          v => /^[A-Za-z]+$/.test(v) || "category must alphabet"
        ],
        parentRules: [v => !!v || "Please Select 1 properties"],
        // snackbars
        success: false,
        succ_text: "Add success",
        color: "success",
        timeout: 1000
      };
    },
    methods: {
      selectErrors() {},
      changeValid() {
        this.valid = true;
      },
      reset() {
        this.$refs.form.reset();
      },
      add() {
        if (this.parent === this.parentItems[0]) {
          request({
            url: "/admin/api/categories",
            method: "post",
            data: {
              name: this.category
            }
          })
            .then(res => {
              // console.log(res);
              this.success = true;
            })
            .catch(err => {
              console.log(err);
            });
        }
        setTimeout(() => {
          this.success = false;
        }, 1000);
        this.reset();
      },
      getParent() {
        request({
          url: "/admin/api/categories",
          method: "get"
        })
          .then(res => {
            this.loading = false;
            const data = res.data.result;
            const newD = ["No-Parent"];

            //    this.parentItems.concat(data);
            data.forEach(item => {
              newD.push(item.C_Name);
            });
            this.parentItems = newD;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    components: {
      Title,
      Loading,
      Snackbars
    },
    created() {
      this.getParent();
    },
    updated() {
      this.getParent();
    }
  };
</script>
<style scoped>
.border-radius {
  border-radius: 5px;
}
</style>






