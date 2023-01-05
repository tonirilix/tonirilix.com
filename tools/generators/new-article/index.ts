import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(tree, joinPathFragments(__dirname, './files'), './content', {
    title: schema.title,
    author: schema.author,
    excerpt: schema.excerpt ?? '',
    createdAt: new Date().toISOString(),
    normalizedTitle: names(schema.title).fileName,
  });

  await formatFiles(tree);
}
