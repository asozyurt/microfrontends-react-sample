import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/spa"],
// });

registerApplication({
  name: "@z2h/z2h-app1",
  app: () => System.import("@z2h/z2h-app1"),
  activeWhen: ["/"],
  customProps:{accessToken:'test'}
});

registerApplication({
  name: "@z2h/z2h-app2",
  app: () => System.import("@z2h/z2h-app2"),
  activeWhen: ["/"],
  customProps:{accessToken:'test'}
});

start({
  urlRerouteOnly: true,
});
