import { createState } from '@hookstate/core'

const store = createState({
  firstPersonMessageList: [],
  secondPersonMessageList: []
})

export default store