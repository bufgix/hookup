
<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Hook Up</span>
        <div class="md-toolbar-section-end">
          <div style="display: flex; align-items: baseline;">
            <b>Ngrok Url:</b>
            <md-progress-bar md-mode="indeterminate" v-show="loading"></md-progress-bar>
            <div>
              <span
                v-if="ngrokUrl"
                style="margin-left: 5px"
                class="ngrok-link"
                @click="doCopy"
              >{{ ngrokUrl }}</span>
              <md-tooltip md-direction="bottom">{{ copyStatus}}</md-tooltip>
            </div>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Panel</span>
        </md-toolbar>

        <md-list>
          <router-link to="configure">
            <md-list-item class="md-accent">
              <md-icon>remove_red_eye</md-icon>
              <span class="md-list-item-text">
                <span>Configure</span>
              </span>
            </md-list-item>
          </router-link>

          <router-link to="add">
            <md-list-item class="md-accent">
              <md-icon>add</md-icon>
              <span class="md-list-item-text">
                <span>Add Page</span>
              </span>
            </md-list-item>
          </router-link>

          <router-link to="/watch">
            <md-list-item>
              <md-icon>list</md-icon>
              <span class="md-list-item-text">
                <span>Results</span>
              </span>
            </md-list-item>
          </router-link>
          <router-link to="/about">
            <md-list-item>
              <md-icon>info</md-icon>
              <span class="md-list-item-text">About</span>
            </md-list-item>
          </router-link>
          <md-list-item @click="logOut()">
            <md-icon>exit_to_app</md-icon>
            <span class="md-list-item-text">Log out</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import ApiService from "../services/api";
import { urlLogout } from "../services/endpoints";

export default {
  data: () => ({
    menuVisible: false,
    loading: true,
    ngrokUrl: null,
    copyStatus: "Copy"
  }),
  created() {
    this.getNgrokUrl();
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    async getNgrokUrl() {
      ApiService.getNgrokUrl().then(url => {
        this.loading = false;
        setTimeout(() => {
          this.ngrokUrl = url;
        }, 400);
      });
    },
    doCopy() {
      this.$copyText(this.ngrokUrl).then(() => {
        this.copyStatus = "Copied";
      });
    },
    logOut() {
      window.location.href = urlLogout;
    }
  }
};
</script>


<style lang="scss" scoped>
.md-app-toolbar {
  background-color: #212121 !important;
}
.md-progress-bar {
  margin: 24px;
  width: 100px;
}
.page-container {
  height: 100%;
}
.md-app {
  height: 100%;
}

.ngrok-link {
  background-color: #424242;
  padding: 5px;
}
</style>