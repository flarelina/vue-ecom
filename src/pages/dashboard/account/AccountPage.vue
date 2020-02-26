<template>
    <div>
        <!--PAGE TITLE --- well we can call it items in code but I guess we should use 'Product'-->
        <div class="q-pb-lg">
            <span class="text-h5">ACCOUNT</span>
        </div>

        <!--USER AVATAR-->
        <div class="col-12 col-md-4" align="center">
            <q-avatar size="150px">
                <q-img alt="item_photo" :ratio="1" :src="image"/>
            </q-avatar>
            <div class="q-pt-md q-pb-lg">
                <q-btn size="small" icon="photo_camera" color="primary" @click="$refs.file.$el.click()"> UPLOAD IMAGE</q-btn>
                <q-input type="file" ref="file" style="display: none" v-model="account.files" @change="loadImage"/>
            </div>
        </div>

        <!--FORM-->
        <q-form>
            <div class="row q-col-gutter-md">
                <q-input class="col-12 col-md-4" v-model="account.firstName"  label="First Name" outlined stack-label />
                <q-input class="col-12 col-md-4" v-model="account.lastName"   label="Last Name" outlined stack-label />
                <q-input class="col-12 col-md-4" v-model="account.middleName" label="Middle Name" outlined stack-label />
            </div>

            <div class="row q-col-gutter-md q-pt-md">
                <q-input class="col-12 col-md-6" v-model="account.email" label="Email" outlined stack-label />
                <q-input class="col-12 col-md-6" v-model="account.contactNumber" label="Contact Number" outlined stack-label />
            </div>

            <div class="q-pt-lg">
                <q-btn color="primary" >Update</q-btn>
            </div>
        </q-form>
    </div>
</template>

<script>
  export default {
    name: "AccountPage",
    data: () => ({
      image: 'https://education.fsu.edu/wp-content/uploads/2016/09/staff-avatar-man.png',
      account: {
        firstName     : '',
        lastName      : '',
        middleName    : '',
        emailAddress  : '',
        contactNumber : '',
        files         : []
      }
    }),
    methods: {
      loadImage() {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.image = e.target.result
        };

        reader.readAsDataURL(this.account.files[0]);
      }
    }
  }
</script>

<style scoped>

</style>
