'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa6';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Home() {
  return (
    <AuroraBackground className='bg-fixed h-screen z-0'>
      <nav className='fixed mt-4 mx-4 flex justify-between items-center w-screen z-10'>
        <div className='h-fit w-fit'>
          <Link href='/'>
            <FaArrowLeft
            className='text-xl'
            />
          </Link>
        </div>
        <ul className='nav-list'>
          <li className='nav-list'>
            <Link href='https://github.com/Aguss-Coder/' target='_blank'>Github</Link>
          </li>
          <li className='nav-list'>
            <Link href='' target='_blank'>Projects</Link>
          </li>
          <li className='nav-list'>
            <Link href='' target='_blank'>Contact</Link>
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
        className=' flex flex-col z-0 gap-4 items-center justify-center h-screen'
      >
        <section className='z-10'>
          <h1>Hello World</h1>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}
