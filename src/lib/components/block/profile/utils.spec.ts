import { describe, expect, test } from 'vitest';
import {
	convertDate,
	type BlogActivity,
	type ExperienceActivity,
	groupActivity
} from '$lib/components/block/profile/utils';

describe('convertDate', () => {
	test('returns the correct string format of a date', () => {
		const date = new Date('2022-12-30');
		expect(convertDate(date)).toBe('December 2022');
	});
});

describe('groupActivity', () => {
	const mockActivities: (BlogActivity | ExperienceActivity)[] = [
		{
			id: 1,
			type: 'blog',
			thumbnail: 'url',
			description: 'Blog post 1',
			date: new Date('2022-12-30')
		},
		{
			id: 2,
			type: 'experience',
			joined: new Date('2022-12-30'),
			organization: {
				name: 'Company 1',
				location: 'Location 1',
				role: 'Role 1',
				logo: 'url'
			}
		}
	];

	test('groups activities by date correctly', () => {
		const result = groupActivity(mockActivities);
		const expectedDate = convertDate((mockActivities[0] as BlogActivity).date);

		expect(result[expectedDate]).toHaveLength(2);
		expect(result[expectedDate]).toEqual(mockActivities);
	});

	test('handles activities array with different dates', () => {
		const differentDate: ExperienceActivity = {
			id: 3,
			type: 'experience',
			joined: new Date('2022-11-30T15:30:00'),
			organization: {
				name: 'Company 2',
				location: 'Location 2',
				role: 'Role 2',
				logo: 'url'
			}
		};

		const result = groupActivity([...mockActivities, differentDate]);
		const expectedDate1 = convertDate((mockActivities[0] as BlogActivity).date);
		const expectedDate2 = convertDate(differentDate.joined);

		expect(result[expectedDate1]).toHaveLength(2);
		expect(result[expectedDate2]).toHaveLength(1);
	});
});
