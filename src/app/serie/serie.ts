export class Serie {

  constructor(private idA: number, private channelA: string, private seasonsA: number,
    private nameA: string){}

  get name(): string {return this.nameA;}
  get channel():string {return this.channelA;}
  get seasons():number{return this.seasonsA;}
  get id(): number {return this.idA;}

}
