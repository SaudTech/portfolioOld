<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();

const path = computed(() => route.path)

let allLinks = reactive([
	{

		title: 'home.',
		path: '/',
		active: false
	},
	{
		title: 'my_works.',
		path: '/my_works',
		active: path.value == '/my_works' ? true : false
	},
	{
		title: 'my_skills.',
		path: '/skills',
		active: path.value == '/skills' ? true : false
	},
	{
		title: 'about_me.',
		path: '/about',
		active: false
	},
	{
		title: 'feedbacks.',
		path: '/feedbacks',
		active: false
	},
])

const checkActiveLinks = (path) => {
	allLinks.forEach(each => {
		if (each.path == path ? path : path.value) {
			each.active = true;
			return
		}
		each.active = false;
	})

}
watch(path, (newPath) => {
	checkActiveLinks(newPath)
})

const showSidebar = ref(false);


</script>

<template>
	<div>
		<div :class="`w-full fixed top-0 left-0`">
			<div class="min-h-[50px] lg:w-3/4 lg:mx-auto mx-2 flex items-center justify-between">
				<h1 class="text-3xl font-semibold tracking-wider text-white">
					Saud
				</h1>
				<div>
					<div class="md:hidden block" @click="(showSidebar = !showSidebar)">
						<img src="../assets/icons/menu.svg" alt="Menu Icon">
					</div>
					<ul class="md:flex hidden gap-10">
						<li v-for="(link, index) in allLinks" :key="index">
							<NuxtLink :to="link.path"
								:class="`text-white border-t-2 rounded-sm transition-all duration-300 hover:text-primaryTextColor ${link.active ? 'text-primaryTextColor font-medium border-t-primaryTextColor border-solid' : 'border-t-transparent'}`">
								{{ link.title }}
							</NuxtLink>
						</li>
					</ul>
				</div>
				<Transition name="slide-fade" mode="out-in">
					<Sidebar :links="allLinks" v-show="showSidebar" @close="(showSidebar = false)" />
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
	transition: all 0.8s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>