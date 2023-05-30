<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import PageTitle from '$lib/PageTitle.svelte';
	import GitHubicon from '$lib/GitHubicon.svelte';
	import type { FileResponse } from '../[file].json/+server';

	export let data;

	let content: string;

	const fetchFileContent = async () => {
		try {
			const resp = await fetch(`/${data.id}.json`);
			const json = (await resp.json()) as FileResponse;
			content = marked.parse(json.content);
		} catch (err: any) {
			throw error(err.status || 500, err.message || 'Erro desconhecido');
		}
	};

	onMount(() => fetchFileContent());
</script>

<header class="container">
	<hgroup>
		<PageTitle>{data.fileName}.md</PageTitle>
		<h2>{data.description}</h2>
	</hgroup>
	<nav>
		<ul>
			<li>
				<a href="https://github.com/{data.repo}">
					<GitHubicon />
				</a>
			</li>
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
