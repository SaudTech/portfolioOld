<template>
	<div class="text-white card">
		<div class="flex flex-col items-center">
			<!-- <img
				:src="details.image"
				alt="project image"
				class="w-full h-64"
			/> -->
			<div>
				<h1 class="text-2xl font-bold mt-4">
					{{ details.title }}
				</h1>
				<div :style="customUnderline"></div>
			</div>

			<p class="text-sm mt-2">{{ details.description }}</p>
			<div class="flex flex-wrap gap-2 mt-4">
				<span
					v-for="(tech, index) in details.tech"
					:key="index"
					class="text-xs bg-gray-700 px-2 py-1 rounded-full"
				>
					{{ tech }}
				</span>
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
	background-color: #1a1a1a;
	border-radius: 10px;
	padding: 1rem;
}

:root {
	--bg-color: rgb(20, 20, 20);
	--card-color: rgb(23, 23, 23);
}

#cards {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	max-width: 916px;
	width: calc(100% - 20px);
}

#cards:hover > .card::after {
	opacity: 1;
}

.card:hover::before {
	opacity: 1;
}

.card::before,
.card::after {
	border-radius: inherit;
	content: "";
	height: 100%;
	left: 0px;
	opacity: 0;
	position: absolute;
	top: 0px;
	transition: opacity 500ms;
	width: 100%;
}

.card::before {
	background: radial-gradient(
		800px circle at var(--mouse-x) var(--mouse-y),
		rgba(255, 255, 255, 0.06),
		transparent 40%
	);
	z-index: 3;
}

.card::after {
	background: radial-gradient(
		600px circle at var(--mouse-x) var(--mouse-y),
		rgba(255, 255, 255, 0.4),
		transparent 40%
	);
	z-index: 1;
}

.card > .card-content {
	background-color: var(--card-color);
	border-radius: inherit;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	inset: 1px;
	padding: 10px;
	position: absolute;
	z-index: 2;
}
</style>
