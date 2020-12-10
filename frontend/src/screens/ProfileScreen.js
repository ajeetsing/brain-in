import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);

    return (
        <div>

            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div class="card">
                            <div className="title">
                                <h1>User Profile</h1>
                            </div>
                            <div>
                                <h2>user name : {user.name}</h2>
                            </div>
                            <div>
                                <h2>email : {user.email}</h2>
                            </div>
                            <div>
                                <h2>mobile : {user.mobile}</h2>
                            </div>
                            <div>
                                <h2>user createad : {user.createdAt}</h2>
                            </div>

                            <div>
                                <h2>last_login : {new Date(user.login).toLocaleTimeString()}</h2>
                            </div>


                        </div>
                    )}

        </div>
    );
}