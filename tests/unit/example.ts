import { expect } from 'chai'
import rewire from 'rewire'
import { addTwo } from '@/functions'

const index = rewire('@/functions.ts') // For un-exported functions

describe('index.ts', () => {
  it('addOne function', () => {
    const num = 1
    const addOne = index.__get__('addOne')
    const res = addOne(num)
    expect(res).to.equal(num + 1)
  })
  it('addTwo function', () => {
    const num = 1
    const res = addTwo(num)
    expect(res).to.equal(num + 2)
  })
})
