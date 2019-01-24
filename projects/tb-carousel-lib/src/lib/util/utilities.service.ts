import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private sanitizer: DomSanitizer) { }

  getNumberAndUnit(str: any): { value: number, unit: string } {
    let value: number = 0;
    let unit: string = "";
    let cssUnits: string[] = ["em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc",
      "ch", "rem", "vh", "vw", "vmin", "vmax"];

    for (let i = 0; i < cssUnits.length; i++) {
      if (!isNaN(Number(str.split(cssUnits[i])[0]))) {
        value = Number(str.split(cssUnits[i])[0]);
        unit = cssUnits[i];
      }
    }
    return { value: value, unit: unit };
  }

  shiftRight(array: any[]) {

    let last = array[array.length - 1];

    for (let index = array.length - 2; index >= 0; index--)
      array[index + 1] = array[index];

    array[0] = last;
  }

  shiftLeft(array: any[]) {

    let first = array[0];
    for (let index = 0; index < array.length; index++) {
      array[index] = array[index + 1];
    }
    array[array.length - 1] = first;
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  sumOfNosInArray(array: number[]): number {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

}
