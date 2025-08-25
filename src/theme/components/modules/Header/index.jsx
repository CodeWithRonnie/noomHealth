import React from 'react';
import { ModuleFields } from '@hubspot/cms-components/fields';
import Header from './Header';

export function Component() {
  return <Header />;
}

export const fields = (
  <ModuleFields>
  </ModuleFields>
);

export const meta = {
  label: 'Header',
};


