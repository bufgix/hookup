<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title" style="float: left">Add Page</div>
      </md-card-header>
      <md-card-content>
        <form @submit.prevent="submitForm">
          <md-field>
            <label>Page name</label>
            <md-input v-model="pageName"></md-input>
          </md-field>
          <md-field>
            <label>Page source code</label>
            <md-file ref="page" @md-change="handlePageUpload" />
          </md-field>
          <md-button class="md-raised md-primary" type="submit">Save</md-button>
          <md-snackbar
            md-position="center"
            :md-duration="4000"
            :md-active.sync="showSnack"
            md-persistent
          >
            <span>{{ snackBarData }}</span>
            <md-button
              :class="{ 'md-primary' : success, 'md-accent': !success}"
              @click="showSnack = false"
            >I Got This</md-button>
          </md-snackbar>
        </form>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
/* eslint-disable no-console */
import ApiService from "../../services/api";

export default {
  data: () => ({
    pageName: "",
    page: null,
    showSnack: false,
    snackBarData: "",
    success: false
  }),
  methods: {
    handlePageUpload(evt) {
      /*  console.log(evt.target.files[0]);
      this.page = evt.target.files[0]; */
      this.page = evt[0];
    },
    async submitForm() {
      let formData = new FormData();
      formData.append("page", this.page);
      formData.append("pageTitle", this.pageName);
      console.log(formData);
      // eslint-disable-next-line no-unused-vars
      ApiService.sendNewPage(formData)
        .then(data => {
          this.showSnack = true;
          this.snackBarData = data.data;
          this.success = true;
          console.log(data);
        })
        .catch(err => {
          this.showSnack = true;
          this.snackBarData = err.response.data;
          this.success = false;
          console.log(err.response);
        });
    }
  },
  computed: {
    snackClass: function() {
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  background-color: #212121;
}

.md-title {
  margin-bottom: 10px;
}

.md-textarea {
  font-family: "Roboto Mono", monospace;
  min-height: 200px;
}

.md-snackbar {
  background-color: #212121;
  color: aliceblue;
}
</style>

