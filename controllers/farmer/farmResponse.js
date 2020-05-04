exports.getFormatted = async (clients, marketDetails) => {
  if (!clients || !marketDetails) {
    const err = new Error("Inappropriate client and market details provided");
    err.status = 417;
    throw err;
  }
  let dataBatch = clients.map((element, i) => {
    let details = {
      address: marketDetails[i].Address,
      maps: {
        google: marketDetails[i].GoogleLink,
      },
      products: marketDetails[i].Products,
      schedule: marketDetails[i].Schedule,
    };
    let combinedData = {
      id: element.id,
      marketName: element.marketname,
      marketDetails: { ...details },
    };
    return { ...combinedData };
  });
  return { marketPlaces: dataBatch };
};
