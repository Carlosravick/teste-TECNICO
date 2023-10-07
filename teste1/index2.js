function removerChavesNulasEVazias(objeto) {
    for (const chave in objeto) {
      if (objeto[chave] === null || objeto[chave] === '') {
        delete objeto[chave];
      } else if (typeof objeto[chave] === 'object') {
        removerChavesNulasEVazias(objeto[chave]); // Chama recursivamente para objetos aninhados
        if (Object.keys(objeto[chave]).length === 0) {
          delete objeto[chave]; // Remove o objeto se ele estiver vazio após a remoção de chaves
        }
      }
    }
    return objeto;
  }
  
  const objetoOriginal = {
    key1: 'value1',
    key2: null,
    key3: {
      key4: ['array1'],
      key5: [],
    },
  };
  
  const objetoLimpo = removerChavesNulasEVazias(objetoOriginal);
  console.log(objetoLimpo);