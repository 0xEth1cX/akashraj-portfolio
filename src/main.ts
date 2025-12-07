import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

// Initialize Vercel Speed Insights and Web Analytics on client side
if (typeof window !== 'undefined') {
  injectSpeedInsights();
  inject();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
