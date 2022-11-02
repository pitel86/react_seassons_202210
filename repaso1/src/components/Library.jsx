import React, { useState } from "react";
import Book from "./Book";

const Library = ({ libros }) => {
  const [books, setBooks] = useState(libros);

  const sayMyTitle = (titulo) => {
    console.log(titulo);
  };

  const removeBook = (index) => {
    const arrayLibros = [...books];
    arrayLibros.splice(index, 1);
    setBooks([...arrayLibros]);
  };
  return (
    <div>
      {books &&
        books.map((libro, index) => (
          <Book
            key={index}
            funcion2={() => sayMyTitle(libro.title)}
            funcion={() => removeBook(index)}
            element={libro}
          />
        ))}
    </div>
  );
};

export default Library;
