export default class ObjectError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ObjectError";
  }
}
