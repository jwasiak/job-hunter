import React, { FC, useEffect, useState } from 'react'
import { EditPropertyProps, ApiClient, useTranslation } from 'adminjs'
import { FormGroup, Label, Select } from '@adminjs/design-system'

type SelectedOption = { value: string | number; label: string }
type SelectOptions = Array<SelectedOption>

const SelectTemplateToClipboard: FC<EditPropertyProps> = props => {
  const { property } = props
  const { resourceId } = property
  const [options, setOptions] = useState<SelectOptions>([])
  const [value, setValue] = useState<SelectedOption>()
  const { tl } = useTranslation()

  const api = new ApiClient()

  const loadOptions = async (): Promise<SelectOptions> => {
    const records = await api.searchRecords({
      resourceId: 'Template',
      query: '',
    })
    const loadedOptions = records.map(r => ({ value: r.params.text, label: r.params.name }))
    setOptions(loadedOptions)
    return loadedOptions
  }

  useEffect(() => {
    loadOptions()
  }, [])

  const handleSelect = async (selected: SelectedOption) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(selected?.value.toString())
    }
    setValue(selected)
  }
  return (
    <FormGroup>
      <Label>{tl(property.label, resourceId)}</Label>
      <Select value={value} options={options} onChange={selected => handleSelect(selected)}></Select>
    </FormGroup>
  )
}
export default SelectTemplateToClipboard
