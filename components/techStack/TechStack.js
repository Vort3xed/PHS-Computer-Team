import { useEffect, useRef } from 'react';
import Styles from './tech-stack.module.css';



function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Explore />
        <Learn />
        <Code />
      </div>
    </section>
  );
}

export default TechStack;

function Explore() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Learn.</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
        Computer science is a broad field of study, and our club structure is designed to reflect that. 
        We have five sub-clubs targeting different divisions of computer science. 
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Cyberlab</h2>
            <p>
            In Cyberlab, we will be learning everything cybersecurity. This includes defending systems 
            by rectifying vulnerabilities (defense), compromising vulnerabilities in external systems 
            (attack), protecting transactions between computer systems (networking), and more. 
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Machine Learning</h2>
            <p>
            In our machine learning sub club, you will learn the basics of ML, starting from the bottom up. 
            We will start with concepts as simple as linear regression, and work our way up to more 
            “complicated” algorithms, like convolutional neural networks.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Competitive Programming</h2>
            <p>
            The competitive programming sub club will teach you everything you need to know to prepare 
            for computer science competitions like the American Computer Science League and the USA Computing Olympiad.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Girls Who Code</h2>
            <p>
            Girls Who Code strives to bridge the gender gap in computer science by creating a welcoming space where 
            individuals of all experiences and backgrounds are welcome. 
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Website Development</h2>
            <p>
            Our web development sub club will focus on the fundamentals of designing and programming websites. 
            You will learn JavaScript, HTML, CSS, and potentially more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Learn() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Code.</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
        You will be given the opportunity to apply what you learn in the computer team to a number of 
        exciting individual, group, and whole club projects. The projects we will be working on this year include:
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>MAGNET3SAT</h2>
            <p>
            A joint venture between Poolesville and Montgomery Blair High School in which we aim to design, 
            construct, and launch a satellite into orbit. The satellite has two objectives: 1) to examine 
            the interaction of radio waves with the ionosphere and 2) to map electron density in the ionosphere. 
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Physics Simulations</h2>
            <p>
            We will be collaborating with the PHS physics team to apply machine learning to simulated environments, 
            like teaching a machine learning model how to keep a ball balanced in equilibrium using motors. 
            </p>
          </div>
          <div className={Styles.content}>
            <h2>CTFalcon</h2>
            <p>
            This year, Poolesville aims to organize its own Capture the Flag (CTF) competition that will be designed 
            to test participants on their knowledge of cybersecurity, computer theory, and machine learning concepts. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Compete.</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
        You will be given the opportunity to apply the skills and knowledge you gain in the computer 
        team to compete in a number of regional, national, and international computer science competitions. 
        The three large competitions that PHS Computer Team participates in are:
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>CyberPatriot</h2>
            <p>
            A competition in which you will be tasked with identifying and repairing cybersecurity 
            vulnerabilities in virtual operating systems.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>USACO</h2>
            <p>
            USACO holds periodic online contests on programming using optimizing algorithms and data 
            structures. Participating in this competition gives you the opportunity to be selected to 
            represent the US at the International Olympiad in Informatics.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>ACSL</h2>
            <p>
            An international competition consisting of 4 contests, each with a short answer and programming 
            section. Both will be used to test your knowledge of computer science theory, and your ability 
            to apply these concepts in programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
