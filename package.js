Package.describe({
  name: "planable:temple",
  version: "0.4.11",
  summary: "Developer tool that provides visual information about templates",
  git: "https://github.com/Planable/temple.git",
  documentation: "README.md",
  debugOnly: true,
});

Package.onUse(function (api) {
  api.versionsFrom("2.3");

  api.use(
    [
      "templating@1.4.1",
      "session",
      "blaze@2.5.0",
      "jquery@1.0.1",
      "underscore",
      "check",
      "tracker",
    ],
    "client"
  );
  api.use("reactive-dict", "client");
  api.use("gwendall:body-events@0.1.6");

  api.use("planable:console@1.4.9", { weak: true }),
    api.addFiles("temple.css", "client");
  api.addFiles("temple.html", "client");
  api.addFiles("temple.js", "client");

  api.export("Temple");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("planable:temple");
  api.addFiles("temple-tests.js");
});
