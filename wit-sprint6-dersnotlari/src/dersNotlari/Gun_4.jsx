// JS içinde CSS kullanmak

/*
inline style olarak => stilleri string olarak değil bir style objesi olarak verilr.
Css propertyleri camelcASE YAZILIR.
fontSize gibi 
string değerler tırnak içinde yazılır <div className="property-value çiftleri virgül ile ayrılır.

*/
<div>
  <div
    style={{
      fontSize: "21px",
      color: "blue",
      textAlign: "center",
      borderRadius: "4px",
    }}
  >
    Ayberk ÇETİNKAYA
  </div>
  // js özelliklerini CSS yazarken kullanmak /* CSS Programlama dili değildir.
  Fonkdiyon , dögü , koşullu ifade vs yok. */
  <p
    style={{
      fontSize: "21px",
      color: isImportant ? "red" : "blue",
      textAlign: "center",
      borderRadius: "4px",
    }}
  >
    Ayberk ÇETİNKAYA
  </p>
  <p className={isImportant ? "red-box" : "blue-box"}>Ayberk</p>
</div>;
