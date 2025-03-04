import React, { useEffect, useState } from "react";
// import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { CustomCarousel } from "../../components/customCarouse/CustomCarousel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAllBookAction } from "../../features/books/bookAction.js";

const Home = () => {
  // const { books } = useSelector((state) => state.bookInfo);
  const dispatch = useDispatch();

  const bookStore = useSelector((state) => state.bookInfo);

  const [searchedBooks, setSearchBooks] = useState([]);

  //
  const fetchBooks = () => {
    dispatch(getAllBookAction());
  };

  //call the fetch book action
  useEffect(() => {
    fetchBooks();
  }, []);

  //trigger update of the search book when bookstore.books is updated
  useEffect(() => {
    setSearchBooks(bookStore.books || []);
  }, [bookStore.books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    setSearchBooks(
      bookStore.books.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <CustomCarousel />

      {/* book list  */}

      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">{searchedBooks.length} books found!</label>
            <div>
              <Form.Control
                onChange={handleOnSearch}
                placeholder="search by book name .. "
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col className="d-flex gap-4 flex-wrap">
            {searchedBooks.map(
              (book) =>
                book.status === "active" && (
                  <Link key={book._id} to={"/book/" + book._id}>
                    <CustomCard {...book} />
                  </Link>
                )
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
