import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardMatComponent } from './card-mat/card-mat.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { PopupComponent } from './modal/popup/popup.component';
import { MultiSelectComponent } from './multi-select-option/multi-select/multi-select.component';
import { SelectContainerComponent } from './multi-select-option/select-container/select-container.component';
import { SelectOptionsComponent } from './multi-select-option/select-options/select-options.component';
import { RadiobuttonGroupComponent } from './radiobutton-group/radiobutton-group.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SelectOptionMatComponent } from './select-option-mat/select-option-mat.component';
import { SliderComponent } from './slider/slider.component';
import { CheckboxComponent } from '../widget/checkbox/checkbox.component';
import { RadiobuttonComponent } from '../widget/radiobutton/radiobutton.component';

@NgModule({
  declarations: [
    SearchBoxComponent,
    CheckboxGroupComponent,
    RadiobuttonGroupComponent,
    SelectOptionMatComponent,
    CardMatComponent,
    PopupComponent,
    ImageViewComponent,
    SliderComponent,
    MultiSelectComponent,
    SelectContainerComponent,
    SelectOptionsComponent,
    RangeSliderComponent,
    CheckboxComponent,
    RadiobuttonComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    OverlayModule,
    PortalModule,
    FlexLayoutModule,
    MatSliderModule,
    DragDropModule,
    FormsModule
  ],
  entryComponents: [PopupComponent, ImageViewComponent, SelectContainerComponent, SelectOptionsComponent],
  exports: [
    CheckboxGroupComponent,
    RadiobuttonGroupComponent,
    SelectOptionMatComponent,
    CardMatComponent,
    SearchBoxComponent,
    SliderComponent,
    MultiSelectComponent,
    RangeSliderComponent,
  ]
})
export class CoreModule {}
