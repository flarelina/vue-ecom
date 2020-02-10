<template>
  <div>
      <q-card flat bordered class="banner">
        <q-card-section class="no-padding">
            <q-carousel transition-prev="slide-right"
                        transition-next="slide-left"
                        swipeable
                        animated
                        arrows
                        class="banner"
                        v-model="slide"
                        :fullscreen.sync="fullscreen"
                        infinite>
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

                <template v-slot:control>
                    <q-carousel-control position="bottom-right" :offset="[18, 18]">
                        <q-btn push round dense color="white" text-color="primary"
                               :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                               @click="fullscreen = !fullscreen"/>
                    </q-carousel-control>
                </template>
            </q-carousel>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
  export default {
    name: "LBanner",
    data () {
      return {
        slide: 1,
        fullscreen: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
}
</style>
