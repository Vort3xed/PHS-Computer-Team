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
        As one of the largest and oldest clubs at Poolesville High School, PHS Computer Team 
        has a long history of establishing a community where students of all grade levels and 
        experiences discuss and apply computer science theory and technical programming skills. 
        The PHS Computer Team also represents Poolesville in regional and international competitions, 
        including the American Computer Science League, AFA&apos;s CyberPatriot competition, and the USA 
        Coding Olympiad (USACO). These competitions will give our members the opportunity to show off 
        their knowledge and win prizes while they&apos;re at it.
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
