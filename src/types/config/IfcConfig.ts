export interface IfcConfigCustomSlotTypeValue {
  value: string,
  synonyms: string[]
}

export interface IfcConfigCustomSlotType {
  name: string,
  values: ( string | IfcConfigCustomSlotTypeValue)[],
}

export interface IfcConfigBuiltInSlot {
  name: string,
  extendedValues?: string[],
  extendedValuesFilename?: string,
  transformSrcFilename?: string
}

export interface IfcConfig {
  customSlotTypes: IfcConfigCustomSlotType[],
  builtInIntents: [],
  builtInSlots: IfcConfigBuiltInSlot[]
}