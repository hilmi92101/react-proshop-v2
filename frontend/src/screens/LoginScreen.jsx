import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useLoginMutation } from '../redux/slices/userApiSlice';
import { setCredentials } from '../redux/slices/authSlice';

import { toast } from 'react-toastify';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {

    // state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // declare
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // mutation
    const [login, { isLoading }] = useLoginMutation();

    // get data from redux state
    const { userInfo } = useSelector((state) => state.auth);

    // URL Parameters
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    // if logged in, redirect
    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    // submit form
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={submitHandler}>

                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button disabled={isLoading} type='submit' variant='primary'>
                    Sign In
                </Button>

                {isLoading && <Loader />}
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default LoginScreen;