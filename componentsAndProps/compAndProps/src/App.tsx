import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const books = [
    {
      title: 'Книга 1',
      description: 'Описание книги 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Книга 2',
      description: 'Описание книги 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Книга 3',
      description: 'Описание книги 3',
      image: 'https://via.placeholder.com/150',
    },

  ];

  return (
    <div>
      <Header />
      <MainSection books={books} />
      <Footer />
    </div>
  );
};

export default App;
