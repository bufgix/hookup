<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item logo-box">
              <img src="/logo.svg" alt="logo" height="600" width="600" />
              <h2>HookUp Web Interface</h2>
              <ul>
                <li class="md-caption">Version {{context.server_v}}</li>
                <li class="md-caption">Copyright bufgix</li>
              </ul>
            </div>

            <div class="md-layout-item info-box">
              <div class="md-layout md-alignment-center-left">
                <ul>
                  <li>GUI Version: {{ context.client_v}}</li>
                  <li>Server Version: {{ context.server_v }}</li>
                  <li>
                    Commit:
                    <span>{{context.commit}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import ApiService from "../../services/api";
export default {
  data: () => ({
    context: {}
  }),
  created() {
    this.getAbout();
  },
  methods: {
    getAbout() {
      ApiService.getAbout().then(data => {
        this.context = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  height: 100%;
  background-color: #212121;
  .md-layout-item {
    .md-layout {
      height: 100%;
    }
  }
}
.logo-box {
  ul {
    list-style: none;
    padding: 0;
    text-align: center;

    li {
      margin: 10px;
    }
  }
}

.info-box {
  ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
  li {
    font-size: 16px;
    margin: 10px 0 10px 0;
    &::before {
      content: "✔️ ";
    }
    span {
      color: #398aff;
      background-color: #141311;
      padding: 2px 5px 2px 5px;
    }
  }
}
</style>