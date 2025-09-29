import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qhune24n',
    dataset: 'production',
  },
  server: {
    port: 3334,
  },

  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: 'mgnpkanbyr2yhgkj74zel6ya',
    autoUpdates: true,
  },
})
