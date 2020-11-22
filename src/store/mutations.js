export const searchDataMutation = (state, data) => {
  state.search = data;
};

export const setKeywords = (state, keys) => {
  state.search = keys;
};

export const setCity = (state, city) => {
  state.citys = city;
};

export const jobList = (state, job) => {
  state.jobs = job;
};

export const jobsDetail = (state, job) => {
  state.jobsDetail = job;
};
