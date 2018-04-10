import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-quard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports:  [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products',component : ProductListComponent},
      {path: 'product/:id',
      canActivate:[ProductDetailGuard],
      component : ProductDetailComponent},
      {path: 'welcome', component : WelcomeComponent},
      {path: '', redirectTo: 'welcome',pathMatch: 'full'},
      {path: '**',  redirectTo: 'welcome',pathMatch: 'full'}

    ],
    // { useHash:true}
  )
  ],
  // po dodaniu Guard musim podlaczyc pod strone gdzie bedzie uzywana
  providers: [ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
