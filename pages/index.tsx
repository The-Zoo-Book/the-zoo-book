import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@chakra-ui/react';
import TopNav from '../components/top-nav-bar/top-nav-bar';

const Home: NextPage = () => {
  return (
    <TopNav />
  )
}

export default Home
