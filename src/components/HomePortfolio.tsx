'use client';

import { useCallback, useState } from 'react';
import HomePortfolioImage from './HomePortfolioImage';
import HomePortfolioItem from './HomePortfolioItem';
import HomePartTitle from './HomePartTitle';
import BackgroundColor from './BackgroundColor';
import Container from './Container';

import HomePortfolioBackground from './HomePorfolioBackground';

type Props = {
  posts: Post[];
};

function HomePortfolio({ posts }: Props) {
  const [hoverId, setHoverId] = useState<string | null>(null);

  const setCurrentWork = useCallback((workId: string) => {
    setHoverId(workId);
  }, []);
  const unsetCurrentWork = useCallback(() => {
    setHoverId(null);
  }, []);

  return (
    <BackgroundColor className="overflow-hidden relative" variant="darker">
      <Container className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 mx-8 z-20 sm:mx-12">
          <HomePartTitle className="mt-16 sm:mt-24" title="portfolio" />
        </div>
        <HomePortfolioImage className="z-10" posts={posts} hoverId={hoverId} />
        <HomePortfolioItem
          className="my-40 z-20"
          hoverId={hoverId}
          posts={posts}
          setCurrentWork={setCurrentWork}
          unsetCurrentWork={unsetCurrentWork}
        />
      </Container>
      <HomePortfolioBackground />
    </BackgroundColor>
  );
}

export default HomePortfolio;
