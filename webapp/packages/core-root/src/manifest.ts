/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2024 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import type { PluginManifest } from '@cloudbeaver/core-di';

import { DataSynchronizationService } from './DataSynchronization/DataSynchronizationService';
import { FeaturesResource } from './FeaturesResource';
import { NetworkStateService } from './NetworkStateService';
import { PermissionsService } from './PermissionsService';
import { QuotasService } from './QuotasService';
import { ServerConfigEventHandler } from './ServerConfigEventHandler';
import { ServerConfigResource } from './ServerConfigResource';
import { ServerNodeService } from './ServerNodeService';
import { ServerSettingsResolverService } from './ServerSettingsResolverService';
import { ServerSettingsService } from './ServerSettingsService';
import { SessionActionService } from './SessionActionService';
import { SessionDataResource } from './SessionDataResource';
import { SessionEventSource } from './SessionEventSource';
import { SessionExpireEventService } from './SessionExpireEventService';
import { SessionExpireService } from './SessionExpireService';
import { SessionInfoEventHandler } from './SessionInfoEventHandler';
import { SessionPermissionEventHandler } from './SessionPermissionEventHandler';
import { SessionPermissionsResource } from './SessionPermissionsResource';
import { SessionResource } from './SessionResource';
import { SessionSettingsService } from './SessionSettingsService';
import { WindowEventsService } from './WindowEventsService';

export const coreRootManifest: PluginManifest = {
  info: {
    name: 'Core Root',
  },

  providers: [
    FeaturesResource,
    NetworkStateService,
    SessionPermissionsResource,
    PermissionsService,
    ServerConfigResource,
    ServerSettingsService,
    SessionActionService,
    SessionDataResource,
    SessionExpireService,
    SessionExpireEventService,
    ServerNodeService,
    SessionResource,
    SessionSettingsService,
    WindowEventsService,
    QuotasService,
    ServerConfigEventHandler,
    SessionEventSource,
    SessionInfoEventHandler,
    DataSynchronizationService,
    SessionPermissionEventHandler,
    ServerSettingsResolverService,
  ],
};
