/**
 * this model specifies the format to exchange a salesman with the backend
 */
export class Salesman{
  constructor(
    public _employeeID: string,
    public _firstname: string,
    public _lastname: string,
    public _department: string,
  ) {  }
}
