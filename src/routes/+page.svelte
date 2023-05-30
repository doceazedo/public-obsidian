<script lang="ts">
	import { PUBLIC_FILES } from '$lib/stores';
	import PageTitle from '$lib/PageTitle.svelte';
</script>

<header class="container">
	<hgroup>
		<PageTitle>DoceAzedo.md</PageTitle>
		<h2>Anotações e à fazeres de alguns dos meus projetos públicos ativos</h2>
	</hgroup>
</header>

<main class="container">
	<ul>
		{#each Object.keys($PUBLIC_FILES) as id}
			<li>
				<a href="/{id}">{$PUBLIC_FILES[id].label}</a>
			</li>
		{/each}
	</ul>
</main>
