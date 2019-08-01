import {MatCheckboxModule,MatIconModule, MatDialogModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


@NgModule({

  imports: [MatDialogModule,MatCardModule,MatSelectModule,MatTabsModule,MatMenuModule,MatToolbarModule,MatInputModule,MatFormFieldModule,MatSidenavModule,MatIconModule,MatButtonModule, MatCheckboxModule],
  exports: [MatCardModule,MatSelectModule,MatTabsModule,MatMenuModule,MatToolbarModule,MatInputModule,MatFormFieldModule,MatSidenavModule,MatIconModule,MatButtonModule,MatCheckboxModule]
})
export class MaterialModule { }