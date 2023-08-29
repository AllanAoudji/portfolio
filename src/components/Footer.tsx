import Copyright from './Copyright';
import Pages from './Pages';
import SocialMedias from './SocialMedias';

function Footer() {
  return (
    <footer className="text-light px-5 pb-5 pt-72 flex flex-col gap-20">
      <div className="flex flex-col gap-8">
        <Pages className="text-2xl gap-8 justify-center" />
        <SocialMedias className="justify-center gap-8" />
      </div>
      <Copyright className="text-center" />
    </footer>
  );
}

export default Footer;
