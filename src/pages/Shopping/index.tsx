import { useContext } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import ShoppingCartItem from '@/components/ShoppingCartItem';
import PromoCode from '@/components/PromoCode';
import ShoppingCartFooter from '@/components/ShoppingCartFooter';
import { AppContext } from '@/context/context';
import { useNavigate } from 'react-router-dom';

import './index.less';

function Shopping() {
  const { state, dispatch } = useContext(AppContext) || {};
  const { goodsList, total } = state || {};
  const navigate = useNavigate();
  const onAdd = (id: number) => {
    dispatch({ type: 'ADD_NUMBER', payload: { id } });
  };
  const onMinus = (id: number) => {
    dispatch({ type: 'MINUS_NUMBER', payload: { id } });
  };
  const onDelete = (id: number) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };
  const goto = () => {
    navigate('/');
  };
  return (
    <Flex direction="column" align="center" bg="#f1f2f4" overflow="hidden">
      {/* title */}
      <Flex w="80%" justify="space-between" align="center">
        <Flex align="center" flex={1} h={100} cursor="pointer" onClick={goto}>
          <ChevronLeftIcon color="#0aa7f5" />
          <Text color="gray.500" fontSize={14} fontWeight="normal">
            Continue shopping
          </Text>
        </Flex>
        <Text flex={1} textAlign="center" fontWeight={600}>
          Cart summary
        </Text>
        <Text flex={1}></Text>
      </Flex>
      {/* goods list */}
      <Flex direction="column" w="80%">
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
                isBigPage={true}
                bg="white"
                p={10}
                onAdd={onAdd}
                onMinus={onMinus}
                onDelete={onDelete}
              />
            )
          )
        ) : (
          <Text>Your cart is empty.</Text>
        )}
      </Flex>
      <Flex justify="space-between" align="flex-start" w="80%" mt={20}>
        <Box w="40%">
          <PromoCode />
        </Box>
        <Box w="30%">
          <ShoppingCartFooter total={total} isBigPage={true} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Shopping;
