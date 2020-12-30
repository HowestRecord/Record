export const fileToUint8String = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result) {
        resolve(new Uint8Array(reader.result as ArrayBuffer).toString());
      }
    };

    reader.readAsArrayBuffer(file);
  });
};

export const uInt8StringToBlob = (uint8String?: string) => {
  if (!uint8String && typeof uint8String !== 'string') {
    return undefined;
  }
  const array = new Uint8Array(uint8String.split(',').map(Number));
  return new Blob([array.buffer]);
};
