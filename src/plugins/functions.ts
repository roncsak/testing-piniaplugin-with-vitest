export class Functions {
  private static instance: Functions;

  private constructor() {}

  public static getInstance(): Functions {
    if (!Functions.instance) {
      Functions.instance = new Functions();
    }
    return Functions.instance;
  }

  public _getMessage = () => {
    return 'This is a static text.';
  };
}
