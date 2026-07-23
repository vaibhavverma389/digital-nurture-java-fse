import React from "react";

function BookDetails() {
  const books = [
    {
      id: 1,
      name: "Java Programming",
      author: "James Gosling",
      price: "₹500"
    },
    {
      id: 2,
      name: "React JS",
      author: "Jordan Walke",
      price: "₹700"
    },
    {
      id: 3,
      name: "Node JS",
      author: "Ryan Dahl",
      price: "₹650"
    }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{book.name}</h3>
          <p>Author : {book.author}</p>
          <p>Price : {book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;