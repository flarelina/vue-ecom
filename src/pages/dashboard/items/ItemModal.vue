<template>
    <e-modal ref="eModalRef" title="Add New Item">
        <span slot="content">
            HEY THERE
        </span>
        <span slot="actions">
          <q-btn type="file" unelevated color="primary" @click="saveItem">SAVE</q-btn>
        </span>
    </e-modal>
</template>

<script>
  import EModal from "../../../components/EModal";

  export default {
    name: "ItemModal",
    components: {
      EModal
    },
    methods: {
      showItemModal() {
        this.$refs.eModalRef.showModal();
      },
      saveItem() {

      }
    }
  }
</script>

<style scoped>

</style>
