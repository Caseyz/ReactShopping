/**
 * @description shopping cart
 * @author zheng
 */

import { Flex, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import './index.less';

interface IProps {
  total: string;
  isBigPage?: boolean;
}

function ShoppingCartFooter(props: IProps) {
  const { total, isBigPage } = props || {};
  const navigate = useNavigate();
  const goto = () => {
    navigate('/shopping');
  };
  return (
    <Flex direction="column" w="100%">
      <Flex justify="space-between">
        <Text fontSize={25}>Total</Text>
        <Text fontSize={25}>{total}</Text>
      </Flex>
      <Button colorScheme="blue" w="100%" mt={5} mb={5}>
        Checkout
      </Button>
      {!isBigPage && (
        <Text textAlign="center" color="blue" as="u" cursor="pointer" onClick={goto}>
          View detailed cart
        </Text>
      )}
    </Flex>
  );
}

export default ShoppingCartFooter;
