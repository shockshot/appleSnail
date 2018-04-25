
const noop = () => undefined;
const LOG_LEVEL = {
  DEBUG : 0,
  INFO : 1,
  WARN : 2,
  ERROR : 3
}

const logLevel = LOG_LEVEL.DEBUG;

export default class Logger {

  static get debug() {
    if (logLevel <= LOG_LEVEL.DEBUG) {
      return console.log.bind(console);
    } else {
      return noop;
    }
  }

  get info() {
    if (logLevel <= LOG_LEVEL.INFO) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  get warn() {
    if (logLevel <= LOG_LEVEL.WARN) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }

  get error() {
    if (logLevel <= LOG_LEVEL.ERROR) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }
}