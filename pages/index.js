import React from 'react';
import SectionEditor from '../components/sections/SectionEditor';
import SectionFirst from '../components/sections/SectionFirst';

const Home = () => {
  return (
    <main className="bg-gh-primary text-white overflow-x-hidden">
      <section className="pb-16">
        <SectionFirst />
        <SectionEditor />
      </section>
    </main>
  );
};

export default Home;
