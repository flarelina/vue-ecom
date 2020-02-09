<template>
	<q-page class="flex q-pa-md">
		<h3>Hi {{ userDetails.name }}!</h3>
	</q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'PageIndex',

	data () {
		return {
		}
	},

	computed: {
		...mapGetters('store', ['userDetails'])
	}
}
</script>

<style>
</style>
