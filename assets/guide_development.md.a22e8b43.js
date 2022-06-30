import{_ as s,c as n,o as e,a}from"./app.ee2751a3.js";const f=JSON.parse('{"title":"Development","description":"","frontmatter":{},"headers":[{"level":2,"title":"Repository structure","slug":"repository-structure"}],"relativePath":"guide/development.md"}'),l={name:"guide/development.md"},o=a(`<h1 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h1><p>Each model has its own dependency structure managed by <code>poetry</code>. For details check the models&#39; readmes (<a href="/docs/lg/"><code>lg</code></a>, <a href="/docs/trf/"><code>trf</code></a>, <a href="/docs/lg_vectors/"><code>vectors</code></a>).</p><h2 id="repository-structure" tabindex="-1">Repository structure <a class="header-anchor" href="#repository-structure" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .github            -- Github configuration files</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 hu_core_news_lg    -- SpaCy 3.x project files for building the large model</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 configs        -- SpaCy pipeline configuration files</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 meta.json      -- model metadata</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.lock    -- Poetry lock file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.toml    -- Poetry configs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 project.lock   -- Auto-generated project script</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 project.yml    -- SpaCy Project file describing steps needed to build the model</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 pyproject.toml -- Python project definition file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 CHANGELOG.md   -- Model changelog</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md      -- Instructions on building a model from scratch</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 hu_core_news_trf   -- Spacy 3.x project files for building the transformer based model</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 configs        -- SpaCy pipeline configuration files</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 meta.json      -- model metadata</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.lock    -- Poetry lock file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.toml    -- Poetry configs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 project.lock   -- Auto-generated project script</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 project.yml    -- SpaCy Project file describing steps needed to build the model</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 pyproject.toml -- Python project definition file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 CHANGELOG.md   -- Model changelog</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md      -- Instructions on building a model from scratch</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 hu_vectors         -- Spacy 3.x project files for building word vectors</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 configs        -- SpaCy pipeline configuration files</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.lock    -- Poetry lock file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.toml    -- Poetry configs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 project.lock   -- Auto-generated project script</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 project.yml    -- SpaCy Project file describing steps needed to build the model</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 pyproject.toml -- Python project definition file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 CHANGELOG.md   -- Model changelog</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md      -- Instructions on building a model from scratch</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 huspacy            -- subproject for the PyPI distributable package</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 huspacy        -- huspacy python package</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 test           -- huspacy tests</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.lock    -- Poetry lock file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 poetry.toml    -- Poetry configs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 pyproject.toml -- Python project definition file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 CHANGELOG.md   -- HuSpaCy changelog</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 README.md      -&gt; ../README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 scripts            -- CLI scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 LICENSE            -- License file</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 README.md          -- This file</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),p=[o];function t(c,r,i,d,A,C){return e(),n("div",null,p)}var m=s(l,[["render",t]]);export{f as __pageData,m as default};
