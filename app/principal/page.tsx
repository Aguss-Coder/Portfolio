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
      <nav className='sticky top-0 h-10 flex justify-end items-center w-full z-50 bg-black bg-opacity-15'>
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
            className='z-10'
            id='projects'
          >
            <h2 className='text-2xl w-fit'>Projects</h2>
            <div className='parent'>
              {projects.map((projectData) => (
                <div
                  key={projectData.name}
                  className='flex flex-col items-center my-4 mx-4 p-2 gap-4 rounded-lg border border-seasalt bg-black bg-opacity-30'
                >
                  <h3 className='text-xl'>{projectData.name}</h3>
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
                      className='hover:opacity-40'
                    >
                      Repository
                    </Link>
                    <Link
                      href={projectData.pageLink}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:opacity-40'
                    >
                      Page
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className='z-10 mt-8' id='aboutMe'>
            <h2 className='text-2xl w-fit mb-2'>About Me</h2>
            <p>
              I'm a software developer with a passion for learning and creating
              new things. I have experience with web development, mobile
              development, and game development. I'm always looking for new
              challenges and opportunities to grow.
            </p>
          </section>
        </div>
      </motion.div>
      <footer className='mt-12 h-10 flex justify-center items-center w-full z-50 bg-jet/30'>
        <p>Made by Aguss</p>
      </footer>
    </AuroraBackground>
  );
}
