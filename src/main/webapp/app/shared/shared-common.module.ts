import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    ZxhgatewaySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        ZxhgatewaySharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        ZxhgatewaySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class ZxhgatewaySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
