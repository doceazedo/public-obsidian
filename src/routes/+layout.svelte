<script lang="ts">
	import '@picocss/pico';
	import '$lib/global.css';
</script>

<slot />

<footer class="container">
	<small>
		Feito com
		<a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a>,
		<a href="https://picocss.com" target="_blank" rel="noopener noreferrer">Pico</a> e
		<a href="https://mega.js.org/" target="_blank" rel="noopener noreferrer">MEGA</a>
		&bull;
		<a href="https://github.com/doceazedo/public-todos">Código-fonte</a>
	</small>
</footer>
