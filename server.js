const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const plants = [
  {
    name: "Neem",
    botanical_name: "Azadirachta indica",
    origin: "Indian subcontinent",
    tree_type: "Fast-growing tree with wide canopy.",
    use_cases: [
      { condition: "Acne", recommendation: "Apply as paste." },
      { condition: "Gum disease", recommendation: "Used in dental hygiene." }
    ]
  },
  {
    name: "Amla",
    botanical_name: "Phyllanthus emblica",
    origin: "India",
    tree_type: "Medium-sized tree with greenish-yellow fruits.",
    use_cases: [
      { condition: "Indigestion", recommendation: "Consume in powdered form." }

    ]
  }
  ,
  {
    name: "Ashwagandha",
    botanical_name: "Withania somnifera",
    origin: "India",
    tree_type: "Woody shrub with small green flowers and red berries.",
    use_cases: [
      { condition: "Stress", recommendation: "Use as an adaptogen to reduce cortisol." },
      { condition: "Stamina", recommendation: "Take daily to improve endurance." },
      { condition: "Sleep", recommendation: "Use as a supplement to support sleep." }
    ]
  },
  {
    name: "Turmeric",
    botanical_name: "Curcuma longa",
    origin: "Southeast Asia",
    tree_type: "Perennial herb with yellow-orange rhizomes.",
    use_cases: [
      { condition: "Inflammation", recommendation: "Apply topically or consume to reduce inflammation." },
      { condition: "Arthritis", recommendation: "Apply paste to joints to alleviate pain." },
      { condition: "Wound healing", recommendation: "Apply turmeric paste to wounds for faster healing." }
    ]
  },
  {
    name: "Shatavari",
    botanical_name: "Asparagus racemosus",
    origin: "India",
    tree_type: "Climbing plant with small white flowers and berries.",
    use_cases: [
      { condition: "Female reproductive health", recommendation: "Use to balance hormones." },
      { condition: "Menstrual cycle regulation", recommendation: "Take as a supplement to regulate cycles." },
      { condition: "Fertility", recommendation: "Consume for enhancing female fertility." }
    ]
  },
  {
    name: "Brahmi",
    botanical_name: "Bacopa monnieri",
    origin: "India",
    tree_type: "Creeping herb with small leaves and purple flowers.",
    use_cases: [
      { condition: "Memory enhancement", recommendation: "Take for cognitive support." },
      { condition: "Anxiety", recommendation: "Use to reduce anxiety and improve mental clarity." },
      { condition: "Cognitive function", recommendation: "Helpful in age-related cognitive decline." }
    ]
  },
  {
    name: "Haritaki",
    botanical_name: "Terminalia chebula",
    origin: "India",
    tree_type: "Large deciduous tree with small flowers.",
    use_cases: [
      { condition: "Constipation", recommendation: "Used in Triphala for bowel movements." },
      { condition: "Detoxification", recommendation: "Use to detoxify the body." }
    ]
  },
  {
    name: "Guggul",
    botanical_name: "Commiphora mukul",
    origin: "India",
    tree_type: "Small thorny shrub with resin.",
    use_cases: [
      { condition: "High cholesterol", recommendation: "Take to lower LDL cholesterol." },
      { condition: "Weight management", recommendation: "Use to support weight management." }
    ]
  },
  {
    name: "Arjuna",
    botanical_name: "Terminalia arjuna",
    origin: "India",
    tree_type: "Large tree with smooth bark and white flowers.",
    use_cases: [
      { condition: "Cardiovascular health", recommendation: "Consume to strengthen heart function." },
      { condition: "High blood pressure", recommendation: "Use to treat hypertension." }
    ]
  },
  {
    name: "Guduchi (Giloy)",
    botanical_name: "Tinospora cordifolia",
    origin: "India",
    tree_type: "Climbing shrub with heart-shaped leaves.",
    use_cases: [
      { condition: "Fever", recommendation: "Use decoction to reduce fever." },
      { condition: "Immunity", recommendation: "Take to boost immune response." }
    ]
  },
  {
    name: "Jatamansi",
    botanical_name: "Nardostachys jatamansi",
    origin: "Himalayas",
    tree_type: "Flowering plant with aromatic roots.",
    use_cases: [
      { condition: "Sleep disorders", recommendation: "Use as oil or powder to improve sleep." },
      { condition: "Anxiety", recommendation: "Take to calm nerves and reduce stress." }
    ]
  },
  {
    name: "Manjistha",
    botanical_name: "Rubia cordifolia",
    origin: "India and Southeast Asia",
    tree_type: "Climbing herb with red roots.",
    use_cases: [
      { condition: "Skin health", recommendation: "Use for clearer skin and acne treatment." },
      { condition: "Blood purification", recommendation: "Take to purify the blood." }
    ]
  },
  {
    name: "Bhringraj",
    botanical_name: "Eclipta prostrata",
    origin: "India",
    tree_type: "Creeping herb with small white flowers.",
    use_cases: [
      { condition: "Hair growth", recommendation: "Apply oil to scalp for hair growth." },
      { condition: "Liver health", recommendation: "Take to improve liver function." }
    ]
  },
  {
    name: "Aloe Vera",
    botanical_name: "Aloe barbadensis miller",
    origin: "Arabian Peninsula",
    tree_type: "Succulent plant with fleshy leaves containing gel.",
    use_cases: [
      { condition: "Burns and wounds", recommendation: "Apply topically for healing." },
      { condition: "Digestive health", recommendation: "Consume juice for digestive benefits." }
    ]
  },
  {
    name: "Mulethi (Licorice)",
    botanical_name: "Glycyrrhiza glabra",
    origin: "Europe and Asia",
    tree_type: "Perennial herb with deep roots.",
    use_cases: [
      { condition: "Sore throat", recommendation: "Chew or take decoction for throat relief." },
      { condition: "Respiratory infections", recommendation: "Use for respiratory health." }
    ]
  },
  {
    name: "Shankhpushpi",
    botanical_name: "Convolvulus pluricaulis",
    origin: "India",
    tree_type: "Creeping herb with blue flowers.",
    use_cases: [
      { condition: "Memory enhancement", recommendation: "Take for improved focus and memory." },
      { condition: "Mental fatigue", recommendation: "Use to reduce mental exhaustion." }
    ]
  },
  {
    name: "Kalmegh (Andrographis)",
    botanical_name: "Andrographis paniculata",
    origin: "India and Sri Lanka",
    tree_type: "Annual herb with lance-shaped leaves.",
    use_cases: [
      { condition: "Liver detoxification", recommendation: "Take to support liver health." },
      { condition: "Cold and flu", recommendation: "Use as an antiviral to treat infections." }
    ]
  },
  {
    name: "Golden Seal",
    botanical_name: "Hydrastis canadensis",
    origin: "Eastern North America",
    tree_type: "Low-growing perennial herb.",
    use_cases: [
      { condition: "Infections", recommendation: "Use to fight infections due to antimicrobial properties." },
      { condition: "Immune support", recommendation: "Take to boost immunity during colds or flu." },
      { condition: "Digestive health", recommendation: "Use to treat gastritis and ulcers." }
    ]
  },
  {
    name: "Indian Snakeroot",
    botanical_name: "Rauvolfia serpentina",
    origin: "India, Nepal, Bangladesh, and Southeast Asia",
    tree_type: "Small evergreen shrub.",
    use_cases: [
      { condition: "Hypertension", recommendation: "Use to lower blood pressure." },
      { condition: "Mental disorders", recommendation: "Take to treat anxiety and insomnia." }
    ]
  },
  {
    name: "Ghost Pipe",
    botanical_name: "Monotropa uniflora",
    origin: "North America",
    tree_type: "Ghostly white plant without chlorophyll.",
    use_cases: [
      { condition: "Pain relief", recommendation: "Use for severe nerve pain or migraines." },
      { condition: "Sedative", recommendation: "Take for anxiety and emotional distress." }
    ]
  }
];

app.post('/recommend', (req, res) => {
  const { condition } = req.body;
  const plant = plants.find(p => 
    p.use_cases.some(u => u.condition.toLowerCase() === condition.toLowerCase())
  );

  if (plant) {
    const use_case = plant.use_cases.find(u => u.condition.toLowerCase() === condition.toLowerCase());
    res.json({
      plant: plant.name,
      origin: plant.origin,
      tree_type: plant.tree_type,
      recommendation: use_case.recommendation
    });
  } else {
    res.status(404).send('No plant found for this condition');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});