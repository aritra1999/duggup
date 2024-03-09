<script class="ts">
	import Activity from '$lib/components/block/profile/activities.svelte';
	import ProfileHead from '$lib/components/block/profile/head.svelte';

	export let data;
</script>

<div class="flex flex-col items-start">
	<section class="w-full lg:w-11/12">
		<ProfileHead profile={data.profile} />
	</section>
	<section class="w-full lg:w-10/12">
		<Activity activityMap={data.activity} />
	</section>
</div>
