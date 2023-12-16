import Image from 'next/image';
import PortfolioBackground from '@/public/portfolio-background.png';

function HomePortfolioBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        src={PortfolioBackground}
        alt="portfolio background"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default HomePortfolioBackground;
