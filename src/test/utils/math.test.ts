import { describe, expect, test } from '@jest/globals'
import { unicode, moneyFormat } from '@/utils/math'

describe('unicode test', () => {
  test('unicode string', () => {
    expect(unicode()).toMatch(/^([a-z0-9]+)$/)
  })

  test('unicode is not equal', () => {
    expect(unicode() !== unicode()).toBe(true)
  })
})

describe('money format', () => {
  test('1000', () => {
    expect(moneyFormat(1000)).toBe('1,000')
  })

  test('10000000', () => {
    expect(moneyFormat(10000000)).toBe('10,000,000')
  })
})