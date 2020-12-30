const ETH_REGEX = /^0x([A-Fa-f0-9]{40})$/;

export const ethAddress = (value: string) => {
  if (!value) return true;

  if (ETH_REGEX.test(value)) {
    return true;
  }

  return 'validation.eth_address';
};
