import Image from 'next/image';
import { BsArrowDown } from 'react-icons/bs';

function HomeHeader() {
  return (
    <div className="relative bg-darker h-screen overflow-hidden mb-48 flex justify-center items-end">
      <div className="absolute w-screen h-screen flex items-center justify-center pointer-events-none">
        <Image
          alt="animated log"
          className="w-full h-auto px-2 max-w-2xl"
          height="1080"
          src="/Composition 1.gif"
          width="1920"
        />
      </div>
      <div className={`pb-6 flex flex-col items-center gap-2`}>
        <p className="text-light uppercase font-light">scroll</p>
        <BsArrowDown size={40} className="fill-light" />
      </div>
    </div>
  );
}

export default HomeHeader;
