'use client';

import { EmailContext } from '@/app/EmailProvider';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

const ThankYouCard = () => {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(true);
  const { email, setEmail } = useContext(EmailContext);

  const handleClick = () => {
    setShowMessage((state) => !state);

    setEmail('');
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <Card>
      <div
        className="
          h-full
          md:w-[31.5rem]
          mx-16
          mt-12
          mb-16
          flex
          flex-col
          justify-between
          items center
          "
      >
        <div>
          <Image
            src="/icons/icon-list.svg"
            width={64}
            height={64}
            alt="icon"
            className="
            mb-10
          "
          />
          <h1
            className="
            font-bold
            text-[2.5rem]
            md:text-[3.5rem]
            leading-[100%]
            mb-6
          "
          >
            Thanks for <span className="block">subscribing!</span>
          </h1>

          {showMessage && (
            <p className="mb-10">
              A confirmation email has been sent to <strong>{email}</strong>{' '}
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          )}
        </div>
        {showMessage && (
          <Button
            type="button"
            onClick={handleClick}
            text={` Dismiss message`}
          />
        )}
      </div>
    </Card>
  );
};

export default ThankYouCard;
