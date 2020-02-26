<template>
    <e-modal ref="eModalRef" title="Add New Item">
        <span slot="content">
            <!--ITEM IMAGE-->
            <div class="col-12 col-md-4" align="center">
              <q-img alt="item_photo" style="width: 200px" :ratio="1" :src="image"/>
              <div class="q-pt-sm q-pb-lg">
                <q-btn size="small" icon="photo_camera" color="primary" @click="$refs.file.$el.click()"> UPLOAD IMAGE</q-btn>
                <q-input type="file" ref="file" style="display: none" v-model="item.files" @change="loadImage"/>
              </div>
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6OD54YOdfmGvheMv9yxTqkiDzei8G8UxDyLY-knMEUzHn8fQQ',
      item: {
        code        : '',
        name        : '',
        description : '',
        price       : '',
        files       : []
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
      },
      loadImage() {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.image = e.target.result
        };

        reader.readAsDataURL(this.item.files[0]);
      }
    }
  }
</script>

<style scoped>

</style>
