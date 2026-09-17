import { Container } from "@/components/Container";
import { PostList } from "@/features/feed/PostList";
import { FEED_VARIANT } from "@/lib/constants";
import * as styles from "./HomePage.css.js";

function HomePage() {
  return (
    <Container className={styles.container}>
      <PostList variant={FEED_VARIANT.HOME_FEED} />
    </Container>
  );
}

export default HomePage;
