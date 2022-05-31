const FEATURE_EXCEPTIONS = [''];

const ROUTER_EXCEPTIONS = {
  header: ['login', ...FEATURE_EXCEPTIONS],
  footer: ['mock-page', ...FEATURE_EXCEPTIONS],
};

const APP_TITLE = 'CARBON CALC';

const LANG_SELECTOR_ROUTES = ['dashboard'];

export {
  ROUTER_EXCEPTIONS,
  APP_TITLE,
  LANG_SELECTOR_ROUTES,
};
