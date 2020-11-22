<template>
  <div class="container py-5">
    <h5 class="text-center mb-5 text-info"></h5>
    <table class="table table-striped rounded">
      <tbody>
        <tr>
          <th>Firma</th>
          <td>{{ jobDetail.companyName }}</td>
        </tr>
        <tr>
          <th>Pozisyon İsmi</th>
          <td>{{ jobDetail.positionName }}</td>
        </tr>
        <tr>
          <th>İlan Tarihi</th>
          <td>{{ jobDetail.releaseDate }}</td>
        </tr>
        <tr>
          <th>Adres</th>
          <td>{{ jobDetail.address }}</td>
        </tr>
        <tr>
          <th>Beklentiler</th>
          <td>{{ jobDetail.description }}</td>
        </tr>
        <tr>
          <th>İletişim</th>
          <td>{{ jobDetail.contactPhone }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="$router.go(-1)" class="btn btn-success">
      &lt; Arama ekranına dön
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("getJobsDetail", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["jobDetail"]),
  },
};
</script>

