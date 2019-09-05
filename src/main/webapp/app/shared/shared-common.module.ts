import { NgModule } from '@angular/core';

import { ProjectOneSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ProjectOneSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProjectOneSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProjectOneSharedCommonModule {}
