import SocialMedias from './SocialMedias';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="font-white p-4 pt-20 font-bold text-center">
      <SocialMedias />© Allan Aoudji, {currentYear != 2023 && '2023 - '}{' '}
      {currentYear}
    </footer>
  );
}

export default Footer;
