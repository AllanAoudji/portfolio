import DrawerOpenLink from './DrawerOpenLink';
import Pages from './Pages';
import Logo from './Logo';
import Wrapper from './Wrapper';

function Header() {
  return (
    <header className="fixed top-0 w-full z-30">
      <Wrapper className="flex items-center justify-between mx-auto pt-5 sm:justify-between sm:pt-8 md:max-w-6xl sm:px-12">
        <DrawerOpenLink className="sm:hidden" color="dark" />
        <Logo className="h-8" color="dark" />
        <Pages className="hidden space-x-6 text-dark text-xl sm:block" />
      </Wrapper>
    </header>
  );
}

export default Header;
