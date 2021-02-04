// NG2
import { Component, HostBinding, Input } from '@angular/core';
import { BooleanInput } from '../../../../utils';
import { NovoBaseTextElement } from '../base/base-text.component';

/**
 * Tag Example
 * <novo-text size="small" disabled>Label</novo-text
 * <novo-text small disabled>Label</novo-text>
 * <novo-text large disabled>Label</novo-text>
 * <novo-text error>Label</novo-text>
 * <novo-text muted>Label</novo-text>
 * <novo-text class="tc-grapefruit">Label</novo-text>
 * <novo-text color="grapefruit">Label</novo-text>
 */

@Component({
  selector: 'novo-text,[novo-text]',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./text.scss'],
})
export class NovoText extends NovoBaseTextElement {
  @HostBinding('class.text-block')
  @Input()
  @BooleanInput()
  block: boolean;
}
