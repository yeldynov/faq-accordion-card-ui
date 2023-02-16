import React, { useState } from 'react';
import Layout from './Layout';
import WomanOnline from '../assets/illustration-woman-online-mobile.svg';
import WomanOnlineDesktop from '../assets/illustration-woman-online-desktop.svg';
import Box from '../assets/illustration-box-desktop.svg';

type Question = {
  title: string;
  content: string;
};

type Props = {
  questions: Question[];
};

export default function Accordion({ questions }: Props) {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className='flex mobile:flex-row flex-col rounded-3xl justify-center items-center bg-gray-light p-5 m-5 mt-40 mb-20 mobile:w-3/5 mobile:p-16 '>
      <div className='bg-bg-mobile mobile:bg-bg-desktop bg-no-repeat h-32 mobile:h-auto mobile:flex-1 mobile:relative '>
        <picture>
          <source media='(min-width: 375px)' srcSet={WomanOnlineDesktop} />
          <img
            src={WomanOnline}
            alt='Happy people working in the office'
            className='-translate-y-[8.25rem] h-48 mobile:h-full mobile:scale-125 mobile:translate-y-0 mobile:-translate-x-24'
          />
        </picture>
        <img
          className='absolute hidden mobile:block mobile:top-[6.5rem] mobile:-left-[12.1rem] '
          src={Box}
          alt='Email box'
        />
      </div>
      <div className='mobile:flex-1'>
        <h1 className='font-bold p-2 mb-5 text-3xl'>FAQ</h1>
        {questions.map((question, index) => (
          <Layout
            index={index + 1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title={question.title}
          >
            {question.content}
          </Layout>
        ))}
      </div>
    </div>
  );
}
