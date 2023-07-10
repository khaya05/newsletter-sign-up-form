import NewsLetterForm from './components/NewsLetterForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Newsletter | Sign-up</title>
      </Head>

      <main
        className="
        h-full
        w-full
        bg-[#242742]
        lg:flex
        lg:justify-center
        lg:items-center
      "
      >
        <NewsLetterForm />
      </main>
    </>
  );
}
