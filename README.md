# EasyFPS FSM – VS Code Extension

This is a VS Code extension for `.states` files used in [EasyFPS Editor](https://pixelwolf.net/efpse/wiki/index.php?title=FSM).  
It adds syntax highlighting and useful code snippets for writing FSM logic.

---

## Features

- Highlights FSM keywords, logic, actions, and variables
- Supports comments and random expressions
- More to come...

---

## Installation

The extension is available on the VS Code Marketplace, although it can also be installed manually by building the VSIX file.

## From Marketplace

1. Open VS Code
2. Press `Ctrl+Shift+X`
3. Search for **EasyFPS Editor FSM**
4. Click **Install**

## Manual

1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Run `vsce package`
5. Open VS Code
6. Press `Ctrl+Shift+P`
7. Search for **Developer: Install Extension from VSIX**
8. Select the `easyfps-fsm.vsix` file
