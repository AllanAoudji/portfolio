import Copyright from './Copyright';
import Pages from './Pages';
import SocialMedias from './SocialMedias';

function Footer() {
  return (
    <footer className="p-4 pt-20">
      <div className="flex items-center justify-between pb-4">
        <Pages />
        <SocialMedias />
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
