<script>
	import Navbar from '$lib/components/block/navbar/navbar.svelte';
	import '../app.pcss';
</script>

<Navbar />
<div class="container pt-20">
	<slot />
</div>
