export function initialize(appInstance) {
  const config = appInstance.resolveRegistration('config:environment');
  const addonConfig = config['ember-cli-global-app-instance'];
  if (addonConfig && addonConfig.name) {
    window[addonConfig.name] = appInstance;
  }
}

export default {
  initialize
};
