import React from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import Hero from './Hero';

export function Component({ fieldValues }) {
  return <Hero title={fieldValues.title} subtitle={fieldValues.subtitle} />;
}

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" default="Healthier people. Lower costs. Smarter healthcare." />
    <TextField name="subtitle" label="Subtitle" default="The science-based solution to reduce weight and cardiometabolic risk." />
  </ModuleFields>
);

export const meta = {
  label: 'Hero',
};


