import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export function getParsedFileContentBySlug(
  fileName: string,
  postsPath: string
) {
  const postFilePath = path.join(postsPath, `${fileName}.mdx`);
  const fileContent = readFileSync(postFilePath);
  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content,
  };
}

export function renderMarkdown(content = '') {
  return serialize(content);
}

export function getAllFilesFrontMatter(folder: string) {
  const prefixPaths = path.join(process.cwd(), folder);
  const files = readdirSync(prefixPaths);

  const allFrontMatter: Array<any> = [];

  files.forEach((fileName) => {
    // Remove Unexpected File

    const filePath = path.join(prefixPaths, fileName);
    if (path.extname(filePath) !== '.md' && path.extname(filePath) !== '.mdx') {
      return;
    }

    const slug = formatSlug(fileName);
    const info = getParsedFileContentBySlug(slug, prefixPaths);
    allFrontMatter.push({ ...info, slug: slug });
  });

  return allFrontMatter.sort((a, b) =>
    dateSortDesc(a.frontMatter.date, b.frontMatter.date)
  );
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '');
}
export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
