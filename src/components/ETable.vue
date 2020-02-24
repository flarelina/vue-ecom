<template>
    <q-table class="eTable"
             flat
             :title="title"
             :data="data"
             :columns="columns"
             row-key="name"
             :pagination="{rowsPerPage: 0}"
             hide-bottom>
        <q-tr slot="body" slot-scope="props" class="text-center">
            <slot :data="props.row" name="table-rows"></slot>
        </q-tr>
    </q-table>
</template>

<script>
  export default {
    name: "ETable",
    props: {
      title      : {type: String, default: ''},
      data       : {type: Array, default: () => []},
      columns    : {type: Array, default: () => []},
      pagination : {}
    }
  }
</script>

<style scoped>

</style>
