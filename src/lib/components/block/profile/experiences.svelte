<script lang="ts">
	import c2 from '$lib/images/c2.svg';
	import type { ExperienceActivity } from '$lib/components/block/profile/utils';
	import * as Card from '$lib/components/ui/card';
	import { ChevronUp } from 'lucide-svelte';
	import '$lib/components/block/profile/profile.pcss';

	export let activities: ExperienceActivity[] = [];
	export let timeStamp: string;
</script>

{#if activities}
	{#each activities as activity}
		<div class="flex items-center">
			<div class="left-container">
				<div class="flex flex-col items-end">
					<img
						src={activity.organization.logo}
						alt="organization"
						class="mb-2 h-10 w-10 rounded-full"
					/>
					<span class="text-md font-bold text-slate-900">{activity.organization.name}</span>
					<p class="text-xs">{activity.organization.location}</p>
					<p class="text-xs capitalize">{activity.action}</p>
				</div>
				<div class="text-xs">{timeStamp}</div>
			</div>
			<div class="middle-container relative">
				<ChevronUp
					class="absolute -top-16 left-[calc(50%-1px)] h-4 w-4 -translate-x-1/2 text-muted-foreground"
				/>
				<img src={c2} alt="" class="z-40 h-5 w-5 text-muted-foreground" />
			</div>
			<div class="right-container flex h-40 items-center">
				<Card.Root class="border-0">
					<Card.Content>
						<h5>{activity.role}</h5>
						<p class="text-xs text-muted-foreground">
							{activity.workingHours}, {activity.location}
						</p>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	{/each}
{:else}
	<div class="text-center">No activity</div>
{/if}
