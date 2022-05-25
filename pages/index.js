import React from 'react';

import SectionEditor from '../components/sections/SectionEditor';
import SectionEnv from '../components/sections/SectionEnv';
import SectionFaster from '../components/sections/SectionFaster';
import SectionFirst from '../components/sections/SectionFirst';
import SectionPower from '../components/sections/SectionPower';
import SectionPreview from '../components/sections/SectionPreview';
import SectionFaq from '../components/sections/SectionFaq';
import SectionPrice from '../components/sections/SectionPrice';
import SectionReview from '../components/sections/SectionReview';
import SectionMoreDetail from '../components/sections/SectionMoreDetail';

import { data } from '../data/homedata';

const Home = () => {
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
        <SectionMoreDetail data={data.sectionMoreDetail} />
      </section>
      <section>
        <SectionReview data={data.sectionReview} />
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

export default Home;
