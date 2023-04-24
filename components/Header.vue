<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let allLinks = reactive([
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Work",
		path: "/work",
	},
	{
		title: "Skills",
		path: "/skills",
	},
	{
		title: "Contact",
		path: "/contact",
	},
]);

const showSidebar = ref(false);
</script>

<template>
	<div>
		<div class="w-full z-50 glass fixed top-0 left-0">
			<div
				class="min-h-[50px] lg:w-3/4 lg:mx-auto mx-2 flex items-center justify-between"
			>
				<NuxtLink
					to="/"
					class="text-3xl font-semibold tracking-wider text-white"
				>
					<img src="@\assets\images\Logo.png" alt="Logo" />
				</NuxtLink>
				<div>
					<div class="md:hidden block" @click="showSidebar = !showSidebar">
						<div class="logoClass">
							<Icon name="ri:menu-3-line" size="3em" color="white" />
						</div>
					</div>
					<ul class="md:flex hidden gap-10">
						<li v-for="(link, index) in allLinks" :key="index">
							<NuxtLink
								:to="link.path"
								:class="`text-white border-t-2 rounded-sm transition-all duration-300 hover:text-primaryTextColor ${
									link.path == route.path
										? 'text-primaryTextColor border-t-primaryTextColor border-solid'
										: 'border-t-transparent'
								}`"
							>
								{{ link.title }}
							</NuxtLink>
						</li>
					</ul>
				</div>
				<Transition name="slide-fade" mode="out-in">
					<Sidebar
						:links="allLinks"
						v-show="showSidebar"
						@close="showSidebar = false"
					/>
				</Transition>
			</div>
		</div>
	</div>
</template>

<style>
.glassEffect {
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

img {
	/* Inside is a image tag, the image tag should only be 5rem height but just adding a height is not working */
	height: 4rem !important;
	/* Contain */
	object-fit: contain !important;
}

.glass {
	background: rgba(0, 0, 0, 0);
	box-shadow: 0 8px 32px 0 rgba(18, 19, 32, 0.37);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
</style>
