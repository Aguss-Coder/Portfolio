'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from '@/components/ui/auroraBackground';
import Image from 'next/image';
import { HoverBorderGradient } from '@/components/ui/hoverBorderGradient';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

export default function Home() {
  return (
    <AuroraBackground className='bg-fixed h-screen'>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex gap-4 items-center justify-center h-screen'
      >
        <div className='flex flex-col md:flex-row items-center'>
          <div>
            <Image
              src='/photo.jpg'
              width={170}
              height={170}
              alt="Agustin Ludueña's photo"
              className='pb-4 md:mr-8 rounded-full'
            />
          </div>
          <div>
            <h1 className='pb-4 text-center text-3xl md:text-start md:text-5xl text-seasalt font-bold'>
              Agustin Ludueña
            </h1>
            <p className='text-center md:text-start text-base md:text-xl text-seasalt'>
              A developer interested in AI. I want to create
              <br /> my own AI-powered assistant
            </p>
          </div>
        </div>
        <div className='absolute bottom-0 pb-9 flex justify-center text-center'>
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='dark:bg-eerie-black bg-seasalt text-eerie-black dark:text-seasalt flex items-center space-x-2'
          >
            <Link href='/principal'>Let's Go!</Link>
            <FaArrowRight />
          </HoverBorderGradient>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
