import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { JournalHomeComponent } from './components/journal/journal-home/journal-home.component';
import { JournalEntryComponent } from './components/journal/journal-entry/journal-entry.component';
import { JournalNewComponent } from './components/journal/journal-new/journal-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    ShopHomeComponent,
    ShopHomeComponent,
    JournalHomeComponent,
    JournalEntryComponent,
    JournalNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
