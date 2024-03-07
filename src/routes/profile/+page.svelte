<script class="ts">
	import Activity from '$lib/components/block/profile/activity.svelte';
	import ProfileHead from '$lib/components/block/profile/head.svelte';

	export let data;
</script>

<ProfileHead profile={data.profile} />
<Activity activity={data.activity} />
