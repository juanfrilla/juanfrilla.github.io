# Personal Website

Personal website and technical blog built with **Jekyll** and hosted on **GitHub Pages**.

The site contains my profile, projects, technical notes and articles about web scraping, web security and JavaScript reverse engineering.

## Requirements

* Ruby
* Bundler
* Git

The project uses the [`github-pages`](https://github.com/github/pages-gem) gem, which provides the same Jekyll environment used by GitHub Pages.

## Clone the repository

```bash
git clone https://github.com/juanfrilla/juanfrilla.github.io.git
cd juanfrilla.github.io
```

## Install dependencies

Install the required Ruby gems:

```bash
bundle install
```

## Run locally

Start the Jekyll development server:

```bash
bundle exec jekyll serve
```

Jekyll will print the local address, normally:

```text
http://localhost:4000
```

Open it in your browser.

### Live reload

Jekyll automatically regenerates the site when files are modified.

If you want Jekyll to watch the files explicitly:

```bash
bundle exec jekyll serve --livereload
```

Then open:

```text
http://localhost:4000
```

## Project structure

```text
.
├── _layouts/
│   └── default.html
│
├── assets/
│   └── ...
│
├── blog/
│   ├── index.md
│   └── bet365-vm-static-disassembler.md
│
├── projects/
│   └── famousrussianmarketplace/
│       └── images/
│
├── index.md
├── Gemfile
├── Gemfile.lock
└── README.md
```

### Main files

**`index.md`**

Home page.

**`blog/index.md`**

Blog listing.

**`blog/*.md`**

Individual technical articles.

**`_layouts/default.html`**

Main site layout and global CSS.

**`projects/`**

Project-specific assets such as screenshots and images.

**`Gemfile`**

Ruby dependencies used to build the site.

## Creating a new blog post

Create a new Markdown file inside `blog/`:

```text
blog/my-new-post.md
```

Add Jekyll front matter at the beginning:

```markdown
---
layout: default
title: My New Post
---

# My New Post

Your content here.
```

Images can be stored alongside the project they belong to:

```text
projects/
└── my-project/
    └── images/
        └── screenshot.png
```

And referenced from Markdown:

```markdown
![Screenshot](/projects/my-project/images/screenshot.png)
```

## Build the site

To build the static site without starting the development server:

```bash
bundle exec jekyll build
```

The generated website will be placed in:

```text
_site/
```

## Deploy

The repository is configured as a **GitHub Pages** site.

Push changes to GitHub:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages will build and deploy the site automatically.

## Useful commands

Start development server:

```bash
bundle exec jekyll serve
```

Start with live reload:

```bash
bundle exec jekyll serve --livereload
```

Build the site:

```bash
bundle exec jekyll build
```

Clean generated files:

```bash
bundle exec jekyll clean
```

## Local development workflow

Typical workflow:

```bash
git pull

bundle install

bundle exec jekyll serve --livereload
```

Edit the Markdown, HTML or CSS files and refresh the browser to see the changes.

When finished:

```bash
git add .
git commit -m "Update website"
git push
```

## Website

[juanfrilla.github.io](https://juanfrilla.github.io)

## Author

**Juan Fran Martín**

Telecommunications Engineer · Python · Web Scraping · Web Security · Reverse Engineering
