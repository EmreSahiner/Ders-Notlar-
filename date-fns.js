//1. install
//npm install date-fns

//2. gerekli metodları import et
import { differenceInDays, formatDistanceToNow, format } from "date-fns";

//3. gerekli ise dil ayarlarını dat-fns/locale'deb import et.
import { tr } from "date-fns/locale";

//4. kullanımı
formatDistanceToNow(date, { addSuffix: true, locale: tr }); //3 gün sonra

differenceInDays(sonrakiTarih, oncekiTarih); // 5

format(new Date(1995, 6, 2), "d MMMM yyyy cccc", {
  //2 Temmuz 1995 Pazar
  locale: tr,
});
//https://date-fns.org/v3.6.0/docs/format
