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
        w-[87.20%]
        mx-auto
        md:w-full
        md:bg-[#242742]
        md:flex
        md:justify-center
        md:items-center
      "
      >
        <NewsLetterForm />
      </main>
    </>
  );
}
