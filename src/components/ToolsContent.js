import React, { useState } from "react";
import "./Components.css";
import { Grid, Typography, Chip, Divider } from "@material-ui/core";

import Database from "../data/database";
import { mdBreakpoint } from "../utils/layouts";
import { useMediaQuery } from "react-responsive";
import { toolsIcon } from "../utils/icons";

const tools = Database["Toolset"];

const ToolsContent = (props) => {
	const [active, setActive] = useState("");
	const isMdWidth = useMediaQuery({ query: `(max-width:${mdBreakpoint}px)` });
	const { currentScheme } = props;
	const colorSet = currentScheme.colorSet;

	return (
		<Grid container direction="column" spacing={16} className="ToolsContainer">
			{Object.keys(tools).map((toolskey, i) => (
				<Grid
					item
					key={`${i}_tools`}
					container
					spacing={isMdWidth ? 16 : 8}
					direction="row"
					justify="flex-start"
					onMouseEnter={() => setActive(toolskey)}
					onMouseLeave={() => setActive("")}
				>
					<Grid item xs={2} md={1} style={{ marginTop: "4px" }}>
						{toolsIcon(
							toolskey,
							active === toolskey
								? Object.values(colorSet)[i]
								: currentScheme.lightGray
						)}
					</Grid>
					<Grid item xs={9} md={3} lg={2} style={{ marginTop: "5px" }}>
						<Typography
							variant="overline"
							style={{
								transition: "all 0.1s ease",
								color:
									active === toolskey
										? Object.values(colorSet)[i]
										: currentScheme.lightGray,
								display: "flex",
								marginTop: "-5px",
								fontSize: "0.9em",
								fontWeight: 500,
							}}
						>
							{toolskey}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
						<Grid
							container
							spacing={8}
							direction="row"
							alignItems="center"
							justify={isMdWidth ? "flex-start" : "flex-end"}
						>
							{tools[toolskey].map((key) => (
								<Grid item key={key}>
									<Chip
										variant="default"
										icon={toolsIcon(key, undefined)}
										label={<span style={{ paddingLeft: "2.5px" }}>{key}</span>}
										style={{
											transition: "all 0.1s ease",
											color: props.currentScheme.bg,
											backgroundColor:
												active === toolskey
													? Object.values(colorSet)[i]
													: currentScheme.lightGray,
										}}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
					{!!isMdWidth && i !== Object.keys(tools).length - 1 && (
						<Divider
							style={{ width: "100%", marginTop: "25px", marginBottom: "15px" }}
						/>
					)}
				</Grid>
			))}
		</Grid>
	);
};

export default ToolsContent;
