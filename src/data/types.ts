export type DatabaseProjectViewIcon =
	| "Youtube"
	| "Google Play"
	| "Chrome Web Store";

export type DatabaseProject = {
	bgColor: string;
	accColor: string;
	heading: string;
	subheading: string;
	tools: string[];
	platforms: string[];
	gitlink: string;
	viewlink: string;
	viewicon: DatabaseProjectViewIcon;
	role: string;
	team: string;
	achievements: string[];
	body: string;
	live: boolean;
};

export type DatabaseExperience = {
	company: string;
	role: string;
	yearStart?: string;
	yearEnd: string;
	description: string;
};

export type Database = {
	[key: string]: any;
	Projects: Record<string, DatabaseProject>;
	Experience: DatabaseExperience[];
};
