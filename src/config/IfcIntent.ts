import { IfcIntentSlot } from "./IfcIntentSlot";
export interface IfcIntent {
  intent: string;
  slots: IfcIntentSlot[];
}