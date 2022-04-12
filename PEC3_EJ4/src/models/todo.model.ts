/**
 * @class Model
 *
 * Manages the data of the application.
 */

 export interface TodoInterface {
  text: string;
  complete: boolean;
}

 export class Todo {
       public id: number;
       public text: string;
       public complete: boolean;

       constructor(
        { text, complete }: TodoInterface = {
          text: null,
          complete: false
        }
      ) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
      }

     
      uuidv4() : number {
        return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }
}
     