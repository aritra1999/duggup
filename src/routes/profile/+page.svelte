<script class="ts">
	import Activity from '$lib/components/block/profile/activities.svelte';
	import ProfileHead from '$lib/components/block/profile/head.svelte';

	export let data;
</script>

<div class="flex flex-col items-start">
	<ProfileHead profile={data.profile} />
	<Activity activityMap={data.activity} />
</div>
