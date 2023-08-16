import Pages from './Pages';
import SocialMedias from './SocialMedias';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="p-4 pt-20 font-bold">
      <div className="flex items-center justify-between pb-4">
        <Pages />
        <SocialMedias />
      </div>
      <span className="text-light">
        © Allan Aoudji, {currentYear != 2023 && '2023 - '} {currentYear}
      </span>
    </footer>
  );
}

export default Footer;
