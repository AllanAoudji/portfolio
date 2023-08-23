import { client } from '@/sanity/lib/client';
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useNextSanityImage } from 'next-sanity-image';
import { PortableTextBlock } from 'sanity';
import LinkImage from './LinkImage';

type Props = {
  value: PortableTextBlock[];
};

function ImageComponent(
  props: PortableTextTypeComponentProps<SanityImageSource>
) {
  const imageProps = useNextSanityImage(client, props.value);

  return (
    <LinkImage
      alt="image"
      className="py-2"
      height={imageProps.height}
      src={imageProps.src}
      width={imageProps.width}
    />
  );
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold text-light pt-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold text-light pt-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold text-light pt-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold text-light pt-1">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl font-bold text-light pt-1">{children}</h5>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-light pl-2 border-l-4 border-light">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <span className="text-light">{children}</span>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="pl-10 text-light list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="pl-10 text-light list-decimal">{children}</ol>
    ),
  },
  types: {
    image: ImageComponent,
  },
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => (
      <span className="font-bold text-brand-primary">{props.children}</span>
    ),
    link: (props) => (
      <a
        href={props?.value?.href}
        target="_blank"
        rel="noopener"
        className="px-2 rounded-full text-dark bg-light"
      >
        {props.children}
      </a>
    ),
  },
};

function RichPortableText({ value }: Props) {
  return <PortableText value={value} components={components} />;
}

export default RichPortableText;
