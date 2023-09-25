import Image from 'next/image';
import Wrapper from './Wrapper';
import Grid from './Grid';

function HomeHeader() {
  return (
    <div className="bg-darker">
      <Wrapper>
        <Grid className="h-screen min-h-[calc(105vw+7rem)] sm:min-h-[calc(57.5vw+12rem)] sm:grid-cols-12 lg:min-h-[calc(40vw+10rem)]">
          <Image
            alt="animated log"
            className="my-auto col-span-6 sm:col-span-10 sm:col-start-2 lg:col-span-6 lg:col-start-4"
            height="675"
            src="https://res.cloudinary.com/dy85d5ei6/image/upload/v1693423217/logo-animated-light.gif"
            width="1024"
          />
        </Grid>
      </Wrapper>
    </div>
  );
}

export default HomeHeader;
