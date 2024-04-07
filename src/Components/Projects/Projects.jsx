import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          {/* <img src="https://w.forfun.com/fetch/5c/5c1fb5b819ff43488fe259ce8752adc2.jpeg?w=300" alt="Project" /> */}
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
// const Projects = () => {

    // const projects = [1, 2, 3];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
        // {projects.map((project, index) => (
          <ProjectCard
            // url="https://github.com/meabhisingh/mernPortfolio/blob/master/frontend/src/components/Projects/Projects.css"
            // projectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRYy3D3SQQnWo57UP04y5SlQGDJRq92Sb7ZvUJAE8&s"
            // projectTitle="Sample Project"
            // description="This is a sample project"
            // technologies="MERN"
            id={item._id}
            key={item._id}
            url={item.url}
            // projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;