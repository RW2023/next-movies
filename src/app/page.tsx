import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto mt-1 p-4">
      <div className="text-3xl text-center mb-2 mt-3 flex">
        <Link href={'/movies'}></Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center bg-base-300 p-4 rounded-lg shadow-lg card-title hover:underline">
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
        </div>
        <div className="flex flex-col justify-center items-center bg-base-300 p-4 rounded-lg shadow-lg card">
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
        </div>
      </div>
    </div>
  );
}
