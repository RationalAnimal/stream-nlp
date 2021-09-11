import { IfcConfig } from "../config/IfcConfig";
import { IfcIntent } from "../config/IfcIntent";
export function generate(config: IfcConfig, intents: IfcIntent[]): string {
  return JSON.stringify({error: {message: "generate function is not yet implemented"}, config, intents}, null, 2);
}