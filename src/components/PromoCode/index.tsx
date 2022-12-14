/**
 * @description promo code
 * @author zheng
 */

import { ChangeEvent, useState } from 'react';
import { Flex, Button, Input, InputRightAddon, InputGroup } from '@chakra-ui/react';

function PromoCode() {
  const [isShowPromoCode, setShowPromoCode] = useState<boolean>(false);
  // promo code
  const [value, setValue] = useState<string>();
  // verify promo code
  const [isInvalid, setInvalid] = useState<boolean>(false);
  const togglePromoCode = () => {
    setShowPromoCode(res => !res);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const verifyPromoCode = () => {
    console.log(value);
    setInvalid(true);
  };
  return (
    <Flex mt={2} flex={1}>
      {!isShowPromoCode ? (
        <Button
          w="100%"
          bg="white"
          border="1px solid gray"
          onClick={togglePromoCode}
          size={{ base: 'xs', md: 'md' }}
        >
          promo code?
        </Button>
      ) : (
        <>
          <InputGroup>
            <Input
              w="80%"
              placeholder="Promo code"
              onChange={handleChange}
              isInvalid={isInvalid}
              size={{ base: 'xs', md: 'md' }}
            />
            <Button onClick={verifyPromoCode} size={{ base: 'xs', md: 'md' }}>
              Apply
            </Button>
          </InputGroup>
          <Button onClick={togglePromoCode} size={{ base: 'xs', md: 'md' }}>
            Cancel
          </Button>
        </>
      )}
    </Flex>
  );
}

export default PromoCode;
