import React from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import StatsSection from './StatsSection';

export function Component({ fieldValues }) {
  return <StatsSection sectionTitle={fieldValues.sectionTitle} />;
}

export const fields = (
  <ModuleFields>
    <TextField name="sectionTitle" label="Section Title" default="Proven Results" />
  </ModuleFields>
);

export const meta = {
  label: 'Stats Section',
};


