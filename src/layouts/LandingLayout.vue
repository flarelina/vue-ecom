<template>
  <q-layout class="landing" view="lHh Lpr lFf">
    <q-header class="landing__header">
      <q-toolbar class="toolbar text-grey-7">
        <img class="toolbar--logo" src="../assets/car.svg">

        <q-toolbar-title>
            <q-input style="max-width: 50%" filled square dense placeholder="Search"/>
        </q-toolbar-title>

        <div class="toolbar--nav">
           <b>
               <span>Register</span>
               <span class="q-px-md">|</span>
               <span>Login</span>
           </b>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import "./LandingStyle.scss"

  export default {
    name: 'LandingLayout',
  }
</script>
