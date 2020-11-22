<template>
  <div class="container py-5">
    <div class="job-list">
      <div class="row">
        <div class="col-lg-4">
          <div class="job-list_bar p-3 rounded">
            <h5>Aranan Kelime</h5>
            <div class="form-group d-flex">
              <input type="text" v-model="search" class="form-control" />
              <button class="btn btn-info ml-2 w-25">Ara</button>
            </div>

            <h5>Şehir</h5>
            <div
              class="form-group mb-1 form-check"
              :key="index"
              v-for="(item, index) in loadCity"
            >
              <input
                type="checkbox"
                class="form-check-input"
                v-bind:id="item"
                v-model="cityFilters"
                v-bind:value="item"
              />
              <label class="form-check-label" v-bind:for="item">{{
                item
              }}</label>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="job-list-result">
            <table class="table table-striped rounded" id="joblist">
              <thead>
                <tr>
                  <th scope="col" width="30%">Firma</th>
                  <th scope="col" width="30%">Pozisyon</th>
                  <th scope="col" width="20%">Konum</th>
                  <th scope="col" width="20%"></th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(item, index) in searchFilters">
                  <td>{{ item.companyName }}</td>
                  <td>{{ item.positionName }}</td>
                  <td>{{ item.townName }}</td>
                  <td>
                    <router-link
                      :to="'/jobdetail/' + item.id"
                      class="btn btn-info py-0"
                      >İncele</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.$store.dispatch("getJobs");
  },
  computed: {
    ...mapGetters(["searchFilters", "loadCity"]),
    search: {
      get() {
        return this.$store.state.search;
      },
      set(val) {
        this.$store.commit("setKeywords", val);
      },
    },
    cityFilters: {
      set(val) {
        this.$store.commit("setCity", val);
      },
      get() {
        return this.$store.state.citys;
      },
    },
  },
};
</script>

<style lang="scss">
.job-list {
  &_bar {
    background: #f8f8f8;
    min-height: calc(100vh - 9rem - 38px);
    box-shadow: 0 0 15px 0px rgba(#000, 0.1);
  }
}
</style>