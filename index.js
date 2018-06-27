'use strict';

module.exports = {
  name: 'ember-cli-global-app-instance',

  treeFor(name) {
    if (this.getAppName()) {
      return this._super.treeFor.apply(this, arguments);
    }
  },

  getAppName() {
    const config = this.app.project.config(this.app.env)['ember-cli-global-app-instance'];
    if (config && config.name) {
      return config.name;
    }

    return null;
  }
};
