/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class UtilitiesService {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getNumberAndUnit(str) {
        /** @type {?} */
        let value = 0;
        /** @type {?} */
        let unit = "";
        /** @type {?} */
        let cssUnits = ["em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc",
            "ch", "rem", "vh", "vw", "vmin", "vmax"];
        for (let i = 0; i < cssUnits.length; i++) {
            if (!isNaN(Number(str.split(cssUnits[i])[0]))) {
                value = Number(str.split(cssUnits[i])[0]);
                unit = cssUnits[i];
            }
        }
        return { value: value, unit: unit };
    }
    /**
     * @param {?} array
     * @return {?}
     */
    shiftRight(array) {
        /** @type {?} */
        let last = array[array.length - 1];
        for (let index = array.length - 2; index >= 0; index--)
            array[index + 1] = array[index];
        array[0] = last;
    }
    /**
     * @param {?} array
     * @return {?}
     */
    shiftLeft(array) {
        /** @type {?} */
        let first = array[0];
        for (let index = 0; index < array.length; index++) {
            array[index] = array[index + 1];
        }
        array[array.length - 1] = first;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    sanitizeUrl(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    /**
     * @param {?} array
     * @return {?}
     */
    sumOfNosInArray(array) {
        /** @type {?} */
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}
UtilitiesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilitiesService.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ UtilitiesService.ngInjectableDef = i0.defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.inject(i1.DomSanitizer)); }, token: UtilitiesService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UtilitiesService.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Yi1jYXJvdXNlbC1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbC91dGlsaXRpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUt6RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTNCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDOzs7OztJQUVoRCxnQkFBZ0IsQ0FBQyxHQUFROztZQUNuQixLQUFLLEdBQVcsQ0FBQzs7WUFDakIsSUFBSSxHQUFXLEVBQUU7O1lBQ2pCLFFBQVEsR0FBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUMzRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUUxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEI7U0FDRjtRQUNELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFZOztZQUVqQixJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLEtBQUssSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUU7WUFDcEQsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFZOztZQUVoQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFlOztZQUN6QixHQUFHLEdBQUcsQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxZQUFZOzs7Ozs7OztJQU9QLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVdGlsaXRpZXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICBnZXROdW1iZXJBbmRVbml0KHN0cjogYW55KTogeyB2YWx1ZTogbnVtYmVyLCB1bml0OiBzdHJpbmcgfSB7XG4gICAgbGV0IHZhbHVlOiBudW1iZXIgPSAwO1xuICAgIGxldCB1bml0OiBzdHJpbmcgPSBcIlwiO1xuICAgIGxldCBjc3NVbml0czogc3RyaW5nW10gPSBbXCJlbVwiLCBcImV4XCIsIFwiJVwiLCBcInB4XCIsIFwiY21cIiwgXCJtbVwiLCBcImluXCIsIFwicHRcIiwgXCJwY1wiLFxuICAgICAgXCJjaFwiLCBcInJlbVwiLCBcInZoXCIsIFwidndcIiwgXCJ2bWluXCIsIFwidm1heFwiXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3NzVW5pdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghaXNOYU4oTnVtYmVyKHN0ci5zcGxpdChjc3NVbml0c1tpXSlbMF0pKSkge1xuICAgICAgICB2YWx1ZSA9IE51bWJlcihzdHIuc3BsaXQoY3NzVW5pdHNbaV0pWzBdKTtcbiAgICAgICAgdW5pdCA9IGNzc1VuaXRzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIHVuaXQ6IHVuaXQgfTtcbiAgfVxuXG4gIHNoaWZ0UmlnaHQoYXJyYXk6IGFueVtdKSB7XG5cbiAgICBsZXQgbGFzdCA9IGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBhcnJheS5sZW5ndGggLSAyOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgICAgYXJyYXlbaW5kZXggKyAxXSA9IGFycmF5W2luZGV4XTtcblxuICAgIGFycmF5WzBdID0gbGFzdDtcbiAgfVxuXG4gIHNoaWZ0TGVmdChhcnJheTogYW55W10pIHtcblxuICAgIGxldCBmaXJzdCA9IGFycmF5WzBdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFycmF5W2luZGV4ICsgMV07XG4gICAgfVxuICAgIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdID0gZmlyc3Q7XG4gIH1cblxuICBzYW5pdGl6ZVVybCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHVybCk7XG4gIH1cblxuICBzdW1PZk5vc0luQXJyYXkoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdW0gKz0gYXJyYXlbaV07XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH1cblxufVxuIl19