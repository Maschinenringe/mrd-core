import { BaseObject } from '../ui/base-object';
import { ReadonlyRestServiceObserver } from '../../impl/http/readonly-rest-service-observer';
import { ReadonlyRestHandler } from '../../impl/http/readony-rest-handler';
import { Util } from "../../impl/util/util";
export class AbstractReadonlyRestservice extends BaseObject {
    identifier;
    observer;
    constructor(restServiceObserver) {
        super();
        this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
    }
    all(searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions);
    }
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktcmVzdHNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2Fic3RyYWN0L2h0dHAvYWJzdHJhY3QtcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUUxQyxNQUFNLE9BQWdCLDJCQUErQixTQUFRLFVBQVU7SUFFckUsVUFBVSxDQUFTO0lBRUgsUUFBUSxDQUFpQztJQUd6RCxZQUNFLG1CQUFvRDtRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksMkJBQTJCLEVBQUssQ0FBQztJQUN6QyxDQUFDO0lBRU0sR0FBRyxDQUFDLFlBQXFCLEVBQUUsV0FBb0I7UUFDcEQsT0FBTyxJQUFJLG1CQUFtQixDQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRU0sSUFBSSxDQUFDLEVBQU8sRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzNELE9BQU8sSUFBSSxtQkFBbUIsQ0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0Jhc2VPYmplY3R9IGZyb20gJy4uL3VpL2Jhc2Utb2JqZWN0JztcclxuaW1wb3J0IHtJUmVhZG9ubHlSZXN0U2VydmljZX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL2h0dHAvaS1yZWFkb25seS1yZXN0c2VydmljZSc7XHJcbmltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tICcuLi8uLi9pbXBsL2h0dHAvcmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyJztcclxuaW1wb3J0IHtSZWFkb25seVJlc3RIYW5kbGVyfSBmcm9tICcuLi8uLi9pbXBsL2h0dHAvcmVhZG9ueS1yZXN0LWhhbmRsZXInO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UmVhZG9ubHlSZXN0c2VydmljZTxUPiBleHRlbmRzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBJUmVhZG9ubHlSZXN0U2VydmljZTxUPiB7XHJcblxyXG4gIGlkZW50aWZpZXI6IHN0cmluZztcclxuICBwdWJsaWMgYWJzdHJhY3QgdXJsOiBzdHJpbmc7XHJcbiAgcHVibGljIHJlYWRvbmx5IG9ic2VydmVyOiBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD47XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGh0dHA6IEh0dHBDbGllbnQ7XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcclxuICAgIHJlc3RTZXJ2aWNlT2JzZXJ2ZXI/OiBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD5cclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm9ic2VydmVyID0gVXRpbC5pc0RlZmluZWQocmVzdFNlcnZpY2VPYnNlcnZlcikgPyByZXN0U2VydmljZU9ic2VydmVyIDpcclxuICAgICAgbmV3IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUPigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFsbChzZWFyY2hQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUW10+IHtcclxuICAgIHJldHVybiBuZXcgUmVhZG9ubHlSZXN0SGFuZGxlcjxUPih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyKS5hbGwoc2VhcmNoUGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdyhpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlYWRvbmx5UmVzdEhhbmRsZXI8VD4odGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlcikuc2hvdyhpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=