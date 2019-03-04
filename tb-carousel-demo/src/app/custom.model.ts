export class Custom {
    public heading: string;
    public content: string;
    public id: number;
    public imageUrl: string;

    constructor(heading: string, content: string, id: number, imageUrl: string) {
        this.content = content;
        this.heading = heading;
        this.id = id;
        this.imageUrl = imageUrl;
    }
}
