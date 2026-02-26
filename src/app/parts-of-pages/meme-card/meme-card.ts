import {Component, Input, input, signal} from '@angular/core';
import {Meme} from '../../for-developing/models/meme.model';
import {sendDebugMessage} from '@angular/cli/src/commands/mcp/tools/onpush-zoneless-migration/send-debug-message';

@Component({
  selector: 'app-meme-card',
  imports: [],
  templateUrl: './meme-card.html',
  styleUrl: './meme-card.scss',
})
export class MemeCard {
  readonly mem = input.required<Meme>();

  get path() {
    return this.mem()?.path;
  }

  readonly p = signal<string>(this.mem.path);

}
