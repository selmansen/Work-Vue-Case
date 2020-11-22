import Vue from "vue";

export const getJobs = ({ commit }) => {
  Vue.http.get("http://localhost:3004/jobs/").then((response) => {
    commit("jobList", response.body);
  });
};

export const getJobsDetail = ({ commit }, id) => {
  Vue.http.get("http://localhost:3004/jobs/" + id).then((response) => {
    commit("jobsDetail", response.body);
  });
};

export const searchDataAction = (vuexContent, data) => {
  vuexContent.commit("searchDataMutation", data);
};
