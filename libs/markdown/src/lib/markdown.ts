import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export function getParsedFileContentBySlug(
  fileName: string,
  postsPath: string
) {
  const postFilePath = join(postsPath, `${fileName}.md`);
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
