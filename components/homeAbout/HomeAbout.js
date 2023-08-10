import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import BottomGlitter from '../StyledText/BottomGlitter';

function HomeAbout() {
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
    <section
      ref={ref}
      className="container-70 my-16 py-16 fadeonscroll sm:transform-none sm:opacity-100"
    >
      <BottomGlitter text="About Us" />
      <div className="my-6 py-2">
        <p className="text-xl w-10/12 md:w-full md:text-lg sm:text-base">
          The PHS Computer Team is a club at Poolesville High School that is dedicated to teaching students about every aspect of computer science.
          We are a group of students who are passionate about computer science and want to share our knowledge with others. We teach students about 
          a variety of topics, including cyber security, competitive programming, and machine learning. We also participate in several competitions, including 
          the American Computer Science League (ACSL), AFA&apos;s CyberPatriot competition, USA Coding Olympiad (USACO).
        </p>
      </div>
      
      <Link href="/about">
        <a className="flex w-[fit-content] rounded-full">
          <Button>
            <span className="z-50 block">View More</span>
          </Button>
        </a>
      </Link>
    </section>
  );
}

export default HomeAbout;
