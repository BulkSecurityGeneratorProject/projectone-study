import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectOneSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProjectOneSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProjectOneSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectOneSharedModule {
  static forRoot() {
    return {
      ngModule: ProjectOneSharedModule
    };
  }
}
