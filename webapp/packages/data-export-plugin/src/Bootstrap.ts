/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { injectable } from '@dbeaver/core/di';

import { DataExportMenuService } from './DataExportMenuService';


@injectable()
export class Bootstrap {
  constructor(private dataExportMenuService: DataExportMenuService) { }

  bootstrap() {
    this.dataExportMenuService.register();
  }
}
