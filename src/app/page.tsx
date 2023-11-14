import Heading from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto mt-1 p-4">
      <div className="text-3xl text-center text-headline mb-2 mt-3">
        <Link
        href={'/movies'}
        >
          <Heading title="Find FLix" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center bg-background p-4 rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl">Search your favorite actor</h2>
          <Image
            src="/freeman.jpg"
            alt="morgan freeman"
            width={500}
            height={450}
            className="object-cover rounded-lg shadow-lg bg-tertiary  p-1"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-background p-4 rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl">Search your favorite movie</h2>
          <Image
            src="/darkNight.png"
            alt="Dark Night"
            width={400}
            height={450}
            className="object-cover rounded-lg shadow-lg bg-tertiary  p-1"
          />
        </div>
      </div>
    </div>
  );
}
