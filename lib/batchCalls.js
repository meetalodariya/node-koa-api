exports.getBatchCall = async (batchSize, array, func) => {
  const results = [];
  let result = [];
  let clients = [...array];
  while (clients.length) {
    let chunk = clients.splice(0, batchSize);
    result = await Promise.all(
      chunk.map(async (element) => {
        let { marketdetails: res } = await func(element.id);
        return res;
      })
    );
    results.push(...result);
  }
  return results;
};
