import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarsChartsComponent } from './app/components/progressbars-charts/progressbars-charts.component';

const routes: Routes = [{ path: '', component: ProgressBarsChartsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
