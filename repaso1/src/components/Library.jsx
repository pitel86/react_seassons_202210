import React, { useState } from "react";
import Book from "./Book";

const Library = ({ libros }) => {
  const [books, setBooks] = useState(libros);

  const [myNewBook, setMyNewBook] = useState({title:"", author: ""})

  const sayMyTitle = (titulo) => {
    console.log(titulo);
  };

  const removeBook = (index) => {
    const arrayLibros = [...books];
    arrayLibros.splice(index, 1);
    setBooks([...arrayLibros]);
  };

  const handleChange = (event) =>{
    const {name, value} = event.target;
    console.log(name)
    // {"author", "pepito"} --> recibo estos valores del target
    // myNewBook --> {author: "pepit", title: "biografia"}
    //creo una copia de mynewbook y seteo el valor de author a pepito
    setMyNewBook({...myNewBook, [name]:value})
    // myNewBook --> {author: "pepito", title: "biografia"}
  }

  const handleSubmit = (ev) => {
    ev.preventDefault(); // para evitar recargas en la pagina
    setBooks([...books, myNewBook]);
    setMyNewBook({title:"", author: ""})
  }
  return (
    <>
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
    <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <span>Title</span>
              <input type="text" name="title" value={myNewBook.title} onChange={handleChange}/>
            </label>
            <label>
              <span>Author</span>
              <input type="text" name="author" value={myNewBook.author} onChange={handleChange}/>
            </label>
            <button>Añadir</button>
          </fieldset>
        </form>
    </div>
    </>
  );
};

export default Library;
