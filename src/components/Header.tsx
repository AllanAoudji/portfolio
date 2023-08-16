import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-dark flex items-center justify-between p-4 sticky top-0 z-50">
      <Link href="/">
        <Image
          alt="main logo"
          className="h-12 w-auto"
          height="911"
          src="/logo-fixe-light.png"
          width="1706"
        />
      </Link>
      <Image
        alt="hamburger menu"
        className="h-12 w-auto"
        height="1943"
        src="/hamburger.png"
        width="1962"
      />
    </header>
  );
}

export default Header;
