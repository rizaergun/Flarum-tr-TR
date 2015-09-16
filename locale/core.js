app.translator.plural = function(count) {
  return count == 1 ? 'one' : 'other';
};

moment.locale('fr', {
  months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
  monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
  weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
  weekdaysShort : 'Paz_Pzt_Sal_Çar_Per_Cum_Cmt'.split('_'),
  weekdaysMin : 'Pa_Pz_Sa_Ça_Pe_Cu_Cm'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'D MMMM YYYY dddd HH:mm'
  },
  calendar : {
    sameDay: '[Bugün] LT',
    nextDay: '[Yarın] LT',
    nextWeek: 'dddd [Gelecek Hafta] LT',
    lastDay: '[Son gün] LT',
    lastWeek: 'dddd [Gelecek Hafta] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : '%s sonra',
    past : '%s önce',
    s : 'birkaç saniye',
    m : 'bir dakika',
    mm : '%d dakika',
    h : 'bir saat',
    hh : '%d saat',
    d : 'bir gün',
    dd : '%d gün',
    M : 'bir ay',
    MM : '%d ay',
    y : 'bir yıl',
    yy : '%d yıl'
  },
  ordinalParse: /\d{1,2}(er|)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : '');
  },
  week : {
    dow : 1,
    doy : 4
  }
});