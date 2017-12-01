// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoButtonModule } from './../button/Button.module';
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoTooltipModule } from './../tooltip/Tooltip.module';
import { NovoSearchBoxElement } from './SearchBox';

@NgModule({
    imports: [CommonModule, NovoButtonModule, NovoPickerModule, NovoTooltipModule, OverlayModule, NovoOverlayModule],
    declarations: [NovoSearchBoxElement],
    exports: [NovoSearchBoxElement]
})
export class NovoSearchBoxModule {
}
