"use client";

import { useEffect } from "react";

export default function ConsoleFilter() {
  useEffect(() => {
    // Interceptar console.log para filtrar mensajes de HMR y Fast Refresh
    const originalLog = console.log;
    const originalInfo = console.info;
    const originalWarn = console.warn;

    const filterMessages = (args: any[]) => {
      // Convertir todos los argumentos a string para buscar
      const messageString = args
        .map((arg) => {
          if (typeof arg === "string") return arg;
          if (typeof arg === "object" && arg !== null) {
            try {
              return JSON.stringify(arg);
            } catch {
              return String(arg);
            }
          }
          return String(arg);
        })
        .join(" ");

      // Filtrar mensajes de HMR y Fast Refresh
      if (
        messageString.includes("[HMR]") ||
        messageString.includes("[Fast Refresh]") ||
        messageString.includes("forward-logs-shared.ts") ||
        messageString.includes("HMR connected") ||
        messageString.includes("Fast Refresh") ||
        messageString.includes("rebuilding") ||
        messageString.includes("done in")
      ) {
        return false;
      }
      return true;
    };

    console.log = (...args: any[]) => {
      if (filterMessages(args)) {
        originalLog.apply(console, args);
      }
    };

    console.info = (...args: any[]) => {
      if (filterMessages(args)) {
        originalInfo.apply(console, args);
      }
    };

    console.warn = (...args: any[]) => {
      if (filterMessages(args)) {
        originalWarn.apply(console, args);
      }
    };

    // Limpiar al desmontar
    return () => {
      console.log = originalLog;
      console.info = originalInfo;
      console.warn = originalWarn;
    };
  }, []);

  return null;
}

