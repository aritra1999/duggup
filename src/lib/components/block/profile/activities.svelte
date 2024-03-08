<script lang="ts">
	import type { BlogActivity, ExperienceActivity } from '$lib/components/block/profile/utils';
	import Activity from '$lib/components/block/profile/activity.svelte';

	export let activityMap: Record<string, (BlogActivity | ExperienceActivity)[]> = {};
</script>

<section class="w-10/12">
	{#if activityMap}
		<div class="flex flex-col">
			{#each Object.entries(activityMap) as [timeStamp, activities]}
				<Activity {activities} {timeStamp} />
			{/each}
		</div>
	{:else}
		<div class="text-center">No activity</div>
	{/if}
</section>
