<template>
    <div>
        <!--PAGE TITLE --- well we can call it items in code but I guess we should use 'Product'-->
        <div>
            <span class="text-h5">PRODUCTS</span>
        </div>

        <!--ADD BUTTON-->
        <div class="q-py-lg">
            <q-btn icon="add" color="primary"
                   @click="showItemModal">NEW ITEM</q-btn>
        </div>

        <!--ITEM TABLE-->
        <e-table ref="eTableRef" :data="tableData" :columns="$options.itemsColumns">
            <template slot="table-rows" slot-scope="items">
                <q-td>
                    <img :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6OD54YOdfmGvheMv9yxTqkiDzei8G8UxDyLY-knMEUzHn8fQQ'" alt="item_photo" style="width: 80px">
                </q-td>
                <q-td>{{items.data.name}}</q-td>
                <q-td>{{items.data.description}}</q-td>
                <q-td>{{items.data.price}}</q-td>

                <!--ACTIONS-->
                <q-td>
                </q-td>
            </template>
        </e-table>

        <!--MODAL-->
        <item-modal ref="itemModalRef"></item-modal>
    </div>
</template>

<script>
  import ItemModal from "./ItemModal";
  import ETable    from "../../../components/ETable";

  export default {
    name: "ItemsPage",
    components: {
      ItemModal,
      ETable
    },
    data: () => ({
      tableData: [
        {name: 'test1', description: 'Lorem ipsum dolor sit amet, consecte', price: 'P 100.00'},
        {name: 'test2', description: 'Lorem ipsum dolor sit amet, consecte', price: 'P 100.00'},
        {name: 'test3', description: 'Lorem ipsum dolor sit amet, consecte', price: 'P 100.00'}
      ]
    }),
    methods: {
      showItemModal() {
        this.$refs.itemModalRef.showItemModal();
      }
    },
    itemsColumns: [
      { name: 'image'        , label: 'Product'       , field: 'image'        , align: 'center' , sortable: true},
      { name: 'name'         , label: 'Product Name'  , field: 'name'         , align: 'center' , sortable: true},
      { name: 'description'  , label: 'Description'   , field: 'description'  , align: 'center' , sortable: true},
      { name: 'price'        , label: 'Price'         , field: 'price'        , align: 'center' , sortable: true},
      { name: 'actions'      , label: 'Actions'       , field: 'actions'      , align: 'center' , sortable: true},
    ],
  }
</script>

<style scoped>

</style>
