export function getByKeyword(jobs, search) {
  const searchText = search;

  if (!searchText.length) {
    return jobs;
  } else {
    return jobs.filter((job) => {
      if (
        job.companyName
          .toLocaleUpperCase("tr-TR")
          .indexOf(searchText.toLocaleUpperCase("tr-TR")) > -1 ||
        job.positionName
          .toLocaleUpperCase("tr-TR")
          .indexOf(searchText.toLocaleUpperCase("tr-TR")) > -1
      )
        return job;
    });
  }
}

export function getByCity(jobs, city) {
  if (city.length === 0) {
    return jobs;
  } else {
    return jobs.filter((job) => {
      if (city.includes(job.cityName)) {
        return city;
      }
    });
  }
}

export const loadCity = (state) => {
  return state.cityList;
};

export const searchFilters = (state) => {
  return getByKeyword(getByCity(state.jobs, state.citys), state.search);
};

export const jobDetail = (state) => {
  return state.jobsDetail;
};

export const getAddedSearch = (state) => {
  return state.search;
};
