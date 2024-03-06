<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { generateInitials } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';

	const session = {
		name: 'Aritra Mondal',
		email: 'artira041999@gmail.com',
		avatar: 'https://avatars.githubusercontent.com/u/95604384?v=4'
	};
</script>

{#if session}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button variant="ghost" builders={[builder]} class="relative space-x-4 rounded-full">
				<Avatar.Root class="mr-4 h-8 w-8">
					<Avatar.Image src={session.avatar} alt="@{session.name}" />
					<Avatar.Fallback>{generateInitials(session.name)}</Avatar.Fallback>
				</Avatar.Root>
				{session.name}
				<ChevronDown class="h-4 w-4" />
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56" align="end">
			<DropdownMenu.Label class="font-normal">
				<div class="flex flex-col space-y-1">
					<p class="text-sm font-medium leading-none">
						{session.name}
					</p>
					<p class="text-xs leading-none text-muted-foreground">
						{session.email}
					</p>
				</div>
			</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item href="/profile">Profile</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>
				<Button variant="ghost" size="sm">Log out</Button>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/if}
