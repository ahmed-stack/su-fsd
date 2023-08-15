export const dateSort = (array) => {
  return array.sort((a, b) => {
    let aTime = new Date(a.created).getTime();
    let bTime = new Date(b.created).getTime();

    return aTime - bTime;
  });
};

export const aToZSort = (array) => {
  return array.sort((a, b) => {
    let aName = a.name.replace(/.txt/, "");
    let bName = b.name.replace(/.txt/, "");

    return new Intl.Collator("en", { numeric: true }).compare(aName, bName);
  });
};


export const zToASort = (array) => {
    return array.sort((a, b) => {
      let aName = a.name.replace(/.txt/, "");
      let bName = b.name.replace(/.txt/, "");
  
      return new Intl.Collator("en", { numeric: true }).compare(bName, aName);
    });
  };
  