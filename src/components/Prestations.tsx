'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

import conseil from '@/public/conseil.png';
import directionArtistique from '@/public/directionArtistique.png';
import freelancing from '@/public/freelancing.png';
import helloWorld from '@/public/hello-world-light.png';
import identiteVisuel from '@/public/identiteVisuel.png';
import siteWeb from '@/public/siteWeb.png';
import supportsImprimes from '@/public/supportsImprimes.png';
import useWindowSize from '@src/hooks/useWindowSize';

import Grid from './Grid';
import PrestationCard from './PrestationCard';
import Wrapper from './Wrapper';

type Prestation = {
  image: StaticImageData;
  text: string;
  title: string;
};

const PRESTATIONS: Prestation[] = [
  {
    image: identiteVisuel,
    text: "Logos, charte graphique, branding... Je vous propose la création d'une identité de marque complète, forte, pérenne et adaptée aux supports prints et digitaux...",
    title: 'Création de votre identité visuelle',
  },
  {
    image: directionArtistique,
    text: 'Direction artistique, campagnes publicitaires, conception créative... Accroissez votre visibilité et votre potentiel de communication.',
    title: 'Direction artistique de projet et advertising',
  },
  {
    image: siteWeb,
    text: 'Refonte de votre site internet, campagnes sociales et e-marketing... Je vous accompagne dans votre communication web et sociale.',
    title: 'Conception et animation de site web',
  },
  {
    image: supportsImprimes,
    text: "Brochures, flyers, catalogues, affiches, rapports annuels... Je design et optimise tous vos supports prints : Vos fichiers sont prêts pour l'impression.",
    title: 'Réalisation de vos supports imprimés',
  },
  {
    image: freelancing,
    text: "Besoin de renfort sur un projet ? Fort d'une solide expérience en agences et en freelance, j'intègre vos équipes créatives, en toute flexibilité.",
    title: 'Freelancing',
  },
  {
    image: conseil,
    text: 'Stratégie de marque, positionnement, incubation marketing... Mon expérience, savoir-faire et créativité au service de votre entreprise.',
    title: 'conseil créatif',
  },
];

function Prestations() {
  const presentationRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const { width } = useWindowSize();
  const presentationTranslateY = useTransform(scrollY, (latest) => {
    if (presentationRef.current == null || !width || width < 640) {
      return 0;
    }
    return (
      latest / -8 +
      presentationRef.current.offsetHeight / 8 +
      presentationRef.current.getBoundingClientRect().height / 18
    );
  });
  const textTranslateY = useTransform(scrollY, (latest) => {
    if (textRef.current == null || !width || width < 640) {
      return 0;
    }
    return (
      latest / -4 +
      textRef.current.offsetTop / 4 +
      textRef.current.getBoundingClientRect().height / 8
    );
  });

  return (
    <Wrapper backgroundColor="darker">
      <div ref={textRef}>
        <motion.div
          className="flex h-[80vh] items-center sm:h-auto sm:pb-10"
          style={{ translateY: textTranslateY }}
          transition={{ type: 'spring' }}
        >
          <Grid>
            <Image
              alt="home-text"
              className="col-span-6 sm:col-span-10 sm:col-start-2"
              src={helloWorld}
            />
          </Grid>
        </motion.div>
      </div>
      <div ref={presentationRef}>
        <motion.div
          style={{ translateY: presentationTranslateY }}
          transition={{ type: 'spring' }}
        >
          <Grid className="gap-y-12 pb-48 sm:gap-y-16 lg:gap-y-16">
            {PRESTATIONS.map((prestation) => (
              <PrestationCard
                className="col-span-4 col-start-2 sm:col-span-4 sm:col-start-auto"
                image={prestation.image}
                key={prestation.title}
                text={prestation.text}
                title={prestation.title}
              />
            ))}
          </Grid>
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default Prestations;
