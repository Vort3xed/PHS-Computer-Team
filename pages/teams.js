import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import MedTeamCard from '../components/teams/MedTeamCard';
import Styles from '../components/teams/Team.module.css';
import { Captains } from '../lib/data/Captains';
import { CyberLabCaptains } from '../lib/data/CyberLabCaptains';
import { GWCCaptains } from '../lib/data/GWCCaptains';
import { WebDevCaptains } from '../lib/data/WebDevCaptains';

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
        <h2 className={Styles.postHead}>Captains</h2>
        <div className={Styles.cardContainer}>
          {Captains.slice(0, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/${item.imageSrc}`}
                lazyImageSrc={`/teams/${item.imageSrc}`}
                socials={item.socials}
              />
            );
          })}
        </div>
        <h2 className={Styles.postHead}>CyberLab Captains</h2>
        <div className={Styles.medCardContainer}>
          {CyberLabCaptains.slice(0, 20).map((item, index) => {
            return (
              <MedTeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/${item.imageSrc}`}
                lazyImageSrc={`/teams/${item.imageSrc}`}
                socials={item.socials}
              />
            );
          })}
        </div>
        <h2 className={Styles.postHead}>Girls Who Code Captain</h2>
        <div className={Styles.medCardContainer}>
          {GWCCaptains.slice(0, 20).map((item, index) => {
            return (
              <MedTeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/${item.imageSrc}`}
                lazyImageSrc={`/teams/${item.imageSrc}`}
                socials={item.socials}
              />
            );
          })}
        </div>
        <h2 className={Styles.postHead}>WebDev Captain</h2>
        <div className={Styles.medCardContainer}>
          {WebDevCaptains.slice(0, 20).map((item, index) => {
            return (
              <MedTeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/${item.imageSrc}`}
                lazyImageSrc={`/teams/${item.imageSrc}`}
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
