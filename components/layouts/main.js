import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Danish Shaikh - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
