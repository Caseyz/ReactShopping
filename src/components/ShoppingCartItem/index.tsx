/**
 * @description item in shopping cart
 * @author zheng
 */

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { DeleteIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import RadioBtn from '@/components/RadioBtn';

import './index.less';

interface IProps {
  dataSource: {
    id: number;
    imgSrc: string;
    name: string;
    price: number;
    quantity: number;
  };
  isBigPage?: boolean;
  bg?: string;
  p?: number;
  className?: string;
  onAdd: (id: number) => void;
  onMinus: (id: number) => void;
  onDelete: (id: number) => void;
}
function ShoppingCartItem(props: IProps) {
  const { dataSource, onAdd, onMinus, onDelete, isBigPage, bg, p, className } = props || {};
  const { id, imgSrc, name, price, quantity } = dataSource || {};
  return (
    <Box bg={bg ? bg : 'white'} p={p ? p : 0} className={className ? className : ''} mt={5}>
      <Flex direction="column" mt={10} mb={15}>
        {/* goods item */}
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Image src={imgSrc} alt={name} boxSize="40px" />
            <Text fontWeight={600} fontSize={20} ml={5}>
              {name}
            </Text>
          </Flex>
          {/* delete btn */}
          <RadioBtn
            size={10}
            bg="red.100"
            content={<DeleteIcon color="red.400"></DeleteIcon>}
            onClick={() => {
              onDelete(id);
            }}
          />
        </Flex>
        <Flex
          justify={isBigPage ? 'flex-end' : 'space-between'}
          align={isBigPage ? 'flex-end' : 'center'}
          mt={10}
        >
          {/* goods number */}
          <Flex direction="column" mr={5}>
            <Text fontSize={12} fontWeight="normal">
              Quantity
            </Text>
            <Flex align="center">
              {/* minus */}
              <RadioBtn
                size={5}
                bg="blue.100"
                content={<MinusIcon fontSize={10} color="black.400"></MinusIcon>}
                onClick={() => onMinus(id)}
              />
              <Text w={50} textAlign="center">
                {quantity}
              </Text>
              {/* plus sign */}
              <RadioBtn
                size={5}
                bg="blue.100"
                content={<AddIcon fontSize={10} color="black.400"></AddIcon>}
                onClick={() => onAdd(id)}
              />
            </Flex>
          </Flex>
          {/* price */}
          <Text>{price}</Text>
        </Flex>
      </Flex>
      {!isBigPage && <hr />}
    </Box>
  );
}

export default ShoppingCartItem;
