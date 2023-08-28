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
      className={`absolute bg-pink-200 duration-700 ease-in-out flex flex-col h-full transition-all top-0 w-3/4 p-6 ${
        open ? 'left-0 opacity-100' : '-left-full opacity-0'
      }`}
    >
      <div className="flex items-center justify-between">
        <Logo className="h-10" />
        <DrawerCloseLink />
      </div>
      <Pages className="flex-col items-center text-4xl grow justify-center gap-8 text-light" />
      <SocialMedias className="pb-10 gap-4" />
      <Copyright className="text-light" />
    </div>
  );
}

export default Drawer;
