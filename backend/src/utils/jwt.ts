import jwt, { JwtPayload } from "jsonwebtoken";

type idOrUsername = "id" | "username"
export function extractFromJwtPayload(token: string, key: idOrUsername) {
    const payload = jwt.verify(
        token as string,
        process.env.JWT_SECRET as string,
      );
      if (typeof payload === 'object' && key in payload) {
        return (payload as JwtPayload)[key] as string;
      } else {
        throw new Error(`Could not extract ${key} from token`)
      }
}

