import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { listCategories } from "../actions/categoryActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const categoryList = useSelector((state) => state.categoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = categoryList;

  const userInfo = {
    _id: "5fa7fb0a62083e11ace57490",
  };
  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    dispatch(listProducts());
    dispatch(listCategories());
    /*if (userInfo) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }*/
  }, [dispatch, history, successDelete]);

  const deleteHandler = (id) => {
    console.log("Delete");
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm?")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = (id) => {};
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onclick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <h3>Loading</h3>}

      {errorDelete && <h3>{errorDelete}</h3>}
      {loading || loadingCategories ? (
        <h3>Loading</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  {
                    categories.find(
                      (category) => category._id == product.category
                    ).name
                  }
                </td>
                <td>
                  <LinkContainer to={`/user/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btm-sm "
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
