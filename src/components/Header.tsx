import DrawerOpenLink from './DrawerOpenLink';
import Logo from './Logo';

function Header() {
  return (
    <header className="bg-dark flex items-center justify-center p-4 sticky top-0 z-40">
      <Logo />
      <DrawerOpenLink />
    </header>
  );
}

export default Header;
