import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiLink} from '@taiga-ui/core';

@Component({
  selector: 'app-add-memes-btn',
  templateUrl: './add-memes-btn.html',
  styleUrl: './add-memes-btn.scss',
  standalone: true,
  exportAs: "Example2",
  imports: [RouterLink, TuiButton, TuiLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMemesBtn {
  protected readonly routes: any = {};
}
