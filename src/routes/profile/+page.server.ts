import {
	groupActivity,
	type BlogActivity,
	type ExperienceActivity
} from '$lib/components/block/profile/utils';
import type { PageServerLoad } from './$types';

const mockProfile = {
	name: 'Aritra Mondal',
	avatar: 'https://avatars.githubusercontent.com/u/95604384?v=4',
	bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis pariatur tenetur molestiae ad nisi? Sunt nihil ducimus quod sint ad quo, laudantium reprehenderit nemo iure. Aspernatur earum blanditiis voluptas.',
	organization: {
		name: 'LeanIX',
		role: 'Software Engineer',
		logo: 'https://www.leanix.net/hs-fs/hubfs/Downloads/Homepage%20banner/Web_LatestUpdate.png?width=1343&height=1603&name=Web_LatestUpdate.png'
	},
	portfolio: 'https://aritra1999.github.io/'
};

const mockBlogActivity: (BlogActivity | ExperienceActivity)[] = [
	{
		id: 1,
		type: 'blog',
		description: 'No amount of technology can convert a bad story into a good story.',
		thumbnail: 'https://picsum.photos/500',
		date: new Date('2023-12-01')
	},
	{
		id: 2,
		type: 'blog',
		description: "Most people don't have original ideas. Here is how Sam Altman pushes himself...",
		thumbnail: 'https://picsum.photos/500',
		date: new Date('2023-12-03')
	},
	{
		id: 3,
		type: 'blog',
		description: `Startup Lesson I am reflecting. Don't build for the "average person".`,
		thumbnail: 'https://picsum.photos/500',
		date: new Date('2023-11-02')
	},
	{
		id: 4,
		type: 'blog',
		description: `Your biggest regrets at 80 will be acts of omission.`,
		thumbnail: 'https://picsum.photos/500',
		date: new Date('2023-11-03')
	},
	{
		id: 5,
		type: 'experience',
		action: 'joined',
		date: new Date('2023-12-01'),
		role: 'Software Development Engineer',
		workingHours: 'Full time',
		location: 'Bonn, Germany',
		organization: {
			name: 'LeanIX',
			location: 'Bonn, Germany',
			logo: 'https://www.leanix.net/hs-fs/hubfs/Downloads/Homepage%20banner/Web_LatestUpdate.png?width=1343&height=1603&name=Web_LatestUpdate.png'
		}
	},
	{
		id: 5,
		type: 'experience',
		date: new Date('2023-12-01'),
		action: 'joined',
		role: 'Software Development Engineer',
		workingHours: 'Full time',
		location: 'Hyderabad, India',
		organization: {
			name: 'LeanIX',
			location: 'Hyderabad, India',
			logo: 'https://www.leanix.net/hs-fs/hubfs/Downloads/Homepage%20banner/Web_LatestUpdate.png?width=1343&height=1603&name=Web_LatestUpdate.png'
		}
	},
	{
		id: 6,
		type: 'experience',
		date: new Date('2023-11-12'),
		action: 'joined',
		role: 'Software Engineering Intern',
		workingHours: 'Full time',
		location: 'Remote',
		organization: {
			name: 'LeanIX',
			location: 'Bonn, Germany',
			logo: 'https://www.leanix.net/hs-fs/hubfs/Downloads/Homepage%20banner/Web_LatestUpdate.png?width=1343&height=1603&name=Web_LatestUpdate.png'
		}
	}
];

export const load: PageServerLoad = async () => {
	const profile = mockProfile;
	const activity = groupActivity(mockBlogActivity);
	return { profile, activity };
};
