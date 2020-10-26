## Reproducing the issue
- Install dependencies using the graal-js npm: `npm install`.
- Run tests: `npm --jvm test` (--polyglot flag is not supported and when manually added to the npm script also does not work)
Error message:
```
  add
    1) should add numbers correctly in python


  0 passing (151ms)
  1 failing

  1) add
       should add numbers correctly in python:
     Error: No language for id python found. Supported languages are: [js]
```
