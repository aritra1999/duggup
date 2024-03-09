<script lang="ts">
	import logo from '$lib/images/logo-full.svg';
	import home from '$lib/images/home.svg';
	import explore from '$lib/images/explore.svg';
	import learn from '$lib/images/learn.svg';
	import add from '$lib/images/add.svg';
	import { Button } from '$lib/components/ui/button';
	import Auth from '$lib/components/block/auth/auth.svelte';
</script>

<navbar class="fixed z-50 h-16 w-screen bg-background">
	<div
		class="container flex h-full items-center justify-between border-b border-dotted border-zinc-300"
	>
		<div>
			<img src={logo} alt="duggup" class="h-6" />
		</div>
		<div class="flex items-center space-x-8">
			<div class="flex space-x-8">
				<a href="/home" class="flex items-center text-xs text-zinc-500">
					<img src={home} alt="home" class="mr-2 h-4" />
					Home
				</a>
				<a href="/explore" class="flex items-center text-xs text-zinc-500">
					<img src={explore} alt="explore" class="mr-2 h-4" />
					Explore
				</a>
				<a href="/learn" class="flex items-center text-xs text-zinc-500">
					<img src={learn} alt="learn" class="mr-2 h-4" />
					Learn
				</a>
			</div>
			<div>
				<Button variant="outline">
					<img src={add} alt="learn" class="mr-2 h-4" />
					Post
				</Button>
			</div>
			<div>
				<Auth />
			</div>
		</div>
	</div>
</navbar>
