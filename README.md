`babel-jest` fails to compile decorators on async methods while `babel` can:

```
$ yarn
$ babel index.spec.js
$ jest index.spec.js
 FAIL  ./index.spec.js
  ● Test suite failed to run

    index.spec.js:6
        bar() {}}, (_applyDecoratedDescriptor(_class.prototype, "bar", [foo], Object.getOwnPropertyDescriptor(_class.prototype, "bar"), _class.prototype)), _class);
        ^^^

    SyntaxError: Unexpected identifier

      at ScriptTransformer._transformAndBuildScript (node_modules/jest-runtime/build/script_transformer.js:318:17)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.459s
Ran all test suites.
```
