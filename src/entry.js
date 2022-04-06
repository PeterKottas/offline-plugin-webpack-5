const OfflinePluginRuntime = require("@lcdp/offline-plugin/runtime");
OfflinePluginRuntime.install({
  onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
  onUpdated: () => window.location.reload(),
});
