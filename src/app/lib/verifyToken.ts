import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../config';
import { AppError } from '../utils';

interface ITokenUser {
  id: string;
  email: string;
  role: string;
  image: string;
  iat: number;
}

const verifyToken = async (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as ITokenUser;

    return decoded;
  } catch {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized access');
  }
};

export default verifyToken;
