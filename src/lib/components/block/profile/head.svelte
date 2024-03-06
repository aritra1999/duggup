<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ExternalLink, MoreHorizontal } from 'lucide-svelte';

	export let profile: any;
</script>

<section>
	<div class="flex w-full items-center">
		<div class="w-1/6 p-6">
			<div class=" flex flex-col items-center">
				<img
					src={profile.avatar}
					class="mb-2 h-32 w-32 rounded-full border-4 border-zinc-100"
					alt="avatar"
				/>
				<div>
					<h3 class="text-center">{profile.name}</h3>
				</div>
			</div>
		</div>
		<div class="w-4/6 p-6">
			<p class="my-7">{profile.bio}</p>
			<Button variant="outline">Follow</Button>
		</div>
		<div class="w-1/6 p-6">
			<div class="mb-4 flex flex-col items-end">
				<img src={profile.organization.logo} alt="organization" class="h-9 w-9 rounded-full" />
				<h5>{profile.organization.name}</h5>
				<p class="text-sm text-zinc-400">{profile.organization.role}</p>
			</div>
			<div class="flex items-center justify-between text-zinc-500">
				<a
					class="flex items-center text-sm hover:underline"
					href={profile.portfolio}
					target="_blank"
				>
					My Website
					<ExternalLink class="ml-2 h-5 w-5" />
				</a>
				<Button variant="ghost" class="px-0"><MoreHorizontal class="h-5 w-5" /></Button>
			</div>
		</div>
	</div>
</section>
