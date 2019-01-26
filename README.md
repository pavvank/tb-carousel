# tb-carousel-lib

**tb-carousel-lib** is a collection of responsive carousels for Angular based Web Applications.
  - Simply import the angular module using npm and use it within your components.
  - Customisable using property binding.
  
---
### **Features!**

  - Choose from a variety of styled Carousels.
  - Available in both horizontal and vertical scrolling behaviours.
  - Accepts various kinds of data formats :
    * Images
    - Text 
    - Text with headings
    - User defined components
    - Image size to be added in percentage,for responsiveness.

    By using custom components, the structure of the data within each card, of the collection can be easily diplayed in carousel.

---
### **Installation**

**tb-carousel-lib** requires [Node.js](https://nodejs.org/) v4+ to run.

From the existing angular application directory, use the following command to install tb-carousel-lib : 

```sh
$ npm install tb-carousel-lib 
```
---
### **How to use**

#### **Importing the module**
---
Import the *TbCarouselLibModule* into your **app.module.ts**
```typescript
import { TbCarouselLibModule } from 'tb-carousel-lib'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TbCarouselLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##### **Using with user defined component in carousel.**

- If the data to be passed to carousel is from a user defined component then  
*TbCarouselLibModule.forRoot({userDefinedComp : UserDefinedComponent})* method
is to be used to pass the desired component.
- Also *(user defined component)* has to passed to the :
*entryComponents: [UserDefinedComponent]* in **app.module.ts** .
Here *UserDefinedComponent* is the user defined component.

```typescript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TbCarouselLibModule } from 'tb-carousel-lib';
import { UserDefinedComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDefinedComponent
  ],
  imports: [
    BrowserModule,
    TbCarouselLibModule.forRoot({userDefinedComp : UserDefinedComponent})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserDefinedComponent]
})
export class AppModule { }
```
---
#### **Using in the component**
To get the carousel at the desired location within the HTML code, simply insert the respective carousel tag, with any other optional data Or required properties.

Simple Illustration: A Stacked Card style Horizontal Carousal in **app.component.html**
```html
<div class="container">
    <tb-carousel-stacked-card 
        [dataType]="'image'"
        [data]="arrayOfImagesUrls">
    </tb-carousel-stacked-card>
</div>
```

##### **Usage with user defined component in carousel.**
---
To pass a custom component into carousel ,first make a new component and define its HTML structure and style as usual using css (*anything*) and define a model class having its data structure. and use that model class object as an input to the component.
The input to the component will be passed as an array of that model object ,using property binding to the respective carousel.

Lets consider a user defined component with following files.
 - *custom.component.ts*
 - *custom.component.html*
 - *custom.component.css*
 - *custom.model.ts*
 
 **custom.model.ts**
```typescript
export class Custom{
    id : number;
    imageSrc : string;
    heading : string;
    content : string;
    
    constructor(id : number, imageSrc : string, heading : string, 
         content : string;){
         this.id = id;
         this.imageSrc = imageSrc;
         this.heading = heading;
         this.content = content;
    }
}
```
**custom.component.ts**
```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input('modelObject') modelObject : Custom;

  constructor() { }

  ngOnInit() {
  }
}
```
**custom.component.html**
```html
<div class="container">
  <div class="row">
    <div class="col-sm">{{modelObject.heading}}</div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <img src="{{modelObject.imageSrc}}" alt="alt text">
    </div>
    <div class="col-sm-6">
      <p>{{modelObject.content}}</p>
      <button [routerLink]="['/topic',modelObject.id]">More...</button>
    </div>
  </div>
</div>
```

Once the component is made according to the requirement the data can be passed to the respective tb-carousal* component.

**app.component.ts**
```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class AppComponent implements OnInit {

  public arrayOfCustomComponent : Custom[] = [
    new Custom(101, "moon.jpg", "The Moon", "The Moon is an astronomical body that orbits planet Earth."),
    new Custom(102, "sun.jpg", "The Sun", "The Sun is the star at the center of the Solar System."),
    new Custom(103, "earth.jpg", "The Earth", "Earth is the third planet from the Sun and the only astronomical object known to harbor life."),
    ]

  constructor() { }

  ngOnInit() {
  }
}
```

**app.component.html**
```html
<div class="container">
    <tb-carousel-stacked-card 
        [dataType]="'custom-component'"
        [data]="arrayOfCustomComponent">
    </tb-carousel-stacked-card>
</div>
```
---
### **Poperties of the carousel for data-binding**

##### displayData
Possible Value : array of any   

Array of data holding the values to be passed onto each card of the carousel.
Data can be of any type.
---
##### dataType
Possible Value : string (image, text, custom-component)  

Defines the value of what kind of data is to be shown in the carousel.
**image** : 
**text** : 
**custom-component** : 
---
##### visibleCards
Possible Value : number  

Numbers of cards that should be visible in carousel.
Most preferable values range between 3 to 7 cards but can be as many as user wishes :).*    

Note: *where ever applicable.
---
##### orientation
Posssible values : **horizontal**, **vertical**.  

Defines the orientation of the carousel, horizontally scrollable or vertically scrollable. 
---
##### component
Possible value : number.  

Used when multiple carousels are to be used in single project having multiple types custom-component to be passed in different carousels.  
The value to be passed should be a number specifing the index of the component passed in the TbCarouselLibModule.forRoot([]), which has to be used.
---
##### cardHeight
Possible Value : string (size in any unit used in CSS).  
  
Height of the card.
---
##### cardWidth
Possible Value: string (size in any unit used in CSS).  
Width of the card.
---
##### cardColor
Possible Value : string (any color in any format acceptable in CSS).  
Background color of the card.
---
##### containerHeight
Possible Value: string (size in any unit used in CSS).  
---
##### containerWidth
Possible Value: string (size in any unit used in CSS).  
---
##### imageMaxHeight
Possible Value: string (size in any unit used in CSS).  
---
##### imageMaxWidth
Possible Value: string (size in any unit used in CSS).  
---
##### imageBorderRadius
Possible Value: string (size in any unit used in CSS).  
---
##### autoScrollInterval
Possible Value: number
---
##### arrowHeight
Possible Value:
---
##### arrowColor
Possible Value:
---
##### arrowColorChange
Possible Value:

---
### **Development**

Want to contribute? Great!

---
### **Todos**
 - Write Tests
 - Add more types of carousels

License
----

MIT



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

