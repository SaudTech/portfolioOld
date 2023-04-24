<script setup lang="ts">
import { onMounted, ref } from "vue";
import WorkCard from "../components/WorkCard.vue";

class Project {
	title: string;
	color: string[];
	description: string;
	tech: string[];
	link: string;
	image: string;

	constructor(
		title: string,
		color: string[],
		description: string,
		tech: string[],
	) {
		this.title = title;
		this.color = color;
		this.description = description;
		this.tech = tech;
	}
}

const projects = [
	new Project(
		"Emvive",
		["#37A101", "#398251"],
		"Emvive is a company management system that includes functionality to generate E-invoices in compliance with the Zatca regulations in Saudi Arabia, and to manage the company's employees, customers, and suppliers.",
		["Vue"],
	),
	new Project(
		"Kenroz",
		["#7367f0", "#702882"],
		"Kenroz is a powerful and intuitive school management system that streamlines teacher and student management, simplifies fee collection, and automates administrative tasks to help your school run more efficiently.",
		["Vue", "Nuxt", "Tailwind"],
	),
	new Project(
		"Wellyfe",
		["#2d80bf", "#8fc1e8"],
		"Wellyfe is a hassle-free patient-to-doctor application that streamlines appointment bookings and enables secure, convenient communication between patients and doctors.",
		["Vue", "Nuxt", "Tailwind"],
	),
];
</script>

<template>
	<div class="text-white">
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 text-center place-items-center"
		>
			<WorkCard
				v-for="(project, index) in projects"
				:key="index"
				:details="project"
			/>
		</div>
	</div>
</template>
