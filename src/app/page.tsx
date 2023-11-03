import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto mt-6 p-4">
      <div className="text-3xl text-center text-headline mb-6 mt-8">
        <h1 className="p-2 m-1">Search For Movies</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center bg-background p-4 rounded-lg shadow-lg">
          <h2 className="mb-4">Search your favorite actor</h2>
          <Image
            src="/freeman.jpg"
            alt="morgan freeman"
            width={500}
            height={450}
            className="object-cover rounded-lg shadow-lg bg-tertiary  p-1"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-background p-4 rounded-lg shadow-lg">
          <h2 className="mb-4">Search your favorite movie</h2>
          <Image
            src="/theater.jpg"
            alt="theater"
            width={500}
            height={450}
            className="object-cover rounded-lg shadow-lg bg-tertiary  p-1"
          />
        </div>
      </div>
    </div>
  );
}
