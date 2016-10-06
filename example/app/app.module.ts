import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllExamplesComponent, ExampleNoDirectives, ExampleLeftAligned,
    ExampleMiddleAligned, ExampleRightAligned, ExampleDynamicallyVivid,
    ExampleDynamicallyVividMiddleAligned, ExampleNotVividLeftAligned,
    ExampleNotVivid, ExampleVivid, ExampleVisible, ExampleNotVisible,
    ExampleDynamicallyVisible, ExampleDynamicallyVisibleLeftAligned,
    ExampleForDataGridUseCase, PertinentExampleComponent
  } from './all.component';
import { AppComponent } from './app.component';
import { MoreMenuModule } from '../../src/index';

const routes = [
  { path: '', component: PertinentExampleComponent },
  { path: 'all', component: AllExamplesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PertinentExampleComponent,
    AllExamplesComponent,
    ExampleNoDirectives,
    ExampleRightAligned,
    ExampleMiddleAligned,
    ExampleLeftAligned,
    ExampleVivid,
    ExampleNotVivid,
    ExampleDynamicallyVivid,
    ExampleVisible,
    ExampleNotVisible,
    ExampleDynamicallyVisible,
    ExampleDynamicallyVividMiddleAligned,
    ExampleDynamicallyVisibleLeftAligned,
    ExampleNotVividLeftAligned,
    ExampleForDataGridUseCase
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MoreMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
