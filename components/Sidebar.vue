<script setup>
import { defineProps } from 'vue'
const props = defineProps({
	links: {
		type: Array,
		required: true,
	}
})
// JSON.parse(JSON.stringify(props.links))
</script>

<template>
	<div
		class="md:hidden block h-screen w-full absolute top-0 right-0 z-10 py-3 backdrop-blur-sm bg-slate-800 bg-opacity-90 ">
		<div class="w-full flex justify-end pr-2">
			<img src="../assets/icons/right-arrow.png" alt="Menu Icon" @click="$emit('close')" />
		</div>
		<div class="w-full text-center my-4">
			<div>

				<ul>
					<li v-for="(each, index) in links" :key="index">
						<NuxtLink :to="each.path"
							:class="`${each.active ? 'text-primaryTextColor font-medium' : ''} h-10 flex justify-center items-center rounded-sm text-white text-lg font-semibold tracking-wider`">
							{{ each.title }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>