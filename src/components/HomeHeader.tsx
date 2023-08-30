import Image from 'next/image';
import { BsArrowDown } from 'react-icons/bs';

function HomeHeader() {
  return (
    <div className="bg-darker flex h-screen items-end justify-center mb-36 overflow-hidden relative transition-all sm:mb-52">
      <div className="absolute flex h-screen items-center justify-center pointer-events-none w-screen">
        <Image
          alt="animated log"
          className="h-auto max-w-5xl px-2 transition-all w-full sm:px-20"
          height="1080"
          src="/logo-animated-light.gif"
          width="1920"
        />
      </div>
      <div className={`flex flex-col gap-2 items-center pb-6`}>
        <p className="font-light text-light uppercase">scroll</p>
        <BsArrowDown className="fill-light" size={40} />
      </div>
    </div>
  );
}

export default HomeHeader;
