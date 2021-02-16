import OP_CODE from 'constants/op'
import MESSAGE_TYPE from 'constants/messageTypes';

export interface Message<T> {
  op: OP_CODE
  d: T
  s?: number
  t?: MESSAGE_TYPE
}
