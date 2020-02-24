<template>
    <q-layout class="dashboard" view="lHh Lpr lFf">
        <q-header class="dashboard__header">
            <q-toolbar class="toolbar text-grey-7">
                <img class="toolbar--logo" src="../assets/car.svg">

                <q-toolbar-title>
                    <q-input style="max-width: 50%" filled square dense placeholder="Search"/>
                </q-toolbar-title>

                <div class="toolbar--nav">
                    <b class="cursor-pointer" @click="logout">
                        <span>Logout</span>
                    </b>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container class="dashboard__nav">
            <!--NAVIGATION -->
            <q-page class="page">
                <div class="row q-gutter-md">
                    <q-card class="side col-3">
                        <q-card-section class="side">
                            <!--AVATAR-->
                            <q-avatar size="100px" font-size="52px" color="grey" text-color="white" icon="directions" />

                            <!--VENDOR INFO-->
                            <div class="q-pt-md text-bold">John Doe</div>
                            <div class="text-caption text-italic">john@email.com</div>

                            <!--LIST-->
                            <div class="side__list">
                                <q-list class="rounded-borders">
                                    <q-item clickable v-ripple
                                            :class="$route.name === item.routeName ? 'active' : ''"
                                            v-for="item in $options.menu" :key="item.key"
                                            @click="goTo(item.routeName)">
                                        <q-item-section avatar>
                                            <q-icon :name="item.icon" />
                                        </q-item-section>

                                        <q-item-section>
                                            <span>{{item.label}}</span>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </div>
                        </q-card-section>
                    </q-card>

                    <q-card class="content col">
                        <q-card-section>
                            <router-view></router-view>
                        </q-card-section>
                    </q-card>
                </div>
            </q-page>
        </q-page-container>


        <!--FOOTER-->
        <div class="dashboard__footer">
            Developed By <b>Yours Truly</b>
        </div>
    </q-layout>
</template>

<script>
    import "./DashboardStyle.scss"

    export default {
        name: 'DashboardLayout',
        methods: {
          goTo(routeName) {
            this.$router.push({name: routeName})
          },
          logout() {
            // Insert logout logic here
            this.$router.push({name: 'landing'})
          }
        },
        menu: [
            {label: "Account" , key: "account"  , icon: "account_circle"  , routeName: ""},
            {label: "Items"   , key: "items"    , icon: "fas fa-cubes"    , routeName: "dashboard-items"},
            {label: "Orders"  , key: "orders"   , icon: "fas fa-list"     , routeName: ""}
        ]
    }
</script>
