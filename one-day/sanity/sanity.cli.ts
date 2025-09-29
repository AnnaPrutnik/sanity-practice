import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'r63sq2bt',
    dataset: 'production',
  },
  server: {
    port: 4321,
  },

  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: 'pbwh50ramyotr2g9nfl53jzm',
    autoUpdates: true,
  },
})
