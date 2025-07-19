// Authority Check
export const hasPermission = (permissions: string[], permission: string | string[]) => {
  const check = (p: string) => permissions.indexOf(p) > -1

  if (permission === '*') return true
  return Array.isArray(permission) ? permission.some(per => check(per)) : check(permission)
}
