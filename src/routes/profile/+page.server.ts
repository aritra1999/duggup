import type { PageServerLoad } from './$types';

const mockProfile = {
	name: 'Aritra Mondal',
	avatar: 'https://avatars.githubusercontent.com/u/95604384?v=4',
	bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis pariatur tenetur molestiae ad nisi? Sunt nihil ducimus quod sint ad quo, laudantium reprehenderit nemo iure. Aspernatur earum blanditiis voluptas.',
	organization: {
		name: 'LeanIX',
		role: 'Software Engineer'
	},
	portfolio: 'https://aritra1999.github.io/'
};

export const load: PageServerLoad = async () => {
	const profile = mockProfile;

	return { profile };
};
