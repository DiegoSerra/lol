import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MaterialModule} from './material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
    ]
})

export class SharedModule {
    
}