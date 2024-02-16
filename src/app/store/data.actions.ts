export class Data {
  public static type = 'Data';
  constructor(public payload: {}) {}
}

export class DataForm {
  public static type = 'DataForm';
  constructor(public payload: {}) {}
}


export class DataReset {
  public static type = 'DataReset';
  constructor(public payload: {}) {}
}
