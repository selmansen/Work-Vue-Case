<template>
  <input
    id="searchInput"
    type="text"
    placeholder="Arama Yap"
    class="form-control mt-3"
    v-model="search"
    @keyup.enter="send()"
  />
</template>


<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    send() {
      this.$store.dispatch("searchDataAction", this.search);
      this.$router.push("/job");
    },
  },
};
</script>

<style lang="scss" scoped>
#searchInput {
  max-width: 500px;
}
</style>