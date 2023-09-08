import DrawerOpenLink from './DrawerOpenLink';
import Pages from './Pages';
import Logo from './Logo';

function Header() {
  return (
    <header className="fixed top-0 w-full z-30">
      <div className="duration-300 flex items-center justify-between mx-auto pt-5 px-6 transition-all sm:justify-between sm:pt-8 md:max-w-6xl sm:px-12">
        <DrawerOpenLink className="sm:hidden" />
        <Logo className="h-8" />
        <Pages className="hidden space-x-6 text-light text-xl sm:block" />
      </div>
    </header>
  );
}

export default Header;
