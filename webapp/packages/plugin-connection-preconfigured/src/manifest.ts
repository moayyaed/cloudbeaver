/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { PluginManifest } from '@cloudbeaver/core-di';

import { BasicConnectionPluginBootstrap } from './BasicConnectionPluginBootstrap';
import { BasicConnectionService } from './BasicConnectionService';
import { LocaleService } from './LocaleService';
import { TemplateConnectionsResource } from './TemplateConnectionsResource';

export const basicConnectionPluginManifest: PluginManifest = {
  info: {
    name: 'Basic connection plugin',
  },

  providers: [
    BasicConnectionService,
    TemplateConnectionsResource,
    LocaleService,
  ],

  initialize(services): void {
    services
      .resolveServiceByClass(BasicConnectionPluginBootstrap)
      .bootstrap();
  },
};
