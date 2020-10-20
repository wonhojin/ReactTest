const axios = require('axios');
const cheerio = require('cheerio');

const allInfo = async (ISBN) => {
  let book_info = {};

  const get_aladin = async () => {
    const getHtml = async () => {
      try {
        return await axios.get(
          `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=${ISBN}&x=0&y=0`,
        );
      } catch (error) {
        console.error(error);
      }
    };

    return getHtml().then((html) => {
      let aladinbook = {};
      const $ = cheerio.load(html.data);
      const $bodyList = $('div.ss_book_box').eq(0);

      $bodyList.each(function (i, element) {
        aladinbook = {
          id: 1,
          price: $(this).find('span.ss_p2').text(),
          url: $(this).find('a.bo3').attr('href'),
        };
      });

      return aladinbook;
    });
  };

  const get_kyobo = async () => {
    const getHtml = async () => {
      try {
        return await axios.get(
          `https://search.kyobobook.co.kr/web/search?vPstrKeyWord=${ISBN}&orderClick=LAG`,
        );
      } catch (error) {
        console.error(error);
      }
    };

    return getHtml().then((html) => {
      let kyobobook = {};
      const $ = cheerio.load(html.data);
      const $bodyList = $('table.type_list').eq(0);

      $bodyList.each(function (i, element) {
        kyobobook = {
          id: 2,
          price: $(this).find('div.sell_price strong').text(),
          url: $(this).find('div.title a').attr('href'),
        };
      });

      const data = kyobobook;
      return data;
    });
  };

  const get_interpark = async () => {
    const getHtml = async () => {
      try {
        return await axios.get(
          `http://bsearch.interpark.com/dsearch/book.jsp?sch=all&sc.shopNo=&bookblockname=s_main&booklinkname=s_main&bid1=search_auto&bid2=product&bid3=000&bid4=001&query=${ISBN}`,
        );
      } catch (error) {
        console.error(error);
      }
    };

    return getHtml().then((html) => {
      let interparkBook = {};
      const $ = cheerio.load(html.data);
      const $bodyList = $('div.list_wrap').eq(0);

      $bodyList.each(function (i, element) {
        interparkBook = {
          id: 3,
          price:
            $(this)
              .find('div.price p.FnowCoupon span.nowMoney')
              .text()
              .split('��')[0] + '원',
          url: $(this).find('p.tit b a').eq(0).attr('href'),
        };
      });

      const data = interparkBook;
      return data;
    });
  };

  const get_yes = async () => {
    const getHtml = async () => {
      try {
        return await axios.get(
          `http://www.yes24.com/searchcorner/Search?keywordAd=&keyword=&domain=ALL&qdomain=%C0%FC%C3%BC&Wcode=001_005&query=${ISBN}`,
        );
      } catch (error) {
        console.error(error);
      }
    };

    return getHtml().then((html) => {
      let yesbook = {};
      const $ = cheerio.load(html.data);
      const $bodyList = $('td.goods_infogrp').eq(0);

      $bodyList.each(function (i, element) {
        yesbook = {
          id: 4,
          price: $(this).find('em.yes_b').text().split('9')[0] + '원',
          url: 'http://www.yes24.com' + $(this).find('a').attr('href'),
        };
      });

      const data = yesbook;
      return data;
    });
  };

  const get_eleven = async () => {
    const openApiKey = '5662e8289041b7883116b51e95e4e409';

    const getHtml = async () => {
      try {
        return await axios.get(
          `https://openapi.11st.co.kr/openapi/OpenApiService.tmall?key=${openApiKey}&apiCode=ProductSearch&keyword=${ISBN}`,
        );
      } catch (error) {
        console.error(error);
      }
    };

    return getHtml().then((html) => {
      let elevenBook = {};
      const $ = cheerio.load(html.data);
      const $bodyList = $('product');

      $bodyList.each(function (i, element) {
        elevenBook = {
          id: 5,
          price: $(this).find('saleprice').text() + '원',
          url: $(this)
            .find('detailpageurl')
            .html()
            .toString()
            .substring(11)
            .split(']')[0],
        };
      });

      const data = elevenBook;
      return data;
    });
  };

  // 알라딘 1, 교보 2, 인터파크 3, 예스24 4, 11번가
  await get_aladin().then((data) => (book_info.알라딘 = data));
  await get_kyobo().then((data) => (book_info.교보 = data));
  await get_interpark().then((data) => (book_info.인터파크 = data));
  await get_yes().then((data) => (book_info.예스24 = data));
  await get_eleven().then((data) => (book_info.번가11 = data));

  return book_info;
};

module.exports = allInfo;
