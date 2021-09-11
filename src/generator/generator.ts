import { IfcConfig } from "../config/IfcConfig";
export function generate(config: IfcConfig): string {
  return JSON.stringify({error: {message: "generate function is not yet implemented"}, config}, null, 2);
}