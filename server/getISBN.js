const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getISBN = async (ItemId) => {
  const url =
    'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=' +
    encodeURIComponent(ItemId);

  //promise 선언
  const get_ISBN = async () => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

  //promise 실행

  return get_ISBN().then((isbn) => {
    const $ = cheerio.load(isbn.data);

    const ISBN = $('meta[property="books:isbn"]').attr('content');

    return ISBN;
  });
};

module.exports = getISBN;
