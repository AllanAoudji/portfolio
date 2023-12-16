import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import Logo from '@/public/logo-fixe-dark.png';

function WorkHeader() {
  return (
    <Container className="fixed pt-8 inset-x-0 top-0">
      <Link href="/">
        <Image alt="logo" className="w-14 h-auto sm:w-16" src={Logo} />
      </Link>
    </Container>
  );
}

export default WorkHeader;
