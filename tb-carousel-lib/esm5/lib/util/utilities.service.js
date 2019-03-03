/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var UtilitiesService = /** @class */ (function () {
    function UtilitiesService(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    UtilitiesService.prototype.getNumberAndUnit = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var value = 0;
        /** @type {?} */
        var unit = "";
        /** @type {?} */
        var cssUnits = ["em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc",
            "ch", "rem", "vh", "vw", "vmin", "vmax"];
        for (var i = 0; i < cssUnits.length; i++) {
            if (!isNaN(Number(str.split(cssUnits[i])[0]))) {
                value = Number(str.split(cssUnits[i])[0]);
                unit = cssUnits[i];
            }
        }
        return { value: value, unit: unit };
    };
    /**
     * @param {?} array
     * @return {?}
     */
    UtilitiesService.prototype.shiftRight = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var last = array[array.length - 1];
        for (var index = array.length - 2; index >= 0; index--)
            array[index + 1] = array[index];
        array[0] = last;
    };
    /**
     * @param {?} array
     * @return {?}
     */
    UtilitiesService.prototype.shiftLeft = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var first = array[0];
        for (var index = 0; index < array.length; index++) {
            array[index] = array[index + 1];
        }
        array[array.length - 1] = first;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    UtilitiesService.prototype.sanitizeUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    /**
     * @param {?} array
     * @return {?}
     */
    UtilitiesService.prototype.sumOfNosInArray = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    };
    UtilitiesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UtilitiesService.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    /** @nocollapse */ UtilitiesService.ngInjectableDef = i0.defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.inject(i1.DomSanitizer)); }, token: UtilitiesService, providedIn: "root" });
    return UtilitiesService;
}());
export { UtilitiesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UtilitiesService.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Yi1jYXJvdXNlbC1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbC91dGlsaXRpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUV6RDtJQUtFLDBCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUksQ0FBQzs7Ozs7SUFFaEQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQVE7O1lBQ25CLEtBQUssR0FBVyxDQUFDOztZQUNqQixJQUFJLEdBQVcsRUFBRTs7WUFDakIsUUFBUSxHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQzNFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBRTFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNGO1FBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLEtBQVk7O1lBRWpCLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFbEMsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRTtZQUNwRCxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLEtBQVk7O1lBRWhCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixLQUFlOztZQUN6QixHQUFHLEdBQUcsQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQW5ERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFlBQVk7OzsyQkFEckI7Q0F3REMsQUFyREQsSUFxREM7U0FsRFksZ0JBQWdCOzs7Ozs7SUFFZixxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbGl0aWVzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgZ2V0TnVtYmVyQW5kVW5pdChzdHI6IGFueSk6IHsgdmFsdWU6IG51bWJlciwgdW5pdDogc3RyaW5nIH0ge1xuICAgIGxldCB2YWx1ZTogbnVtYmVyID0gMDtcbiAgICBsZXQgdW5pdDogc3RyaW5nID0gXCJcIjtcbiAgICBsZXQgY3NzVW5pdHM6IHN0cmluZ1tdID0gW1wiZW1cIiwgXCJleFwiLCBcIiVcIiwgXCJweFwiLCBcImNtXCIsIFwibW1cIiwgXCJpblwiLCBcInB0XCIsIFwicGNcIixcbiAgICAgIFwiY2hcIiwgXCJyZW1cIiwgXCJ2aFwiLCBcInZ3XCIsIFwidm1pblwiLCBcInZtYXhcIl07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1VuaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzTmFOKE51bWJlcihzdHIuc3BsaXQoY3NzVW5pdHNbaV0pWzBdKSkpIHtcbiAgICAgICAgdmFsdWUgPSBOdW1iZXIoc3RyLnNwbGl0KGNzc1VuaXRzW2ldKVswXSk7XG4gICAgICAgIHVuaXQgPSBjc3NVbml0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCB1bml0OiB1bml0IH07XG4gIH1cblxuICBzaGlmdFJpZ2h0KGFycmF5OiBhbnlbXSkge1xuXG4gICAgbGV0IGxhc3QgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMjsgaW5kZXggPj0gMDsgaW5kZXgtLSlcbiAgICAgIGFycmF5W2luZGV4ICsgMV0gPSBhcnJheVtpbmRleF07XG5cbiAgICBhcnJheVswXSA9IGxhc3Q7XG4gIH1cblxuICBzaGlmdExlZnQoYXJyYXk6IGFueVtdKSB7XG5cbiAgICBsZXQgZmlyc3QgPSBhcnJheVswXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcnJheVtpbmRleCArIDFdO1xuICAgIH1cbiAgICBhcnJheVthcnJheS5sZW5ndGggLSAxXSA9IGZpcnN0O1xuICB9XG5cbiAgc2FuaXRpemVVcmwodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpO1xuICB9XG5cbiAgc3VtT2ZOb3NJbkFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgc3VtICs9IGFycmF5W2ldO1xuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9XG5cbn1cbiJdfQ==