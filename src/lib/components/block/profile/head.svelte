<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, MoreHorizontal } from 'lucide-svelte';

	export let profile: any;
	let followed = false;
</script>

<div class="flex w-full items-center">
	<div class="w-4/12 p-6">
		<div class=" flex flex-col items-center">
			<img
				src={profile.avatar}
				class="mb-2 h-32 w-32 rounded-full border-4 border-slate-200"
				alt="avatar"
			/>
			<div>
				<h3 class="text-center">{profile.name}</h3>
			</div>
		</div>
	</div>
	<div class="w-7/12 p-6">
		<p class="my-7 text-sm font-normal leading-6">{profile.bio}</p>
		<Button
			variant="outline"
			on:click={() => {
				followed = !followed;
			}}
		>
			{followed ? 'Followed' : 'Follow'}
		</Button>
	</div>
	<div class="w-3/12 p-6">
		<div class="mb-4 flex flex-col items-end">
			<img src={profile.organization.logo} alt="organization" class="h-9 w-9 rounded-full" />
			<h5>{profile.organization.name}</h5>
			<p class="text-xs text-muted-foreground">{profile.organization.role}</p>
		</div>
		<div class="flex items-center justify-end space-x-2">
			<a class="flex items-center text-xs hover:underline" href={profile.portfolio} target="_blank">
				My Website
				<ExternalLink class="ml-2 h-4 w-4" />
			</a>
			<Button variant="ghost" size="icon">
				<MoreHorizontal class="h-4 w-4 text-muted-foreground" />
			</Button>
		</div>
	</div>
</div>
