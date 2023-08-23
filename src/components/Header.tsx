import DrawerOpenLink from './DrawerOpenLink';
import Logo from './Logo';

function Header() {
  return (
    <header className="flex items-center justify-center py-5 sticky top-0 z-30 bg-dark">
      {/* <header className="bg-dark flex items-center justify-center py-5 sticky top-0 z-30 border-b-2 border-light"> */}
      <Logo className="h-9" />
      <DrawerOpenLink />
    </header>
  );
}

export default Header;
