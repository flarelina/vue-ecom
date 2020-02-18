<template>
    <q-layout class="dashboard" view="lHh Lpr lFf">
        <q-header class="dashboard__header">
            <q-toolbar class="toolbar text-grey-7">
                <img class="toolbar--logo" src="../assets/car.svg">

                <q-toolbar-title>
                    <q-input style="max-width: 50%" filled square dense placeholder="Search"/>
                </q-toolbar-title>

                <div class="toolbar--nav">
                    <b>
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
                            <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />

                            <!--VENDOR INFO-->
                            <div class="q-pt-md text-bold">John Doe</div>
                            <div class="text-caption text-italic">john@email.com</div>

                            <!--LIST-->
                            <div class="side__list">
                                <q-list class="rounded-borders text-primary">
                                    <q-item clickable v-ripple active-class="my-menu-link"
                                            v-for="item in $options.menu" :key="item.key">
                                        <q-item-section avatar>
                                            <q-icon name="delete" />
                                        </q-item-section>

                                        <q-item-section>{{item.label}}</q-item-section>
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
        menu: [
            {label: "Account" , key: "account"  , icon: ""  , routeName: ""},
            {label: "Items"   , key: "items"    , icon: ""  , routeName: ""},
            {label: "Orders"  , key: "orders"   , icon: ""  , routeName: ""}
        ]
    }
</script>
