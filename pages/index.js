import Head from 'next/head'
import Image from 'next/image'
import Questions, {
   getServerSideProps as getServerSidePropsQuestions,
   } from './questions';
import styles from '../styles/Home.module.css'

export function getServerSideProps(context) {
   return getServerSidePropsQuestions(context);
   }
export default function Home(props) {
  return  <Questions {...props} />;
    
  
}
