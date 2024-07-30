//JS MODULES
/*
Kütüphaneleri sadece ihtiyaç duyulan dosyalar içinde kullanmak
Dosyalar arası bir scope oluşturmak.
JS Modules 2016 dan beri kullanılıyor.
Yalnızca reacta özel değil , bu bir js özelliğidir  !
*/
/*
export Dışarı aktarmak
Fonkrisyonlarda işlem yaptıktan sonrayalnızca sonucu return ediyoruz.
Dosyalarda da yalnızca ortak kullanıma açmak istediğimiz şeyleri export ederiz.
import : İçe aktarmak
bAŞKA BİR DOYADAN EXPORT EDİLMİŞ BİR KOD PARÇASINI İÇE AKTARARAK KULLANMAK
Herşey export/import edilebilir.
-Değişkenler(array,booelan,object)
-Fonksiyonlar
-Componentlar
*/
/*
Defoult export: Tüm dosyada yalnızca 1 tane olabilir.
Named export: Sınır yoktur.

Default export genellikle bir modulün ana işlevini dışa aktarmak için kullanılırken , named export genellikle bir modulün birden çok işlevini veye değerini 
dışa aktarmak için kullanılır.

*/
export default function Profile() {}
import Profile from ".gallery";

export function Profile() {}
import { Profile } from ".galley";
