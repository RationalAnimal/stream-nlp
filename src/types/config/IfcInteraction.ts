export interface IfcIntentSlot {
  name: string,
  type: string
}

export interface IfcUtteranceSlotFlag {
  name: string,
  parameters?: string[]
} 

export interface IfcUtteranceSlot {
  slot: string
  flags?: IfcUtteranceSlotFlag[]
}

export interface IfcOptionsFlags {
  optional?: boolean
}

export interface IfcOptions {
  options: (string | IfcUtteranceSlot)[],
  flags: IfcOptionsFlags[]
}

export interface IfcUtterance {
  description?: string,
  parts: (string | IfcOptions | IfcUtteranceSlot)[]
}

export interface IfcInteraction {
  intent: string,
  slots?: IfcIntentSlot[],
  utterances: IfcUtterance[]
}