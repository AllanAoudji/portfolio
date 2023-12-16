import Image from 'next/image';
import PortfolioBackground from '@/public/portfolio-background.png';

function HomePortfolioBackground() {
  return (
    <div className="absolute inset-0">
      <Image
        alt="portfolio background"
        className="object-cover"
        fill
        src={PortfolioBackground}
      />
    </div>
  );
}

export default HomePortfolioBackground;
