This is a minimal reproduction of a possible bug in Tinybase. It fails to build with
Browserify, while most other packages build just fine.

To reproduce, run

```
npm install
npm repro
```

and you should see the failure.

To make it pass, comment out the line `require('tinybase');` and run

```
npm repro
```

again.
