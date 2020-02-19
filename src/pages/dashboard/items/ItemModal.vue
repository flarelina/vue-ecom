<template>
    <e-modal ref="eModalRef" title="Add New Item">
        <span slot="content">
            <!--ITEM IMAGE-->
            <div>

            </div>

            <div class="q-col-gutter-md">
              <q-input v-model="item.code" label="Code" outlined stack-label />
              <q-input v-model="item.name" label="Name" outlined stack-label />
              <q-input v-model="item.description" label="Description" outlined stack-label type="textarea"/>
              <q-input v-model="item.price" label="Price" outlined stack-label prefix="₱" />
            </div>
        </span>
        <span slot="actions">
          <q-btn type="file" outline color="primary" @click="saveItem">SAVE</q-btn>
        </span>
    </e-modal>
</template>

<script>
  import EModal from "../../../components/EModal";

  import Item from "../../../models/Item";

  export default {
    name: "ItemModal",
    components: {
      EModal
    },
    data: () => ({
      item: {
        code        : '',
        name        : '',
        description : '',
        price       : ''
      }
    }),
    methods: {
      showItemModal() {
        this.$refs.eModalRef.showModal();
      },
      saveItem() {
        this.resetForm();
        this.$refs.eModalRef.showLoading();

        Item.add(this.item)
          .then(res => {
            this.$q.notify('Successfully added new item.');
            this.$refs.eModalRef.hideLoading();
            this.$refs.eModalRef.hideModal();
          })
          .catch(error => {
            this.$q.notify(error.message);
            this.$refs.eModalRef.hideLoading();
          })
      },
      resetForm() {
        this.item = {
          code        : '',
          name        : '',
          description : '',
          price       : ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
