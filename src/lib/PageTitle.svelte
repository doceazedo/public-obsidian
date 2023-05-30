<script lang="ts">
	let title: HTMLElement;
</script>

<h1 bind:this={title}><slot /></h1>

<svelte:head>
	{#if title}
		<title>{title.innerText}</title>
	{/if}
</svelte:head>
