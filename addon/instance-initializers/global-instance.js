export function initialize(appInstance) {
  const config = appInstance.resolveRegistration('config:environment');
  const name = config['ember-cli-global-app-instance'].name;
  window[name] = appInstance;
}

export default {
  initialize
};
