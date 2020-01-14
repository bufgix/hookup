<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <h2>Results</h2>
        </md-card-header-text>

        <md-button class="md-icon-button" md-menu-trigger @click="getResult">
          <md-icon>refresh</md-icon>
        </md-button>
      </md-card-header>

      <md-card-content>
        <div v-if="!isEmpty">
          <md-list class="md-double-line" v-for="(result, index) in results" :key="index">
            <md-list-item>
              <md-card>
                <md-card-header>
                  <h3>{{ result.pageName }}</h3>
                  <code>{{ result.date }}</code>
                </md-card-header>

                <div>
                  <json-viewer :value="result.data" :expand-depth="2" theme="dark-viewer"></json-viewer>
                </div>
              </md-card>
            </md-list-item>
          </md-list>
        </div>
        <div v-else>
          <md-empty-state
            md-rounded
            md-icon="visibility_off"
            md-label="Nothing in results"
            md-description="Results will be here"
          ></md-empty-state>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import ApiService from "../../services/api";

export default {
  data: () => ({
    results: []
  }),
  computed: {
    isEmpty: function() {
      return this.results.length == 0;
    }
  },
  methods: {
    getResult: function() {
      ApiService.getRecords().then(data => {
        this.results = data;
      });
    }
  },
  created: function() {
    this.getResult();
  }
};
</script>


<style lang="scss" scoped>
.md-card {
  background-color: #212121;
  min-width: 200px;
  padding: 0;
  margin: 0;
}

.md-list-item .md-card {
  width: 100%;
}

.dark-viewer {
  background: #212121;
  white-space: nowrap;
  color: #eee;
  font-size: 14px;
  font-family: Consolas, Menlo, Courier, monospace;
  clear: both;

  .jv-ellipsis {
    color: #999;
    background-color: #eee;
    display: inline-block;
    line-height: 0.9;
    font-size: 0.9em;
    padding: 0px 4px 2px 4px;
    border-radius: 3px;
    vertical-align: 2px;
    cursor: pointer;
    user-select: none;
  }
  .jv-button {
    color: #49b3ff;
  }
  .jv-key {
    color: #111111;
  }
  .jv-item {
    &.jv-array {
      color: #111111;
    }
    &.jv-boolean {
      color: #fc1e70;
    }
    &.jv-function {
      color: #067bca;
    }
    &.jv-number {
      color: #fc1e70;
    }
    &.jv-object {
      color: #111111;
    }
    &.jv-undefined {
      color: #e08331;
    }
    &.jv-string {
      color: #42b983;
      word-wrap: break-word;
      overflow: hidden;
    }
  }
  .jv-code {
    .jv-toggle {
      &:before {
        padding: 0px 2px;
        border-radius: 2px;
      }
      &:hover {
        &:before {
          background: #eee;
        }
      }
    }
  }
}
</style>
