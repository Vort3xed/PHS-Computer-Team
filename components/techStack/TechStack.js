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
        <h2 className={Styles.header}>Explore.</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Splitting the huge field of computer science into smaller parts, we work with serveral others
          computer science clubs at PHS to help students find their true passions.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Cyber Lab</h2>
            <p>
              Through hands on experiments and labs, this club teaches students about the basics of cybersecurity 
              and how to protect themselves and others online.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>ML Club</h2>
            <p>
              A club designed to teach students about machine learning and how to use it to solve real world problems.
              Using Python, students learn about the basics of machine learning and how to use it to solve real world problems.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Girls Who Code</h2>
            <p>
              A Coalition of female students who are passionate about computer science and want to share their knowledge with others.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>ACSL Study</h2>
            <p>
              A Club that prepares students for the American Computer Science League (ACSL) competition.
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
        <h2 className={Styles.header}>Learn.</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Not only will you learn to apply your skills to real world problems, but you will also gain the 
          opportunity to use your skills and develop large projects.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Blair3 Sat</h2>
            <p>
              Help develop a satellite that will be launched into space to collect data on the Earth's atmosphere.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Physics</h2>
            <p>
              Work with the physics team to develop solutions to real world physics problems. 
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
        <h2 className={Styles.header}>Code.</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Now that we've given you the skills to succeed, its time for you to show them
          off and compete in competitions. We offer a variety of competitions for you to
          compete in.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>CyberPatriot</h2>
            <p>
              A national cybersecurity competition that teaches students about the basics of cybersecurity and how to protect themselves and others online.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>USACO</h2>
            <p>
              The USA Computing Olympiad is a national computer science competition that tests students on their ability to solve problems using algorithms and data structures.
            </p>
          </div>
          <div className={Styles.content}>
            <h2>ACSL</h2>
            <p>
              The American Computer Science League is a national computer science competition that tests students on their ability to solve problems using algorithms and data structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
