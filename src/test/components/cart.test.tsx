import {expect, it} from '@jest/globals'
import renderer from 'react-test-renderer'
import Cart from '@/components/Cart/index'

it('Cart page snapshot', () => {
  const component = renderer.create(<Cart isOpen={false} onClose={() => {}} />)
  const tree = component.toJS()

  expect(tree).toMatchSnapshot()
})

