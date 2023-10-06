'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import Wrapper from './Wrapper';
import Grid from './Grid';
import useWindowSize from '@src/hooks/useWindowSize';

function HomeHeader() {
  const { width } = useWindowSize();
  const { scrollY } = useScroll();
  const presentation = useTransform(scrollY, (latest) =>
    !!width && width >= 640 ? latest / 5 : 0
  );

  return (
    <div className="bg-darker">
      <Wrapper>
        <Grid className="h-[50vh] min-h-[calc(105vw+7rem)] sm:min-h-[calc(57.5vw+12rem)] sm:grid-cols-12 lg:min-h-[calc(40vw+10rem)]">
          <motion.div
            style={{ translateY: presentation }}
            className="col-span-6 my-auto sm:col-span-6 sm:col-start-4"
          >
            <Image
              alt="animated log"
              className=""
              height="675"
              src="https://res.cloudinary.com/dy85d5ei6/image/upload/v1693423217/logo-animated-light.gif"
              width="1024"
            />
          </motion.div>
        </Grid>
      </Wrapper>
    </div>
  );
}

export default HomeHeader;
