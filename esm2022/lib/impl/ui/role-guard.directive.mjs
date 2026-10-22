import { Directive, Inject, Input, NgModule } from '@angular/core';
import { BaseObject } from '../../abstract/ui/base-object';
import { ROLE_GUARD } from '../../interface/ui/i-role-guard';
import { SubscriptionHandler } from '../util/subscription-handler';
import { Util } from '../util/util';
import * as i0 from "@angular/core";
/**
 * Markiert Elemente fuer die rollenabhaengige Frontend-Konfiguration. Das eigentliche Ausblenden erledigt die
 * an `ROLE_GUARD` gebundene Rollenpruefung anhand der `configname`-Attribute; die Direktive verhindert nur das
 * Aufblitzen vor der Pruefung und sperrt schreibgeschuetzte Formulare.
 */
export class RoleGuardDirective extends BaseObject {
    el;
    roleGuard;
    /** Name des Elements in der Frontend-Konfiguration */
    configname;
    /** Formular, das bei Leserecht gesperrt wird (nur mit `configname="readonly-form"`) */
    readonlyFormControl;
    sperrTimeout;
    constructor(el, roleGuard) {
        super();
        this.el = el;
        this.roleGuard = roleGuard;
    }
    ngOnInit() {
        // Die Rollenpruefung kann vor oder nach dieser Direktive initialisiert werden.
        this.checkElement();
        this.watch(this.roleGuard.isActive.changed.asObservable(), new SubscriptionHandler(this.checkElement.bind(this)));
    }
    checkElement() {
        if (!this.roleGuard.isActive.value) {
            this.checkWithoutRoleGuard();
        }
        else if (this.configname.includes('watch_element')) {
            this.watchChildren();
        }
        else if (this.configname === 'readonly-form' && Util.isDefined(this.readonlyFormControl)) {
            this.lockFormIfReadonly();
        }
        else {
            this.hideUntilChecked(this.roleGuard.elementsChecked);
        }
    }
    /** Listen laden ihre Eintraege nachtraeglich - neue Unterelemente muessen erneut geprueft werden. */
    watchChildren() {
        const observer = new MutationObserver(() => {
            this.roleGuard.elementsChecked.value = false;
            this.roleGuard.trigger();
        });
        observer.observe(this.el.nativeElement, {
            attributes: false,
            childList: true,
            subtree: this.configname.includes('::deep')
        });
    }
    lockFormIfReadonly() {
        if (!this.roleGuard.isCurrentPageReadonly) {
            return;
        }
        this.formSperren();
        // Das Formular aktiviert sich bei Wertwechseln teils selbst wieder, daher erneut sperren.
        this.watch(this.readonlyFormControl.valueChanges, new SubscriptionHandler(() => this.formSperrenVerzoegert()));
        this.watch(this.readonlyFormControl.control.statusChanges, new SubscriptionHandler(() => this.formSperrenVerzoegert()));
    }
    formSperrenVerzoegert() {
        clearTimeout(this.sperrTimeout);
        this.sperrTimeout = setTimeout(() => this.formSperren(), 100);
    }
    /**
     * `disable()` feuert selbst statusChanges - ohne die Pruefung auf `disabled` wuerde endlos neu gesperrt.
     * `mrd-form-field` markiert Felder dabei als dirty; ohne Benutzereingabe gilt das Formular weiter als unveraendert,
     * sonst fragt jeder Wechsel des Eintrags grundlos nach dem Verwerfen.
     */
    formSperren() {
        const form = this.readonlyFormControl;
        if (form.disabled) {
            return;
        }
        const warGeaendert = form.dirty;
        form.disable();
        if (!warGeaendert) {
            form.markAsUnchanged();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.sperrTimeout);
        super.ngOnDestroy();
    }
    /** Ohne Rollenpruefung entfallen Ersatz-Elemente und Readonly-Titel; der Rest wartet auf die Menuepruefung. */
    checkWithoutRoleGuard() {
        if (this.configname.includes('replace_element') || this.configname.includes('readonly-title')) {
            this.el.nativeElement.remove();
        }
        this.hideUntilChecked(this.roleGuard.menuChecked);
    }
    hideUntilChecked(checked) {
        const element = this.el.nativeElement;
        if (!checked.value) {
            element.style.visibility = 'hidden';
        }
        this.watch(checked.changed, new SubscriptionHandler((isChecked) => {
            if (isChecked) {
                element.style.visibility = 'initial';
            }
        }));
    }
    /** @nocollapse */ static ɵfac = function RoleGuardDirective_Factory(t) { return new (t || RoleGuardDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ROLE_GUARD)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: RoleGuardDirective, selectors: [["", "configname", ""]], inputs: { configname: "configname", readonlyFormControl: "readonlyFormControl" }, features: [i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoleGuardDirective, [{
        type: Directive,
        args: [{
                selector: '[configname]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [ROLE_GUARD]
            }] }]; }, { configname: [{
            type: Input
        }], readonlyFormControl: [{
            type: Input
        }] }); })();
export class RoleGuardModule {
    /** @nocollapse */ static ɵfac = function RoleGuardModule_Factory(t) { return new (t || RoleGuardModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: RoleGuardModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RoleGuardModule, [{
        type: NgModule,
        args: [{
                declarations: [RoleGuardDirective],
                exports: [RoleGuardDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RoleGuardModule, { declarations: [RoleGuardDirective], exports: [RoleGuardDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1ndWFyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdWkvcm9sZS1ndWFyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFM0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRXBDOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTtJQVV0QztJQUNvQjtJQVQ5QixzREFBc0Q7SUFDdEMsVUFBVSxDQUFVO0lBQ3BDLHVGQUF1RjtJQUN2RSxtQkFBbUIsQ0FBaUM7SUFFNUQsWUFBWSxDQUFpQztJQUVyRCxZQUNVLEVBQWMsRUFDTSxTQUFxQjtRQUVqRCxLQUFLLEVBQUUsQ0FBQztRQUhBLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDTSxjQUFTLEdBQVQsU0FBUyxDQUFZO0lBR25ELENBQUM7SUFFTSxRQUFRO1FBQ2IsK0VBQStFO1FBQy9FLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJ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QUUsQ0FBQyxhQUE2QixDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE9BQWlDO1FBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBNEIsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLFNBQWtCLEVBQUUsRUFBRTtZQUN6RSxJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzsrRkF0R1Usa0JBQWtCLDREQVduQixVQUFVOzRGQVhULGtCQUFrQjs7dUZBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7O3NCQVlJLE1BQU07dUJBQUMsVUFBVTt3QkFSSixVQUFVO2tCQUF6QixLQUFLO1lBRVUsbUJBQW1CO2tCQUFsQyxLQUFLOztBQXdHUixNQUFNLE9BQU8sZUFBZTs0RkFBZixlQUFlOzJGQUFmLGVBQWU7Ozt1RkFBZixlQUFlO2NBSjNCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUI7O3dGQUNZLGVBQWUsbUJBN0dmLGtCQUFrQixhQUFsQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC91aS9iYXNlLW9iamVjdCc7XG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUdyb3VwIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHsgSVJvbGVHdWFyZCwgUk9MRV9HVUFSRCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS91aS9pLXJvbGUtZ3VhcmQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9vYnNlcnZhYmxlLXZhbHVlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICcuLi91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG4vKipcbiAqIE1hcmtpZXJ0IEVsZW1lbnRlIGZ1ZXIgZGllIHJvbGxlbmFiaGFlbmdpZ2UgRnJvbnRlbmQtS29uZmlndXJhdGlvbi4gRGFzIGVpZ2VudGxpY2hlIEF1c2JsZW5kZW4gZXJsZWRpZ3QgZGllXG4gKiBhbiBgUk9MRV9HVUFSRGAgZ2VidW5kZW5lIFJvbGxlbnBydWVmdW5nIGFuaGFuZCBkZXIgYGNvbmZpZ25hbWVgLUF0dHJpYnV0ZTsgZGllIERpcmVrdGl2ZSB2ZXJoaW5kZXJ0IG51ciBkYXNcbiAqIEF1ZmJsaXR6ZW4gdm9yIGRlciBQcnVlZnVuZyB1bmQgc3BlcnJ0IHNjaHJlaWJnZXNjaHVldHp0ZSBGb3JtdWxhcmUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb25maWduYW1lXSdcbn0pXG5leHBvcnQgY2xhc3MgUm9sZUd1YXJkRGlyZWN0aXZlIGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqIE5hbWUgZGVzIEVsZW1lbnRzIGluIGRlciBGcm9udGVuZC1Lb25maWd1cmF0aW9uICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWduYW1lITogc3RyaW5nO1xuICAvKiogRm9ybXVsYXIsIGRhcyBiZWkgTGVzZXJlY2h0IGdlc3BlcnJ0IHdpcmQgKG51ciBtaXQgYGNvbmZpZ25hbWU9XCJyZWFkb25seS1mb3JtXCJgKSAqL1xuICBASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHlGb3JtQ29udHJvbD86IEFjY2Vzc2FibGVGb3JtR3JvdXA8YW55LCBhbnk+O1xuXG4gIHByaXZhdGUgc3BlcnJUaW1lb3V0PzogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFJPTEVfR1VBUkQpIHByaXZhdGUgcm9sZUd1YXJkOiBJUm9sZUd1YXJkXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gRGllIFJvbGxlbnBydWVmdW5nIGthbm4gdm9yIG9kZXIgbmFjaCBkaWVzZXIgRGlyZWt0aXZlIGluaXRpYWxpc2llcnQgd2VyZGVuLlxuICAgIHRoaXMuY2hlY2tFbGVtZW50KCk7XG4gICAgdGhpcy53YXRjaCh0aGlzLnJvbGVHdWFyZC5pc0FjdGl2ZS5jaGFuZ2VkLmFzT2JzZXJ2YWJsZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcih0aGlzLmNoZWNrRWxlbWVudC5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucm9sZUd1YXJkLmlzQWN0aXZlLnZhbHVlKSB7XG4gICAgICB0aGlzLmNoZWNrV2l0aG91dFJvbGVHdWFyZCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWduYW1lLmluY2x1ZGVzKCd3YXRjaF9lbGVtZW50JykpIHtcbiAgICAgIHRoaXMud2F0Y2hDaGlsZHJlbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWduYW1lID09PSAncmVhZG9ubHktZm9ybScgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5yZWFkb25seUZvcm1Db250cm9sKSkge1xuICAgICAgdGhpcy5sb2NrRm9ybUlmUmVhZG9ubHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlVW50aWxDaGVja2VkKHRoaXMucm9sZUd1YXJkLmVsZW1lbnRzQ2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIExpc3RlbiBsYWRlbiBpaHJlIEVpbnRyYWVnZSBuYWNodHJhZWdsaWNoIC0gbmV1ZSBVbnRlcmVsZW1lbnRlIG11ZXNzZW4gZXJuZXV0IGdlcHJ1ZWZ0IHdlcmRlbi4gKi9cbiAgcHJpdmF0ZSB3YXRjaENoaWxkcmVuKCk6IHZvaWQge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgdGhpcy5yb2xlR3VhcmQuZWxlbWVudHNDaGVja2VkLnZhbHVlID0gZmFsc2U7XG4gICAgICB0aGlzLnJvbGVHdWFyZC50cmlnZ2VyKCk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdGhpcy5jb25maWduYW1lLmluY2x1ZGVzKCc6OmRlZXAnKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2NrRm9ybUlmUmVhZG9ubHkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJvbGVHdWFyZC5pc0N1cnJlbnRQYWdlUmVhZG9ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mb3JtU3BlcnJlbigpO1xuICAgIC8vIERhcyBGb3JtdWxhciBha3RpdmllcnQgc2ljaCBiZWkgV2VydHdlY2hzZWxuIHRlaWxzIHNlbGJzdCB3aWVkZXIsIGRhaGVyIGVybmV1dCBzcGVycmVuLlxuICAgIHRoaXMud2F0Y2godGhpcy5yZWFkb25seUZvcm1Db250cm9sIS52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHRoaXMuZm9ybVNwZXJyZW5WZXJ6b2VnZXJ0KCkpKTtcbiAgICB0aGlzLndhdGNoKHRoaXMucmVhZG9ubHlGb3JtQ29udHJvbCEuY29udHJvbC5zdGF0dXNDaGFuZ2VzLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoKSA9PiB0aGlzLmZvcm1TcGVycmVuVmVyem9lZ2VydCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1TcGVycmVuVmVyem9lZ2VydCgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zcGVyclRpbWVvdXQpO1xuICAgIHRoaXMuc3BlcnJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvcm1TcGVycmVuKCksIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogYGRpc2FibGUoKWAgZmV1ZXJ0IHNlbGJzdCBzdGF0dXNDaGFuZ2VzIC0gb2huZSBkaWUgUHJ1ZWZ1bmcgYXVmIGBkaXNhYmxlZGAgd3VlcmRlIGVuZGxvcyBuZXUgZ2VzcGVycnQuXG4gICAqIGBtcmQtZm9ybS1maWVsZGAgbWFya2llcnQgRmVsZGVyIGRhYmVpIGFscyBkaXJ0eTsgb2huZSBCZW51dHplcmVpbmdhYmUgZ2lsdCBkYXMgRm9ybXVsYXIgd2VpdGVyIGFscyB1bnZlcmFlbmRlcnQsXG4gICAqIHNvbnN0IGZyYWd0IGplZGVyIFdlY2hzZWwgZGVzIEVpbnRyYWdzIGdydW5kbG9zIG5hY2ggZGVtIFZlcndlcmZlbi5cbiAgICovXG4gIHByaXZhdGUgZm9ybVNwZXJyZW4oKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybTogQWNjZXNzYWJsZUZvcm1Hcm91cDxhbnksIGFueT4gPSB0aGlzLnJlYWRvbmx5Rm9ybUNvbnRyb2whO1xuICAgIGlmIChmb3JtLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdhckdlYWVuZGVydDogYm9vbGVhbiA9IGZvcm0uZGlydHk7XG4gICAgZm9ybS5kaXNhYmxlKCk7XG4gICAgaWYgKCF3YXJHZWFlbmRlcnQpIHtcbiAgICAgIGZvcm0ubWFya0FzVW5jaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnNwZXJyVGltZW91dCk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBPaG5lIFJvbGxlbnBydWVmdW5nIGVudGZhbGxlbiBFcnNhdHotRWxlbWVudGUgdW5kIFJlYWRvbmx5LVRpdGVsOyBkZXIgUmVzdCB3YXJ0ZXQgYXVmIGRpZSBNZW51ZXBydWVmdW5nLiAqL1xuICBwcml2YXRlIGNoZWNrV2l0aG91dFJvbGVHdWFyZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWduYW1lLmluY2x1ZGVzKCdyZXBsYWNlX2VsZW1lbnQnKSB8fCB0aGlzLmNvbmZpZ25hbWUuaW5jbHVkZXMoJ3JlYWRvbmx5LXRpdGxlJykpIHtcbiAgICAgICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVVbnRpbENoZWNrZWQodGhpcy5yb2xlR3VhcmQubWVudUNoZWNrZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlVW50aWxDaGVja2VkKGNoZWNrZWQ6IE9ic2VydmFibGVWYWx1ZTxib29sZWFuPik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFjaGVja2VkLnZhbHVlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG4gICAgdGhpcy53YXRjaChjaGVja2VkLmNoYW5nZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChpc0NoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2luaXRpYWwnO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtSb2xlR3VhcmREaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbUm9sZUd1YXJkRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBSb2xlR3VhcmRNb2R1bGUge31cbiJdfQ==