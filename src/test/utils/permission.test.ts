import { describe, expect, test } from '@jest/globals'
import { hasPermission } from '@/utils/permission'

describe('permission test', () => {
  test('permission success', () => {
    expect(hasPermission(['user:checkout'], 'user:checkout')).toBe(true)
  })

  test('permission fail', () => {
    expect(hasPermission(['user:checkout'], '')).toBe(false)
  })
})