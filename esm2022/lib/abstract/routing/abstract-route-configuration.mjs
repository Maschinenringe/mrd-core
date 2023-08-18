import { Util } from "../../impl/util/util";
import * as _ from 'underscore';
export class AbstractRouteConfiguration {
    pathSegments;
    paramNames;
    parent;
    constructor(pathSegments, paramNames, parent) {
        this.pathSegments = pathSegments;
        this.paramNames = paramNames;
        this.parent = parent;
    }
    get path() {
        if (Util.isDefined(this.parent)) {
            return `${this.parent.path}/${this.pathSegments.join('/')}`;
        }
        else {
            return this.pathSegments.join('/');
        }
    }
    get paramDefinition() {
        return _.extend(Util.isDefined(this.parent) ? this.parent.paramDefinition : {}, this.paramNames || {});
    }
    buildNavigation(params) {
        let navigationParams = Util.isDefined(this.parent) ?
            this.parent.buildNavigation(params) : [];
        if (!Util.isDefined(params)) {
            return navigationParams.concat(this.pathSegments);
        }
        navigationParams = navigationParams.concat(_.map(this.pathSegments, (segment) => {
            const segmentInParams = params[segment.replace(':', '')];
            if (Util.isDefined(segmentInParams)) {
                return segmentInParams;
            }
            return segment;
        }));
        return navigationParams;
    }
    validate() {
        for (const pathSnippet in this.pathSegments) {
            if (!Util.isDefined(pathSnippet)) {
                console.error('Creating a route without a path snippet is not allowed');
                return false;
            }
            if (pathSnippet.startsWith('/')) {
                console.error('Creating a route with a path snippet starting with a / is not allowed');
                return false;
            }
            if (pathSnippet.endsWith('/')) {
                console.error('Creating a route with a path snippet ending with a / is not allowed');
                return false;
            }
        }
        return true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvYWJzdHJhY3Qvcm91dGluZy9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxNQUFNLE9BQWdCLDBCQUEwQjtJQUdsQztJQUNBO0lBQ0E7SUFIWixZQUNZLFlBQXNCLEVBQ3RCLFVBQW9CLEVBQ3BCLE1BQXdDO1FBRnhDLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0M7SUFDakQsQ0FBQztJQUVKLElBQVcsSUFBSTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDN0Q7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDOUQsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQ3RCLENBQUM7SUFDSixDQUFDO0lBRU0sZUFBZSxDQUFDLE1BQWdCO1FBQ3JDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuRDtRQUNELGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN0RixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sZUFBZSxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVNLFFBQVE7UUFDYixLQUFJLE1BQU0sV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztnQkFDeEUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO2dCQUN2RixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7Z0JBQ3JGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3V0aWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUGFyYW1zPiB7XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBwYXRoU2VnbWVudHM6IHN0cmluZ1tdLFxyXG4gICAgcHJvdGVjdGVkIHBhcmFtTmFtZXM/OiBUUGFyYW1zLFxyXG4gICAgcHJvdGVjdGVkIHBhcmVudD86IEFic3RyYWN0Um91dGVDb25maWd1cmF0aW9uPGFueT5cclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMucGFyZW50KSkge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5wYXJlbnQucGF0aH0vJHt0aGlzLnBhdGhTZWdtZW50cy5qb2luKCcvJyl9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhdGhTZWdtZW50cy5qb2luKCcvJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhcmFtRGVmaW5pdGlvbigpOiBUUGFyYW1zIHtcclxuICAgIHJldHVybiBfLmV4dGVuZChcclxuICAgICAgVXRpbC5pc0RlZmluZWQodGhpcy5wYXJlbnQpID8gdGhpcy5wYXJlbnQucGFyYW1EZWZpbml0aW9uIDoge30sXHJcbiAgICAgIHRoaXMucGFyYW1OYW1lcyB8fCB7fVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBidWlsZE5hdmlnYXRpb24ocGFyYW1zPzogVFBhcmFtcyk6IGFueVtdIHtcclxuICAgIGxldCBuYXZpZ2F0aW9uUGFyYW1zID0gVXRpbC5pc0RlZmluZWQodGhpcy5wYXJlbnQpID9cclxuICAgICAgdGhpcy5wYXJlbnQuYnVpbGROYXZpZ2F0aW9uKHBhcmFtcykgOiBbXTtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQocGFyYW1zKSkge1xyXG4gICAgICByZXR1cm4gbmF2aWdhdGlvblBhcmFtcy5jb25jYXQodGhpcy5wYXRoU2VnbWVudHMpO1xyXG4gICAgfVxyXG4gICAgbmF2aWdhdGlvblBhcmFtcyA9IG5hdmlnYXRpb25QYXJhbXMuY29uY2F0KF8ubWFwKHRoaXMucGF0aFNlZ21lbnRzLCAoc2VnbWVudDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlZ21lbnRJblBhcmFtcyA9IHBhcmFtc1tzZWdtZW50LnJlcGxhY2UoJzonLCAnJyldO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VnbWVudEluUGFyYW1zKSkge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50SW5QYXJhbXM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gbmF2aWdhdGlvblBhcmFtcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBib29sZWFuIHtcclxuICAgIGZvcihjb25zdCBwYXRoU25pcHBldCBpbiB0aGlzLnBhdGhTZWdtZW50cykge1xyXG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHBhdGhTbmlwcGV0KSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0aW5nIGEgcm91dGUgd2l0aG91dCBhIHBhdGggc25pcHBldCBpcyBub3QgYWxsb3dlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0aFNuaXBwZXQuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRoIGEgcGF0aCBzbmlwcGV0IHN0YXJ0aW5nIHdpdGggYSAvIGlzIG5vdCBhbGxvd2VkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXRoU25pcHBldC5lbmRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRoIGEgcGF0aCBzbmlwcGV0IGVuZGluZyB3aXRoIGEgLyBpcyBub3QgYWxsb3dlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==