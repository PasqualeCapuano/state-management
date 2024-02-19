export class Data {
  public static type = 'Data';
  constructor(public payload: {}) {}
}

export class Database {
  public static type = 'Database';
  constructor(public payload: any) {}
}

export class DataForm {
  public static type = 'DataForm';
  constructor(public payload: {}) {}
}


export class DataReset {
  public static type = 'DataReset';
  constructor(public payload: {}) {}
}

export class ChartType {
  public static type = 'ChartType';
  constructor(public payload: string) {}
}
