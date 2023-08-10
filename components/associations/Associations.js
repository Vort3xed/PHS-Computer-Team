import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from './association.module.css';
import BottomGlitter from '../StyledText/BottomGlitter';
import AffiliatesData from '../../lib/data/AffiliationsData.js';

function Associations() {
  return (
    <section className="container-70">
      <div className="my-12 mb-16 sm:my-6 sm:mb-10">
        <BottomGlitter text="Our Affiliations" />
      </div>
      <div className={Styles.associationContainer}>
        <div className={Styles.associationMenuContainer}>
          <div className={Styles.associationMenu}>
            {AffiliatesData.map((item, index) => {
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
            <h2>Physics Team</h2>
            <p>
            Learn topics in physics that are not taught in school and compete
            in competitions such as the Physics Bowl and the Physics Olympiad.
            </p>
          </Content>
          <Content id="CyberLab">
            <h2>PHS Cyber Lab</h2>
            <p>
            Through hands on experiments and labs, this club teaches students 
            about the basics of cybersecurity and how to protect themselves and 
            others online.
            </p>
          </Content>
          <Content id="MLClub">
            <h2>ML Club</h2>
            <p>
            A club designed to teach students about machine learning and how 
            to use it to solve real world problems. Using Python, students learn 
            about the basics of machine learning and how to use it to solve real 
            world problems.
            </p>
          </Content>
          <Content id="GWC">
            <h2>Girls Who Code</h2>
            <p>
            A Coalition of female students who are passionate about computer 
            science and want to share their knowledge with others.
            </p>
          </Content>
          <Content id="ACSL">
            <h2>ACSL Study</h2>
            <p>
            A Club that prepares students for the American Computer Science 
            League (ACSL) competition.
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
