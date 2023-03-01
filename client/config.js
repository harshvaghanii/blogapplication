import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
    ? "prodlink"
    : "http://localhost:4000";
export const APP_NAME = publicRuntimeConfig.APP_NAME;
