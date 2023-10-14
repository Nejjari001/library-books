import React from "react";

const booksData = [
  { id: 1, title: "Book 1", author: "Author 1", category: "Category 1" },
  { id: 2, title: "Book 2", author: "Author 2", category: "Category 2" },
  { id: 3, title: "Book 3", author: "Author 3", category: "Category 3" },
];

const Book = ({ book }) => {
  return (
    <div className="card" key={book.id}>
      <div className="card-body">
        <h3 className="card-title">{book.title}</h3>
        <p className="card-text">Author: {book.author}</p>
        <p className="card-text">Category: {book.category}</p>
      </div>
    </div>
  );
};

const BooksContainer = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Book List</h1>
      <div className="row">
        {booksData.map((book) => (
          <div className="col-md-4" key={book.id}>
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksContainer;
