import Copyright from './Copyright';
import Pages from './Pages';
import SocialMedias from './SocialMedias';

function Footer() {
  return (
    <footer className="flex flex-col gap-20 pb-5 pt-72 px-5 text-light">
      <div className="flex flex-col gap-8">
        <Pages className="gap-8 justify-center text-2xl text-dark" />
        <SocialMedias className="gap-8 justify-center" />
      </div>
      <Copyright className="text-center text-darker" />
    </footer>
  );
}

export default Footer;
