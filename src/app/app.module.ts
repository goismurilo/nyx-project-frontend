import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MonthComponent } from './views/month/month.component';
import { CategoryComponent } from './views/category/category.component';
import { SourceComponent } from './views/source/source.component';
import { ExpensesTableComponent } from './shared/expenses-table/expenses-table.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardValuesComponent } from './shared/card-values/card-values.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DoughnutChartComponent } from './shared/doughnut-chart/doughnut-chart.component';


registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    MonthComponent,
    CategoryComponent,
    SourceComponent,
    ExpensesTableComponent,
    CardValuesComponent,
    DoughnutChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
