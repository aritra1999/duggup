<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-full items-center justify-center overflow-hidden">
	<div class="fixed text-[40vw] font-black text-slate-200 dark:text-slate-800">{$page.status}</div>
	<div class="fixed">{$page.error?.message}</div>
</div>
