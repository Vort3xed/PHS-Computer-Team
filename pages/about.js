import Head from 'next/head';
// import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import TextUnit from '@/components/textComponent/TextUnit';

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
              As one of the largest and oldest clubs at Poolesville High School, PHS Computer Team has 
              a long history of establishing a community where students of all grade levels and experiences 
              discuss and apply computer science theory and technical programming skills. The PHS Computer 
              Team also represents Poolesville in regional and international competitions, including the American 
              Computer Science League, AFA&apos;s CyberPatriot competition, and the USA Coding Olympiad (USACO). 
              These competitions will give our members the opportunity to show off their knowledge and win 
              prizes while they&apos;re at it. 
              <br />
              <br />
              Computer science is a broad field of study, and our club structure is designed to reflect that. 
              We have a total of five sub-clubs targeting different divisions of computer science: machine learning, 
              cyber security, competitive programming, website development, and Girls Who Code. <b>All meetings will 
              take place in Room 293 at lunch.</b>
            </p>
          </div>
        </div>

        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="Subclub Descriptions" />

          <TextUnit
            header="Machine Learning"
            subheader="Monday, First Half of Lunch"
            text="the ml club is great ngl"
          />
        </div>

        {/* <Events /> */}
      </section>
    </Screen>
  );
}

export default About;
