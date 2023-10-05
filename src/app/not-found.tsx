import { vollkorn } from '@src/utils/fonts';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="bg-dark flex flex-col h-screen justify-center p-12 text-light lg:p-48 transition-all">
      <h2 className={`text-5xl font-black ${vollkorn.className}`}>
        404 - Not Found
      </h2>
      <p>Could not find requested resource</p>
      <div className="mt-12">
        <Link
          className="bg-light duration-500 text-dark rounded-full px-4 py-2 text-lg font-bold border-2 transition-all border-light hover:text-light hover:bg-dark hover:px-("
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
