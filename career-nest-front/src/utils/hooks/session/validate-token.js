import { jwtDecode } from 'jwt-decode';

export default function useValidateJWT(token) {
    if (!token) return false; //no token present

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.exp < Date.now() / 1000; //check if the token is still valid or expired
    } catch (err) {
        return false; //invalid JWT token
    }
}
