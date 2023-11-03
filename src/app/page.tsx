import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto mt-6 p-4">
      <div className="text-3xl text-center text-headline mb-6 mt-8">
        <Link href="/movies" className="p-2 m-1">Search For Movies</Link>
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
