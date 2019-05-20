const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  administracija: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  anketiranje: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  ciscenje: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  fizickiposlovi: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  ljepota: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  prijevoz: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  prodaja: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  sportizdravlje: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  turizam: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  ugostiteljstvo: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  ostalo: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  },

  svekategorije: {
    totalads: {
      type: Number,
      required: true
    },
    avghourlyrate: {
      type: Number,
      required: true
    },
    lastadcreatedat: {
      type: Date,
      required: true
    }
  }
});

module.exports = Stats = mongoose.model("stats", StatsSchema);
