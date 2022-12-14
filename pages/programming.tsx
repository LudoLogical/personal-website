// noinspection JSUnusedGlobalSymbols

import type { NextPage } from 'next'
import Head from 'next/head'

import Top from '../components/top';
import Wrapper from '../components/wrapper';
import StyledLink from '../components/styled-link';
import Link from "next/link";

const h2Styles = 'm-5 text-2xl font-bold text-center text-base-content/50';

const Programming: NextPage = () => {
  return (
    <>
      <Head>
        <title>Programming | Daniel DeAnda</title>
      </Head>
      <Wrapper>
        <div className={'flex flex-col justify-center'}>
          <Top mainText={'Programming'} />
        </div>
        <p className={'mt-6 mx-24 text-base-content/50'}>
          Daniel has over six years of experience in the field of Computer Science. In that time, he has
          completed many programming projects, acquired valuable expertise, and earned various accolades.
          You can learn more about his capabilities and accomplishments below.
        </p>
        <h2 className={h2Styles}>Portfolio</h2>
        <div className={'btn-group justify-center'}>
          <Link href={'https://github.com/LudoLogical'}>
            <button className={'btn btn-md text-2xl'}>GitHub Profile</button>
          </Link>
          <Link href={'/contributions'}>
            <button className={'btn btn-md text-2xl'}>Contributions</button>
          </Link>
        </div>
        <h2 className={h2Styles}>Knowledge</h2>
        <p className={'mt-6 mx-24 text-base-content/50 text-center'}>
          HTML 5, CSS 3, JavaScript, jQuery, and TypeScript (fluent)<br/>
          React, Next.js, and Jest (proficient)<br/>
          Grommet (fluent) and styled-components (proficient)<br/>
          Tailwind CSS and daisyUI (proficient)<br/>
          Java Versions 8+ and JUnit (fluent)<br/>
          Processing for Java (proficient)<br/>
          Cucumber and Karate (proficient)<br/>
          Python 2 (proficient) and 3 (fluent)<br/>
          Pygame (fluent) and PyInstaller (proficient)<br/>
          Pandas and NumPy (proficient)<br/>
          C and C++ (proficient)<br/>
          SQL and PostgreSQL (proficient)<br/>
          MIPS (proficient)<br/>
          LaTeX (proficient)<br/>
          JetBrains IDEs (fluent)<br/>
          VSCode (fluent)<br/>
          Visual Studio (proficient)<br/>
          Eclipse (proficient)<br/>
          Vim (proficient)<br/>
          NPM, Yarn, and PNPM (proficient)<br/>
          Git and GitHub (proficient)<br/>
          Heroku Web and Heroku CLI (proficient)<br/>
          Windows Command Prompt and Powershell (proficient)<br/>
          UNIX/Linux Terminal and Bash (proficient)
        </p>
        <h2 className={h2Styles}>Awards (<StyledLink href={'https://www.codeday.org/'} text={'CodeDay'} />)</h2>
        <p className={'mt-6 mx-24 text-base-content/50 text-center'}>
          Best Game - <StyledLink href={'https://projects.danieldeanda.tech/with-these-eyes/'} text={'With These Eyes'} /> (Fall 2016)<br/>
          Best Game - <StyledLink href={'https://projects.danieldeanda.tech/superhyperbuff/'} text={'SuperHyperBuff'} /> (Winter 2017)<br/>
          Special Award for Completeness in Design - <StyledLink href={'https://jcwang111.github.io/quotemaker/'} text={'QuoteMaker'} /> (Fall 2017)<br/>
          Special Award for Creativity in Design - <StyledLink href={'https://github.com/DGWerlod/in-construction'} text={'In Construction'} /> (Winter 2018)<br/>
          Personal Commendation from Judges - <StyledLink href={'https://github.com/DGWerlod/roguelike-game'} text={'Chef Spud'} /> (Spring 2018)<br/>
          Best In Show - <StyledLink href={'https://github.com/DGWerlod/pinball-game'} text={'Pin Ball'} /> (Fall 2018)<br/>
          Best In Show - Huevo Juego (Available Upon Request) (Spring 2019)
        </p>
        <h2 className={h2Styles}>Misc. Projects</h2>
        <p className={'mt-6 mx-24 text-base-content/50 text-center'}>
          <StyledLink href={'/fermata'} text={'Fermata.js'} />
        </p>
      </Wrapper>
    </>
  )
}

export default Programming;
