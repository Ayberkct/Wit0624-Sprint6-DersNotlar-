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

//Module bundler
//Kodu oprtimize eder, gereksiz kodları kaldırır(tree shaking), kodu küçültür.

//Props Kavramı !!!!!
/*
Component ;: Yeniden kullanabilir kod parçası
State: Componentların Hafızası
Props: Componenlar arası veri paylaşımı 
-HTML elemanlarındaki attribute konseptine benzer 
-Fonksiyonlardaki parametre kullanımına benzer.
-Her parent component , child componentına porps vererek onlara bazı bilgiler verir.
-HTML Attribute larını kapsar .
-Obje, dizi ve fonksiyonlar aktarılabilir .

*/

function Avatar({ person, size }) {}
function Avatar(props) {
  let person = props.person;              // Bu iki gösterimde aynı , yukarıdaki destructiring diye geçiyor.
  let size = props.size;
  //:..
}

/*
HTML elemanlarının sahip oldukları html sttributeları 
bizim tanımladığımız porplar 
children propu
-Component tagları arasında kalan kısım 
<title>SelamDünya!</title> children propu "selam dünya "
Proplar child componenları içinde sadece okunabilir , değiştirilemez.

*/

/*
Veri akışı parent dan child a doğru akar.
Childlarda olan verileri parenta taşımak : STATE KALDIRMAK DENİR.
TEK YÖLÜ AKIŞIN YÖNETİLEBİLMESİ DAHA KOLAYDIR.

*/