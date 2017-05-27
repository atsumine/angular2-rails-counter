import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CounterModule } from './app/counter.module';

platformBrowserDynamic().bootstrapModule(CounterModule);
