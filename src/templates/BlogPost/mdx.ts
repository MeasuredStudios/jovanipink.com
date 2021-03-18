const components = {
  h1: {
    '@apply mt-16 mb-4 text-gray-900 leading-none font-normal text-2xl': {},
  },
  h2: {
    '@apply mt-16 mb-4 text-gray-900 leading-none font-normal text-2xl': {},
  },
  '.markdown': {
    '@apply text-gray-700 leading-normal': {},
    '> *:first-child': {
      '@apply mt-0': {},
    },
    '> * + *': {
      '@apply mt-6': {},
    },
    '> ul > * + *, > ol > * + *': {
      '@apply mt-4': {},
    },
    '> hr': {
      '@apply border-t-0 border-r-0 border-l-0 border-b-2 border-gray-200 my-8': {},
    },
    '> a, > p a, > ul li a, > ol li a, a&': {
      '@apply text-blue-500 underline font-medium cursor-pointer': {},
      '&:hover': {
        '@apply text-blue-700': {},
      },
      strong: {
        '@apply text-blue-500': {},
      },
      code: {
        '@apply underline text-blue-500': {},
      },
    },
    '> p strong, > ul strong': {
      '@apply font-semibold text-gray-800': {},
    },
    '> p code, > ul li *:not(pre) code, > ul li > code, > ol li *:not(pre) code, > ol li > code, p& code&': {
      '@apply inline-block bg-gray-100 rounded-sm text-sm px-1 leading-none whitespace-no-wrap text-purple-600 font-mono align-baseline font-normal': {},
    },
    '> p strong code, > ul li strong code, > ol li strong code': {
      '@apply font-normal': {},
    },
    '> pre, pre&': {
      '@apply font-mono rounded-lg font-normal': {},
    },
    '> blockquote, blockquote&': {
      '@apply italic text-gray-900 text-sm': {},
    },
    '> h1, h1&': {
      '@apply mb-1 leading-none text-gray-900 font-medium text-3xl': {},
    },
    '> h2, h2&': {
      '@apply mt-16 mb-4 text-gray-900 leading-none font-normal text-2xl': {},
    },
    '> h2 + h3': {
      '@apply mt-6': {},
    },
    '> h3, h3&': {
      '@apply mt-12 -mb-3 text-gray-900 leading-tight font-medium text-xl': {},
    },
    '> h4, h4&': {
      '@apply mt-12 mb-0 text-gray-900 leading-snug font-medium text-lg': {},
    },
    '> h1 + p': {
      '@apply mt-0 mb-4 text-gray-600': {},
    },
    '> h1 > code, > h2 > code, > h3 > code, > h4 > code': {
      '@apply text-purple-600 font-mono': {},
    },
    '> h3 > code': {
      '@apply text-lg px-1 bg-gray-100': {},
    },
    '> h4 > code': {
      '@apply text-base px-1 bg-gray-100': {},
    },
    '> p, p&, > blockquote > p': {
      '@apply text-base mt-6': {},
    },
    '> ul:not(.list-none)': {
      '@apply pl-0 list-none': {},
      li: {
        '@apply relative pl-5': {},
        '&::before': {
          '@apply absolute left-0 text-gray-400 inline-block mr-3': {},
          content: '&#x2022;',
        },
      },
    },
    '> ol': {
      '@apply list-none': {},
      counterReset: 'item',
      '> li': {
        '@apply relative pl-10': {},
      },
      '> li::before': {
        '@apply absolute top-0 left-0 mt-px flex items-center justify-center h-6 w-6 bg-gray-300 rounded-full text-gray-700 text-xs font-bold': {},
        content: 'counter(item)',
        counterIncrement: 'item',
      },
    },
    '> :not(pre):not(h1):not(h2):not(h3):not(h4) > code, > ul code, > ol code': {
      '@apply bg-gray-100 text-sm leading-normal': {},
    },
    '> pre, pre&, > ul li pre, > ol li pre': {
      '@apply flex p-0 bg-gray-800 text-sm leading-normal': {},
    },
    '> pre code, pre code&, > ul li pre code, > ol li pre code': {
      '@apply p-4': {},
    },
    '> table': {
      '@apply w-full text-left border-collapse': {},
      th: {
        '@apply text-sm font-semibold text-gray-700 p-2 bg-gray-100': {},
      },
      td: {
        '@apply p-2 border-t border-gray-200 text-sm': {},
        code: {
          '@apply bg-gray-100 px-1 font-mono text-xs text-purple-700 align-baseline': {},
        },
        '&:first-child': {
          '@apply border-gray-300': {},
        },
      },
    },
  },
};

export default components;

// html {
//   @apply subpixel-antialiased;
//   font-size: 16px;
//   font-feature-settings: 'rlig' 1, 'calt' 1, 'ss01' 1;
//   scroll-behavior: smooth;
// }
// body {
//   @apply bg-white;
// }
// .dark body {
//   @apply bg-dark text-gray-100;
// }

// h1 {
//   @apply text-4xl font-bold tracking-tight mt-2;
// }
// h2 {
//   @apply text-3xl font-semibold tracking-tight mt-10;
//   @apply pb-1 border-b;
// }
// .dark h2 {
//   @apply border-gray-900;
// }
// h3 {
//   @apply text-2xl font-semibold tracking-tight mt-8;
// }
// h4 {
//   @apply text-xl font-semibold tracking-tight mt-8;
// }
// h5 {
//   @apply text-lg font-semibold tracking-tight mt-8;
// }
// h6 {
//   @apply text-base font-semibold tracking-tight mt-8;
// }
// a {
//   @apply text-blue-500 underline;
//   text-underline-position: under;
// }
// p {
//   @apply leading-7;
// }
// p:not(:first-child),
// blockquote:not(:first-child),
// .table-container:not(:first-child) {
//   @apply mt-6;
// }
// hr {
//   @apply my-8;
// }
// .dark hr {
//   @apply border-gray-900;
// }
// code {
//   @apply text-gray-800 bg-gray-500 bg-opacity-25 rounded;
//   box-decoration-break: clone;
// }
// .dark code {
//   @apply text-gray-300 bg-gray-800;
// }
// pre {
//   @apply p-4 bg-gray-200 rounded-lg mt-6 mb-4 overflow-x-auto;
//   @apply dark:bg-gray-800;
// }
// pre code {
//   @apply p-0 text-sm text-black bg-transparent rounded-none inline-block min-w-full;
// }
// a code {
//   @apply text-current no-underline;
// }

// @tailwind components;
// @tailwind utilities;

// .main-container {
//   min-height: 100vh;
// }

// .sidebar {
//   @apply select-none md:border-r;
// }
// .sidebar ul ul {
//   @apply ml-5 relative;
// }
// .sidebar a:focus-visible,
// .sidebar button:focus-visible {
//   @apply ring;
// }
// .sidebar .active-anchor {
//   @apply font-semibold text-gray-900 dark:text-white;
// }
// .sidebar li.active > a {
//   @apply font-semibold text-black bg-gray-200;
// }
// .dark .sidebar li.active > a {
//   @apply text-white bg-gray-800;
// }
// .sidebar button,
// .sidebar a {
//   @apply block w-full text-left text-base no-underline text-gray-600 mt-1 p-2 rounded select-none outline-none;
//   -webkit-tap-highlight-color: transparent;
//   -webkit-touch-callout: none;
// }
// .dark .sidebar button,
// .dark .sidebar a {
//   @apply text-gray-500;
// }
// .sidebar a:hover,
// .sidebar button:hover {
//   @apply text-gray-900 bg-gray-100;
// }
// .dark .sidebar a:hover,
// .dark .sidebar button:hover {
//   @apply text-white bg-gray-900;
// }
// article ul {
//   @apply list-disc ml-6 mt-6;
// }
// article li {
//   @apply mt-2;
// }
// article ol {
//   @apply list-decimal ml-6 mt-6;
// }
// article blockquote {
//   @apply italic pl-6 border-l-2 border-gray-300 text-gray-700;
//   @apply dark:border-gray-700 dark:text-gray-400;
// }

// .subheading-anchor {
//   margin-top: -84px;
//   display: inline-block;
//   position: absolute;
//   width: 1px;
// }

// .subheading-anchor + a:hover .anchor-icon {
//   opacity: 1;
// }
// .anchor-icon {
//   opacity: 0;
//   @apply ml-2 text-gray-500 select-none;
// }
// .dark .anchor-icon {
//   @apply text-gray-700;
// }

// h2 a {
//   @apply no-underline;
// }

// /* Navbar */
// .nextra-container nav a:focus,
// .nextra-container nav summary:focus {
//   @apply select-none outline-none;
// }
// .nextra-container nav a:focus-visible,
// .nextra-container nav summary:focus-visible {
//   @apply ring select-none outline-none;
// }

// /* Search */
// .nextra-search input {
//   @apply border-gray-300 text-gray-900;
// }
// .dark .nextra-search input {
//   @apply bg-dark border-gray-800 text-gray-100;
// }
// .nextra-search input::placeholder {
//   @apply text-gray-400;
// }
// .dark .nextra-search input::placeholder {
//   @apply text-gray-700;
// }
// .nextra-search ul {
//   @apply rounded border bg-white text-gray-100 border-gray-300 divide-gray-300 overflow-hidden shadow-lg list-none;
// }
// .dark .nextra-search ul {
//   @apply bg-dark text-gray-100 border-gray-700 divide-gray-700;
// }
// .nextra-search ul li {
//   @apply text-gray-800;
// }
// .nextra-search ul li.active,
// .nextra-search ul a:focus li {
//   @apply bg-gray-200;
// }
// .dark .nextra-search ul li {
//   @apply text-gray-300;
// }
// .dark .nextra-search ul li.active,
// .dark .nextra-search ul a:focus li {
//   @apply bg-gray-800;
// }
// .nextra-search ul li .highlight {
//   @apply bg-yellow-300;
// }
// .dark .nextra-search ul li .highlight {
//   @apply bg-yellow-700;
// }
// .search-overlay {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }
// input[type='search']::-webkit-search-decoration,
// input[type='search']::-webkit-search-cancel-button,
// input[type='search']::-webkit-search-results-button,
// input[type='search']::-webkit-search-results-decoration {
//   -webkit-appearance: none;
// }
// .nextra-search.nextra-stork ul {
//   @apply overflow-auto left-0 md:-left-80 md:right-0;
//   max-height: min(calc(100vh - 80px), 400px);
//   max-width: min(calc(100vw - 3rem), calc(100% + 20rem));
//   width: 100vw;
// }

// code {
//   font-size: 0.9em;
//   padding: 2px 0.25em;
// }

// /* Locale */
// .locale-switch summary::-webkit-details-marker {
//   content: '';
//   display: none;
// }
// .locale-switch summary::marker {
//   content: '';
//   display: none;
// }
// .locale-switch[open] summary:before {
//   content: ' ';
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 10;
//   display: block;
//   cursor: default;
//   background: transparent;
// }
// .locale-switch .locale-dropdown {
//   position: absolute;
//   z-index: 11;
// }

// /* Table */
// table {
//   @apply p-0;
// }
// table tr {
//   @apply m-0 p-0 border-t border-gray-300;
//   @apply dark:border-gray-700;
// }
// table tr:nth-child(2n) {
//   @apply bg-gray-100;
//   @apply dark:bg-gray-900;
// }
// table tr th {
//   @apply font-semibold;
// }
// table tr th[align='center'],
// table tr td[align='center'] {
//   @apply text-center;
// }
// table tr th[align='right'],
// table tr td[align='right'] {
//   @apply text-right;
// }
// table tr th,
// table tr td {
//   @apply text-left;
//   @apply m-0 px-4 py-2 border border-gray-300;
//   @apply dark:border-gray-700;
// }
// .table-container {
//   overflow: auto;
// }

// .contains-task-list {
//   @apply list-none ml-0;
// }

// .contains-task-list input[type='checkbox'] {
//   @apply mr-1;
// }

// pre .prism-code {
//   --c-highlight: #cce0f5;
// }
// .dark pre .prism-code {
//   --c-highlight: #3d4b61;
// }
// pre .prism-code .token.plain,
// pre .prism-code .token.builtin,
// pre .prism-code .token.char,
// pre .prism-code .token.constant {
//   color: #000 !important;
// }
// .dark pre .prism-code .token.plain,
// .dark pre .prism-code .token.builtin,
// .dark pre .prism-code .token.char,
// .dark pre .prism-code .token.constant {
//   color: #fff !important;
// }
// pre .prism-code .token.string,
// pre .prism-code .token.url,
// pre .prism-code .token.attr-value {
//   color: #028265 !important;
// }
// .dark pre .prism-code .token.string,
// .dark pre .prism-code .token.url,
// .dark pre .prism-code .token.attr-value {
//   color: #20bb98 !important;
// }
// pre .prism-code .token.punctuation,
// pre .prism-code .token.operator {
//   color: #333 !important;
// }
// .dark pre .prism-code .token.punctuation,
// .dark pre .prism-code .token.operator {
//   color: #bbb !important;
// }
// pre .prism-code .token.number,
// pre .prism-code .token.function,
// pre .prism-code .token.tag:not(.script) {
//   color: #0076ff !important;
// }
// .dark pre .prism-code .token.number,
// .dark pre .prism-code .token.function,
// .dark pre .prism-code .token.tag:not(.script) {
//   color: #1e86ff !important;
// }
