import React from 'react';
import { ModuleFields, TextField, UrlField } from '@hubspot/cms-components/fields';
import CTASection from './CTASection';

export function Component({ fieldValues }) {
  return (
    <CTASection />
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="ctaText" label="CTA Text" default="Get started" />
    <UrlField name="ctaUrl" label="CTA URL" default="/request-demo" />
  </ModuleFields>
);

export const meta = { label: 'CTA Section' };
