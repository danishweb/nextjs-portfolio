import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import Paragraph from "../components/paragraph";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="lazytalks"
            title="LazyTalks"
            thumbnail={thumbInkdrop}
          >
            LazyTalks is a web application for chatting with people around you.
            It is a simple way to share your thoughts with people around you. It
            is a way to share your thoughts with people around you.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <Paragraph>
        Yet to be collaborated with (coming soon). Please check back later.
      </Paragraph>
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="lazytalks"
            title="LazyTalks"
            thumbnail={thumbInkdrop}
          >
            LazyTalks is a web application for chatting with people around you.
            It is a simple way to share your thoughts with people around you. It
            is a way to share your thoughts with people around you.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
