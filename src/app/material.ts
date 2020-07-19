import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatInputModule, MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    exports: [MatTabsModule,
              MatBottomSheetModule,
              MatCheckboxModule,
              MatPaginatorModule,
              MatSortModule,
              MatTableModule,
              MatFormFieldModule,
              MatIconModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatDialogModule,
              MatInputModule,
              MatCardModule,
              MatButtonModule,
              MatSidenavModule,
              MatSelectModule,
              MatMenuModule,
              MatStepperModule]
})


export class MaterialModule{} 