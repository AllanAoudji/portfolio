import Container from './Container';
import NextPostCard from './NextPostCard';
import PreviousPostCard from './PreviousPostCard';
import FooterCopyright from './FooterCopyright';
import WorkPostLink from './WorkPostLink';

type Props = {
  nextPost: NextPost | null;
  previousPost: NextPost | null;
};

function WorkFooter({ nextPost, previousPost }: Props) {
  return (
    <footer className="pt-32 pb-8">
      <Container>
        <div className="flex flex-col gap-y-1 items-center pb-40 uppercase">
          <NextPostCard nextPost={nextPost} />
          <PreviousPostCard previousPost={previousPost} />
          <WorkPostLink href="/">retour</WorkPostLink>
        </div>
        <FooterCopyright />
      </Container>
    </footer>
  );
}

export default WorkFooter;
