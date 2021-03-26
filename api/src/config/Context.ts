class Context {
  private static instance: Context | undefined;
  readonly NODE_ENV: string;
  readonly PORT: string | number;

  private constructor() {
    this.NODE_ENV = process.env.NODE_ENV || "development";
    this.PORT = process.env.PORT || 5000;
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Context();
    }
    return this.instance;
  }
}

export default Context;
