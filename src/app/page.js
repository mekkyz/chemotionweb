"use client";

import { useState } from 'react';
import Header from './components/Header';
import IntroSection from './sections/IntroSection';
import DummySection from './sections/DummySection';
import Footer from './components/Footer';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    { id: 'intro', component: IntroSection, title: "Electronic Laboratory Notebook (ELN)" },
    { id: 'dummy1', component: DummySection, title: "DUMMY HEADER" },
    { id: 'dummy2', component: DummySection, title: "DUMMY HEADER" },
    { id: 'dummy3', component: DummySection, title: "DUMMY HEADER" },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans">
      <Header onSearch={setSearchTerm} />
      <main className="pt-20 bg-[#7EB9D7] min-h-screen flex flex-col items-center justify-center">
        {filteredSections.length > 0 ? (
          filteredSections.map((section) => {
            const Component = section.component;
            return <Component key={section.id} title={section.title} />;
          })
        ) : (
          <div className="text-center text-gray-700 mt-8">
            <p className="text-2xl text-white font-semibold">No Results Found</p>
            <p className="text-white mt-2">Try adjusting your search to find what you’re looking for.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
