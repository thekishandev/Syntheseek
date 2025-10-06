import Exa from "exa-js";
import Cerebras from "@cerebras/cerebras_cloud_sdk";
import { createCerebras } from '@ai-sdk/cerebras';

export const cerebrasClient = new Cerebras({
    apiKey: process.env.CEREBRAS_API_KEY,
});

// Create Cerebras client for AI SDK
export const cerebrasClientAISDK = createCerebras({
  apiKey: process.env.CEREBRAS_API_KEY ?? '',
});

export const exaClient = new Exa(process.env.EXA_API_KEY);