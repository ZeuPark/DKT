const questions = [
  // ICAC Section
  {
    id: "ICAC001",
    category: "ICAC",
    question: "What is the maximum fine that could be issued by a court for giving false information to obtain a driver licence or learner permit?",
    options: ["$11,000", "$5,500", "$2,200"],
    correctAnswer: 0
  },
  {
    id: "ICAC002",
    category: "ICAC",
    question: "What is the maximum penalty a court could issue for offering a bribe to a public official?",
    options: ["10 years' imprisonment", "5 years' imprisonment", "2 years' imprisonment"],
    correctAnswer: 0
  },
  {
    id: "ICAC003",
    category: "ICAC",
    question: "If a staff member at Transport for NSW asked you for a bribe to help you get your driver licence, what should you do?",
    options: ["Report it to the ICAC", "Pay the bribe to get your driver licence", "Ask for a receipt"],
    correctAnswer: 0
  },

  // General Knowledge Section
  {
    id: "CG001",
    category: "General Knowledge",
    question: "Can a car licence holder tow a caravan?",
    options: ["Yes, providing the caravan is unloaded and the GVM of the caravan is no more than the unladen weight of the car", "Yes, providing the caravan's GVM does not exceed the car manufacturer's recommendations for maximum towing capacity", "No, you cannot tow a caravan with a car licence"],
    correctAnswer: 1
  },
  {
    id: "CG002",
    category: "General Knowledge",
    question: "If two vehicles meet at a T-intersection and one is turning, which vehicle gives way?",
    options: ["The vehicle continuing straight gives way to the vehicle turning", "The vehicle turning gives way to the vehicle continuing straight", "Both vehicles must stop"],
    correctAnswer: 1
  },
  {
    id: "CG003",
    category: "General Knowledge",
    question: "Which SINGLE rule applies at this intersection?",
    options: ["Give way to vehicles on your right", "Give way to all vehicles on the continuing road", "Give way only if there is a give way sign"],
    correctAnswer: 1,
    hasImage: true,
    imageId: "CG003"
  },
  {
    id: "CG004",
    category: "General Knowledge",
    question: "What is the speed limit in a school zone during school zone hours?",
    options: ["30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1
  },
  {
    id: "CG005",
    category: "General Knowledge",
    question: "When parking parallel to the kerb on a level road, your car should be positioned:",
    options: ["Within 3 metres from the kerb", "Within 1 metre from the kerb", "Within 0.5 metres from the kerb"],
    correctAnswer: 0
  },
  {
    id: "CG006",
    category: "General Knowledge",
    question: "When driving on a multi-lane road with a speed limit of more than 80 km/h you must:",
    options: ["Keep left unless overtaking", "Drive in any lane", "Drive only in the middle lane"],
    correctAnswer: 0
  },
  {
    id: "CG007",
    category: "General Knowledge",
    question: "You have a provisional P2 licence. What is the maximum number of demerit points that you are allowed before your licence is suspended?",
    options: ["7 points", "13 points", "4 points"],
    correctAnswer: 0
  },
  {
    id: "CG008",
    category: "General Knowledge",
    question: "What is the maximum blood alcohol concentration (BAC) limit for a learner driver?",
    options: ["0.02", "0.05", "Zero"],
    correctAnswer: 2
  },
  {
    id: "CG009",
    category: "General Knowledge",
    question: "On a freeway with a speed limit of 110 km/h, what is the maximum speed a learner driver can travel?",
    options: ["90 km/h", "100 km/h", "110 km/h"],
    correctAnswer: 0
  },
  {
    id: "CG010",
    category: "General Knowledge",
    question: "What should you do when you see emergency vehicle lights flashing behind you?",
    options: ["Speed up to get out of the way", "Move to the left and stop if safe to do so", "Stop immediately where you are"],
    correctAnswer: 1
  },
  {
    id: "CG011",
    category: "General Knowledge",
    question: "A red P plate must be displayed by:",
    options: ["All provisional licence holders", "Provisional P1 licence holders", "Learner licence holders"],
    correctAnswer: 1
  },
  {
    id: "CG012",
    category: "General Knowledge",
    question: "What does a broken white line in the centre of the road mean?",
    options: ["You may overtake if it is safe", "You may not overtake at any time", "You must drive in the left lane only"],
    correctAnswer: 0
  },
  {
    id: "CG013",
    category: "General Knowledge",
    question: "You are driving on a road with two or more lanes going in your direction and the speed limit is less than 80 km/h. Which lane should you drive in?",
    options: ["Any lane", "The left lane unless overtaking or turning", "The right lane only"],
    correctAnswer: 0
  },
  {
    id: "CG014",
    category: "General Knowledge",
    question: "When approaching a stationary bus displaying a 'GIVE WAY TO BUS' sign, you must:",
    options: ["Stop and wait until the bus moves off", "Sound your horn to alert the driver", "Give way to the bus if it is signalling to pull out"],
    correctAnswer: 2
  },
  {
    id: "CG015",
    category: "General Knowledge",
    question: "If you hold a learner licence, what type of vehicle can you drive?",
    options: ["A vehicle of any power", "Only vehicles with 8 or more cylinders", "A vehicle with restrictions that apply to your licence"],
    correctAnswer: 2
  },
  {
    id: "CG016",
    category: "General Knowledge",
    question: "When can you use your car horn?",
    options: ["To warn other road users or animals of your approach", "To show your displeasure to other drivers", "Any time except between 10pm and 6am"],
    correctAnswer: 0
  },
  {
    id: "CG017",
    category: "General Knowledge",
    question: "When must you use a child restraint?",
    options: ["When a child is under 7 years of age", "Only if there is a child seat available", "When a child is under 4 years of age"],
    correctAnswer: 0
  },
  {
    id: "CG018",
    category: "General Knowledge",
    question: "If you are involved in an accident and your vehicle needs to be towed away, what should you report the accident to police within?",
    options: ["24 hours", "48 hours", "7 days"],
    correctAnswer: 0
  },
  {
    id: "CG019",
    category: "General Knowledge",
    question: "If you are involved in an accident where a person is injured, what must you do?",
    options: ["Only stop if your vehicle is damaged", "Stop and give whatever help you can", "Keep driving and call the police later"],
    correctAnswer: 1
  },
  {
    id: "CG020",
    category: "General Knowledge",
    question: "What should you do before changing lanes?",
    options: ["Check your mirrors, indicate, and check your blind spot", "Just indicate and change lanes", "Only check your rear-view mirror"],
    correctAnswer: 0
  },

  // Alcohol and Drugs Section
  {
    id: "AD001",
    category: "Alcohol and Drugs",
    question: "How does alcohol affect your driving ability?",
    options: ["It improves your reaction time", "It reduces your ability to judge distance and speed, and slows your reactions", "It has no effect if you are an experienced driver"],
    correctAnswer: 1
  },
  {
    id: "AD002",
    category: "Alcohol and Drugs",
    question: "What is the legal blood alcohol limit for a full licence holder in NSW?",
    options: ["Under 0.05", "Under 0.02", "Under 0.08"],
    correctAnswer: 0
  },
  {
    id: "AD003",
    category: "Alcohol and Drugs",
    question: "Which of the following can affect your ability to drive safely?",
    options: ["Prescription medicine", "Illegal drugs", "Both prescription medicine and illegal drugs"],
    correctAnswer: 2
  },
  {
    id: "AD004",
    category: "Alcohol and Drugs",
    question: "How long should you wait to drive after drinking alcohol?",
    options: ["1 hour per standard drink", "30 minutes per standard drink", "The amount of time depends on how much you drank - there is no reliable way to speed up the process"],
    correctAnswer: 2
  },
  {
    id: "AD005",
    category: "Alcohol and Drugs",
    question: "What is the best way to avoid the effects of alcohol when driving?",
    options: ["Have coffee before driving", "Eat a big meal while drinking", "Do not drink alcohol if you are going to drive"],
    correctAnswer: 2
  },
  {
    id: "AD006",
    category: "Alcohol and Drugs",
    question: "A police officer asks you to provide a breath test. What happens if you refuse?",
    options: ["Nothing, you have the right to refuse", "You will be charged with an offence", "You will only get a warning"],
    correctAnswer: 1
  },
  {
    id: "AD007",
    category: "Alcohol and Drugs",
    question: "Can you be tested for drugs while driving?",
    options: ["No, only alcohol tests are legal", "Yes, police can conduct random drug tests", "Only if you have been in an accident"],
    correctAnswer: 1
  },
  {
    id: "AD008",
    category: "Alcohol and Drugs",
    question: "If you are taking medication, what should you do before driving?",
    options: ["Drive as normal - medication doesn't affect driving", "Check with your doctor or pharmacist if it's safe to drive", "Only drive short distances"],
    correctAnswer: 1
  },

  // Bicycle Safety Section
  {
    id: "BI001",
    category: "Bicycle Safety",
    question: "What is the minimum distance you must keep when passing a cyclist in a 60 km/h zone?",
    options: ["1 metre", "1.5 metres", "2 metres"],
    correctAnswer: 0
  },
  {
    id: "BI002",
    category: "Bicycle Safety",
    question: "When the speed limit is over 60 km/h, what is the minimum distance you must leave when passing a cyclist?",
    options: ["1 metre", "1.5 metres", "2 metres"],
    correctAnswer: 1
  },
  {
    id: "BI003",
    category: "Bicycle Safety",
    question: "Can you cross a continuous white line to pass a cyclist if it is safe to do so?",
    options: ["No, never", "Yes, if it is safe", "Only on country roads"],
    correctAnswer: 1
  },
  {
    id: "BI004",
    category: "Bicycle Safety",
    question: "Are cyclists allowed to ride two abreast (side by side)?",
    options: ["No, they must always ride single file", "Yes, but they must not be more than 1.5 metres apart", "Yes, but only on bike paths"],
    correctAnswer: 1
  },
  {
    id: "BI005",
    category: "Bicycle Safety",
    question: "When opening your car door, you should:",
    options: ["Open it quickly to avoid traffic", "Check mirrors and look over your shoulder for cyclists before opening", "Always open it slowly"],
    correctAnswer: 1
  },

  // Fatigue and Defensive Driving Section
  {
    id: "FD001",
    category: "Fatigue and Defensive Driving",
    question: "What is the best way to avoid fatigue when driving long distances?",
    options: ["Drink coffee or energy drinks", "Take regular breaks every 2 hours", "Drive faster to arrive sooner"],
    correctAnswer: 1
  },
  {
    id: "FD002",
    category: "Fatigue and Defensive Driving",
    question: "If you feel tired while driving, what should you do?",
    options: ["Open the window for fresh air", "Stop in a safe place and rest or take a nap", "Turn up the music"],
    correctAnswer: 1
  },
  {
    id: "FD003",
    category: "Fatigue and Defensive Driving",
    question: "At what time of day is fatigue most likely to affect you?",
    options: ["Early morning and late afternoon", "Middle of the day", "Early evening"],
    correctAnswer: 0
  },
  {
    id: "FD004",
    category: "Fatigue and Defensive Driving",
    question: "What is the safe following distance in good conditions?",
    options: ["1 second behind the vehicle in front", "At least 3 seconds behind the vehicle in front", "As close as possible to save fuel"],
    correctAnswer: 1
  },
  {
    id: "FD005",
    category: "Fatigue and Defensive Driving",
    question: "In wet conditions, you should:",
    options: ["Drive at the same speed as in dry conditions", "Increase your following distance", "Drive closer to see better"],
    correctAnswer: 1
  },
  {
    id: "FD006",
    category: "Fatigue and Defensive Driving",
    question: "What is defensive driving?",
    options: ["Driving aggressively to avoid danger", "Anticipating dangerous situations and adjusting your driving", "Following other vehicles closely"],
    correctAnswer: 1
  },

  // Intersections Section
  {
    id: "IN001",
    category: "Intersections",
    question: "At an intersection with no traffic signs or signals, you must give way to:",
    options: ["Vehicles on your left", "Vehicles on your right", "All vehicles"],
    correctAnswer: 1
  },
  {
    id: "IN002",
    category: "Intersections",
    question: "When turning right at an intersection, you must give way to:",
    options: ["Only vehicles turning left", "Oncoming vehicles going straight or turning left", "No vehicles if you have a green light"],
    correctAnswer: 1
  },
  {
    id: "IN003",
    category: "Intersections",
    question: "At a roundabout, you must give way to:",
    options: ["Vehicles on your right", "Vehicles already in the roundabout", "All vehicles"],
    correctAnswer: 1
  },
  {
    id: "IN004",
    category: "Intersections",
    question: "When entering a roundabout, you should:",
    options: ["Always indicate left", "Indicate if you are turning left or right", "Never indicate"],
    correctAnswer: 1
  },
  {
    id: "IN005",
    category: "Intersections",
    question: "At a T-intersection without signs, which vehicle has right of way?",
    options: ["The vehicle on the terminating road", "The vehicle on the continuing road", "The vehicle on the left"],
    correctAnswer: 1
  },
  {
    id: "IN006",
    category: "Intersections",
    question: "When turning left at an intersection, you must give way to:",
    options: ["Pedestrians crossing the road you are entering", "Only other vehicles", "No one if you have a green light"],
    correctAnswer: 0
  },
  {
    id: "IN007",
    category: "Intersections",
    question: "You are at an intersection with a stop sign. What must you do?",
    options: ["Slow down and proceed if clear", "Stop completely, then proceed when safe", "Stop only if there are other vehicles"],
    correctAnswer: 1
  },
  {
    id: "IN008",
    category: "Intersections",
    question: "At an intersection controlled by a give way sign, you must:",
    options: ["Stop completely before proceeding", "Slow down or stop and give way to all vehicles", "Proceed without stopping if clear"],
    correctAnswer: 1
  },

  // Traffic Lights and Lanes Section
  {
    id: "TL001",
    category: "Traffic Lights and Lanes",
    question: "What does a yellow traffic light mean?",
    options: ["Speed up to get through before it turns red", "Stop unless it is unsafe to do so", "Proceed with caution"],
    correctAnswer: 1
  },
  {
    id: "TL002",
    category: "Traffic Lights and Lanes",
    question: "At a red light, can you turn left after stopping?",
    options: ["Yes, if you give way to other traffic", "Only if there is a sign permitting it", "No, never"],
    correctAnswer: 1
  },
  {
    id: "TL003",
    category: "Traffic Lights and Lanes",
    question: "What does a flashing yellow light mean?",
    options: ["Stop before proceeding", "Proceed with caution", "Give way to traffic on your right"],
    correctAnswer: 1
  },
  {
    id: "TL004",
    category: "Traffic Lights and Lanes",
    question: "You are in a lane marked with a left arrow. What can you do?",
    options: ["Turn left only", "Go straight or turn left", "Turn in any direction"],
    correctAnswer: 0
  },
  {
    id: "TL005",
    category: "Traffic Lights and Lanes",
    question: "A green arrow pointing right means:",
    options: ["You may turn right", "You must turn right", "Give way and turn right"],
    correctAnswer: 0
  },
  {
    id: "TL006",
    category: "Traffic Lights and Lanes",
    question: "What does a red arrow mean?",
    options: ["Proceed with caution in that direction", "You must not proceed in that direction", "Give way and proceed"],
    correctAnswer: 1
  },
  {
    id: "TL007",
    category: "Traffic Lights and Lanes",
    question: "At traffic lights showing a red light and green arrow, you may:",
    options: ["Go in any direction", "Only go in the direction of the arrow", "Stop and wait for green"],
    correctAnswer: 1
  },

  // Negligent Driving Section
  {
    id: "ND001",
    category: "Negligent Driving",
    question: "What is considered negligent driving?",
    options: ["Driving carefully", "Driving without due care and attention", "Driving slowly"],
    correctAnswer: 1
  },
  {
    id: "ND002",
    category: "Negligent Driving",
    question: "Using a mobile phone while driving (without hands-free) is:",
    options: ["Legal if stopped at traffic lights", "Illegal at all times while the vehicle is moving or stationary but not parked", "Legal in an emergency"],
    correctAnswer: 1
  },
  {
    id: "ND003",
    category: "Negligent Driving",
    question: "What is the penalty for using a mobile phone illegally while driving?",
    options: ["Warning only", "Fine and demerit points", "Licence suspension only"],
    correctAnswer: 1
  },
  {
    id: "ND004",
    category: "Negligent Driving",
    question: "Is it legal to drive wearing headphones or earphones?",
    options: ["Yes, in all cases", "No, it is illegal", "Only if listening to GPS navigation"],
    correctAnswer: 1
  },
  {
    id: "ND005",
    category: "Negligent Driving",
    question: "If your vehicle breaks down on a freeway, you should:",
    options: ["Stop in any lane", "Move off the road if possible and turn on hazard lights", "Walk to get help immediately"],
    correctAnswer: 1
  },

  // Pedestrians Section
  {
    id: "PD001",
    category: "Pedestrians",
    question: "When turning at an intersection, you must give way to:",
    options: ["Only other vehicles", "Pedestrians crossing the road you are turning into", "No one if you have a green light"],
    correctAnswer: 1
  },
  {
    id: "PD002",
    category: "Pedestrians",
    question: "At a pedestrian crossing with flashing yellow lights, you must:",
    options: ["Stop and give way to pedestrians", "Slow down and proceed with caution", "Proceed as the lights are just a warning"],
    correctAnswer: 0
  },
  {
    id: "PD003",
    category: "Pedestrians",
    question: "When must you give way to pedestrians?",
    options: ["Only at pedestrian crossings", "When entering or leaving a driveway", "Never, pedestrians must give way to vehicles"],
    correctAnswer: 1
  },
  {
    id: "PD004",
    category: "Pedestrians",
    question: "A child is walking on the footpath near a school. You should:",
    options: ["Speed up to pass quickly", "Be prepared to stop as children may act unpredictably", "Sound your horn to warn them"],
    correctAnswer: 1
  },
  {
    id: "PD005",
    category: "Pedestrians",
    question: "What must you do at a children's crossing when the flags are displayed?",
    options: ["Slow down and be prepared to stop", "Stop and remain stopped while any pedestrian is on the crossing", "Proceed if no children are visible"],
    correctAnswer: 1
  },

  // Seat Belts and Restraints Section
  {
    id: "SB001",
    category: "Seat Belts and Restraints",
    question: "Who is responsible for ensuring passengers under 16 wear seatbelts?",
    options: ["The passengers themselves", "The driver", "The passenger's parents"],
    correctAnswer: 1
  },
  {
    id: "SB002",
    category: "Seat Belts and Restraints",
    question: "Can a child under 4 years sit in the front seat of a car?",
    options: ["Yes, in a child seat", "No, unless all back seats are occupied by children under 7", "Yes, at any time"],
    correctAnswer: 1
  },
  {
    id: "SB003",
    category: "Seat Belts and Restraints",
    question: "A child aged 4-7 years must:",
    options: ["Sit in the back seat in an appropriate child restraint or booster seat", "Sit anywhere in the car", "Only wear a normal seatbelt"],
    correctAnswer: 0
  },
  {
    id: "SB004",
    category: "Seat Belts and Restraints",
    question: "Is it legal to drive without wearing a seatbelt?",
    options: ["Yes, if you are over 18", "No, all vehicle occupants must wear seatbelts", "Yes, for short trips"],
    correctAnswer: 1
  },
  {
    id: "SB005",
    category: "Seat Belts and Restraints",
    question: "If your vehicle does not have enough seatbelts for all passengers:",
    options: ["Some passengers can travel without seatbelts", "You must not carry more passengers than there are seatbelts", "Children can share seatbelts"],
    correctAnswer: 1
  },

  // Speed Limits Section
  {
    id: "SL001",
    category: "Speed Limits",
    question: "What is the default speed limit in a residential area in NSW if there are no signs?",
    options: ["40 km/h", "50 km/h", "60 km/h"],
    correctAnswer: 1
  },
  {
    id: "SL002",
    category: "Speed Limits",
    question: "What is the maximum speed limit on any road in NSW?",
    options: ["100 km/h", "110 km/h", "120 km/h"],
    correctAnswer: 1
  },
  {
    id: "SL003",
    category: "Speed Limits",
    question: "In a school zone during school hours, the speed limit is:",
    options: ["30 km/h", "40 km/h", "50 km/h"],
    correctAnswer: 1
  },
  {
    id: "SL004",
    category: "Speed Limits",
    question: "What is the speed limit in a shared zone?",
    options: ["10 km/h", "20 km/h", "30 km/h"],
    correctAnswer: 0
  },
  {
    id: "SL005",
    category: "Speed Limits",
    question: "If conditions are poor (rain, fog), you should:",
    options: ["Drive at the speed limit", "Drive below the speed limit as appropriate for conditions", "Drive faster to get off the road sooner"],
    correctAnswer: 1
  },
  {
    id: "SL006",
    category: "Speed Limits",
    question: "What speed should you drive past a stationary emergency vehicle with flashing lights?",
    options: ["40 km/h or less", "60 km/h or less", "The posted speed limit"],
    correctAnswer: 0
  },
  {
    id: "SL007",
    category: "Speed Limits",
    question: "A learner driver must not exceed:",
    options: ["80 km/h", "90 km/h", "100 km/h"],
    correctAnswer: 1
  },

  // Traffic Signs Section
  {
    id: "SI001",
    category: "Traffic Signs",
    question: "What does a circular sign with a red border mean?",
    options: ["Warning", "Regulatory - you must obey it", "Information"],
    correctAnswer: 1
  },
  {
    id: "SI002",
    category: "Traffic Signs",
    question: "What does a diamond-shaped yellow sign indicate?",
    options: ["Speed limit", "Warning of a hazard ahead", "Directions"],
    correctAnswer: 1
  },
  {
    id: "SI003",
    category: "Traffic Signs",
    question: "What does a 'No Standing' sign mean?",
    options: ["You may stop to pick up or drop off passengers", "You may not stop at all", "You may park for a short time"],
    correctAnswer: 0
  },
  {
    id: "SI004",
    category: "Traffic Signs",
    question: "What does a 'No Stopping' sign mean?",
    options: ["You may stop briefly", "You may not stop at all", "You may stop to drop off passengers"],
    correctAnswer: 1
  },
  {
    id: "SI005",
    category: "Traffic Signs",
    question: "What does a 'No Parking' sign mean?",
    options: ["You may stop to drop off or pick up passengers or goods", "You may not stop at all", "You may park for up to 5 minutes"],
    correctAnswer: 0
  },
  {
    id: "SI006",
    category: "Traffic Signs",
    question: "A blue sign with white writing usually indicates:",
    options: ["A warning", "Services or facilities available", "A speed limit"],
    correctAnswer: 1
  },
  {
    id: "SI007",
    category: "Traffic Signs",
    question: "What does an octagonal (8-sided) sign mean?",
    options: ["Give way", "Stop", "No entry"],
    correctAnswer: 1
  },
  {
    id: "SI008",
    category: "Traffic Signs",
    question: "What does a green sign usually indicate?",
    options: ["Regulatory information", "Warning", "Directions and destinations"],
    correctAnswer: 2
  },
  {
    id: "SI009",
    category: "Traffic Signs",
    question: "What must you do when you see a 'Give Way' sign?",
    options: ["Stop completely", "Slow down or stop and give way to all traffic", "Proceed without stopping"],
    correctAnswer: 1
  },
  {
    id: "SI010",
    category: "Traffic Signs",
    question: "A sign showing a red circle with a white horizontal bar means:",
    options: ["No entry", "No parking", "Road closed ahead"],
    correctAnswer: 0
  }
];

// Get all unique categories
const categories = [...new Set(questions.map(q => q.category))];
