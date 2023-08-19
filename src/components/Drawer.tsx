import SocialMedias from './SocialMedias';
import Pages from './Pages';
import DrawerCloseLink from './DrawerCloseLink';
import Logo from './Logo';
import Copyright from './Copyright';

type Props = {
  open: boolean;
};

function Drawer({ open }: Props) {
  return (
    <div
      className={`absolute bg-dark duration-700 ease-in-out flex flex-col h-full p-5 transition-all top-0 w-3/4 ${
        open ? 'left-0 opacity-100' : '-left-full opacity-0'
      }`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <DrawerCloseLink />
      </div>
      <Pages className="flex-col grow items-start pt-20" />
      <SocialMedias className="pb-5" />
      <Copyright />
    </div>
  );
}

export default Drawer;
