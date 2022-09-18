import { ChakraProvider, Flex, useDisclosure } from '@chakra-ui/react';
import CoodsArea from '@/components/GoodsArea';
import ShoppingCart from '@/components/ShoppingCart';

//mock data
import GoodsList from '../../../mocks/index.json';

// style sheet
import './index.less';

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex direction="column" justify="center" align="center">
        {/* goods list */}
        {GoodsList &&
          GoodsList.map((item, index) => (
            <CoodsArea dataSource={item} key={item.id} index={index} onOpen={onOpen} />
          ))}
      </Flex>
      {/* shopping cart */}
      <ShoppingCart isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  );
}

export default Index;
