'use client';
import { motion } from 'framer-motion';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      <Image
        src="/movie.jpg"
        alt="Movie"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="relative z-10 container mx-auto mt-1 p-4">
        <div className="text-3xl text-center mb-2 mt-3 flex">
          <Link href={'/movies'}></Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            className="relative z-10 flex flex-col justify-center items-center bg-base-300 p-4 rounded-lg shadow-lg card-title hover:underline"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={'/movies'}>
              <SubHeading
                title="Search your favorite actor"
                iconClass="fas fa-search"
              />{' '}
            </Link>
            <div className="card-body">
              <Image
                src="/freeman.jpg"
                alt="morgan freeman"
                width={200}
                height={200}
                className="object-cover rounded-lg shadow-lg bg-base-300  p-1 border-2 border-base"
              />
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 flex flex-col justify-center items-center bg-base-300 p-4 rounded-lg shadow-lg card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-title hover:underline">
              {' '}
              <Link href={'/movies'}>
                <SubHeading
                  title="Search your favorite movie"
                  iconClass="fas fa-search "
                />
              </Link>
            </div>
            <div className="card-body">
              <Image
                src="/darkNight.png"
                alt="Dark Night"
                width={200}
                height={200}
                className="object-cover rounded-lg shadow-lg bg-base-300  p-1 border-2 border-base"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}