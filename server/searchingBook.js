const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const searchingBook = async (name, page) => {
  const book_title = encodeURIComponent(name); // 책 제목 검색어 어린왕자

  const getHtml = async () => {
    //알라딘에서 북
    try {
      return await axios.get(
        `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=${book_title}&x=0&y=0&page=${page}`,
      );
    } catch (error) {
      console.error(error);
    }
  };

  const get_Html = getHtml().then((html) => {
    const $ = cheerio.load(html.data);
    const $bodyList = $('div.ss_book_box');
    let liList = [];

    $bodyList.each(function (i, element) {
      liList[i] = {
        id: i,
        coverImg: $(this).find('img.i_cover').attr('src'),
        title: $(this).find('a.bo3 b').text(),
        writer: $(this).find('div.ss_book_list ul li a').eq(3).text(),
        translator: $(this).find('div.ss_book_list ul li a').eq(4).text(),
        publisher: $(this).find('div.ss_book_list ul li a').eq(5).text(),
        price: $(this).find('span.ss_p2').text(),
        url: $(this).find('a.bo3').attr('href'),
      };
    });

    const data = liList.filter((n) => n.title);
    return data;
  });

  return await get_Html;
};

module.exports = searchingBook;
