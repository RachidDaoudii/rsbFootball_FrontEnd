import jwt from 'jsonwebtoken';
import  Cookies from 'js-cookie';

export async function isAuthenticated() {
  const accessToken = Cookies.get('accessToken');

  if (accessToken) {
    const decodedToken = jwt.decode(accessToken, process.env.JWT_SECRET);
    const { roles } = decodedToken;

    if (Array.isArray(roles) && roles.includes('admin')) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
