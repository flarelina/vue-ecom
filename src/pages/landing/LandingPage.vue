<template>
  <q-page class="q-pa-lg">
    <l-banner></l-banner>
    <l-products></l-products>
  </q-page>
</template>

<script>
  import LBanner from "./sections/LBanner";
  import LProducts from "./sections/LProducts";

  export default {
    name: "LandingPage",
    components: {
      LBanner,
      LProducts
    }
  }
</script>

<style scoped>

</style>
