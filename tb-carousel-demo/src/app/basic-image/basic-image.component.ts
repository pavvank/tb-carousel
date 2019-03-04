import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-image',
  templateUrl: './basic-image.component.html',
  styleUrls: ['./basic-image.component.css']
})
export class BasicImageComponent implements OnInit {

  constructor() { }

  imageData: string[] = [];

  ngOnInit() {
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXH0sAJZbTB-8AO5bLKH7z42zFf92qs8p_ETOHXszx_Syv-bfrA");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd1OghjO-wzA0EdQ0kAhhLgwv-UqJsFAqvxYEuFDgCrob0Mb3");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiawtcuybNG9HyLFFDkzAALtWjt6dt0lt5cmN6SuwTaLRBNHV");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyCR9P6n0UH0BNqsgd_3fomvhhtDxT3zbOP2be7bgq6I4h2nk");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1K6Y4AlJ2U4A9i9l0GzJRIXR5dwNWeG1icBktLXQANxpwEMrk");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXRD8bl13Lq4anP2mc5M7hf4em7tzXwpqNxm6ipB09nHhJKaBXQ");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuo_SvXuu981yblKWn6uk3FzHWxOpKJyKsI9MjD0Gzo07DkYEnA");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoH7fRhWnl2fjMLUGvOgEoVo4DBZwZcffl7PxIRp8jiwQnDNfUIw");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmJodRxXtEUVqamZah3SaySGrBjN52PzoDQyz6NW9uc_oZCf8");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTW1lIXVhcn7Fn1jtFA92HNkhncX4QBfauca6iQmwFa54wwPynA");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65nkMatTal3SDX5Hl3LJyOebd2-0LDiyUNMBub2pFkx_H6tbTOg");
    this.imageData.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwU6FLc243yTyfKiGyePsO8WvwzS_qD3Z5p86uk_60YVyQFYe");
  }

}
