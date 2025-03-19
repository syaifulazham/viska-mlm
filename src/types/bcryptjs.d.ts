declare module 'bcryptjs' {
  /**
   * Synchronously generates a hash for the given string.
   * @param s The string to hash
   * @param salt The salt length to generate or the salt to use
   */
  export function hashSync(s: string, salt: string | number): string;

  /**
   * Synchronously tests a string against a hash.
   * @param s The string to compare
   * @param hash The hash to test against
   */
  export function compareSync(s: string, hash: string): boolean;

  /**
   * Asynchronously generates a hash for the given string.
   * @param s The string to hash
   * @param salt The salt length to generate or the salt to use
   * @param callback A callback to be invoked when the hash has been generated
   */
  export function hash(s: string, salt: string | number, callback?: (err: Error | null, hash: string) => void): Promise<string>;

  /**
   * Asynchronously compares the given data against the given hash.
   * @param s The string to compare
   * @param hash The hash to test against
   * @param callback A callback to be invoked when the comparison has been completed
   */
  export function compare(s: string, hash: string, callback?: (err: Error | null, same: boolean) => void): Promise<boolean>;

  /**
   * Generates a salt synchronously.
   * @param rounds The number of rounds to use, defaults to 10 if omitted
   * @param seed A seed to use, defaults to crypto.randomBytes(16) if omitted
   */
  export function genSaltSync(rounds?: number, seed?: Buffer): string;

  /**
   * Generates a salt asynchronously.
   * @param rounds The number of rounds to use, defaults to 10 if omitted
   * @param seed A seed to use, defaults to crypto.randomBytes(16) if omitted
   * @param callback A callback to be invoked when the salt has been generated
   */
  export function genSalt(rounds?: number, seed?: Buffer, callback?: (err: Error | null, salt: string) => void): Promise<string>;

  /**
   * Gets the number of rounds used to encrypt a hash.
   * @param hash The hash to extract the number of rounds from
   */
  export function getRounds(hash: string): number;

  /**
   * Gets the salt portion from a hash.
   * @param hash The hash to extract the salt from
   */
  export function getSalt(hash: string): string;
}
