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
    <Flex mt={10} flex={1}>
      {!isShowPromoCode ? (
        <Button w="100%" bg="white" border="1px solid gray" onClick={togglePromoCode}>
          promo code?
        </Button>
      ) : (
        <>
          <InputGroup>
            <Input w="80%" placeholder="Promo code" onChange={handleChange} isInvalid={isInvalid} />
            <InputRightAddon>
              <Button onClick={verifyPromoCode}>Apply</Button>
            </InputRightAddon>
          </InputGroup>
          <Button onClick={togglePromoCode}>Cancel</Button>
        </>
      )}
    </Flex>
  );
}

export default PromoCode;
