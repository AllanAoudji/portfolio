import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import PortableImage from './PortableImage';

type Props = {
  value: PortableTextBlock[];
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-black pt-4 text-5xl text-dark">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-black pt-3 text-4xl text-dark">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-bold pt-2 text-3xl text-dark">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-bold pt-1 text-2xl text-dark">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-bold pt-1 text-xl text-dark">{children}</h5>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border border-darker pl-2 text-darker">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => {
      if (
        children === null ||
        (Array.isArray(children) && children.length === 1 && children[0] === '')
      ) {
        return <p className="pt-4 first:pt-0 last:pt-0" />;
      }
      return (
        <div>
          <span className="text-dark text-lg">{children}</span>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-10 text-dark text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-10 text-dark text-lg">{children}</ol>
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
        className="text-dark border-b-2 border-darker"
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
