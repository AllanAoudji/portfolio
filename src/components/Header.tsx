import DrawerOpenLink from './DrawerOpenLink';
import Pages from './Pages';
import Logo from './Logo';

function Header() {
  return (
    <header className="fixed top-0 w-full z-30">
      <div className="duration-300 flex items-center justify-center mx-auto pt-5 px-12 transition-all sm:justify-between sm:pt-8 md:max-w-6xl">
        <Logo className="h-8" />
        <DrawerOpenLink className="sm:hidden" />
        <Pages className="hidden space-x-6 text-light text-xl sm:block" />
      </div>
    </header>
  );
}

export default Header;
