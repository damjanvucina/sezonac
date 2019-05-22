const categoryToCategoryStatName = category => {
  switch (category) {
    case "Administracija":
      return "administracija";

    case "Anketiranje":
      return "anketiranje";

    case "Čišćenje":
      return "ciscenje";

    case "Fizički poslovi":
      return "fizickiposlovi";

    case "Ljepota":
      return "ljepota";

    case "Prijevoz":
      return "prijevoz";

    case "Prodaja":
      return "prodaja";

    case "Sport i zdravlje":
      return "sportizdravlje";

    case "Turizam":
      return "turizam";

    case "Ugostiteljstvo":
      return "ugostiteljstvo";

    case "Ostalo":
      return "ostalo";

    case "Sve kategorije":
      return "svekategorije";
  }
};

module.exports = categoryToCategoryStatName;
