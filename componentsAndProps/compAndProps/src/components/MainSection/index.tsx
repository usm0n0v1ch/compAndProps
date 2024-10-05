import React from 'react';
import styles from './style.module.css'; 

interface Book {
  title: string;
  description: string;
  image: string;
}

interface MainSectionProps {
  books: Book[];
}

const MainSection: React.FC<MainSectionProps> = ({ books }) => {
  return (
    <main>
      <h2>Книги в библиотеке</h2>
      <p>Количество книг: {books.length}</p>
      <div className={styles.bookCards}>
        {books.map((book, index) => (
          <div key={index} className={styles.bookCard}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button>Читать</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;
