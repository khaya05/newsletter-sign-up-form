'use client';

import Image from 'next/image';
import Card from './Card';
import { useState } from 'react';

const NewsLetterForm = () => {
  const [email, setEmail] = useState('');
  console.log(email);

  const features: string[] = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  return (
    <Card>
      <div
        className="
          flex
          flex-col
          items-center
          md:flex-row-reverse
          "
      >
        <div className="">
          {/* mobile image */}
          <Image
            src="/public/images/illustration-sign-up-mobile.svg"
            width={23.4575 * 16}
            height={17.75 * 16}
            alt=""
            className="
            md:hidden
          "
          />

          {/* desktop image */}
          <Image
            src="/public/images/illustration-sign-up-desktop.svg"
            width={25 * 16}
            height={37.0625 * 16}
            alt=""
            className="
            sm:hidden
            md:block
          "
          />
        </div>

        <div className="pl-10">
          <h1
            className="
              text-[3.5rem]
              font-bold


            "
          >
            Stay updated!
          </h1>

          <p
            className="
              my-6
              text-[1rem]
              font-normal
            "
          >
            Join 60,000+ product managers receiving monthly{' '}
            <span className="block">updates on:</span>
          </p>

          <ul className="flex flex-col gap-[0.62rem] mb-10">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Image
                  src="/public/icons/icon-list.svg"
                  width={1.3125 * 16}
                  height={1.3125 * 16}
                  alt="icon"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <form className='flex flex-col'>
            <label htmlFor="email">Email Adress</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default NewsLetterForm;
