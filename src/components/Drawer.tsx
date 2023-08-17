import Image from 'next/image';
import SocialMedias from './SocialMedias';
import Pages from './Pages';
import DrawerCloseLink from './DrawerCloseLink';
import Logo from './Logo';

type Props = {
  open: boolean;
};

function Drawer({ open }: Props) {
  return (
    <div
      className={`absolute flex h-full top-0 w-11/12 ${
        open ? 'left-0 opacity-100' : '-left-full opacity-0'
      } transition-all duration-700 ease-in-out`}
    >
      <div className="bg-dark flex flex-col grow h-full p-5">
        <div className="flex items-center justify-between">
          <Logo />
          <DrawerCloseLink />
        </div>
        <Pages
          align="items-start"
          itemSize="h-16"
          className="grow pt-20"
          direction="flex-col"
        />
        <SocialMedias />
      </div>
      <Image
        src="/background-right-dark.png"
        alt="background right"
        width={200}
        height={200}
        className="h-full -ml-px w-auto"
      />
    </div>
  );
}

export default Drawer;
