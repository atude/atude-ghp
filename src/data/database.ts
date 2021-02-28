import { Database } from "./types";

const database: Database = {
	Resume:
		"https://drive.google.com/file/d/1YD4MRDAQmZVvqhR5rU8Yhbe8wCydcyKz/view?usp=sharing",
	"About me": {
		NULL:
			"I have a passion to build well-engineered, scalable, maintainable and beautiful apps. With a skillset across frontend, design, backend and cloud, I'm able to create captivating experiences make our everyday lives interesting.",
		"": "Some of the languages I've used recently include:",
	},
	Technologies: {
		"":
			"Here's a snapshot of tech I've used from small scale apps to large scale commercial products.",
	},
	Skillset: {
		TS: { level: 4, desc: "TypeScript" },
		JS: { level: 4, desc: "JavaScript (ES2020)" },
		Python: { level: 4, desc: "Python" },
		"C#": { level: 3, desc: "C#" },
		Bash: { level: 3, desc: "Bash" },
		HTML: { level: 4, desc: "HTML/CSS/SCSS" },
	},
	Toolset: {
		Frontend: [
			"React",
			"React Native",
			"Next",
			"Vue",
			"Expo",
			"Redux",
			"Redux Saga",
			"Apollo",
			"Lottie",
			"Styled Components",
			"Material UI",
		],
		Backend: ["Node", "Express", "GraphQL", "Serverless", "PostgreSQL"],
		Cloud: ["AWS Lambda", "AWS DynamoDB", "AWS API Gateway", "Firebase"],
		Devops: ["Azure DevOps", "CircleCI", "GitLab CI", "Fastlane", "Vercel"],
		Testing: ["Puppeteer", "Jest"],
		Design: ["Figma", "XD", "GIMP", "Photoshop"],
	},
	"Skills Level Frame": {
		"0": "Beginner",
		"1": "Novice",
		"2": "Competent",
		"3": "Well-versed",
		"4": "Proficient",
	},
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
				"A suburb analysis webapp that collates housing market data and suburb information with user financial/ethical requirements to help buy properties in suburbs tailored to you.",
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
			achievements: [
				"20,000+ installs",
				"Featured on Chrome Web Store;https://drive.google.com/file/d/1xhySBmxpCRzXEB7sFEusBj2Q0o9Fp0VJ/view?usp=sharing",
			],
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
			achievements: [
				"500+ installs",
				"Showcased on React Native Paper;https://callstack.github.io/react-native-paper/showcase.html",
			],
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
				"A disease hub that provides up-to-date analysis on the climate of diseases in Australia, focused on COVID-19. Sympt includes the mobile app for users as well as an API and dashboard for developers.",
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
