<template>
  <q-page class="flex flex-center">
      <div>
        <form @submit.prevent="simulateSubmit" class="q-pa-md">
            <!-- a simple text field watching for the enter key release -->
            <q-input
                filled
                color="teal"
                v-model="form.name"
                label="Product Name"
            />

            <q-input
                filled
                color="teal"
                v-model="form.image"
                label="Image Path"
            />

            <div class="row justify-end">
                <q-btn
                    type="submit"
                    :loading="loading"
                    label="Save"
                    class="q-mt-md"
                    color="teal"
                >
                    <template v-slot:loading>
                        <q-spinner-facebook />
                    </template>
                </q-btn>
            </div>
        </form>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
      return {
          form: {
              name: '',
              image: ''
          },

          loading: false
      }
  },

  methods: {
    simulateSubmit () {
        this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 2000)
    }
  }
}
</script>
