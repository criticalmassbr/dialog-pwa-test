import { User } from '../schema/types'
import _db from './_db'

export const find = ({
  search,
}: {
  search: string,
}): User[] => _db.filter((d: User) => {
  /** TODO: adicionar consulta com regex */
  /** TODO: adicionar consulta em mais campos */
  const nameIsEqual = d.name === search

  return nameIsEqual
})

export const findAll = () => {
  return _db
}
