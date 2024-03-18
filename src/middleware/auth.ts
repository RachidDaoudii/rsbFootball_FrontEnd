import { parse } from 'cookie';
import jwt from 'jsonwebtoken';
export async function isAuthenticated(req, res, next ) {
    const cookies = parse(req.headers.cookie || '');
    const accessToken = cookies['accessToken'];
    const refreshToken = cookies['refreshToken'];
    try {
        const decodedToken = jwt.decode(accessToken, process.env.JWT_SECRET);
        const { id, firstName, lastName, email, roles } = decodedToken;
        req.user = decodedToken;
    
        if (Array.isArray(roles) && roles.includes('admin')) {
            return next();
        } else {
            console.error('User is not authorized as admin.');
            res.writeHead(302, { Location: '/' });
            res.end();
            return;
        }
    } catch (error) {
        console.error('Token verification failed:', error);
        res.writeHead(302, { Location: '/' });
        res.end();
        return;
    }
}
  