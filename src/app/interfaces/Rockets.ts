export interface Rockets {
  name: String;
  type: String;
  active: Boolean;
  stages: Number;
  boosters: Number;
  cost_per_launch: Number;
  success_rate_pct: Number;
  first_flight: String;
  country: String;
  company: String;
  height: {
    meters: Number;
    feet: Number;
  };
  diameter: {
    meters: Number;
    feet: Number;
  };
  mass: {
    kg: Number;
    lb: Number;
  };
  payload_weights: [Object];
  first_stage: {
    reusable: Boolean;
    engines: Number;
    fuel_amount_tons: Number;
    burn_time_sec: Number;
    thrust_sea_level: {
      kN: Number;
      lbf: Number;
    };
    thrust_vacuum: {
      kN: Number;

      lbf: Number;
    };
  };
  second_stage: {
    reusable: Boolean;
    engines: Number;
    fuel_amount_tons: Number;
    burn_time_sec: Number;
    thrust: {
      kN: Number;
      lbf: Number;
    };
    payloads: {
      option_1: String;
      composite_fairing: {
        height: {
          meters: Number;
          feet: Number;
        };
        diameter: {
          meters: Number;
          feet: Number;
        };
      };
    };
  };
  engines: {
    number: Number;
    type: String;
    version: String;
    layout: String;
    isp: {
      sea_level: Number;
      vacuum: Number;
    };
    engine_loss_max: Number;
    propellant_1: String;
    propellant_2: String;
    thrust_sea_level: {
      kN: Number;

      lbf: Number;
    };
    thrust_vacuum: {
      kN: Number;
      lbf: Number;
    };
    thrust_to_weight: Number;
  };
  landing_legs: {
    number: Number;
    material: Object;
  };
  flickr_images: [String];
  wikipedia: String;
  description: String;
}
