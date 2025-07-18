import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

// Optionally from your env file
import { projectId, dataset, apiVersion } from './src/sanity/env'
import { structure } from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',

  projectId: projectId || 'yourProjectId',
  dataset: dataset || 'production',

  plugins: [deskTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Optional: use environment API versioning
  apiVersion: apiVersion || '2023-07-17',
})
