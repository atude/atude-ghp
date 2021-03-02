import React from "react";
import "../Components.css";
import { SvgIcon, Typography } from "@material-ui/core";

import {
	Android,
	GoogleChrome,
	LanguageCsharp,
	LanguageC,
	LanguageJavascript,
	React as ReactIcon,
	LanguageHtml5,
	LanguageCss3,
	Unity,
	MaterialUi,
	Firebase,
	Application,
	LanguageTypescript,
} from "mdi-material-ui";

export const getMiniIcons = (
	types: string[],
	setColor: string
): JSX.Element[] => {
	const iconList: JSX.Element[] = [];
	const miniIconColor = { color: setColor };

	types.forEach((item) => {
		switch (item) {
			case "Android":
				iconList.push(<Android fontSize="default" style={miniIconColor} />);
				break;
			case "Chrome API":
			case "Chrome":
				iconList.push(
					<GoogleChrome fontSize="default" style={miniIconColor} />
				);
				break;
			case "Web":
				iconList.push(<Application fontSize="default" style={miniIconColor} />);
				break;
			case "C":
				iconList.push(<LanguageC fontSize="default" style={miniIconColor} />);
				break;
			case "C#":
				iconList.push(
					<LanguageCsharp fontSize="default" style={miniIconColor} />
				);
				break;
			case "TypeScript":
				iconList.push(
					<LanguageTypescript fontSize="default" style={miniIconColor} />
				);
				break;
			case "JavaScript":
				iconList.push(
					<LanguageJavascript fontSize="default" style={miniIconColor} />
				);
				break;
			case "React":
				iconList.push(<ReactIcon fontSize="default" style={miniIconColor} />);
				break;
			case "React Native":
				iconList.push(<ReactIcon fontSize="default" style={miniIconColor} />);
				break;
			case "React Native Paper":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="0 0 850 850"
						style={miniIconColor}
					>
						<g transform="translate(0,800) scale(0.1,-0.1)">
							<path
								stroke={miniIconColor.color}
								strokeWidth="300"
								d="M5380 7073 c-69 -12 -152 -38 -218 -68 -40 -19 -714 -404 -1498 -857 -1035 -597 -1430 -830 -1439 -848 -7 -14 -148 -524 -314 -1133 -281 -1029 -302 -1110 -291 -1143 14 -41 60 -74 105 -74 22 0 251 127 825 459 437 252 796 458 797 457 0 0 -122 -449 -273 -996 -200 -726 -273 -1003 -268 -1025 4 -23 142 -167 567 -593 614 -614 599 -602 673 -566 21 11 42 26 47 34 5 9 131 471 281 1029 l271 1013 398 237 c219 130 424 258 457 284 111 89 212 230 282 397 41 95 630 2248 649 2371 7 43 9 118 6 179 -22 409 -317 751 -719 834 -72 15 -273 20 -338 9z m330 -234 c308 -82 524 -374 508 -689 -5 -85 -30 -184 -227 -910 -122 -448 -224 -823 -227 -833 -4 -14 -17 0 -49 55 -111 190 -300 334 -531 404 -81 25 -103 28 -249 28 -145 0 -168 -3 -248 -27 -48 -15 -118 -43 -155 -61 -37 -19 -643 -368 -1347 -774 -704 -407 -1281 -739 -1282 -738 -1 0 114 423 254 938 l256 938 1414 816 c936 540 1439 825 1486 841 129 45 255 49 397 12z m-627 -2175 c204 -46 376 -179 463 -359 54 -112 68 -182 68 -330 0 -121 -2 -136 -31 -211 -53 -141 -135 -250 -248 -328 -125 -88 -2229 -1327 -2233 -1316 -3 8 515 1901 522 1907 10 10 1016 587 1045 599 123 53 283 67 414 38z m-925 -2868 l-213 -796 -422 422 c-239 239 -419 426 -414 431 12 12 1255 745 1259 742 1 -1 -93 -361 -210 -799z"
							/>
						</g>
					</SvgIcon>
				);
				break;
			case "Material UI":
				iconList.push(<MaterialUi fontSize="default" style={miniIconColor} />);
				break;
			case "Expo":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="0 0 256 256"
						style={miniIconColor}
					>
						<path d="M46 178.5c.3 3.62 1.56 7.24 4.89 12.1 3.94 5.77 10.72 8.94 15.66 3.85 3.34-3.43 39.42-66.5 56.81-90.4a5.18 5.18 0 0 1 8.5 0c17.39 23.9 53.47 86.97 56.8 90.4 4.94 5.09 11.73 1.92 15.67-3.85 3.88-5.68 4.95-9.66 4.95-13.92 0-2.9-56.19-107.49-61.85-116.19-5.45-8.37-7.1-10.2-16.31-10.49h-7.02c-9.21.3-10.87 2.12-16.31 10.49-5.55 8.52-59.55 108.98-61.79 115.87v2.14z" />
					</SvgIcon>
				);
				break;
			case "HTML":
				iconList.push(
					<LanguageHtml5 fontSize="default" style={miniIconColor} />
				);
				break;
			case "CSS":
				iconList.push(
					<LanguageCss3 fontSize="default" style={miniIconColor} />
				);
				break;
			case "Unity":
				iconList.push(<Unity fontSize="default" style={miniIconColor} />);
				break;
			case "Firebase":
				iconList.push(<Firebase fontSize="default" style={miniIconColor} />);
				break;
			case "Express":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="0 0 128 128"
						style={miniIconColor}
					>
						<g transform="translate(6.4, 6.4) scale(0.9, 0.9)">
							<path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z" />
							<path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z" />
						</g>
					</SvgIcon>
				);
				break;
			case "Koa":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="0 0 512 275"
						style={miniIconColor}
					>
						<g>
							<path
								d="M25.6523877,0 L25.6523877,182.498415 L106.274177,91.6156702 L109.938804,91.6156702 L50.2053873,159.044803 L128.994864,274.847011 L103.342476,274.847011 L35.54688,175.169161 L25.6523877,186.529505 L25.6523877,274.847011 L0,274.847011 L0,0 L25.6523877,0 Z M153.010067,184.729644 C153.010067,125.276424 191.37165,92.1677439 241.314089,92.1677439 C287.275608,92.1677439 326.722897,115.664226 326.722897,180.457556 C326.722897,239.910777 288.361313,273.019456 238.418875,273.019456 C192.457356,273.019456 153.010067,249.522974 153.010067,184.729644 Z M176.806345,184.741069 C176.806345,247.375581 204.303498,270.639829 238.399967,270.639829 C274.32958,270.639829 302.926619,237.711971 302.926619,180.446131 C302.926619,117.811619 275.429466,94.5473716 241.332997,94.5473716 C205.403384,94.5473716 176.806345,127.475229 176.806345,184.741069 Z M500.990371,271.957131 C457.662155,271.957131 459.793051,246.680612 459.793051,246.680612 L459.793051,241.696509 C452.690065,254.512773 439.194391,273.38116 404.034609,273.38116 C362.482139,273.38116 355.379153,247.036619 353.248257,232.796327 C349.696764,208.943837 358.220347,191.143472 421.436925,186.871384 C437.418644,185.447355 455.531259,186.159369 459.793051,186.515377 L459.793051,127.418163 C459.793051,127.418163 463.699693,95.3775057 422.502373,95.3775057 C400.483116,95.3775057 373.136619,104.633696 364.257886,109.617798 L362.837288,107.125747 C367.45423,104.989703 389.118338,92.5294473 427.119314,92.5294473 C478.615965,92.5294473 484.653503,115.313915 484.653503,127.418163 L484.653503,246.680612 C484.653503,269.821087 500.990371,269.109072 500.990371,269.109072 L512,269.109072 L512,271.957131 L500.990371,271.957131 Z M410.248646,271.001532 C436.87535,271.001532 458.597134,246.764229 459.648188,232.294197 L459.648188,188.522351 C455.443972,188.160601 438.977458,186.713598 421.459889,188.884102 C384.322645,193.225112 376.965266,206.24814 379.067374,232.655948 C380.468779,250.381737 385.72405,271.001532 410.248646,271.001532 Z"
								fill="#000000"
								fillRule="nonzero"
							></path>
						</g>
					</SvgIcon>
				);
				break;
			case "Node":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="0 0 600 600"
						style={miniIconColor}
					>
						<g transform="translate(60, 60) scale(0.9, 0.95)">
							<path d="m485.291 129.408-224-128c-3.285-1.877-7.296-1.877-10.581 0l-224 128c-3.328 1.899-5.376 5.44-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128c3.328-1.899 5.376-5.44 5.376-9.259v-234.667c-.001-3.819-2.049-7.36-5.377-9.259z" />
						</g>
					</SvgIcon>
				);
				break;
			case "Apollo":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="0 0 256 256"
						style={miniIconColor}
					>
						<g>
							<path
								d="M160.227,178.5186 L187.857,178.5186 L143.75,64.0486 L113.201,64.0486 L69.094,178.5186 L96.726,178.5186 L103.934,159.1286 L145.609,159.1286 L138.065,137.6726 L110.625,137.6726 L128.475,88.4186 L160.227,178.5186 Z M251.339,93.768 C250.357,90.232 246.705,88.155 243.154,89.141 C239.617,90.123 237.544,93.787 238.526,97.324 C241.299,107.309 242.704,117.63 242.704,128 C242.704,191.248 191.248,242.702 128,242.702 C64.752,242.702 13.297,191.248 13.297,128 C13.297,64.751 64.752,13.296 128,13.296 C154.793,13.296 180.718,22.814 201.179,39.752 C200.383,41.652 199.941,43.737 199.941,45.925 C199.941,54.76 207.103,61.922 215.938,61.922 C224.773,61.922 231.935,54.76 231.935,45.925 C231.935,37.09 224.773,29.928 215.938,29.928 C214.237,29.928 212.6,30.199 211.062,30.691 C188.022,11.056 158.513,0 128,0 C57.421,0 0,57.42 0,128 C0,198.579 57.421,255.999 128,255.999 C198.579,255.999 256,198.579 256,128 C256,116.428 254.433,104.91 251.339,93.768 Z"
								fill="#000000"
							></path>
						</g>
					</SvgIcon>
				);
				break;
			case "Puppeteer":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="-35 -75 460 460"
						style={miniIconColor}
					>
						<path d="M272.169 35.748 L 200.570 71.121 129.739 36.140 C 90.782 16.901,58.114 1.159,57.145 1.159 C 56.176 1.159,43.444 6.984,28.851 14.104 L 2.319 27.048 2.319 42.408 L 2.319 57.768 19.420 66.676 C 28.826 71.575,37.278 76.309,38.203 77.196 C 39.780 78.708,37.965 108.991,33.989 147.517 L 33.337 153.831 17.248 161.810 L 1.159 169.789 1.159 185.754 L 1.159 201.720 13.823 208.071 C 20.787 211.564,26.717 214.829,26.999 215.327 C 28.365 217.736,25.315 233.520,21.774 242.366 L 17.847 252.174 11.683 252.799 C 1.197 253.862,0.000 256.249,-0.000 276.096 L -0.000 292.352 3.389 295.741 L 6.778 299.130 199.420 299.130 L 392.062 299.130 395.452 295.741 L 398.841 292.352 398.841 276.096 C 398.841 256.910,397.575 254.101,388.370 252.857 L 383.319 252.174 379.389 242.366 C 377.166 236.819,375.056 229.012,374.532 224.395 C 373.429 214.686,372.771 215.474,388.696 207.429 L 400.000 201.718 400.000 185.753 L 400.000 169.789 383.911 161.810 L 367.822 153.831 367.171 147.517 C 363.194 108.991,361.380 78.708,362.956 77.196 C 363.881 76.309,372.333 71.575,381.739 66.676 L 398.841 57.768 398.841 42.482 L 398.841 27.195 386.377 20.962 C 379.522 17.534,367.130 11.499,358.841 7.552 L 343.768 0.375 272.169 35.748 M95.576 106.107 L 112.892 115.139 82.987 130.101 C 66.539 138.330,52.798 144.779,52.452 144.433 C 51.807 143.788,55.233 96.360,56.416 89.557 L 57.073 85.780 67.667 91.427 C 73.494 94.533,86.053 101.139,95.576 106.107 M347.180 116.345 C 348.261 131.553,348.905 144.235,348.611 144.529 C 348.318 144.822,334.654 138.346,318.246 130.138 L 288.415 115.213 316.070 100.550 C 335.049 90.487,343.960 86.327,344.471 87.291 C 344.880 88.064,346.099 101.138,347.180 116.345 M271.827 193.697 L 343.098 229.714 348.300 227.413 L 353.502 225.112 355.286 229.947 C 356.858 234.209,359.387 247.302,359.412 251.304 C 359.418 252.457,326.884 252.754,200.580 252.754 C 74.276 252.754,41.741 252.457,41.748 251.304 C 41.772 247.302,44.301 234.209,45.874 229.947 L 47.658 225.112 52.856 227.411 L 58.055 229.711 129.027 193.778 C 168.062 174.014,200.125 157.808,200.278 157.763 C 200.431 157.718,232.628 173.888,271.827 193.697 M36.031 267.737 C 43.500 275.205,38.390 287.536,27.826 287.536 C 17.263 287.536,12.153 275.205,19.621 267.737 C 22.279 265.079,24.049 264.348,27.826 264.348 C 31.603 264.348,33.373 265.079,36.031 267.737 M70.814 267.737 C 78.282 275.205,73.172 287.536,62.609 287.536 C 58.832 287.536,57.062 286.805,54.404 284.147 C 46.935 276.679,52.045 264.348,62.609 264.348 C 66.386 264.348,68.156 265.079,70.814 267.737 M105.596 267.737 C 113.065 275.205,107.955 287.536,97.391 287.536 C 93.614 287.536,91.844 286.805,89.186 284.147 C 81.718 276.679,86.828 264.348,97.391 264.348 C 101.168 264.348,102.938 265.079,105.596 267.737" />
					</SvgIcon>
				);
				break;
			case "CircleCI":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="-10 -6 120 120"
						style={miniIconColor}
					>
						<path d="m 38.6,52.6 c 0,-6.9 5.6,-12.5 12.5,-12.5 6.9,0 12.5,5.6 12.5,12.5 0,6.9 -5.6,12.5 -12.5,12.5 C 44.2,65.2 38.6,59.5 38.6,52.6 Z M 51.1,0 C 26.5,0 5.9,16.8 0.1,39.6 0.1,39.8 0,39.9 0,40.1 c 0,1.4 1.1,2.5 2.5,2.5 l 21.2,0 c 1,0 1.9,-0.6 2.3,-1.5 l 0,0 C 30.4,31.6 39.9,25 51.1,25 66.3,25 78.7,37.4 78.7,52.6 78.7,67.8 66.3,80.2 51.1,80.2 40,80.2 30.4,73.6 26,64.1 l 0,0 c -0.4,-0.9 -1.3,-1.5 -2.3,-1.5 l -21.2,0 c -1.4,0 -2.5,1.1 -2.5,2.5 0,0.2 0,0.3 0.1,0.5 5.8,22.8 26.4,39.6 51,39.6 29.1,0 52.7,-23.6 52.7,-52.7 C 103.8,23.5 80.2,0 51.1,0 Z" />
					</SvgIcon>
				);
				break;
			case "Jest":
				iconList.push(
					<SvgIcon
						fontSize="default"
						viewBox="-25 -25 306 323"
						style={miniIconColor}
					>
						<path d="M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z"></path>
					</SvgIcon>
				);
				break;
			default:
				break;
		}
	});

	const wrappedIconList = iconList.map((iconObj, i) => {
		return (
			<div
				key={i}
				className={
					"ProjectMiniIconParent " +
					// Fix this color check hack
					(setColor === "#A1B9CE" && "ProjectMiniIconParentDark")
				}
			>
				<div className="ProjectMiniIcon">{iconObj}</div>
				<div className="ProjectMiniIconText">
					<Typography>{types[i]}</Typography>
				</div>
			</div>
		);
	});

	return wrappedIconList;
};
