import * as i0 from '@angular/core';
import { Injectable, inject, Component, NgModule } from '@angular/core';
import { NgbOffcanvas, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

class MultiThemeService {
    loadTheme(themeName) {
        const linkId = 'dynamic-theme';
        let link = document.getElementById(linkId);
        let themeHref = `/assets/themes/${themeName}.css`;
        if (link) {
            link.href = themeName ? themeHref : '';
        }
        else {
            link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = themeHref;
            document.head.appendChild(link);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class MultiThemeComponent {
    constructor(service) {
        this.service = service;
        this.offcanvasService = inject(NgbOffcanvas);
        this.selectedTheme = '';
    }
    openThemeCanvas(content) {
        this.offcanvasService.open(content, { position: 'end', backdrop: false });
    }
    changeTheme() {
        this.service.loadTheme(this.selectedTheme);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeComponent, deps: [{ token: MultiThemeService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: MultiThemeComponent, selector: "ang-multi-theme", ngImport: i0, template: "<ng-template #content let-offcanvas>\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title\">Change Thme</h2>\n    <button\n      type=\"button\"\n      class=\"btn-close\"\n      aria-label=\"Close\"\n      (click)=\"offcanvas.dismiss('Cross click')\"\n    ></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        (change)=\"changeTheme()\"\n        id=\"flexRadioDefault1\"\n        value=\"\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault1\"> Default </label>\n    </div>\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        (change)=\"changeTheme()\"\n        id=\"flexRadioDefault2\"\n        value=\"theme1\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault2\"> theme 1 </label>\n    </div>\n\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        id=\"flexRadioDefault3\"\n        (change)=\"changeTheme()\"\n        value=\"theme2\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault3\"> theme 2 </label>\n    </div>\n\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        id=\"flexRadioDefault4\"\n        value=\"theme3\"\n        (change)=\"changeTheme()\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault4\"> theme 3 </label>\n    </div>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-primary mb-2 me-2\" (click)=\"openThemeCanvas(content)\">\n  <i class=\"bi bi-gear\"></i>\n</button>\n", dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ang-multi-theme', template: "<ng-template #content let-offcanvas>\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title\">Change Thme</h2>\n    <button\n      type=\"button\"\n      class=\"btn-close\"\n      aria-label=\"Close\"\n      (click)=\"offcanvas.dismiss('Cross click')\"\n    ></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        (change)=\"changeTheme()\"\n        id=\"flexRadioDefault1\"\n        value=\"\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault1\"> Default </label>\n    </div>\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        (change)=\"changeTheme()\"\n        id=\"flexRadioDefault2\"\n        value=\"theme1\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault2\"> theme 1 </label>\n    </div>\n\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        id=\"flexRadioDefault3\"\n        (change)=\"changeTheme()\"\n        value=\"theme2\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault3\"> theme 2 </label>\n    </div>\n\n    <div class=\"form-check\">\n      <input\n        class=\"form-check-input\"\n        type=\"radio\"\n        name=\"flexRadioDefault\"\n        id=\"flexRadioDefault4\"\n        value=\"theme3\"\n        (change)=\"changeTheme()\"\n        [(ngModel)]=\"selectedTheme\"\n      />\n      <label class=\"form-check-label\" for=\"flexRadioDefault4\"> theme 3 </label>\n    </div>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-primary mb-2 me-2\" (click)=\"openThemeCanvas(content)\">\n  <i class=\"bi bi-gear\"></i>\n</button>\n" }]
        }], ctorParameters: function () { return [{ type: MultiThemeService }]; } });

class MultiThemeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeModule, declarations: [MultiThemeComponent], imports: [FormsModule, CommonModule, NgbModule], exports: [MultiThemeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeModule, imports: [FormsModule, CommonModule, NgbModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MultiThemeComponent],
                    imports: [FormsModule, CommonModule, NgbModule],
                    exports: [MultiThemeComponent],
                }]
        }] });

/*
 * Public API Surface of multi-theme
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MultiThemeComponent, MultiThemeModule, MultiThemeService };
//# sourceMappingURL=ang-multi-theme.mjs.map
