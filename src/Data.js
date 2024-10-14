const questions = [
  {
    text: "What does PV stand for in solar energy systems?",
    options: [
      { id: 0, opt: "a", text: "Photonic Voltage", isCorrect: false },
      { id: 1, opt: "b", text: "Power Voltage", isCorrect: false },
      { id: 2, opt: "c", text: "Photovoltaic", isCorrect: true },
      { id: 3, opt: "d", text: "Photoelectric", isCorrect: false }
    ]
  },
  {
    text: "In a PV + grid system, where does the excess energy generated typically go?",
    options: [
      { id: 0, opt: "a", text: "It is wasted.", isCorrect: false },
      { id: 1, opt: "b", text: "It is stored in the solar panels.", isCorrect: false },
      { id: 2, opt: "c", text: "It is sent back to the grid.", isCorrect: true },
      { id: 3, opt: "d", text: "It is used immediately.", isCorrect: false }
    ]
  },
  {
    text: "What is the main advantage of a PV + diesel generator system?",
    options: [
      { id: 0, opt: "a", text: "Diesel generators can operate at night.", isCorrect: true },
      { id: 1, opt: "b", text: "Diesel generators reduce maintenance costs.", isCorrect: false },
      { id: 2, opt: "c", text: "It eliminates grid dependence.", isCorrect: false },
      { id: 3, opt: "d", text: "Diesel generators improve panel efficiency.", isCorrect: false }
    ]
  },
  {
    text: "In a PV + battery system, what is the purpose of the battery?",
    options: [
      { id: 0, opt: "a", text: "To increase panel efficiency.", isCorrect: false },
      { id: 1, opt: "b", text: "To store excess energy for later use.", isCorrect: true },
      { id: 2, opt: "c", text: "To charge the solar panels.", isCorrect: false },
      { id: 3, opt: "d", text: "To maintain constant voltage output.", isCorrect: false }
    ]
  },
  {
    text: "What is a key advantage of a PV + grid + battery hybrid system?",
    options: [
      { id: 0, opt: "a", text: "It works only during the day.", isCorrect: false },
      { id: 1, opt: "b", text: "It can store energy and supply power during outages.", isCorrect: true },
      { id: 2, opt: "c", text: "It is cheaper to install than other systems.", isCorrect: false },
      { id: 3, opt: "d", text: "It only uses renewable energy.", isCorrect: false }
    ]
  },
  {
    text: "What distinguishes a PV + grid + diesel generator hybrid system from other systems?",
    options: [
      { id: 0, opt: "a", text: "It has lower upfront costs.", isCorrect: false },
      { id: 1, opt: "b", text: "It uses both renewable and non-renewable sources for power.", isCorrect: true },
      { id: 2, opt: "c", text: "It only operates when there is no sunlight.", isCorrect: false },
      { id: 3, opt: "d", text: "It requires fewer solar panels.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is not a benefit of a solar PV system?",
    options: [
      { id: 0, opt: "a", text: "Reduces electricity bills.", isCorrect: false },
      { id: 1, opt: "b", text: "Requires little maintenance.", isCorrect: false },
      { id: 2, opt: "c", text: "Is dependent on diesel.", isCorrect: true },
      { id: 3, opt: "d", text: "Produces clean energy.", isCorrect: false }
    ]
  },
  {
    text: "What is the role of an inverter in a solar PV system?",
    options: [
      { id: 0, opt: "a", text: "It converts AC to DC.", isCorrect: false },
      { id: 1, opt: "b", text: "It stores energy.", isCorrect: false },
      { id: 2, opt: "c", text: "It converts DC to AC.", isCorrect: true },
      { id: 3, opt: "d", text: "It powers the solar panels.", isCorrect: false }
    ]
  },
  {
    text: "In which system is grid electricity used only when solar energy is unavailable?",
    options: [
      { id: 0, opt: "a", text: "PV + grid", isCorrect: false },
      { id: 1, opt: "b", text: "PV + battery", isCorrect: false },
      { id: 2, opt: "c", text: "PV + diesel generator", isCorrect: false },
      { id: 3, opt: "d", text: "PV + grid + battery", isCorrect: true }
    ]
  },
  {
    text: "In a PV + diesel generator system, what happens when solar power is not sufficient?",
    options: [
      { id: 0, opt: "a", text: "The system shuts down.", isCorrect: false },
      { id: 1, opt: "b", text: "The generator turns on to provide power.", isCorrect: true },
      { id: 2, opt: "c", text: "The grid is used instead.", isCorrect: false },
      { id: 3, opt: "d", text: "Batteries are charged using solar energy.", isCorrect: false }
    ]
  },
  {
    text: "What does PV stand for in solar energy systems?",
    options: [
      { id: 0, opt: "a", text: "Photonic Voltage", isCorrect: false },
      { id: 1, opt: "b", text: "Power Voltage", isCorrect: false },
      { id: 2, opt: "c", text: "Photovoltaic", isCorrect: true },
      { id: 3, opt: "d", text: "Photoelectric", isCorrect: false }
    ]
  },
  {
    text: "In a PV + grid system, where does the excess energy generated typically go?",
    options: [
      { id: 0, opt: "a", text: "It is wasted.", isCorrect: false },
      { id: 1, opt: "b", text: "It is stored in the solar panels.", isCorrect: false },
      { id: 2, opt: "c", text: "It is sent back to the grid.", isCorrect: true },
      { id: 3, opt: "d", text: "It is used immediately.", isCorrect: false }
    ]
  },
  {
    text: "What is the main advantage of a PV + diesel generator system?",
    options: [
      { id: 0, opt: "a", text: "Diesel generators can operate at night.", isCorrect: true },
      { id: 1, opt: "b", text: "Diesel generators reduce maintenance costs.", isCorrect: false },
      { id: 2, opt: "c", text: "It eliminates grid dependence.", isCorrect: false },
      { id: 3, opt: "d", text: "Diesel generators improve panel efficiency.", isCorrect: false }
    ]
  },
  {
    text: "In a PV + battery system, what is the purpose of the battery?",
    options: [
      { id: 0, opt: "a", text: "To increase panel efficiency.", isCorrect: false },
      { id: 1, opt: "b", text: "To store excess energy for later use.", isCorrect: true },
      { id: 2, opt: "c", text: "To charge the solar panels.", isCorrect: false },
      { id: 3, opt: "d", text: "To maintain constant voltage output.", isCorrect: false }
    ]
  },
  {
    text: "What is a key advantage of a PV + grid + battery hybrid system?",
    options: [
      { id: 0, opt: "a", text: "It works only during the day.", isCorrect: false },
      { id: 1, opt: "b", text: "It can store energy and supply power during outages.", isCorrect: true },
      { id: 2, opt: "c", text: "It is cheaper to install than other systems.", isCorrect: false },
      { id: 3, opt: "d", text: "It only uses renewable energy.", isCorrect: false }
    ]
  },
  {
    text: "What distinguishes a PV + grid + diesel generator hybrid system from other systems?",
    options: [
      { id: 0, opt: "a", text: "It has lower upfront costs.", isCorrect: false },
      { id: 1, opt: "b", text: "It uses both renewable and non-renewable sources for power.", isCorrect: true },
      { id: 2, opt: "c", text: "It only operates when there is no sunlight.", isCorrect: false },
      { id: 3, opt: "d", text: "It requires fewer solar panels.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is not a benefit of a solar PV system?",
    options: [
      { id: 0, opt: "a", text: "Reduces electricity bills.", isCorrect: false },
      { id: 1, opt: "b", text: "Requires little maintenance.", isCorrect: false },
      { id: 2, opt: "c", text: "Is dependent on diesel.", isCorrect: true },
      { id: 3, opt: "d", text: "Produces clean energy.", isCorrect: false }
    ]
  },
  {
    text: "What is the role of an inverter in a solar PV system?",
    options: [
      { id: 0, opt: "a", text: "It converts AC to DC.", isCorrect: false },
      { id: 1, opt: "b", text: "It stores energy.", isCorrect: false },
      { id: 2, opt: "c", text: "It converts DC to AC.", isCorrect: true },
      { id: 3, opt: "d", text: "It powers the solar panels.", isCorrect: false }
    ]
  },
  {
    text: "In which system is grid electricity used only when solar energy is unavailable?",
    options: [
      { id: 0, opt: "a", text: "PV + grid", isCorrect: false },
      { id: 1, opt: "b", text: "PV + battery", isCorrect: false },
      { id: 2, opt: "c", text: "PV + diesel generator", isCorrect: false },
      { id: 3, opt: "d", text: "PV + grid + battery", isCorrect: true }
    ]
  },
  {
    text: "In a PV + diesel generator system, what happens when solar power is not sufficient?",
    options: [
      { id: 0, opt: "a", text: "The system shuts down.", isCorrect: false },
      { id: 1, opt: "b", text: "The generator turns on to provide power.", isCorrect: true },
      { id: 2, opt: "c", text: "The grid is used instead.", isCorrect: false },
      { id: 3, opt: "d", text: "Batteries are charged using solar energy.", isCorrect: false }
    ]
  },
  {
    text: "What does DC stand for?",
    options: [
      { id: 0, opt: "a", text: "Direct Current", isCorrect: true },
      { id: 1, opt: "b", text: "Distributed Charge", isCorrect: false },
      { id: 2, opt: "c", text: "Dynamic Current", isCorrect: false },
      { id: 3, opt: "d", text: "Diverse Charge", isCorrect: false }
    ]
  },
  {
    text: "What is the primary characteristic of AC electricity?",
    options: [
      { id: 0, opt: "a", text: "It flows in one direction.", isCorrect: false },
      { id: 1, opt: "b", text: "It changes direction periodically.", isCorrect: true },
      { id: 2, opt: "c", text: "It is used only in batteries.", isCorrect: false },
      { id: 3, opt: "d", text: "It is produced by solar panels.", isCorrect: false }
    ]
  },
  {
    text: "What type of electricity do solar panels produce?",
    options: [
      { id: 0, opt: "a", text: "AC", isCorrect: false },
      { id: 1, opt: "b", text: "DC", isCorrect: true },
      { id: 2, opt: "c", text: "Both AC and DC", isCorrect: false },
      { id: 3, opt: "d", text: "None", isCorrect: false }
    ]
  },
  {
    text: "Which device is needed to convert DC to AC in a solar system?",
    options: [
      { id: 0, opt: "a", text: "Generator", isCorrect: false },
      { id: 1, opt: "b", text: "Transformer", isCorrect: false },
      { id: 2, opt: "c", text: "Rectifier", isCorrect: false },
      { id: 3, opt: "d", text: "Inverter", isCorrect: true }
    ]
  },
  {
    text: "Which of the following is commonly used in homes and businesses for electricity supply?",
    options: [
      { id: 0, opt: "a", text: "AC", isCorrect: true },
      { id: 1, opt: "b", text: "DC", isCorrect: false },
      { id: 2, opt: "c", text: "Hybrid AC-DC", isCorrect: false },
      { id: 3, opt: "d", text: "None of the above", isCorrect: false }
    ]
  },
  {
    text: "What is a common application of DC electricity?",
    options: [
      { id: 0, opt: "a", text: "Powering household appliances", isCorrect: false },
      { id: 1, opt: "b", text: "Powering grid systems", isCorrect: false },
      { id: 2, opt: "c", text: "Powering batteries", isCorrect: true },
      { id: 3, opt: "d", text: "Supplying commercial buildings", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is a disadvantage of using AC electricity?",
    options: [
      { id: 0, opt: "a", text: "It is not safe for high-voltage transmission.", isCorrect: false },
      { id: 1, opt: "b", text: "It requires more complex electronics.", isCorrect: false },
      { id: 2, opt: "c", text: "It cannot be transmitted over long distances.", isCorrect: false },
      { id: 3, opt: "d", text: "It is less efficient for storing energy in batteries.", isCorrect: true }
    ]
  },
  {
    text: "Which of these is an example of an AC-powered device?",
    options: [
      { id: 0, opt: "a", text: "Mobile phone", isCorrect: false },
      { id: 1, opt: "b", text: "Car battery", isCorrect: false },
      { id: 2, opt: "c", text: "Refrigerator", isCorrect: true },
      { id: 3, opt: "d", text: "Solar panel", isCorrect: false }
    ]
  },
  {
    text: "What happens to the voltage of AC electricity as it travels long distances?",
    options: [
      { id: 0, opt: "a", text: "It increases.", isCorrect: false },
      { id: 1, opt: "b", text: "It remains constant.", isCorrect: false },
      { id: 2, opt: "c", text: "It decreases due to resistance.", isCorrect: true },
      { id: 3, opt: "d", text: "It fluctuates randomly.", isCorrect: false }
    ]
  },
  {
    text: "In which scenario would DC electricity be preferable to AC?",
    options: [
      { id: 0, opt: "a", text: "Powering household appliances", isCorrect: false },
      { id: 1, opt: "b", text: "Charging batteries", isCorrect: true },
      { id: 2, opt: "c", text: "Powering the electrical grid", isCorrect: false },
      { id: 3, opt: "d", text: "Transmitting electricity over long distances", isCorrect: false }
    ]
  },
  {
    text: "What is the unit of power in the International System of Units (SI)?",
    options: [
      { id: 0, opt: "a", text: "Joule", isCorrect: false },
      { id: 1, opt: "b", text: "Watt", isCorrect: true },
      { id: 2, opt: "c", text: "Volt", isCorrect: false },
      { id: 3, opt: "d", text: "Ampere", isCorrect: false }
    ]
  },
  {
    text: "What is the unit of energy in the International System of Units (SI)?",
    options: [
      { id: 0, opt: "a", text: "Volt", isCorrect: false },
      { id: 1, opt: "b", text: "Ampere", isCorrect: false },
      { id: 2, opt: "c", text: "Watt-hour", isCorrect: false },
      { id: 3, opt: "d", text: "Joule", isCorrect: true }
    ]
  },
  {
    text: "What is the relationship between power and energy?",
    options: [
      { id: 0, opt: "a", text: "Power is energy over time.", isCorrect: true },
      { id: 1, opt: "b", text: "Energy is the rate of power.", isCorrect: false },
      { id: 2, opt: "c", text: "Power is the same as energy.", isCorrect: false },
      { id: 3, opt: "d", text: "Energy is independent of power.", isCorrect: false }
    ]
  },
  {
    text: "What is the formula for calculating power?",
    options: [
      { id: 0, opt: "a", text: "Power = Voltage × Time", isCorrect: false },
      { id: 1, opt: "b", text: "Power = Energy ÷ Time", isCorrect: true },
      { id: 2, opt: "c", text: "Power = Voltage ÷ Current", isCorrect: false },
      { id: 3, opt: "d", text: "Power = Current ÷ Resistance", isCorrect: false }
    ]
  },
  {
    text: "If a device uses 100 watts of power for 2 hours, how much energy has it consumed?",
    options: [
      { id: 0, opt: "a", text: "50 watt-hours", isCorrect: false },
      { id: 1, opt: "b", text: "200 watt-hours", isCorrect: true },
      { id: 2, opt: "c", text: "100 watt-hours", isCorrect: false },
      { id: 3, opt: "d", text: "300 watt-hours", isCorrect: false }
    ]
  },
  {
    text: "What is the relationship between voltage, current, and power in a DC circuit?",
    options: [
      { id: 0, opt: "a", text: "Power = Voltage + Current", isCorrect: false },
      { id: 1, opt: "b", text: "Power = Voltage ÷ Current", isCorrect: false },
      { id: 2, opt: "c", text: "Power = Voltage × Current", isCorrect: true },
      { id: 3, opt: "d", text: "Power = Current ÷ Voltage", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is not a unit of energy?",
    options: [
      { id: 0, opt: "a", text: "Joule", isCorrect: false },
      { id: 1, opt: "b", text: "Kilowatt-hour", isCorrect: false },
      { id: 2, opt: "c", text: "Calorie", isCorrect: false },
      { id: 3, opt: "d", text: "Ampere", isCorrect: true }
    ]
  },
  {
    text: "Which term refers to the rate of doing work or using energy?",
    options: [
      { id: 0, opt: "a", text: "Energy", isCorrect: false },
      { id: 1, opt: "b", text: "Current", isCorrect: false },
      { id: 2, opt: "c", text: "Power", isCorrect: true },
      { id: 3, opt: "d", text: "Voltage", isCorrect: false }
    ]
  },
  {
    text: "What happens to the energy consumption of an appliance if it runs for twice the time at the same power?",
    options: [
      { id: 0, opt: "a", text: "Energy consumption is halved.", isCorrect: false },
      { id: 1, opt: "b", text: "Energy consumption is unchanged.", isCorrect: false },
      { id: 2, opt: "c", text: "Energy consumption doubles.", isCorrect: true },
      { id: 3, opt: "d", text: "Energy consumption decreases.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is the correct unit for measuring electrical energy consumption in households?",
    options: [
      { id: 0, opt: "a", text: "Kilowatt-hour (kWh)", isCorrect: true },
      { id: 1, opt: "b", text: "Volt", isCorrect: false },
      { id: 2, opt: "c", text: "Ampere", isCorrect: false },
      { id: 3, opt: "d", text: "Joule", isCorrect: false }
    ]
  },
  {
    text: "In a PV + battery system, what happens when the battery is fully charged and excess solar energy is still being generated?",
    options: [
      { id: 0, opt: "a", text: "The system shuts down.", isCorrect: false },
      { id: 1, opt: "b", text: "The energy is sent back to the grid.", isCorrect: true },
      { id: 2, opt: "c", text: "The energy is stored in the panels.", isCorrect: false },
      { id: 3, opt: "d", text: "The energy is wasted.", isCorrect: false }
    ]
  },
  {
    text: "Which component is used to prevent the battery from overcharging in a PV + battery system?",
    options: [
      { id: 0, opt: "a", text: "Inverter", isCorrect: false },
      { id: 1, opt: "b", text: "Charge controller", isCorrect: true },
      { id: 2, opt: "c", text: "Transformer", isCorrect: false },
      { id: 3, opt: "d", text: "Rectifier", isCorrect: false }
    ]
  },
  {
    text: "In a PV + grid system, which condition would cause the system to rely on the grid?",
    options: [
      { id: 0, opt: "a", text: "Solar energy generation exceeds demand.", isCorrect: false },
      { id: 1, opt: "b", text: "Solar panels produce maximum output.", isCorrect: false },
      { id: 2, opt: "c", text: "Solar energy generation is lower than the demand.", isCorrect: true },
      { id: 3, opt: "d", text: "Solar panels operate at night.", isCorrect: false }
    ]
  },
  {
    text: "What is a key advantage of a PV + diesel generator set system in rural areas?",
    options: [
      { id: 0, opt: "a", text: "It eliminates the need for grid electricity.", isCorrect: true },
      { id: 1, opt: "b", text: "It has zero emissions.", isCorrect: false },
      { id: 2, opt: "c", text: "It operates more efficiently without sunlight.", isCorrect: false },
      { id: 3, opt: "d", text: "It lowers the cost of diesel fuel.", isCorrect: false }
    ]
  },
  {
    text: "In a PV + grid + diesel generator hybrid system, what happens when both solar and grid power are unavailable?",
    options: [
      { id: 0, opt: "a", text: "The system shuts down.", isCorrect: false },
      { id: 1, opt: "b", text: "The battery is used.", isCorrect: false },
      { id: 2, opt: "c", text: "The diesel generator starts.", isCorrect: true },
      { id: 3, opt: "d", text: "The solar panels continue to operate.", isCorrect: false }
    ]
  },
  {
    text: "What happens when solar energy production exceeds the demand in a PV + grid system without batteries?",
    options: [
      { id: 0, opt: "a", text: "The energy is stored in the solar panels.", isCorrect: false },
      { id: 1, opt: "b", text: "The system overheats.", isCorrect: false },
      { id: 2, opt: "c", text: "Excess energy is exported to the grid.", isCorrect: true },
      { id: 3, opt: "d", text: "Energy is dissipated as heat.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is true for a PV + grid + battery system?",
    options: [
      { id: 0, opt: "a", text: "The system works only during the day.", isCorrect: false },
      { id: 1, opt: "b", text: "It depends entirely on diesel for backup.", isCorrect: false },
      { id: 2, opt: "c", text: "It allows for continuous power supply, even during grid outages.", isCorrect: true },
      { id: 3, opt: "d", text: "The battery only charges when the grid is on.", isCorrect: false }
    ]
  },
  {
    text: "What is the main reason for using hybrid solar energy systems?",
    options: [
      { id: 0, opt: "a", text: "To avoid solar panel maintenance.", isCorrect: false },
      { id: 1, opt: "b", text: "To reduce reliance on a single energy source.", isCorrect: true },
      { id: 2, opt: "c", text: "To eliminate the need for batteries.", isCorrect: false },
      { id: 3, opt: "d", text: "To increase energy consumption.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following systems allows for both renewable and non-renewable energy to work together?",
    options: [
      { id: 0, opt: "a", text: "PV + grid", isCorrect: false },
      { id: 1, opt: "b", text: "PV + diesel generator", isCorrect: false },
      { id: 2, opt: "c", text: "PV + battery", isCorrect: false },
      { id: 3, opt: "d", text: "PV + grid + diesel generator", isCorrect: true }
    ]
  },
  {
    text: "Which system combination is the most resilient during long periods of grid outages?",
    options: [
      { id: 0, opt: "a", text: "PV + grid", isCorrect: false },
      { id: 1, opt: "b", text: "PV + diesel generator", isCorrect: false },
      { id: 2, opt: "c", text: "PV + battery", isCorrect: false },
      { id: 3, opt: "d", text: "PV + grid + battery", isCorrect: true }
    ]
  },
  {
    text: "Which of the following devices commonly uses DC electricity?",
    options: [
      { id: 0, opt: "a", text: "Washing machine", isCorrect: false },
      { id: 1, opt: "b", text: "Flashlight", isCorrect: true },
      { id: 2, opt: "c", text: "Television", isCorrect: false },
      { id: 3, opt: "d", text: "Microwave oven", isCorrect: false }
    ]
  },
  {
    text: "What does the frequency of AC electricity in most countries usually measure?",
    options: [
      { id: 0, opt: "a", text: "30 Hz", isCorrect: false },
      { id: 1, opt: "b", text: "50 Hz or 60 Hz", isCorrect: true },
      { id: 2, opt: "c", text: "100 Hz", isCorrect: false },
      { id: 3, opt: "d", text: "120 Hz", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is a common source of DC electricity?",
    options: [
      { id: 0, opt: "a", text: "Power lines", isCorrect: false },
      { id: 1, opt: "b", text: "Batteries", isCorrect: true },
      { id: 2, opt: "c", text: "Solar inverters", isCorrect: false },
      { id: 3, opt: "d", text: "Electric generators", isCorrect: false }
    ]
  },
  {
    text: "What happens to AC electricity if it is not converted to DC before charging a battery?",
    options: [
      { id: 0, opt: "a", text: "The battery will not charge.", isCorrect: false },
      { id: 1, opt: "b", text: "The battery will charge slowly.", isCorrect: false },
      { id: 2, opt: "c", text: "The battery may get damaged.", isCorrect: true },
      { id: 3, opt: "d", text: "The battery will charge faster.", isCorrect: false }
    ]
  },
  {
    text: "Why is AC electricity used for transmitting power over long distances?",
    options: [
      { id: 0, opt: "a", text: "AC transmission is more efficient.", isCorrect: true },
      { id: 1, opt: "b", text: "AC has a constant voltage.", isCorrect: false },
      { id: 2, opt: "c", text: "It’s easier to generate.", isCorrect: false },
      { id: 3, opt: "d", text: "It requires smaller wires.", isCorrect: false }
    ]
  },
  {
    text: "In an AC circuit, what happens to the direction of current flow?",
    options: [
      { id: 0, opt: "a", text: "It remains the same.", isCorrect: false },
      { id: 1, opt: "b", text: "It reverses periodically.", isCorrect: true },
      { id: 2, opt: "c", text: "It only changes if the voltage changes.", isCorrect: false },
      { id: 3, opt: "d", text: "It only flows in one direction.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following household items typically operates on AC power?",
    options: [
      { id: 0, opt: "a", text: "Car battery", isCorrect: false },
      { id: 1, opt: "b", text: "Ceiling fan", isCorrect: true },
      { id: 2, opt: "c", text: "Smartphone", isCorrect: false },
      { id: 3, opt: "d", text: "LED torch", isCorrect: false }
    ]
  },
  {
    text: "Why is DC electricity more suitable for storing energy in batteries?",
    options: [
      { id: 0, opt: "a", text: "DC electricity flows in one direction.", isCorrect: true },
      { id: 1, opt: "b", text: "DC electricity has a higher voltage.", isCorrect: false },
      { id: 2, opt: "c", text: "DC is cheaper to generate.", isCorrect: false },
      { id: 3, opt: "d", text: "DC power is better for long-distance transmission.", isCorrect: false }
    ]
  },
  {
    text: "What is a potential danger of using AC electricity in homes?",
    options: [
      { id: 0, opt: "a", text: "It is difficult to store.", isCorrect: false },
      { id: 1, opt: "b", text: "It can cause electric shock due to high voltage.", isCorrect: true },
      { id: 2, opt: "c", text: "It is hard to convert to DC.", isCorrect: false },
      { id: 3, opt: "d", text: "It requires special solar panels.", isCorrect: false }
    ]
  },
  {
    text: "Which device converts AC electricity to DC?",
    options: [
      { id: 0, opt: "a", text: "Transformer", isCorrect: false },
      { id: 1, opt: "b", text: "Rectifier", isCorrect: true },
      { id: 2, opt: "c", text: "Inverter", isCorrect: false },
      { id: 3, opt: "d", text: "Capacitor", isCorrect: false }
    ]
  },
  {
    text: "If a device operates at 200 watts for 3 hours, how much energy has it used?",
    options: [
      { id: 0, opt: "a", text: "200 watt-hours", isCorrect: false },
      { id: 1, opt: "b", text: "600 watt-hours", isCorrect: true },
      { id: 2, opt: "c", text: "400 watt-hours", isCorrect: false },
      { id: 3, opt: "d", text: "100 watt-hours", isCorrect: false }
    ]
  },
  {
    text: "What happens to the energy consumption of an appliance if the power rating is doubled?",
    options: [
      { id: 0, opt: "a", text: "Energy consumption is halved.", isCorrect: false },
      { id: 1, opt: "b", text: "Energy consumption is unchanged.", isCorrect: false },
      { id: 2, opt: "c", text: "Energy consumption doubles.", isCorrect: true },
      { id: 3, opt: "d", text: "Energy consumption is reduced.", isCorrect: false }
    ]
  },
  {
    text: "What is the formula for calculating electrical energy?",
    options: [
      { id: 0, opt: "a", text: "Energy = Voltage × Current × Time", isCorrect: true },
      { id: 1, opt: "b", text: "Energy = Power ÷ Time", isCorrect: false },
      { id: 2, opt: "c", text: "Energy = Voltage ÷ Resistance", isCorrect: false },
      { id: 3, opt: "d", text: "Energy = Current ÷ Power", isCorrect: false }
    ]
  },
  {
    text: "Which unit is used to measure the electrical power of an appliance?",
    options: [
      { id: 0, opt: "a", text: "Joule", isCorrect: false },
      { id: 1, opt: "b", text: "Watt", isCorrect: true },
      { id: 2, opt: "c", text: "Volt", isCorrect: false },
      { id: 3, opt: "d", text: "Ampere", isCorrect: false }
    ]
  },
  {
    text: "What is the difference between kilowatt-hours (kWh) and watts?",
    options: [
      { id: 0, opt: "a", text: "Watts measure power, while kilowatt-hours measure energy.", isCorrect: true },
      { id: 1, opt: "b", text: "Watts measure energy, while kilowatt-hours measure power.", isCorrect: false },
      { id: 2, opt: "c", text: "Kilowatt-hours measure voltage, while watts measure current.", isCorrect: false },
      { id: 3, opt: "d", text: "They are both units of voltage.", isCorrect: false }
    ]
  },
  {
    text: "How many watts are in a kilowatt?",
    options: [
      { id: 0, opt: "a", text: "10 watts", isCorrect: false },
      { id: 1, opt: "b", text: "100 watts", isCorrect: false },
      { id: 2, opt: "c", text: "1000 watts", isCorrect: true },
      { id: 3, opt: "d", text: "10,000 watts", isCorrect: false }
    ]
  },
  {
    text: "If a light bulb uses 60 watts of power, how much energy is consumed if it runs for 5 hours?",
    options: [
      { id: 0, opt: "a", text: "60 watt-hours", isCorrect: false },
      { id: 1, opt: "b", text: "120 watt-hours", isCorrect: false },
      { id: 2, opt: "c", text: "300 watt-hours", isCorrect: true },
      { id: 3, opt: "d", text: "100 watt-hours", isCorrect: false }
    ]
  },
  {
    text: "What determines the amount of energy consumed by an electrical device?",
    options: [
      { id: 0, opt: "a", text: "The voltage of the device", isCorrect: false },
      { id: 1, opt: "b", text: "The time it is in use and the power rating", isCorrect: true },
      { id: 2, opt: "c", text: "The current it uses", isCorrect: false },
      { id: 3, opt: "d", text: "The size of the device", isCorrect: false }
    ]
  },
  {
    text: "What is the relationship between power and energy in a solar system?",
    options: [
      { id: 0, opt: "a", text: "Power is the rate at which energy is produced or consumed.", isCorrect: true },
      { id: 1, opt: "b", text: "Power and energy are the same.", isCorrect: false },
      { id: 2, opt: "c", text: "Energy increases power over time.", isCorrect: false },
      { id: 3, opt: "d", text: "Energy is constant regardless of power.", isCorrect: false }
    ]
  },
  {
    text: "What is the significance of the kilowatt-hour (kWh) in solar energy systems?",
    options: [
      { id: 0, opt: "a", text: "It measures the efficiency of the solar panel.", isCorrect: false },
      { id: 1, opt: "b", text: "It represents the amount of energy generated or consumed.", isCorrect: true },
      { id: 2, opt: "c", text: "It is the voltage of the solar panel.", isCorrect: false },
      { id: 3, opt: "d", text: "It measures the power output of the inverter.", isCorrect: false }
    ]
  },
  {
    text: "What happens when the battery in a PV + battery system is fully discharged, and there is no solar generation?",
    options: [
      { id: 0, opt: "a", text: "The system draws power from the grid.", isCorrect: false },
      { id: 1, opt: "b", text: "The system shuts down until recharged.", isCorrect: true },
      { id: 2, opt: "c", text: "The system switches to diesel power.", isCorrect: false },
      { id: 3, opt: "d", text: "The battery immediately recharges.", isCorrect: false }
    ]
  },
  {
    text: "Which type of solar energy system is most commonly used in areas with reliable grid access?",
    options: [
      { id: 0, opt: "a", text: "PV + battery", isCorrect: false },
      { id: 1, opt: "b", text: "PV + diesel generator", isCorrect: false },
      { id: 2, opt: "c", text: "PV + grid", isCorrect: true },
      { id: 3, opt: "d", text: "PV + wind turbine", isCorrect: false }
    ]
  },
  {
    text: "What is the primary purpose of a solar charge controller?",
    options: [
      { id: 0, opt: "a", text: "To regulate the voltage from the solar panel.", isCorrect: true },
      { id: 1, opt: "b", text: "To convert DC to AC.", isCorrect: false },
      { id: 2, opt: "c", text: "To store excess energy.", isCorrect: false },
      { id: 3, opt: "d", text: "To supply power to the grid.", isCorrect: false }
    ]
  },
  {
    text: "Which type of solar energy system provides backup during grid outages without relying on diesel?",
    options: [
      { id: 0, opt: "a", text: "PV + diesel generator", isCorrect: false },
      { id: 1, opt: "b", text: "PV + battery", isCorrect: true },
      { id: 2, opt: "c", text: "PV + grid", isCorrect: false },
      { id: 3, opt: "d", text: "PV + hybrid wind", isCorrect: false }
    ]
  },
  {
    text: "How does a PV + diesel generator system benefit commercial facilities?",
    options: [
      { id: 0, opt: "a", text: "It reduces dependence on diesel entirely.", isCorrect: false },
      { id: 1, opt: "b", text: "It provides power during periods of no sunlight and grid failure.", isCorrect: true },
      { id: 2, opt: "c", text: "It requires fewer solar panels.", isCorrect: false },
      { id: 3, opt: "d", text: "It runs at zero operating costs.", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is a disadvantage of a PV + diesel generator hybrid system?",
    options: [
      { id: 0, opt: "a", text: "Limited operation time", isCorrect: false },
      { id: 1, opt: "b", text: "High operational costs due to diesel consumption", isCorrect: true },
      { id: 2, opt: "c", text: "Limited availability of solar power", isCorrect: false },
      { id: 3, opt: "d", text: "Requires manual switching", isCorrect: false }
    ]
  },
  {
    text: "How do hybrid solar energy systems (PV + grid + diesel) improve energy reliability?",
    options: [
      { id: 0, opt: "a", text: "By combining different energy sources for uninterrupted power supply", isCorrect: true },
      { id: 1, opt: "b", text: "By reducing the need for solar panels", isCorrect: false },
      { id: 2, opt: "c", text: "By making grid power more efficient", isCorrect: false },
      { id: 3, opt: "d", text: "By avoiding maintenance costs", isCorrect: false }
    ]
  },
  {
    text: "Which system is ideal for remote areas with no grid access but constant sunlight?",
    options: [
      { id: 0, opt: "a", text: "PV + grid", isCorrect: false },
      { id: 1, opt: "b", text: "PV + diesel generator", isCorrect: false },
      { id: 2, opt: "c", text: "PV + battery", isCorrect: true },
      { id: 3, opt: "d", text: "PV + grid + battery", isCorrect: false }
    ]
  },
  {
    text: "Why is a PV + battery system more expensive than a PV + grid system?",
    options: [
      { id: 0, opt: "a", text: "Batteries are more costly than grid integration.", isCorrect: true },
      { id: 1, opt: "b", text: "The system requires larger solar panels.", isCorrect: false },
      { id: 2, opt: "c", text: "Battery systems require more frequent maintenance.", isCorrect: false },
      { id: 3, opt: "d", text: "Batteries consume energy when charging.", isCorrect: false }
    ]
  },
  {
    text: "What is the main function of the inverter in hybrid solar systems?",
    options: [
      { id: 0, opt: "a", text: "To store energy", isCorrect: false },
      { id: 1, opt: "b", text: "To regulate solar panel temperature", isCorrect: false },
      { id: 2, opt: "c", text: "To convert DC from the panels into usable AC", isCorrect: true },
      { id: 3, opt: "d", text: "To supply power directly to the appliances", isCorrect: false }
    ]
  },
  {
    text: "What happens to the current flow in a DC circuit?",
    options: [
      { id: 0, opt: "a", text: "It changes direction continuously.", isCorrect: false },
      { id: 1, opt: "b", text: "It flows in one direction only.", isCorrect: true },
      { id: 2, opt: "c", text: "It fluctuates based on voltage.", isCorrect: false },
      { id: 3, opt: "d", text: "It stops when the device is switched off.", isCorrect: false }
    ]
  },
  {
    text: "What type of current is typically supplied by a utility grid?",
    options: [
      { id: 0, opt: "a", text: "AC", isCorrect: true },
      { id: 1, opt: "b", text: "DC", isCorrect: false },
      { id: 2, opt: "c", text: "Mixed AC and DC", isCorrect: false },
      { id: 3, opt: "d", text: "None", isCorrect: false }
    ]
  },
  {
    text: "What happens when AC electricity is transmitted over long distances without stepping up the voltage?",
    options: [
      { id: 0, opt: "a", text: "It remains the same.", isCorrect: false },
      { id: 1, opt: "b", text: "It gets weaker due to resistance.", isCorrect: true },
      { id: 2, opt: "c", text: "It increases in power.", isCorrect: false },
      { id: 3, opt: "d", text: "It converts to DC.", isCorrect: false }
    ]
  },
  {
    text: "In which scenario is DC electricity most advantageous?",
    options: [
      { id: 0, opt: "a", text: "For long-distance transmission", isCorrect: false },
      { id: 1, opt: "b", text: "For running household appliances", isCorrect: false },
      { id: 2, opt: "c", text: "For powering electronic devices", isCorrect: true },
      { id: 3, opt: "d", text: "For operating large industrial motors", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is a common application of AC electricity?",
    options: [
      { id: 0, opt: "a", text: "Charging mobile phones", isCorrect: false },
      { id: 1, opt: "b", text: "Operating refrigerators", isCorrect: true },
      { id: 2, opt: "c", text: "Powering laptops", isCorrect: false },
      { id: 3, opt: "d", text: "Lighting a flashlight", isCorrect: false }
    ]
  },
  {
    text: "Inverters in solar systems are used to perform which function?",
    options: [
      { id: 0, opt: "a", text: "Convert DC to AC", isCorrect: true },
      { id: 1, opt: "b", text: "Convert AC to DC", isCorrect: false },
      { id: 2, opt: "c", text: "Store energy", isCorrect: false },
      { id: 3, opt: "d", text: "Measure energy consumption", isCorrect: false }
    ]
  },
  {
    text: "In which of the following scenarios would you need to convert AC to DC?",
    options: [
      { id: 0, opt: "a", text: "Powering household appliances", isCorrect: false },
      { id: 1, opt: "b", text: "Charging a battery", isCorrect: true },
      { id: 2, opt: "c", text: "Running a washing machine", isCorrect: false },
      { id: 3, opt: "d", text: "Operating an air conditioner", isCorrect: false }
    ]
  },
  {
    text: "How does frequency affect AC electricity?",
    options: [
      { id: 0, opt: "a", text: "It determines how often the current changes direction.", isCorrect: true },
      { id: 1, opt: "b", text: "It affects how fast the current travels.", isCorrect: false },
      { id: 2, opt: "c", text: "It changes the voltage of the current.", isCorrect: false },
      { id: 3, opt: "d", text: "It does not affect AC electricity.", isCorrect: false }
    ]
  },
  {
    text: "What is the main safety concern with AC electricity in homes?",
    options: [
      { id: 0, opt: "a", text: "It cannot be transmitted over long distances.", isCorrect: false },
      { id: 1, opt: "b", text: "It can cause electric shocks if not properly insulated.", isCorrect: true },
      { id: 2, opt: "c", text: "It requires large batteries for storage.", isCorrect: false },
      { id: 3, opt: "d", text: "It can only be used in small devices.", isCorrect: false }
    ]
  },
  {
    text: "Which component in a solar system ensures that DC electricity is converted for household use?",
    options: [
      { id: 0, opt: "a", text: "Charge controller", isCorrect: false },
      { id: 1, opt: "b", text: "Solar panel", isCorrect: false },
      { id: 2, opt: "c", text: "Inverter", isCorrect: true },
      { id: 3, opt: "d", text: "Battery", isCorrect: false }
    ]
  },
  {
    text: "Which of the following represents the rate at which energy is consumed or generated?",
    options: [
      { id: 0, opt: "a", text: "Voltage", isCorrect: false },
      { id: 1, opt: "b", text: "Power", isCorrect: true },
      { id: 2, opt: "c", text: "Current", isCorrect: false },
      { id: 3, opt: "d", text: "Resistance", isCorrect: false }
    ]
  },
  {
    text: "What is the formula to calculate energy consumption in kilowatt-hours?",
    options: [
      { id: 0, opt: "a", text: "Energy (kWh) = Power (kW) × Time (hours)", isCorrect: true },
      { id: 1, opt: "b", text: "Energy (kWh) = Voltage × Current", isCorrect: false },
      { id: 2, opt: "c", text: "Energy (kWh) = Power (W) ÷ Time (hours)", isCorrect: false },
      { id: 3, opt: "d", text: "Energy (kWh) = Voltage × Time", isCorrect: false }
    ]
  },
  {
    text: "If an appliance consumes 1 kilowatt of power for 2 hours, how much energy has it used?",
    options: [
      { id: 0, opt: "a", text: "1 kWh", isCorrect: false },
      { id: 1, opt: "b", text: "2 kWh", isCorrect: true },
      { id: 2, opt: "c", text: "0.5 kWh", isCorrect: false },
      { id: 3, opt: "d", text: "10 kWh", isCorrect: false }
    ]
  },
  {
    text: "If a solar panel generates 500 watts of power and operates for 6 hours, how much energy does it produce?",
    options: [
      { id: 0, opt: "a", text: "1.5 kWh", isCorrect: false },
      { id: 1, opt: "b", text: "2 kWh", isCorrect: false },
      { id: 2, opt: "c", text: "3 kWh", isCorrect: true },
      { id: 3, opt: "d", text: "500 kWh", isCorrect: false }
    ]
  },
  {
    text: "Which factor does not directly affect the power output of a solar panel?",
    options: [
      { id: 0, opt: "a", text: "Sunlight intensity", isCorrect: false },
      { id: 1, opt: "b", text: "Size of the panel", isCorrect: false },
      { id: 2, opt: "c", text: "Battery size", isCorrect: true },
      { id: 3, opt: "d", text: "Angle of the panel", isCorrect: false }
    ]
  },
  {
    text: "What happens to energy consumption when you reduce the usage time of an electrical device by half?",
    options: [
      { id: 0, opt: "a", text: "It doubles.", isCorrect: false },
      { id: 1, opt: "b", text: "It remains the same.", isCorrect: false },
      { id: 2, opt: "c", text: "It is reduced by half.", isCorrect: true },
      { id: 3, opt: "d", text: "It quadruples.", isCorrect: false }
    ]
  },
  {
    text: "How is the capacity of a battery typically measured?",
    options: [
      { id: 0, opt: "a", text: "Volts", isCorrect: false },
      { id: 1, opt: "b", text: "Amperes", isCorrect: false },
      { id: 2, opt: "c", text: "Watt-hours", isCorrect: true },
      { id: 3, opt: "d", text: "Watts", isCorrect: false }
    ]
  },
  {
    text: "Which of the following is the correct equation for calculating power?",
    options: [
      { id: 0, opt: "a", text: "Power = Voltage × Current", isCorrect: true },
      { id: 1, opt: "b", text: "Power = Current ÷ Voltage", isCorrect: false },
      { id: 2, opt: "c", text: "Power = Voltage ÷ Resistance", isCorrect: false },
      { id: 3, opt: "d", text: "Power = Voltage × Time", isCorrect: false }
    ]
  },
  {
    text: "What unit is used to measure the energy consumption of an appliance over time?",
    options: [
      { id: 0, opt: "a", text: "Watts", isCorrect: false },
      { id: 1, opt: "b", text: "Amperes", isCorrect: false },
      { id: 2, opt: "c", text: "Kilowatt-hours (kWh)", isCorrect: true },
      { id: 3, opt: "d", text: "Volts", isCorrect: false }
    ]
  },
  {
    text: "If a battery is rated at 1000 watt-hours (Wh) and powers a 500-watt appliance, how long will the battery last?",
    options: [
      { id: 0, opt: "a", text: "1 hour", isCorrect: false },
      { id: 1, opt: "b", text: "2 hours", isCorrect: true },
      { id: 2, opt: "c", text: "4 hours", isCorrect: false },
      { id: 3, opt: "d", text: "0.5 hours", isCorrect: false }
    ]
  },
  {
    text: "What happens to the energy stored in a battery when it is discharged completely?",
    options: [
      { id: 0, opt: "a", text: "It is released as heat.", isCorrect: false },
      { id: 1, opt: "b", text: "It is lost and cannot be recovered.", isCorrect: false },
      { id: 2, opt: "c", text: "It is fully converted into usable power.", isCorrect: true },
      { id: 3, opt: "d", text: "The battery needs to be replaced.", isCorrect: false }
    ]
  },
  {
    text: "How can you reduce the energy consumption of an electrical device?",
    options: [
      { id: 0, opt: "a", text: "Increase the voltage.", isCorrect: false },
      { id: 1, opt: "b", text: "Use it for a shorter period of time.", isCorrect: true },
      { id: 2, opt: "c", text: "Increase the power rating of the device.", isCorrect: false },
      { id: 3, opt: "d", text: "Reduce the current.", isCorrect: false }
    ]
  },
  {
    text: "If a 200-watt device operates for 10 hours, how much energy is consumed?",
    options: [
      { id: 0, opt: "a", text: "2 kWh", isCorrect: true },
      { id: 1, opt: "b", text: "10 kWh", isCorrect: false },
      { id: 2, opt: "c", text: "1 kWh", isCorrect: false },
      { id: 3, opt: "d", text: "20 kWh", isCorrect: false }
    ]
  },
  {
    text: "Which factor primarily determines the power output of a solar panel?",
    options: [
      { id: 0, opt: "a", text: "The material of the panel", isCorrect: false },
      { id: 1, opt: "b", text: "The intensity of sunlight", isCorrect: true },
      { id: 2, opt: "c", text: "The number of batteries connected", isCorrect: false },
      { id: 3, opt: "d", text: "The distance from the sun", isCorrect: false }
    ]
  },
  {
    text: "How much power is consumed by a 1500-watt air conditioner running for 4 hours?",
    options: [
      { id: 0, opt: "a", text: "6 kWh", isCorrect: true },
      { id: 1, opt: "b", text: "1500 kWh", isCorrect: false },
      { id: 2, opt: "c", text: "60 kWh", isCorrect: false },
      { id: 3, opt: "d", text: "1.5 kWh", isCorrect: false }
    ]
  },
  {
    text: "How is the energy efficiency of a solar energy system generally measured?",
    options: [
      { id: 0, opt: "a", text: "By the size of the battery", isCorrect: false },
      { id: 1, opt: "b", text: "By the ratio of energy output to sunlight received", isCorrect: true },
      { id: 2, opt: "c", text: "By the total power output", isCorrect: false },
      { id: 3, opt: "d", text: "By the number of panels installed", isCorrect: false }
    ]
  },
  {
    text: "If a solar panel has a capacity of 400 watts and generates power for 8 hours, how much energy is produced?",
    options: [
      { id: 0, opt: "a", text: "4 kWh", isCorrect: false },
      { id: 1, opt: "b", text: "3.2 kWh", isCorrect: true },
      { id: 2, opt: "c", text: "8 kWh", isCorrect: false },
      { id: 3, opt: "d", text: "32 kWh", isCorrect: false }
    ]
  },
  {
    text: "What happens to the energy output of a solar panel if it is tilted at an incorrect angle?",
    options: [
      { id: 0, opt: "a", text: "It increases.", isCorrect: false },
      { id: 1, opt: "b", text: "It decreases.", isCorrect: true },
      { id: 2, opt: "c", text: "It remains the same.", isCorrect: false },
      { id: 3, opt: "d", text: "It depends on the temperature.", isCorrect: false }
    ]
  },
  {
    text: "How is energy storage in solar systems usually expressed?",
    options: [
      { id: 0, opt: "a", text: "Kilowatt-hours (kWh)", isCorrect: true },
      { id: 1, opt: "b", text: "Amperes (A)", isCorrect: false },
      { id: 2, opt: "c", text: "Kilowatts (kW)", isCorrect: false },
      { id: 3, opt: "d", text: "Volts (V)", isCorrect: false }
    ]
  },
  {
    text: "What is the main benefit of using energy-efficient appliances in solar-powered homes?",
    options: [
      { id: 0, opt: "a", text: "They generate more energy.", isCorrect: false },
      { id: 1, opt: "b", text: "They reduce the overall energy consumption.", isCorrect: true },
      { id: 2, opt: "c", text: "They increase the need for larger solar panels.", isCorrect: false },
      { id: 3, opt: "d", text: "They make the system more expensive.", isCorrect: false }
    ]
  }
];

export default questions;  