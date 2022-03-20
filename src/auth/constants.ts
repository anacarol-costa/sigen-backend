import 'dotenv/config';

export const jwtConstants = {
  secret: process.env.SECRET,
  privateKey: process.env.PRIVATE_KEY,
  publicKey: process.env.PUBLIC_KEY,
};
