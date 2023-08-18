export class AbstractResolver {
    route;
    state;
    resolve(route, state) {
        this.route = route;
        this.state = state;
        return this.onResolve();
    }
    get routeConfiguration() {
        return this.route.data.routeConfiguration;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3QtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsTUFBTSxPQUFnQixnQkFBZ0I7SUFFMUIsS0FBSyxDQUF5QjtJQUM5QixLQUFLLENBQXNCO0lBSTlCLE9BQU8sQ0FDWixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBYyxrQkFBa0I7UUFDOUIsT0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQW1DLENBQUMsa0JBQWtCLENBQUM7SUFDNUUsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb2x2ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQge0lSb3V0aW5nRGF0YX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9yb3V0aW5nL2ktcm91dGluZy1jb25maWd1cmF0aW9uXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSZXNvbHZlcjxURGF0YSwgVFJvdXRlUGFyYW1zPiBpbXBsZW1lbnRzIFJlc29sdmU8VERhdGE+IHtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gIHByb3RlY3RlZCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IG9uUmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFREYXRhPjtcclxuXHJcbiAgcHVibGljIHJlc29sdmUoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAgKTogT2JzZXJ2YWJsZTxURGF0YT4gfCBQcm9taXNlPFREYXRhPiB8IFREYXRhIHtcclxuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHJldHVybiB0aGlzLm9uUmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCByb3V0ZUNvbmZpZ3VyYXRpb24oKTogQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248VFJvdXRlUGFyYW1zPiB7XHJcbiAgICByZXR1cm4gKHRoaXMucm91dGUuZGF0YSBhcyBJUm91dGluZ0RhdGE8VFJvdXRlUGFyYW1zPikucm91dGVDb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuIl19