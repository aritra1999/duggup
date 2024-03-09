export interface Activity {
	id: number;
	date: Date;
}

export interface BlogActivity extends Activity {
	type: 'blog';
	thumbnail: string;
	description: string;
}

export interface ExperienceActivity extends Activity {
	type: 'experience';
	action: 'joined' | 'left';
	role: string;
	workingHours: string;
	location: string;
	organization: {
		name: string;
		location: string;
		logo: string;
	};
}

export const convertDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short'
	};
	return date.toLocaleDateString('en-US', options);
};

export const groupActivity = (activities: (BlogActivity | ExperienceActivity)[]) => {
	const activityMap: Record<string, (BlogActivity | ExperienceActivity)[]> = {};

	for (const activity of activities) {
		try {
			const date = convertDate(activity.date);
			if (activityMap[date]) {
				activityMap[date].push(activity);
			} else {
				activityMap[date] = [activity];
			}
		} catch (e) {
			console.error('Error grouping activity', e);
		}
	}

	return activityMap;
};
