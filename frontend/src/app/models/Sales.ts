/**
 * this model specifies the format to exchange a sales order with the backend
 */
export class Sales {
  constructor(
    public _salesOrder: Object,
    public _customer: Object,
    public _position: [],
    public _product: [],
    public _salesRep: Object
  ) { }
}
