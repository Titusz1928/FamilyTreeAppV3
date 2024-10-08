import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import { TreeAreaComponent } from './tree-area/tree-area.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { InfoDialogComponent } from './header/dialogs/info-dialog/info-dialog.component';
import { LoginDialogComponent } from './header/dialogs/login-dialog/login-dialog.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TreeAreaComponent,
    HeaderComponent,
    InfoDialogComponent,
    LoginDialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"familytreedatabase-c8bf3","appId":"1:83738970274:web:e0c8a989d6646c6c7daffb","storageBucket":"familytreedatabase-c8bf3.appspot.com","apiKey":"AIzaSyBMJV1Vv0VH0Umvs2-rAqTg2c5ptH__rd8","authDomain":"familytreedatabase-c8bf3.firebaseapp.com","messagingSenderId":"83738970274","measurementId":"G-5GBNW3TGEB"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
