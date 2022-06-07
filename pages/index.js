import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/bio";

const Pages = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        mt={2}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in India.
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Danish Shaikh
          </Heading>
          <p>Full Stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth={"200px"}
            display="inline-block"
            borderRadius={"full"}
            src="/images/userprofile.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Danish is a freelance and a full-stack developer based in Pune,
          Maharashtra, India with a passion for building digital services/stuff
          he wants. He has a knack for all things launching products, from
          planning and designing all the way to solving real-life problems with
          code. When not online, he loves to play video games with his friends.
          Currently, he is working Software Development Intern at AsIndia
          Innovations Pvt. Ltd.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Amravati, Maharashtra, India.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          To complete the Bachelor&apos;s Degree in Information Technology from
          the Savitribai Phule Pune University, India.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working as a Software Development Intern at AsIndia Innovations Pvt.
          Ltd.
        </BioSection>
      </Section>
    </Container>
  );
};

export default Pages;
