import { OnInit } from "@angular/core";

export class CardCSS{

    public zIndex : number;
    public left : string;
    public scale : string;
    public display : string;
    public top : string;
    
    constructor( zIndex : number, left : string, scale : string, display : string, top : string){
        this.zIndex = zIndex;
        this.left = left;
        this.scale = scale;
        this.display = display;
        this.top = top;
    }

}