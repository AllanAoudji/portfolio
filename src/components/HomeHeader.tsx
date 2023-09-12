import Image from 'next/image';
import Wrapper from './Wrapper';

function HomeHeader() {
  return (
    <div className="bg-darker">
      <Wrapper>
        <div className="grid grid-cols-1 h-screen mb-36 transition-all min-h-[calc(105vw+7rem)] md:min-h-[calc(57.5vw+12rem)] md:grid-cols-12 lg:min-h-[calc(40vw+10rem)]">
          <Image
            alt="animated log"
            className="my-auto md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4"
            height="675"
            src="https://res.cloudinary.com/dy85d5ei6/image/upload/v1693423217/logo-animated-light.gif"
            width="1024"
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default HomeHeader;
