# Circles Frame App

## How it works?

The `web-host` || `electron-host` || `capacitor-host` apps will require the `frame-app` as a dependency and build together the full production app. All the host specific APIs will be injected into the `window` object.

All the shared logic & platform agnostic code will be here in the `frame-app`.

## Getting Started

Check one the host repositories to get started.

## Resources

- https://github.com/codechips/svelte-typescript-setups/blob/master/svelte-webpack5-typescript/package.json

### Web3Auth

- https://web3auth.io/docs/quick-start?lang=html&chain=eth&customAuthentication=no&whitelabel=no&customLogin=no#step-1

### Electron

- https://www.electronjs.org/docs/latest/tutorial/launch-app-from-url-in-another-app#electron-forge
- https://dev.to/olyno/how-to-create-an-electron-application-with-vite-im

### Capacitor

- https://capacitorjs.com/solution/svelte
