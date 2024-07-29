// React Giriş ;
// Imparative yaklaşım ? ===> Nasıl yaparım demektir. Tek tek tarif etmektir. Yani DOM MANİPÜLASYONLARI
// Declarative yaklaşım ? ==> Ne yapılacak ? Component lar ve react yapısının temelidir.
// React nedir ? Declarative bir UI (KULLANICI ARAYÜZÜ KÜTÜPHANE) Kütüphanesidir.
//Amacı ? => Componentlar ile çalışmayı kolaylaştırmak, Dom işlemlerini daha performanslı hale getirir, Kodların yönetilebilirliğini arttırmak.
//Kodların yeniden kullanılabilirliği ve çok developer aynı projede çalışmasını kolaylaştırır. Facebook developer ların oluşturduğu bir kütüphanedir.
// .jsx formatında HTML, JS , CSS aynı  dosyada yazılabildiği dosya formatıdır.
//Virtual Dom (Sanal DOM), Sayfadaki etkileşimleri hızlı ve performanlı yapmak için bir yöntemdir.
// JSX  ==> HTML ile JS aynı dosyaya yazsak ne olur ?
// BABEL : JSX kodlarını browserını anlayacağı js kodlarına dönüştürür.
// npm install --save-dev @babel/core @babel/cli @babel/preset-env kurulumudur.
// babel algılaması için script tagine type="text/babel" ekleyelim.

// Babel   const baslik = <h1>Selam Dünya </h1> bunu programın anlamasına yarar .

/*
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  

    bunları body taginin bitiminden hmen önce ekle , örneği index.html dosyasında .
    Daha sonra reacctDom.createRoot ve render metotlarını bu şekilde kullanıırız.

    <script type="text/babel">
      const baslik = <h1>Selam Dünya </h1>
      const container = document.getElementById( "app" );
      const root = ReactDom.createRoot( container );
      root.render( baslik )
    </script>
    
*/

function Title() {
  return <h1>Hi, React!</h1>;
}
const container = document.getElementById("app");
const root = ReactDom.createRoot(container);
root.render(<Title />);
