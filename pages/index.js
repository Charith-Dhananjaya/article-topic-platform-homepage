import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from './Homepage/Homepage'


export default function Home() {
  return (
    <>
    <title>WriterGate</title>
     <Homepage />

    </>
  )
}
