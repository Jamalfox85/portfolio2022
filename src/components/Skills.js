import React, { useState } from "react";
import ExploreMore from "./Skills/exploreMore";
import SkillsList from "./Skills/skillsList";

const Skills = () => {
	return (
		<div className="skills-wrapper">
			<div className="skills-content">
				<div className="grid">
					<div className="grid-cell skills-list-container">
						<SkillsList />
					</div>
					<div className="grid-cell background-image-container"></div>
					<div className="grid-cell project-carousel-container">
						<h1 className="grid-title">Projects</h1>
					</div>
					<div className="grid-cell background-image-container2"></div>
					<div className="grid-cell external-links-container">
						<ExploreMore />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
