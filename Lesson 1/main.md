                                  /////!/ ===== Java Script super course ===== //////
                                                     Lesson - 1
          <!-- ! Lesson Plane ! -->

1.Java Script nima ???
2.Java Script ni idexga ulash
3.var o'zgaruvchisi haqida 4. alert() , prompt() , confirm() , document.write() , innerHTML , Template literal  
5. matematik operatorlar

<!-- * 1 -->
Odatda JS deb qisqartirilgan JavaScript, asosan veb-ishlab chiqish uchun ishlatiladigan yuqori darajadagi dasturlash tilidir. Bu ishlab chiquvchilarga veb-saytlarga interaktivlik va dinamik xususiyatlarni qo'shish imkonini beruvchi ko'p qirrali tildir. JavaScript mijoz tomonida (veb-brauzerda) va server tomonida (Node.js kabi texnologiyalar yordamida) bajarilishi mumkin. U o'zining moslashuvchanligi bilan mashhur, chunki u protsessual, ob'ektga yo'naltirilgan va funktsional dasturlash kabi turli xil dasturlash paradigmalarini qo'llab-quvvatlaydi. JavaScript shakllarini tekshirish, DOM manipulyatsiyasi, hodisalarni qayta ishlash va serverlarga asinxron so'rovlar yuborish kabi vazifalar uchun keng qo'llaniladi.
Java Script bu => hozirgi kundagi eng mashhur dasturlash tilidan bo'lib kelmoqda.

<!-- ? Java Script nima uchun kerak ??? -->

Har qanday website yoki app larni interaktiv holatga keltirish uchun , va yana foydalanuvchi bilan muloqot olib borish uchun...

<!-- * Yana qanday turlaari bor JS -->

2015 yildan beri JS ning eski versiyasi ishlatilib keingan, hozirgi kunga kelib ES6 dan keng foydalinshmoqda
Endilikda yangi zamonaviy Type Script ham rivojlanmoqda

<!-- * 2 -->

ikki xil ulash turi mavjud ya'ni asosiysi yani birinchisi index.html faylni ichida Script tag ochib js kodlarni ichiga yozish, yokida yangi js fayl ochib huddi css kabi index.ga ulash. Buni amalyotda ko'rib o'tamiz !!!

<!-- * 3 -->

var bu o'zgaruvchi saqlash uchun kerak bo'ladigan bir quti desak ham bo'ladi bir narsani olamiz va nimadir nom qo'yilgan qutiga solamiz huddi shunday.

<!-- * 4 -->
<!-- ? alert -->

User bilan qisqa muloqot olib borish

<!-- ? prompt -->

User kiritga malumotlarga qarab savollarga javob beradi

<!-- ? confirm -->

boolean qiymatga ega bo'lib ha yoki yoq savollarga javob beradi

<!-- ? document.write() -->

`document.write()` JavaScript-da veb-sahifaga kontentni dinamik ravishda yozish imkonini beruvchi usuldir. U birinchi navbatda sinov yoki oddiy namoyishlar uchun ishlatiladi, chunki u ba'zi cheklovlarga ega va zamonaviy veb-ishlab chiqishda keng foydalanish uchun tavsiya etilmaydi.
Mana `document.write()` dan qanday foydalanish mumkinligiga oddiy misol:
html

<!DOCTYPE html>
<html>
<head>
   <title>document.write() Misol</title>
</head>
<tana>
   <skript>
     document.write("Salom, dunyo!");
   </script>
</body>
</html>
<!-- !Bu misolda `document.write()` usuli `<script>` tegi ichida "Salom, dunyo!" matnini yozish uchun ishlatiladi. to'g'ridan-to'g'ri HTML hujjatining tanasiga. Sahifa yuklanganda, u yozma tarkibni ko'rsatadi.-->
 <--* HTML elementlarini yozish uchun `document.write()` dan ham foydalanishingiz mumkin, masalan: -->
<!--* html Amalyotda -->
<!DOCTYPE html>
<html>
<head>
   <title>document.write() Misol</title>
</head>
<tana>
   <skript>
     document.write("<h1>Mening veb-saytimga xush kelibsiz!</h1>");
     document.write("<p>Bu namunaviy paragraf.</p>");
   </script>
</body>
</html>
<!--! Ushbu misolda `document.write()` usuli sahifaga `<h1>` sarlavhasi va `<p>` paragraf elementini yozish uchun ishlatiladi.-->
  <!--* Shuni ta'kidlash kerakki, sahifa yuklangandan so'ng "document.write()" chaqirilsa, u sahifaning butun mazmunini qayta yozadi. Shuningdek, `document.write()` dan foydalanish sahifaning ishlashiga ta`sir qilishi va muayyan vaziyatlarda foydalanilganda muammolarga olib kelishi mumkin. Shuning uchun, odatda, veb-sahifa mazmunini dinamik ravishda boshqarish uchun, masalan, "appendChild()" yoki "innerHTML" kabi usullardan foydalangan holda DOM (Hujjat ob'ekt modeli) bilan manipulyatsiya qilish kabi boshqa zamonaviyroq yondashuvlardan foydalanish tavsiya etiladi.  -->

  <!--! innerHTML -->

<!--! `innerHTML` JavaScript-da elementning HTML tarkibini olish yoki sozlash imkonini beruvchi xususiyatdir. Bu HTML elementi ichidagi tarkibni dinamik ravishda boshqarish usulini taqdim etadi.
`innerHTML` dan qanday foydalanish mumkinligiga misol:
html -->

<!DOCTYPE html>
<html>
<head>
   <title>innerHTML misoli</title>
</head>
<tana>
   <div id="myDiv">
     <h1>Bu sarlavha</h1>
     <p>Bu paragraf.</p>
   </div>
    <skript>
     // Elementning HTML mazmunini oling
     var myDivContent = document.getElementById("myDiv").innerHTML;
     console.log(myDivContent);
      // Elementga yangi HTML tarkibini o'rnating
     document.getElementById("myDiv").innerHTML = "<h2>Yangi sarlavha</h2><p>Yangi paragraf.</p>";
   </script>
</body>
</html>
<!--! Ushbu misolda "innerHTML" xususiyati "myDiv" identifikatorli elementning HTML mazmunini olish va uni konsolga kiritish uchun ishlatiladi. So'ngra, "innerHTML" ga yangi HTML qatorni belgilash orqali yangi HTML tarkibini bir xil elementga o'rnatish uchun ishlatiladi. -->
  <!--! Shuni ta'kidlash kerakki, "innerHTML" xususiyatini o'rnatishda elementning mavjud tarkibi yangi tarkib bilan almashtiriladi. Bundan tashqari, kontentni oʻrnatish uchun “innerHTML” dan foydalanayotganda saytlararo skript (XSS) hujumlari kabi xavfsizlikning mumkin boʻlgan zaifliklaridan ehtiyot boʻling, chunki bu sahifaga oʻzboshimchalik bilan HTML kiritish imkonini beradi.
  Zamonaviy veb-ishlab chiqishda `appendChild()` yoki `createElement()` kabi usullar yordamida DOMni manipulyatsiya qilish odatda `innerHTML` ni to`g`ridan-to`g`ri o`zgartirishdan ko`ra afzalroqdir, chunki bu usullar ko`proq nazorat va yaxshi xavfsizlikni ta`minlaydi. -->

<!-- ! Template literal -->

Shablon satrlari sifatida ham tanilgan `Shablon harflari` ECMAScript 6 (ES6) da joriy qilingan xuusiyat boʻlib, JavaScript-da yanada moslashuvchan va oʻqilishi mumkin boʻlgan satr formatlash imkonini beradi. Ular bitta yoki qoʻsh tirnoq oʻrniga teskari belgilardan (`) foydalanadi va oʻrnatilgan ifodalar va koʻp qatorli satrlarga ruxsat beradi.
  Shablon harflaridan qanday foydalanish mumkinligiga misol:
const name = "Jon";
doimiy yosh = 25;
  // Shablon harflaridan foydalanish
const message = `Mening ismim ${name} va men ${age} yoshdaman.`;
  console.log(xabar);
Ushbu misolda shablonning harfi orqa tizmalar yordamida aniqlanadi. Shablon literalida biz ifodalarni `${}`ichiga qo'shish orqali joylashtirishimiz mumkin.`${}`ichidagi ifodalar baholanadi va ularning qiymatlari olingan qatorga kiritiladi.
  Yuqoridagi kodning chiqishi quyidagicha bo'ladi:
Mening ismim Jon va men 25 yoshdaman.
Shablon harflari, ayniqsa, murakkab satr birikmasi bilan ishlashda yoki satr ichida o'zgaruvchilar yoki ifodalarni kiritish kerak bo'lganda foydalidir. Shuningdek, ular qochish belgilariga ehtiyoj sezmasdan ko'p qatorli satrlarni qo'llab-quvvatlaydi.
  Shablon harflaridan foydalangan holda ko'p qatorli qatorga misol:
const she'r =`
Atirgullar qizil,
Binafshalar ko'k,
Shakar shirin,
Siz ham shundaysiz.
`;
console.log(she'r);
Chiqish quyidagicha bo'ladi:
Atirgullar qizil,
Binafshalar ko'k,
Shakar shirin,
Siz ham shundaysiz.
Shablon harflari JavaScript-da satrlar bilan ishlashning yanada ixcham va o'qilishi mumkin bo'lgan usulini taqdim etadi, bu esa dinamik qiymatlarni kiritish va ko'p qatorli satrlarni yaratishni osonlashtiradi.

<!-- !  Matematik operatorlar -->

If you are referring to mathematical operators in JavaScript, they are symbols used to perform mathematical calculations on numeric values. Here are some common mathematical operators in JavaScript:

1. Addition (+): Adds two numbers together.
2. Subtraction (-): Subtracts the second number from the first.
3. Multiplication (\*): Multiplies two numbers.
4. Division (/): Divides the first number by the second.
5. Modulo (%): Returns the remainder of the division between the first and second number.
6. Exponentiation (**): Raises the first number to the power of the second.
Here's an example that demonstrates the use of these mathematical operators:
let x = 5;
let y = 3;
let addition = x + y;
let subtraction = x - y;
let multiplication = x \* y;
let division = x / y;
let modulo = x % y;
let exponentiation = x ** y;
console.log(addition); // Output: 8
console.log(subtraction); // Output: 2
console.log(multiplication); // Output: 15
console.log(division); // Output: 1.6666666666666667
console.log(modulo); // Output: 2
console.log(exponentiation); // Output: 125
In this example, the different mathematical operators are used to perform calculations on the variables `x` and `y` . The results are then logged to the console.
Please let me know if you were referring to something else or if you have any further questions!
<!-- ! Uzb -->

Agar siz JavaScript-da matematik operatorlarni nazarda tutayotgan bo'lsangiz, ular raqamli qiymatlar bo'yicha matematik hisoblarni bajarish uchun ishlatiladigan belgilar. Mana JavaScript-da bir nechta umumiy matematik operatorlar:

1. Qo‘shish (+): Ikki raqamni birga qo‘shadi.
2. Ayirish (-): Birinchi raqamdan ikkinchi raqamni ayiradi.
3. Ko'paytirish (\*): Ikki raqamni ko'paytiradi.
4. Bo'linish (/): Birinchi raqamni ikkinchisiga bo'ladi.
5. Modulo (%): Birinchi va ikkinchi sonlar orasidagi bo'linishning qolgan qismini qaytaradi.
6. Ko'rsatkich (**): Birinchi raqamni ikkinchisining darajasiga ko'taradi.
   Mana ushbu matematik operatorlardan foydalanishni ko'rsatadigan misol:
   x = 5 bo'lsin;
   y = 3 bo'lsin;
   qo'shish = x + y bo'lsin;
   ayirish = x - y bo'lsin;
   ko'paytirish = x \* y bo'lsin;
   bo'linish = x / y bo'lsin;
   modul = x % y bo'lsin;
   daraja ko‘rsatkichi = x ** y bo‘lsin;
   console.log(qo'shimcha); // Chiqish: 8
   console.log(ayirish); // Chiqish: 2
   console.log(ko'paytirish); // Chiqish: 15
   console.log(bo'lim); // Chiqish: 1.666666666666667
   console.log(modul); // Chiqish: 2
   console.log(eksponentsiya); // Chiqish: 125
   Bu misolda `x` va `y` o`zgaruvchilari bo`yicha hisob-kitoblarni bajarish uchun turli xil matematik operatorlar qo`llaniladi. Keyin natijalar konsolga qayd qilinadi.
   Iltimos, boshqa biror narsani nazarda tutayotgan bo'lsangiz yoki boshqa savollaringiz bo'lsa, menga xabar bering!
