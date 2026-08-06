import sanitizeHtml from 'sanitize-html';

export default function setSvgHtml(svgString: string) {
  return {
    __html: sanitizeHtml(JSON.parse(JSON.stringify(svgString)) || '', {
      disallowedTagsMode: 'escape',
      allowedTags: [
        'svg',
        'rect',
        'circle',
        'ellipse',
        'line',
        'polyline',
        'polygon',
        'path',
        'g',
      ],
      allowedAttributes: false,
      parser: {
        lowerCaseAttributeNames: false,
        lowerCaseTags: false,
      },
    }),
  };
}


export function sanitizeEditorContent(htmlString: string) {
  return {
    __html: sanitizeHtml(htmlString, {
      allowedTags: [
        'p',
        'b',
        'i',
        'u',
        'strong',
        'em',
        'a',
        'ul',
        'ol',
        'li',
        'br',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'img',
        'figure',
        'figcaption',
        'blockquote',
        'code',
        'pre',
        'span',
        'div',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'svg',
        'rect',
        'circle',
        'ellipse',
        'line',
        'polyline',
        'polygon',
        'path',
        'g',
      ],

      allowedAttributes: {
        a: ['href', 'name', 'target', 'rel'],
        img: ['src', 'alt', 'width', 'height', 'style'],

        // svgs
        svg: ['width', 'height', 'viewBox', 'xmlns'],
        rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'stroke', 'stroke-width'],
        circle: ['cx', 'cy', 'r', 'fill', 'stroke', 'stroke-width'],
        ellipse: ['cx', 'cy', 'rx', 'ry', 'fill', 'stroke', 'stroke-width'],
        line: ['x1', 'y1', 'x2', 'y2', 'stroke', 'stroke-width'],
        polyline: ['points', 'fill', 'stroke', 'stroke-width'],
        polygon: ['points', 'fill', 'stroke', 'stroke-width'],
        path: ['d', 'fill', 'stroke', 'stroke-width'],
        g: ['fill', 'stroke', 'stroke-width', 'transform'],
      },

      allowedSchemes: ['http', 'https', 'mailto', 'data'],
      allowedSchemesByTag: {
        a: ['http', 'https', 'mailto'],
        img: ['http', 'https', 'data'],
      },

      disallowedTagsMode: 'escape',

      parser: {
        lowerCaseAttributeNames: false,
        lowerCaseTags: false,
      },
    }),
  };
}