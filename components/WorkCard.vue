<template>
	<div
		class="text-black card bg-black/30 border border-solid border-primaryTextColor/75 min-w-[200px]"
	>
		<div class="flex flex-col items-center">
			<div class="flex flex-col items-center">
				<div>
					<h1 class="text-2xl font-bold mt-4">
						{{ details.title }}
					</h1>
					<div :style="customUnderline"></div>
				</div>

				<p class="text-sm mt-2 h-28 overflow-y-auto">
					{{ details.description }}
				</p>
				<div class="flex flex-wrap gap-2 mt-4">
					<span
						v-for="(tech, index) in details.tech"
						:key="index"
						class="text-xs text-white bg-gray-700 px-2 py-1 rounded-full"
					>
						
						{{ tech }}
					</span>
				</div>
			</div>
			<button class="cursor-not-allowed galleryBTN text-center text-sm mt-4 text-blue-500">
				View Gallery
				<div class="text-white/70 text opacity-0">Upcoming Soon</div>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	details: {
		type: Object,
		required: true,
	},
});

const { details } = props;
const customUnderline = {
	backgroundImage: `linear-gradient(90deg, ${details.color.map((v) => v)})`,
	height: "2px",
	width: "100%",
};
</script>

<style lang="scss">
.galleryBTN:hover .text {
	transition: 300ms;
	opacity: 1;
}

.card {
	border-radius: 10px;
	padding: 1rem;
}
</style>
