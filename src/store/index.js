import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    search: "",
    jobs: [],
    cityList: ["İstanbul", "Ankara", "İzmir"],
    citys: [],
    jobsDetail: [],
  },
  actions,
  mutations,
  getters,
});

export default store;
