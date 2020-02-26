<template>
    <div>
        <!--PAGE TITLE --- well we can call it items in code but I guess we should use 'Product'-->
        <div>
            <span class="text-h5">ORDERS</span>
        </div>

        <!--ORDERS TABLE-->
        <e-table ref="eTableRef" :data="tableData" :columns="$options.ordersColumns">
            <template slot="table-rows" slot-scope="items">
                <q-td>{{items.data.name}}</q-td>
                <q-td>{{items.data.address}}</q-td>
                <q-td>{{items.data.contactNumber}}</q-td>
                <q-td>{{items.data.totalAmount}}</q-td>

                <!--ACTIONS-->
                <q-td>
                </q-td>
            </template>
        </e-table>
    </div>
</template>

<script>
  import ETable from "../../../components/ETable";

  export default {
    name: "OrdersPage",
    components: {
      ETable
    },
    data: () => ({
      tableData: [
        {name: 'Robert Bonifacio' , address: 'Manila', contactNumber: '09955646465', totalAmount: 'P 1000.00'},
        {name: 'Sean Dacquel'     , address: 'Manila', contactNumber: '09955646465', totalAmount: 'P 1000.00'},
        {name: 'Denzel Timajo'    , address: 'Manila', contactNumber: '09955646465', totalAmount: 'P 1000.00'}
      ]
    }),
    ordersColumns: [
      { name: 'name'           , label: 'Name'             , field: 'name'           , align: 'center' , sortable: true},
      { name: 'address'        , label: 'Address'          , field: 'address'        , align: 'center' , sortable: true},
      { name: 'contactNumber'  , label: 'Contact Number'   , field: 'contactNumber'  , align: 'center' , sortable: true},
      { name: 'totalAmount'    , label: 'Total Amount'     , field: 'totalAmount'    , align: 'center' , sortable: true},
      { name: 'actions'        , label: 'Actions'          , field: 'actions'        , align: 'center' , sortable: true},
    ]
  }
</script>

<style scoped>

</style>
