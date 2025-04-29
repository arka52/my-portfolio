"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "../assets/braintube.png.webp";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { link } from "fs";

const projects = [
    {
        id: 1,
        Year: 2025,
        title: "Brain Tube",
        description: "braintube turns youtube videos into quizzes, or summaries — making learning smart and interactive.",
        link: "https://quiztube-hvw1.onrender.com/",
        image: project1,
    },
   
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
     const color = useMotionValue(COLORS_TOP[0])

     useEffect(() => {
             animate(color, COLORS_TOP, {
                 ease: "easeInOut",
                 duration: 10,
                 repeat: Infinity,
                 repeatType: "mirror",
             })
         }, [])

     const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;


    return (
        <motion.section
            style={{
                backgroundImage,
            }}
         id="portfolio" 
         className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10">
                        Selected <span className="text-purple-400">Projects</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.Year}</p>
                            <h3
                                className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                                    ${selectedProject.id === project.id
                                        ? "text-purple-200 "
                                        : ""
                                    } duration-300`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="border-b-2 border-gray-200 my-4">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="rounded-xl shado-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    );
};