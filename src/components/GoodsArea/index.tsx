/**
 * @description Goods display module
 * @author zheng
 */

import { useContext } from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import { AppContext } from '@/context/context';

import './index.less';

interface IProps {
  dataSource: {
    id: number;
    imgSrc: string;
    name: string;
    description: string;
    price: string;
  };
  // position
  index: number;
  onOpen: () => void;
}
function DoodsArea(props: IProps) {
  const { index, dataSource, onOpen } = props || {};
  const { id, imgSrc, name, description, price } = dataSource || {};
  const { dispatch } = useContext(AppContext);
  // determine whether it is an even number
  const isEven = index % 2 === 0;
  // shopping cart add
  const handleClick = (value: {
    id: number;
    imgSrc: string;
    name: string;
    price: string;
    quantity: number;
  }) => {
    dispatch({ type: 'ADD', payload: value });
    onOpen();
  };
  return (
    <Flex direction={{ base: 'column', md: isEven ? 'row-reverse' : 'row' }} w="80%" mt={50}>
      {/* goods image */}
      <Image
        className={isEven ? 'goods-list-img' : 'goods-list-img-reverse'}
        src={imgSrc}
        alt={name}
        boxSize="400px"
        borderRadius="8px"
      />
      <Flex direction="column" justify="center" ml={10}>
        {/* goods name */}
        <Text mt={5} mb={5} fontSize={40}>
          {name}
        </Text>
        {/* goods  description */}
        <Text mt={5} mb={5} fontSize={20}>
          {description}
        </Text>
        {/* goods price */}
        <Text pb={16} fontSize={20}>
          {price}
        </Text>
        {/* add btn */}
        <Button
          bg="#133986"
          color="white"
          w={40}
          onClick={() => handleClick({ id, imgSrc, name, price, quantity: 1 })}
        >
          ADD TO CART
        </Button>
      </Flex>
    </Flex>
  );
}

export default DoodsArea;
