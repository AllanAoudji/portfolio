import DrawerOpenLink from './DrawerOpenLink';
import Logo from './Logo';
import Pages from './Pages';

function Header() {
  return (
    <header className="fixed top-0 w-full z-30">
      <div className="duration-300 flex items-center justify-center mx-auto px-12 pt-5 transition-all sm:justify-between sm:pt-8 md:max-w-5xl">
        <Logo className="h-8" />
        <DrawerOpenLink className="sm:hidden" />
        <Pages className="hidden space-x-6 text-xl text-light sm:block" />
      </div>
    </header>
  );
}

export default Header;
