import { Box, Container, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <Box display={{ md: "flex" }}>Coming Soon!</Box>
        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={thumbPortfolio}
            href="sadf" 
          />
        </SimpleGrid> */}
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from "../components/chakra";
