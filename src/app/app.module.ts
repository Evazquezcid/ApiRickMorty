import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { AboutComponent } from './pages/about/about.component';
import { SubtitleComponent } from './shared/subtitle/subtitle.component';
import { CharactercardComponent } from './pages/characters/components/charactercard/charactercard.component';
import { CharacterdetailComponent } from './pages/characterdetail/characterdetail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    CharactersComponent,
    AboutComponent,
    SubtitleComponent,
    CharactercardComponent,
    CharacterdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
