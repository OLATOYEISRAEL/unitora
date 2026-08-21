// =====================================================
// ULTIMATE CONVERTER
// Unit + Currency Conversion Engine
// =====================================================

const units = {

  // =========================
  // LENGTH
  // =========================
  length: {
    millimeter: { name: "Millimeter", factor: 0.001 },
    centimeter: { name: "Centimeter", factor: 0.01 },
    meter: { name: "Meter", factor: 1 },
    kilometer: { name: "Kilometer", factor: 1000 },
    inch: { name: "Inch", factor: 0.0254 },
    foot: { name: "Foot", factor: 0.3048 },
    yard: { name: "Yard", factor: 0.9144 },
    mile: { name: "Mile", factor: 1609.344 },
    nautical_mile: { name: "Nautical mile", factor: 1852 }
  },

  // =========================
  // WEIGHT / MASS
  // =========================
  weight: {
    microgram: { name: "Microgram", factor: 0.000000001 },
    milligram: { name: "Milligram", factor: 0.000001 },
    gram: { name: "Gram", factor: 0.001 },
    kilogram: { name: "Kilogram", factor: 1 },
    tonne: { name: "Tonne", factor: 1000 },
    ounce: { name: "Ounce", factor: 0.028349523125 },
    pound: { name: "Pound", factor: 0.45359237 },
    stone: { name: "Stone", factor: 6.35029318 }
  },

  // =========================
  // TEMPERATURE
  // =========================
  temperature: {
    celsius: { name: "Celsius" },
    fahrenheit: { name: "Fahrenheit" },
    kelvin: { name: "Kelvin" }
  },

  // =========================
  // AREA
  // =========================
  area: {
    square_millimeter: { name: "Square millimeter", factor: 0.000001 },
    square_centimeter: { name: "Square centimeter", factor: 0.0001 },
    square_meter: { name: "Square meter", factor: 1 },
    square_kilometer: { name: "Square kilometer", factor: 1000000 },
    square_inch: { name: "Square inch", factor: 0.00064516 },
    square_foot: { name: "Square foot", factor: 0.09290304 },
    square_yard: { name: "Square yard", factor: 0.83612736 },
    square_mile: { name: "Square mile", factor: 2589988.110336 },
    acre: { name: "Acre", factor: 4046.8564224 },
    hectare: { name: "Hectare", factor: 10000 }
  },

  // =========================
  // VOLUME
  // =========================
  volume: {
    milliliter: { name: "Milliliter", factor: 0.001 },
    liter: { name: "Liter", factor: 1 },
    cubic_meter: { name: "Cubic meter", factor: 1000 },
    cubic_centimeter: { name: "Cubic centimeter", factor: 0.001 },
    gallon_us: { name: "US gallon", factor: 3.785411784 },
    quart_us: { name: "US quart", factor: 0.946352946 },
    pint_us: { name: "US pint", factor: 0.473176473 },
    cup_us: { name: "US cup", factor: 0.2365882365 },
    fluid_ounce_us: { name: "US fluid ounce", factor: 0.0295735295625 }
  },

  // =========================
  // TIME
  // =========================
  time: {
    millisecond: { name: "Millisecond", factor: 0.001 },
    second: { name: "Second", factor: 1 },
    minute: { name: "Minute", factor: 60 },
    hour: { name: "Hour", factor: 3600 },
    day: { name: "Day", factor: 86400 },
    week: { name: "Week", factor: 604800 },
    month: { name: "Month (30 days)", factor: 2592000 },
    year: { name: "Year (365 days)", factor: 31536000 }
  },

  // =========================
  // SPEED
  // =========================
  speed: {
    meter_per_second: {
      name: "Meter per second",
      factor: 1
    },

    kilometer_per_hour: {
      name: "Kilometer per hour",
      factor: 1000 / 3600
    },

    mile_per_hour: {
      name: "Mile per hour",
      factor: 1609.344 / 3600
    },

    foot_per_second: {
      name: "Foot per second",
      factor: 0.3048
    },

    knot: {
      name: "Knot",
      factor: 1852 / 3600
    }
  },

  // =========================
  // DIGITAL DATA
  // =========================
  data: {
    bit: { name: "Bit", factor: 1 / 8 },
    byte: { name: "Byte", factor: 1 },
    kilobyte: { name: "Kilobyte", factor: 1024 },
    megabyte: { name: "Megabyte", factor: 1024 ** 2 },
    gigabyte: { name: "Gigabyte", factor: 1024 ** 3 },
    terabyte: { name: "Terabyte", factor: 1024 ** 4 },
    petabyte: { name: "Petabyte", factor: 1024 ** 5 }
  },

  // =========================
  // ENERGY
  // =========================
  energy: {
    joule: { name: "Joule", factor: 1 },
    kilojoule: { name: "Kilojoule", factor: 1000 },
    calorie: { name: "Calorie", factor: 4.184 },
    kilocalorie: { name: "Kilocalorie", factor: 4184 },
    watt_hour: { name: "Watt-hour", factor: 3600 },
    kilowatt_hour: { name: "Kilowatt-hour", factor: 3600000 },
    btu: { name: "BTU", factor: 1055.05585 }
  },

  // =========================
  // POWER
  // =========================
  power: {
    watt: { name: "Watt", factor: 1 },
    kilowatt: { name: "Kilowatt", factor: 1000 },
    megawatt: { name: "Megawatt", factor: 1000000 },
    horsepower: { name: "Horsepower", factor: 745.699872 }
  },

  // =========================
  // PRESSURE
  // =========================
  pressure: {
    pascal: { name: "Pascal", factor: 1 },
    kilopascal: { name: "Kilopascal", factor: 1000 },
    megapascal: { name: "Megapascal", factor: 1000000 },
    bar: { name: "Bar", factor: 100000 },
    psi: { name: "PSI", factor: 6894.757293 },
    atmosphere: { name: "Atmosphere", factor: 101325 },
    mmhg: { name: "Millimeter of mercury", factor: 133.322368 }
  },

  // =========================
  // FORCE
  // =========================
  force: {
    newton: { name: "Newton", factor: 1 },
    kilonewton: { name: "Kilonewton", factor: 1000 },
    dyne: { name: "Dyne", factor: 0.00001 },
    pound_force: { name: "Pound-force", factor: 4.448221615 }
  },

  // =========================
  // FREQUENCY
  // =========================
  frequency: {
    hertz: { name: "Hertz", factor: 1 },
    kilohertz: { name: "Kilohertz", factor: 1000 },
    megahertz: { name: "Megahertz", factor: 1000000 },
    gigahertz: { name: "Gigahertz", factor: 1000000000 }
  },

  // =========================
  // ANGLE
  // =========================
  angle: {
    degree: { name: "Degree", factor: 1 },
    radian: { name: "Radian", factor: 57.29577951308232 },
    gradian: { name: "Gradian", factor: 0.9 },
    arcminute: { name: "Arcminute", factor: 1 / 60 },
    arcsecond: { name: "Arcsecond", factor: 1 / 3600 }
  },

  // =========================
  // ACCELERATION
  // =========================
  acceleration: {
    meter_per_second_squared: {
      name: "Meter per second²",
      factor: 1
    },

    kilometer_per_second_squared: {
      name: "Kilometer per second²",
      factor: 1000
    },

    foot_per_second_squared: {
      name: "Foot per second²",
      factor: 0.3048
    },

    standard_gravity: {
      name: "Standard gravity",
      factor: 9.80665
    }
  },

  // =========================
  // TORQUE
  // =========================
  torque: {
    newton_meter: {
      name: "Newton-meter",
      factor: 1
    },

    kilonewton_meter: {
      name: "Kilonewton-meter",
      factor: 1000
    },

    pound_foot: {
      name: "Pound-foot",
      factor: 1.355817948
    },

    pound_inch: {
      name: "Pound-inch",
      factor: 0.112984829
    }
  },

  // =========================
  // DENSITY
  // =========================
  density: {
    kilogram_per_cubic_meter: {
      name: "Kilogram per cubic meter",
      factor: 1
    },

    gram_per_cubic_centimeter: {
      name: "Gram per cubic centimeter",
      factor: 1000
    },

    pound_per_cubic_foot: {
      name: "Pound per cubic foot",
      factor: 16.018463
    }
  },

  // =========================
  // LIGHT
  // =========================
  light: {
    lux: {
      name: "Lux",
      factor: 1
    },

    foot_candle: {
      name: "Foot-candle",
      factor: 10.7639104
    }
  }
};


// =====================================================
// CURRENCIES
// =====================================================

const currencies = {
  USD: "US Dollar",
  NGN: "Nigerian Naira",
  EUR: "Euro",
  GBP: "British Pound",
  CAD: "Canadian Dollar",
  AUD: "Australian Dollar",
  JPY: "Japanese Yen",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  INR: "Indian Rupee",
  ZAR: "South African Rand",
  GHS: "Ghanaian Cedi",
  AED: "UAE Dirham",
  SAR: "Saudi Riyal",
  KES: "Kenyan Shilling",
  BRL: "Brazilian Real",
  NZD: "New Zealand Dollar",
  SGD: "Singapore Dollar",
  KRW: "South Korean Won",
  MYR: "Malaysian Ringgit",
  IDR: "Indonesian Rupiah",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  BDT: "Bangladeshi Taka",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  MXN: "Mexican Peso",
  RUB: "Russian Ruble",
  PLN: "Polish Zloty",
  SEK: "Swedish Krona",
  NOK: "Norwegian Krone",
  DKK: "Danish Krone",
  HKD: "Hong Kong Dollar",
  TWD: "Taiwan Dollar",
  VND: "Vietnamese Dong",
  EGP: "Egyptian Pound",
  MAD: "Moroccan Dirham",
  KWD: "Kuwaiti Dinar",
  QAR: "Qatari Riyal",
  BHD: "Bahraini Dinar",
  OMR: "Omani Rial"
};


// =====================================================
// GLOBAL VARIABLES
// =====================================================

let currentType = "length";
let lastResult = "";

const currencyCache = {};

const $ = id => document.getElementById(id);


// =====================================================
// SET CONVERTER TYPE
// =====================================================

function setType(type) {

  if (type !== "currency" && !units[type]) {
    console.error("Unknown converter:", type);
    return;
  }

  currentType = type;

  document.querySelectorAll(".tab").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.type === type
    );
  });

  fillSelects();
  showPage("converter");
  convert();
}


// =====================================================
// FILL DROPDOWNS
// =====================================================

function fillSelects() {

  const from = $("fromUnit");
  const to = $("toUnit");

  if (!from || !to) return;

  from.innerHTML = "";
  to.innerHTML = "";

  const source =
    currentType === "currency"
      ? currencies
      : units[currentType];

  Object.entries(source).forEach(([key, obj]) => {

    const name =
      currentType === "currency"
        ? `${key} — ${obj}`
        : obj.name;

    from.add(new Option(name, key));
    to.add(new Option(name, key));
  });


  if (currentType === "currency") {

    from.value = "USD";
    to.value = "NGN";

  } else if (currentType === "length") {

    from.value = "meter";
    to.value = "foot";

  } else if (currentType === "weight") {

    from.value = "kilogram";
    to.value = "pound";

  } else if (currentType === "temperature") {

    from.value = "celsius";
    to.value = "fahrenheit";

  } else {

    const keys = Object.keys(source);

    from.value = keys[0];
    to.value = keys[1] || keys[0];
  }
}


// =====================================================
// TEMPERATURE
// =====================================================

function convertTemperature(value, from, to) {

  let celsius;

  if (from === "celsius") {
    celsius = value;
  }

  else if (from === "fahrenheit") {
    celsius = (value - 32) * 5 / 9;
  }

  else {
    celsius = value - 273.15;
  }


  if (to === "celsius") {
    return celsius;
  }

  if (to === "fahrenheit") {
    return celsius * 9 / 5 + 32;
  }

  return celsius + 273.15;
}


// =====================================================
// LIVE CURRENCY RATES
// =====================================================
//
// Uses ExchangeRate-API Open Access.
// No API key required.
// Rates are cached for 24 hours.
// =====================================================

async function getCurrencyRates(base) {

  const cached = currencyCache[base];

  const cacheDuration =
    24 * 60 * 60 * 1000;


  if (
    cached &&
    Date.now() - cached.timestamp < cacheDuration
  ) {

    return cached;
  }


  const url =
    `https://open.er-api.com/v6/latest/${encodeURIComponent(base)}`;


  const response =
    await fetch(url);


  if (!response.ok) {
    throw new Error("Currency API request failed.");
  }


  const data =
    await response.json();


  if (data.result !== "success") {
    throw new Error("Currency API returned an error.");
  }


  const result = {

    rates: data.rates,

    lastUpdate:
      data.time_last_update_utc,

    nextUpdate:
      data.time_next_update_utc,

    timestamp:
      Date.now()
  };


  currencyCache[base] = result;

  return result;
}


// =====================================================
// CURRENCY CONVERSION
// =====================================================

async function convertCurrency(
  amount,
  from,
  to
) {

  if (from === to) {

    return {
      value: amount,
      rate: 1,
      lastUpdate: null
    };
  }


  const data =
    await getCurrencyRates(from);


  const rate =
    data.rates[to];


  if (
    typeof rate !== "number" ||
    !Number.isFinite(rate)
  ) {

    throw new Error(
      `${to} is not available from the currency provider.`
    );
  }


  return {

    value:
      amount * rate,

    rate:
      rate,

    lastUpdate:
      data.lastUpdate
  };
}


// =====================================================
// NUMBER FORMAT
// =====================================================

function formatNumber(number) {

  if (!Number.isFinite(number)) {
    return "—";
  }

  return new Intl.NumberFormat(
    undefined,
    {
      maximumFractionDigits: 8
    }
  ).format(number);
}


// =====================================================
// MAIN CONVERSION
// =====================================================

async function convert() {

  const amountElement = $("amount");
  const fromElement = $("fromUnit");
  const toElement = $("toUnit");
  const resultElement = $("result");
  const rateInfoElement = $("rateInfo");


  if (
    !amountElement ||
    !fromElement ||
    !toElement ||
    !resultElement
  ) {
    return;
  }


  const amount =
    Number(amountElement.value);


  const from =
    fromElement.value;


  const to =
    toElement.value;


  if (!Number.isFinite(amount)) {

    resultElement.textContent =
      "Enter a valid number";

    if (rateInfoElement) {
      rateInfoElement.textContent = "";
    }

    return;
  }


  resultElement.textContent =
    "Converting…";


  if (rateInfoElement) {
    rateInfoElement.textContent = "";
  }


  try {

    let value;
    let rateText = "";


    // =========================
    // CURRENCY
    // =========================

    if (currentType === "currency") {

      const result =
        await convertCurrency(
          amount,
          from,
          to
        );


      value =
        result.value;


      if (result.rate) {

        rateText =
          `Live rate • 1 ${from} = ${formatNumber(result.rate)} ${to}`;

        if (result.lastUpdate) {

          rateText +=
            ` • Updated ${result.lastUpdate}`;
        }
      }
    }


    // =========================
    // TEMPERATURE
    // =========================

    else if (
      currentType === "temperature"
    ) {

      value =
        convertTemperature(
          amount,
          from,
          to
        );
    }


    // =========================
    // NORMAL UNITS
    // =========================

    else {

      const fromUnit =
        units[currentType][from];


      const toUnit =
        units[currentType][to];


      if (!fromUnit || !toUnit) {

        throw new Error(
          "Invalid unit selected."
        );
      }


      value =
        amount *
        fromUnit.factor /
        toUnit.factor;
    }


    const fromName =
      currentType === "currency"
        ? currencies[from]
        : units[currentType][from].name;


    const toName =
      currentType === "currency"
        ? currencies[to]
        : units[currentType][to].name;


    lastResult =
      `${formatNumber(amount)} ${fromName} = ${formatNumber(value)} ${toName}`;


    resultElement.textContent =
      lastResult;


    if (rateInfoElement) {
      rateInfoElement.textContent =
        rateText;
    }


  } catch (error) {

    console.error(
      "Conversion error:",
      error
    );


    resultElement.textContent =
      error.message ||
      "Unable to convert.";

    if (rateInfoElement) {
      rateInfoElement.textContent = "";
    }
  }
}


// =====================================================
// SWAP
// =====================================================

function swap() {

  const from =
    $("fromUnit");

  const to =
    $("toUnit");


  if (!from || !to) return;


  const temporary =
    from.value;


  from.value =
    to.value;


  to.value =
    temporary;


  convert();
}


// =====================================================
// PAGE NAVIGATION
// =====================================================

function showPage(name) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove(
        "active"
      );
    });


  const page =
    $(name + "Page");


  if (page) {
    page.classList.add(
      "active"
    );
  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// =====================================================
// QUICK CONVERSIONS
// =====================================================

function quickSet(
  type,
  from,
  to
) {

  setType(type);


  if ($("fromUnit")) {
    $("fromUnit").value =
      from;
  }


  if ($("toUnit")) {
    $("toUnit").value =
      to;
  }


  if ($("amount")) {
    $("amount").value =
      1;
  }


  convert();
}


// =====================================================
// EVENT LISTENERS
// =====================================================

document
  .querySelectorAll(".tab")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setType(
          button.dataset.type
        );
      }
    );
  });


if ($("amount")) {

  $("amount").addEventListener(
    "input",
    convert
  );
}


if ($("fromUnit")) {

  $("fromUnit").addEventListener(
    "change",
    convert
  );
}


if ($("toUnit")) {

  $("toUnit").addEventListener(
    "change",
    convert
  );
}


if ($("convertBtn")) {

  $("convertBtn").addEventListener(
    "click",
    convert
  );
}


if ($("swapBtn")) {

  $("swapBtn").addEventListener(
    "click",
    swap
  );
}


// =====================================================
// COPY RESULT
// =====================================================

if ($("copyBtn")) {

  $("copyBtn").addEventListener(
    "click",
    async () => {

      if (!lastResult) return;


      try {

        await navigator
          .clipboard
          .writeText(
            lastResult
          );


        $("copyBtn").textContent =
          "Copied ✓";


        setTimeout(() => {

          $("copyBtn").textContent =
            "Copy result";

        }, 1200);


      } catch {

        alert(
          lastResult
        );
      }
    }
  );
}


// =====================================================
// QUICK BUTTONS
// =====================================================

document
  .querySelectorAll("[data-quick]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const quick =
          button.dataset.quick;


        const map = {

          "kg-lb": [
            "weight",
            "kilogram",
            "pound"
          ],

          "mi-km": [
            "length",
            "mile",
            "kilometer"
          ],

          "c-f": [
            "temperature",
            "celsius",
            "fahrenheit"
          ],

          "usd-ngn": [
            "currency",
            "USD",
            "NGN"
          ]
        };


        if (map[quick]) {

          quickSet(
            ...map[quick]
          );
        }
      }
    );
  });


// =====================================================
// DARK MODE
// =====================================================

if ($("themeBtn")) {

  $("themeBtn").addEventListener(
    "click",
    () => {

      const dark =
        document.body.classList.toggle(
          "dark"
        );


      $("themeBtn").textContent =
        dark
          ? "☀️"
          : "🌙";


      localStorage.setItem(
        "unitora-dark",
        dark
      );
    }
  );
}


// =====================================================
// LOAD DARK MODE
// =====================================================

if (
  localStorage.getItem(
    "unitora-dark"
  ) === "true"
) {

  document.body.classList.add(
    "dark"
  );


  if ($("themeBtn")) {

    $("themeBtn").textContent =
      "☀️";
  }
}


// =====================================================
// START
// =====================================================

fillSelects();

convert();