<script lang="ts">
	import c1 from '$lib/images/c1.svg';
	import type { BlogActivity } from '$lib/components/block/profile/utils';
	import * as Card from '$lib/components/ui/card';

	export let activities: BlogActivity[] = [];
	export let timeStamp: string;
</script>

{#if activities}
	<div class="flex w-full items-center">
		<div class="w-[190px] pr-2 text-end text-xs text-muted-foreground">{timeStamp}</div>
		<div class="flex h-full w-[50px] justify-center">
			<img src={c1} alt="" class="z-40 h-3 w-3" />
		</div>
		<div class="-ml-[22px] w-full border-l border-dotted border-zinc-300 pb-3 pl-[30px] pt-6">
			<div class="columns-3xs gap-9">
				{#each activities as activity}
					<Card.Root class="mb-9 last:mb-0">
						<img src={activity.thumbnail} alt="" class="h-32 w-full rounded-t-lg object-cover" />
						<Card.Content>
							<p class="text-xs leading-5">{activity.description}</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="text-center">No activity</div>
{/if}
