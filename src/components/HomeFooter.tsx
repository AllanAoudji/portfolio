import React from 'react';
import FooterCopyright from './FooterCopyright';
import HomePartTitle from './HomePartTitle';
import Container from './Container';

type TextProps = {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
};
type TitleProps = {
  children: React.ReactNode;
};

function Text({ children, href, target }: TextProps) {
  return (
    <a
      className="italic relative after:absolute after:bg-darker after:bottom-0 after:h-px after:left-0 after:transition-all after:w-0 hover:after:w-full"
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

function Title({ children }: TitleProps) {
  return <h3 className="uppercase">{children}</h3>;
}

function HomeFooter() {
  return (
    <footer>
      <Container className="pb-8 pt-16 sm:pb-16 sm:pt-32">
        <HomePartTitle title="contact" />
        <div className="py-24">
          <Title>Téléphone</Title>
          <Text href="tel:+33674289219">+33674289219</Text>
          <Title>e-mail</Title>
          <Text href="mailto:allan.aoudji@gmail.com">
            allan.aoudji@gmail.com
          </Text>
          <Title>instagram</Title>
          <Text href="https://www.instagram.com/allanjouannet/" target="blank">
            @allanjouannet
          </Text>
        </div>
        <FooterCopyright />
      </Container>
    </footer>
  );
}

export default HomeFooter;
