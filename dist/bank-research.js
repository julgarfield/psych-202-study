// Curated source-grounded research questions. Stable retained IDs and correct indices.
globalThis.BANK_RESEARCH = [
  {
    "id": "r2-exp-game-noise-iv",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Participants are assigned violent or nonviolent games, then choose a noise punishment for an opponent. What is the IV?",
    "choices": [
      "The chosen noise duration",
      "The assigned game content",
      "The participants’ previous game experience",
      "The participants’ aggression questionnaire scores"
    ],
    "correct": 1,
    "explanation": "The researcher varies which game-content condition participants receive.",
    "choiceExplanations": [
      "This is the recorded response after play, making it the DV.",
      "The researcher varies which game-content condition participants receive.",
      "This is a preexisting characteristic, not the assigned condition.",
      "These would be measured responses rather than the assigned game condition."
    ],
    "misconception": "The researcher’s manipulation, not any variable associated with aggression, defines the IV.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "experiment"
  },
  {
    "id": "r2-exp-game-noise-dv",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Participants are assigned game content and then choose how long an opponent’s noise punishment lasts. Which variable is the DV?",
    "choices": [
      "Chosen noise-punishment duration",
      "Assigned game content",
      "The game’s presentation instructions",
      "Prior experience playing violent games"
    ],
    "correct": 0,
    "explanation": "The researcher records the participant’s choice as the response to the assigned condition.",
    "choiceExplanations": [
      "The researcher records the participant’s choice as the response to the assigned condition.",
      "This defines the treatment conditions and is the IV.",
      "These are part of the manipulation procedure, not the recorded response.",
      "This is a preexisting characteristic rather than the stated outcome."
    ],
    "misconception": "The measured consequence of a condition is distinct from the condition and prior participant characteristics.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "experiment"
  },
  {
    "id": "r2-exp-game-noise-confound",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A violent-game group is tested in a hot room; a nonviolent-game group is tested in a cool room. Which change best isolates game content?",
    "choices": [
      "Increase both groups’ sizes while keeping their assigned rooms",
      "Use more sensitive equipment to record the noise choices",
      "Use the same room temperature for both content conditions",
      "Select equal numbers of experienced gamers for each room"
    ],
    "correct": 2,
    "explanation": "This separates game content from the situational difference currently paired with it.",
    "choiceExplanations": [
      "A larger sample retains the content–temperature confound.",
      "Better outcome measurement does not separate the two manipulated experiences.",
      "This separates game content from the situational difference currently paired with it.",
      "Balancing experience does not remove the temperature difference."
    ],
    "misconception": "Participant similarity does not eliminate an extra situation paired with the treatment.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "application"
  },
  {
    "id": "r2-exp-game-noise-operation",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A study defines its aggression DV as chosen noise duration. Which recording rule matches that definition and allows replication?",
    "choices": [
      "Record each chosen intensity in decibels using the same procedure",
      "Record whether each participant chooses any noise, regardless of duration",
      "Record the common game-play interval in minutes",
      "Record each chosen duration in milliseconds using the same procedure"
    ],
    "correct": 3,
    "explanation": "The response, unit and procedure identify how the outcome is quantified.",
    "choiceExplanations": [
      "That is a reproducible different dimension of noise, not the defined duration DV.",
      "That records a binary choice rather than how long the punishment lasts.",
      "That records a feature of the play procedure rather than the subsequent chosen punishment duration.",
      "The response, unit and procedure identify how the outcome is quantified."
    ],
    "misconception": "Operational detail identifies the response and how its quantity is recorded.",
    "source": "Research Methods II · slides 22–30",
    "type": "experiment"
  },
  {
    "id": "r2-exp-game-noise-scope",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A controlled randomized game study finds a difference in chosen noise punishment. Which causal conclusion stays within its outcome?",
    "choices": [
      "The assigned games changed the frequency of physical fights",
      "The assigned games increased real-world shootings",
      "The assigned game conditions affected chosen noise punishment in the task",
      "The assigned games changed participants’ implicit attitudes"
    ],
    "correct": 2,
    "explanation": "The causal claim follows the actual manipulation and recorded laboratory behavior.",
    "choiceExplanations": [
      "Fights were not the measured outcome.",
      "This extension requires additional evidence beyond the laboratory proxy.",
      "The causal claim follows the actual manipulation and recorded laboratory behavior.",
      "An implicit measure was not the stated outcome."
    ],
    "misconception": "A laboratory proxy does not directly measure every behavior associated with the construct.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "misconception"
  },
  {
    "id": "r2-exp-game-noise-random",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Volunteers from one course are assigned game conditions by chance. What does that allocation address most directly?",
    "choices": [
      "The sample’s coverage of the general public",
      "The validity of noise punishment as a real-world violence measure",
      "Consistency of the scoring instrument across occasions",
      "Systematic preexisting differences between the condition groups"
    ],
    "correct": 3,
    "explanation": "Random assignment reduces selection into one treatment based on prior characteristics.",
    "choiceExplanations": [
      "That depends on recruitment, which remains restricted to a course.",
      "Assignment does not supply construct-validity evidence.",
      "That is a measurement-reliability question.",
      "Random assignment reduces selection into one treatment based on prior characteristics."
    ],
    "misconception": "Random assignment addresses condition comparability; recruitment and measurement require separate evidence.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "comparison"
  },
  {
    "id": "r2-exp-game-sauce-measure",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "After assigned play conditions, participants choose grams of hot sauce to give another person. How is that recorded variable classified?",
    "choices": [
      "Self-report DV",
      "Behavioral DV",
      "Physiological DV",
      "Manipulated IV"
    ],
    "correct": 1,
    "explanation": "The researcher quantifies an allocation action after the assigned condition.",
    "choiceExplanations": [
      "The score is the chosen allocation, not a questionnaire report about aggression.",
      "The researcher quantifies an allocation action after the assigned condition.",
      "No bodily or neural signal is the stated measurement.",
      "The play condition is assigned; participants’ sauce choices are recorded as outcomes."
    ],
    "misconception": "A participant’s choice is an action outcome, not the researcher’s manipulation or an attitude report.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-exp-photo-attitude-operation",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which information is needed to reproduce an attitude questionnaire outcome after photograph exposure?",
    "choices": [
      "The selected photographs and their presentation instructions",
      "The exact items, response scale and scoring rule",
      "The procedure assigning participants to photograph conditions",
      "The eligibility criteria and recruitment route"
    ],
    "correct": 1,
    "explanation": "These specify how reported attitude becomes a recorded score.",
    "choiceExplanations": [
      "These specify the manipulation rather than how answers become the attitude outcome.",
      "These specify how reported attitude becomes a recorded score.",
      "Allocation details do not supply the questionnaire or its scoring rule.",
      "These specify who enters the study rather than the attitude measurement."
    ],
    "misconception": "A self-report outcome needs explicit item and coding information.",
    "source": "Research Methods II · slides 22–30",
    "type": "experiment"
  },
  {
    "id": "r2-exp-photo-attitude-scope",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Students are randomly assigned refugee photographs, then rate their attitudes. Which outcome was directly tested?",
    "choices": [
      "The effect of photograph condition on reported attitude",
      "The effect on observed helping toward refugees",
      "The effect on implicit attitude response times",
      "The effect on physiological arousal during viewing"
    ],
    "correct": 0,
    "explanation": "The assigned stimulus is compared using a self-report outcome.",
    "choiceExplanations": [
      "The assigned stimulus is compared using a self-report outcome.",
      "Helping behavior was not recorded.",
      "No implicit response-time measure was collected.",
      "No bodily signal was recorded as the stated outcome."
    ],
    "misconception": "The response was an attitude report; effects on actions, implicit responses or bodily signals require their own measurements.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "misconception"
  },
  {
    "id": "r2-exp-crime-video-iv",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Participants of different genders are randomly assigned a crime video with a male or female actor. Which variable is experimentally manipulated?",
    "choices": [
      "The participants’ own gender",
      "The participants’ severity ratings",
      "The actor condition in the assigned video",
      "The participants’ prior attitudes about crime"
    ],
    "correct": 2,
    "explanation": "The researcher controls the presented stimulus regardless of the participant’s own gender.",
    "choiceExplanations": [
      "This is a preexisting attribute, not randomly allocated.",
      "These are responses measured after viewing.",
      "The researcher controls the presented stimulus regardless of the participant’s own gender.",
      "These are preexisting or measured characteristics rather than the assigned stimulus."
    ],
    "misconception": "An actor’s presented gender can be assigned as a stimulus; the participant’s own gender cannot.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "experiment"
  },
  {
    "id": "r2-exp-crime-video-confound",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Videos differ in actor gender and in the severity of the crime shown. Which redesign isolates the actor-gender comparison?",
    "choices": [
      "Recruit more viewers for both unmatched videos",
      "Ask viewers to rate both severity and actor attractiveness",
      "Balance viewers’ gender across the existing videos",
      "Match the crime script and vary the actor condition"
    ],
    "correct": 3,
    "explanation": "This removes crime severity as a systematic alternative difference.",
    "choiceExplanations": [
      "Additional viewers do not separate actor gender from crime severity.",
      "More outcomes do not repair the unmatched manipulation.",
      "Balancing participants does not match the crime portrayed.",
      "This removes crime severity as a systematic alternative difference."
    ],
    "misconception": "A stimulus comparison needs comparable non-target features, not just balanced viewers.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "application"
  },
  {
    "id": "r2-exp-study-retrieval-confound",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A retrieval-practice group receives more study time than a rereading group. Scores differ afterward. What remains unresolved?",
    "choices": [
      "Whether the outcome was measured after the strategies were used",
      "Whether the comparison contains different strategy conditions",
      "Whether a score difference occurred in this comparison",
      "Whether strategy or additional study time accounts for the difference"
    ],
    "correct": 3,
    "explanation": "The conditions differ on both the intended strategy and time available.",
    "choiceExplanations": [
      "The stated post-study scoring establishes that order; it does not separate strategy from time.",
      "Retrieval practice and rereading are the different conditions already described.",
      "The stem reports a difference; its attribution remains unresolved.",
      "The conditions differ on both the intended strategy and time available."
    ],
    "misconception": "When strategy and time vary together, the comparison does not isolate strategy.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "application"
  },
  {
    "id": "r2-exp-feedback-rating-measure",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "After assigned feedback, participants rate how motivated they feel. How is that rating classified?",
    "choices": [
      "Behavioral DV",
      "Physiological DV",
      "Self-report DV",
      "Manipulated IV"
    ],
    "correct": 2,
    "explanation": "Participants provide their own report of motivation after the manipulation.",
    "choiceExplanations": [
      "The stated score is a rating, not independently counted work or persistence.",
      "No bodily or brain recording supplies the rating.",
      "Participants provide their own report of motivation after the manipulation.",
      "The feedback is assigned; the motivation rating is the outcome."
    ],
    "misconception": "Reported motivation differs from observed work and from assigned feedback.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-quasi-program-eligibility-limit",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Program entry depends on poverty-linked eligibility. Participants later outperform nonparticipants. What limits attributing the difference to the program?",
    "choices": [
      "Eligibility groups may differ in other achievement-related circumstances",
      "The outcome was recorded after program entry",
      "The program has a name and a defined curriculum",
      "The comparison includes people who did not enter the program"
    ],
    "correct": 0,
    "explanation": "The groups were not randomly allocated and poverty-linked differences remain relevant.",
    "choiceExplanations": [
      "The groups were not randomly allocated and poverty-linked differences remain relevant.",
      "That ordering is compatible with an effect but does not resolve the nonrandom groups.",
      "Clear intervention detail does not itself equal random assignment.",
      "A comparison is useful; its nonrandom formation is the limitation."
    ],
    "misconception": "Eligibility-based group formation can leave differences beyond the program itself.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "misconception"
  },
  {
    "id": "r2-quasi-gamers-redesign",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Frequent and infrequent gamers differ in noise-punishment choices. Which follow-up provides a controlled test of game content?",
    "choices": [
      "Recruit larger groups with the same prior playing histories",
      "Match groups by one characteristic and leave game exposure self-selected",
      "Retest the same gamers using a longer questionnaire",
      "Randomly assign game content and hold testing conditions constant"
    ],
    "correct": 3,
    "explanation": "This allocates a manipulable condition rather than relying on existing playing histories.",
    "choiceExplanations": [
      "This retains the original attribute-based comparison.",
      "Matching one factor does not establish randomized exposure or eliminate other differences.",
      "Repeated measurement can improve detail but does not manipulate content.",
      "This allocates a manipulable condition rather than relying on existing playing histories."
    ],
    "misconception": "A causal follow-up needs an allocated exposure, not merely a larger or repeated observational comparison.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "experiment"
  },
  {
    "id": "r2-quasi-volunteer-treatment-limit",
    "lessonId": "experiment",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Volunteers choose either a new program or an established one. Which alternative most threatens attributing later differences to program type?",
    "choices": [
      "Both groups receive some form of treatment",
      "The outcome is collected after the programs finish",
      "Each program uses a specified procedure",
      "Initial motivation or symptoms may influence program choice"
    ],
    "correct": 3,
    "explanation": "Self-selection can connect preexisting characteristics with the treatment received.",
    "choiceExplanations": [
      "Active treatments can be valid comparisons if allocation is appropriate.",
      "Timing alone does not cause the selection problem.",
      "Reproducible procedures do not remove self-selection.",
      "Self-selection can connect preexisting characteristics with the treatment received."
    ],
    "misconception": "The problem is how participants enter conditions, not the use of two active treatments.",
    "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
    "type": "misconception"
  },
  {
    "id": "r2-corr-games-reverse",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Game play and aggression are associated. Researchers ask whether aggressive people are drawn to violent games. Which causal uncertainty are they addressing?",
    "choices": [
      "Whether parenting could influence both measurements",
      "Whether the aggression measure consistently captures the same response",
      "Whether the association extends to an unstudied population",
      "Which measured variable may influence the other"
    ],
    "correct": 3,
    "explanation": "The proposed explanation reverses the direction from game play causing aggression.",
    "choiceExplanations": [
      "That is a separate third-variable proposal.",
      "That is a reliability question rather than the proposed reversed influence.",
      "That is a scope question rather than the direction between game play and aggression.",
      "The proposed explanation reverses the direction from game play causing aggression."
    ],
    "misconception": "Reversing A and B is different from introducing a common C.",
    "source": "Research Methods I · slides 29–37",
    "type": "application"
  },
  {
    "id": "r2-corr-games-prediction",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A measured association predicts aggression from game-play frequency. What additional conclusion requires stronger evidence?",
    "choices": [
      "Reducing game play would cause aggression to decrease",
      "The variables can help predict one another in comparable data",
      "The variables vary together in the sampled data",
      "The prediction should be evaluated in appropriate further observations"
    ],
    "correct": 0,
    "explanation": "An intervention claim requires resolving directionality and other influences.",
    "choiceExplanations": [
      "An intervention claim requires resolving directionality and other influences.",
      "Prediction is a legitimate use of the observed relationship.",
      "That is the association described.",
      "Checking predictive performance does not make a causal assertion."
    ],
    "misconception": "Forecasting from an association and forecasting the effect of an intervention are different tasks.",
    "source": "Research Methods I · slides 29–37",
    "type": "comparison"
  },
  {
    "id": "r2-corr-games-point",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A scatterplot shows game-play frequency and aggression. What belongs in the two coordinates of one point?",
    "choices": [
      "Two participants’ game-play frequencies",
      "One participant’s frequency and that participant’s aggression score",
      "The sample’s mean frequency and its total participant count",
      "One study’s effect estimate and another study’s sample size"
    ],
    "correct": 1,
    "explanation": "The coordinates pair both measurements from the same case.",
    "choiceExplanations": [
      "That does not pair the two plotted variables for one case.",
      "The coordinates pair both measurements from the same case.",
      "These are aggregate summaries, not one case’s paired measurements.",
      "Those describe separate studies rather than participants in this scatterplot."
    ],
    "misconception": "A scatterplot pairs variables within cases, not scores from unrelated cases.",
    "source": "Research Methods I · slides 29–37",
    "type": "recall"
  },
  {
    "id": "r2-corr-sleep-direction",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "More sleep accompanies less tiredness. Why is the correlation described as negative?",
    "choices": [
      "Higher values of one measure accompany lower values of the other",
      "The relationship is weak",
      "The relationship has harmful consequences",
      "The sleep measure has negative numerical values"
    ],
    "correct": 0,
    "explanation": "Negative refers to an inverse score pattern.",
    "choiceExplanations": [
      "Negative refers to an inverse score pattern.",
      "Strength depends on magnitude or clustering, not the sign.",
      "The sign does not evaluate benefit or harm.",
      "Values can be positive while their association is inverse."
    ],
    "misconception": "Negative describes direction rather than weakness, harm or negative-valued scores.",
    "source": "Research Methods I · slides 29–37",
    "type": "misconception"
  },
  {
    "id": "r2-corr-study-direction",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A report describes an upward trend between practice and exam scores. What is still needed to support calling it a strong linear relationship?",
    "choices": [
      "Evidence that both variables have positive values",
      "Evidence that the mean exam score is high",
      "Evidence that points cluster tightly around a line",
      "Evidence that exam performance is a behavioral measure"
    ],
    "correct": 2,
    "explanation": "An upward trend establishes direction; clustering establishes strength.",
    "choiceExplanations": [
      "Positive-valued scores do not determine association strength.",
      "One variable’s average does not show paired-score clustering.",
      "An upward trend establishes direction; clustering establishes strength.",
      "Measurement category does not establish the relationship’s magnitude."
    ],
    "misconception": "An association’s direction does not establish its strength.",
    "source": "Research Methods I · slides 29–37",
    "type": "experiment"
  },
  {
    "id": "r2-corr-stress-direction",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Higher stress accompanies lower sleep-quality scores. The same responses are reverse-coded as difficulty, with higher scores meaning poorer sleep. How is the direction described after recoding?",
    "choices": [
      "Higher stress accompanies lower difficulty",
      "Higher stress accompanies higher difficulty",
      "Stress and difficulty become unrelated",
      "The recoding changes strength but preserves the negative direction"
    ],
    "correct": 1,
    "explanation": "Reversing one score’s direction turns the higher-with-lower description into higher-with-higher.",
    "choiceExplanations": [
      "That preserves the old wording despite reversing the outcome meaning.",
      "Reversing one score’s direction turns the higher-with-lower description into higher-with-higher.",
      "Recoding direction does not remove the paired pattern.",
      "Reversing the scale meaning reverses the described direction; it does not merely alter strength."
    ],
    "misconception": "Interpret an association using the actual score meanings after reverse coding.",
    "source": "Research Methods I · slides 29–37",
    "type": "application"
  },
  {
    "id": "r2-corr-exercise-direction",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A report calls exercise frequency and heart rate strongly related because mean heart rate is low. What is missing from that justification?",
    "choices": [
      "A different unit for reporting heart rate",
      "Evidence about the paired relationship between the two variables",
      "A second calculation of the same heart-rate mean",
      "A label identifying heart rate as physiological"
    ],
    "correct": 1,
    "explanation": "A low mean describes the center of heart-rate scores, not covariance with exercise.",
    "choiceExplanations": [
      "Changing units does not supply the missing paired pattern.",
      "A low mean describes the center of heart-rate scores, not covariance with exercise.",
      "Repeating the one-variable average does not measure the relationship.",
      "A correct category label does not establish association strength."
    ],
    "misconception": "The center of one variable cannot stand in for the relationship between two variables.",
    "source": "Research Methods I · slides 29–37",
    "type": "comparison"
  },
  {
    "id": "r2-corr-online-direction",
    "lessonId": "correlation",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Technology experience and completion time are both measured without assignment. In this lecture’s terminology for correlational research, what are they?",
    "choices": [
      "An assigned IV and a measured DV",
      "A treatment condition and a control condition",
      "Two measured dependent variables",
      "A population and a sample"
    ],
    "correct": 2,
    "explanation": "The lecture calls both correlational variables measured DVs rather than a manipulated IV and outcome.",
    "choiceExplanations": [
      "Neither variable was assigned as a treatment.",
      "These are paired measurements, not two allocated conditions.",
      "The lecture calls both correlational variables measured DVs rather than a manipulated IV and outcome.",
      "These labels describe groups of cases rather than the variables recorded from them."
    ],
    "misconception": "The lecture’s correlational terminology distinguishes measured variables from assigned treatments.",
    "source": "Research Methods I · slides 29–37",
    "type": "recall"
  },
  {
    "id": "r2-desc-rare-memory-value",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why is an intensive study of a rare memory impairment scientifically useful?",
    "choices": [
      "It can reveal patterns that generate hypotheses about memory",
      "It can estimate the impairment’s prevalence in the population",
      "It can isolate the impairment’s cause through random assignment",
      "It can estimate the average memory score of an age group"
    ],
    "correct": 0,
    "explanation": "Detailed unusual cases can inform subsequent testable research.",
    "choiceExplanations": [
      "Detailed unusual cases can inform subsequent testable research.",
      "One intensively studied case does not supply representative prevalence data.",
      "The person’s preexisting impairment was not assigned.",
      "That requires appropriate observations from the group, not one rare case."
    ],
    "misconception": "Rich case detail supports hypothesis generation more directly than population estimates or causal isolation.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "comparison"
  },
  {
    "id": "r2-desc-rare-memory-limit",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A memory case study finds an unusual pattern. What evidence is needed before describing it as typical of all people?",
    "choices": [
      "More tests of different abilities in the same person",
      "A longer narrative of the person’s history",
      "Comparable observations from an appropriately broader sample",
      "Agreement between two observers about that person"
    ],
    "correct": 2,
    "explanation": "Generalization needs evidence about cases beyond the unusual person.",
    "choiceExplanations": [
      "These may improve case detail but do not establish population typicality.",
      "More narrative detail does not broaden the sample.",
      "Generalization needs evidence about cases beyond the unusual person.",
      "Observer agreement concerns reliability, not population representation."
    ],
    "misconception": "Repeated detail about one case is not equivalent to evidence from a broader population.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "misconception"
  },
  {
    "id": "r2-desc-pedestrians-improve",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Phone use is recorded on one walking route at one time of day. How could recruitment of observations better support a campus-wide description?",
    "choices": [
      "Record additional people on the same route at the same time",
      "Systematically sample relevant routes and times",
      "Give pedestrians identical instructions about phone use",
      "Ask observers to focus on unusually frequent phone users"
    ],
    "correct": 1,
    "explanation": "Broader planned coverage addresses the restriction in where and when observations were selected.",
    "choiceExplanations": [
      "More observations can retain the same coverage limitation.",
      "Broader planned coverage addresses the restriction in where and when observations were selected.",
      "Intervention would change the naturally occurring behavior to be described.",
      "Selecting noticeable users can bias the description."
    ],
    "misconception": "Observation coverage matters alongside the number of records.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "experiment"
  },
  {
    "id": "r2-desc-gaming-gathering-limit",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "At a gaming gathering, aggression varies along with sleep loss, food and other activities. What limits attributing the observed aggression to game content?",
    "choices": [
      "Aggression was measured in a natural setting rather than by a survey",
      "Several naturally varying influences remain alternative explanations",
      "The record contains more than one possible outcome measure",
      "The sample was not divided into equal-sized age groups"
    ],
    "correct": 1,
    "explanation": "Observation did not isolate game content from the other conditions.",
    "choiceExplanations": [
      "Naturalistic data are useful; the problem is causal separation.",
      "Observation did not isolate game content from the other conditions.",
      "Multiple measures do not themselves create the stated causal limitation.",
      "Equal age-group counts would not isolate game content from sleep or activities."
    ],
    "misconception": "A natural setting can contain several influences that vary together.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "misconception"
  },
  {
    "id": "r2-desc-volunteer-attitudes-improve",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An immigration-attitude survey recruits psychology students who are readily available. Which change most directly improves coverage of the intended public population?",
    "choices": [
      "Randomly assign the current students to questionnaire versions",
      "Use more attitude items with the same volunteers",
      "Retest the volunteers on another day",
      "Recruit through routes that reach relevant groups outside that course"
    ],
    "correct": 3,
    "explanation": "The original restriction is recruitment from a narrow convenience group.",
    "choiceExplanations": [
      "That supports a wording comparison, not public representation.",
      "More measurement detail does not broaden who participated.",
      "Retesting addresses stability while retaining the recruitment limitation.",
      "The original restriction is recruitment from a narrow convenience group."
    ],
    "misconception": "Generalization requires appropriate recruitment, not just a more elaborate questionnaire.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "experiment"
  },
  {
    "id": "r2-desc-anonymous-honesty-limit",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Respondents omit admissions of dishonest behavior because they dislike describing themselves negatively, even though answers are anonymous. Which bias best fits?",
    "choices": [
      "Social desirability",
      "Confirmation bias in the observer’s recording",
      "Selective recruitment of respondents",
      "A Hawthorne effect on observed behavior"
    ],
    "correct": 0,
    "explanation": "A motive to present oneself favorably can affect reports even without an identity link.",
    "choiceExplanations": [
      "A motive to present oneself favorably can affect reports even without an identity link.",
      "That would involve the investigator favoring expected observations rather than the respondents editing their self-descriptions.",
      "That concerns which people enter the sample rather than the stated motive affecting their answers.",
      "That concerns actual behavior changing when observation is noticed, rather than inaccurate reports of prior behavior."
    ],
    "misconception": "Anonymity does not remove all motivations affecting self-report.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "misconception"
  },
  {
    "id": "r2-desc-online-experience-limit",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A technology survey attracts highly experienced online volunteers. Which population claim needs the most caution?",
    "choices": [
      "The respondents reported their technology attitudes",
      "The survey contains a convenience recruitment component",
      "The responses characterize technologically inexperienced people as well",
      "The observed response frequencies summarize the respondents"
    ],
    "correct": 2,
    "explanation": "Inexperienced people may be underrepresented by that recruitment route.",
    "choiceExplanations": [
      "That is the information collected from the responding sample.",
      "Volunteering through an accessible online route supports that description.",
      "Inexperienced people may be underrepresented by that recruitment route.",
      "That is a sample description rather than an extension to unrepresented people."
    ],
    "misconception": "A recruitment route can selectively reach people with the characteristic being studied.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "misconception"
  },
  {
    "id": "r2-desc-third-person-limit",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why might a researcher phrase a sensitive survey item as what “people like you” do?",
    "choices": [
      "To obtain a direct count of the respondent’s own behavior",
      "To identify which respondent provided each answer",
      "To make the volunteers representative of the target population",
      "To reduce pressure to give a personally favorable self-description"
    ],
    "correct": 3,
    "explanation": "The textbook notes third-person wording as a way to reduce social-desirability pressure.",
    "choiceExplanations": [
      "Indirect wording remains a reported estimate rather than an observed count.",
      "Third-person phrasing does not create an identity link.",
      "A less personal item does not change the recruitment route.",
      "The textbook notes third-person wording as a way to reduce social-desirability pressure."
    ],
    "misconception": "Third-person wording changes reporting pressure, not sampling or direct observation.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "misconception"
  },
  {
    "id": "r2-desc-campus-sleep-value",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Students report their sleep schedules during one examination week. Which conclusion stays closest to the collected data?",
    "choices": [
      "The responses identify the cause of each student’s sleep schedule",
      "The responses estimate schedules for workers on year-round shifts",
      "The responses directly record how long each student slept",
      "The responses describe reported schedules for the sampled students and week"
    ],
    "correct": 3,
    "explanation": "This conclusion retains the self-report source, sample and time window.",
    "choiceExplanations": [
      "A descriptive survey does not isolate each cause.",
      "That population and schedule were not sampled.",
      "The procedure collected answers rather than independent sleep recordings.",
      "This conclusion retains the self-report source, sample and time window."
    ],
    "misconception": "The source, population and time window of descriptive data constrain its interpretation.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "comparison"
  },
  {
    "id": "r2-time-single-cohorts-design",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Different groups aged 20, 40 and 60 are tested once in the same year. Which time design is described?",
    "choices": [
      "Longitudinal",
      "Mixed longitudinal",
      "Cross-sectional",
      "Meta-analysis"
    ],
    "correct": 2,
    "explanation": "Different age groups are compared at one time.",
    "choiceExplanations": [
      "This would follow the same individuals across occasions.",
      "This would repeatedly follow several starting age groups.",
      "Different age groups are compared at one time.",
      "This would combine findings from separate studies rather than test these groups directly."
    ],
    "misconception": "Different people at one time are not repeated observations of aging within people.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "application"
  },
  {
    "id": "r2-time-single-cohorts-inference",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Older and younger people differ in a one-time test. What is directly demonstrated?",
    "choices": [
      "A decline in each person’s score as they aged",
      "An effect of randomly assigned age",
      "A trajectory averaged across repeated tests of the same participants",
      "A difference between the age groups at that time"
    ],
    "correct": 3,
    "explanation": "The data compare different people in one observation period.",
    "choiceExplanations": [
      "Individual decline requires repeated observations of those people.",
      "Age was a preexisting characteristic.",
      "No repeated-person trajectory was recorded.",
      "The data compare different people in one observation period."
    ],
    "misconception": "A one-time between-group pattern is distinct from within-person change.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "comparison"
  },
  {
    "id": "r2-time-mixed-five-design",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Several starting age groups are followed for five years. Which design matches the textbook description?",
    "choices": [
      "Cross-sectional",
      "Mixed longitudinal",
      "A single-cohort longitudinal design",
      "Meta-analysis"
    ],
    "correct": 1,
    "explanation": "The design combines several starting cohorts with repeated follow-up over a shorter interval.",
    "choiceExplanations": [
      "The follow-ups go beyond a single-time comparison.",
      "The design combines several starting cohorts with repeated follow-up over a shorter interval.",
      "More than one starting age group is followed.",
      "The researchers collect repeated participant data rather than pool separate studies."
    ],
    "misconception": "Mixed longitudinal refers to repeatedly following several starting age groups.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "application"
  },
  {
    "id": "r2-time-mixed-five-limit",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Mixed longitudinal research saves time compared with following one cohort across the whole age span. Which limitation still remains?",
    "choices": [
      "A lack of repeated measurements within people",
      "Dependence on one isolated unusual case",
      "Expense and participant dropout",
      "A requirement to pool published studies instead of collect data"
    ],
    "correct": 2,
    "explanation": "The combined design does not eliminate the costs of repeated follow-up.",
    "choiceExplanations": [
      "Repeated follow-up is part of the design.",
      "Several age groups are followed rather than one rare case.",
      "The combined design does not eliminate the costs of repeated follow-up.",
      "Mixed longitudinal research is a participant design, not meta-analysis."
    ],
    "misconception": "Combining time designs reduces some burdens without removing retention and resource demands.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "misconception"
  },
  {
    "id": "r2-time-same-education-limit",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A study follows the same students through a lengthy education program. Which cost arises from this longitudinal structure?",
    "choices": [
      "Inferring personal change from different groups tested once",
      "Waiting for change while retaining participants across the interval",
      "Combining incompatible results from separate published studies",
      "Assigning students’ chronological age as a treatment"
    ],
    "correct": 1,
    "explanation": "Longitudinal work takes time and can lose participants before completion.",
    "choiceExplanations": [
      "That is a cross-sectional limitation, not this repeated-person procedure.",
      "Longitudinal work takes time and can lose participants before completion.",
      "That concerns evidence synthesis rather than this participant follow-up.",
      "The design observes aging; it does not assign age."
    ],
    "misconception": "Longitudinal designs gain individual trajectories at a cost in time and retention.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "misconception"
  },
  {
    "id": "r2-time-mixed-abilities-next",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Several age groups complete yearly ability tests. Which procedure helps compare their recorded trajectories?",
    "choices": [
      "Choose a different scoring rule for each group’s expected strength",
      "Report the first-year group means instead of the repeated records",
      "Use comparable measurement and scoring rules across groups and occasions",
      "Retain participants according to how well their scores fit the prediction"
    ],
    "correct": 2,
    "explanation": "Procedure differences can complicate interpreting the changes being compared.",
    "choiceExplanations": [
      "Group-specific scoring would make the outcomes less comparable.",
      "That discards the evidence about change.",
      "Procedure differences can complicate interpreting the changes being compared.",
      "Selective retention would bias the observed trajectories."
    ],
    "misconception": "A trajectory comparison requires comparable records across its repeated measurements.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "experiment"
  },
  {
    "id": "r2-time-same-unequal-dropout-limit",
    "lessonId": "research-text",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Lower-scoring participants are especially likely to leave a follow-up study. What does this threaten?",
    "choices": [
      "The representativeness of the people remaining in later measurements",
      "The classification of the study as repeated measurement",
      "The definition of the outcome’s numerical unit",
      "The presence of a comparison between different starting ages"
    ],
    "correct": 0,
    "explanation": "Selective attrition can change the retained sample and its apparent trajectory.",
    "choiceExplanations": [
      "Selective attrition can change the retained sample and its apparent trajectory.",
      "It still follows people over time, even if some leave.",
      "Attrition concerns who remains, not how a unit is defined.",
      "The stated problem can arise even in one starting cohort."
    ],
    "misconception": "Dropout is especially concerning when it depends on characteristics relevant to the outcome.",
    "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
    "type": "misconception"
  },
  {
    "id": "r2-quality-raters-disagree-repair",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Two observers score the same recording differently because their hit definitions differ. Which action most directly addresses interrater reliability?",
    "choices": [
      "Recruit more participants without changing the coding rules",
      "Retest participants using the same two conflicting definitions",
      "Agree on a coding rule and compare scores on the same recordings",
      "Compare the hit count with an established aggression questionnaire"
    ],
    "correct": 2,
    "explanation": "Shared criteria and paired coding checks address observer disagreement.",
    "choiceExplanations": [
      "A larger sample retains the disagreement in how each record is scored.",
      "Another occasion does not align the observers’ criteria.",
      "Shared criteria and paired coding checks address observer disagreement.",
      "That addresses the meaning of the proxy rather than aligning the two observers’ definitions."
    ],
    "misconception": "Observer agreement needs common scoring criteria, not merely additional observations.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "experiment"
  },
  {
    "id": "r2-quality-items-disagree-reliability",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Several questionnaire items intended to assess a related construct yield inconsistent patterns. Which reliability concern is most relevant?",
    "choices": [
      "Interrater reliability",
      "Test–retest reliability",
      "Internal consistency",
      "Inter-method reliability"
    ],
    "correct": 2,
    "explanation": "This evaluates agreement among related items within the test.",
    "choiceExplanations": [
      "This compares observers’ scoring, not item patterns.",
      "This compares occasions rather than related items within one administration.",
      "This evaluates agreement among related items within the test.",
      "This compares different approaches rather than items within one questionnaire."
    ],
    "misconception": "The source of disagreement determines which reliability type is being evaluated.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "comparison"
  },
  {
    "id": "r2-quality-methods-correspond-reliability",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "The textbook uses correspondence between different approaches to a target as a reliability example. Which label does it use?",
    "choices": [
      "Interrater reliability",
      "Internal consistency",
      "Test–retest reliability",
      "Inter-method reliability"
    ],
    "correct": 3,
    "explanation": "The textbook labels correspondence across approaches inter-method reliability.",
    "choiceExplanations": [
      "Raters are observers applying scoring rules, not the distinct measurement approaches in this example.",
      "This concerns related items within a test.",
      "This concerns repeated occasions using a measure.",
      "The textbook labels correspondence across approaches inter-method reliability."
    ],
    "misconception": "Across-method correspondence differs from agreement across observers, items or occasions.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "comparison"
  },
  {
    "id": "r2-quality-repeat-unstable-interpret",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A person’s underlying condition remains stable, but repeated measurements fluctuate unpredictably. What is the clearest problem?",
    "choices": [
      "Poor test–retest reliability",
      "A stable systematic measurement bias",
      "Poor population representation",
      "A confounded treatment comparison"
    ],
    "correct": 0,
    "explanation": "Stable underlying conditions should yield reasonably consistent repeated scores.",
    "choiceExplanations": [
      "Stable underlying conditions should yield reasonably consistent repeated scores.",
      "A stable bias would produce consistent off-target readings rather than unpredictable fluctuation.",
      "The described evidence concerns measurement within a person, not recruitment coverage.",
      "No distinct assigned treatments are described."
    ],
    "misconception": "Unpredictable repeated scores under a stable target indicate a consistency problem.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-quality-spread-centered-interpret",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "The textbook target figure shows widely dispersed hits whose average is centered. How should its “validity without reliability” label be read?",
    "choices": [
      "Average accuracy with poor consistency of individual hits",
      "Accurate and consistent measurement of each individual hit",
      "A tightly clustered but systematically biased measure",
      "Evidence that variability improves individual measurement"
    ],
    "correct": 0,
    "explanation": "The notes explicitly preserve the figure’s average-accuracy framing.",
    "choiceExplanations": [
      "The notes explicitly preserve the figure’s average-accuracy framing.",
      "Dispersion indicates poor consistency, despite the centered average.",
      "That describes off-center clustering rather than dispersed centered results.",
      "Average centering does not show that an individual hit is precise."
    ],
    "misconception": "The textbook illustration concerns average centering, not uniformly accurate individual measurements.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-stats-upper-tail-mode",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Does being the most frequent score require more than half the sample to have that score?",
    "choices": [
      "Yes; majority frequency defines a mode",
      "No; it needs a higher frequency than each competing score",
      "Yes; the mode must equal the middle observation",
      "No; it needs the largest numerical magnitude"
    ],
    "correct": 1,
    "explanation": "One category can lead each alternative while being less than half the combined total.",
    "choiceExplanations": [
      "The mode definition compares frequencies, without requiring a majority.",
      "One category can lead each alternative while being less than half the combined total.",
      "That confuses frequency with the median’s ordered position.",
      "Magnitude does not identify frequency."
    ],
    "misconception": "The most frequent value is not necessarily a majority value.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "misconception"
  },
  {
    "id": "r2-stats-even-middle-median",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An even-sized dataset’s median lies between its two middle observations and equals neither. What does this indicate?",
    "choices": [
      "A calculation that confused the median with the mode",
      "A dataset that was not properly ordered",
      "A requirement to select one middle score instead",
      "A possible result of the median definition"
    ],
    "correct": 3,
    "explanation": "Averaging the two middle scores can yield an unobserved value.",
    "choiceExplanations": [
      "A median need not be a most-frequent score.",
      "An ordered even dataset can still produce a between-score median.",
      "The definition averages the two middle values rather than arbitrarily selects one.",
      "Averaging the two middle scores can yield an unobserved value."
    ],
    "misconception": "A statistical summary need not equal a score observed in one participant.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "misconception"
  },
  {
    "id": "r2-stats-two-peaks-mean",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A distribution has two distinct high-frequency peaks. Why can its overall mean be insufficient for describing where participants cluster?",
    "choices": [
      "The mean cannot be calculated for a bimodal distribution",
      "The overall mean necessarily equals both modal scores",
      "The distance between peaks defines the standard deviation",
      "The mean can conceal the two frequently occurring groups"
    ],
    "correct": 3,
    "explanation": "A center between peaks may not describe either common cluster.",
    "choiceExplanations": [
      "The arithmetic calculation is still possible.",
      "One mean cannot equal two different peak locations.",
      "SD summarizes dispersion of all scores rather than being defined as the distance between peaks.",
      "A center between peaks may not describe either common cluster."
    ],
    "misconception": "A valid average can still omit important distribution structure.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "experiment"
  },
  {
    "id": "r2-stats-low-outlier-median",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Two observers have the same overall average score but disagree on individual recordings. What must be inspected to assess interrater agreement?",
    "choices": [
      "The two average scores again",
      "One observer’s scores on separate occasions",
      "Their paired scores for each shared recording",
      "Agreement among items in the questionnaire being used"
    ],
    "correct": 2,
    "explanation": "Matching averages can conceal different judgments on the same cases.",
    "choiceExplanations": [
      "Aggregate equality does not reveal case-by-case agreement.",
      "That checks temporal stability of one observer rather than agreement between them on shared cases.",
      "Matching averages can conceal different judgments on the same cases.",
      "That checks internal consistency rather than agreement between the two observers."
    ],
    "misconception": "Agreement of aggregates is not the same as agreement on shared observations.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "experiment"
  },
  {
    "id": "r2-stats-low-outlier-mode",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Several score corrections leave the total and count unchanged but alter occurrence frequencies. What can happen?",
    "choices": [
      "The mean changes while the mode must stay the same",
      "The mean stays the same while the mode changes",
      "Both summaries must change together",
      "Neither summary can change because the sample size is fixed"
    ],
    "correct": 1,
    "explanation": "Mean uses total and count; mode uses frequencies.",
    "choiceExplanations": [
      "Unchanged total and count preserve the mean, while frequencies can alter the mode.",
      "Mean uses total and count; mode uses frequencies.",
      "The summaries depend on different information.",
      "A fixed count does not fix occurrence frequencies."
    ],
    "misconception": "Changes in one summary are not mechanically required to match changes in another.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "comparison"
  },
  {
    "id": "r2-stats-symmetric-mean",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A distribution visibly has two separated peaks. What must be checked before applying the normal-distribution 68% approximation?",
    "choices": [
      "Whether its mean lies between the lowest and highest scores",
      "Whether an SD can be calculated from its scores",
      "Whether the two peaks have the same height",
      "Whether the actual shape supports that approximation"
    ],
    "correct": 3,
    "explanation": "The 68% rule is supplied for a normal distribution rather than every possible score pattern.",
    "choiceExplanations": [
      "That can hold for a nonnormal distribution and does not justify the normal proportion.",
      "An SD can be calculated without a normal shape.",
      "Even equally frequent peaks do not give the single central concentration assumed by the normal rule.",
      "The 68% rule is supplied for a normal distribution rather than every possible score pattern."
    ],
    "misconception": "A distributional approximation needs an appropriate distributional basis.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "misconception"
  },
  {
    "id": "r2-stats-concept-frequency",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "In a histogram, what does the height of a score category’s bar represent?",
    "choices": [
      "How large each individual score in the category is",
      "How much the category caused an outcome to change",
      "How far the category lies from the mean",
      "How often scores in that category occurred"
    ],
    "correct": 3,
    "explanation": "A frequency display counts occurrences within score categories.",
    "choiceExplanations": [
      "Score magnitude identifies the category, not its frequency height.",
      "A histogram describes observations rather than isolates an effect.",
      "Distance from the center is different from the number of occurrences.",
      "A frequency display counts occurrences within score categories."
    ],
    "misconception": "The score category and the frequency of that category are separate dimensions.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-mean-outlier",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A small number of unusually high scores are added to a dataset. Which center is most directly pulled by their large numerical magnitude?",
    "choices": [
      "Median",
      "Mean",
      "Mode",
      "Standard deviation"
    ],
    "correct": 1,
    "explanation": "The high scores enter the total divided by the number of observations.",
    "choiceExplanations": [
      "The ordered middle is less directly affected by extreme magnitude.",
      "The high scores enter the total divided by the number of observations.",
      "The mode depends on frequency rather than how high a score is.",
      "SD describes spread, not a measure of central location."
    ],
    "misconception": "The mean uses score magnitudes; median and mode use position and frequency.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-spread",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Two distributions have the same mean but different SDs. What differs?",
    "choices": [
      "The central arithmetic location of the scores",
      "The most frequently occurring score",
      "Dispersion of scores around the mean",
      "The ordered middle score"
    ],
    "correct": 2,
    "explanation": "SD measures spread independently of the center’s location.",
    "choiceExplanations": [
      "The means are stated to be the same.",
      "The mode may differ, but different SDs alone do not establish that difference.",
      "SD measures spread independently of the center’s location.",
      "The medians may differ, but SD describes dispersion rather than ordered central position."
    ],
    "misconception": "A shared center does not imply a shared spread.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-normal-shape",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which description matches the normal distribution in the notes?",
    "choices": [
      "Two separated peaks of high frequency",
      "Equal frequency across the observed score categories",
      "Symmetric, with most observations near the center",
      "Most observations near one extreme with a long opposite tail"
    ],
    "correct": 2,
    "explanation": "The supplied description emphasizes symmetry and concentration around the mean.",
    "choiceExplanations": [
      "That is a bimodal shape.",
      "That describes a flat frequency pattern rather than central concentration.",
      "The supplied description emphasizes symmetry and concentration around the mean.",
      "That is an asymmetric pattern rather than the stated normal shape."
    ],
    "misconception": "Normal shape is not synonymous with any dataset that has an average.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-normal-68",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Approximately what proportion falls within one SD on either side of the mean of a normal distribution?",
    "choices": [
      "95%",
      "99%",
      "32%",
      "68%"
    ],
    "correct": 3,
    "explanation": "The notes give about 68% within the full one-SD band around the mean.",
    "choiceExplanations": [
      "The notes associate this proportion with the two-SD band.",
      "This is the textbook’s rounded three-SD figure.",
      "This is approximately the portion outside the one-SD band, not inside it.",
      "The notes give about 68% within the full one-SD band around the mean."
    ],
    "misconception": "Track both the SD distance and whether a proportion is inside or outside the band.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-normal-95",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "The normal-distribution rule gives about 95% within two SDs. Which interval does that describe?",
    "choices": [
      "From the mean to two SDs above it",
      "From two SDs below the mean to two SDs above it",
      "From one SD below the mean to one SD above it",
      "The observations beyond two SDs on both sides"
    ],
    "correct": 1,
    "explanation": "The rule covers the central band on both sides of the mean.",
    "choiceExplanations": [
      "That is one side of the central band.",
      "The rule covers the central band on both sides of the mean.",
      "That is the band associated with about 68%.",
      "That is the outside portion rather than the central 95%."
    ],
    "misconception": "A central-band proportion includes both sides, not one side or the tails.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-normal-rounding",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "How do the supplied notes distinguish the textbook’s three-SD proportion from the usual more precise approximation?",
    "choices": [
      "Rounded 95% in the textbook; about 99.7% conventionally",
      "Rounded 99% in the textbook; about 99.7% conventionally",
      "Rounded 99% in the textbook; about 95% conventionally",
      "Rounded 68% in the textbook; about 99% conventionally"
    ],
    "correct": 1,
    "explanation": "The notes explicitly retain the textbook rounding and identify the usual finer approximation.",
    "choiceExplanations": [
      "95% belongs to the two-SD band in the notes.",
      "The notes explicitly retain the textbook rounding and identify the usual finer approximation.",
      "This substitutes the two-SD proportion for the three-SD approximation.",
      "68% belongs to the one-SD band."
    ],
    "misconception": "The source rounding should be preserved rather than silently presented as a different rule.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-equal-perfect",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "How do r = −1 and r = +1 compare?",
    "choices": [
      "Greater strength for +1, because its signed value is higher",
      "Greater strength for −1, because inverse relationships are tighter",
      "Equal direction, different strength",
      "Equal linear strength, opposite directions"
    ],
    "correct": 3,
    "explanation": "Both have magnitude 1; their signs indicate inverse versus same-direction patterns.",
    "choiceExplanations": [
      "Signed numerical order does not determine strength.",
      "Either sign can describe a perfect linear pattern.",
      "The signs differ while the magnitudes match.",
      "Both have magnitude 1; their signs indicate inverse versus same-direction patterns."
    ],
    "misconception": "Absolute magnitude determines strength; sign determines direction.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-stats-concept-range",
    "lessonId": "descriptive-stats",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which reported r value is outside the coefficient’s permitted range?",
    "choices": [
      "−1.0",
      "0.0",
      "1.4",
      "0.8"
    ],
    "correct": 2,
    "explanation": "The coefficient is bounded by −1 and +1.",
    "choiceExplanations": [
      "The lower endpoint is permitted.",
      "Zero lies within the permitted range.",
      "The coefficient is bounded by −1 and +1.",
      "This lies between the two endpoints."
    ],
    "misconception": "Correlation values can be negative, but their magnitude cannot exceed one.",
    "source": "Assigned textbook notes · 2-3b",
    "type": "recall"
  },
  {
    "id": "r2-science-objectivity",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A researcher sincerely believes their observations are unbiased. What would provide stronger evidence of objectivity?",
    "choices": [
      "A personal statement explaining why the researcher feels impartial",
      "Agreement between the findings and the researcher’s initial prediction",
      "Detailed descriptions of the incidents the researcher remembers best",
      "A predefined coding system applied to a systematically selected sample"
    ],
    "correct": 3,
    "explanation": "Procedures make observation less dependent on personal expectations and convenient examples.",
    "choiceExplanations": [
      "Introspection does not demonstrate that the recording procedure resisted bias.",
      "Agreement can reflect selective attention as well as accurate observation.",
      "Memorability does not establish systematic selection or recording.",
      "Procedures make observation less dependent on personal expectations and convenient examples."
    ],
    "misconception": "Confidence in one’s neutrality is weaker evidence than methods that constrain bias.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-friends",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A student estimates campus drinking from close friends’ habits. Which feature most limits the estimate?",
    "choices": [
      "The social circle may differ from the wider campus population",
      "The estimate uses behavior rather than attitude questions",
      "The friends have not been assigned to drinking conditions",
      "The observations were collected before a hypothesis was written"
    ],
    "correct": 0,
    "explanation": "Conveniently encountered people need not represent the group of interest.",
    "choiceExplanations": [
      "Conveniently encountered people need not represent the group of interest.",
      "Behavior is relevant to drinking prevalence; the sampling restriction is the problem.",
      "Assignment concerns causal comparisons, not estimation of naturally occurring prevalence.",
      "The stated limitation concerns who was observed, not the timing of a prediction."
    ],
    "misconception": "A familiar social circle is a sample, not the whole population.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-contradiction",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An observer records expected examples but overlooks contradictory ones. Which procedural change most directly addresses this problem?",
    "choices": [
      "Apply the same recording rule to every selected observation",
      "Add more examples that illustrate the expected pattern",
      "Replace behavioral records with participants’ opinion ratings",
      "Write a fuller theoretical explanation of the expected pattern"
    ],
    "correct": 0,
    "explanation": "A consistent rule makes supporting and contradicting evidence available for evaluation.",
    "choiceExplanations": [
      "A consistent rule makes supporting and contradicting evidence available for evaluation.",
      "More selectively supportive cases preserve the bias.",
      "Changing the measure does not address selective recording.",
      "A better description of the theory does not change which observations are recorded."
    ],
    "misconception": "Confirmation bias concerns selective use of evidence, not merely insufficient supporting examples.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-theory",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An explanation connects several established findings and generates predictions for new situations. Which scientific role does it serve?",
    "choices": [
      "Hypothesis",
      "Operational definition",
      "Theory",
      "Descriptive result"
    ],
    "correct": 2,
    "explanation": "A theory organizes facts and relationships to explain and predict observations.",
    "choiceExplanations": [
      "A hypothesis is a specific testable prediction generated from such an account.",
      "That specifies how a particular variable is manipulated or measured.",
      "A theory organizes facts and relationships to explain and predict observations.",
      "A result reports observations rather than organizes them into an explanatory account."
    ],
    "misconception": "An organized explanation is broader than one prediction or measurement rule.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-revision",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A carefully conducted study contradicts a theory’s prediction. What response fits the scientific process?",
    "choices": [
      "Examine the methods and consider revising the explanation",
      "Attribute the discrepancy to measurement failure before examining the procedures",
      "Treat the prediction as confirmed because the theory explains other results",
      "Accept the new result as decisive before checking its procedures"
    ],
    "correct": 0,
    "explanation": "Contradictory evidence should inform evaluation of both the test and the theory.",
    "choiceExplanations": [
      "Contradictory evidence should inform evaluation of both the test and the theory.",
      "A measurement problem is a possibility to investigate, not a conclusion established by contradiction alone.",
      "Previous support does not erase the new contradictory finding.",
      "A conflicting result still requires methodological evaluation."
    ],
    "misconception": "Theory revision requires evaluating contrary evidence rather than protecting or replacing a theory automatically.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-peer-review",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Before publication, knowledgeable scientists assess a manuscript’s methods and reasoning. Which process is described?",
    "choices": [
      "Replication",
      "Preregistration",
      "Peer review",
      "Meta-analysis"
    ],
    "correct": 2,
    "explanation": "Peer review evaluates reported work before publication.",
    "choiceExplanations": [
      "Replication conducts another empirical test of the result.",
      "Preregistration records planned methods and analyses before results are known.",
      "Peer review evaluates reported work before publication.",
      "Meta-analysis statistically combines findings from separate studies."
    ],
    "misconception": "Review of a report is different from collecting another test.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-preregister",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A team records its analysis plan before seeing the results. What information does this make easier to evaluate?",
    "choices": [
      "Whether the recruited sample resembles the entire population",
      "Whether the instrument measures the intended construct",
      "Whether the result recurs in another sample",
      "Which analytical decisions preceded knowledge of the outcomes"
    ],
    "correct": 3,
    "explanation": "Preregistration makes the timing and content of intended decisions inspectable.",
    "choiceExplanations": [
      "Registration does not change or establish representative recruitment.",
      "That requires measurement-validity evidence, not just a recorded plan.",
      "That requires a replication or additional test.",
      "Preregistration makes the timing and content of intended decisions inspectable."
    ],
    "misconception": "Preregistration documents prior decisions; it does not establish every aspect of study quality.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-open",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why does sharing appropriate methods and data strengthen evaluation of a scientific claim?",
    "choices": [
      "It substitutes for independently repeating the study",
      "It permits inspection of how the result was obtained",
      "It makes the recruited sample more representative",
      "It removes disagreement about how the construct was measured"
    ],
    "correct": 1,
    "explanation": "Others can examine procedures, scoring and analytical decisions.",
    "choiceExplanations": [
      "Inspection and replication supply different evidence.",
      "Others can examine procedures, scoring and analytical decisions.",
      "Access to data does not change who participated.",
      "Open information enables evaluation of disagreement rather than guarantees its disappearance."
    ],
    "misconception": "Openness supports scrutiny of the evidence, not automatic agreement with the claim.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-camera",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A pen-in-mouth replication added a camera. Which possible mechanism would make that change an issue of participant reactivity?",
    "choices": [
      "Whether observers selectively coded responses that matched their expectations",
      "Whether a different recruitment route reached a different population",
      "Whether awareness of observation changed participants’ responses",
      "Whether scores were combined using a different arithmetic rule"
    ],
    "correct": 2,
    "explanation": "The camera changed an observation condition that could influence behavior.",
    "choiceExplanations": [
      "That would be observer confirmation bias, rather than participants reacting to being observed.",
      "That would be a sampling difference, rather than a participant reaction to the camera.",
      "The camera changed an observation condition that could influence behavior.",
      "That would be a scoring difference, rather than awareness altering behavior."
    ],
    "misconception": "An observation setting can be part of the explanation for a replication discrepancy.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-repetition",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An unsupported claim becomes familiar after repeated exposure. What should determine whether it is accepted?",
    "choices": [
      "How quickly the claim comes to mind",
      "How many times the same claim has been repeated",
      "Evidence relevant to the claim and competing explanations",
      "How closely it matches the reader’s existing belief"
    ],
    "correct": 2,
    "explanation": "Repetition may create a feeling of truth without adding support.",
    "choiceExplanations": [
      "Ease of retrieval can inflate perceived credibility.",
      "Repeated assertions are not independent empirical tests.",
      "Repetition may create a feeling of truth without adding support.",
      "Prior agreement can encourage acceptance without evaluating evidence."
    ],
    "misconception": "Familiarity and evidential support are different sources of confidence.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-alternative",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Two explanations fit the same observation. What would most help distinguish them?",
    "choices": [
      "A test for which the explanations predict different outcomes",
      "Another description of the observation they both explain",
      "A larger dataset for which both explanations predict the same pattern",
      "A check of recording consistency without testing the different predictions"
    ],
    "correct": 0,
    "explanation": "Discriminating evidence must separate the competing predictions.",
    "choiceExplanations": [
      "Discriminating evidence must separate the competing predictions.",
      "Shared evidence does not distinguish the accounts.",
      "More shared support can leave the explanations indistinguishable.",
      "Reliable recording is useful, but it does not by itself supply evidence separating the two explanations."
    ],
    "misconception": "A useful test separates explanations rather than repeats evidence compatible with both.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-pattern-time",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A study measures particular social-media use patterns. A headline describes its result as an effect of total time online. What has changed?",
    "choices": [
      "The population to which the result is applied",
      "The variable being interpreted",
      "The observation period to which the result is applied",
      "The direction of the measured relationship"
    ],
    "correct": 1,
    "explanation": "Specific patterns of use are not interchangeable with a measure of total duration.",
    "choiceExplanations": [
      "No population change is described; the headline substitutes a different variable.",
      "Specific patterns of use are not interchangeable with a measure of total duration.",
      "The stated substitution is patterns versus duration, not one period versus another.",
      "The headline changes what was measured without supplying a reversed score relationship."
    ],
    "misconception": "A report should preserve the variable that was actually measured.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-stable-frontier",
    "lessonId": "science",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "How can scientific findings change while established knowledge remains useful?",
    "choices": [
      "A finding becomes permanent after successful peer review",
      "Revision of one claim invalidates the methods used in other fields",
      "Evidence can revise some claims without making all claims equally uncertain",
      "Competing explanations deserve equal confidence whenever disagreement exists"
    ],
    "correct": 2,
    "explanation": "The notes distinguish stable core knowledge from changing frontier claims.",
    "choiceExplanations": [
      "Review does not end further testing or revision.",
      "A specific discrepancy does not establish that broader conclusion.",
      "The notes distinguish stable core knowledge from changing frontier claims.",
      "Confidence should track their respective evidence."
    ],
    "misconception": "Scientific revision does not imply that all knowledge has the same evidential status.",
    "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
    "type": "application"
  },
  {
    "id": "r2-science-single-counter",
    "lessonId": "descriptive",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A carefully documented person lacks a trait said to occur in every member of their group. What does that case establish?",
    "choices": [
      "The universal claim has a counterexample",
      "The trait is uncommon throughout the group",
      "The trait’s proposed cause has been isolated",
      "The person represents the group’s average behavior"
    ],
    "correct": 0,
    "explanation": "One genuine exception contradicts an assertion about every member.",
    "choiceExplanations": [
      "One genuine exception contradicts an assertion about every member.",
      "One exception does not estimate prevalence.",
      "The case does not supply an assigned causal comparison.",
      "A counterexample need not be typical."
    ],
    "misconception": "An exception can refute a universal claim without describing the whole population.",
    "source": "Assigned textbook notes · 2-2a",
    "type": "application"
  },
  {
    "id": "r2-ethics-human-review",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which body named in the notes reviews human-participant research?",
    "choices": [
      "Institutional animal-care and use committee",
      "Journal peer reviewers",
      "Research-funding reviewers",
      "Institutional review board"
    ],
    "correct": 3,
    "explanation": "An IRB reviews human-participant research.",
    "choiceExplanations": [
      "An IACUC reviews animal research.",
      "They evaluate work for publication rather than serve as the named participant-review body.",
      "Funding evaluation is different from the human-participant committee specified in the notes.",
      "An IRB reviews human-participant research."
    ],
    "misconception": "Human-participant ethical review differs from animal oversight and publication review.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-animal-review",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which body named in the notes reviews animal research?",
    "choices": [
      "Institutional animal-care and use committee",
      "Institutional review board",
      "Journal peer reviewers",
      "Research-funding reviewers"
    ],
    "correct": 0,
    "explanation": "An IACUC reviews animal research.",
    "choiceExplanations": [
      "An IACUC reviews animal research.",
      "An IRB is the named human-participant review body.",
      "Publication review does not replace the specified animal oversight.",
      "Funding review is not the animal-care and use committee."
    ],
    "misconception": "The species and ethical oversight role determine the relevant review body.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-voluntary",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Participants are told leaving the study will bring a penalty. Which safeguard is directly threatened?",
    "choices": [
      "Confidential storage of identifiable responses",
      "Voluntary participation and withdrawal",
      "Anonymity of questionnaire answers",
      "Debriefing about concealed hypotheses"
    ],
    "correct": 1,
    "explanation": "A penalty can make participation coercive rather than voluntary.",
    "choiceExplanations": [
      "The scenario concerns pressure to continue, not disclosure of stored data.",
      "A penalty can make participation coercive rather than voluntary.",
      "Identity linkage is not the stated withdrawal problem.",
      "A later explanation does not resolve coercion during participation."
    ],
    "misconception": "Withdrawal should be a voluntary choice rather than a punished action.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-consent-procedures",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What is the primary purpose of information about research purpose and procedures in informed consent?",
    "choices": [
      "To support a voluntary decision about participating",
      "To explain concealed information after participation ends",
      "To restrict access to already collected identifiable records",
      "To remove links between responses and respondents’ identities"
    ],
    "correct": 0,
    "explanation": "Participants need sufficient relevant information to decide whether to take part.",
    "choiceExplanations": [
      "Participants need sufficient relevant information to decide whether to take part.",
      "That describes debriefing rather than the initial participation decision.",
      "That describes a confidentiality safeguard rather than the purpose of consent information.",
      "That is an anonymity property of data collection rather than the purpose of consent information."
    ],
    "misconception": "Consent information supports the participation decision; debriefing and data protections have different roles.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-guardian",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A proposed participant cannot legally provide consent. What additional protection is specified in the notes?",
    "choices": [
      "The participant’s willingness to answer without guardian permission",
      "Anonymous recording without additional permission",
      "Appropriate guardian permission and extra review",
      "A later debriefing in place of permission before participation"
    ],
    "correct": 2,
    "explanation": "The notes call for suitable permission and heightened review in this situation.",
    "choiceExplanations": [
      "Willingness does not substitute for the legally appropriate permission specified here.",
      "Anonymity protects identity linkage but does not replace consent protection.",
      "The notes call for suitable permission and heightened review in this situation.",
      "A later explanation does not substitute for the appropriate initial permission."
    ],
    "misconception": "Willingness to respond and capacity to provide legally appropriate consent are different.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-deception-justify",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A proposal conceals an exact hypothesis from participants. What must be addressed to use deception appropriately?",
    "choices": [
      "Anonymous responses as a substitute for evaluating the concealment",
      "Justification, ethical review and an appropriate later explanation",
      "Voluntary participation as a substitute for explaining the concealment afterward",
      "Peer review for publication as a substitute for participant ethical review"
    ],
    "correct": 1,
    "explanation": "The notes require justified deception and debriefing rather than an automatic exemption.",
    "choiceExplanations": [
      "Anonymity does not itself justify deception or supply the later explanation.",
      "The notes require justified deception and debriefing rather than an automatic exemption.",
      "Voluntariness is needed, but it does not replace justified deception and debriefing.",
      "Publication review has a different role and does not replace the specified safeguards."
    ],
    "misconception": "Deception requires safeguards beyond its convenience for a design.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-privacy-control",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A participant decides which personal information to share. Which concept most directly describes that control?",
    "choices": [
      "Confidentiality",
      "Privacy",
      "Anonymity",
      "Debriefing"
    ],
    "correct": 1,
    "explanation": "Privacy concerns control over sharing personal information.",
    "choiceExplanations": [
      "Confidentiality concerns restricting disclosure of collected identifiable data.",
      "Privacy concerns control over sharing personal information.",
      "Anonymity concerns whether researchers can link responses to identity.",
      "Debriefing explains the study afterward rather than controls initial information sharing."
    ],
    "misconception": "Sharing control, disclosure protection and absence of identity linkage are distinct.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-anonymous-link",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Researchers receive responses with no way to link them to respondents’ identities. Which description fits?",
    "choices": [
      "Confidential but identifiable responses",
      "Anonymous responses",
      "Identified responses awaiting debriefing",
      "Responses secured with a retained name-to-code key"
    ],
    "correct": 1,
    "explanation": "Even the researchers cannot connect the answers to identities.",
    "choiceExplanations": [
      "That would permit a link while restricting disclosure.",
      "Even the researchers cannot connect the answers to identities.",
      "No identity link is available in the scenario.",
      "A retained key would make linkage possible."
    ],
    "misconception": "Anonymity depends on absent identity linkage, not merely restricted access.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-reduce",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An animal design answers the same question with fewer animals. Which R is most directly illustrated?",
    "choices": [
      "Replace",
      "Reduce",
      "Refine",
      "Replication"
    ],
    "correct": 1,
    "explanation": "The change concerns the number of animals used.",
    "choiceExplanations": [
      "The design still uses animals rather than substitutes a nonanimal alternative.",
      "The change concerns the number of animals used.",
      "Refinement concerns humane procedures; fewer animals is the stated change.",
      "Repeating a finding’s test is different from reducing animal numbers."
    ],
    "misconception": "Distinguish number used from replacement methods and humane procedures.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-refine",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An animal procedure is made less painful without changing the animal count. Which R is illustrated?",
    "choices": [
      "Reduce",
      "Replace",
      "Refine",
      "Replication"
    ],
    "correct": 2,
    "explanation": "Refinement changes methods to minimize suffering.",
    "choiceExplanations": [
      "The animal count has not changed.",
      "Animals are still used.",
      "Refinement changes methods to minimize suffering.",
      "A repeated test is not the stated procedural welfare change."
    ],
    "misconception": "Refinement can occur without reducing numbers or replacing animals.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-nutrition",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why are appropriate housing, nutrition and veterinary care part of animal-research planning?",
    "choices": [
      "They establish that animal findings generalize to humans",
      "They support humane care and minimized suffering",
      "They substitute for evaluating the research purpose",
      "They replace review by the animal-care and use committee"
    ],
    "correct": 1,
    "explanation": "The notes include these welfare requirements alongside oversight and research purpose.",
    "choiceExplanations": [
      "Welfare care does not by itself validate cross-species generalization.",
      "The notes include these welfare requirements alongside oversight and research purpose.",
      "A beneficial purpose and appropriate oversight remain needed.",
      "Routine care does not remove the need for the specified oversight."
    ],
    "misconception": "Humane care is an ethical requirement rather than a guarantee about scientific generalization.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-replace-valid",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What makes a nonanimal alternative suitable for replacement under the three Rs?",
    "choices": [
      "It is less expensive to carry out than the animal procedure",
      "It uses fewer animals than before",
      "It can answer the intended research question",
      "It makes the original animal procedure less painful"
    ],
    "correct": 2,
    "explanation": "Replacement is appropriate when another method supplies the relevant evidence.",
    "choiceExplanations": [
      "Lower cost does not establish that the alternative supplies the relevant evidence.",
      "That describes reduction, not a nonanimal alternative.",
      "Replacement is appropriate when another method supplies the relevant evidence.",
      "That describes refinement."
    ],
    "misconception": "Replacement requires a suitable alternative, not just a superficially similar procedure.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-cause-not-ethics",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A randomized manipulation could isolate a cause but would expose people to serious harm. What question remains separate from causal validity?",
    "choices": [
      "Whether systematic preexisting group differences explain the outcome",
      "Whether the procedure is ethically permissible",
      "Whether the outcome measure has a sufficiently precise recording rule",
      "Whether the effect meets a conventional significance criterion"
    ],
    "correct": 1,
    "explanation": "An informative design must still satisfy participant-protection requirements.",
    "choiceExplanations": [
      "The stated randomized causal design addresses this issue; it does not settle participant harm.",
      "An informative design must still satisfy participant-protection requirements.",
      "Measurement precision is useful but does not resolve exposure to serious harm.",
      "Statistical significance does not determine whether the manipulation is permissible."
    ],
    "misconception": "A good causal contrast is not sufficient justification for a harmful procedure.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-tuskegee",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which ethical failure is highlighted by the textbook’s Tuskegee example?",
    "choices": [
      "Withheld diagnosis or treatment and inadequate informed consent",
      "Failure to protect confidentiality when sharing identifiable records",
      "Punishment of participants who asked to withdraw",
      "Use of a placebo instead of an established treatment in a blinded trial"
    ],
    "correct": 0,
    "explanation": "The notes use the example to illustrate failures of care and consent.",
    "choiceExplanations": [
      "The notes use the example to illustrate failures of care and consent.",
      "That is an ethical issue, but the supplied account emphasizes withheld care and inadequate consent.",
      "Withdrawal protection is important, but this is not the specific failure identified in the supplied example.",
      "The supplied account concerns withheld diagnosis or treatment and consent, rather than this trial-design description."
    ],
    "misconception": "The historical example concerns participants’ information and care.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-facebook-consent",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which concern is attached to the Facebook newsfeed manipulation in the notes?",
    "choices": [
      "Whether people explicitly consented to the research",
      "Whether records were linked to identities during data sharing",
      "Whether withdrawal from research carried a penalty",
      "Whether guardian permission was obtained for participants unable to consent"
    ],
    "correct": 0,
    "explanation": "The example raises consent concerns about conducting research through the platform.",
    "choiceExplanations": [
      "The example raises consent concerns about conducting research through the platform.",
      "Identity linkage is a distinct data-property question, not the concern emphasized for this manipulation.",
      "Withdrawal is an ethical safeguard, but the supplied example specifically emphasizes explicit consent.",
      "Guardian permission is another protection in the notes, but it is not the highlighted concern in this example."
    ],
    "misconception": "A platform-mediated experiment still raises a distinct question about research consent.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-ethics-privacy-anonymity",
    "lessonId": "ethics",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which pair correctly distinguishes privacy from anonymity?",
    "choices": [
      "Control over sharing information; inability to link responses to identity",
      "Restricted disclosure of collected records; control over sharing information",
      "Inability to link responses to identity; control over sharing information",
      "Control over sharing information; restricted disclosure of identifiable records"
    ],
    "correct": 0,
    "explanation": "These are the respective definitions in the notes.",
    "choiceExplanations": [
      "These are the respective definitions in the notes.",
      "These describe confidentiality and privacy rather than privacy and anonymity.",
      "This reverses anonymity and privacy.",
      "The privacy description fits, but the second describes confidentiality rather than anonymity."
    ],
    "misconception": "The terms refer to different information rights and data properties.",
    "source": "Assigned textbook notes · 2-4a–b",
    "type": "application"
  },
  {
    "id": "r2-pearson-scale-realistic-content",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What did Pearson’s realistic-threat items concern?",
    "choices": [
      "Perceived incompatibility of values and morals",
      "Endorsement of hierarchy between groups",
      "Perceived material and resource threats",
      "Frequency of reported negative emotions"
    ],
    "correct": 2,
    "explanation": "This scale focused on resources and material consequences.",
    "choiceExplanations": [
      "That is symbolic threat.",
      "That is social dominance orientation.",
      "This scale focused on resources and material consequences.",
      "That is the negative-attitude measure."
    ],
    "misconception": "Realistic and symbolic threats concern material consequences versus values.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-realistic-format",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which response format did Pearson use for realistic-threat statements?",
    "choices": [
      "A five-point frequency scale",
      "Ten percentage categories",
      "A 10-point disagreement–agreement scale",
      "A 0–100 warmth rating"
    ],
    "correct": 2,
    "explanation": "The notes specify this agreement format for the 12 realistic-threat items.",
    "choiceExplanations": [
      "This was used for negative-attitude emotions.",
      "These were used to estimate stereotype prevalence.",
      "The notes specify this agreement format for the 12 realistic-threat items.",
      "This was the feeling thermometer."
    ],
    "misconception": "Threat statements used agreement ratings rather than emotion frequency or prevalence estimates.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-symbolic-content",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What did Pearson’s symbolic-threat items concern?",
    "choices": [
      "Perceived material or resource losses",
      "Estimated percentages possessing particular qualities",
      "Perceived threats to values, morals and compatibility",
      "Endorsement of group hierarchy"
    ],
    "correct": 2,
    "explanation": "The symbolic-threat scale focused on values and related compatibility.",
    "choiceExplanations": [
      "That is realistic-threat content.",
      "That is the stereotype operationalization.",
      "The symbolic-threat scale focused on values and related compatibility.",
      "That is SDO content."
    ],
    "misconception": "Values-based threat is distinct from resource threat, stereotypes and hierarchy endorsement.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-stereotypes-format",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which format operationalized the estimated prevalence of traits in Pearson’s stereotype measure?",
    "choices": [
      "A 10-point disagreement–agreement scale",
      "Percentage categories from 0–10% through 90–100%",
      "A five-point emotion-frequency scale",
      "A seven-point hierarchy-endorsement scale"
    ],
    "correct": 1,
    "explanation": "Participants selected percentage categories for the listed qualities.",
    "choiceExplanations": [
      "That measured agreement with threat statements.",
      "Participants selected percentage categories for the listed qualities.",
      "That measured negative attitudes.",
      "That describes the SDO response format."
    ],
    "misconception": "A prevalence estimate and an agreement rating encode different questions.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-stereotypes-meaning",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why were positive qualities recoded in Pearson’s negative-stereotype measure?",
    "choices": [
      "To align score direction toward a more favorable evaluation",
      "To put trait-prevalence estimates on an agreement scale",
      "To treat positive and negative raw responses as having the same meaning",
      "To align score direction toward greater negativity"
    ],
    "correct": 3,
    "explanation": "Recoding ensures positive and negative qualities contribute in the intended direction.",
    "choiceExplanations": [
      "This reverses the intended negative-stereotype direction.",
      "Recoding direction does not replace the percentage response format with agreement ratings.",
      "Recoding is needed precisely because a high positive-trait estimate and a high negative-trait estimate have opposing evaluative meanings.",
      "Recoding ensures positive and negative qualities contribute in the intended direction."
    ],
    "misconception": "Reverse scoring aligns numerical meaning without changing the measurement source or assigned IV.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "misconception"
  },
  {
    "id": "r2-pearson-scale-attitudes-content",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What did Pearson’s negative-attitude scale ask participants to rate?",
    "choices": [
      "The estimated percentage with specified traits",
      "Agreement with group hierarchy",
      "The group’s perceived material impact",
      "The frequency of specified emotions"
    ],
    "correct": 3,
    "explanation": "The 11-emotion measure used a frequency response scale.",
    "choiceExplanations": [
      "That is the stereotype measure.",
      "That is SDO content.",
      "That is realistic-threat content.",
      "The 11-emotion measure used a frequency response scale."
    ],
    "misconception": "Attitude emotions and stereotyped qualities were operationalized differently.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-attitudes-format",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which format did Pearson use to rate the frequency of 11 emotions?",
    "choices": [
      "Ten points from disagreement to agreement",
      "Five points from almost never to almost always",
      "Ten categories estimating a percentage",
      "A 0–100 warmth continuum"
    ],
    "correct": 1,
    "explanation": "This is the reported negative-attitude frequency format.",
    "choiceExplanations": [
      "That is the threat-scale format.",
      "This is the reported negative-attitude frequency format.",
      "That is the stereotype format.",
      "That is the feeling-thermometer format."
    ],
    "misconception": "Emotion frequency was measured separately from threat agreement and emotional warmth.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-sdo-content",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which belief content defines Pearson’s social-dominance-orientation measure?",
    "choices": [
      "Incompatibility of the group’s values",
      "Frequency of negative feelings toward the group",
      "Endorsement of group hierarchy and inequality",
      "Estimated prevalence of negative traits"
    ],
    "correct": 2,
    "explanation": "SDO assesses views about hierarchical relationships between groups.",
    "choiceExplanations": [
      "That is symbolic-threat content.",
      "That is negative-attitude content.",
      "SDO assesses views about hierarchical relationships between groups.",
      "That is stereotype content."
    ],
    "misconception": "Hierarchy endorsement is a different construct from threat or affect.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-scale-sdo-format",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which response scale was used for Pearson’s 16-item SDO measure?",
    "choices": [
      "Ten-point agreement scale",
      "Five-point frequency scale",
      "Seven-point scale",
      "0–100 warmth scale"
    ],
    "correct": 2,
    "explanation": "The notes report a seven-point scale for hierarchy endorsement.",
    "choiceExplanations": [
      "The threat measures used ten-point scales.",
      "The negative-attitude measure used five-point frequency responses.",
      "The notes report a seven-point scale for hierarchy endorsement.",
      "The feeling thermometer used that continuum."
    ],
    "misconception": "SDO’s response format differs from the threat, emotion-frequency and warmth measures.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "recall"
  },
  {
    "id": "r2-pearson-thermometer-reverse",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why was Pearson’s warmth thermometer reverse-coded as emotional coldness?",
    "choices": [
      "To make higher scores retain their original warmth meaning",
      "To make greater warmth and greater coldness have the same direction",
      "To make higher scores represent greater coldness",
      "To replace the warmth continuum with an emotion-frequency scale"
    ],
    "correct": 2,
    "explanation": "Reversing the reported warmth direction expresses the outcome in terms of coldness.",
    "choiceExplanations": [
      "That would leave the original direction rather than express coldness.",
      "Those meanings are opposite; the reversal distinguishes them.",
      "Reversing the reported warmth direction expresses the outcome in terms of coldness.",
      "The transformation reverses direction while preserving the thermometer format; emotion frequency was a separate measure."
    ],
    "misconception": "Recoding changes score direction, not the variable’s self-report status.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-target",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What remained common across Pearson’s two wording conditions?",
    "choices": [
      "The questionnaires used the same immigrant label",
      "Participants received the same wording condition",
      "The target group was Mexican immigrants",
      "Participants belonged to the same gender category"
    ],
    "correct": 2,
    "explanation": "Both labels concerned the same stated group; the manipulation was language.",
    "choiceExplanations": [
      "The label varied between the assigned conditions.",
      "Each participant received one assigned wording level.",
      "Both labels concerned the same stated group; the manipulation was language.",
      "The sample included men and women; gender was not held at one level."
    ],
    "misconception": "The described target group stayed constant while its label changed.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-recruitment",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which description fits Pearson’s participant recruitment?",
    "choices": [
      "A random sample of national adults",
      "A convenience sample of undergraduate psychology participants",
      "A population sample of Mexican immigrants",
      "A sample stratified by participants’ immigration status"
    ],
    "correct": 1,
    "explanation": "Recruitment was from accessible undergraduates, separate from random allocation to labels.",
    "choiceExplanations": [
      "Random assignment of labels does not establish national random recruitment.",
      "Recruitment was from accessible undergraduates, separate from random allocation to labels.",
      "The people responding were psychology undergraduates, not the described target group.",
      "The supplied methods do not describe immigration-status recruitment strata."
    ],
    "misconception": "The group being described in a questionnaire is distinct from the group recruited to answer it.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-same-order",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What distinguishes Pearson’s wording and measure order?",
    "choices": [
      "Wording varied by assignment; measure order stayed fixed",
      "Both wording and measure order were independently randomized",
      "Wording stayed fixed; order varied by assignment",
      "Participants selected both the label and the measure order"
    ],
    "correct": 0,
    "explanation": "The labels were assigned conditions, while the listed questionnaire sequence was common.",
    "choiceExplanations": [
      "The labels were assigned conditions, while the listed questionnaire sequence was common.",
      "The source states that order stayed the same.",
      "This reverses the manipulation and fixed procedure.",
      "The supplied procedure did not describe participant selection of either."
    ],
    "misconception": "Using multiple questionnaires does not imply their order was another randomized manipulation.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-two-active",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why can Pearson be an experiment despite lacking a neutral-wording condition?",
    "choices": [
      "The two wording alternatives were manipulated and randomly assigned",
      "A self-report scale serves as a no-treatment condition",
      "Undergraduate recruitment serves as the experimental control",
      "Fixed questionnaire order substitutes for random assignment"
    ],
    "correct": 0,
    "explanation": "An experiment can compare two active conditions rather than treatment versus nothing.",
    "choiceExplanations": [
      "An experiment can compare two active conditions rather than treatment versus nothing.",
      "A scale records an outcome; it is not a third treatment condition.",
      "Recruitment determines the sample rather than the baseline condition.",
      "Order was held constant, while assignment of wording supported the experimental comparison."
    ],
    "misconception": "A relevant active comparison can support an experiment without a neutral or untreated group.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-attitude-effect",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Relative to “undocumented workers,” what did the “illegal aliens” condition report?",
    "choices": [
      "More negative attitudes but less emotional coldness",
      "More negative attitudes and emotional coldness",
      "Less negative attitudes but more emotional coldness",
      "Less negative attitudes and emotional coldness"
    ],
    "correct": 1,
    "explanation": "The notes report this direction for both self-reported prejudice outcomes.",
    "choiceExplanations": [
      "The coldness direction is reversed.",
      "The notes report this direction for both self-reported prejudice outcomes.",
      "The attitude direction is reversed.",
      "This reverses both reported directions."
    ],
    "misconception": "The two reported outcomes shifted toward greater negativity under the “illegal aliens” wording.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-threat-effect",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which set of Pearson measures increased under “illegal aliens” wording?",
    "choices": [
      "SDO, zero-sum beliefs and negative stereotypes",
      "Realistic threat, symbolic threat and negative stereotypes",
      "Realistic threat, SDO and zero-sum beliefs",
      "Symbolic threat, SDO and emotional warmth"
    ],
    "correct": 1,
    "explanation": "The supplied findings identify increases in these threat-related constructs.",
    "choiceExplanations": [
      "Wording did not significantly predict SDO or zero-sum beliefs.",
      "The supplied findings identify increases in these threat-related constructs.",
      "The threat measure changed, but the two competition variables were not significantly predicted.",
      "SDO was not significantly predicted, and the reported feeling outcome shifted toward coldness."
    ],
    "misconception": "Threat-related wording effects should not be transferred to the competition variables.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-nonsignificant-sdo",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which Pearson construct was not significantly predicted by assigned wording?",
    "choices": [
      "Social dominance orientation",
      "Realistic threat",
      "Symbolic threat",
      "Negative stereotypes"
    ],
    "correct": 0,
    "explanation": "The notes explicitly distinguish SDO from the measures showing a wording effect.",
    "choiceExplanations": [
      "The notes explicitly distinguish SDO from the measures showing a wording effect.",
      "Greater realistic threat was reported under the “illegal aliens” wording.",
      "Greater symbolic threat was reported under that wording.",
      "The reported stereotype scores also increased."
    ],
    "misconception": "The label affected several threat measures without significantly predicting SDO.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-best-model",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why did ITT better explain Pearson’s label difference than the competition model?",
    "choices": [
      "The competition variables were not measured",
      "The study independently randomized each threat variable",
      "The competition model lacked any supported relationships",
      "The threat-related variables accounted more completely for the wording effect"
    ],
    "correct": 3,
    "explanation": "ITT better linked assigned wording with the reported prejudice outcomes.",
    "choiceExplanations": [
      "SDO and zero-sum competition were measured.",
      "The threat variables were measured rather than separately assigned.",
      "SDO–competition–prejudice relationships were supported despite the weaker wording account.",
      "ITT better linked assigned wording with the reported prejudice outcomes."
    ],
    "misconception": "A model’s ability to account for the label contrast differs from whether it has any supported relationships.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-public-limit",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What most directly limits generalizing Pearson’s wording effect to the public?",
    "choices": [
      "Convenience recruitment of psychology undergraduates",
      "Unequal realized counts in the two label conditions",
      "The use of two active wording conditions",
      "The use of fixed questionnaire order"
    ],
    "correct": 0,
    "explanation": "The recruited group may differ from the target public population.",
    "choiceExplanations": [
      "The recruited group may differ from the target public population.",
      "Unequal counts do not themselves invalidate random allocation or establish the population boundary.",
      "Two conditions are appropriate for the tested wording contrast.",
      "Order is a procedural feature; the direct population-coverage concern is recruitment."
    ],
    "misconception": "Random assignment does not make a restricted convenience sample nationally representative.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-pearson-study-representations",
    "lessonId": "pearson",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which alternative interpretation did Pearson note about the two labels?",
    "choices": [
      "They referred to immigrant targets from different countries",
      "They accompanied different orders of the outcome measures",
      "They described the respondents’ own group membership",
      "They might evoke different mental representations or subgroups"
    ],
    "correct": 3,
    "explanation": "The author acknowledged that the terms might bring different people to mind.",
    "choiceExplanations": [
      "Both labels concerned Mexican immigrants; the alternative concerns mental representation within that stated target.",
      "The order was fixed; this is not the proposed interpretive limitation.",
      "The labels described the immigrant target rather than defining participant groups.",
      "The author acknowledged that the terms might bring different people to mind."
    ],
    "misconception": "A shared nominal target does not guarantee identical mental representations of that target.",
    "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
    "type": "application"
  },
  {
    "id": "r2-inference-null",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "In a model comparing two underlying group means, what does the no-difference null posit?",
    "choices": [
      "The observed sample scores are identical",
      "The underlying means do not differ",
      "The underlying group means differ by a small amount",
      "The underlying group means differ by a large amount"
    ],
    "correct": 1,
    "explanation": "The null concerns an underlying difference, not exact identity of every observed score.",
    "choiceExplanations": [
      "Sampling variation can produce different observations under a no-difference model.",
      "The null concerns an underlying difference, not exact identity of every observed score.",
      "Any specified difference is different from the no-difference null, even if practically small.",
      "That is an effect claim rather than the no-difference null."
    ],
    "misconception": "The null model is about an underlying parameter or relationship, not a guarantee about each observation.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-inference-effect-size",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A report supplies a very small p value. What additional information is needed to judge the effect’s magnitude?",
    "choices": [
      "Whether the observed relationship is positive or negative",
      "How many participants supplied the observations",
      "Which significance cutoff the analysis applied",
      "How large the observed difference or relationship is"
    ],
    "correct": 3,
    "explanation": "The p value is a probability under a model, not the size of the effect.",
    "choiceExplanations": [
      "Direction does not give its magnitude.",
      "Sample size affects detectability but does not specify the observed effect’s size.",
      "The decision criterion does not quantify the size of the observed relationship.",
      "The p value is a probability under a model, not the size of the effect."
    ],
    "misconception": "Detectability and effect size are different quantities.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-inference-reject-explanation",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A study rejects a no-difference null. What remains to be established before accepting a particular causal mechanism?",
    "choices": [
      "A smaller p value for the same comparison",
      "Evidence distinguishing that mechanism from competing explanations",
      "A larger sample using the same unresolved comparison",
      "Repeated support for the same difference without distinguishing the mechanisms"
    ],
    "correct": 1,
    "explanation": "Rejecting the null does not select a unique explanation for the effect.",
    "choiceExplanations": [
      "A stronger criterion does not independently identify the mechanism.",
      "Rejecting the null does not select a unique explanation for the effect.",
      "A more precise estimate can retain the same competing causal explanations.",
      "Recurrence strengthens the finding but does not select among explanations compatible with it."
    ],
    "misconception": "Evidence of a difference is not the same as evidence identifying its mechanism.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-inference-sampling",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A large convenience survey yields a small p value. Which change most directly addresses the remaining limit on extending its result to the public?",
    "choices": [
      "Randomly allocate the current respondents to question versions",
      "Recruit respondents through a plan covering the target public population",
      "Replicate the survey with more volunteers from the same restricted recruitment route",
      "Use a stricter significance cutoff for the current sample"
    ],
    "correct": 1,
    "explanation": "The population boundary depends on who entered the study, rather than the significance decision.",
    "choiceExplanations": [
      "Assignment can support a wording comparison but does not broaden the recruited sample.",
      "The population boundary depends on who entered the study, rather than the significance decision.",
      "The restricted route can retain its coverage problem despite additional observations.",
      "A new probability criterion does not improve population representation."
    ],
    "misconception": "A statistically persuasive sample result can still come from unrepresentative recruitment.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-inference-stricter",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why would a .005 cutoff classify fewer p values as significant than a .05 cutoff?",
    "choices": [
      "The smaller cutoff accepts a wider range of p values",
      "The smaller cutoff increases each already computed p value",
      "The smaller cutoff accepts a narrower range of p values",
      "The smaller cutoff directly imposes a larger minimum effect size"
    ],
    "correct": 2,
    "explanation": "Values between the two cutoffs meet the larger cutoff but not the smaller one.",
    "choiceExplanations": [
      "This reverses the numerical relation between the two cutoffs.",
      "A decision threshold does not change the computed probabilities.",
      "Values between the two cutoffs meet the larger cutoff but not the smaller one.",
      "The threshold specifies a p criterion; effect size and sample size jointly affect detectability."
    ],
    "misconception": "A stricter cutoff changes the decision boundary, not the observed effect or calculated p value.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-inference-factor",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A researcher seeks underlying clusters among many correlated test measures. Which analysis fits?",
    "choices": [
      "Meta-analysis",
      "Factor analysis",
      "Calculation of a mean",
      "Calculation of a standard deviation"
    ],
    "correct": 1,
    "explanation": "It identifies cluster structure underlying related measurements.",
    "choiceExplanations": [
      "It combines study findings, rather than clusters among these measures.",
      "It identifies cluster structure underlying related measurements.",
      "One center does not identify the correlations’ cluster structure.",
      "One spread summary does not identify underlying measurement clusters."
    ],
    "misconception": "Factor analysis concerns structure among measures rather than one summary or a synthesis of studies.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-inference-uncertainty",
    "lessonId": "inference",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A surprising finding meets its significance criterion in one study. Which follow-up most directly checks whether it recurs?",
    "choices": [
      "Apply a second significance cutoff to the existing dataset",
      "Check whether related items in the existing questionnaire agree",
      "Conduct an appropriate independent replication",
      "Ask a second observer to rescore the original records"
    ],
    "correct": 2,
    "explanation": "Another empirical test supplies recurrence evidence beyond the first significance decision.",
    "choiceExplanations": [
      "This reevaluates a decision on the same observations rather than obtains recurrence evidence.",
      "Internal consistency checks the measure’s items rather than whether the study result recurs.",
      "Another empirical test supplies recurrence evidence beyond the first significance decision.",
      "That can check interrater reliability but does not provide an independent study of the finding."
    ],
    "misconception": "One significance decision does not replace methodological evaluation and repeated evidence.",
    "source": "Assigned textbook notes · 2-3c",
    "type": "application"
  },
  {
    "id": "r2-operation-concept-vs-measure",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "In “aggression measured as doll hits during five minutes,” what is the relation between aggression and hit count?",
    "choices": [
      "Independent and attribute variables",
      "Population and sample",
      "Theory and hypothesis",
      "Construct and operational measure"
    ],
    "correct": 3,
    "explanation": "Aggression is the abstract target; hit count specifies one way to quantify it.",
    "choiceExplanations": [
      "Neither description specifies an assigned treatment or preexisting grouping characteristic.",
      "Those terms describe cases of interest and cases studied, not concept and score.",
      "The phrase identifies a measure rather than an explanatory account and prediction.",
      "Aggression is the abstract target; hit count specifies one way to quantify it."
    ],
    "misconception": "An operationalization connects an abstract concept with a concrete recording procedure.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-iv-definition",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A replication describes its manipulation as “positive photographs.” What additional information is most relevant to reproducing the IV?",
    "choices": [
      "The questionnaire items and score-coding instructions",
      "The recruitment route and participants’ age distribution",
      "The rule allocating participants to the photograph conditions",
      "The selected photographs and presentation instructions"
    ],
    "correct": 3,
    "explanation": "The stimulus content and procedure specify what condition participants receive.",
    "choiceExplanations": [
      "These operationalize the DV, not the presented photograph condition.",
      "These specify the sample rather than the content of the assigned stimulus.",
      "Allocation is useful procedural information but still does not identify which photographs or presentation constituted each IV level.",
      "The stimulus content and procedure specify what condition participants receive."
    ],
    "misconception": "A manipulation requires an operational definition as well as an outcome measure.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-fmri-rating",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A study collects fMRI activity and a hostility questionnaire. How are the two outcome sources classified, respectively?",
    "choices": [
      "Self-report and physiological",
      "Behavioral and self-report",
      "Physiological and self-report",
      "Physiological and behavioral"
    ],
    "correct": 2,
    "explanation": "The brain signal is recorded; the hostility answers are participants’ reports.",
    "choiceExplanations": [
      "This reverses the actual sources of the data.",
      "The questionnaire classification fits, but fMRI records brain activity rather than an overt action.",
      "The brain signal is recorded; the hostility answers are participants’ reports.",
      "The brain classification fits, but the stated hostility outcome is a questionnaire report."
    ],
    "misconception": "Classify each measure by its recording procedure, not the construct it is intended to assess.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-noise-dimensions",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why distinguish chosen noise duration from chosen noise intensity when comparing aggression studies?",
    "choices": [
      "One is necessarily self-report and the other physiological",
      "Intensity is the manipulated IV whenever duration is the DV",
      "They quantify different aspects of the response",
      "Both are alternative labels for the same recorded quantity"
    ],
    "correct": 2,
    "explanation": "Time and intensity are different operational outcomes, even under the same construct name.",
    "choiceExplanations": [
      "A chosen setting can be behavioral for either dimension.",
      "Both can be participant-chosen outcomes; their physical dimensions do not establish an IV–DV allocation.",
      "Time and intensity are different operational outcomes, even under the same construct name.",
      "Different quantities require distinct scoring specifications."
    ],
    "misconception": "A shared construct does not make different response quantities interchangeable.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-proxy-validity",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Before interpreting hot-sauce allocation as an aggression measure, what evidence is most relevant?",
    "choices": [
      "Whether observers agree when weighing the same allocation",
      "Whether allocations correspond to relevant established aggression measures or outcomes",
      "Whether the same procedure yields stable scores under stable conditions",
      "Whether the allocation instructions specify a reproducible procedure"
    ],
    "correct": 1,
    "explanation": "Validity concerns evidence that the proxy assesses the intended aggression construct.",
    "choiceExplanations": [
      "Observer agreement checks consistency of recording rather than the aggression meaning of the allocation.",
      "Validity concerns evidence that the proxy assesses the intended aggression construct.",
      "Repeatability supports reliability but does not establish that the target is aggression.",
      "Operational precision helps reproduce the measure but does not by itself validate its interpretation."
    ],
    "misconception": "A convenient, quantifiable proxy still needs evidence about what it measures.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-infant-report",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Investigators want to record which of two objects an infant selects. Which DV captures that choice most directly?",
    "choices": [
      "Total looking time across both objects combined",
      "Heart rate during the two-object display",
      "Adult ratings of the two objects’ attractiveness",
      "The first object the infant reaches toward, scored with a defined rule"
    ],
    "correct": 3,
    "explanation": "This records a nonverbal selection that distinguishes the two objects.",
    "choiceExplanations": [
      "Combined time records visual attention without identifying which object was selected.",
      "A physiological response does not directly identify the selected object.",
      "Those record adults’ judgments rather than the infant’s selection.",
      "This records a nonverbal selection that distinguishes the two objects."
    ],
    "misconception": "The selected DV must be a response the infant can provide and must distinguish the choice of interest.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-looking-inference",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Researchers time infant looking to investigate recognition. What is the directly recorded DV?",
    "choices": [
      "Recognition ability",
      "The assigned visual display",
      "The observer’s prediction",
      "Looking time"
    ],
    "correct": 3,
    "explanation": "The observed duration is the measure; recognition is the proposed interpretation.",
    "choiceExplanations": [
      "This is the inferred mental construct rather than the actual timed response.",
      "This is the stimulus condition rather than the response.",
      "A prediction is not the infant’s recorded behavior.",
      "The observed duration is the measure; recognition is the proposed interpretation."
    ],
    "misconception": "Separate the recorded response from the mental process inferred from it.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-recording-rule",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Two teams count doll hits, but one observes for five minutes and the other for ten. What needs alignment before raw counts are compared?",
    "choices": [
      "The proportion of participants assigned to each game condition",
      "The total number of participants recruited by each team",
      "The observation interval and definition of a counted hit",
      "The correlation between the two teams’ group averages"
    ],
    "correct": 2,
    "explanation": "Those rules determine what each count represents.",
    "choiceExplanations": [
      "Allocation ratios do not align how much opportunity each participant has to produce a counted hit.",
      "Sample count does not make a five-minute individual count equivalent to a ten-minute count.",
      "Those rules determine what each count represents.",
      "An aggregate association does not standardize the individual recording windows."
    ],
    "misconception": "Comparable counts need comparable observation opportunities and coding rules.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-operation-fight-proxy",
    "lessonId": "operational",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A noise-punishment result is cited as evidence about physical fights. What must be examined for that extension?",
    "choices": [
      "Whether observers agree on the noise-duration records",
      "Whether the laboratory proxy validly relates to the broader behavior",
      "Whether the assigned game groups were comparable at baseline",
      "Whether the noise difference meets a significance criterion"
    ],
    "correct": 1,
    "explanation": "The operational measures differ, so generalization requires additional evidence.",
    "choiceExplanations": [
      "Reliability of the laboratory records does not itself establish relevance to fights.",
      "The operational measures differ, so generalization requires additional evidence.",
      "Condition comparability supports the laboratory contrast but not the unmeasured fight outcome.",
      "A small p value for one outcome does not establish an effect on a different outcome."
    ],
    "misconception": "An effect on one operationalization does not automatically establish an effect on another.",
    "source": "Research Methods II · slides 22–30",
    "type": "application"
  },
  {
    "id": "r2-quality-evidence-comparable",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Two studies use different aggression proxies. What should a meta-analysis examine before interpreting their pooled result?",
    "choices": [
      "Whether each proxy produces repeatable scores within its own study",
      "Whether the studies have equal participant counts",
      "Whether the measures represent sufficiently comparable outcomes",
      "Whether each reported difference met a significance cutoff"
    ],
    "correct": 2,
    "explanation": "Meaningful synthesis depends on the quality and comparability of included measurements.",
    "choiceExplanations": [
      "Individual repeatability does not establish that the two proxies represent comparable outcomes.",
      "Equal counts do not make different outcomes comparable.",
      "Meaningful synthesis depends on the quality and comparability of included measurements.",
      "Significance of each contrast does not establish comparable measurement meaning."
    ],
    "misconception": "A shared topic is insufficient when operational measures differ.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-quality-evidence-study-quality",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "A meta-analysis includes studies with weak controls. What limitation can carry into its conclusion?",
    "choices": [
      "The pooled result becomes a new randomized experiment",
      "Alternative explanations in the included studies can weaken the synthesis",
      "The total sample size substitutes for evaluating the study designs",
      "The common research question establishes each study’s measurement validity"
    ],
    "correct": 1,
    "explanation": "Statistical pooling depends on the evidence being pooled.",
    "choiceExplanations": [
      "Combining results does not retroactively allocate the original participants.",
      "Statistical pooling depends on the evidence being pooled.",
      "Volume does not resolve systematic methodological weaknesses.",
      "Topic agreement does not validate the measures."
    ],
    "misconception": "Synthesis does not automatically repair the designs that produced its evidence.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-quality-evidence-file-drawer",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Studies with null findings are less likely to appear in the available literature. What concern does this create for a meta-analysis?",
    "choices": [
      "The accessible studies overrepresent null effects",
      "The pooled estimate gains generalizability because fewer studies disagree",
      "The available findings may overrepresent significant effects",
      "The accessible literature contains a balanced set of significant and null results"
    ],
    "correct": 2,
    "explanation": "Publication bias can make the accessible evidence an unrepresentative set of studies.",
    "choiceExplanations": [
      "This reverses the stated selection against null findings.",
      "Selective absence of contrary findings does not establish broad generalizability.",
      "Publication bias can make the accessible evidence an unrepresentative set of studies.",
      "The described publication selection undermines this assumption."
    ],
    "misconception": "A biased set of published studies can distort evidence synthesis.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-quality-evidence-replication-context",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "An independent replication uses a different sample and observation setting and gets a different result. What should be evaluated first?",
    "choices": [
      "Whether the original publication settles the disagreement",
      "Whether the newer result should replace the older one based on date",
      "Whether those procedural or sample differences explain the discrepancy",
      "Whether combining the studies removes the need to inspect their methods"
    ],
    "correct": 2,
    "explanation": "Replications can clarify when an effect occurs, as well as whether it recurs.",
    "choiceExplanations": [
      "Publication does not exempt a finding from further testing.",
      "Recency does not substitute for evaluating the evidence and procedures.",
      "Replications can clarify when an effect occurs, as well as whether it recurs.",
      "Synthesis still requires understanding the contributing studies."
    ],
    "misconception": "A failed replication calls for evaluating methods and context rather than an automatic verdict.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-quality-evidence-test-retest-vs-replication",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What distinguishes test–retest reliability from replication of a study result?",
    "choices": [
      "Recurrence of the finding versus measurement stability",
      "Observer agreement versus consistency across repeated occasions",
      "Agreement among items versus agreement between observers",
      "Measurement stability versus recurrence of the finding"
    ],
    "correct": 3,
    "explanation": "Retesting checks score consistency; replication tests whether the empirical result can be obtained again.",
    "choiceExplanations": [
      "This reverses the respective purposes of the two procedures.",
      "The first is interrater reliability, and the second is test–retest reliability rather than study replication.",
      "Those are internal consistency and interrater reliability, not the two procedures asked about.",
      "Retesting checks score consistency; replication tests whether the empirical result can be obtained again."
    ],
    "misconception": "Not every kind of repeated measurement evaluates the same target.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-quality-evidence-tentative",
    "lessonId": "quality",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Several independent studies obtain a similar result. What is strengthened most directly?",
    "choices": [
      "Evidence that the effect applies to unstudied populations",
      "Evidence that one proposed mediator is the causal mechanism",
      "Confidence that the finding can recur under comparable conditions",
      "Evidence that the outcome measure captures the intended construct"
    ],
    "correct": 2,
    "explanation": "Repeated findings support recurrence while conclusions remain open to revision.",
    "choiceExplanations": [
      "That extension still depends on sampling and further evidence.",
      "Recurrence alone does not separately manipulate a mediator.",
      "Repeated findings support recurrence while conclusions remain open to revision.",
      "A measure can produce consistent findings without adequately capturing its intended construct; that requires evidence about validity."
    ],
    "misconception": "Replication strengthens confidence in a finding without settling every scope or mechanism claim.",
    "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-itt-components",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which measures made up Pearson’s ITT account?",
    "choices": [
      "SDO, zero-sum competition and negative stereotypes",
      "Realistic threat, symbolic threat and negative stereotypes",
      "Negative attitudes, emotional coldness and demographics",
      "Realistic threat, SDO and zero-sum competition"
    ],
    "correct": 1,
    "explanation": "These are the three ITT components specified in the notes.",
    "choiceExplanations": [
      "The first two belong to the competition account rather than the specified ITT set.",
      "These are the three ITT components specified in the notes.",
      "The first two are outcomes, not the specified three mediators.",
      "This mixes one ITT variable with the competition variables."
    ],
    "misconception": "Separate a model’s proposed explanatory variables from outcomes and the competing model’s variables.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-imgc-components",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which constructs did Pearson’s instrumental model of group conflict consider?",
    "choices": [
      "Realistic and symbolic threat",
      "Negative attitudes and emotional coldness",
      "SDO and zero-sum competition",
      "Symbolic threat and negative stereotypes"
    ],
    "correct": 2,
    "explanation": "The IMGC account considered hierarchy orientation and competition beliefs.",
    "choiceExplanations": [
      "These are ITT components.",
      "These are reported prejudice outcomes.",
      "The IMGC account considered hierarchy orientation and competition beliefs.",
      "These also belong to the threat account."
    ],
    "misconception": "The competition account and threat account use different proposed explanatory constructs.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-partial-attitudes",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which statistical mediation result was reported for Pearson’s negative-attitude outcome?",
    "choices": [
      "Partial mediation by the combined ITT variables",
      "Full mediation by the combined ITT variables",
      "Full mediation by SDO and zero-sum competition",
      "Full mediation by negative stereotypes alone"
    ],
    "correct": 0,
    "explanation": "The notes report partial mediation of the attitude outcome by realistic threat, symbolic threat and stereotypes.",
    "choiceExplanations": [
      "The notes report partial mediation of the attitude outcome by realistic threat, symbolic threat and stereotypes.",
      "Full mediation was reported for emotional coldness, not negative attitudes.",
      "These competition variables did not account for the wording effect as the combined ITT variables did.",
      "The reported attitude result concerns partial mediation by the combined ITT variables, not full mediation by stereotypes alone."
    ],
    "misconception": "The reported statistical mediation differs between attitudes and coldness.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-full-coldness",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Which statistical mediation result was reported for Pearson’s emotional-coldness outcome?",
    "choices": [
      "Full mediation by the combined ITT variables",
      "Partial mediation by the combined ITT variables",
      "Full mediation by SDO and zero-sum competition",
      "Full mediation by negative stereotypes alone"
    ],
    "correct": 0,
    "explanation": "The notes report full mediation for coldness with the combined threat variables.",
    "choiceExplanations": [
      "The notes report full mediation for coldness with the combined threat variables.",
      "This transfers the attitude result to the coldness outcome.",
      "The reported full coldness result concerns the combined threat variables rather than the competition pair.",
      "Stereotypes alone did not significantly mediate coldness, despite the combined ITT result."
    ],
    "misconception": "The same model had different mediation descriptions for its two reported outcomes.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-full-meaning",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What does “full mediation” mean in Pearson’s reported model?",
    "choices": [
      "The remaining direct wording effect was nonsignificant",
      "The total wording effect was absent",
      "Each mediator was independently randomized",
      "Every proposed indirect path was nonsignificant"
    ],
    "correct": 0,
    "explanation": "This is the notes’ statistical interpretation within the fitted model.",
    "choiceExplanations": [
      "This is the notes’ statistical interpretation within the fitted model.",
      "Mediation concerns how a total relationship is modeled, not necessarily its absence.",
      "The mediators remained measured variables.",
      "That is not the definition of a nonsignificant remaining direct effect."
    ],
    "misconception": "A nonsignificant direct path is a model result, not proof of complete mechanistic knowledge.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-stereotype-alone",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "What was reported for negative stereotypes alone as a mediator of emotional coldness?",
    "choices": [
      "It fully mediated coldness alone",
      "It significantly mediated part of the coldness effect alone",
      "It was not evaluated separately from the other ITT variables",
      "It was not a significant mediator alone"
    ],
    "correct": 3,
    "explanation": "The combined ITT result should not be attributed to this single variable.",
    "choiceExplanations": [
      "The notes reserve full coldness mediation for the combined ITT variables.",
      "The notes specifically report a nonsignificant result for stereotypes alone.",
      "The supplied account reports the separate nonsignificant stereotype result.",
      "The combined ITT result should not be attributed to this single variable."
    ],
    "misconception": "The result for a combined mediator set need not hold for each component in isolation.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  },
  {
    "id": "r2-pearson-model-competition-supported",
    "lessonId": "pearson-measures",
    "unit": "Research methods",
    "kind": "combined",
    "prompt": "Why should Pearson’s findings not be described as rejecting the competition model in every respect?",
    "choices": [
      "Wording significantly predicted both competition measures",
      "SDO–competition–prejudice relationships were supported",
      "Competition measures were the experimentally assigned treatment",
      "The competition account used the same variables as ITT"
    ],
    "correct": 1,
    "explanation": "ITT better explained the label contrast while other competition relationships remained supported.",
    "choiceExplanations": [
      "The notes report that wording did not significantly predict either.",
      "ITT better explained the label contrast while other competition relationships remained supported.",
      "Wording was assigned; competition was measured.",
      "The two accounts considered different constructs."
    ],
    "misconception": "Support for some relationships is distinct from explaining why the labels differed.",
    "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
    "type": "application"
  }
];

globalThis.OLD_RESEARCH_FEEDBACK = {
  "science-q0": {
    "prompt": "A researcher records pedestrians’ phone use on an ordinary walking route without intervening. Which method is used?",
    "choices": [
      "Naturalistic observation",
      "Experimental comparison",
      "Survey",
      "Case study"
    ],
    "explanation": "Behavior is recorded in its usual setting without an assigned intervention.",
    "choiceExplanations": [
      "Behavior is recorded in its usual setting without an assigned intervention.",
      "An experiment would manipulate a condition; no intervention is described.",
      "A survey would collect participants’ answers rather than directly observe phone use.",
      "This is systematic recording of pedestrians rather than intensive investigation of an unusual case."
    ],
    "misconception": "Observation of ordinary behavior differs from intervention, self-report and intensive case investigation."
  },
  "science-q1": {
    "prompt": "An observer records evidence supporting a prediction while overlooking contrary examples. Which bias is described?",
    "choices": [
      "Confirmation bias",
      "Social desirability",
      "Hawthorne effect",
      "Publication bias"
    ],
    "explanation": "The selection favors evidence consistent with the observer’s expectation.",
    "choiceExplanations": [
      "The selection favors evidence consistent with the observer’s expectation.",
      "That concerns participants presenting themselves favorably in their answers.",
      "That concerns participants changing behavior because they know they are observed.",
      "That concerns which study findings become available in the literature."
    ],
    "misconception": "The selective observer, not respondent self-presentation or study publication, is the source of this bias."
  },
  "science-q2": {
    "prompt": "A participant behaves more politely when a visible researcher enters. Which effect is described?",
    "choices": [
      "Hawthorne effect",
      "Confirmation bias",
      "Publication bias",
      "Cohort effect"
    ],
    "explanation": "Awareness of observation changes the participant’s behavior.",
    "choiceExplanations": [
      "Awareness of observation changes the participant’s behavior.",
      "That would involve the researcher selectively interpreting or recording evidence.",
      "That concerns the availability of studies rather than this participant’s actions.",
      "That concerns differences linked to historical experiences of age groups."
    ],
    "misconception": "Observer-related behavior change is distinct from bias in recording or publication."
  },
  "science-q3": {
    "prompt": "“Less sleep tonight will reduce the number of words recalled tomorrow” is a specific testable statement. What is it?",
    "choices": [
      "Hypothesis",
      "Theory",
      "Operational definition",
      "Replication result"
    ],
    "explanation": "It predicts a relationship between concrete variables that can be tested.",
    "choiceExplanations": [
      "It predicts a relationship between concrete variables that can be tested.",
      "A theory organizes a broader explanatory account from which predictions can be derived.",
      "That would specify the exact sleep condition and recall-scoring procedure.",
      "That would report a repeated empirical test rather than a proposed prediction."
    ],
    "misconception": "A testable prediction is distinct from the explanation behind it and the method used to test it."
  },
  "descriptive-q0": {
    "prompt": "Ten thousand volunteers from one online psychology course answer a survey. What most limits extending their responses to the public?",
    "choices": [
      "Restricted convenience recruitment",
      "Lack of treatment assignment",
      "Lack of repeated testing",
      "Use of self-report rather than a physiological measure"
    ],
    "explanation": "The large count does not show that course volunteers represent the public.",
    "choiceExplanations": [
      "The large count does not show that course volunteers represent the public.",
      "A descriptive population claim needs appropriate sampling rather than an assigned treatment.",
      "Repeated occasions address change or consistency, not who the sample represents.",
      "The measurement category does not explain the stated course-recruitment restriction."
    ],
    "misconception": "Large sample size does not eliminate biased population coverage."
  },
  "descriptive-q1": {
    "prompt": "Researchers systematically record feeding actions of many chimpanzees in their usual habitat without changing their diets. Which method is used?",
    "choices": [
      "Naturalistic observation",
      "Randomized experiment",
      "Survey",
      "Intensive single-case study"
    ],
    "explanation": "Actions are recorded in their ordinary setting without intervention.",
    "choiceExplanations": [
      "Actions are recorded in their ordinary setting without intervention.",
      "No diet or other condition is randomly allocated.",
      "The data are observed actions rather than questionnaire answers.",
      "The procedure samples behavior across many animals rather than deeply examines one rare case."
    ],
    "misconception": "Natural setting and absence of intervention identify this observation procedure."
  },
  "correlation-q0": {
    "prompt": "Which correlation has the greatest linear strength?",
    "choices": [
      "−0.90",
      "+0.40",
      "−0.15",
      "0.00"
    ],
    "explanation": "Its absolute magnitude is .90, the largest of the listed values.",
    "choiceExplanations": [
      "Its absolute magnitude is .90, the largest of the listed values.",
      "Its magnitude .40 is smaller than .90 despite the positive sign.",
      "Its magnitude .15 describes a weaker inverse relationship.",
      "Zero is weaker than the nonzero associations."
    ],
    "misconception": "Strength follows distance from zero, not signed numerical order."
  },
  "correlation-q1": {
    "prompt": "Game play and aggression are associated. Researchers propose that parenting influences both. Which issue does this proposal raise?",
    "choices": [
      "Third-variable problem",
      "Directionality problem",
      "Observer reactivity",
      "Measurement reliability"
    ],
    "explanation": "Parenting is proposed as a common influence on the two measured variables.",
    "choiceExplanations": [
      "Parenting is proposed as a common influence on the two measured variables.",
      "That would ask whether game play affects aggression or aggression affects game preference.",
      "That would describe behavior changing because observation is noticed.",
      "That would concern consistency of the recorded scores."
    ],
    "misconception": "Introducing a common influence differs from reversing the direction between the original pair."
  },
  "correlation-q2": {
    "prompt": "Researchers cannot ethically assign a harmful exposure but want to examine its relationship with later outcomes. Why use correlational research?",
    "choices": [
      "It measures existing variation without imposing the exposure",
      "It removes alternative explanations through random allocation",
      "It replaces representative recruitment with a significance test",
      "It measures the outcome without quantifying the exposure"
    ],
    "explanation": "A measured association permits investigation within this ethical constraint.",
    "choiceExplanations": [
      "A measured association permits investigation within this ethical constraint.",
      "This design does not allocate the exposure and retains causal limitations.",
      "Inference cannot substitute for population coverage.",
      "Studying an association requires measurements of both variables."
    ],
    "misconception": "Correlation permits ethically constrained investigation while retaining causal uncertainty."
  },
  "experiment-q0": {
    "prompt": "Attitudes are compared between participants with preexisting high or low SES. No SES condition is assigned. In this course, which design is this?",
    "choices": [
      "Quasi-experiment with an attribute variable",
      "True experiment with a manipulated IV",
      "Naturalistic observation of moment-to-moment behavior",
      "Meta-analysis of study findings"
    ],
    "explanation": "The experiment-like group comparison uses existing SES rather than random allocation.",
    "choiceExplanations": [
      "The experiment-like group comparison uses existing SES rather than random allocation.",
      "The researcher did not assign SES as a manipulation.",
      "The stated procedure compares existing SES groups on recorded attitudes.",
      "Participants are compared directly rather than separate studies statistically combined."
    ],
    "misconception": "Two groups are insufficient for a true experiment when group membership is preexisting."
  },
  "experiment-q1": {
    "prompt": "Participants are randomly assigned to matched videos showing a male or female perpetrator. What is the assigned video condition?",
    "choices": [
      "Manipulated IV",
      "Participant attribute variable",
      "Measured DV",
      "Held-constant feature"
    ],
    "explanation": "The researcher controls which stimulus condition each participant receives.",
    "choiceExplanations": [
      "The researcher controls which stimulus condition each participant receives.",
      "The actor stimulus is assigned; participants’ own gender would be an attribute.",
      "The response to the video, rather than the assigned video, is the outcome.",
      "The actor condition differs between groups rather than being the same."
    ],
    "misconception": "An assigned stimulus is distinct from the viewer’s attribute and subsequent response."
  },
  "experiment-q2": {
    "prompt": "Which procedure defines an experimental test of an IV’s effect?",
    "choices": [
      "Manipulate the IV and measure a DV under controlled conditions",
      "Compare outcome scores in preexisting participant groups",
      "Measure two naturally varying characteristics",
      "Record ordinary behavior without intervening"
    ],
    "explanation": "The assigned manipulation and controlled outcome comparison support isolating its effect.",
    "choiceExplanations": [
      "The assigned manipulation and controlled outcome comparison support isolating its effect.",
      "That retains attribute-group differences rather than an assigned IV.",
      "That describes a correlational procedure.",
      "That describes naturalistic observation."
    ],
    "misconception": "An experiment manipulates a condition; observation or group comparison alone does not."
  },
  "experiment-q3": {
    "prompt": "A randomized study compares a new treatment with an established treatment. What role can the established treatment serve?",
    "choices": [
      "An active control providing a comparison baseline",
      "The measured dependent outcome",
      "An attribute-based grouping rule",
      "A random-sampling procedure"
    ],
    "explanation": "A control can be an established treatment rather than absence of treatment.",
    "choiceExplanations": [
      "A control can be an established treatment rather than absence of treatment.",
      "The treatment is a condition; response after treatment is the DV.",
      "Participants are allocated rather than grouped by a preexisting trait.",
      "Treatment allocation does not select people from a population."
    ],
    "misconception": "A valid control is an appropriate comparison condition, including an active one."
  },
  "operational-q0": {
    "prompt": "A researcher counts an infant’s reaches toward a puppet after presenting a display. How is the reaching count classified?",
    "choices": [
      "Behavioral DV",
      "Self-report DV",
      "Physiological DV",
      "Manipulated IV"
    ],
    "explanation": "The count records an observable infant action after presentation.",
    "choiceExplanations": [
      "The count records an observable infant action after presentation.",
      "The infant is not answering a verbal questionnaire about preference.",
      "No bodily or neural signal is the counted response.",
      "The presented display can be manipulated; the infant’s reaches are measured."
    ],
    "misconception": "A recorded action is the outcome, not a verbal report, bodily signal or assigned display."
  },
  "operational-q1": {
    "prompt": "Which DV is specified most reproducibly?",
    "choices": [
      "Number of phone slams recorded during a 10-minute task",
      "Number of phone slams recorded during the task",
      "An observer’s aggression rating during a 10-minute task",
      "Amount of phone slamming recorded during a 10-minute task"
    ],
    "explanation": "The response and observation interval give an explicit quantity to record.",
    "choiceExplanations": [
      "The response and observation interval give an explicit quantity to record.",
      "This leaves the observation interval unspecified.",
      "The time window is given, but the rating scale and scoring criteria are unspecified.",
      "The time window is given, but “amount” does not specify whether to record count, duration or intensity."
    ],
    "misconception": "A construct description is less precise than a response, unit and observation rule."
  },
  "operational-q2": {
    "prompt": "A researcher records amygdala activity using fMRI. Which measurement category applies?",
    "choices": [
      "Physiological",
      "Behavioral",
      "Self-report",
      "Attribute-based grouping"
    ],
    "explanation": "The procedure records brain activity.",
    "choiceExplanations": [
      "The procedure records brain activity.",
      "A scored overt action is not the stated response.",
      "Participants are not providing the fMRI signal as an answer.",
      "Brain activity is recorded as a response rather than used as an existing group label."
    ],
    "misconception": "Brain signals are physiological data, even when used to infer a mental process."
  },
  "quality-q0": {
    "prompt": "A questionnaire yields consistent anxiety scores but is used to assess depression. How should its quality for depression be described?",
    "choices": [
      "Reliable, with poor validity for the target",
      "Valid, with poor reliability",
      "Reliable and valid for the target",
      "Poor reliability and poor validity"
    ],
    "explanation": "Consistency is present, but the construct actually assessed differs from depression.",
    "choiceExplanations": [
      "Consistency is present, but the construct actually assessed differs from depression.",
      "This reverses the stable-score evidence and wrong-target concern.",
      "The advertised target is not established by consistently measuring anxiety.",
      "The scores are described as consistent, so lack of reliability is not the stated issue."
    ],
    "misconception": "Consistency and measurement of the intended construct are separate properties."
  },
  "quality-q1": {
    "prompt": "Researchers statistically combine findings from many studies of gender and mathematics performance. What is the method?",
    "choices": [
      "Meta-analysis",
      "Factor analysis",
      "Longitudinal study",
      "Case study"
    ],
    "explanation": "The analysis synthesizes evidence across studies.",
    "choiceExplanations": [
      "The analysis synthesizes evidence across studies.",
      "That seeks underlying clusters among correlated measures.",
      "That repeatedly follows the same participants.",
      "That intensively investigates one or a few cases."
    ],
    "misconception": "Study synthesis differs from measurement clustering and participant follow-up."
  },
  "quality-q2": {
    "prompt": "What is the main purpose of replicating a finding?",
    "choices": [
      "Test whether it recurs beyond the original study",
      "Determine whether questionnaire items agree",
      "Determine whether observers code behavior consistently",
      "Combine available published effects into one estimate"
    ],
    "explanation": "A repeated empirical test evaluates recurrence and possible limits.",
    "choiceExplanations": [
      "A repeated empirical test evaluates recurrence and possible limits.",
      "That is internal consistency, not the overall replication purpose.",
      "That is interrater reliability.",
      "That is meta-analysis rather than a new empirical test."
    ],
    "misconception": "Replication evaluates a finding’s recurrence, not every other form of consistency or synthesis."
  },
  "quality-q3": {
    "prompt": "Two observers independently code the same recorded actions and agree closely. Which reliability is evaluated?",
    "choices": [
      "Interrater",
      "Test–retest",
      "Internal consistency",
      "Inter-method"
    ],
    "explanation": "Agreement is compared across observers scoring the same records.",
    "choiceExplanations": [
      "Agreement is compared across observers scoring the same records.",
      "That compares occasions rather than observers.",
      "That compares related items within a test.",
      "That compares different approaches to measurement rather than these observers."
    ],
    "misconception": "Observer agreement should not be confused with agreement across occasions, items or approaches."
  },
  "research-text-q0": {
    "prompt": "A single starting cohort of adults completes a memory test each year for ten years. Which design is used?",
    "choices": [
      "Longitudinal",
      "Cross-sectional",
      "Mixed longitudinal",
      "Case study"
    ],
    "explanation": "Repeated observations of the same participants permit study of within-person change.",
    "choiceExplanations": [
      "Repeated observations of the same participants permit study of within-person change.",
      "That compares different age groups during one period rather than following these people.",
      "That follows several starting age groups; the stated procedure describes one group.",
      "This is repeated testing of a participant group, rather than an intensive investigation of a rare individual case."
    ],
    "misconception": "The defining feature is follow-up of the same people, not simply the duration of the project."
  },
  "research-text-q1": {
    "prompt": "Researchers use a sample to evaluate a claim about a population. Which statistical role is involved?",
    "choices": [
      "Inferential statistics",
      "Descriptive statistics",
      "Operational definition",
      "Random assignment"
    ],
    "explanation": "Inference uses sample evidence to evaluate claims extending to a population.",
    "choiceExplanations": [
      "Inference uses sample evidence to evaluate claims extending to a population.",
      "Description summarizes the observed sample without itself evaluating the population claim.",
      "That specifies the measurement procedure rather than the role of the statistical analysis.",
      "That allocates participants to conditions rather than evaluates a population claim from data."
    ],
    "misconception": "Summarizing a sample and evaluating claims beyond it are different statistical roles."
  },
  "research-text-q2": {
    "prompt": "A reviewed study uses justified deception. After participation, what procedure explains the deception and the study’s purpose?",
    "choices": [
      "Debriefing",
      "Initial informed consent",
      "Confidential data storage",
      "Independent replication"
    ],
    "explanation": "Debriefing provides the explanation withheld during participation.",
    "choiceExplanations": [
      "Debriefing provides the explanation withheld during participation.",
      "Initial consent occurs before the concealed information is explained in this scenario.",
      "Storage protects records but does not explain the deception to participants.",
      "A new study can check a result but does not fulfill this participant follow-up."
    ],
    "misconception": "Debriefing addresses what participants were led to believe and why the deception was used."
  },
  "research-text-q3": {
    "prompt": "A one-time test finds younger adults more proficient with a new technology. Which alternative to within-person aging is a cohort explanation?",
    "choices": [
      "The generations grew up with different technology exposure",
      "The scoring procedure produced inconsistent results on repeated administrations",
      "Participants changed their behavior when they noticed observation",
      "Advancing age directly reduced individuals’ technology ability"
    ],
    "explanation": "Generational experience can differ along with age; this comparison does not show within-person changes.",
    "choiceExplanations": [
      "Generational experience can differ along with age; this comparison does not show within-person changes.",
      "That would be a reliability problem rather than a generational-experience explanation.",
      "That would be participant reactivity rather than a cohort difference.",
      "That is the aging interpretation being contrasted with a generational-experience alternative."
    ],
    "misconception": "A cross-sectional age difference can reflect generation-specific experience rather than within-person aging."
  },
  "descriptive-stats-q0": {
    "prompt": "For the scores 2, 3, 3, 4, 18, which set of summaries is correct?",
    "choices": [
      "Median 3, mode 3, mean 6",
      "Median 3, mode 3, mean 3",
      "Median 4, mode 3, mean 6",
      "Median 3, mode 18, mean 6"
    ],
    "explanation": "The middle and most frequent score are 3; the total 30 divided by five gives a mean of 6.",
    "choiceExplanations": [
      "The middle and most frequent score are 3; the total 30 divided by five gives a mean of 6.",
      "This identifies the middle and most frequent score correctly but substitutes them for the arithmetic average.",
      "The mean and mode are correct, but the third score in the ordered set is 3, not 4.",
      "The median and mean are correct, but the largest score is not the most frequent score."
    ],
    "misconception": "The mean uses every value; the median uses ordered position; the mode uses frequency."
  },
  "descriptive-stats-q1": {
    "prompt": "A test distribution has mean 100 and SD 15. Which interval extends two SDs on each side of the mean?",
    "choices": [
      "70–130",
      "85–115",
      "55–145",
      "100–130"
    ],
    "explanation": "Two SDs equals 30 points, so the limits are 100−30 and 100+30.",
    "choiceExplanations": [
      "Two SDs equals 30 points, so the limits are 100−30 and 100+30.",
      "This extends one SD on each side.",
      "This extends three SDs on each side.",
      "This includes the upper two-SD portion but omits the corresponding lower portion."
    ],
    "misconception": "A two-SD interval uses twice the SD in both directions from the mean."
  },
  "descriptive-stats-q2": {
    "prompt": "Which correlation indicates the strongest linear association?",
    "choices": [
      "r = −.90",
      "r = +.30",
      "r = −.10",
      "r = 0"
    ],
    "explanation": "Its absolute magnitude .90 is greatest; the negative sign indicates direction.",
    "choiceExplanations": [
      "Its absolute magnitude .90 is greatest; the negative sign indicates direction.",
      "Its positive direction does not make magnitude .30 stronger than .90.",
      "Its inverse direction has a small absolute magnitude.",
      "Zero indicates no linear association and is weaker than the listed nonzero values."
    ],
    "misconception": "Linear strength depends on absolute magnitude rather than the sign of r."
  },
  "inference-q0": {
    "prompt": "A study reports p = .03. Which interpretation matches the definition of a p value?",
    "choices": [
      "If the null model holds, results at least this extreme have probability .03",
      "Given these data, the null hypothesis has probability .03 of being true",
      "The measured outcome has probability .03 of occurring in a participant",
      "The alternative hypothesis has probability .97 of being true"
    ],
    "explanation": "The probability concerns the data under the null model, including more extreme results.",
    "choiceExplanations": [
      "The probability concerns the data under the null model, including more extreme results.",
      "This reverses the conditioning; the p value is not a probability assigned to the hypothesis.",
      "The p value concerns a study statistic under a model, not the prevalence of an individual outcome.",
      "Subtracting p from one does not produce the probability that the alternative is true."
    ],
    "misconception": "A p value is a probability of data conditional on a model, not a posterior probability of a hypothesis."
  },
  "inference-q1": {
    "prompt": "A very large sample yields a small measured difference with p < .05. Which interpretation is justified?",
    "choices": [
      "The difference can meet the statistical threshold while having little practical importance",
      "The significance threshold establishes that the difference has substantial practical importance",
      "The large sample establishes that the effect extends to the general public",
      "The small difference prevents it from meeting a conventional significance threshold"
    ],
    "explanation": "Large samples can detect small effects; the size and context of the difference still matter.",
    "choiceExplanations": [
      "Large samples can detect small effects; the size and context of the difference still matter.",
      "The threshold concerns evidence under a null model, not the magnitude or usefulness of the effect.",
      "A large count does not establish representative recruitment or population-wide scope.",
      "A sufficiently precise estimate can produce a small p value despite a small effect."
    ],
    "misconception": "Statistical detectability and practical effect size answer different questions."
  },
  "ethics-q0": {
    "prompt": "Coded responses are linked to names in a secure file. Access is restricted to the research team. How should the data be described?",
    "choices": [
      "Identifiable, with disclosure restricted",
      "Unidentifiable, with disclosure restricted",
      "Identifiable, with disclosure unrestricted",
      "Unidentifiable, with disclosure unrestricted"
    ],
    "explanation": "Restricted access protects confidentiality; the name key still permits the team to identify respondents.",
    "choiceExplanations": [
      "Restricted access protects confidentiality; the name key still permits the team to identify respondents.",
      "Disclosure is restricted, but the name key still makes respondents identifiable.",
      "The identity link exists, but the secure restricted file does not describe public disclosure.",
      "This reverses both properties: a key permits identification, and access is restricted."
    ],
    "misconception": "An identity link prevents anonymity even when access is controlled."
  },
  "ethics-q1": {
    "prompt": "A suitable computer model replaces an animal procedure while answering the research question. Which of the three Rs applies most directly?",
    "choices": [
      "Replace",
      "Reduce",
      "Refine",
      "Replicate"
    ],
    "explanation": "A valid alternative is used instead of animals.",
    "choiceExplanations": [
      "A valid alternative is used instead of animals.",
      "Reduction decreases the number of animals still used; this procedure substitutes an alternative.",
      "Refinement improves welfare during an animal procedure; here the animal procedure is replaced.",
      "Replication repeats a research test; it is not the animal-care principle described here."
    ],
    "misconception": "Replacement changes the research means, whereas reduction and refinement modify continued animal use."
  },
  "pearson-q0": {
    "prompt": "Which variable did Pearson assign experimentally?",
    "choices": [
      "The label used to describe Mexican immigrants",
      "Participants’ actual immigration status",
      "Participants’ social dominance orientation",
      "The order of the outcome questionnaires"
    ],
    "explanation": "Participants received wording using “illegal aliens” or “undocumented workers.”",
    "choiceExplanations": [
      "Participants received wording using “illegal aliens” or “undocumented workers.”",
      "The manipulation described a target group; it did not change participants’ status.",
      "SDO was measured by questionnaire rather than assigned.",
      "The notes describe a common fixed order, not an assigned order comparison."
    ],
    "misconception": "The assigned wording is the IV; existing characteristics and recorded questionnaire scores are different variables."
  },
  "pearson-q1": {
    "prompt": "Which feature supports classifying Pearson’s label comparison as an experiment?",
    "choices": [
      "Random allocation to two assigned wording conditions",
      "Convenience recruitment of undergraduate psychology students",
      "Collection of self-reported attitudes",
      "Use of the same questionnaire order for participants"
    ],
    "explanation": "The investigator manipulated the wording and allocated participants to its levels.",
    "choiceExplanations": [
      "The investigator manipulated the wording and allocated participants to its levels.",
      "Recruitment describes the sample; it does not create the manipulation.",
      "Self-report can be used in experimental or observational research.",
      "A common order standardizes measurement but does not itself assign the IV."
    ],
    "misconception": "The label allocation, rather than the sample type or measurement format, provides experimental control."
  },
  "pearson-q2": {
    "prompt": "Which causal claim stays closest to Pearson’s manipulation, outcomes and sample?",
    "choices": [
      "Assigned wording affected measured self-reports in the undergraduate sample",
      "Assigned wording changed discriminatory actions in the undergraduate sample",
      "Measured threat caused prejudice independently of wording in the undergraduate sample",
      "Assigned wording affected measured self-reports throughout the adult population"
    ],
    "explanation": "Wording was manipulated and the outcomes were questionnaire responses in this sample.",
    "choiceExplanations": [
      "Wording was manipulated and the outcomes were questionnaire responses in this sample.",
      "Actions were not measured, so the experiment does not directly establish this behavioral effect.",
      "Threat was not separately assigned; mediation does not isolate its causal effect.",
      "The convenience undergraduate sample does not establish that population-wide extension."
    ],
    "misconception": "Causal scope must match the assigned variable, the measured response and the sample."
  },
  "pearson-q3": {
    "prompt": "Pearson reported 121 participants in one wording condition and 148 in the other. What follows from these counts alone?",
    "choices": [
      "They do not establish a failure of random assignment",
      "They establish assignment by a participant characteristic",
      "They establish that the labels were observed rather than assigned",
      "They establish representative sampling of the public"
    ],
    "explanation": "Random allocation can yield unequal realized group sizes.",
    "choiceExplanations": [
      "Random allocation can yield unequal realized group sizes.",
      "Unequal counts do not reveal a characteristic-based allocation rule.",
      "Condition counts do not determine whether an IV was manipulated.",
      "Condition sizes give no evidence about population recruitment."
    ],
    "misconception": "Random allocation need not produce equal counts, and counts do not reveal the recruitment method."
  },
  "pearson-q4": {
    "prompt": "Which model better accounted for Pearson’s wording-related difference in prejudice?",
    "choices": [
      "Integrated threat theory",
      "The instrumental competition model of group conflict",
      "Both models accounted for the wording effect equally well",
      "Neither model included variables relevant to the wording effect"
    ],
    "explanation": "Realistic threat, symbolic threat and stereotypes better accounted for the label difference.",
    "choiceExplanations": [
      "Realistic threat, symbolic threat and stereotypes better accounted for the label difference.",
      "Some competition-model relationships were supported, but it did not account for the label difference as well.",
      "The reported comparison favored the integrated threat account for this effect.",
      "The threat-model variables were related to and accounted for the reported label difference."
    ],
    "misconception": "Better explanation of the wording effect does not mean every competition-model relationship was unsupported."
  },
  "pearson-measures-q0": {
    "prompt": "What did Pearson’s feeling thermometer record?",
    "choices": [
      "Participants’ reported warmth toward Mexican immigrants",
      "Participants’ body temperature after reading the label",
      "Observed helping or discriminatory actions toward immigrants",
      "The speed of an implicit positive or negative response"
    ],
    "explanation": "Participants provided a 0–100 evaluation, which was reverse-coded as coldness.",
    "choiceExplanations": [
      "Participants provided a 0–100 evaluation, which was reverse-coded as coldness.",
      "“Thermometer” names a rating scale here, not a physiological instrument.",
      "The outcome was a reported evaluation, not a recorded action.",
      "No reaction-time procedure was used for this measure."
    ],
    "misconception": "The feeling thermometer is an explicit evaluative report, not bodily temperature, behavior or reaction time."
  },
  "pearson-measures-q1": {
    "prompt": "A questionnaire item describes immigrants’ gains in jobs as losses for one’s own group. Which construct does that gain–loss relation measure?",
    "choices": [
      "Zero-sum competition",
      "Realistic threat",
      "Symbolic threat",
      "Social dominance orientation"
    ],
    "explanation": "The central feature is treating one group’s gain as the other group’s loss.",
    "choiceExplanations": [
      "The central feature is treating one group’s gain as the other group’s loss.",
      "Resource concerns overlap, but this item specifically expresses the opposing gain–loss relation assessed by the competition measure.",
      "That concerns perceived conflict in values or morality rather than the gain–loss relation.",
      "That concerns preferences for group hierarchy rather than this competition belief."
    ],
    "misconception": "A zero-sum belief links the groups’ gains and losses, rather than merely naming a resource concern."
  },
  "pearson-measures-q2": {
    "prompt": "How did Pearson operationalize negative stereotypes?",
    "choices": [
      "Estimated percentages of the target group possessing listed qualities",
      "Reported frequency of emotions toward the target group",
      "Agreement with statements about conflict in values and morality",
      "Agreement with statements favoring group hierarchy"
    ],
    "explanation": "Participants selected percentage categories for qualities, with positive traits recoded.",
    "choiceExplanations": [
      "Participants selected percentage categories for qualities, with positive traits recoded.",
      "That was the attitudes measure.",
      "That was the symbolic-threat measure.",
      "That was the SDO measure."
    ],
    "misconception": "Trait-prevalence estimates differ from emotions, perceived values conflict and hierarchy preferences."
  },
  "pearson-measures-q3": {
    "prompt": "Why does Pearson’s mediation analysis provide weaker causal evidence for threat causing prejudice than for the assigned wording effect?",
    "choices": [
      "Threat scores were measured rather than independently randomized",
      "Wording conditions were not independently randomized",
      "Attitude scores were recorded after the assigned wording",
      "Both wording conditions used the same questionnaire sequence"
    ],
    "explanation": "The wording allocation does not also isolate the causal effect of the measured mediator.",
    "choiceExplanations": [
      "The wording allocation does not also isolate the causal effect of the measured mediator.",
      "The notes describe assigned wording; this is not the mediator limitation.",
      "Measuring the outcome after manipulation is compatible with testing its effect; the mediator’s nonrandomized status is the limitation.",
      "A common sequence does not provide independent causal control of threat."
    ],
    "misconception": "Randomizing an IV does not automatically randomize a mediator measured afterward."
  }
};
