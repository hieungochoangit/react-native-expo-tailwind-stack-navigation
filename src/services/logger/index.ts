import { InteractionManager } from "react-native";
import { logger, consoleTransport } from "react-native-logs";

export enum LoggerLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

const defaultConfig = {
  levels: {
    debug: LoggerLevel.DEBUG,
    info: LoggerLevel.INFO,
    warn: LoggerLevel.WARN,
    error: LoggerLevel.ERROR,
  },
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  },
  async: true,
  asyncFunc: InteractionManager.runAfterInteractions,
  dateFormat: "time",
  printLevel: true,
  printDate: true,
  enabled: __DEV__,
};

export type LoggerType = ReturnType<typeof Logger.extend>;

export const Logger = logger.createLogger(defaultConfig);
