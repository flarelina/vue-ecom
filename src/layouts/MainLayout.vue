<template>
	<q-layout view="lHh Lpr lFf">
		<q-header elevated>
			<q-toolbar>

				<q-btn
					v-if="$route.fullPath.includes('/chat')"
					v-go-back.single
					icon="arrow_back"
					label="Back"
					flat
					dense
				/>

				<q-toolbar-title class="absolute-center">
					{{ title }}
				</q-toolbar-title>

				<q-btn
					v-if="!userDetails.userId"
					to="/auth"
					class="absolute-right q-pr-sm"
					icon="account_circle"
					no-caps
					flat
					dense
					label="Login"
				/>

				<q-btn
					v-else
					@click="logoutUser"
					class="absolute-right q-pr-sm"
					icon="account_circle"
					no-caps
					flat
					dense
				>
					Logout <br>
					{{ userDetails.name }}
				</q-btn>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details'
import EssentialLink from 'components/EssentialLink'

export default {
	mixins: [mixinOtherUserDetails],

	components: {
		EssentialLink
	},

	computed: {
		...mapState('store', ['userDetails']),

		title () {
			if (this.$route.fullPath === '/') return 'E-COM'
			if (this.$route.fullPath.includes('/chat')) return this.otherUserDetails.name
			if (this.$route.fullPath === '/auth') return 'Login'
		}
	},

	methods: {
		...mapActions('store', ['logoutUser'])
	}
}
</script>

<style lang="scss">
.q-toolbar {
	.q-btn {
		line-height: 1.2;
	}
}
</style>
