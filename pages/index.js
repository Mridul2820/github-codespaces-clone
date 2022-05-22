import React from 'react';
import SectionEditor from '../components/sections/SectionEditor';
import SectionFirst from '../components/sections/SectionFirst';

const Home = () => {
  return (
    <main className="bg-gh-primary text-white overflow-x-hidden">
      <SectionFirst />
      <SectionEditor />
    </main>
  );
};

export default Home;
