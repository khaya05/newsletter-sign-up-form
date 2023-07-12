'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface Props {
  text: string;
  type: 'button' | 'reset' | 'submit';
  onClick?: any;
}

const Button: React.FC<Props> = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'bg-[#19182B40]/100',
        'text-white',
        'w-full',
        'h-14',
        'mt-6',
        'rounded-lg',
        'font-bold',
        'hover:cursor-pointer',
        'hover:bg-gradient-to-b from-[#FF6A3A] to-[#FF527B]',
        'hover:shadow-2xl',
        'hover:shadow-[#ff615580]',
        'mb-10',
        'md:mb-0'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
