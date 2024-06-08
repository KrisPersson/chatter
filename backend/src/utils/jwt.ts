import jwt, { JwtPayload } from "jsonwebtoken";


export function extractIdFromJwtPayload(token: string) {
    const payload = jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
      );
      if (typeof payload === 'object' && 'id' in payload) {
        return (payload as JwtPayload).id as string;
      } else {
        throw new Error('Could not extract ID from token')
      }
}