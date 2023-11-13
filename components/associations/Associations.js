import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from './association.module.css';
import BottomGlitter from '../StyledText/BottomGlitter';
import AffiliatesData from '../../lib/data/AffiliationsData';

function Associations() {
  return (
    <section className="container-70">
      <div className="my-12 mb-16 sm:my-6 sm:mb-10">
        <BottomGlitter text="Our Affiliations" />
      </div>
      <div className={Styles.associationContainer}>
        <div className={Styles.associationMenuContainer}>
          <div className={Styles.associationMenu}>
            {AffiliatesData.map((item) => {
              return(
                <div className={Styles.associationMenuItem}>
                  <a href={item.title}>
                    <Image
                      className={Styles.associationImage}
                      height="100%"
                      width="100%"
                      src={item.src}
                      alt={item.title}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className={Styles.associationContentContainer}>
          <Content id="Physics">
            <h2>PHS Physics Team</h2>
            <p>
            A club for students that are passionate about Physics, and seek knowledge about concepts that aren&apos;t 
            offered in traditional physics classes. Physics team represents Poolesville High School in the Physics 
            Bowl and the Physics Olympiad competitions.
            </p>
          </Content>
          <Content id="WebDev">
            <h2>PHS Web Development Club</h2>
            <p>
            Not to be confused with the PHS Computer Team Web Dev sub-club, the PHS Web Development Club is an 
            independent club that specializes in project-based learning of web design and development.
            </p>
          </Content>
          <Content id="MontBlair">
            <h2>Montgomery Blair Satellite Team</h2>
            <p>
            Montgomery Blair&apos;s branch of the satellite project. The Poolesville branch emerged from the Montgomery
            Blair branch.
            </p>
          </Content>
        </div>
      </div>
    </section>
  );
}

export default Associations;

function Content({ id = '', className = '', children }) {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      ref={ref}
      id={id}
      className={`${Styles.associationContent} fadeonscroll ${className}`}
    >
      {children}
    </div>
  );
}
