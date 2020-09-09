const defaultConfig = {};

class Amplify {
  configuration = defaultConfig;

  configure = (config) => {
    this.configuration = config;

    return this.configuration;
  };

  isConfigured() {
    return this.configuration !== defaultConfig;
  }
}

export default new Amplify();
