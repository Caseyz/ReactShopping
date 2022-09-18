/**
 * @description shopping cart
 * @author zheng
 */

import { useContext } from 'react';
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import ShoppingCartItem from '@/components/ShoppingCartItem';
import PromoCode from '@/components/PromoCode';
import ShoppingCartFooter from '@/components/ShoppingCartFooter';
import { AppContext } from '@/context/context';

import './index.less';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
function ShoppingCart(props: IProps) {
  const { isOpen, onClose } = props || {};
  const { state, dispatch } = useContext(AppContext);
  const { goodsList, total } = state || {};
  const onAdd = (id: number) => {
    dispatch({ type: 'ADD_NUMBER', payload: { id } });
  };
  const onMinus = (id: number) => {
    dispatch({ type: 'MINUS_NUMBER', payload: { id } });
  };
  const onDelete = (id: number) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader bg="gray.100" h={150}>
          Cart summary
        </DrawerHeader>
        <DrawerBody>
          {/* goods item */}
          {Object.keys(goodsList).length !== 0 ? (
            goodsList.map(
              (item: {
                id: number;
                imgSrc: string;
                name: string;
                price: number;
                quantity: number;
              }) => (
                <ShoppingCartItem
                  key={item.id}
                  dataSource={item}
                  onAdd={onAdd}
                  onMinus={onMinus}
                  onDelete={onDelete}
                />
              )
            )
          ) : (
            <Text>Your cart is empty.</Text>
          )}

          {/* promo code */}
          <PromoCode />
        </DrawerBody>
        <DrawerFooter justifyContent="center">
          <ShoppingCartFooter total={total} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ShoppingCart;
