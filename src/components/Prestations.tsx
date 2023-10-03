import Image, { StaticImageData } from 'next/image';

import conseil from '@/public/conseil.png';
import directionArtistique from '@/public/directionArtistique.png';
import freelancing from '@/public/freelancing.png';
import helloWorld from '@/public/hello-world-light.png';
import identiteVisuel from '@/public/identiteVisuel.png';
import siteWeb from '@/public/siteWeb.png';
import supportsImprimes from '@/public/supportsImprimes.png';

import Grid from './Grid';
import Wrapper from './Wrapper';
import PrestationCard from './PrestationCard';

type Prestation = {
  image: StaticImageData;
  title: string;
  text: string;
};

const PRESTATIONS: Prestation[] = [
  {
    image: identiteVisuel,
    title: 'Création de votre identité visuelle',
    text: "Logos, charte graphique, branding... Je vous propose la création d'une identité de marque complète, forte, pérenne et adaptée aux supports prints et digitaux...",
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
  return (
    <Wrapper backgroundColor="darker">
      <Grid>
        <Image
          alt="home-text"
          className="col-span-6 py-28 sm:py-36 sm:col-span-10 sm:col-start-2"
          src={helloWorld}
        />
      </Grid>
      <Grid className="gap-y-20 pb-32 sm:gap-y-16 lg:gap-y-16">
        {PRESTATIONS.map((prestation) => (
          <PrestationCard
            className="col-span-4 col-start-2 sm:col-span-6 sm:col-start-auto lg:col-span-4"
            key={prestation.title}
            image={prestation.image}
            text={prestation.text}
            title={prestation.title}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Prestations;