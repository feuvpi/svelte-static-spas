<script lang="ts">
	import '../app.css';
	// import { currentTheme } from '$lib/themes/Themes.svelte';
	export const prerender = true;
	let { children } = $props();
</script>

<div class="bg-black">
	<slot />
</div>
