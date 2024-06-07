import argon2 from 'argon2';

export async function hashPassword(password: string) {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw new Error('Could not hash password')
  }
}

export async function verifyPassword(hash: string, password: string) {
  try {
    if (await argon2.verify(hash, password)) {
      console.log("Password match");
      return true
    } else {
      console.log("Password does not match");
      return false
    }
  } catch (err) {
    console.error(err);
    return false
  }
}