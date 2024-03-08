<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'w-full break-inside-avoid rounded-lg border-border bg-card text-card-foreground shadow-sm',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
