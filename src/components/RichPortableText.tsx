import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import PortableImage from './PortableImage';

type Props = {
  value: PortableTextBlock[];
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-black pt-4 text-5xl ">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-black pt-3 text-4xl ">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-bold pt-2 text-3xl ">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-bold pt-1 text-2xl ">{children}</h4>
    ),
    h5: ({ children }) => <h5 className="font-bold pt-1 ">{children}</h5>,
    blockquote: ({ children }) => (
      <blockquote className="border border-darker pl-2">{children}</blockquote>
    ),
    normal: ({ children }) => {
      if (
        children === null ||
        (Array.isArray(children) && children.length === 1 && children[0] === '')
      ) {
        return <p className="pt-3 first:pt-0 last:pt-0 sm:pt-4" />;
      }
      return (
        <p className="leading-5 text-sm sm:leading-5 sm:text-base md:leading-6 md:text-lg">
          {children}
        </p>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="leading-5 text-sm sm:leading-5 sm:text-base md:leading-6 md:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="leading-5 text-sm sm:leading-5 sm:text-base md:leading-6 md:text-lg">
        {children}
      </ol>
    ),
  },
  types: {
    image: PortableImage,
  },
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => <span className="font-bold">{props.children}</span>,
    link: (props) => (
      <a
        className="underline"
        href={props?.value?.href}
        rel="noopener"
        target="_blank"
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
