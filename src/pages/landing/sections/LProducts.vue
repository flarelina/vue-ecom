<template>
  <div class="q-pt-lg">
    <q-card class="products">
      <q-card-section>
        <b class="text-h5">EXPLORE</b>
      </q-card-section>

      <q-card-section>
         <div v-for="p in pages" :key="p" class="list row">
            <div v-for="n in 5" :key="n" class="products__list--item col">
                <div class="image">
                    <q-img src="https://391kl81nd0ow22mhqq2m7uzl-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Kenzo-White-Tiger-Square-T-Shirt-600x600.jpg"
                           :ratio="1"
                           style="width: 200px"
                    />
                </div>

                <div class="title q-pt-sm">
                  <b>This Is A Product Title</b>
                </div>
                <div class="price">
                    PHP 100.00
                </div>
                <div class="description">
                    this is a short description.
                </div>
            </div>
         </div>
      </q-card-section>

      <q-card-section class="text-center">
          <q-btn outline @click="pages++">VIEW MORE</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "LProducts",
    data: () => ({
      pages: 2
    })
  }
</script>

<style lang="scss" scoped>
.products {
  box-shadow: 0px 0px 5px rgba(175, 175, 175, 0.5);
  border-radius: 10px;

  &__list {
      &--item {
        padding: 20px;
      }
      &--item:hover {
          box-shadow: 0px 0px 10px rgba(77, 57, 57, 0.1);
      }
  }
}
</style>
