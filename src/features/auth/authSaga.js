import { put, takeLatest } from 'redux-saga/effects'
import { loginFailure, loginRequest, loginSuccess } from './authSlice'
import { toast } from '../../utils/toast'

function* handleLogin() {
    try {
        const user = {
            name: 'Admin',
            email: 'admin@example.com'
        }
        yield put(loginSuccess({ user, token: 'fake-token' }))
        toast.success('Logged in successfully!')
    } catch (error) {
        yield put(loginFailure())
        toast.error(error.message)
    }
}

export function* authSaga() {
    yield takeLatest(loginRequest.type, handleLogin)
}

export default authSaga
