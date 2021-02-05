import Prismic from "prismic-javascript";
import Link from "next/link";
import { Header, Body } from './components/typography';

import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

export const apiEndpoint = smConfig.apiEndpoint;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = "";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === "post") {
    return "/blog/[uid]";
  }
  return "/";
};

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

export const Router = {
  routes: [{"type":"page","path":"/:uid"}],
  href: (type) => {
    const route = Router.routes.find(r => r.type === type);
    return route && route.href;
  }
};

export const Client = (req = null, options = {}) => (
  Prismic.client(apiEndpoint, Object.assign({ routes: Router.routes }, options))
);

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

export const htmlSerializer = function(type, element, content, children, key) {

  var props = {};

  switch(type) {

    case Elements.heading1: // Heading 1
      return React.createElement(Header, propsWithUniqueKey(props, key), children);

    case Elements.heading2: // Heading 2
      return React.createElement(Header, propsWithUniqueKey(props, key), children);

    case Elements.heading3: // Heading 3
      return React.createElement(Header, propsWithUniqueKey(props, key), children);

    case Elements.heading4: // Heading 4
      return React.createElement(Header, propsWithUniqueKey(props, key), children);

    case Elements.heading5: // Heading 5
      return React.createElement(Header, propsWithUniqueKey(props, key), children);

    case Elements.heading6: // Heading 6
      return React.createElement(Header, propsWithUniqueKey(props, key), children);

    case Elements.paragraph: // Paragraph
      return React.createElement(Body, propsWithUniqueKey(props, key), children);

    case Elements.preformatted: // Preformatted
      return React.createElement('pre', propsWithUniqueKey(props, key), children);

    case Elements.strong: // Strong
      return React.createElement('strong', propsWithUniqueKey(props, key), children);

    case Elements.em: // Emphasis
      return React.createElement('em', propsWithUniqueKey(props, key), children);

    case Elements.listItem: // Unordered List Item
      return React.createElement('li', propsWithUniqueKey(props, key), children);

    case Elements.oListItem: // Ordered List Item
      return React.createElement('li', propsWithUniqueKey(props, key), children);

    case Elements.list: // Unordered List
      return React.createElement('ul', propsWithUniqueKey(props, key), children);

    case Elements.oList: // Ordered List
      return React.createElement('ol', propsWithUniqueKey(props, key), children);

    case Elements.image: // Image
      const linkUrl = element.linkTo ? element.linkTo.url || linkResolver(element.linkTo) : null;
      const linkTarget = (element.linkTo && element.linkTo.target) ? { target: element.linkTo.target } : {};
      const linkRel = linkTarget.target ? { rel: 'noopener' } : {};
      const img = React.createElement('img', { src: element.url , alt: element.alt || '' });
      return React.createElement(
        'p',
        propsWithUniqueKey({ className: [element.label || '', 'block-img'].join(' ') }, key),
        linkUrl ? React.createElement('a', Object.assign({ href: linkUrl }, linkTarget, linkRel), img) : img
      );

    case Elements.embed: // Embed
      props = Object.assign({
        "data-oembed": element.oembed.embed_url,
        "data-oembed-type": element.oembed.type,
        "data-oembed-provider": element.oembed.provider_name,
      }, element.label ? {className: element.label} : {});
      const embedHtml = React.createElement('div', {dangerouslySetInnerHTML: {__html: element.oembed.html}});
      return React.createElement('div', propsWithUniqueKey(props, key), embedHtml);

    case Elements.hyperlink: // Image
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign({
        href: element.data.url || linkResolver(element.data)
      }, targetAttr, relAttr);
      return React.createElement('a', propsWithUniqueKey(props, key), children);

    case Elements.label: // Label
      props = element.data ? Object.assign({}, { className: element.data.label }) : {};
      return React.createElement('span', propsWithUniqueKey(props, key), children);

    case Elements.span: // Span
      if (content) {
        return content.split("\n").reduce((acc, p) => {
          if (acc.length === 0) {
            return [p];
          } else {
            const brIndex = (acc.length + 1)/2 - 1;
            const br = React.createElement('br', propsWithUniqueKey({}, brIndex));
            return acc.concat([br, p]);
          }
        }, []);
      } else {
        return null;
      }

    default: // Always include a default that returns null
      return null;
  }
};
