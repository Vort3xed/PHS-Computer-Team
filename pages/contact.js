import Head from 'next/head';
import { useRef, useState } from 'react';
import Screen from '../components/screen/Screen';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from '../components/navbar/Navbar.module.css';

function ContactUs() {
  return (
    <Screen>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact Information of PHS Computer Team"
        />
        <meta
          name="keywords"
          content="PHS, PHS Computer Team, Computer, Computer Team, Team, Programming, Cybersecurity, Machine Learning, Competitive Programming, ACSL, CyberPatriot, USACO"
        />
      </Head>
      <section className="container-70 overflow-hidden">
        <div className='grid grid-cols-2 gap-4'>
          <div className="mt-28 mb-12 pt-10 pb-8 sm:mt-20 sm:mb-10">
            <h1 className="text-7xl sm:text-5xl">
              Interested?<br />
              Let's talk!
            </h1>

            <div className='m-2'>
            <Link href="https://www.instagram.com/phscomputerteam/">
              <a className="pl-1 block text-lg my-1 font-extralight">https://www.instagram.com/phscomputerteam/</a>
            </Link>
            <Link href="https://github.com/phscomputerteam">
              <a className="pl-1 block text-lg my-1 font-extralight">https://github.com/phscomputerteam</a>
            </Link>
            <Link href="https://www.linkedin.com/company/phscomputerteam/">
              <a className="pl-1 block text-lg my-1 font-extralight">https://www.linkedin.com/company/phscomputerteam/</a>
            </Link>
            <Link href="mailto:contact@phscomputerteam.org">
              <a className="pl-1 block text-lg my-1 font-extralight">contact@phscomputerteam.org</a>
            </Link>
            </div>
          </div>
          <div className='md:hidden'>
            <img class="w-full lg:inset-y-0 lg:left-0 lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt=""></img>
          </div>
        </div>
      </section>
    </Screen>
  );
}
export default ContactUs;
