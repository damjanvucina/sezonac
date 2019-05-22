import * as citiesByRegion from "../components/ads/citiesByRegion";

const filterCitiesByRegion = region => {
  let cities;

  switch (region) {
    case "Bjelovarsko-bilogorska":
      cities = citiesByRegion.Bjelovarsko_bilogorska;
      break;

    case "Brodsko-posavska":
      cities = citiesByRegion.Brodsko_posavska;
      break;

    case "Dubrovačko-neretvanska":
      cities = citiesByRegion.Dubrovacko_neretvanska;
      break;

    case "Istarska":
      cities = citiesByRegion.Istarska;
      break;

    case "Karlovačka":
      cities = citiesByRegion.Karlovacka;
      break;

    case "Koprivničko križevačka":
      cities = citiesByRegion.Koprivnicko_krizevacka;
      break;

    case "Krapinsko-zagorska":
      cities = citiesByRegion.Krapinsko_zagorska;
      break;

    case "Ličko-senjska":
      cities = citiesByRegion.Licko_senjska;
      break;

    case "Međimurska":
      cities = citiesByRegion.Medimurska;
      break;

    case "Osječko-baranjska":
      cities = citiesByRegion.Osjecko_baranjska;
      break;

    case "Požeško-slavonska":
      cities = citiesByRegion.Pozesko_slavonska;
      break;

    case "Primorsko-goranska":
      cities = citiesByRegion.Primorsko_goranska;
      break;

    case "Sisačko-moslavačka":
      cities = citiesByRegion.Sisacko_moslovacka;
      break;

    case "Splitsko-dalmatinska":
      cities = citiesByRegion.Splitsko_dalmatinska;
      break;

    case "Šibensko-kninska":
      cities = citiesByRegion.Sibensko_kninska;
      break;

    case "Varaždinska":
      cities = citiesByRegion.Varazdniska;
      break;

    case "Virovitičko-podravska":
      cities = citiesByRegion.Viroviticko_podravska;
      break;

    case "Vukovarsko-srijemska":
      cities = citiesByRegion.Vukovarsko_srijemska;
      break;

    case "Zadarska":
      cities = citiesByRegion.Zadarska;
      break;

    case "Zagrebačka":
      cities = citiesByRegion.Zagrebacka;
      break;

    case "Grad Zagreb":
      cities = citiesByRegion.Grad_Zagreb;
      break;

    default:
      break;
  }

  return cities;
};

export default filterCitiesByRegion;
