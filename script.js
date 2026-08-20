const units = {
  length: {
    meter:{name:"Meter",factor:1}, kilometer:{name:"Kilometer",factor:1000},
    centimeter:{name:"Centimeter",factor:.01}, millimeter:{name:"Millimeter",factor:.001},
    mile:{name:"Mile",factor:1609.344}, yard:{name:"Yard",factor:.9144},
    foot:{name:"Foot",factor:.3048}, inch:{name:"Inch",factor:.0254},
    nautical_mile:{name:"Nautical mile",factor:1852}
  },
  weight: {
    kilogram:{name:"Kilogram",factor:1}, gram:{name:"Gram",factor:.001},
    milligram:{name:"Milligram",factor:.000001}, tonne:{name:"Tonne",factor:1000},
    pound:{name:"Pound",factor:.45359237}, ounce:{name:"Ounce",factor:.028349523125},
    stone:{name:"Stone",factor:6.35029318}
  },
  temperature: {celsius:{name:"Celsius"}, fahrenheit:{name:"Fahrenheit"}, kelvin:{name:"Kelvin"}},
  area: {
    square_meter:{name:"Square meter",factor:1}, square_kilometer:{name:"Square kilometer",factor:1e6},
    square_centimeter:{name:"Square centimeter",factor:1e-4}, square_foot:{name:"Square foot",factor:.09290304},
    square_yard:{name:"Square yard",factor:.83612736}, acre:{name:"Acre",factor:4046.8564224},
    hectare:{name:"Hectare",factor:10000}, square_mile:{name:"Square mile",factor:2589988.110336}
  },
  volume: {
    liter:{name:"Liter",factor:1}, milliliter:{name:"Milliliter",factor:.001},
    cubic_meter:{name:"Cubic meter",factor:1000}, gallon_us:{name:"US gallon",factor:3.785411784},
    quart_us:{name:"US quart",factor:.946352946}, pint_us:{name:"US pint",factor:.473176473},
    cup_us:{name:"US cup",factor:.2365882365}, fluid_ounce_us:{name:"US fluid ounce",factor:.0295735295625}
  },
  time: {
    second:{name:"Second",factor:1}, millisecond:{name:"Millisecond",factor:.001},
    minute:{name:"Minute",factor:60}, hour:{name:"Hour",factor:3600},
    day:{name:"Day",factor:86400}, week:{name:"Week",factor:604800}, year:{name:"Year",factor:31536000}
  },
  speed: {
    "meter per second":{name:"Meter per second",factor:1},
    "kilometer per hour":{name:"Kilometer per hour",factor:1000/3600},
    "mile per hour":{name:"Mile per hour",factor:1609.344/3600},
    knot:{name:"Knot",factor:1852/3600},
    "foot per second":{name:"Foot per second",factor:.3048}
  },
  data: {
    bit:{name:"Bit",factor:1/8}, byte:{name:"Byte",factor:1},
    kilobyte:{name:"Kilobyte",factor:1024}, megabyte:{name:"Megabyte",factor:1024**2},
    gigabyte:{name:"Gigabyte",factor:1024**3}, terabyte:{name:"Terabyte",factor:1024**4},
    petabyte:{name:"Petabyte",factor:1024**5}
  }
};

const currencies = {
  USD:"US Dollar", NGN:"Nigerian Naira", EUR:"Euro", GBP:"British Pound",
  CAD:"Canadian Dollar", AUD:"Australian Dollar", JPY:"Japanese Yen",
  CHF:"Swiss Franc", CNY:"Chinese Yuan", INR:"Indian Rupee",
  ZAR:"South African Rand", GHS:"Ghanaian Cedi", AED:"UAE Dirham",
  SAR:"Saudi Riyal", KES:"Kenyan Shilling", BRL:"Brazilian Real",
  NZD:"New Zealand Dollar", SGD:"Singapore Dollar"
};

let currentType = "length";
let lastResult = "";

const $ = id => document.getElementById(id);

function setType(type){
  currentType=type;
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.type===type));
  fillSelects();
  showPage("converter");
  convert();
}

function fillSelects(){
  const from=$("fromUnit"), to=$("toUnit");
  from.innerHTML=""; to.innerHTML="";
  const source=currentType==="currency"?currencies:units[currentType];
  Object.entries(source).forEach(([key,obj])=>{
    const name=currentType==="currency"?`${key} — ${obj}`:obj.name;
    from.add(new Option(name,key)); to.add(new Option(name,key));
  });
  if(currentType==="currency"){from.value="USD";to.value="NGN";}
  else if(currentType==="length"){from.value="meter";to.value="foot";}
  else if(currentType==="weight"){from.value="kilogram";to.value="pound";}
  else if(currentType==="temperature"){from.value="celsius";to.value="fahrenheit";}
  else {const keys=Object.keys(source);from.value=keys[0];to.value=keys[1]||keys[0];}
}

function convertTemperature(value,from,to){
  let c;
  if(from==="celsius") c=value;
  else if(from==="fahrenheit") c=(value-32)*5/9;
  else c=value-273.15;
  if(to==="celsius") return c;
  if(to==="fahrenheit") return c*9/5+32;
  return c+273.15;
}

async function convertCurrency(value,from,to){
  if(from===to) return {value,rate:1,source:"Same currency"};
  try{
    const url=`https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    const response=await fetch(url);
    if(!response.ok) throw new Error("Currency API error");
    const data=await response.json();
    const rate=data.rates[to];
    if(!rate) throw new Error("Currency not supported");
    return {value:value*rate,rate,source:"Live exchange rate"};
  }catch(e){
    throw new Error("Live currency rates are unavailable. Check your internet connection.");
  }
}

function formatNumber(n){
  if(!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined,{maximumFractionDigits:8}).format(n);
}

async function convert(){
  const amount=Number($("amount").value);
  const from=$("fromUnit").value, to=$("toUnit").value;
  if(!Number.isFinite(amount)){ $("result").textContent="Enter a valid number"; return; }

  $("result").textContent="Converting…";
  $("rateInfo").textContent="";
  try{
    let value, rateText="";
    if(currentType==="currency"){
      const r=await convertCurrency(amount,from,to);
      value=r.value;
      rateText=r.source+(r.rate?` • 1 ${from} = ${formatNumber(r.rate)} ${to}`:"");
    }else if(currentType==="temperature"){
      value=convertTemperature(amount,from,to);
    }else{
      const a=units[currentType][from].factor;
      const b=units[currentType][to].factor;
      value=amount*a/b;
    }
    const fromName=currentType==="currency"?from:units[currentType][from].name;
    const toName=currentType==="currency"?to:units[currentType][to].name;
    lastResult=`${formatNumber(amount)} ${fromName} = ${formatNumber(value)} ${toName}`;
    $("result").textContent=lastResult;
    $("rateInfo").textContent=rateText;
  }catch(e){
    $("result").textContent=e.message;
  }
}

function swap(){
  const a=$("fromUnit").value,b=$("toUnit").value;
  $("fromUnit").value=b;$("toUnit").value=a;convert();
}

function showPage(name){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const page=$(name+"Page"); if(page) page.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function quickSet(type,from,to){
  setType(type);
  $("fromUnit").value=from;$("toUnit").value=to;
  $("amount").value=1;
  convert();
}

document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>setType(b.dataset.type)));
$("amount").addEventListener("input",()=>convert());
$("fromUnit").addEventListener("change",()=>convert());
$("toUnit").addEventListener("change",()=>convert());
$("convertBtn").addEventListener("click",()=>convert());
$("swapBtn").addEventListener("click",swap);

$("copyBtn").addEventListener("click",async()=>{
  if(!lastResult)return;
  try{
    await navigator.clipboard.writeText(lastResult);
    $("copyBtn").textContent="Copied ✓";
    setTimeout(()=>$("copyBtn").textContent="Copy result",1200);
  }catch{alert(lastResult);}
});

document.querySelectorAll("[data-quick]").forEach(b=>b.addEventListener("click",()=>{
  const q=b.dataset.quick;
  const map={
    "kg-lb":["weight","kilogram","pound"],
    "mi-km":["length","mile","kilometer"],
    "c-f":["temperature","celsius","fahrenheit"],
    "usd-ngn":["currency","USD","NGN"]
  };
  quickSet(...map[q]);
}));

$("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  $("themeBtn").textContent=document.body.classList.contains("dark")?"☀️":"🌙";
  localStorage.setItem("unitora-dark",document.body.classList.contains("dark"));
});
if(localStorage.getItem("unitora-dark")==="true"){
  document.body.classList.add("dark");$("themeBtn").textContent="☀️";
}

fillSelects();
convert();
