module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    plugins: ["jsx-a11y", "react-hooks", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": ["error", "always"],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "signature",

                    "constructor",

                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",

                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",

                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",

                    "public-abstract-field",
                    "protected-abstract-field",
                    "private-abstract-field",

                    "public-field",
                    "protected-field",
                    "private-field",

                    "static-field",
                    "instance-field",
                    "abstract-field",

                    "field",

                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",

                    "public-abstract-method",
                    "protected-abstract-method",
                    "private-abstract-method",

                    "public-method",
                    "protected-method",
                    "private-method",

                    "static-method",
                    "instance-method",
                    "abstract-method",

                    "method"
                ]
            }
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true
            }
        ],
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "array-callback-return": ["warn"],
        "default-case": [
            "warn",
            {
                commentPattern: "^no default$"
            }
        ],
        "dot-location": ["warn", "property"],
        "new-parens": "error",
        "no-array-constructor": ["warn"],
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-const-assign": ["warn"],
        "no-control-regex": ["warn"],
        "no-delete-var": ["warn"],
        "no-dupe-args": ["warn"],
        "no-dupe-class-members": ["warn"],
        "no-dupe-keys": ["warn"],
        "no-duplicate-case": "error",
        "no-empty-character-class": ["warn"],
        "no-empty-pattern": ["warn"],
        "no-eval": "error",
        "no-ex-assign": ["warn"],
        "no-extend-native": ["warn"],
        "no-extra-bind": "error",
        "no-extra-label": ["warn"],
        "no-fallthrough": "off",
        "no-func-assign": ["warn"],
        "no-implied-eval": ["warn"],
        "no-invalid-regexp": ["warn"],
        "no-iterator": ["warn"],
        "no-label-var": ["warn"],
        "no-labels": [
            "warn",
            {
                allowLoop: true,
                allowSwitch: false
            }
        ],
        "no-lone-blocks": ["warn"],
        "no-loop-func": ["warn"],
        "no-mixed-operators": [
            "warn",
            {
                groups: [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                allowSamePrecedence: false
            }
        ],
        "no-multi-str": ["warn"],
        "no-native-reassign": ["warn"],
        "no-negated-in-lhs": ["warn"],
        "no-new-func": "error",
        "no-new-object": ["warn"],
        "no-new-symbol": ["warn"],
        "no-new-wrappers": "error",
        "no-obj-calls": ["warn"],
        "no-octal": ["warn"],
        "no-octal-escape": ["warn"],
        "no-redeclare": "error",
        "no-regex-spaces": ["warn"],
        "no-restricted-syntax": ["warn", "WithStatement"],
        "no-script-url": ["warn"],
        "no-self-assign": ["warn"],
        "no-self-compare": ["warn"],
        "no-sequences": "error",
        "no-shadow-restricted-names": ["warn"],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": ["warn"],
        "no-throw-literal": "error",
        "no-undef": ["error"],
        "no-restricted-globals": [
            "error",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top"
        ],
        "no-unreachable": ["warn"],
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": [
            "warn",
            {
                args: "none",
                ignoreRestSiblings: true
            }
        ],
        "no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],
        "no-useless-computed-key": ["warn"],
        "no-useless-concat": ["warn"],
        "no-useless-constructor": ["warn"],
        "no-useless-escape": ["warn"],
        "no-useless-rename": [
            "warn",
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false
            }
        ],
        "no-with": ["warn"],
        "no-whitespace-before-property": ["warn"],
        "react/display-name": "off",
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": ["warn"],
        "require-yield": ["warn"],
        "rest-spread-spacing": ["warn", "never"],
        strict: ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "use-isnan": "error",
        "valid-typeof": "off",
        "no-restricted-properties": [
            "error",
            {
                object: "require",
                property: "ensure",
                message: "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
            },
            {
                object: "System",
                property: "import",
                message: "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
            }
        ],
        "getter-return": ["warn"],
        "react/forbid-foreign-prop-types": [
            "warn",
            {
                allowInPropTypes: true
            }
        ],
        "react/jsx-no-comment-textnodes": ["warn"],
        "react/jsx-no-duplicate-props": ["warn"],
        "react/jsx-no-target-blank": ["warn"],
        "react/jsx-no-undef": ["error"],
        "react/jsx-pascal-case": [
            "warn",
            {
                allowAllCaps: true,
                ignore: []
            }
        ],
        "react/jsx-uses-react": ["warn"],
        "react/jsx-uses-vars": ["warn"],
        "react/no-danger-with-children": ["warn"],
        "react/no-direct-mutation-state": ["warn"],
        "react/no-is-mounted": ["warn"],
        "react/no-unescaped-entities": "off",
        "react/no-typos": ["error"],
        "react/react-in-jsx-scope": ["error"],
        "react/require-render-return": ["error"],
        "react/style-prop-object": ["warn"],
        "jsx-a11y/accessible-emoji": ["warn"],
        "jsx-a11y/alt-text": ["warn"],
        "jsx-a11y/anchor-has-content": ["warn"],
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                aspects: ["noHref", "invalidHref"]
            }
        ],
        "jsx-a11y/aria-activedescendant-has-tabindex": ["warn"],
        "jsx-a11y/aria-props": ["warn"],
        "jsx-a11y/aria-proptypes": ["warn"],
        "jsx-a11y/aria-role": [
            "warn",
            {
                ignoreNonDOM: true
            }
        ],
        "jsx-a11y/aria-unsupported-elements": ["warn"],
        "jsx-a11y/heading-has-content": ["warn"],
        "jsx-a11y/iframe-has-title": ["warn"],
        "jsx-a11y/img-redundant-alt": ["warn"],
        "jsx-a11y/no-access-key": ["warn"],
        "jsx-a11y/no-distracting-elements": ["warn"],
        "jsx-a11y/no-redundant-roles": ["warn"],
        "jsx-a11y/role-has-required-aria-props": ["warn"],
        "jsx-a11y/role-supports-aria-props": ["warn"],
        "jsx-a11y/scope": ["warn"],
        "react-hooks/rules-of-hooks": ["error"],
        "arrow-body-style": "error",
        "arrow-parens": ["error", "always"],
        camelcase: "error",
        "comma-dangle": "off",
        complexity: "off",
        "constructor-super": "error",
        curly: "error",
        "dot-notation": "error",
        "eol-last": "error",
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "error",
        "import/order": "off",
        "max-classes-per-file": ["error", 1],
        "max-len": [
            "error",
            {
                code: 160
            }
        ],
        "no-bitwise": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-invalid-this": "off",
        "no-multiple-empty-lines": "error",
        "no-return-await": "error",
        "no-shadow": [
            "error",
            {
                hoist: "all"
            }
        ],
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": [
            "error",
            { allow: ["_geoloc"], allowAfterThis: false, allowAfterSuper: false, allowAfterThisConstructor: false, enforceInMethodNames: false }
        ],
        "no-unsafe-finally": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "quote-props": ["error", "consistent-as-needed"],
        radix: "error",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                asyncArrow: "always",
                named: "never"
            }
        ],
        "spaced-comment": "error"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}
