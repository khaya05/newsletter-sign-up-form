'use client';

import Image from 'next/image';
import Card from './Card';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { EmailContext } from '../EmailProvider';

const NewsLetterForm = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(!false)
  const { email, setEmail } = useContext(EmailContext);

  const features: string[] = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/thank-you');
  };

  return (
    <Card>
      <div
        className="
          flex
          flex-col
          items-center
          gap-10
          md:justify-between
          md:flex-row-reverse
          md:pl-[4rem]
          md:gap-[4rem]
          md:m-6
          lg:w-[58rem]
          "
      >
        <div>
          {/* mobile image */}
          <Image
            src="/images/illustration-sign-up-mobile.svg"
            width={23.4575 * 16}
            height={17.75 * 16}
            alt=""
            className="
            md:hidden
          "
          />

          {/* desktop image */}
          <Image
            src="/images/illustration-sign-up-desktop.svg"
            width={25 * 16}
            height={37.0625 * 16}
            alt=""
            className="
            hidden
            md:block
          "
          />
        </div>

        <div>
          <h1
            className="
              font-bold
              text-[2.5rem]
              md:text-[3.5rem]
              leading-[100%]
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
                  src="/icons/icon-list.svg"
                  width={1.3125 * 16}
                  height={1.3125 * 16}
                  alt="icon"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <form className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="email" className="mb-2 font-bold">
                Email Address
              </label>

              <span
                className={clsx(
                  'hidden',
                  'text-[#FF6155]',
                  'font-[0.75rem]',
                  'font-bold',
                  disabled && 'block'
                )}
              >
                Valid email Required
              </span>
            </div>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={clsx(
                'border-0',
                'ring-1',
                'px-6',
                'py-4',
                'rounded-lg',
                'font-base',
                'ring-[#19182B40]/25',
                'hover:cursor-pointer',
                'focus:border-0',
                'focus:outline-0',
                'focus:ring-1',
                'focus:text-[#19182B40]/100',
                'focus:ring-[#19182B40]/100',
                'invalid:rin-[#FF6155]'
              )}
            />
            <Button
              text="Subscribe to monthly newsletter"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleClick(e)
              }
              type="submit"
            />
          </form>
        </div>
      </div>
    </Card>
  );
};

export default NewsLetterForm;
