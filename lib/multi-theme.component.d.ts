import { TemplateRef } from '@angular/core';
import { MultiThemeService } from './multi-theme.service';
import * as i0 from "@angular/core";
export declare class MultiThemeComponent {
    private service;
    private offcanvasService;
    selectedTheme: string;
    constructor(service: MultiThemeService);
    openThemeCanvas(content: TemplateRef<any>): void;
    changeTheme(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiThemeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiThemeComponent, "ang-multi-theme", never, {}, {}, never, never, false, never>;
}
