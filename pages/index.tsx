import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Button colorScheme='teal'>Hello World!</Button>
  )
}

export default Home
