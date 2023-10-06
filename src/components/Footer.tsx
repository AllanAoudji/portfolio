import Copyright from './Copyright';
import Pages from './Pages';
import SocialMedias from './SocialMedias';

type Props = {
  darkBackground?: boolean;
};

function Footer({ darkBackground = true }: Props) {
  return (
    <footer
      className={`flex flex-col gap-20 pb-5 pt-48 px-5 relative ${
        darkBackground ? 'text-light' : 'text-dark'
      }`}
    >
      {darkBackground && (
        <div className="absolute bg-darker h-[150%] min-h-screen w-screen bottom-0 left-0 -z-10" />
      )}
      <div className="flex flex-col gap-8">
        <Pages
          className={`gap-8 justify-center text-2xl ${
            darkBackground ? 'text-light' : 'text-dark'
          }`}
        />
        <SocialMedias className="gap-8 justify-center" />
      </div>
      <Copyright
        className={`text-center ${
          darkBackground ? 'text-light' : 'text-darker'
        }`}
      />
    </footer>
  );
}

export default Footer;
