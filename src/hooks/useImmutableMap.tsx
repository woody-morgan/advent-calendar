import { useCallback, useState } from 'react'

export function useImmutableMap<T, S>() {
  const [map, setMap] = useState<Map<T, S>>(new Map())

  const set = useCallback(
    (key: T, value: S) => {
      const newMap = new Map()
      map.forEach((value, key) => newMap.set(key, value))
      newMap.set(key, value)
      setMap(newMap)
    },
    [map, setMap]
  )

  const concat = useCallback(
    (key: T[], value: S[]) => {
      const newMap = new Map()
      map.forEach((value, key) => newMap.set(key, value))
      key.forEach((k, i) => newMap.set(k, value[i]))
      setMap(newMap)
    },
    [map, setMap]
  )

  const remove = useCallback(
    (key: T) => {
      const newMap = new Map()
      map.forEach((value, key) => newMap.set(key, value))
      newMap.delete(key)
      setMap(newMap)
    },
    [map, setMap]
  )

  return [map, set, concat, remove] as const
}
