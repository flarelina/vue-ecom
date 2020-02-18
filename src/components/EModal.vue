<template>
    <!--MODAL-->
    <q-dialog transition-show="slide-up"
              transition-hide="slide-down"
              :maximized="$q.platform.is.mobile"
              :persistent="isPersistent"
              v-model="isShowModal">
        <q-card :style="!$q.platform.is.mobile ? 'min-width: 60%; max-width: 80vw;' : ''">
            <!--TITLE-->
            <q-card-section>
                <span class="text-primary text-h6">{{title}}</span>
                <slot name="title"/>
                <q-btn color="primary" icon="fa fa-times" class="float-right shadow-0" size="sm" flat v-close-popup />
            </q-card-section>
            <q-separator />

            <!--CONTENT-->
            <q-card-section style="max-height: 70vh" class="scroll">
                <slot name="content"/>
            </q-card-section>

            <q-separator />

            <!--ACTIONS-->
            <q-card-actions align="right" :class="$q.dark.isActive ? 'bg-dark text-teal q-pt-lg q-mr-md' :'bg-white text-teal q-pt-lg q-mr-md'">
                <slot name="actions"/>
            </q-card-actions>

            <q-inner-loading :showing="isLoading">
                <q-spinner size="50px" color="primary" />
            </q-inner-loading>
        </q-card>
    </q-dialog>
</template>

<script>
  export default {
    name: "EModal.vue",
    props: {
      title        : {type: String, default: ''},
      isPersistent : {type: Boolean, default: true}
    },
    data: () => ({
      isShowModal : false,
      isLoading   : false
    }),
    methods: {
      showModal(){
        this.isShowModal = true;
      },
      hideModal(){
        this.isShowModal = false;
      },
      showLoading() {
        this.isLoading = true;
      },
      hideLoading() {
        this.isLoading = false;
      }
    }
  }
</script>

<style scoped>

</style>
