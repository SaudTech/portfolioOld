<script setup lang="ts">
import { useHead } from "@vueuse/head";
useHead({
	title:
		"Frontend engineer and designer | Vue and Nuxt senior developer | Saud",
});
</script>

<template>
	<div>
		<div class="bg-gray-900 z-[1] bg-opacity-95 overflow-x-hidden min-h-screen">
			<div class="dots"></div>
			<Header />
			<main
				class="lg:w-3/4 lg:mx-auto mx-2 mt-[50px]"
				style="height: calc(100vh - 50px)"
			>
				<slot />
			</main>
		</div>
	</div>
</template>

<style scoped>
.dots {
	height: 100vh;
	width: 100vw;
	background-image: radial-gradient(#2121217d 55%, transparent 0%);
	background-position: 0px 0px, 100px 100px;
	background-size: 7vmin 7vmin;
	position: absolute;
	z-index: -1;
}
</style>
