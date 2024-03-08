<script lang="ts">
	import c2 from '$lib/images/c2.svg';
	import type { ExperienceActivity } from '$lib/components/block/profile/utils';
	import * as Card from '$lib/components/ui/card';
	import { ChevronUp } from 'lucide-svelte';

	export let activities: ExperienceActivity[] = [];
	export let timeStamp: string;
</script>

{#if activities}
	{#each activities as activity}
		<div class="flex items-center">
			<div class="w-[190px] pr-2 text-end font-normal text-muted-foreground">
				<div class="flex flex-col items-end">
					<img
						src={activity.organization.logo}
						alt="organization"
						class="mb-2 h-10 w-10 rounded-full"
					/>
					<span class="text-md font-bold text-slate-900">{activity.organization.name}</span>
					<p class="text-xs">{activity.organization.role}</p>
					<p class="text-xs">Joined</p>
				</div>
				<div class="text-xs">{timeStamp}</div>
			</div>
			<div class="relative flex w-[50px] justify-center">
				<ChevronUp class="absolute -top-16 left-[10px] h-4 w-4 text-muted-foreground" />
				<img src={c2} alt="" class="z-40 h-5 w-5" />
			</div>
			<div
				class="-ml-[22px] flex h-40 w-full items-center border-l border-dotted border-zinc-300 pl-[30px]"
			>
				<Card.Root class="border-0">
					<Card.Content>
						<h5>{activity.organization.role}</h5>
						<p class="text-xs text-muted-foreground">Full Time, Remote</p>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	{/each}
{:else}
	<div class="text-center">No activity</div>
{/if}
