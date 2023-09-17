/* empty css                         */import { A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, I as InvalidImageService, a as ExpectedImageOptions, c as createAstro, b as createComponent, d as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, C as CollectionDoesNotExistError, f as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, j as renderComponent, u as unescapeHTML, F as Fragment, k as renderSlot, l as renderHead } from '../astro_2532d380.mjs';
import 'clsx';
import { optimize } from 'svgo';
import exifr from 'exifr';
/* empty css                                *//* empty css                                                       *//* empty css                                                                  */
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function startsWithDotDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  const c3 = path[2];
  return c1 === "." && c2 === "." && c3 === "/";
}
function startsWithDotSlash(path) {
  const c1 = path[0];
  const c2 = path[1];
  return c1 === "." && c2 === "/";
}
function isRelativePath(path) {
  return startsWithDotDotSlash(path) || startsWithDotSlash(path);
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}

const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const baseService = {
  validateOptions(options) {
    if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(
          JSON.stringify(options.src),
          typeof options.src,
          JSON.stringify(options, (_, v) => v === void 0 ? null : v)
        )
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
    }
    if (!options.format) {
      options.format = "webp";
    }
    return options;
  },
  getHTMLAttributes(options) {
    let targetWidth = options.width;
    let targetHeight = options.height;
    if (isESMImportedImage(options.src)) {
      const aspectRatio = options.src.width / options.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = options.src.width;
        targetHeight = options.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/hello-astro/", "/_image");
    return `${imageEndpoint}?${searchParams}`;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q")
    };
    return transform;
  }
};

function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}

function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src))
    return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../sharp_c65bdb10.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && // If `getURL` returned the same URL as the user provided, it means the service doesn't need to do anything
  !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions);
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    attributes: service.getHTMLAttributes !== void 0 ? service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$n = createAstro("https://hellotham.github.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro@3.1.0/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      throw new AstroError({
        ...CollectionDoesNotExistError,
        message: CollectionDoesNotExistError.message(collection)
      });
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function createGetEntries(getEntry) {
  return async function getEntries(entries) {
    return Promise.all(entries.map((e) => getEntry(e)));
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/author/chris-tham.md": () => import('../chris-tham_cb89b4cd.mjs'),"/src/content/author/default.md": () => import('../default_73e7366c.mjs'),"/src/content/author/matt-cone.md": () => import('../matt-cone_9ff11910.mjs'),"/src/content/blog/2000-01-01-template.md": () => import('../2000-01-01-template_15193815.mjs'),"/src/content/blog/2022-08-09-mit-licence.md": () => import('../2022-08-09-mit-licence_dd3f7a91.mjs'),"/src/content/blog/2022-08-10-markdown-cheat-sheet.md": () => import('../2022-08-10-markdown-cheat-sheet_a489ac17.mjs'),"/src/content/blog/2022-08-19-sample-carousel.mdx": () => import('../2022-08-19-sample-carousel_9ccfcb01.mjs'),"/src/content/blog/2022-08-20-mermaid-diagrams.md": () => import('../2022-08-20-mermaid-diagrams_36e7cfad.mjs'),"/src/content/blog/2022-08-21-sample-gallery-post-mdx.mdx": () => import('../2022-08-21-sample-gallery-post-mdx_518be986.mjs'),"/src/content/blog/2022-08-22-sample-gallery-post-markdown.md": () => import('../2022-08-22-sample-gallery-post-markdown_cf7074ec.mjs'),"/src/content/blog/2022-08-22-sample-images-post.md": () => import('../2022-08-22-sample-images-post_fd58f4e0.mjs'),"/src/content/blog/2022-08-23-sample-mdx-post.mdx": () => import('../2022-08-23-sample-mdx-post_61241a1e.mjs'),"/src/content/blog/2022-08-24-math-equations.md": () => import('../2022-08-24-math-equations_ed2cad9e.mjs'),"/src/content/blog/2022-08-25-plantuml-diagrams.md": () => import('../2022-08-25-plantuml-diagrams_684cdb37.mjs'),"/src/content/blog/2022-08-26-markmap-diagrams.md": () => import('../2022-08-26-markmap-diagrams_c7127423.mjs'),"/src/content/blog/2023-06-10-sample-gallery-post-markdoc.mdoc": () => import('../2023-06-10-sample-gallery-post-markdoc_df3cca15.mjs'),"/src/content/blog/2023-06-11-how-to-use.md": () => import('../2023-06-11-how-to-use_e03e5ab9.mjs'),"/src/content/blog/2023-06-13-roadmap.md": () => import('../2023-06-13-roadmap_c6cb154a.mjs'),"/src/content/category/general.md": () => import('../general_92f9d94c.mjs'),"/src/content/category/information.md": () => import('../information_b9630f10.mjs'),"/src/content/category/instructions.md": () => import('../instructions_83842a69.mjs'),"/src/content/doc/introduction.md": () => import('../introduction_8d6a1a8b.mjs'),"/src/content/doc/page-2.md": () => import('../page-2_ff4f2255.mjs'),"/src/content/doc/page-3.md": () => import('../page-3_b7665e9b.mjs'),"/src/content/doc/page-4.md": () => import('../page-4_90c7d555.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/social/email.json": () => import('../email_eb33ec05.mjs'),"/src/content/social/facebook.json": () => import('../facebook_7359b271.mjs'),"/src/content/social/github.json": () => import('../github_92e9dcc3.mjs'),"/src/content/social/instagram.json": () => import('../instagram_d041184e.mjs'),"/src/content/social/linkedin.json": () => import('../linkedin_a8de072b.mjs'),"/src/content/social/phone.json": () => import('../phone_f1f6fac2.mjs'),"/src/content/social/twitter.json": () => import('../twitter_7a74a660.mjs')

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"author":{"type":"content","entries":{"chris-tham":"/src/content/author/chris-tham.md","default":"/src/content/author/default.md","matt-cone":"/src/content/author/matt-cone.md"}},"blog":{"type":"content","entries":{"2000-01-01-template":"/src/content/blog/2000-01-01-template.md","2022-08-09-mit-licence":"/src/content/blog/2022-08-09-mit-licence.md","2022-08-10-markdown-cheat-sheet":"/src/content/blog/2022-08-10-markdown-cheat-sheet.md","2022-08-19-sample-carousel":"/src/content/blog/2022-08-19-sample-carousel.mdx","2022-08-20-mermaid-diagrams":"/src/content/blog/2022-08-20-mermaid-diagrams.md","2022-08-21-sample-gallery-post-mdx":"/src/content/blog/2022-08-21-sample-gallery-post-mdx.mdx","2022-08-22-sample-gallery-post-markdown":"/src/content/blog/2022-08-22-sample-gallery-post-markdown.md","2022-08-22-sample-images-post":"/src/content/blog/2022-08-22-sample-images-post.md","2022-08-23-sample-mdx-post":"/src/content/blog/2022-08-23-sample-mdx-post.mdx","2022-08-24-math-equations":"/src/content/blog/2022-08-24-math-equations.md","2022-08-25-plantuml-diagrams":"/src/content/blog/2022-08-25-plantuml-diagrams.md","2022-08-26-markmap-diagrams":"/src/content/blog/2022-08-26-markmap-diagrams.md","2023-06-10-sample-gallery-post-markdoc":"/src/content/blog/2023-06-10-sample-gallery-post-markdoc.mdoc","2023-06-11-how-to-use":"/src/content/blog/2023-06-11-how-to-use.md","2023-06-13-roadmap":"/src/content/blog/2023-06-13-roadmap.md"}},"social":{"type":"data","entries":{"email":"/src/content/social/email.json","facebook":"/src/content/social/facebook.json","github":"/src/content/social/github.json","instagram":"/src/content/social/instagram.json","linkedin":"/src/content/social/linkedin.json","phone":"/src/content/social/phone.json","twitter":"/src/content/social/twitter.json"}},"category":{"type":"content","entries":{"general":"/src/content/category/general.md","information":"/src/content/category/information.md","instructions":"/src/content/category/instructions.md"}},"doc":{"type":"content","entries":{"introduction":"/src/content/doc/introduction.md","page-2":"/src/content/doc/page-2.md","page-3":"/src/content/doc/page-3.md","page-4":"/src/content/doc/page-4.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/author/chris-tham.md": () => import('../chris-tham_8b9f3924.mjs'),"/src/content/author/default.md": () => import('../default_c122e3b6.mjs'),"/src/content/author/matt-cone.md": () => import('../matt-cone_14faebfa.mjs'),"/src/content/blog/2000-01-01-template.md": () => import('../2000-01-01-template_ea7ab09f.mjs'),"/src/content/blog/2022-08-09-mit-licence.md": () => import('../2022-08-09-mit-licence_04914798.mjs'),"/src/content/blog/2022-08-10-markdown-cheat-sheet.md": () => import('../2022-08-10-markdown-cheat-sheet_13405a36.mjs'),"/src/content/blog/2022-08-19-sample-carousel.mdx": () => import('../2022-08-19-sample-carousel_6d7efd10.mjs'),"/src/content/blog/2022-08-20-mermaid-diagrams.md": () => import('../2022-08-20-mermaid-diagrams_a7c75624.mjs'),"/src/content/blog/2022-08-21-sample-gallery-post-mdx.mdx": () => import('../2022-08-21-sample-gallery-post-mdx_821749ee.mjs'),"/src/content/blog/2022-08-22-sample-gallery-post-markdown.md": () => import('../2022-08-22-sample-gallery-post-markdown_52780c75.mjs'),"/src/content/blog/2022-08-22-sample-images-post.md": () => import('../2022-08-22-sample-images-post_706c8390.mjs'),"/src/content/blog/2022-08-23-sample-mdx-post.mdx": () => import('../2022-08-23-sample-mdx-post_cf3a0063.mjs'),"/src/content/blog/2022-08-24-math-equations.md": () => import('../2022-08-24-math-equations_1b799c33.mjs'),"/src/content/blog/2022-08-25-plantuml-diagrams.md": () => import('../2022-08-25-plantuml-diagrams_ddf47315.mjs'),"/src/content/blog/2022-08-26-markmap-diagrams.md": () => import('../2022-08-26-markmap-diagrams_c6d487fa.mjs'),"/src/content/blog/2023-06-10-sample-gallery-post-markdoc.mdoc": () => import('../2023-06-10-sample-gallery-post-markdoc_879c0127.mjs'),"/src/content/blog/2023-06-11-how-to-use.md": () => import('../2023-06-11-how-to-use_54c1cb54.mjs'),"/src/content/blog/2023-06-13-roadmap.md": () => import('../2023-06-13-roadmap_b91721a5.mjs'),"/src/content/category/general.md": () => import('../general_a2a4ba15.mjs'),"/src/content/category/information.md": () => import('../information_88409bc3.mjs'),"/src/content/category/instructions.md": () => import('../instructions_0a8e41de.mjs'),"/src/content/doc/introduction.md": () => import('../introduction_2b085cc4.mjs'),"/src/content/doc/page-2.md": () => import('../page-2_ae6b2955.mjs'),"/src/content/doc/page-3.md": () => import('../page-3_13ba8a70.mjs'),"/src/content/doc/page-4.md": () => import('../page-4_89de14d8.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntries = createGetEntries(getEntry);

const Logo = {"src":"/hello-astro/_astro/astro-icon-dark.a03f5ea3.svg","width":63,"height":79,"format":"svg"};

const astroIconDark = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Logo
}, Symbol.toStringTag, { value: 'Module' }));

const LogoImage = {"src":"/hello-astro/_astro/astro-logo-dark.af92bf69.png","width":600,"height":157,"format":"png"};

const astroLogoDark = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: LogoImage
}, Symbol.toStringTag, { value: 'Module' }));

const coverSVG$2 = {"src":"/hello-astro/_astro/undraw_design_inspiration.b848cbe4.svg","width":979,"height":790.20144,"format":"svg"};

const undraw_design_inspiration = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG$2
}, Symbol.toStringTag, { value: 'Module' }));

const coverSVG$1 = {"src":"/hello-astro/_astro/undraw_my_feed.00e14bd4.svg","width":856.36301,"height":548.70399,"format":"svg"};

const undraw_my_feed$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG$1
}, Symbol.toStringTag, { value: 'Module' }));

const socialImage$1 = {"src":"/hello-astro/_astro/undraw_my_feed.f6607d7c.png","width":1096,"height":709,"format":"png"};

const undraw_my_feed = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage$1
}, Symbol.toStringTag, { value: 'Module' }));

const SiteMetadata = {
  title: "Hello Astro",
  description: "An Astro starter for corporate/marketing/blog websites.",
  author: {
    name: "Chris Tham",
    twitter: "@chris1tham",
    url: "https://christham.net",
    email: "chris@christham.net",
    summary: "Outrageous actualiser."
  },
  org: {
    name: "Hello Tham",
    twitter: "@hellothamcom",
    url: "https://hellotham.com",
    email: "info@hellotham.com",
    summary: "Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design."
  },
  location: "Rivendell, Middle Earth",
  latlng: [-33.86785, 151.20732],
  repository: "https://github.com/hellotham/hello-astro",
  buildTime: /* @__PURE__ */ new Date()
};
const NavigationLinks = [
  { name: "Home", href: "" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
  { name: "Blog", href: "blog" },
  { name: "Docs", href: "doc/introduction" }
];
const PAGE_SIZE = 6;
const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`;
const COMMUNITY_INVITE_URL = `https://astro.build/chat`;
const SIDEBAR = {
  "Section Header": [
    { text: "Introduction", link: "doc/introduction" },
    { text: "Page 2", link: "doc/page-2" },
    { text: "Page 3", link: "doc/page-3" }
  ],
  "Another Section": [{ text: "Page 4", link: "doc/page-4" }]
};

const $$Astro$m = createAstro("https://hellotham.github.io");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro@3.1.0/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$l = createAstro("https://hellotham.github.io");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$k = createAstro("https://hellotham.github.io");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$j = createAstro("https://hellotham.github.io");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$i = createAstro("https://hellotham.github.io");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$h = createAstro("https://hellotham.github.io");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$g = createAstro("https://hellotham.github.io");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$f = createAstro("https://hellotham.github.io");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$e = createAstro("https://hellotham.github.io");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-seo@0.8.0/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$d = createAstro("https://hellotham.github.io");
const $$Seo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Seo;
  const { frontmatter } = Astro2.props;
  const social = await getCollection("social");
  const siteurl = new URL("/hello-astro/", Astro2.url);
  const type = Astro2.url.toString().includes("blog") ? "post" : "page";
  const year = SiteMetadata.buildTime.getFullYear();
  const image = await getImage({
    src: frontmatter.socialImage || frontmatter.coverImage || socialImage$1,
    width: 1200,
    format: "jpg"
  });
  const logo = LogoImage;
  const publishDate = new Date(frontmatter.publishDate);
  const openGraph = {
    basic: {
      title: frontmatter.title,
      type: "website",
      image: new URL(image.src, Astro2.url).toString()
    },
    optional: {
      description: frontmatter.description,
      siteName: SiteMetadata.title
    },
    image: {
      alt: frontmatter.title,
      height: image.attributes.height,
      width: image.attributes.width
    },
    article: {
      author: frontmatter.author,
      publishedTime: SiteMetadata.buildTime.toISOString(),
      tags: frontmatter.tags
    }
  };
  const twitter = {
    card: frontmatter.socialImage ? "summary_large_image" : "summary",
    site: SiteMetadata.org.twitter,
    creator: SiteMetadata.author.twitter
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    about: {
      "@id": new URL("about", siteurl).toString()
    },
    audience: "public",
    abstract: SiteMetadata.description,
    author: {
      "@id": SiteMetadata.author.url
    },
    copyrightHolder: {
      "@id": SiteMetadata.org.url
    },
    copyrightYear: year,
    creator: {
      "@id": SiteMetadata.author.url
    },
    description: SiteMetadata.description,
    image: {
      "@type": "ImageObject",
      url: new URL(image.src, Astro2.url).toString()
    },
    inLanguage: "en",
    name: SiteMetadata.title,
    publisher: {
      "@id": SiteMetadata.org.url
    },
    url: siteurl.toString()
  };
  const organization = {
    "@context": "https://schema.org",
    "@id": SiteMetadata.org.url,
    "@type": "Organization",
    address: SiteMetadata.location,
    contactPoint: {
      "@type": "ContactPoint",
      email: SiteMetadata.org.email
    },
    description: SiteMetadata.org.summary,
    email: SiteMetadata.org.email,
    founder: {
      "@id": SiteMetadata.author.email
    },
    location: SiteMetadata.location,
    image: {
      "@type": "ImageObject",
      url: new URL(logo.src, siteurl).toString()
    },
    logo: {
      "@type": "ImageObject",
      url: new URL(logo.src, siteurl).toString()
    },
    name: SiteMetadata.org.name,
    sameAs: Object.values(social.map((social2) => social2.data.link)),
    url: SiteMetadata.org.url
  };
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    itemListElement: [
      {
        "@type": "ListItem",
        item: {
          "@id": siteurl.toString(),
          name: SiteMetadata.title
        },
        position: 1
      },
      {
        "@type": "ListItem",
        item: {
          "@id": Astro2.url.toString(),
          name: frontmatter.title
        },
        position: 2
      }
    ],
    numberOfItems: 2,
    name: "Breadcrumbs"
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": SiteMetadata.author.url,
    name: SiteMetadata.author.name,
    url: SiteMetadata.author.url,
    worksFor: {
      "@id": SiteMetadata.org.url
    }
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    articleSection: type,
    author: {
      "@id": SiteMetadata.author.url
    },
    copyrightHolder: {
      "@id": SiteMetadata.org.url
    },
    copyrightYear: year,
    creativeWorkStatus: "Published",
    creator: {
      "@id": SiteMetadata.author.url
    },
    dateCreated: publishDate.toISOString(),
    dateModified: SiteMetadata.buildTime.toISOString(),
    datePublished: publishDate.toISOString(),
    description: frontmatter.description,
    headline: frontmatter.title,
    keywords: frontmatter.tags && frontmatter.tags.join(", "),
    image: {
      "@type": "ImageObject",
      url: new URL(image.src, Astro2.url).toString()
    },
    inLanguage: "en",
    mainEntityOfPage: SiteMetadata.org.url,
    name: frontmatter.title,
    publisher: {
      "@id": SiteMetadata.org.url
    },
    url: siteurl.toString()
  };
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>"])), renderComponent($$result, "SEO", $$SEO, { "title": SiteMetadata.title + " | " + frontmatter.title, "description": frontmatter.description, "openGraph": openGraph, "twitter": twitter }), unescapeHTML(JSON.stringify(website)), unescapeHTML(JSON.stringify(organization)), unescapeHTML(JSON.stringify(breadcrumbList)), unescapeHTML(JSON.stringify(person)), unescapeHTML(JSON.stringify(article)));
}, "/home/bibi/booboo/vrc_site/src/components/seo.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$c = createAstro("https://hellotham.github.io");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$b = createAstro("https://hellotham.github.io");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$a = createAstro("https://hellotham.github.io");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$9 = createAstro("https://hellotham.github.io");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/home/bibi/booboo/vrc_site/node_modules/.pnpm/astro-icon@0.8.1/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro("https://hellotham.github.io");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script src="https://unpkg.com/lunr/lunr.min.js"><\/script>', "<div", '><div class="flex justify-center"><div class="w-48"><div class="input-group relative flex w-full items-stretch"><input type="search" x-model="searchText" class="form-control relative m-0 block w-full min-w-0 max-w-xs flex-auto rounded border border-solid border-purple-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-500 transition ease-in-out focus:border-purple-500 focus:text-gray-700 focus:outline-none dark:border-purple-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-purple-600 dark:focus:text-gray-100" id="lunrsearch" name="q" maxlength="255" value="" placeholder="Search" aria-label="Search" aria-describedby="lunrbutton"><button class="btn inline-block items-center rounded bg-purple-600 px-2 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg" type="button" name="search" id="lunrbutton" x-on:click="lunr_search(searchText); searchResults = true" aria-label="Search Button"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></button></div></div></div><div x-show="searchResults" x-cloak class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true"><div x-show="searchResults" x-transition:enter="ease-in-out duration-500" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in-out duration-500" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div><div class="fixed inset-0 overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"><div x-show="searchResults" x-transition:enter="transform transition ease-in-out duration-500 sm:duration-700" x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transform transition ease-in-out duration-500 sm:duration-700" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" class="pointer-events-auto relative w-screen max-w-md"><div x-show="searchResults" x-transition:enter="ease-in-out duration-500" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in-out duration-500" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"><button type="button" class="rounded-md text-purple-300 hover:text-pink-300 focus:outline-none focus:ring-2 focus:ring-white" x-on:click="searchResults = false"><span class="sr-only">Close panel</span>', `</button></div><div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-800"><div class="px-4 sm:px-6"><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100" id="lunrsearchtitle" class="modal-title">
Search results
</h2></div><div id="lunrsearchmodal" class="relative mt-6 flex-1 px-4 sm:px-6"><div id="lunrsearchresults" class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"><ul></ul></div></div></div></div></div></div></div></div></div><script>
  // Get the input field
  var input = document.getElementById('lunrsearch')

  // Execute a function when the user presses a key on the keyboard
  input.addEventListener('keypress', function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === 'Enter') {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      document.getElementById('lunrbutton').click()
    }
  })
<\/script>`])), maybeRenderHead(), addAttribute(`
{
  searchResults: false,
  searchText: '',
  idx: null,
  doc: null,
  async lunr_search(term) {
    if (!this.doc) {
      const res = await fetch("/hello-astro/" + 'search-docs.json')
      this.doc = await res.json()
    }
    if (!this.idx) {
      const res = await fetch("/hello-astro/" + 'search-index.json')
      const data = await res.json()
      this.idx = lunr.Index.load(data)
    }
    document.getElementById('lunrsearchresults').innerHTML =
      '<ul class="relative grid gap-6 bg-white dark:bg-gray-700 dark:text-gray-100 px-5 py-6 sm:gap-8 sm:p-8"></ul>'
    if (term) {
      document.getElementById('lunrsearchtitle').innerHTML =
        "Search results for '" + term + "'"
      //put results on the screen.
      const results = this.idx.search(term)
      if (results.length > 0) {
        //if results
        for (var i = 0; i < results.length; i++) {
          // more statements
          const url = results[i]['ref']
          const doc = this.doc.filter(doc => doc.url == url)[0]
          document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML =
            document.querySelectorAll('#lunrsearchresults ul')[0]
              .innerHTML +
            '<li class="-m-3 p-3 flex items-start rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900"><a href="' +
            url +
            '"><p class="text-base font-medium text-gray-900 dark:text-gray-100">' +
            doc.title +
            '<p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">' +
            doc.description +
            '</p></a></li>'
        }
      } else {
        document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML =
          'No results found...'
      }
    }

    return false
  },
}
`, "x-data"), renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "pack": "heroicons-outline", "name": "x" }));
}, "/home/bibi/booboo/vrc_site/src/components/search.astro", void 0);

const $$Astro$7 = createAstro("https://hellotham.github.io");
const $$Theme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Theme;
  return renderTemplate`${maybeRenderHead()}<div class="relative ml-3" x-data="{ themeOpen: false }"><div><button type="button" class="dark:purple-700 inline-flex w-full justify-center rounded-md border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-300 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-offset-purple-700" id="menu-button" aria-expanded="true" aria-haspopup="true" x-on:click="themeOpen = !themeOpen">
Light/Dark
${renderComponent($$result, "Icon", $$Icon, { "class": "-mr-1 ml-2 h-5 w-5", "aria-hidden": "true", "pack": "heroicons-solid", "name": "chevron-down" })}</button></div><ul x-show="themeOpen" x-cloak x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3"><li class="relative cursor-default select-none py-2 pl-2 pr-4 text-gray-900 hover:bg-purple-600 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-purple-300 dark:hover:text-gray-900" id="listbox-option-0" role="option" x-on:click="localStorage.removeItem('theme'); window.location.reload()"><div class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "pack": "heroicons-outline", "name": "star" })}<!-- Selected: "font-semibold", Not Selected: "font-normal" --><span class="ml-1 block truncate" x-bind:class="localStorage.theme ? 'font-normal' : 'font-semibold'">System</span></div><span x-show="!localStorage.theme" class="absolute inset-y-0 right-0 flex items-center pr-4 text-purple-600 hover:text-white"><!-- Heroicon name: solid/check -->${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "pack": "heroicons-solid", "name": "check" })}</span></li><li class="relative cursor-default select-none py-2 pl-2 pr-4 text-gray-900 hover:bg-purple-600 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-purple-300 dark:hover:text-gray-900" id="listbox-option-0" role="option" x-on:click="localStorage.theme = 'light'; window.location.reload()"><div class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "pack": "heroicons-outline", "name": "sun" })}<!-- Selected: "font-semibold", Not Selected: "font-normal" --><span class="ml-1 block truncate" x-bind:class="localStorage.theme == 'light' ? 'font-semibold' : 'font-normal'">Light</span></div><span x-show="localStorage.theme == 'light'" class="absolute inset-y-0 right-0 flex items-center pr-4 text-purple-600 hover:text-white">${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "pack": "heroicons-solid", "name": "check" })}</span></li><li class="relative cursor-default select-none py-2 pl-2 pr-4 text-gray-900 hover:bg-purple-600 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-purple-300 dark:hover:text-gray-900" id="listbox-option-0" role="option" x-on:click="localStorage.theme = 'dark'; window.location.reload()"><div class="flex items-center">${renderComponent($$result, "Icon", $$Icon, { "class": "h-6 w-6", "pack": "heroicons-solid", "name": "moon" })}<!-- Selected: "font-semibold", Not Selected: "font-normal" --><span class="ml-1 block truncate" x-bind:class="localStorage.theme == 'dark' ? 'font-semibold' : 'font-normal'">Dark</span></div><span x-show="localStorage.theme == 'dark'" class="absolute inset-y-0 right-0 flex items-center pr-4 text-purple-600 hover:text-white">${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "pack": "heroicons-solid", "name": "check" })}</span></li></ul></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/theme.astro", void 0);

const $$Astro$6 = createAstro("https://hellotham.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-16 w-full"><nav x-data="{ isOpen: false }" class="dark:bg-gray-800"><div class="fixed z-50 mx-auto w-full border-b-2 border-purple-300 bg-white px-2 dark:border-purple-600 dark:bg-gray-800 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center lg:hidden"><!-- Mobile menu button--><button type="button" x-on:click="isOpen = !isOpen" class="inline-flex items-center justify-center rounded-md p-2 text-purple-600 hover:bg-purple-200 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-300 dark:text-purple-300 dark:hover:bg-purple-800 dark:hover:text-pink-300 dark:focus:ring-purple-800" aria-controls="mobile-menu" aria-expanded="false"><span class="sr-only">Open main menu</span>${renderComponent($$result, "Icon", $$Icon, { "x-bind:class": "{'hidden': isOpen, 'block': !isOpen }", "class": "block h-6 w-6", "aria-hidden": "true", "pack": "heroicons-outline", "name": "menu" })}${renderComponent($$result, "Icon", $$Icon, { "x-bind:class": "{'block': isOpen, 'hidden': !isOpen }", "class": "hidden h-6 w-6", "aria-hidden": "true", "pack": "heroicons-outline", "name": "x" })}</button></div><div class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start"><div class="flex flex-shrink-0 items-center"><img class="block h-8 w-8 dark:bg-gray-100"${addAttribute(Logo.src, "src")} alt="Logo"></div><div class="hidden lg:mx-4 lg:block"><div class="flex space-x-2">${NavigationLinks.map((item) => renderTemplate`<a${addAttribute("/hello-astro/" + item.href, "href")}${addAttribute(
    (item.href.length > 0 && Astro2.url.toString().includes(item.href) ? "bg-purple-200 text-pink-600 dark:bg-purple-800 dark:text-pink-300" : "text-purple-600 hover:bg-purple-200 hover:text-pink-600 dark:text-purple-200 dark:hover:bg-purple-800 dark:hover:text-pink-300") + " rounded-md px-2 py-2 text-lg font-medium",
    "class"
  )}${addAttribute(
    item.href.length > 0 && Astro2.url.toString().includes(item.href) ? "page" : void 0,
    "aria-current"
  )}>${item.name}</a>`)}</div></div></div><div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">${renderComponent($$result, "Search", $$Search, {})}${renderComponent($$result, "Theme", $$Theme, {})}<!-- Right nav --></div></div></div><!-- Mobile menu, show/hide based on menu state. --><div x-show="isOpen" x-cloak x-transition:enter="transition ease-out duration-100 transform" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-75 transform" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute inset-x-0 top-16 z-50" id="mobile-menu"><div class="flex justify-center border-b-2 border-t-2 border-purple-300 bg-gray-100 px-4 py-2 font-semibold dark:border-purple-600 dark:bg-gray-800">${NavigationLinks.map((item) => renderTemplate`<a${addAttribute("/hello-astro/" + item.href, "href")}${addAttribute([
    item.href.length > 0 && Astro2.url.toString().includes(item.href) ? "bg-purple-200 text-pink-600 dark:bg-purple-800 dark:text-pink-300" : "text-purple-600 hover:bg-purple-200 hover:text-pink-600 dark:text-purple-200 dark:hover:bg-purple-800 dark:hover:text-pink-300",
    " px-2"
  ], "class:list")}${addAttribute(
    item.href.length > 0 && Astro2.url.toString().includes(item.href) ? "page" : void 0,
    "aria-current"
  )}>${item.name}</a>`)}</div></div></nav></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/header.astro", void 0);

const $$Astro$5 = createAstro("https://hellotham.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const social = await getCollection("social");
  return renderTemplate`${maybeRenderHead()}<div class="h-24 lg:h-16"></div><footer class="text-gray-600 dark:text-gray-400"><div class="fixed inset-x-0 bottom-0 z-20 flex w-full flex-col items-center border-t-2 border-purple-300 bg-gray-100 px-4 py-1 dark:border-purple-600 dark:bg-gray-800 lg:flex-row lg:px-8 lg:py-4"><span class="flex flex-none flex-row items-center"><a class="title-font dark:text:gray-100 flex items-center justify-center font-medium text-gray-900 lg:justify-start"${addAttribute("/hello-astro/", "href")}><img${addAttribute(Logo.src, "src")} alt="Footer Logo" class="h-6 w-6 dark:bg-gray-100" loading="lazy"><span class="sr-only">Logo</span></a><p class="ml-2 border-l-2 border-purple-300 py-1 pl-2 text-sm text-gray-600 dark:border-purple-600 dark:text-gray-300">
© ${( new Date()).getFullYear()} MIT licence
<a href="https://hellotham.com" class="ml-1 text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300" rel="noopener noreferrer" target="_blank">
Hello Tham Pty Ltd
</a></p></span><span class="flex flex-none flex-row items-center"><p class="text-sm text-gray-600 dark:text-gray-300 lg:ml-4 lg:border-l-2 lg:border-purple-300 lg:py-1 lg:pl-4 dark:lg:border-purple-600"><a${addAttribute("/hello-astro/" + "privacy", "href")} class="ml-1 text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300">
Privacy Policy
</a></p><p class="ml-4 border-l-2 border-purple-300 py-1 pl-4 text-sm text-gray-600"><a${addAttribute("/hello-astro/" + "rss.xml", "href")} class="ml-1 text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300" rel="noopener noreferrer" target="_blank">
RSS
</a></p><p class="ml-4 border-l-2 border-purple-300 py-1 pl-4 text-sm text-gray-600 dark:text-gray-300"><a${addAttribute("/hello-astro/" + "sitemap-index.xml", "href")} class="ml-1 text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300" rel="noopener noreferrer" target="_blank">
Sitemap
</a></p></span><span class="mt-2 inline-flex grow justify-center lg:ml-auto lg:mt-0 lg:justify-end">${social.map(
    (s) => s.data.link ? renderTemplate`<a${addAttribute(s.data.link, "href")} class="ml-3 text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300" rel="noopener noreferrer" target="_blank">${renderComponent($$result, "Icon", $$Icon, { "pack": "bi", "name": s.data.icon, "class": " h-5 w-5" })}<span class="sr-only">${s.data.name}</span></a>` : ""
  )}</span></div></footer>`;
}, "/home/bibi/booboo/vrc_site/src/components/footer.astro", void 0);

const __vite_glob_0_0 = {"src":"/hello-astro/_astro/Astronaut.359140b0.jpeg","width":1707,"height":2560,"format":"jpg","orientation":1};

const Astronaut = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_0
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_glob_0_1 = {"src":"/hello-astro/_astro/Ferry.fb9449b6.jpeg","width":2560,"height":1707,"format":"jpg","orientation":1};

const Ferry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_1
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_glob_0_2 = {"src":"/hello-astro/_astro/Walk.6ab73178.jpeg","width":1920,"height":2560,"format":"jpg","orientation":1};

const Walk = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_2
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_glob_0_3 = {"src":"/hello-astro/_astro/Cowarra-Dam.e936628b.jpeg","width":2560,"height":1707,"format":"jpg","orientation":1};

const CowarraDam = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_3
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_glob_0_4 = {"src":"/hello-astro/_astro/Mayfield-Garden.af199b8b.jpeg","width":2560,"height":1706,"format":"jpg","orientation":1};

const MayfieldGarden = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_4
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_glob_0_5 = {"src":"/hello-astro/_astro/Mt-Tomah.20f15952.jpeg","width":2560,"height":1707,"format":"jpg","orientation":1};

const MtTomah = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_5
}, Symbol.toStringTag, { value: 'Module' }));

const __vite_glob_0_6 = {"src":"/hello-astro/_astro/Oberon-Dam.4616bb31.jpeg","width":2560,"height":1707,"format":"jpg","orientation":1};

const OberonDam = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: __vite_glob_0_6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://hellotham.github.io");
const $$Lightbox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Lightbox;
  const { id, images, exifs } = Astro2.props;
  const imagetitles = images.map((image) => image.src.split("/").reverse()[0].split(".")[0]);
  return renderTemplate`${renderComponent($$result, "lightbox-inner", "lightbox-inner", { "data-id": id, "class": "astro-7mmzceex" }, { "default": () => renderTemplate`${images.map((image, i) => renderTemplate`${maybeRenderHead()}<figure itemscope itemtype="http://schema.org/ImageObject" class="my-1 inline-block rounded bg-gray-300 text-center text-sm italic text-gray-800 shadow-lg shadow-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:shadow-black lg:my-2 astro-7mmzceex"><a${addAttribute(image.src, "href")} itemprop="contentUrl"${addAttribute(image.width, "data-pswp-width")}${addAttribute(image.height, "data-pswp-height")} class="astro-7mmzceex">${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imagetitles[i], "width": 600, "height": image.height * 600 / image.width, "format": "webp", "class": "rounded astro-7mmzceex" })}<span class="pswp-caption-content astro-7mmzceex">${imagetitles[i]}</span></a><figcaption itemprop="caption description" class="rounded astro-7mmzceex">${imagetitles[i]}${exifs && exifs[i] && renderTemplate`<span class="astro-7mmzceex">${" (" + exifs[i].Make + " " + exifs[i].Model + ")"}</span>`}</figcaption></figure>`)}` })}`;
}, "/home/bibi/booboo/vrc_site/src/components/lightbox.astro", void 0);

const $$Astro$3 = createAstro("https://hellotham.github.io");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { folder } = Astro2.props;
  const imageFiles = /* #__PURE__ */ Object.assign({"../assets/gallery/apollo11/Astronaut.jpeg": __vite_glob_0_0,"../assets/gallery/apollo11/Ferry.jpeg": __vite_glob_0_1,"../assets/gallery/apollo11/Walk.jpeg": __vite_glob_0_2,"../assets/gallery/carousel/Cowarra-Dam.jpeg": __vite_glob_0_3,"../assets/gallery/carousel/Mayfield-Garden.jpeg": __vite_glob_0_4,"../assets/gallery/carousel/Mt-Tomah.jpeg": __vite_glob_0_5,"../assets/gallery/carousel/Oberon-Dam.jpeg": __vite_glob_0_6


});
  const folderFiles = Object.keys(imageFiles).filter((image) => image.search(folder) >= 0);
  const imageSrcs = folderFiles.map((image) => imageFiles[image]);
  const gallery = "gallery-" + folder;
  const exifs = [];
  for (let i in folderFiles) {
    const exif = await exifr.parse(folderFiles[i].replace("../", "./src/"));
    exifs.push(exif);
  }
  return renderTemplate`${maybeRenderHead()}<p class="text-sm italic text-gray-500 sm:px-2 lg:px-4">
Please click on any photo to view in a lightbox. Use arrow keys or swipe to navigate.
</p><div${addAttribute(gallery, "id")} class="not-prose mx-auto block w-full columns-1 gap-2 sm:columns-2 lg:columns-3 lg:gap-4" itemscope itemtype="http://schema.org/ImageGallery">${renderComponent($$result, "Lightbox", $$Lightbox, { "id": gallery, "images": imageSrcs, "exifs": exifs })}</div>`;
}, "/home/bibi/booboo/vrc_site/src/components/gallery.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;
const $$Astro$2 = createAstro("https://hellotham.github.io");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Base;
  const { frontmatter } = Astro2.props;
  return renderTemplate(_c || (_c = __template([`<html lang="en"><head><meta charset="UTF-8"><meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-eval' 'unsafe-inline'; object-src 'none'"><meta http-equiv="Referrer-Policy" content="no-referrer, strict-origin-when-cross-origin"><meta name="viewport" content="width=device-width"><link rel="icon"`, ' sizes="any"><link rel="icon"', ' type="image/svg+xml"><link rel="apple-touch-icon"', '><link rel="manifest"', '><link rel="sitemap"', '><link rel="alternate" type="application/rss+xml" title="RSS"', '><meta name="generator"', ">", "", "<script>\n      const setDarkMode = () => {\n        if (\n          localStorage.theme === 'dark' ||\n          (!('theme' in localStorage) &&\n            window.matchMedia('(prefers-color-scheme: dark)').matches)\n        ) {\n          document.documentElement.classList.add('dark')\n        } else {\n          document.documentElement.classList.remove('dark')\n        }\n      }\n      setDarkMode() //initial navigation\n      document.addEventListener('astro:after-swap', setDarkMode) // Runs on view transitions navigation\n    <\/script><style>\n      [x-cloak] { display: none !important; }\n      .markmap > svg {\n        width: 100%;\n        height: 400px;\n      }\n      </style>", "", "", '</head><body class="dark:bg-gray-900">', "", "", "", "", "", "", "</body></html>"])), addAttribute(`${Astro2.site}favicon.ico`, "href"), addAttribute(`${Astro2.site}favicon.svg`, "href"), addAttribute(`${Astro2.site}apple-touchicon.png`, "href"), addAttribute(`${Astro2.site}site.webmanifest`, "href"), addAttribute(`${Astro2.site}sitemap-indexxml`, "href"), addAttribute(`${Astro2.site}rss.xml`, "href"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$Seo, { "frontmatter": frontmatter }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), frontmatter.extra?.includes("math") && renderTemplate`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css" integrity="sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkaaFwHlcI" crossorigin="anonymous">`, renderSlot($$result, $$slots["in-head"]), renderHead(), frontmatter.extra?.includes("mermaid") && renderTemplate(_a || (_a = __template([`<script type="module">
          import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs';
          mermaid.initialize({startOnLoad: true});
        <\/script>`]))), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), frontmatter.gallery && renderTemplate`${renderComponent($$result, "Gallery", $$Gallery, { "folder": frontmatter.gallery })}`, renderSlot($$result, $$slots["before-footer"]), renderComponent($$result, "Footer", $$Footer, {}), frontmatter.extra?.includes("markmap") && renderTemplate(_b || (_b = __template(['<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader"><\/script>']))));
}, "/home/bibi/booboo/vrc_site/src/layouts/base.astro", void 0);

const $$Astro$1 = createAstro("https://hellotham.github.io");
const $$Pagehero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagehero;
  const { title, description, coverSVG, coverImage, socialImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-auto h-96 w-full max-w-screen-xl md:my-4"><div class="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-t from-gray-700 xl:rounded-lg"></div>${coverSVG ? renderTemplate`<img${addAttribute(coverSVG.src, "src")}${addAttribute(title, "alt")} class="absolute left-0 top-0 z-0 h-full w-full object-cover">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": coverImage || socialImage || socialImage$1, "alt": title, "class": "absolute left-0 top-0 z-0 h-full w-full object-cover" })}`}<div class="absolute bottom-0 left-0 z-20 p-4"><h2 class="text-4xl font-bold leading-tight text-white">${title}</h2><h2 class="text-xl font-medium italic text-purple-300">${description}</h2>${renderSlot($$result, $$slots["default"])}</div></div>`;
}, "/home/bibi/booboo/vrc_site/src/components/pagehero.astro", void 0);

const coverSVG = {"src":"/hello-astro/_astro/undraw_page_not_found.0f423903.svg","width":860.13137,"height":571.14799,"format":"svg"};

const undraw_page_not_found$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: coverSVG
}, Symbol.toStringTag, { value: 'Module' }));

const socialImage = {"src":"/hello-astro/_astro/undraw_page_not_found.789fdc32.png","width":1100,"height":731,"format":"png"};

const undraw_page_not_found = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: socialImage
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://hellotham.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const frontmatter = {
    title: "404: Not found",
    description: "You just hit a route that doesn't exist... the sadness.",
    coverSVG,
    socialImage,
    publishDate: SiteMetadata.buildTime
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "frontmatter": frontmatter }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "PageHero", $$Pagehero, { "title": frontmatter.title, "description": frontmatter.description, "coverSVG": frontmatter.coverSVG, "socialImage": frontmatter.socialImage })}</header>` })}`;
}, "/home/bibi/booboo/vrc_site/src/pages/404.astro", void 0);

const $$file = "/home/bibi/booboo/vrc_site/src/pages/404.astro";
const $$url = "/hello-astro/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, astroLogoDark as A, undraw_design_inspiration as B, COMMUNITY_INVITE_URL as C, undraw_my_feed$1 as D, undraw_my_feed as E, Astronaut as F, GITHUB_EDIT_URL as G, Ferry as H, CowarraDam as I, MtTomah as J, undraw_page_not_found$1 as K, undraw_page_not_found as L, MayfieldGarden as M, _404 as N, OberonDam as O, PAGE_SIZE as P, SiteMetadata as S, Walk as W, __vite_glob_0_0 as _, getEntry as a, $$Icon as b, getCollection as c, $$Pagehero as d, $$Base as e, coverSVG$1 as f, getEntries as g, $$Lightbox as h, SIDEBAR as i, __vite_glob_0_1 as j, __vite_glob_0_2 as k, __vite_glob_0_3 as l, __vite_glob_0_4 as m, __vite_glob_0_5 as n, __vite_glob_0_6 as o, coverSVG$2 as p, getConfiguredImageService as q, imageConfig as r, socialImage$1 as s, isRemotePath as t, isRemoteAllowed as u, baseService as v, parseQuality as w, $$Gallery as x, isRelativePath as y, astroIconDark as z };
