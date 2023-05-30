<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import type { FileResponse } from '../[file].json/+server';

	export let data;

	let content: string;

	const fetchFileContent = async () => {
		try {
			const resp = await fetch(`/${data.id}.json`);
			const json = (await resp.json()) as FileResponse;
			content = marked.parse(json.content);
		} catch (e: any) {
			throw error(e.status || 500, e.message || 'Erro desconhecido');
		}
	};

	onMount(() => fetchFileContent());
</script>

<header class="container">
	<hgroup>
		<h1>{data.fileName}.md</h1>
		<h2>Lorem ipsum dolor sit amet</h2>
	</hgroup>
	<nav>
		<ul>
			<li>
				<a href="/" role="button">Voltar ao início</a>
			</li>
		</ul>
	</nav>
</header>

<main class="container">
	{#if content}
		<article>{@html content}</article>
	{:else}
		<article aria-busy="true">Carregando dados do arquivo...</article>
	{/if}
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media screen and (max-width: 768px) {
		header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
