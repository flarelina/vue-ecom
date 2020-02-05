<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="(product, key) in products" :key="key">
        <q-img :src="product.image">
          <div class="absolute-bottom">
            <div class="text-h6">{{ product.name }}</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat>View</q-btn>
          <q-btn flat >Add to Cart</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      products: [
        { id: 1, name: 'Product 1', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 2, name: 'Product 2', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 3, name: 'Product 3', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 4, name: 'Product 4', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 5, name: 'Product 5', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 6, name: 'Product 6', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 7, name: 'Product 7', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 8, name: 'Product 8', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { id: 9, name: 'Product 9', image: 'https://cdn.quasar.dev/img/parallax2.jpg' },
      ]
    }
  }
}
</script>
