import { Start, loginSucces, Failed, signUpSucces, signupFailed, resetError } from './userSlice';
import { publicRequest } from '../axiosRequestMethods';
import { setError } from './errorSlice';

//login
export const login = async (dispatch, user) => {
    const { email, password, ip } = user;
    console.log(ip)
    dispatch(Start())
    try {
        const res = await publicRequest.post("api/auth/login", { email, password })
        console.log(user)
        dispatch(loginSucces(res.data))

    } catch (error) {
        dispatch(Failed(error.response.data.message))
        dispatch(setError(error.response.data.message))
        //reseting error
        setTimeout(() => {
            dispatch(resetError())
        }, 5000);
    }
}

//signup
export const signUp = async (dispatch, user) => {
    dispatch(Start())
    try {
        const res = await publicRequest.post("api/auth/register", user)
        dispatch(signUpSucces(res.data))
    } catch (error) {
        dispatch(signupFailed(error.response.data.message));
        dispatch(setError(error.response.data.message))

        //reseting error
        setTimeout(() => {
            dispatch(resetError())
        }, 5000);
    }
}

