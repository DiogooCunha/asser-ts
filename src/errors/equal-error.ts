export default class EqualError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EqualError";
  }
}
