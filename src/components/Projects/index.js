import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Portfolio</Title>
        <Desc>
        Explore my portfolio of innovative and impactful projects and certifications.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
          )}
          <Divider />
          {toggle === "project" ? (
            <ToggleButton
              active
              value="project"
              onClick={() => setToggle("project")}
            >
              PROJECTS
            </ToggleButton>
          ) : (
            <ToggleButton value="project" onClick={() => setToggle("project")}>
              PROJECTS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "certificate" ? 
            <ToggleButton active value="certificate" onClick={() => setToggle('certificate')}>CERTIFICATES</ToggleButton>
          : 
            <ToggleButton value="certificate" onClick={() => setToggle('certificate')}>CERTIFICATES</ToggleButton>
          }
          <Divider />
          {/* {toggle === 'react native' ?
            <ToggleButton active value="react native" onClick={() => setToggle('react native')}>React Native Application </ToggleButton>
            :
            <ToggleButton value="react native" onClick={() => setToggle('react native')}>React Native Application</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
