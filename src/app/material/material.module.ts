import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';


const materials: any = [
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  RouterModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatButtonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatButtonModule, MatDialogModule
];

@NgModule({
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
