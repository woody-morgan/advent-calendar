import produce from 'immer'
import { useCallback, useState } from 'react'

export function useImmutableArray<T>(initialValue: T[] = []) {
  const [array, setArray] = useState<T[]>(initialValue)

  const push = useCallback(
    (item: T) => {
      setArray((prev) =>
        produce<T[], T[]>(prev, (draft) => {
          draft.push(item)
        })
      )
    },
    [setArray]
  )

  const concat = useCallback(
    (item: T[]) => {
      setArray((prev) =>
        produce<T[], T[]>(prev, (draft) => {
          item.forEach((i) => {
            draft.push(i)
          })
        })
      )
    },
    [setArray]
  )

  const remove = useCallback(
    (item: T) => {
      setArray((prev) => produce<T[], T[]>(prev, (draft) => draft.filter((i) => i !== item)))
    },
    [setArray]
  )

  const update = useCallback(
    (item: T, updater: (item: T) => T) => {
      setArray((prev) =>
        produce<T[], T[]>(prev, (draft) => {
          const index = draft.findIndex((i) => i === item)
          if (index !== -1) {
            draft[index] = updater(item)
          }
        })
      )
    },
    [setArray]
  )

  return [array, push, concat, update, remove] as const
}
