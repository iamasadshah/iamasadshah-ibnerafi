import { type SchemaTypeDefinition } from 'sanity'
import { projects } from './projects'
import { blog } from './blog'
import { author } from './author'
import { blockContent } from './blockcontent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, author, blockContent, blog],
}
