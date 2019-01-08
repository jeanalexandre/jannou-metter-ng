import {Answer} from "./answer.model";

export class Ask {
  public id?: number;

  constructor(
    public entitled?: string,
    public type?: string,
    public total_polling?: number,
    public sort_order?: number,
    public state?: string,
    public answers?: Answer[]
  ) {

  }

}
