import axios from "axios";

export default {
  // Gets books from the Google API
  getScan: function(q) {
    return axios.get("/api/scan", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedScan: function() {
    return axios.get("/api/scandb");
  }
};
