import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
export { MultiThemeService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: MultiThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL211bHRpLXRoZW1lL3NyYy9saWIvbXVsdGktdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUdhLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsU0FBaUI7UUFDekIsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBQy9CLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFvQixDQUFDO1FBRTlELElBQUksU0FBUyxHQUFHLGtCQUFrQixTQUFTLE1BQU0sQ0FBQztRQUVsRCxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzhHQWhCVSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOztTQUVQLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpVGhlbWVTZXJ2aWNlIHtcbiAgbG9hZFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbGlua0lkID0gJ2R5bmFtaWMtdGhlbWUnO1xuICAgIGxldCBsaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlua0lkKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG5cbiAgICBsZXQgdGhlbWVIcmVmID0gYC9hc3NldHMvdGhlbWVzLyR7dGhlbWVOYW1lfS5jc3NgO1xuXG4gICAgaWYgKGxpbmspIHtcbiAgICAgIGxpbmsuaHJlZiA9IHRoZW1lTmFtZSA/IHRoZW1lSHJlZiA6ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay5pZCA9IGxpbmtJZDtcbiAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgbGluay5ocmVmID0gdGhlbWVIcmVmO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==