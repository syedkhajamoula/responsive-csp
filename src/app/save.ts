export interface StudentDetails {
    password:String;
    email: String;
    roll: String;
  }
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
  export interface login {
    password:string;
    email: string;
  }