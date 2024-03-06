<script class="ts">
	import ProfileHead from '$lib/components/block/profile/head.svelte';

	export let data;
</script>

<ProfileHead profile={data.profile} />
