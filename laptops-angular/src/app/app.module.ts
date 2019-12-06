import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FilterSidebarComponent } from './filter-sidebar/filter-sidebar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { RootStoreModule } from './root-store';
import { LaptopService } from './services/laptop.service';
import { TextInputComponent } from './widget/text-input/text-input.component';
import { CardComponent } from './widget/card/card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, FilterSidebarComponent, MainContainerComponent, TextInputComponent, CardComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    RootStoreModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  providers: [LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule {}
