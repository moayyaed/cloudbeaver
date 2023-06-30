/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2023 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import type { PluginManifest } from '@cloudbeaver/core-di';

import { LocaleService } from './LocaleService';
import { SettingsPanelPluginBootstrap } from './SettingsPanelPluginBootstrap';

export const settingsPanelPlugin: PluginManifest = {
  info: { name: 'Settings panel plugin' },
  providers: [SettingsPanelPluginBootstrap, LocaleService],
};
