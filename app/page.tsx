'use client'

import Link from "next/link";
import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import Greetings from "./components/greetings";

export default function Home() {
  return (
    <Grid 
      w={'60%'} 
      h='100vh'
      margin="auto"
      templateRows={'4 1fr'}
    >
      <GridItem margin={'auto'} rowSpan={1}>
        <Text fontSize='7xl'>
          {Greetings()}, this is Anıl 👋🏿
        </Text>
      </GridItem>
      <GridItem margin={'auto'} rowSpan={1}>
        <Flex justifyContent={'space-between'} gap={'5'}>
          <Link href="/about-me"><Text fontSize='xl'>About me</Text></Link>
          <Link href="/blog"><Text fontSize='xl'>Blog</Text></Link>
          <Link href="/reading-list"><Text fontSize='xl'>Reading List</Text></Link>
          <Link href="/contact"><Text fontSize='xl'>Contact</Text></Link>
        </Flex>
      </GridItem>
      <GridItem margin={'auto'} rowSpan={2}>
          <Text fontSize='4xl'>
            Self-taught software engineer in Melbourne, Australia. <br />
            I love JavaScript and I am interested in inclusive design and web accessibility.
          </Text>
      </GridItem>
      <GridItem margin={'auto'} rowSpan={1}>
        <Text fontSize='xs'>© 2023 All rights reserved.</Text> 
      </GridItem>
    </Grid>
  )
}
