import Container from './Container';
import Grid from './Grid';
import HomeHeaderImage from './HomeHeaderImage';

function HomeHeader() {
  return (
    <div className="relative">
      <Container>
        <Grid className="items-center min-h-[95vh]">
          <HomeHeaderImage />
        </Grid>
      </Container>
    </div>
  );
}

export default HomeHeader;
