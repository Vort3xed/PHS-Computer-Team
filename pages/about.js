import Head from 'next/head';
import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
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
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About Us" />
          <div className="mt-6">
            <p className="text-lg">
            The PHS Computer Team is a club at Poolesville High School that is dedicated to teaching students about every aspect of computer science.
          We are a group of students who are passionate about computer science and want to share our knowledge with others. We teach students about 
          a variety of topics, including cyber security, competitive programming, and machine learning. We also participate in several competitions, including 
          the American Computer Science League (ACSL), AFA&apos;s CyberPatriot competition, USA Coding Olympiad (USACO).
            </p>
          </div>
        </div>
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="Our Activities" />
          <div className="mt-6">
            <p className="text-lg">
              We host a variety of events throughout the year, including hackathons, coding competitions, and workshops. We also have a weekly meeting where we discuss
              various topics in computer science. We also host our own competitions created by our members. 
            </p>
          </div>
        </div>

        <Events />
      </section>
    </Screen>
  );
}

export default About;
