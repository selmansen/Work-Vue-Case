<template>
  <div class="container">
    <div
      class="search-section d-flex align-items-center justify-content-center flex-column"
    >
      <h2 class="font-italic text-info text-center">Kariyer hedefin için</h2>
      <input
        id="searchInput"
        type="text"
        placeholder="Arama Yap örn: Front End, Lead, Senior vb."
        class="form-control mt-3"
        v-model="search"
        @keyup.enter="send($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    send(value) {
      if (value !== "") {
        this.$store.dispatch("searchDataAction", this.search);
        this.$router.push("/job");
      } else {
        alert("Aranacak pozisyon veya firma bilgisi girin");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-section {
  height: 100vh;
  #searchInput {
    max-width: 500px;
  }
}
</style>