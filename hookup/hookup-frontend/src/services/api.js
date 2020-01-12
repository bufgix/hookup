import Axios from "axios";
import {
  urlGetNgrokUrl,
  urlNewPage,
  urlDeletePage,
  urlGetCurrent,
  urlSetCurrent,
  urlPages,
  urlGetRecords,
  urlGetRecordsByPage
} from "./endpoints";

export default {
  async getNgrokUrl() {
    let res = await Axios.get(urlGetNgrokUrl);
    return res.data;
  },
  async sendNewPage(data) {
    let res = await Axios.post(urlNewPage, data, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res;
  },
  async getPages() {
    let res = await Axios.get(urlPages);
    return res.data;
  },
  // eslint-disable-next-line no-unused-vars
  async deletePage(data) {
    let res = Axios.post(urlDeletePage, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res;
  },
  async getCurrentPage() {
    let res = await Axios.get(urlGetCurrent);
    return res.data;
  },
  async setCurrentPage(data) {
    let res = await Axios.post(urlSetCurrent, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res;
  },
  async getRecords() {
    let res = await Axios.get(urlGetRecords);
    return res.data;
  },
  async getRecordsByPage() {
    let res = await Axios.get(urlGetRecordsByPage);
    return res.data;
  }
};
