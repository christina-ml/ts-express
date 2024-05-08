# 5-8-24
1) Write expectation vs. reality
2) what did you try to fix it?
3) what do you think the cause is?

1) finish exercise
2) review quiz

# 5-7-24
```node
npm init -y
npm i express dotenv
touch .gitignore && touch .env
```
in gitignore add node_modules and .env
add PORT=3000 in .env

```node
mkdir src
code src/index.js
```
create src folder
import expres and dotenv
app.get("/") send string "server is cool"

in a new terminal, test the server
```
curl localhost:3000
```

install dev dependencies
```
npm install -D @types/express @types/node
```


import express and dotenv
app.get('/') and send string'server is cool'
create app and app.listen in src/index.js
9. npm install -D @types/express @types/node
10. explain dev and regular dependencies
    dev is not in final build, regular is
11. npm install typescript
12. npx tsc --init
13. set tsconfig outdir = ./dist

in tsconfig.json, comment in line 58:
```
"outDir": "./",                                   /* Specify an output folder for all emitted files. */
```
change to
```
"outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
```

14. explain ts config
    it holds the settings for typescript
    avoid using implicit any when possible
15. set up ts file
16. npm i -D nodemon ts-node
17. npx ts-node src/index.ts to test the route
18.   "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
  },
1.  run npm build
     ook at js inside of the dist folder


20. discuss static vs dynamic typing in js
    Data types
21. npm i -D supertest jest @types/supertest
22. npm i --save-dev jest ts-jest @types/jest
23. create test command to run jest -watch
24. create jest config
```
add test script ts-jest -watch
```

jest.config.ts file:
```node
import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
};
export default config;

```





There's 4 accelerator instructors now
khalid, mike boyle,
carlos and gigi now teaching accelerator