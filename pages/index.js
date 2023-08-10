/* eslint-disable jsx-a11y/media-has-caption */
import Head from 'next/head';
import Associations from '../components/associations/Associations';
import GridGallery from '../components/gridGallery/GridGallery';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import Sponsors from '../components/sponsors/Sponsors';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Head>
        <title>PHS Computer Team</title>
        <meta
          name="description"
          content="PHS Computer team is a club at Poolesville High School that is dedicated to teaching students about every aspect of computer science. 
          We are a group of students who are passionate about computer science and want to share our knowledge with others. 
          We teach students about a variety of topics, including cyber security, competitive programming, and machine learning."
        />
        <meta
          name="keywords"
          content="PHS, PHS Computer Team, Computer, Computer Team, Team, Programming, Cybersecurity, Machine Learning, Competitive Programming, ACSL, CyberPatriot, USACO"
        />
      </Head>
      <Video />
      <HomeAbout />
      <TechStack />
      <GridGallery />
      <Sponsors />
      <Associations />
    </Screen>
  );
}
