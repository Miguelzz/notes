import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
//import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        //private authService: AuthService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {

        let validate = false;
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        // var validate = this.authService.getAuthStatus();
        if (user.validate) validate = true
        if (!validate) {
            this.router.navigate(['/login']);
        }


        return validate;
    }
}