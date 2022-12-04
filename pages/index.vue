<script setup>
useHead({
	title: 'Frontend engineer and designer | Vue and Nuxt senior developer | Saud',
})
</script>

<template>
	<div class="flex flex-col h-full justify-center items-center">
		<h1 class="text-5xl font-bold text-gradient">
			Let's build a better website together.
		</h1>
		<div>
			<div class="mt-10 text-center">
				<div class="md:text-2xl text-xl text-white">
					Hi. I am
					<span class="text-secondaryTextColor font-semibold">Saud</span>,
					an <span class="text-primaryTextColor">Experienced_Vue_Nuxt_Developer</span>.
				</div>
				<div class="flex md:flex-row flex-col gap-4 justify-center items-center mt-10">
					<a class="bg-primaryTextColor glow text-center w-40 text-white p-3 rounded-md" target="_black"
						href="https://www.upwork.com/freelancers/~013e4672812428e86a">Hire me</a>
					<RouterLink to="/"
						class="border-primaryTextColor border border-solid bg-transparent text-center w-40 transition-all duration-300 hover:text-white text-primaryTextColor p-3 rounded-md">
						View my work
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.text-gradient {
	// From #A56FFE to #FF6F6F | To right
	background: linear-gradient(90deg, #A56FFE 0%, #59ACFC 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

}

.glow::before {
	content: "";
	background: linear-gradient(65deg,
			#A56FFE, #002BFF, #FF00C8, #59ACFC,
			#FF0000, #002BFF, #FF00C8, #59ACFC);
	position: absolute;
	top: -2px;
	left: -2px;
	background-size: 600%;
	z-index: -1;
	width: calc(100%);
	height: calc(100%);
	filter: blur(8px);
	animation: glowing 20s linear infinite;
	transition: opacity .5s ease-in-out;
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

.glow:active:after {
	background: transparent;
}
</style>