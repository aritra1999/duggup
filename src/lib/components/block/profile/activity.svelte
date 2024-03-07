<script lang="ts">
	import type { BlogActivity, ExperienceActivity } from '$lib/components/block/profile/utils';

	export let activity: (BlogActivity | ExperienceActivity)[] = [];
</script>

{#if activity}
	<div class="flex flex-col space-y-4">
		{#each activity as item}
			{item}
		{/each}
	</div>
{:else}
	<div class="text-center">No activity</div>
{/if}
