import { NgModule } from '@angular/core';
import {
    MdSidenavModule,
    MdToolbarModule
} from '@angular/material';

const mdModules = [
    MdSidenavModule,
    MdToolbarModule
];

@NgModule({
    imports: mdModules,
    exports: mdModules
})
export class AppMaterialModule {}