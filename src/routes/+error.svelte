<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="container">
	<hgroup>
		<h1>Erro {$page.status}</h1>
		<h2>{$page?.error?.message}</h2>
	</hgroup>
	<a href="/" role="button">Voltar ao início</a>
</main>
