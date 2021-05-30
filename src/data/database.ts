import { Database } from "./types";

const database: Database = {
	Resume:
		"https://drive.google.com/file/d/1YD4MRDAQmZVvqhR5rU8Yhbe8wCydcyKz/view?usp=sharing",
	"About me": [
		"I have a passion in building well-engineered, scalable, maintainable and beautiful apps. With a skillset across frontend, design, backend and cloud, I'm able to create fullstack products that are *friendly for devs* and *captivating for users*.",
		"Some of the tools I've used recently include:",
	],
	Technologies: [
		"Here's a snapshot of tech I've used in projects ranging from small scale apps to large scale commercial products.",
	],
	Skillset: [
		"TypeScript + React + Node",
		"AWS CDK + Serverless Stack",
		"Python",
		"Bash",
		"HTML + CSS/SCSS",
	],
	Toolset: {
		Frontend: [
			"React",
			"React Native",
			"Expo",
			"Redux",
			"Redux Saga",
			"AWS Amplify",
			"Apollo",
			"Lottie",
			"Styled Components",
			"Material UI",
		],
		Backend: ["Node", "GraphQL", "Express", "AWS CDK", "PostgreSQL"],
		Cloud: [
			"AWS Lambda",
			"AWS API Gateway",
			"AWS DynamoDB",
			"AWS AppSync",
			"AWS SQS",
			"Firebase",
		],
		Devops: [
			"AWS CodePipeline",
			"Azure DevOps",
			"CircleCI",
			"GitLab CI",
			"Fastlane",
			"Vercel",
		],
		Testing: ["Puppeteer", "Jest"],
	},
	"Skills Level Frame": {
		"0": "Beginner",
		"1": "Novice",
		"2": "Competent",
		"3": "Well-versed",
		"4": "Proficient",
	},
	Experience: [
		{
			company: "Amazon Web Services",
			role: "Software Development Engineer",
			color: "#d98507",
			colorDark: "#e8ae56",
			year: "MAR 2021",
			tools: ["AWS", "TypeScript", "React"],
			description: "",
		},
		{
			company: "Zip",
			role: "Software Engineer",
			color: "#21285C",
			colorDark: "#6d7de3",
			year: "OCT 2020",
			tools: [
				"AWS",
				"TypeScript",
				"JavaScript",
				"React Native",
				"Vue",
				"Redux",
				"Node",
			],
			description:
				"At Zip, I primarily worked on the international Zip mobile app, developing an engine for custom assets, components and locales, as well as scaling build processes, to enable global collaboration on a single codebase. On this app, I also built a modular address autocomplete system for multiple regions and an extensible localisation service to control feature enablement. Additionally, I refactored 4 customer-facing apps to allow for scale and contributed to an internal admin API.",
		},
		{
			company: "ConsenSys",
			role: "Software Engineer",
			color: "#2C56DD",
			colorDark: "#8096e0",
			year: "SEP 2019",
			tools: ["Firebase", "TypeScript", "React", "Redux", "Node", "GraphQL"],
			description:
				"At ConsensSys, I worked on Impactio - a global blockchain platform to achieve sustainability development goals. Across fullstack, I developed a responsive forum system, admin services and pages for the internal dashboard, an end-to-end 2FA flow, and improved performance for frontend and CI/CD.",
		},
	],
	Projects: {
		Beams: {
			bgColor: "#212121",
			accColor: "#f74d00",
			heading: "Beams",
			subheading: "Suburb Analysis Webapp",
			tools: ["JavaScript", "React", "Node", "Express", "Material UI"],
			platforms: ["Web"],
			gitlink: "https://github.com/atude/beams",
			viewlink: "https://youtu.be/vWZBiD6iriM",
			viewicon: "Youtube",
			role: "Lead Frontend Engineer",
			team: "5 Members",
			achievements: ["Best UX: Macquarie Group Workshop 2019"],
			body:
				"A suburb analysis webapp that collates housing market data, suburb information and the user's financial and ethical requirements to help buy properties in suburbs tailored to them.",
			live: false,
		},
		Kanbie: {
			bgColor: "#35363a",
			accColor: "#ed39c9",
			heading: "Kanbie",
			subheading: "Kanban Board Chrome Extension",
			tools: ["JavaScript", "React", "Chrome API"],
			platforms: ["Chrome"],
			gitlink: "https://github.com/atude/kanbie-extension",
			viewlink:
				"https://chrome.google.com/webstore/detail/kanbie/hancagoabobbbadijbbfepodbdgjbfpf",
			viewicon: "Chrome Web Store",
			role: "Fullstack Engineer",
			team: "Solo",
			achievements: ["20,000+ installs", "Featured on Chrome Web Store"],
			body:
				"A dark themed kanban board accessible in-tab with labelling, shortcuts and themes, integrating with Chrome's API for syncing across Google accounts. ",
			live: true,
		},
		Unicore: {
			bgColor: "#453aa1",
			accColor: "#7f74e3",
			heading: "Unicore",
			subheading: "University WAM and Course Tracking App",
			tools: [
				"JavaScript",
				"React Native",
				"Expo",
				"Firebase",
				"React Native Paper",
			],
			platforms: ["Android"],
			gitlink: "https://github.com/atude/wam-calc",
			viewlink: "https://play.google.com/store/apps/details?id=com.atude.mywam",
			viewicon: "Google Play",
			role: "Fullstack Engineer",
			team: "Solo",
			achievements: ["500+ installs", "Showcased on React Native Paper"],
			body:
				"A multi-purpose tool for university students to track WAM, analyse marks and compare course progress. Includes location-based ranking methods, organised course log with filters, performance graphs and online accounts with data syncing.",
			live: true,
		},
		Sympt: {
			bgColor: "#303a3d",
			accColor: "#00A7AF",
			heading: "Sympt",
			subheading: "Disease Statistics Hub",
			tools: [
				"TypeScript",
				"React",
				"React Native",
				"Node",
				"Firebase",
				"Express",
				"Puppeteer",
				"Jest",
				"CircleCI",
			],
			platforms: ["Android", "Web"],
			gitlink: "https://github.com/atude/sympt/",
			viewlink: "https://youtu.be/1E9If8qvBP4",
			viewicon: "Youtube",
			role: "Technical Lead",
			team: "5 Members",
			achievements: [],
			body:
				"A disease hub that provides up-to-date analysis on the climate of diseases in Australia, focused on COVID-19. Sympt includes an API that processes real-time COVID data, a mobile app for viewing disease spread and an API dashboard for developers.",
			live: false,
		},
		Devote: {
			bgColor: "#3d95e8",
			accColor: "#3d95e8",
			heading: "Devote",
			subheading: "Study Management App",
			tools: ["C#", "Unity"],
			platforms: ["Android"],
			gitlink: "https://github.com/atude/devote",
			viewlink:
				"https://play.google.com/store/apps/details?id=com.cyberscopes.devote",
			viewicon: "Google Play",
			role: "Fullstack Engineer",
			team: "Solo",
			achievements: ["2500+ installs"],
			body:
				"An all-in-one hub made for high school students to organise study tasks, track assessment progress, view productively levels and assist in study-life balance.",
			live: true,
		},
	},
	Contact: {
		Links: {
			GitHub: [
				"https://github.com/atude",
				"My portfolio of open source software projects",
			],
			LinkedIn: [
				"https://www.linkedin.com/in/mozamelanwary/",
				"My professional profile and network",
			],
			"Play Store": [
				"https://play.google.com/store/apps/developer?id=atude",
				"My apps published for Android devices",
			],
		},
		Contact: {
			Discord: "atude#9929",
			Email: "mozamel.anwary1@gmail.com",
		},
	},
	"Contact Form": {
		"":
			"Have any questions about me or my work? Want to have a chat? Leave a message and I'll get back to you as soon as possible.",
	},
};

export default database;
