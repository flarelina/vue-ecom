<template>
  <q-layout class="landing" view="lHh Lpr lFf">
    <q-header class="landing__header">
      <q-toolbar class="toolbar text-grey-7">
        <img class="toolbar--logo" src="../assets/car.svg">

        <q-toolbar-title>
            <q-input style="max-width: 50%" filled square dense placeholder="Search"/>
        </q-toolbar-title>

        <div class="toolbar--nav">
           <b v-if="false">
               <span>Register</span>
               <span class="q-px-md">|</span>
               <span>Login</span>
           </b>

            <q-btn flat @click="$router.push({name: 'dashboard'})">
                <q-avatar size="30px">
                    <img :src="'https://img.icons8.com/plasticine/2x/user.png'">
                </q-avatar>
                <span class="q-ml-sm">
                    John Doe
                </span>
            </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


     <!--FOOTER-->
     <div class="landing__footer">
         Developed By <b>Yours Truly</b>
     </div>
  </q-layout>
</template>

<script>
  import "./LandingStyle.scss"

  export default {
    name: 'LandingLayout',
  }
</script>
