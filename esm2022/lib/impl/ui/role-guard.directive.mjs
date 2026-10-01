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
        this.readonlyFormControl.disable();
        // Das Formular aktiviert sich bei Wertwechseln teils selbst wieder, daher erneut sperren.
        this.watch(this.readonlyFormControl.valueChanges, new SubscriptionHandler(() => {
            setTimeout(() => this.readonlyFormControl.disable(), 100);
        }));
        this.watch(this.readonlyFormControl.control.statusChanges, new SubscriptionHandler(() => {
            setTimeout(() => this.readonlyFormControl.disable(), 100);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1ndWFyZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdWkvcm9sZS1ndWFyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFM0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRXBDOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTtJQVF0QztJQUNvQjtJQVA5QixzREFBc0Q7SUFDdEMsVUFBVSxDQUFVO0lBQ3BDLHVGQUF1RjtJQUN2RSxtQkFBbUIsQ0FBaUM7SUFFcEUsWUFDVSxFQUFjLEVBQ00sU0FBcUI7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFIQSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ00sY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUduRCxDQUFDO0lBRU0sUUFBUTtRQUNiLCtFQUErRTtRQUMvRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEgsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxT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RTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzsrRkE3RVUsa0JBQWtCLDREQVNuQixVQUFVOzRGQVRULGtCQUFrQjs7dUZBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7O3NCQVVJLE1BQU07dUJBQUMsVUFBVTt3QkFOSixVQUFVO2tCQUF6QixLQUFLO1lBRVUsbUJBQW1CO2tCQUFsQyxLQUFLOztBQStFUixNQUFNLE9BQU8sZUFBZTs0RkFBZixlQUFlOzJGQUFmLGVBQWU7Ozt1RkFBZixlQUFlO2NBSjNCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUI7O3dGQUNZLGVBQWUsbUJBcEZmLGtCQUFrQixhQUFsQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nTW9kdWxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VPYmplY3QgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC91aS9iYXNlLW9iamVjdCc7XG5pbXBvcnQgeyBBY2Nlc3NhYmxlRm9ybUdyb3VwIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHsgSVJvbGVHdWFyZCwgUk9MRV9HVUFSRCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS91aS9pLXJvbGUtZ3VhcmQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9vYnNlcnZhYmxlLXZhbHVlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICcuLi91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG4vKipcbiAqIE1hcmtpZXJ0IEVsZW1lbnRlIGZ1ZXIgZGllIHJvbGxlbmFiaGFlbmdpZ2UgRnJvbnRlbmQtS29uZmlndXJhdGlvbi4gRGFzIGVpZ2VudGxpY2hlIEF1c2JsZW5kZW4gZXJsZWRpZ3QgZGllXG4gKiBhbiBgUk9MRV9HVUFSRGAgZ2VidW5kZW5lIFJvbGxlbnBydWVmdW5nIGFuaGFuZCBkZXIgYGNvbmZpZ25hbWVgLUF0dHJpYnV0ZTsgZGllIERpcmVrdGl2ZSB2ZXJoaW5kZXJ0IG51ciBkYXNcbiAqIEF1ZmJsaXR6ZW4gdm9yIGRlciBQcnVlZnVuZyB1bmQgc3BlcnJ0IHNjaHJlaWJnZXNjaHVldHp0ZSBGb3JtdWxhcmUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb25maWduYW1lXSdcbn0pXG5leHBvcnQgY2xhc3MgUm9sZUd1YXJkRGlyZWN0aXZlIGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqIE5hbWUgZGVzIEVsZW1lbnRzIGluIGRlciBGcm9udGVuZC1Lb25maWd1cmF0aW9uICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb25maWduYW1lITogc3RyaW5nO1xuICAvKiogRm9ybXVsYXIsIGRhcyBiZWkgTGVzZXJlY2h0IGdlc3BlcnJ0IHdpcmQgKG51ciBtaXQgYGNvbmZpZ25hbWU9XCJyZWFkb25seS1mb3JtXCJgKSAqL1xuICBASW5wdXQoKSBwdWJsaWMgcmVhZG9ubHlGb3JtQ29udHJvbD86IEFjY2Vzc2FibGVGb3JtR3JvdXA8YW55LCBhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChST0xFX0dVQVJEKSBwcml2YXRlIHJvbGVHdWFyZDogSVJvbGVHdWFyZFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIERpZSBSb2xsZW5wcnVlZnVuZyBrYW5uIHZvciBvZGVyIG5hY2ggZGllc2VyIERpcmVrdGl2ZSBpbml0aWFsaXNpZXJ0IHdlcmRlbi5cbiAgICB0aGlzLmNoZWNrRWxlbWVudCgpO1xuICAgIHRoaXMud2F0Y2godGhpcy5yb2xlR3VhcmQuaXNBY3RpdmUuY2hhbmdlZC5hc09ic2VydmFibGUoKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIodGhpcy5jaGVja0VsZW1lbnQuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0VsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJvbGVHdWFyZC5pc0FjdGl2ZS52YWx1ZSkge1xuICAgICAgdGhpcy5jaGVja1dpdGhvdXRSb2xlR3VhcmQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnbmFtZS5pbmNsdWRlcygnd2F0Y2hfZWxlbWVudCcpKSB7XG4gICAgICB0aGlzLndhdGNoQ2hpbGRyZW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnbmFtZSA9PT0gJ3JlYWRvbmx5LWZvcm0nICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMucmVhZG9ubHlGb3JtQ29udHJvbCkpIHtcbiAgICAgIHRoaXMubG9ja0Zvcm1JZlJlYWRvbmx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVVudGlsQ2hlY2tlZCh0aGlzLnJvbGVHdWFyZC5lbGVtZW50c0NoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBMaXN0ZW4gbGFkZW4gaWhyZSBFaW50cmFlZ2UgbmFjaHRyYWVnbGljaCAtIG5ldWUgVW50ZXJlbGVtZW50ZSBtdWVzc2VuIGVybmV1dCBnZXBydWVmdCB3ZXJkZW4uICovXG4gIHByaXZhdGUgd2F0Y2hDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIHRoaXMucm9sZUd1YXJkLmVsZW1lbnRzQ2hlY2tlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yb2xlR3VhcmQudHJpZ2dlcigpO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRoaXMuY29uZmlnbmFtZS5pbmNsdWRlcygnOjpkZWVwJylcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9ja0Zvcm1JZlJlYWRvbmx5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yb2xlR3VhcmQuaXNDdXJyZW50UGFnZVJlYWRvbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVhZG9ubHlGb3JtQ29udHJvbCEuZGlzYWJsZSgpO1xuICAgIC8vIERhcyBGb3JtdWxhciBha3RpdmllcnQgc2ljaCBiZWkgV2VydHdlY2hzZWxuIHRlaWxzIHNlbGJzdCB3aWVkZXIsIGRhaGVyIGVybmV1dCBzcGVycmVuLlxuICAgIHRoaXMud2F0Y2godGhpcy5yZWFkb25seUZvcm1Db250cm9sIS52YWx1ZUNoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZWFkb25seUZvcm1Db250cm9sIS5kaXNhYmxlKCksIDEwMCk7XG4gICAgfSkpO1xuICAgIHRoaXMud2F0Y2godGhpcy5yZWFkb25seUZvcm1Db250cm9sIS5jb250cm9sLnN0YXR1c0NoYW5nZXMsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZWFkb25seUZvcm1Db250cm9sIS5kaXNhYmxlKCksIDEwMCk7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqIE9obmUgUm9sbGVucHJ1ZWZ1bmcgZW50ZmFsbGVuIEVyc2F0ei1FbGVtZW50ZSB1bmQgUmVhZG9ubHktVGl0ZWw7IGRlciBSZXN0IHdhcnRldCBhdWYgZGllIE1lbnVlcHJ1ZWZ1bmcuICovXG4gIHByaXZhdGUgY2hlY2tXaXRob3V0Um9sZUd1YXJkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZ25hbWUuaW5jbHVkZXMoJ3JlcGxhY2VfZWxlbWVudCcpIHx8IHRoaXMuY29uZmlnbmFtZS5pbmNsdWRlcygncmVhZG9ubHktdGl0bGUnKSkge1xuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVVudGlsQ2hlY2tlZCh0aGlzLnJvbGVHdWFyZC5tZW51Q2hlY2tlZCk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVVbnRpbENoZWNrZWQoY2hlY2tlZDogT2JzZXJ2YWJsZVZhbHVlPGJvb2xlYW4+KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWNoZWNrZWQudmFsdWUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbiAgICB0aGlzLndhdGNoKGNoZWNrZWQuY2hhbmdlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGlzQ2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaW5pdGlhbCc7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1JvbGVHdWFyZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtSb2xlR3VhcmREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVHdWFyZE1vZHVsZSB7fVxuIl19