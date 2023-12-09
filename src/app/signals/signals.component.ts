import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-10 bg-red-300">
      <h1 class="text-4xl font-bold">Signals</h1>
      <div>Framework: {{framework()}}</div>
      <div>Version: {{version()}}</div>
      <div>Computed: {{framework()}}:{{version()}}</div>
    </div>
  `,
  styles: ``
})
export class SignalsComponent {

  public framework = signal('Angular');
  public version = signal(17);
  public computed = computed(() => `${this.framework()}:${this.version()}`);

  constructor() {
    effect(() => {
      console.log('effect ', this.framework(), ':', this.version());
    });
    effect(() => {
      console.log('effect');
    });
  }

  ngOnInit() {
    setInterval(() => {
      // this.version.update(() => this.version() + 1);
      this.version.set(this.version() + 1);
    }, 1000);
  }

}
