<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<router-view v-slot="{ Component, route }">
		<template v-if="Component">
			<KeepAlive v-if="$route.meta.KeepAlive">
				<component :is="Component"></component>
			</KeepAlive>
			<component v-else :is="Component"></component>
		</template>
	</router-view>
</template>

<style lang="scss">
@import '@/assets/css/reset.css';
[v-cloak] {
	display: none;
}
</style>
