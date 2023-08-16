import Image from 'next/image';
import SocialMedias from './SocialMedias';
import Pages from './Pages';

function Drawer() {
  return (
    <div className="absolute h-screen left-0 top-0 w-screen">
      <div className="bg-black h-full opacity-50 w-full" />
      <div className="absolute flex h-full left-0 top-0 w-3/4">
        <div className="bg-dark grow h-full p-5">
          <div className="flex items-center justify-between">
            <Image
              src="/logo-fixe-light.png"
              alt="logo dark"
              width="62"
              height="33"
            />
            <Image
              src="/cross-light.png"
              alt="cross dark"
              width="33"
              height="33"
            />
          </div>
          <Pages />
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
    </div>
  );
}

export default Drawer;
