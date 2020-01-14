
<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Registered Pages</div>
          </md-card-header>
          <md-card-content>
            <md-list v-for="(site, index) in sites" :key="index">
              <md-list-item>
                {{ site.name }}
                <div>
                  <md-button
                    class="md-icon-button md-list-action"
                    @click="deleteSite(site)"
                    v-show="!site.stock"
                  >
                    <md-icon class="md-accent">delete</md-icon>
                  </md-button>
                  <md-button class="md-icon-button md-list-action" @click="clickSite(site)">
                    <md-icon>arrow_forward_ios</md-icon>
                  </md-button>
                </div>
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item">
        <md-card class="current-card">
          <md-card-header>
            <div class="md-title">Current Page</div>
          </md-card-header>
          <md-card-content>
            <md-progress-spinner
              :md-diameter="30"
              :md-stroke="3"
              md-mode="indeterminate"
              v-show="loading"
            ></md-progress-spinner>
            <div v-show="!loading">
              <md-field>
                <label>Page name</label>
                <md-input v-model="currentSite.name" disabled></md-input>
              </md-field>
              <md-field>
                <label>Page source code</label>
                <md-textarea v-model="currentSite.source" disabled></md-textarea>
              </md-field>
              <md-button :href="base" class="md-primary" target="_blank">Preview</md-button>
            </div>
          </md-card-content>
          <md-snackbar
            md-position="center"
            :md-duration="4000"
            :md-active.sync="showStack"
            md-persistent
          >
            <span>{{ snackBarData }}</span>
            <md-button
              :class="{ 'md-primary' : success, 'md-accent': !success}"
              @click="showStack = false"
            >I got this</md-button>
          </md-snackbar>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import ApiService from "../../services/api";
import { base } from "../../services/endpoints";

export default {
  data: () => ({
    currentSite: {},
    sites: [],
    loading: true,
    showStack: false,
    snackBarData: "",
    success: false,
    base
  }),
  created() {
    this.getSites();
  },
  methods: {
    async clickSite(site) {
      let formData = new FormData();
      formData.append("currentPage", site.name);
      ApiService.setCurrentPage({ currentPage: site.name }).then(data => {
        this.currentSite = data.data;
        this.showStack = true;
        this.snackBarData = data.data.msg;
        this.success = true;
      });
    },
    async getSites() {
      ApiService.getPages().then(data => {
        this.sites = data;
        ApiService.getCurrentPage().then(data => {
          this.currentSite = data;
          setTimeout(() => {
            this.loading = false;
          }, 600);
        });
      });
    },
    async deleteSite(site) {
      ApiService.deletePage({ pageName: site.name })
        .then(data => {
          this.getSites();
          this.showStack = true;
          this.snackBarData = data.data;
          this.success = true;
        })
        .catch(err => {
          this.showStack = true;
          this.snackBarData = err.response.data;
          this.success = false;
        })
        .then(data => {
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
.md-card {
  background-color: #212121;
}
.md-table + .md-table {
  margin-top: 16px;
}

.md-snackbar {
  background-color: #212121;
  color: aliceblue;
}

.md-card {
  max-height: 1000px;
}

.md-textarea {
  height: 900px;
}
</style>