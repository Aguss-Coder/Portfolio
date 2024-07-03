'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import projectData from '@/data/projects.json';

interface Project {
  name: string;
  description: string;
  githubLink: string;
  pageLink: string;
  image: string;
}

export default function Home() {
  const projects: Project[] = projectData;
  return (
    <AuroraBackground className='h-full z-0'>
      <nav className='sticky   top-0 h-10 flex justify-end items-center w-full z-50 bg-black bg-opacity-15'>
        <ul className='nav-list'>
          <li className='nav-list hover:opacity-50'>
            <Link href='/'>Home</Link>
          </li>
          <li className='nav-list hover:opacity-50'>
            <Link href='#projects'>Projects</Link>
          </li>
          <li className='nav-list hover:opacity-50'>
            <Link href='#aboutMe'>About Me</Link>
          </li>
          <li className='nav-list hover:opacity-50'>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='flex z-0 gap-4 h-full'
      >
        <div className='flex flex-col w-[70%] m-auto'>
          <section
            className='z-10 pt-10'
            id='projects'
          >
            <h2 className='text-2xl w-fit'>Projects</h2>
            <div className='parent'>
              {projects.map((projectData) => (
                <div
                  key={projectData.name}
                  className='flex flex-col items-center my-4 mx-4 p-2 gap-4 rounded-lg border border-seasalt bg-black bg-opacity-30'
                >
                  <h3 className='text-2xl'>{projectData.name}</h3>
                  <img
                    src={projectData.image}
                    alt={projectData.name}
                    className='w-64 h-64'
                  />
                  <p>{projectData.description}</p>
                  <div className='flex gap-4'>
                    <Link
                      href={projectData.githubLink}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:opacity-40 text-xl'
                    >
                      Repository
                    </Link>
                    <Link
                      href={projectData.pageLink}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:opacity-40 text-xl'
                    >
                      Page
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section
            className='z-10 mt-8'
            id='aboutMe'
          >
            <h2 className='text-2xl w-fit mb-2'>About Me</h2>
            <p className='ml-4'>
              I am a dedicated Computer Engineering student with a passion for
              developing cutting-edge Artificial Intelligence solutions and a
              deep love for robotics. My academic journey has equipped me with a
              solid foundation in computer science principles, and I am eager to
              apply this knowledge to create innovative AI applications. <br />
              <br />
              With a strong interest in both software and hardware, I am
              fascinated by the endless possibilities that AI and robotics offer
              to transform industries and improve our daily lives. My goal is to
              contribute to the development of intelligent systems that can
              solve real-world problems, enhance human capabilities, and pave
              the way for a smarter future.
            </p>
            <h3 className='text-xl w-fit my-2'>Skills and Interests</h3>
            <ul>
              <li className='mb-4 ml-4'>
                <b>Artificial Intelligence</b>: Proficient in machine learning,
                deep learning, and natural language processing. Experienced in
                designing and implementing AI models to solve complex problems.
              </li>
              <li className='mb-4 ml-4'>
                <b>Robotics</b>: Enthusiastic about robotics, with hands-on
                experience in developing and programming robotic systems.
                Skilled in integrating AI with robotics to create intelligent
                and autonomous machines.
              </li>
              <li className='mb-4 ml-4'>
                <b>Software Development</b>: Strong background in software
                engineering, with expertise in various programming languages and
                tools. Adept at developing robust and scalable software
                solutions.
              </li>
              <li className='mb-4 ml-4'>
                <b>Innovation and Problem-Solving</b>: Driven by a desire to
                innovate and find creative solutions to challenging problems.
                Passionate about exploring new technologies and staying at the
                forefront of AI and robotics advancements.
              </li>
            </ul>
          </section>
          <section
            className='z-10 mt-8'
            id='contact'
          >
            <h2 className='text-2xl w-fit mb-2'>Contact</h2>
            <p>If you want to contact me, you can send me an email to </p>
          </section>
        </div>
      </motion.div>
      <footer className='mt-12 h-10 flex justify-center items-center w-full z-50 bg-jet/30'>
        <p>Made by Aguss</p>
      </footer>
    </AuroraBackground>
  );
}
