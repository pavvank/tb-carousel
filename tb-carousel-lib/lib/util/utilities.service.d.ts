import { DomSanitizer } from '@angular/platform-browser';
export declare class UtilitiesService {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    getNumberAndUnit(str: any): {
        value: number;
        unit: string;
    };
    shiftRight(array: any[]): void;
    shiftLeft(array: any[]): void;
    sanitizeUrl(url: string): import("@angular/platform-browser/src/security/dom_sanitization_service").SafeUrl;
    sumOfNosInArray(array: number[]): number;
}
