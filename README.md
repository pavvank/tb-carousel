# tb-carousel-lib

**tb-carousel-lib** is a collection of responsive carousels for Angular based Web Applications.
  - Simply import the angular module using npm and use it within your components.
  - Customisable using property binding.
  
## Demo of tb-carousel can be seen at
#### **https://pavvank.github.io/tb-carousel**
<<<<<<< HEAD
=======
  
>>>>>>> 8c1fa351ca495100e964e74bbcc6c842cd166627
---
### **Features!**

  - Choose from a variety of styled Carousels.
    - Basic carousel **tb-carousel-basic**
    - Stacked card carousel **tb-carousel-stacked-card**
    - 3D carousel **tb-carousel-three-d**
  - Available in both horizontal and vertical scrolling behaviours.
  - Accepts various kinds of data formats :
    - Images
    - Text 
    - User defined components

    By using custom components, the structure of the data within each card, of the collection can be easily diplayed in carousel.

##### **NOTE :** Do not use sizes in percentage. If want to stretch to complete page just use 100vh for height and 100vw for width or any other css unit. Percentages do not work great as of now :( .

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
    TbCarouselLibModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##### **Using with user defined component in carousel.**

- If the data to be passed to carousel is from a user defined component then  
*TbCarouselLibModule.forRoot([{userDefinedComp : UserDefinedComponent}])* method
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
    TbCarouselLibModule.forRoot([{userDefinedComp : UserDefinedComponent}])
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
    dataType="text" 
    [displayData]="dataText" 
    orientation="horizontal"
    cardHeight="300px" 
    cardWidth="350px"  
    arrowHeight="30px"
    [tbCardStyle]="{'background-color': 'pink', 'border' : '5px solid green'}"
    [showNavArrow]="true">
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
         content : string){
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
import { Custom } from './custom.model';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  @Input('modelObject') _tbModelObject : Custom;

  constructor() { }

  ngOnInit() {
  }
}
```
Note : The name of the variable for property binding in @input must be **_tbModelObject**

**custom.component.html**
```html
<div class="parent">
    <div class="content">
        <h2>{{_tbModelObject.heading}}</h2>
        <hr>
        <img [src]="_tbModelObject.imageSrc" alt="">
        <p>{{_tbModelObject.content}}</p>
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

  dataComponent: Custom[] = [
    new Custom(101, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/220px-FullMoon2010.jpg", "Moon", "Description"),
    new Custom(102, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sun_poster.svg/500px-Sun_poster.svg.png", "Sun", "Description"),
    new Custom(103, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg", "Earth", "Description"),
  ];

  constructor() { }

  ngOnInit() {
  }
}
```

**app.component.html**
```html
<div class="container">
  <tb-carousel-stacked-card 
    dataType="custom-component" 
    [displayData]="dataComponent" 
    orientation="horizontal" 
    component="2"
    cardHeight="300px" 
    cardWidth="350px" 
    [tbCardStyle]="{'background-color': 'yellow', 'border': '10px solid green', 'overflow':'hidden'}"
    [stopScrollOnHover]="true"
    visibleCards="3">
  </tb-carousel-stacked-card>
</div>
```
---
### **Poperties of the carousel for data-binding**

|      Property      |     Data Type     | Default  Value  |                Possible values                 |                                                                                                                                            Description                                                                                                                                            |
| :----------------: | :---------------: | :-------------: | :--------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| autoScrollInterval |      number       |      3000       |                in milliseconds                 |                                                                                                                                                                                                                                                                                                   |
| stopScrollOnHover  |      boolean      |      TRUE       |                 true or false                  |                                                                                                                                                                                                                                                                                                   |
|    displayData     |       array       |      null       |           array of data to be passed           |                                                                                              Array of data holding the values to be passed onto each card of the carousel. Data can be of any type.                                                                                               |
|    orientation     |      string       |   horizontal    |             horizontal or vertical             |                                                                                                    Defines the orientation of the carousel, horizontally scrollable or vertically scrollable.                                                                                                     |
|     component      |      number       |        0        |                     0,1,2…                     | "Used when multiple carousels are to be used in single project having multiple types custom-component to be passed in different carousels. The value to be passed should be a number specifing the index of the component passed in the TbCarouselLibModule.forRoot([]), which has to be used.  " |
|      dataType      |      string       |      text       |         text, image, custom-component          |                                                                                                                                                                                                                                                                                                   |
|     cardHeight     |      string       |      300px      |       height in any css acceptable unit        |                                                                                                                                                                                                                                                                                                   |
|     cardWidth      |      string       |      350px      |        width in any css acceptable unit        |                                                                                                                                                                                                                                                                                                   |
|    tbCardStyle     | javascript object |      null       | example: {'margin':'auto', 'font-size':'20px'} |                                                                                                                                                                                                                                                                                                   |
|    tbImageStyle    | javascript object |      null       | example: {'margin':'auto', 'font-size':'20px'} |                                                                                                                                                                                                                                                                                                   |
|  containerHeight   |      string       | auto calculated |       height in any css acceptable unit        |                                                                                                                                                                                                                                                                                                   |
|   containerWidth   |      string       | auto calculated |        width in any css acceptable unit        |                                                                                                                                                                                                                                                                                                   |
|    tbTransition    |      string       |                 |    any acceptable css value for transition     |                                                                                                                                                                                                                                                                                                   |
|    arrowHeight     |      string       |      45px       |       height in any css acceptable unit        |                                                                                                                                                                                                                                                                                                   |
|     arrowColor     |      string       |                 |      colour in any css acceptable format       |                                                                                                                                                                                                                                                                                                   |
|  arrowColorChange  |      string       |                 |      colour in any css acceptable format       |                                                                                                                                                                                                                                                                                                   |
|  navArrowOpacity   |      number       |       0.5       |                      0-1                       |                                                                                                                                                                                                                                                                                                   |
|    showNavArrow    |      boolean      |      TRUE       |                 true or false                  |                                                                                                                                                                                                                                                                                                   |
|    visibleCards    |      number       |        5        |                  any integer                   |                                                     Numbers of cards that should be visible in carousel.Most preferable values range between 3 to 7 cards but can be as many as user wishes :).Note: Applicable to Stacked Card carousel only                                                     |



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
