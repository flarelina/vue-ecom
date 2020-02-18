<template>
    <div>
        <!--PAGE TITLE --- well we can call it items in code but I guess we should use 'Product'-->
        <div>
            <span class="text-h5">PRODUCTS</span>
        </div>

        <!--ADD BUTTON-->
        <div class="q-pt-lg">
            <q-btn icon="add" color="primary" outline
                   @click="showItemModal">NEW ITEM</q-btn>
        </div>

        <!--MODAL-->
        <item-modal ref="itemModalRef"></item-modal>
    </div>
</template>

<script>
  export default {
    name: "ItemsPage",
    components: {
      ItemModal: async () => import("./ItemModal")
    },
    methods: {
      showItemModal() {
        this.$refs.itemModalRef.showItemModal();
      }
    }
  }
</script>

<style scoped>

</style>
