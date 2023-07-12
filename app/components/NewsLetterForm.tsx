'use client';

import Image from 'next/image';
import Card from './Card';
import clsx from 'clsx';
import { useContext, useMemo } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { EmailContext } from '../EmailProvider';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormData {
  email: string;
}

const NewsLetterForm = () => {
  const router = useRouter();
  const { setEmail } = useContext(EmailContext);

  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
  });

  const features: string[] = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    setEmail(data.email);
    router.push('/thank-you');
  };

  const isInValid = useMemo(() => {
    return errors?.email?.hasOwnProperty('message');
  }, [errors.email]);

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

          <form onSubmit={handleSubmit(submitData)} className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="email" className="mb-2 font-bold">
                Email Address
              </label>

              {isInValid && (
                <span
                  className={clsx(
                    'text-[#FF6155]',
                    'font-[0.75rem]',
                    'font-bold'
                  )}
                >
                  Valid email required
                </span>
              )}
            </div>
            <input
              id="email"
              type="email"
              placeholder="email@company.com"
              {...register('email')}
              className={clsx(
                'border-0',
                'ring-1',
                'px-6',
                'py-4',
                'rounded-lg',
                'font-lg',
                'ring-[#19182B40]/25',
                'hover:cursor-pointer',
                'focus:border-0',
                'focus:outline-0',
                'focus:ring-1',
                'focus:text-[#19182B40]/100',
                'focus:ring-[#19182B40]/100',
                isInValid && 'ring-[#FF6155]',
                isInValid && 'bg-[#FF6155]/25',
                isInValid && 'text-[#FF6155]',
                isInValid && 'focus:ring-[#FF6155]',
                isInValid && 'focus:bg-[#FF6155]/25',
                isInValid && 'focus:text-[#FF6155]'
              )}
            />
            <Button text="Subscribe to monthly newsletter" type="submit" />
          </form>
        </div>
      </div>
    </Card>
  );
};

export default NewsLetterForm;
