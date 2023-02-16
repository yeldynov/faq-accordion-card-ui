import React from 'react';
import Arrow from '../assets/icon-arrow-down.svg';

type Props = {
  title: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
};

export default function Layout({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: Props) {
  const handleSetIndex = (index: number) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <div className='border-b border-gray-300 w-full'>
      <div
        onClick={() => handleSetIndex(index)}
        className='flex w-full justify-between p-2 pb-3 mt-2 hover:text-red-soft hover:cursor-pointer'
      >
        <div className='flex'>
          <div
            className={activeIndex === index ? 'text-blue-dark font-bold' : ''}
          >
            {title}
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img
            src={Arrow}
            className={`w-3 ${activeIndex === index ? 'rotate-180' : ''}`}
            alt=''
          />
        </div>
      </div>
      {activeIndex === index && (
        <div className='shadow-3xl rounded-2xl p-2 text-sm mb-6 text-gray-blue '>
          {children}
        </div>
      )}
    </div>
  );
}
