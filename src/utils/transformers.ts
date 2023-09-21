import { ValueTransformer } from 'typeorm'

export type EnumValues = {
  [key: string]: string
}
export type OptionsValues = Array<{ value: string; label: string }>

export class UpperCaseTransformer implements ValueTransformer {
  public from(value: string): string {
    return value
  }
  public to(value: string) {
    return value.toUpperCase()
  }
}

export const convertEnumToOptions = (obj: EnumValues): OptionsValues => {
  const availableValues: OptionsValues = []
  Object.values(obj).forEach(value => {
    availableValues.push({ value, label: value })
  })
  return availableValues
}
