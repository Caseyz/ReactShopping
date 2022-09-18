/**
 * @description RadioBtn
 * @author zheng
 */

import { Flex } from '@chakra-ui/react';

interface IProps {
  size: number;
  bg: string;
  content: React.ReactElement;
  onClick: () => void;
}
function RadioBtn(props: IProps) {
  const { size, bg, content, onClick } = props || {};
  return (
    <Flex
      justify="center"
      align="center"
      w={size}
      h={size}
      borderRadius="50%"
      bg={bg}
      cursor="pointer"
      onClick={onClick}
    >
      {content}
    </Flex>
  );
}

export default RadioBtn;
