<script setup>
useHead({
	title:
		"Frontend engineer and designer | Vue and Nuxt senior developer | Saud",
});
</script>

<template>
	<div class="flex flex-col h-full justify-center items-center">
		<h1 class="text-5xl font-bold text-gradient loop resp">
			Elevating Your Web Presence with Nuxt.js
		</h1>
		<div>
			<div class="mt-10 text-center">
				<!-- <div class="md:text-2xl text-xl text-white">
					<span class="text-secondaryTextColor font-semibold">Saud</span>, a
					<span class="text-primaryTextColor">Senior Frontend Developer</span>.
				</div> -->
				<div class="md:text-2xl text-xl text-white">
					Saud, a Senior Frontend Developer.
				</div>
				<div
					class="flex md:flex-row flex-col gap-4 justify-center items-center mt-10"
				>
					<!-- <a
						class="bg-primaryTextColor glow text-center w-40 text-white p-3 rounded-md"
						target="_black"
						href="https://www.upwork.com/freelancers/~013e4672812428e86a"
						>Hire me</a
					> -->
					<RouterLink
						to="/contact"
						class="bg-primaryTextColor glow  text-center w-40 transition-all duration-300 text-white p-3 rounded-md hover:shadow-md"
					>
						Contact
					</RouterLink>
					<RouterLink
						to="/work"
						class="border-primaryTextColor border border-solid bg-transparent text-center w-40 transition-all duration-300 hover:text-white text-primaryTextColor p-3 rounded-md"
					>
						View my work
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.resp {
	// Responsive font size
	font-size: 2.5rem;
	// Break the text into multiple lines
	white-space: pre-line;
	text-align: center;
	@media (min-width: 768px) {
		font-size: 3.5rem;
	}
}
.glow::before {
	content: "";
	background: linear-gradient(
		65deg,
		#a56ffe,
		#002bff,
		#ff00c8,
		#59acfc,
		#ff0000,
		#002bff,
		#ff00c8,
		#59acfc
	);
	position: absolute;
	top: -2px;
	left: -2px;
	background-size: 600%;
	z-index: -1;
	width: calc(100%);
	height: calc(100%);
	filter: blur(8px);
	animation: glowing 20s linear infinite;
	transition: opacity 0.5s ease-in-out;
	border-radius: 10px;
	opacity: 0;
}

@keyframes glowing {
	0% {
		background-position: 0 0;
	}

	50% {
		background-position: 400% 0;
	}

	100% {
		background-position: 0 0;
	}
}

/* hover */
.glow:hover::before {
	opacity: 0.6;
}

// .glow:active:after {
// 	background: transparent;
// }
</style>
