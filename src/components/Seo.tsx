import Head from 'next/head';
import { FC } from 'react';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: "NAEST'23 Exam Portal",
  siteName: "NAEST'23 Exam Portal",
  description: 'Exam Portal for NAEST 2023.',
  url: 'http://localhost:3000',
  type: 'website',
  robots: 'follow, index',
};

const Seo: FC<{ date: string; templateTitle: string }> = ({
  date,
  templateTitle,
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{templateTitle || defaultMeta.title}</title>
      <meta name='robots' content={defaultMeta.robots} />
      <meta content={defaultMeta.description} name='description' />
      <meta property='og:url' content={`${defaultMeta.url}${router.asPath}`} />
      <link rel='canonical' href={`${defaultMeta.url}${router.asPath}`} />
      {date && (
        <>
          <meta property='article:published_time' content={date} />
          <meta name='publish_date' property='og:publish_date' content={date} />
          <meta
            name='author'
            property='article:author'
            content='NAEST 2023 Team'
          />
        </>
      )}

      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
};

export default Seo;
