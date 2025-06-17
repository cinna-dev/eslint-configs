
import type { Rule }  from 'eslint';

import config from './index';

import reactCompiler from 'eslint-plugin-react-compiler';




// /** @type { import("eslint").Linter.Config[] } */
export default  [
  ...config,
    {
        ...config[0],
        plugins: {
            ...config[0].plugins,
            'react-compiler': reactCompiler,
        },
        rules: {
            ...config[0].rules,
            "react-compiler/react-compiler": "error"
        }
    }
];
