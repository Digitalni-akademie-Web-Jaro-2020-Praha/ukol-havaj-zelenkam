'use strict';

let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};
let osoba3 = {
  jmeno: 'Martina',
  uspory: 12000
};
let osoba4 = {
  jmeno: 'Petra',
  uspory: 48000
};
let osoba5 = {
  jmeno: 'Klára',
  uspory: 50000
};
let osoba6 = {
  jmeno: 'Alice',
  uspory: 73000
};

const pojedeme = (osoba1, osoba2) => {

  if (osoba1.uspory + osoba2.uspory >= 100000) {
    console.log(`${osoba1.jmeno} a ${osoba2.jmeno} mají dohromady naspořeno dost a mohou vyrazit.`);

    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      console.log(`${osoba1.jmeno} a ${osoba2.jmeno} mají každá naspořeno alespoň 50000 Kč.`);
    }

    else {
      if (osoba1.uspory < 50000) {
        const chybi = 50000 - osoba1.uspory;
        console.log(`${osoba1.jmeno} bude muset splatit ${chybi} Kč.`);
      }
      else {
        const chybi = 50000 - osoba2.uspory;
        console.log(`${osoba2.jmeno} bude muset splatit ${chybi} Kč.`);
      }
    }
  }

  else {
    const chybi = 100000 - (osoba1.uspory + osoba2.uspory);

    console.log(`${osoba1.jmeno} a ${osoba2.jmeno} budou muset ještě počkat, chybí jim celkem ${chybi} Kč.`);

    const chybiOsoba1 = 50000 - osoba1.uspory;
    const chybiOsoba2 = 50000 - osoba2.uspory;

    if (osoba1.uspory < 50000) {
      console.log(`${osoba1.jmeno} musí ještě naspořit ${chybiOsoba1} Kč.`);
    }
    else {
      console.log(`${osoba1.jmeno} má naspořeno dost.`);
    }

    if (osoba2.uspory < 50000) {
      console.log(`${osoba2.jmeno} musí ještě naspořit ${chybiOsoba2} Kč.`);
    }
    else {
      console.log(`${osoba2.jmeno} má naspořeno dost.`);
    }
  }

}

pojedeme(osoba1, osoba2);
pojedeme(osoba3, osoba4);
pojedeme(osoba4, osoba5);
pojedeme(osoba2, osoba3);
pojedeme(osoba2, osoba6);
pojedeme(osoba1, osoba4);