export class MyFunctions {
  private static instance: MyFunctions;
  private status: string;

  private constructor() {
    this.status = "ok";
  }

  public static getInstance(): MyFunctions {
    if (!MyFunctions.instance) {
      MyFunctions.instance = new MyFunctions();
    }
    return MyFunctions.instance;
  }

  public getMessage(): string {
    return 'This is a static text.';
  }
}
