export interface StudentDetails {
    Name:String;
    Gender:String;
    Email:String;
    Category:String;
    Address:String;
    City:String;
    State:String;
    Mobile:String;
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
export interface Contact{
  Name:String;
  Email:String;
  Subject:String;
  Message:String;
}