'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa6';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Home() {
  return (
    <AuroraBackground className='bg-fixed h-screen'>
      <motion.div className='relative'>
        <nav className='fixed'>
          <div className=''>
            <Link href='/'>
              <FaArrowLeft
                width={100}
                height={100}
              />
            </Link>
          </div>
        </nav>
      </motion.div>
    </AuroraBackground>
  );
}
