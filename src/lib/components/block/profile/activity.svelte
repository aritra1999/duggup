<script lang="ts">
	import Blogs from '$lib/components/block/profile/blogs.svelte';
	import Experiences from '$lib/components/block/profile/experiences.svelte';
	import type { BlogActivity, ExperienceActivity } from '$lib/components/block/profile/utils';

	export let activities: (BlogActivity | ExperienceActivity)[] = [];
	export let timeStamp: string;

	const blogActivity: BlogActivity[] = activities.filter(
		(activity) => activity.type === 'blog'
	) as BlogActivity[];

	const experienceActivity: ExperienceActivity[] = activities.filter(
		(activity) => activity.type === 'experience'
	) as ExperienceActivity[];
</script>

<Blogs activities={blogActivity} {timeStamp} />
<Experiences activities={experienceActivity} {timeStamp} />
