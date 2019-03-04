export class Custom{
    id : number;
    imageSrc : string;
    heading : string;
    content : string;
    
    constructor(id : number, imageSrc : string, heading : string, 
         content : string){
         this.id = id;
         this.imageSrc = imageSrc;
         this.heading = heading;
         this.content = content;
    }
}