<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
	links: {
		type: Array,
		required: true,
	},
});
const route = useRoute();

</script>

<template>
	<div
		class="md:hidden block h-screen w-full absolute top-0 right-0 z-[9999] py-3 backdrop-blur-sm bg-slate-800 bg-opacity-90"
	>
		<div class="w-full flex justify-end pr-2">
			<Icon
				name="ri:arrow-right-s-line"
				size="4em"
				color="white"
				@click="$emit('close')"
			/>
		</div>
		<div class="w-full text-center my-4">
			<div>
				<ul>
					<li v-for="(each, index) in links" :key="index" class="mb-3">
						<NuxtLink
							@click="$emit('close')"
							:to="each.path"
							:class="`text-white border-t-2 rounded-sm transition-all text-3xl duration-300 hover:text-primaryTextColor ${
								each.path == route.path
									? 'text-primaryTextColor border-t-primaryTextColor border-solid'
									: 'border-t-transparent'
							}`"
						>
							{{ each.title }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
