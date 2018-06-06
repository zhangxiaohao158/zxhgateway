import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    ZxhgatewaySharedLibsModule,
    ZxhgatewaySharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        ZxhgatewaySharedLibsModule,
        ZxhgatewaySharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        ZxhgatewaySharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ZxhgatewaySharedModule {}
