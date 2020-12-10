import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductListScreen(props) {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <h1>Products</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product._id}>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
        </div>
    );
}
