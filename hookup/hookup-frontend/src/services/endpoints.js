const base = "http://localhost:5000";

module.exports = {
  base,
  urlGetNgrokUrl: `${base}/api/get_ngrok_url`,
  urlNewPage: `${base}/api/page/new`,
  urlDeletePage: `${base}/api/page/delete`,
  urlGetCurrent: `${base}/api/page/get_current`,
  urlSetCurrent: `${base}/api/page/set_current`,
  urlPages: `${base}/api/pages`,
  urlGetRecords: `${base}/api/record/list`,
  urlGetRecordsByPage: `${base}/api/record/by_page`,
  urlLogout: `${base}/adminlogout`
};
