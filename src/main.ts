import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Speed Insights on client side
if (typeof window !== 'undefined') {
  injectSpeedInsights();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
