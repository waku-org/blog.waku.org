# Waku Blog

The template repository for blogs using [logos-docusaurus-plugins](https://github.com/acid-info/logos-docusaurus-plugins)


## How to Run Locally

1. Clone this repository
```bash
$ git clone https://github.com/waku-org/blog.waku.org.git
```

2. Install the dependencies:
```bash
$ yarn install
```

3. Start the website:
```bash
$ yarn start
```

4. Visit `http://localhost:3000/` in your browser


## Blog Setup

The blog utilizes the Docusaurus blog plugin configured in `docusaurus.config.js`.

```js
[
  '@docusaurus/plugin-content-blog',
  /** @type {import('@docusaurus/plugin-content-blog').PluginOptions} */
  ({
    id: 'blog',
    routeBasePath: '/',
    path: 'posts',
    blogTitle: 'Waku Blog',
    blogSidebarCount: 0,
    authorsMapPath: 'authors.yml',
    remarkPlugins: [math],
    rehypePlugins: [katex],
  }),
]
```

A list of authors can be defined in `/posts/authors.yml`.

For additional customization options, please refer to the [Docusaurus Blog Plugin documentation](https://docusaurus.io/docs/blog).


## Adding posts

To publish in the blog, create a `.md` or `mdx` file within the `posts` directory. You can use [Frontmatter](https://docusaurus.io/docs/markdown-features#front-matter) to add metadata to your markdown file.


## Customization

You can find instructions for adding additional documentation sections, implementing localization, and managing versioning on the [Docusaurus](https://docusaurus.io/docs) website.

> Please note that theme customization is somewhat restricted; for more detailed instructions on customizing your theme, visit the [Logos Docusaurus Theme](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/) repository.


## CI/CD

- The `master` branch is deployed to https://blog.waku.org/ through [Jenkins CI](https://ci.infra.status.im/job/website/job/blog.waku.org/).
- The `develop` branch is deployed to https://dev-blog.waku.org/ through [Jenkins CI](https://ci.infra.status.im/job/website/job/dev-blog.waku.org/).

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`.
2. Make your changes, push them to the `origin`, and open a Pull Request against the `develop` branch.
3. After approval, merge the pull request, and verify the changes on the staging server (e.g., https://dev.vac.dev).
4. When ready to promote changes to the live website, rebase the `master` branch on the staging changes: `git checkout master; git pull origin master; git rebase origin/develop; git push`.
