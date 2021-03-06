import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { memory } from "./memory";
//import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        //private authService: AuthService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {

        memory.id = localStorage.getItem('id') || '';
        memory.user = JSON.parse(localStorage.getItem(memory.id) || '{}');

        let validate = false;
        if (memory.user.validate) validate = true
        if (!validate)
            this.router.navigate(['/login']);

        return validate;
    }
}