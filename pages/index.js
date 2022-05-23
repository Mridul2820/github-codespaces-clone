import React from 'react';
import axios from 'axios';

import SectionEditor from '../components/sections/SectionEditor';
import SectionEnv from '../components/sections/SectionEnv';
import SectionFaster from '../components/sections/SectionFaster';
import SectionFirst from '../components/sections/SectionFirst';
import SectionPower from '../components/sections/SectionPower';
import SectionPreview from '../components/sections/SectionPreview';
import SectionFaq from '../components/sections/SectionFaq';
import SectionPrice from '../components/sections/SectionPrice';

const Home = ({ data }) => {
  return (
    <main className="bg-gh-primary text-white overflow-x-hidden">
      <section className="pb-16">
        <SectionFirst data={data.sectionFirst} />
        <SectionEditor />
      </section>
      <section className="px-4">
        <SectionPower data={data.sectionPower} />
        <SectionFaster data={data.sectionFaster} />
        <SectionEnv data={data.sectionEnv} />
        <SectionPreview data={data.sectionPreview} />
      </section>
      <section>
        <SectionPrice data={data.sectionPrice} />
      </section>
      <section>
        <SectionFaq data={data.sectionFaq} />
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;
  const { data } = await axios(`${API_URL}/homedata`);

  return {
    props: {
      data,
    },
    revalidate: 600,
  };
}

export default Home;
