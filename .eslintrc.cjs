module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "react/prop-types": [0],
  "require-jsdoc": [
      "off",
      {
          "require": {
              "FunctionDeclaration": true,
              "MethodDefinition": false,
              "ClassDeclaration": false,
              "ArrowFunctionExpression": false,
              "FunctionExpression": false
          }
      }
  ],
  "no-console": ["error", { "allow": ["warn", "error"] }],
  //"no-console": "error",
  "no-restricted-syntax": [
      "error",
      {
          "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
          "message": "Unexpected property on console object was called"
      }
  ],
  "jsx-a11y/anchor-is-valid": [
      "error",
      {
          "components": ["Link"],
          "specialLink": ["hrefLeft", "hrefRight"],
          "aspects": ["invalidHref", "preferButton"]
      }
  ],
  //accessibility rules
  "jsx-a11y/aria-role": [
      2,
      {
          "allowedInvalidRoles": ["text"],
          "ignoreNonDOM": true
      }
  ],
  "role-supports-aria-props": [
      "off",
      {
          "role": "button",
          "props": ["aria-expanded"]
      },
      {
          "role": "checkbox",
          "props": ["aria-checked"]
      },
      {
          "role": "menuitem",
          "props": ["aria-checked"]
      },
      {
          "role": "menuitemcheckbox",
          "props": ["aria-checked"]
      },
      {
          "role": "menuitemradio",
          "props": ["aria-checked"]
      },
      {
          "role": "option",
          "props": ["aria-selected"]
      },
      {
          "role": "radio",
          "props": ["aria-checked"]
      },
      {
          "role": "tab",
          "props": ["aria-selected"]
      },
      {
          "role": "treeitem",
          "props": ["aria-selected"]
      },
      {
          "allowedRoles": [
              "button",
              "checkbox",
              "link",
              "menuitem",
              "menuitemcheckbox",
              "menuitemradio",
              "option",
              "radio",
              "switch",
              "tab",
              "textbox",
              "treeitem"
          ]
      }
  ],
  "jsx-a11y/label-has-associated-control": "off",
  "jsx-a11y/click-events-have-key-events": "off",
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  "jsx-a11y/no-static-element-interactions": "off",
  //restrict imports
  "no-restricted-imports": [
      "error",
      {
          "patterns": ["@/features/*/*"]
      }
  ]
}
