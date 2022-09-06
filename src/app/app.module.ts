import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routerComponents } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { CapsuleComponent } from './components/capsule/capsule.component';
import { CapsulesFilterComponent } from './components/capsules-filter/capsules-filter.component';
import { RocketsComponent } from './components/rockets/rockets.component';

@NgModule({
  declarations: [
    AppComponent,
    routerComponents,
    HeaderComponent,
    CapsulesComponent,
    CapsuleComponent,
    CapsulesFilterComponent,
    RocketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
