import { BaseSyntheticEvent } from '@src/core/types/base'
import { useCallback, useState } from 'react'

function useInputs(initialForm: any) {
  const [form, setForm] = useState(initialForm)
  // change
  const onChange = useCallback((e: BaseSyntheticEvent) => {
    const { name, value } = e.target
    setForm((form: any) => ({ ...form, [name]: value }))
  }, [])
  const reset = useCallback(() => setForm(initialForm), [initialForm])
  return [form, onChange, reset]
}

export default useInputs
