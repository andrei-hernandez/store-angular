import { Component, Inject, Input, PLATFORM_ID, signal, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Before rendering
    // Once
    console.log('Constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during rendering
    // All DOM changes
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // After rendering
    // Once
    // Can call async logic
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);

    if(isPlatformBrowser(this.platformId)) {
      this.counterRef = window.setInterval(() => {
        console.log('run interval');
        this.counter.update(value => value + 1);
      }, 1000);
    }
  }

  ngAfterViewInit() {
    // After children render
    // Once
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // Before destroying
    // Once
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    if(isPlatformBrowser(this.platformId)) {
      window.clearInterval(this.counterRef);
    }
  }

  doSomething() {
    // Here is allowed to run async logic
    console.log('Change duration');
  }
}
