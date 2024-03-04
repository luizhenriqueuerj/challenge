# Holonic test challenge

This repo contains a code to validate my skills on Cypress.

## Steps to execute

1 - Open the terminal and put 

```bash
npm install cypress
```

2 - After instalation, inside of file package.json, the option "scripts" should be written like this:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
```

3 - You have to put like this:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress": "cypress open"
  },
```

4 - After this, back to terminal and type:

```bash
npm run cypress
```

5 - Will open an image like this:

![AfterCypressRun](https://github.com/luizhenriqueuerj/holonic-test-challenge/assets/27731869/f234714a-905c-459a-9041-e19e869d77b8)

6 - Choose a browser and hit on "Start E2E Testing in Chrome":

![Choose a Browser](https://github.com/luizhenriqueuerj/holonic-test-challenge/assets/27731869/63121aea-8378-473f-a7b8-0535116cd916)

7 - Chose the file "testing" to see the test beeing executed.

![ChooseTesting](https://github.com/luizhenriqueuerj/holonic-test-challenge/assets/27731869/70643f29-9e0b-4913-8e4f-90512566b532)










