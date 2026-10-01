import { Util } from "../../impl/util/util";
import _ from 'underscore';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvYWJzdHJhY3Qvcm91dGluZy9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0IsTUFBTSxPQUFnQiwwQkFBMEI7SUFHbEM7SUFDQTtJQUNBO0lBSFosWUFDWSxZQUFzQixFQUN0QixVQUFvQixFQUNwQixNQUF3QztRQUZ4QyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWtDO0lBQ2pELENBQUM7SUFFSixJQUFXLElBQUk7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzlELElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWUsQ0FBQyxNQUFnQjtRQUNyQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBZSxFQUFFLEVBQUU7WUFDdEYsTUFBTSxlQUFlLEdBQUksTUFBOEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxlQUFlLENBQUM7YUFDeEI7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRU0sUUFBUTtRQUNiLEtBQUksTUFBTSxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2dCQUN4RSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7Z0JBQ3ZGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQztnQkFDckYsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUGFyYW1zPiB7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwYXRoU2VnbWVudHM6IHN0cmluZ1tdLFxuICAgIHByb3RlY3RlZCBwYXJhbU5hbWVzPzogVFBhcmFtcyxcbiAgICBwcm90ZWN0ZWQgcGFyZW50PzogQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248YW55PlxuICApIHt9XG5cbiAgcHVibGljIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMucGFyZW50KSkge1xuICAgICAgcmV0dXJuIGAke3RoaXMucGFyZW50LnBhdGh9LyR7dGhpcy5wYXRoU2VnbWVudHMuam9pbignLycpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGhTZWdtZW50cy5qb2luKCcvJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBwYXJhbURlZmluaXRpb24oKTogVFBhcmFtcyB7XG4gICAgcmV0dXJuIF8uZXh0ZW5kKFxuICAgICAgVXRpbC5pc0RlZmluZWQodGhpcy5wYXJlbnQpID8gdGhpcy5wYXJlbnQucGFyYW1EZWZpbml0aW9uIDoge30sXG4gICAgICB0aGlzLnBhcmFtTmFtZXMgfHwge31cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkTmF2aWdhdGlvbihwYXJhbXM/OiBUUGFyYW1zKTogYW55W10ge1xuICAgIGxldCBuYXZpZ2F0aW9uUGFyYW1zID0gVXRpbC5pc0RlZmluZWQodGhpcy5wYXJlbnQpID9cbiAgICAgIHRoaXMucGFyZW50LmJ1aWxkTmF2aWdhdGlvbihwYXJhbXMpIDogW107XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChwYXJhbXMpKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdGlvblBhcmFtcy5jb25jYXQodGhpcy5wYXRoU2VnbWVudHMpO1xuICAgIH1cbiAgICBuYXZpZ2F0aW9uUGFyYW1zID0gbmF2aWdhdGlvblBhcmFtcy5jb25jYXQoXy5tYXAodGhpcy5wYXRoU2VnbWVudHMsIChzZWdtZW50OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHNlZ21lbnRJblBhcmFtcyA9IChwYXJhbXMgYXMgUmVjb3JkPHN0cmluZywgYW55Pilbc2VnbWVudC5yZXBsYWNlKCc6JywgJycpXTtcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzZWdtZW50SW5QYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBzZWdtZW50SW5QYXJhbXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KSk7XG4gICAgcmV0dXJuIG5hdmlnYXRpb25QYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgZm9yKGNvbnN0IHBhdGhTbmlwcGV0IGluIHRoaXMucGF0aFNlZ21lbnRzKSB7XG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHBhdGhTbmlwcGV0KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGhvdXQgYSBwYXRoIHNuaXBwZXQgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGhTbmlwcGV0LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGggYSBwYXRoIHNuaXBwZXQgc3RhcnRpbmcgd2l0aCBhIC8gaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGhTbmlwcGV0LmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRoIGEgcGF0aCBzbmlwcGV0IGVuZGluZyB3aXRoIGEgLyBpcyBub3QgYWxsb3dlZCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=