import axios from 'axios';
import React from 'react';
import SectionEditor from '../components/sections/SectionEditor';
import SectionEnv from '../components/sections/SectionEnv';
import SectionFaster from '../components/sections/SectionFaster';
import SectionFirst from '../components/sections/SectionFirst';
import SectionPower from '../components/sections/SectionPower';
import SectionPreview from '../components/sections/SectionPreview';

const Home = ({ data }) => {
  console.log(data);
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
    revalidate: 3600,
  };
}

export default Home;
