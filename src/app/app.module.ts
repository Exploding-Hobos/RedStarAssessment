import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarSearchComponent } from './star-search/star-search.component';
import { DatabaseService } from './services/database.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StarSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
