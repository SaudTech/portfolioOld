<template>
	<div class="text-white card bg-black/40 border border-solid border-white/25 min-w-[200px]">
		<div class="flex flex-col items-center">
			<!-- <img
				:src="details.image"
				alt="project image"
				class="w-full h-64"
			/> -->
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
						class="text-xs bg-gray-700 px-2 py-1 rounded-full"
					>
						{{ tech }}
					</span>
				</div>
			</div>
			<a
				:href="details.link"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm mt-4 text-blue-500"
			>
				View Project
			</a>
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
const textShadow = {
	textShadow: details.color.map((v) => `0 0 50px ${v}`).join(", "),
};
</script>

<style lang="scss">
.card {
	// background-color: #1a1a1a;
	border-radius: 10px;
	padding: 1rem;
}
</style>
