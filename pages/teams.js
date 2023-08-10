import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { Leads } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Team</title>
        <meta
          name="description"
          content="Leardership team of PHS Computer Team"
        />
        <meta
          name="keywords"
          content="PHS, PHS Computer Team, Computer, Computer Team, Team, Programming, Cybersecurity, Machine Learning, Competitive Programming, ACSL, CyberPatriot, USACO"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
        </div>
        <h2 className={Styles.postHead}>Leads</h2>
        <div className={Styles.cardContainer}>
          {Leads.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/${item.imageSrc}`}
                lazyImageSrc={`/teams/2k19/${item.imageSrc}`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default Teams;
