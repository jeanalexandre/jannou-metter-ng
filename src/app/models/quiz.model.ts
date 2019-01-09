import {Ask} from "./ask.model";

export class Quiz {
  public id?: number;

  constructor(
    public name?: string,
    public currentAsk?: number,
    public state?: string,
    public nbContributors?: number,
    public asks?: Ask[]
  ) {

  }

}
