import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';

// Remark packages
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import remarkMath from 'remark-math';
/**
 * TODO: Validate which of theses plugins are required and update the bundleMDX call
 */
// import remarkExtractFrontmatter from './remark-extract-frontmatter'
// import remarkCodeTitles from './remark-code-title'
// import remarkTocHeadings from './remark-toc-headings'
// import remarkImgToJsx from './remark-img-to-jsx'
// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';

const root = process.cwd();

export async function getFileBySlug(type: string, slug: string) {
  /**
   * TODO: Improve the path by providing an initial branch folder and a subfolder from params
   */
  const mdxPath = path.join(root, type, `${slug}.mdx`);
  const mdPath = path.join(root, type, `${slug}.md`);
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8');

  const { code, frontmatter } = await bundleMDX<{
    /**
     * TODO: Extract frontMatter typing
     */
    title: string;
    author: {
      name: string;
    };
    date: string;
  }>({
    source,
    // mdx imports can be automatically source from the components directory
    // cwd: path.join(root, 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // remarkExtractFrontmatter,
        // [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        // remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        // remarkImgToJsx,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ];
      return options;
    },
  });

  return {
    mdxSource: code,
    // toc,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  };
}
export function getFrontMatterBySlug(fileName: string, postsPath: string) {
  const postFilePath = path.join(postsPath, `${fileName}.mdx`);
  const fileContent = fs.readFileSync(postFilePath);
  const { data: frontMatter } = matter(fileContent);

  return frontMatter;
}

export function getAllFilesFrontMatter(type: string) {
  /**
   * TODO: Improve the path by providing an initial branch folder and a subfolder from params
   */
  const prefixPaths = path.join(root, type);
  const files = fs.readdirSync(prefixPaths);

  /**
   * TODO: Improve typing
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allFrontMatter: Array<any> = [];

  files.forEach((fileName) => {
    // Remove Unexpected File

    const filePath = path.join(prefixPaths, fileName);
    if (path.extname(filePath) !== '.md' && path.extname(filePath) !== '.mdx') {
      return;
    }

    const slug = formatSlug(fileName);
    const frontMatter = getFrontMatterBySlug(slug, prefixPaths);

    allFrontMatter.push({ ...frontMatter, slug: slug });
  });

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '');
}
export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
