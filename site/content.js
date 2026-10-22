const CONTENT = {
  "lessons": [
    {
      "id": "science",
      "unit": "Research methods",
      "title": "Observation, bias & the scientific method",
      "source": "Research Methods I · slides 12–27; assigned textbook notes · 2-1a–c",
      "body": [
        "Psychology uses systematic observations to test ideas. Unsystematic “hit or miss” observations overrepresent striking incidents, the people you happen to encounter, and the evidence you notice. A vivid anecdote is not a representative sample.",
        "Descriptive research records naturally occurring behavior without manipulating it. Naturalistic observation watches behavior in its usual setting; a case study investigates one person or a small group in depth; a survey collects answers from many people. These can describe patterns and generate hypotheses, but cannot establish causation.",
        "People may act differently when observed (the Hawthorne effect). Observers may notice dramatic behaviors more easily or interpret evidence to fit expectations (confirmation bias). Use predetermined observation rules, consistent coding, representative sampling, and patterns across data rather than isolated anecdotes. Conclusions remain tentative and open to revision.",
        "A theory organizes facts and relationships to explain observations and predict new ones. A hypothesis is a specific, testable prediction about variables. Peer review evaluates work before publication; replication tests whether findings recur. Preregistration and open methods/data help make scientific decisions inspectable.",
        "Critical thinking checks the claim, evidence, alternative explanations and the evidence that could distinguish them. Repetition, easy retrieval, pictures and prior beliefs can make an unsupported claim feel true. The textbook’s pen-in-mouth replication shows why even seemingly small changes, such as a camera, can matter."
      ],
      "terms": [
        {
          "term": "Naturalistic observation",
          "definition": "Observe behavior in its ordinary setting without intervention."
        },
        {
          "term": "Case study",
          "definition": "Detailed investigation of one person or a small number of cases; rich detail but limited generalizability."
        },
        {
          "term": "Survey",
          "definition": "Collect answers about attitudes or behavior from many participants; wording and sampling can bias results."
        },
        {
          "term": "Confirmation bias",
          "definition": "Favor evidence consistent with a belief and overlook contradictory evidence."
        },
        {
          "term": "Hawthorne effect",
          "definition": "Behavior changes because participants know they are being observed."
        },
        {
          "term": "Theory",
          "definition": "An organized explanation that relates facts and generates predictions."
        },
        {
          "term": "Hypothesis",
          "definition": "A specific testable prediction informed by evidence."
        },
        {
          "term": "Preregistration",
          "definition": "Record intended methods and analyses before knowing the results."
        }
      ],
      "recall": "You watch three noisy people at an immigration meeting and conclude everyone there is hostile. What went wrong, and how would you improve the study?",
      "answer": "Hit-or-miss observation and attention to noticeable behavior produce an unrepresentative picture. Define hostile behavior in advance, sample systematically, record all selected observations, and consider observer effects.",
      "questions": [
        {
          "prompt": "A researcher watches pedestrians using phones without intervening. Which method is this?",
          "choices": [
            "Naturalistic observation",
            "True experiment",
            "Meta-analysis",
            "Random assignment"
          ],
          "correct": 0,
          "explanation": "The researcher describes naturally occurring behavior without manipulation."
        },
        {
          "prompt": "Only recording examples that fit your prediction illustrates…",
          "choices": [
            "Confirmation bias",
            "Random sampling",
            "Replication",
            "Validity"
          ],
          "correct": 0,
          "explanation": "Confirmation bias selectively favors supporting evidence."
        },
        {
          "prompt": "A participant behaves unusually politely because a researcher is watching. This is…",
          "choices": [
            "A Hawthorne effect",
            "An independent variable",
            "A third-variable solution",
            "A meta-analysis"
          ],
          "correct": 0,
          "explanation": "Awareness of observation changes behavior."
        },
        {
          "prompt": "A researcher predicts that sleep deprivation will reduce tomorrow’s recall. This specific prediction is a…",
          "choices": [
            "Hypothesis",
            "Theory by itself",
            "Replication",
            "Population"
          ],
          "correct": 0,
          "explanation": "A hypothesis connects concrete variables in a testable prediction."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "descriptive",
      "unit": "Research methods",
      "title": "Cases, observation, surveys & representative samples",
      "source": "Assigned textbook notes · 2-2a",
      "body": [
        "Case studies investigate one or a few people in depth. H.M.’s memory impairment helped clarify memory systems, but one case cannot establish how all people behave or isolate a general cause. A counterexample can disprove a universal claim.",
        "Naturalistic observation systematically records behavior in its usual setting. Goodall’s observations challenged assumptions about chimpanzee diets. Being observed may change behavior; covert observation raises privacy issues. Surveys collect self-reports efficiently but depend on wording, honesty and sampling.",
        "A population is the group of interest; a sample is the subset studied. A very large convenience sample can still be biased. Anonymous respondents can still give socially desirable answers. Representative recruitment concerns generalization; random assignment concerns comparison between experimental conditions."
      ],
      "terms": [
        {
          "term": "Case study",
          "definition": "Detailed study of one or a few cases; useful for rare conditions and generating hypotheses."
        },
        {
          "term": "Naturalistic observation",
          "definition": "Systematically observe behavior in a natural setting."
        },
        {
          "term": "Social desirability",
          "definition": "Answering in a way that presents oneself favorably."
        },
        {
          "term": "Convenience sample",
          "definition": "Recruit people who are readily available; size alone does not make it representative."
        }
      ],
      "recall": "Ten thousand volunteers from one psychology course answer a survey. What remains uncertain?",
      "answer": "Whether the sample represents the target population. Recruitment from a narrow convenience population limits generalization despite large size.",
      "questions": [
        {
          "prompt": "Ten thousand volunteers from one psychology course answer a survey. What remains uncertain?",
          "choices": [
            "Whether the sample represents the target population",
            "Whether a large sample is ever useful",
            "Whether every respondent was randomly assigned",
            "Whether surveys must manipulate a treatment"
          ],
          "correct": 0,
          "explanation": "Recruitment from a narrow convenience population limits generalization despite large size."
        },
        {
          "prompt": "Which method best fits systematic observation of chimpanzees in the wild?",
          "choices": [
            "Naturalistic observation",
            "A randomized experiment",
            "A meta-analysis",
            "A laboratory case manipulation"
          ],
          "correct": 0,
          "explanation": "The researcher records behavior in its ordinary environment."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "correlation",
      "unit": "Research methods",
      "title": "Correlation: direction, strength & limits",
      "source": "Research Methods I · slides 29–37",
      "body": [
        "Correlational research measures two variables and asks whether they vary together. In the lecture’s terminology, both are measured dependent variables. In a scatterplot, each point represents one case’s pair of scores.",
        "A positive correlation means higher values of one variable tend to accompany higher values of the other. A negative correlation means higher values tend to accompany lower values. The sign describes direction, not quality. Strength depends on how tightly points cluster around a line: r ranges from −1 to +1, and values farther from 0 indicate stronger linear relationships.",
        "Correlation does not establish cause. Directionality: A could affect B or B could affect A. Third-variable problem: C could affect both. For violent-game play and aggression, parenting style might influence both. Correlation still supports predictions and is useful when manipulation would be unethical or impossible."
      ],
      "terms": [
        {
          "term": "Directionality problem",
          "definition": "A relationship alone cannot determine which variable causes the other."
        },
        {
          "term": "Third-variable problem",
          "definition": "Another variable could cause both measured variables."
        },
        {
          "term": "Correlation coefficient r",
          "definition": "A measure of direction and strength of a linear relationship, from −1 to +1."
        }
      ],
      "recall": "Is r = −0.8 weaker than r = +0.3? Explain without using the word “negative” to mean “bad.”",
      "answer": "No. −0.8 has the larger absolute value and is stronger. It is an inverse relationship; +0.3 is a weaker same-direction relationship.",
      "questions": [
        {
          "prompt": "Which correlation is strongest?",
          "choices": [
            "−0.90",
            "+0.40",
            "−0.15",
            "0.00"
          ],
          "correct": 0,
          "explanation": "Strength is based on absolute magnitude, so |−0.90| is largest."
        },
        {
          "prompt": "Children who play more violent games are more aggressive. Parenting influences both. This illustrates…",
          "choices": [
            "The third-variable problem",
            "Experimental control",
            "A negative correlation",
            "A valid causal inference"
          ],
          "correct": 0,
          "explanation": "A third variable could account for both measured outcomes."
        },
        {
          "prompt": "Why might a researcher use correlation rather than an experiment?",
          "choices": [
            "The variable cannot ethically be manipulated",
            "Correlation always proves causation",
            "No variables need to be measured",
            "Random assignment is guaranteed"
          ],
          "correct": 0,
          "explanation": "Correlation can investigate relationships that cannot be ethically manipulated."
        }
      ],
      "figure": null,
      "kind": "lecture"
    },
    {
      "id": "experiment",
      "unit": "Research methods",
      "title": "True experiments vs. attribute variables",
      "source": "Research Methods II · slides 6–21; assigned textbook notes · 2-2c",
      "body": [
        "An independent variable (IV) is deliberately manipulated; a dependent variable (DV) is measured as the outcome. Holding other factors constant and randomly assigning participants to conditions helps isolate the IV’s effect. Random assignment gives each participant in the sample an equal chance of entering any treatment group.",
        "Use the random assignment test: could these participants be assigned to the proposed conditions? You can assign positive vs. negative refugee photographs. You cannot assign their existing socioeconomic status (SES). SES is an attribute variable (AV): a preexisting characteristic. Comparing AV groups is a quasi-experiment in this course and does not justify a causal claim because other group differences remain.",
        "An experiment is not defined by having a control group. Two different active treatments can form an experiment. Also distinguish the actor’s gender in a randomly assigned crime video (a manipulable stimulus condition) from the participant’s own gender (an attribute). Random sampling selects who enters a study; random assignment allocates people already in the sample.",
        "A control condition can use a baseline, no treatment, a nonviolent game or an established treatment. It does not have to be an untreated group. A quasi-experiment lacks random assignment, so program eligibility or existing groups can differ in additional ways. Random assignment reduces systematic differences; it does not guarantee identical groups.",
        "The textbook’s violent-game experiment measures chosen noise punishment after play. If only one group is tested in a hot room, heat is confounded with game content. A causal conclusion concerns the actual manipulation and measured outcome; extrapolating to real-world shootings requires further evidence."
      ],
      "terms": [
        {
          "term": "IV",
          "definition": "A manipulated variable defining experimental conditions."
        },
        {
          "term": "DV",
          "definition": "A measured outcome."
        },
        {
          "term": "Attribute variable",
          "definition": "A participant characteristic that is not experimentally assigned."
        },
        {
          "term": "Random assignment",
          "definition": "Allocation to conditions by chance; reduces preexisting group differences."
        },
        {
          "term": "Random sampling",
          "definition": "Selection from a population; supports representativeness, rather than causal control."
        },
        {
          "term": "Quasi-experiment",
          "definition": "An experiment-like comparison without random assignment."
        }
      ],
      "recall": "Participants randomly see a male or female actor in a crime video. Is the actor’s gender an IV or an AV? What if the groups are defined by participants’ gender?",
      "answer": "The assigned video condition is a true IV. The participants’ own gender is an AV because it cannot be randomly assigned.",
      "questions": [
        {
          "prompt": "Comparing attitudes of high-SES and low-SES participants is…",
          "choices": [
            "A quasi-experiment using an attribute variable",
            "A true experiment solely because there are two groups",
            "Random assignment of SES",
            "A meta-analysis"
          ],
          "correct": 0,
          "explanation": "Existing SES is an attribute, with potentially confounded group differences."
        },
        {
          "prompt": "Participants are randomly assigned to videos of a male or female perpetrator. The assigned video is…",
          "choices": [
            "A manipulated IV",
            "A participant attribute variable",
            "The DV",
            "A correlation coefficient"
          ],
          "correct": 0,
          "explanation": "The researcher controls which stimulus each participant receives."
        },
        {
          "prompt": "Which statement defines an experiment correctly?",
          "choices": [
            "Manipulate an IV and measure its effects under controlled conditions",
            "Always include a no-treatment control group",
            "Measure two existing variables",
            "Use only physiological measures"
          ],
          "correct": 0,
          "explanation": "Control groups can help, but manipulation and control define the method."
        },
        {
          "prompt": "An established treatment is compared with a new one. Can the established treatment be a control?",
          "choices": [
            "Yes; it provides a relevant comparison baseline",
            "No; every control must receive nothing",
            "Only if the DV is not measured",
            "Only if assignment is nonrandom"
          ],
          "correct": 0,
          "explanation": "A control is an appropriate comparison, not necessarily no treatment."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "operational",
      "unit": "Research methods",
      "title": "Operational definitions & measuring hidden concepts",
      "source": "Research Methods II · slides 22–30",
      "body": [
        "An operational definition specifies exactly how a variable is manipulated or measured so another researcher can reproduce it. “Aggression” is a concept; the number of doll hits in five minutes is an operational measure. An IV also needs a precise operational definition, such as the exact video and instructions used.",
        "The lecture divides DV measures into physiological (body/brain activity), behavioral (observable actions), and self-report (participants’ own answers). Aggression examples: amygdala activity on fMRI, Bobo-doll hits, and a questionnaire. Ethical laboratory proxies include noise blasts, hot-sauce allocation, or phone slamming. A proxy needs evidence of validity; it is not automatically identical to real-world aggression.",
        "Infants and animals cannot give ordinary verbal questionnaires. Use looking time, reaching or choosing, approach/avoidance, or physiological responses. In the infant and primate videos, identify the actual recorded response, not just the mental ability the researchers hope to infer."
      ],
      "terms": [
        {
          "term": "Operational definition",
          "definition": "A reproducible specification of how a variable is manipulated or quantified."
        },
        {
          "term": "Physiological measure",
          "definition": "Record a bodily or neural response, such as heart rate or fMRI activity."
        },
        {
          "term": "Behavioral measure",
          "definition": "Quantify actions, such as choice, looking time, or number of hits."
        },
        {
          "term": "Self-report measure",
          "definition": "Ask participants to report their experiences or attitudes."
        }
      ],
      "recall": "Create one physiological, behavioral, and self-report measure of test anxiety.",
      "answer": "Physiological: heart rate during a standardized test. Behavioral: number of avoidance behaviors or time before starting. Self-report: score on a specified anxiety scale. Specify timing and scoring for reproducibility.",
      "questions": [
        {
          "prompt": "Counting how often an infant reaches for one puppet is a…",
          "choices": [
            "Behavioral operational definition",
            "Self-report measure",
            "Manipulated physiological variable",
            "Meta-analysis"
          ],
          "correct": 0,
          "explanation": "Reaching is an observable response."
        },
        {
          "prompt": "Which is the most operationally precise DV?",
          "choices": [
            "Number of phone slams during a 10-minute task",
            "How aggressive participants are",
            "Whether they seem angry",
            "Their general personality"
          ],
          "correct": 0,
          "explanation": "A count and time window make the measure reproducible."
        },
        {
          "prompt": "Recording amygdala activity on fMRI is classified as…",
          "choices": [
            "Physiological",
            "Behavioral",
            "Self-report",
            "Random sampling"
          ],
          "correct": 0,
          "explanation": "It measures neural activity rather than overt action or an answer."
        }
      ],
      "figure": null,
      "kind": "lecture"
    },
    {
      "id": "quality",
      "unit": "Research methods",
      "title": "Reliability, validity, replication & meta-analysis",
      "source": "Research Methods II · slides 31–36; assigned textbook notes · 2-3a; 2-2c",
      "body": [
        "Reliability is consistency: does a measure give stable results when the underlying thing has not changed? Test–retest reliability checks scores at different times. Validity is whether the measure actually assesses the intended construct. A questionnaire could consistently measure anxiety while being advertised as a depression test: reliable, but not valid for depression.",
        "Replication asks whether a result can be obtained again. One study can be affected by chance, sample differences, measurement problems, or procedures; repeated findings strengthen confidence. Scientific claims stay tentative rather than becoming absolute after one successful experiment.",
        "A meta-analysis statistically combines findings across studies addressing a common question to estimate an overall pattern. It is not simply a bigger new experiment or a narrative summary. Different studies may use different samples and measures; the quality and comparability of the included studies affect the conclusion.",
        "Other reliability types are interrater (observers agree), internal consistency (related test items agree) and inter-method (different approaches agree). The textbook uses SAT–grade correspondence as an inter-method reliability example. Its target figure calls spread-out but average-centered hits “validity without reliability”; keep this average-accuracy framing distinct from consistently useful individual measurement.",
        "Publication bias can hide null findings in a file drawer, distorting a meta-analysis. Study quality and comparable measures matter. Failed replications invite examination of methods, context and samples rather than automatic dismissal or acceptance."
      ],
      "terms": [
        {
          "term": "Reliability",
          "definition": "Consistency of measurement."
        },
        {
          "term": "Validity",
          "definition": "Measuring the intended construct."
        },
        {
          "term": "Replication",
          "definition": "Repeat a study or test its finding again."
        },
        {
          "term": "Meta-analysis",
          "definition": "Statistically combine results of multiple studies addressing a related question."
        },
        {
          "term": "Interrater reliability",
          "definition": "Agreement across observers."
        },
        {
          "term": "Internal consistency",
          "definition": "Agreement among related items within a test."
        },
        {
          "term": "Publication bias",
          "definition": "The published evidence can overrepresent significant findings."
        }
      ],
      "recall": "A scale always adds 5 kg. Is it reliable, valid, both, or neither?",
      "answer": "It can be reliable because its error is consistent, but its displayed weight is not accurate. Use the analogy to distinguish consistent measurement from measuring the intended thing correctly.",
      "questions": [
        {
          "prompt": "A depression questionnaire consistently measures anxiety. For depression it is…",
          "choices": [
            "Reliable but invalid",
            "Valid but unreliable",
            "Both reliable and valid",
            "Neither, because consistency is impossible"
          ],
          "correct": 0,
          "explanation": "Consistency does not establish construct validity."
        },
        {
          "prompt": "Statistically combining many studies of gender and mathematical ability is…",
          "choices": [
            "A meta-analysis",
            "A case study",
            "Random assignment",
            "An operational definition"
          ],
          "correct": 0,
          "explanation": "A meta-analysis analyzes study results together."
        },
        {
          "prompt": "Why replicate?",
          "choices": [
            "To test whether a finding holds beyond one study",
            "To turn correlation into causation automatically",
            "To guarantee every measure is valid",
            "To eliminate the need for statistics"
          ],
          "correct": 0,
          "explanation": "Replication checks robustness of tentative results."
        },
        {
          "prompt": "Two observers independently code the same behavior and agree closely. Which reliability is tested?",
          "choices": [
            "Interrater",
            "Test–retest",
            "Random sampling",
            "Statistical significance"
          ],
          "correct": 0,
          "explanation": "Agreement between observers is interrater reliability."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "research-text",
      "unit": "Research methods",
      "title": "Time, statistics & research ethics",
      "source": "Assigned textbook notes · 2-2d; 2-3; 2-4",
      "body": [
        "Longitudinal research follows the same people over time. Cross-sectional research compares different age groups at one time and can confuse age with cohort differences. Mixed longitudinal research follows several age groups over a shorter interval; the textbook commonly uses about five years. It combines approaches, but expense and dropout remain.",
        "Descriptive statistics summarize observed scores; inferential statistics assess claims beyond those observations. A statistically significant finding need not be large or important. The next lessons let you practice distributions, p values and research ethics separately.",
        "Human research requires voluntary participation, appropriate consent, minimized harm, privacy safeguards and ethical review. Justified deception requires debriefing. Animal studies require humane care and oversight. An informative design is not automatically an ethically permissible design."
      ],
      "terms": [
        {
          "term": "Longitudinal design",
          "definition": "Track the same participants over time."
        },
        {
          "term": "Cross-sectional design",
          "definition": "Compare different groups at one time; cohort differences may confound age differences."
        },
        {
          "term": "Descriptive statistics",
          "definition": "Summarize observed scores and their distribution."
        },
        {
          "term": "Inferential statistics",
          "definition": "Use sample results to assess claims about a population."
        },
        {
          "term": "Debriefing",
          "definition": "Explain the study after participation, including any justified deception."
        },
        {
          "term": "Cohort effect",
          "definition": "Differences due to growing up in different historical/cultural circumstances."
        },
        {
          "term": "Mixed longitudinal design",
          "definition": "Follow several age groups for a shorter interval, combining cross-sectional and longitudinal approaches."
        },
        {
          "term": "Attrition",
          "definition": "Participant dropout, which can alter the representativeness of those remaining."
        }
      ],
      "recall": "You compare today’s 20-year-olds with today’s 70-year-olds. Why can’t you assume every difference is caused by aging?",
      "answer": "The groups belong to different cohorts and may have different life experiences. A cross-sectional comparison confounds age and cohort.",
      "questions": [
        {
          "prompt": "Tracking the same participants yearly for a decade is…",
          "choices": [
            "Longitudinal",
            "Cross-sectional",
            "A case-control manipulation",
            "A meta-analysis"
          ],
          "correct": 0,
          "explanation": "Repeated measurement of the same people tracks change."
        },
        {
          "prompt": "What is the primary role of inferential statistics?",
          "choices": [
            "Assess population claims using sample data",
            "Only calculate the sample mean",
            "Define an IV",
            "Guarantee practical importance"
          ],
          "correct": 0,
          "explanation": "Inference goes beyond descriptive summaries."
        },
        {
          "prompt": "A researcher uses justified deception. Which follow-up is essential?",
          "choices": [
            "Debrief participants",
            "Prevent withdrawal",
            "Publish identities",
            "Skip ethical review"
          ],
          "correct": 0,
          "explanation": "Debriefing explains what happened and why."
        },
        {
          "prompt": "A one-time comparison finds younger adults better at a new technology. Why is aging not established as the cause?",
          "choices": [
            "Age is confounded with cohort experience",
            "All cross-sectional measures are random assignments",
            "Older adults must have been followed from childhood",
            "A sample can never reveal group differences"
          ],
          "correct": 0,
          "explanation": "Generations grew up with different technologies; the design does not show within-person aging."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "descriptive-stats",
      "unit": "Research methods",
      "title": "Distributions, averages & standard deviation",
      "source": "Assigned textbook notes · 2-3b",
      "body": [
        "A frequency distribution or histogram shows how often scores occur. Mean = sum divided by number; median = middle of ordered scores; mode = most frequent. Outliers pull the mean more strongly than the median. A bimodal distribution has two high-frequency peaks that one average can conceal.",
        "Standard deviation describes spread around the mean: small SD means tighter clustering. A normal distribution is symmetric with most observations near the center. The textbook uses about 68%, 95% and rounded 99% within one, two and three SDs; the usual more precise three-SD approximation is 99.7%.",
        "On an IQ scale with mean 100 and SD 15, one SD spans 85–115 and two SDs span 70–130. Correlation ranges from −1 to +1: absolute magnitude is strength and sign is direction. −.90 is stronger than +.30; −1 and +1 are equally strong."
      ],
      "terms": [
        {
          "term": "Mean",
          "definition": "Sum of values divided by number of values; sensitive to extreme scores."
        },
        {
          "term": "Median",
          "definition": "Middle of ordered scores."
        },
        {
          "term": "Mode",
          "definition": "Most frequent value; distributions may have multiple modes."
        },
        {
          "term": "Standard deviation",
          "definition": "Spread of scores around their mean."
        },
        {
          "term": "Bimodal distribution",
          "definition": "A distribution with two high-frequency peaks."
        }
      ],
      "recall": "Scores are 2, 3, 3, 4, 18. Which description is correct?",
      "answer": "Median 3, mode 3, mean 6. The total is 30 across five scores; the ordered middle and most frequent value are both 3.",
      "questions": [
        {
          "prompt": "Scores are 2, 3, 3, 4, 18. Which description is correct?",
          "choices": [
            "Median 3, mode 3, mean 6",
            "Median 6, mode 18, mean 3",
            "Median 4, mode 3, mean 18",
            "Median 3, mode 4, mean 5"
          ],
          "correct": 0,
          "explanation": "The total is 30 across five scores; the ordered middle and most frequent value are both 3."
        },
        {
          "prompt": "With mean 100 and SD 15, which interval is within two SDs?",
          "choices": [
            "70–130",
            "85–115",
            "50–150",
            "95–105"
          ],
          "correct": 0,
          "explanation": "Two SDs is 30 points on either side of 100."
        },
        {
          "prompt": "Which association is strongest?",
          "choices": [
            "r = −.90",
            "r = +.30",
            "r = −.10",
            "r = 0"
          ],
          "correct": 0,
          "explanation": "Strength depends on absolute magnitude, not whether the sign is positive."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "inference",
      "unit": "Research methods",
      "title": "P values, significance & factor analysis",
      "source": "Assigned textbook notes · 2-3c",
      "body": [
        "The null hypothesis posits no underlying difference or relationship. A p value is the probability of a result at least as extreme as the observed result, assuming the null model is true. It is not the probability the null is true, the size of an effect, or the fraction of people affected.",
        "The textbook describes the conventional .05 threshold and a proposed .005 threshold for new discoveries. The proposal is not a new course requirement. Rejecting a null does not prove a particular explanation. A huge sample can make a tiny effect statistically significant; practical importance requires examining magnitude and context.",
        "Inferential statistics cannot repair unrepresentative recruitment. Factor analysis finds clusters underlying correlated measurements; Spearman developed it in intelligence research. It is different from calculating one mean, assigning conditions, or combining studies in a meta-analysis."
      ],
      "terms": [
        {
          "term": "Null hypothesis",
          "definition": "No underlying difference or relationship in the model being tested."
        },
        {
          "term": "P value",
          "definition": "Probability of data at least as extreme as observed, conditional on the null model."
        },
        {
          "term": "Statistical significance",
          "definition": "A finding meets the selected statistical criterion; this does not establish practical importance."
        },
        {
          "term": "Factor analysis",
          "definition": "Identify underlying clusters among many related measures."
        }
      ],
      "recall": "A study reports p = .03. What does it mean?",
      "answer": "Under the null model, results at least this extreme have probability .03. A p value is conditional on a model, not a posterior probability or effect size.",
      "questions": [
        {
          "prompt": "A study reports p = .03. What does it mean?",
          "choices": [
            "Under the null model, results at least this extreme have probability .03",
            "The null hypothesis has a 3% probability of being true",
            "The effect changes 3% of participants",
            "The effect must be large"
          ],
          "correct": 0,
          "explanation": "A p value is conditional on a model, not a posterior probability or effect size."
        },
        {
          "prompt": "A huge sample yields a tiny effect with p < .05. What conclusion is justified?",
          "choices": [
            "It can be statistically significant while practically small",
            "It must be important in everyday life",
            "It proves every participant changed",
            "It makes sample recruitment irrelevant"
          ],
          "correct": 0,
          "explanation": "Sample size influences detectability; effect size and context determine importance."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "ethics",
      "unit": "Research methods",
      "title": "Consent, confidentiality & the three Rs",
      "source": "Assigned textbook notes · 2-4a–b",
      "body": [
        "Institutional review boards (IRBs) review human-participant research; IACUCs review animal research. Participation must be voluntary, with appropriate consent and the opportunity to withdraw. People unable to legally consent require suitable guardian permission and extra review. Minimize harm; justify deception and explain it during debriefing.",
        "Privacy is control over sharing personal information. Confidentiality restricts disclosure and protects stored identifiable data. Anonymity means even the researchers cannot link responses to identity. Codes can protect confidentiality without making data anonymous.",
        "The animal-research three Rs are reduce the number used, replace animals when alternatives answer the question, and refine methods to minimize suffering. Good housing, nutrition and veterinary care matter. Tuskegee illustrates failures of consent and care; the Facebook newsfeed study illustrates concerns about explicit research consent."
      ],
      "terms": [
        {
          "term": "IRB",
          "definition": "Committee reviewing human-participant research."
        },
        {
          "term": "IACUC",
          "definition": "Committee reviewing animal research."
        },
        {
          "term": "Privacy",
          "definition": "Control over sharing personal information."
        },
        {
          "term": "Confidentiality",
          "definition": "Protect identifiable data from unauthorized disclosure."
        },
        {
          "term": "Anonymity",
          "definition": "Researchers cannot link a response to an identity."
        },
        {
          "term": "Three Rs",
          "definition": "Reduce numbers, replace animals where possible, refine methods to minimize suffering."
        }
      ],
      "recall": "Names are stored in a secure file linked to coded responses. Are the responses anonymous?",
      "answer": "No; they can be confidential but still identifiable. If researchers can reconstruct identity, data are not anonymous.",
      "questions": [
        {
          "prompt": "Names are stored in a secure file linked to coded responses. Are the responses anonymous?",
          "choices": [
            "No; they can be confidential but still identifiable",
            "Yes; every coded response is anonymous",
            "Yes; security removes the identity link",
            "No; confidentiality requires publishing names"
          ],
          "correct": 0,
          "explanation": "If researchers can reconstruct identity, data are not anonymous."
        },
        {
          "prompt": "Replacing an animal procedure with a valid computer model illustrates…",
          "choices": [
            "Replace",
            "Reduce only",
            "Refine only",
            "Debrief"
          ],
          "correct": 0,
          "explanation": "Replacement uses a suitable alternative to animals."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "pearson",
      "unit": "Research methods",
      "title": "Pearson (2010): wording, assignment & outcomes",
      "source": "Pearson (2010), Social Influence 5(2), 118–132 · methods pp. 121–125; discussion pp. 127–130; Research Methods II · slides 37–40",
      "body": [
        "Matthew R. Pearson asked how the labels “undocumented workers” and “illegal aliens” affect prejudice toward Mexican immigrants, and whether perceived threat or perceived competition better explains the wording effect. Both conditions concerned Mexican immigrants; actual immigration status was not experimentally changed.",
        "The 269 undergraduate psychology participants (67 men, 202 women) were randomly assigned to wording: 121 saw “illegal aliens” and 148 saw “undocumented workers.” Twenty-four participated in the lab and 245 online. This is a convenience sample, not random sampling of the public. Unequal condition sizes do not prevent random assignment.",
        "After a common introduction about Mexican immigrants, the assigned label appeared throughout the questionnaires. Measure order stayed the same: negative stereotypes, negative attitudes, social dominance orientation, symbolic threat, realistic threat, zero-sum beliefs, emotional thermometer, demographics. Participants could withdraw and were debriefed about the hypotheses afterward.",
        "The manipulated IV was wording with two levels. Outcomes and proposed mediators were self-reports, including a feeling thermometer: it measures reported warmth/coldness, not body temperature. The next lesson supplies the scales and example operationalizations. Random assignment to wording makes this an experiment despite using questionnaires and no neutral-wording condition.",
        "The “illegal aliens” condition reported more negative attitudes and emotional coldness, and greater realistic threat, symbolic threat and negative stereotypes. Wording did not significantly predict social dominance orientation or zero-sum competition beliefs. Integrated threat theory explained the label effect more completely than the competition model.",
        "Causal inference is strongest for assigned wording’s effect on measured self-reports. The mediators were measured rather than independently manipulated, so mediation does not establish a causal mechanism by itself. Results do not directly establish discrimination, implicit prejudice, or effects in the general population. The author also noted that the two labels might evoke different mental representations or subgroups."
      ],
      "terms": [
        {
          "term": "Pearson: established from slides",
          "definition": "Research question: how language affects perceptions of immigrants; now checked against the full paper."
        },
        {
          "term": "Pearson: verified methods",
          "definition": "Randomly assigned wording; 269 psychology undergraduates; self-report measures."
        },
        {
          "term": "Pearson IV",
          "definition": "Assigned label: “illegal aliens” versus “undocumented workers.”"
        },
        {
          "term": "Pearson sample",
          "definition": "Convenience sample of 269 undergraduates; random assignment is separate from sampling."
        },
        {
          "term": "Pearson main finding",
          "definition": "“Illegal aliens” wording produced more reported prejudice; threat variables explained the label effect better than competition variables."
        }
      ],
      "recall": "Why is Pearson an experiment, and what limits the causal conclusion?",
      "answer": "Wording was manipulated and randomly assigned. The causal conclusion concerns label effects on reported attitudes in the tested context; sampling limits generalization, and measured mediators do not independently prove causal mechanisms.",
      "questions": [
        {
          "prompt": "What did Pearson manipulate?",
          "choices": [
            "The label used for Mexican immigrants",
            "Participants’ actual immigration status",
            "Participants’ gender",
            "The amount of dopamine released"
          ],
          "correct": 0,
          "explanation": "The two IV levels were “illegal aliens” and “undocumented workers.”"
        },
        {
          "prompt": "Why is the Pearson study experimental?",
          "choices": [
            "Participants were randomly assigned to manipulated wording conditions",
            "It used a representative national sample",
            "Every variable was manipulated",
            "Questionnaires always make a study experimental"
          ],
          "correct": 0,
          "explanation": "Random assignment plus a manipulated IV distinguishes an experiment from an observational group comparison."
        },
        {
          "prompt": "Which generalization is justified most cautiously?",
          "choices": [
            "Wording affected measured self-reports in this undergraduate sample",
            "The label caused discriminatory behavior across the whole country",
            "Threat was independently manipulated and proved causal",
            "The sample was randomly selected from all adults"
          ],
          "correct": 0,
          "explanation": "The outcomes were self-reported, the sample was convenient, and threat was measured."
        },
        {
          "prompt": "Pearson’s groups had 121 and 148 people. What does this imply?",
          "choices": [
            "Unequal size alone does not invalidate random assignment",
            "The researcher necessarily assigned by personality",
            "The study was necessarily correlational",
            "There must have been random sampling of the public"
          ],
          "correct": 0,
          "explanation": "Random assignment does not require exactly equal realized group sizes."
        },
        {
          "prompt": "Which model better explained the wording effect?",
          "choices": [
            "Integrated threat theory",
            "The instrumental competition model alone",
            "A model based on hearing thresholds",
            "No model considered threat"
          ],
          "correct": 0,
          "explanation": "Realistic/symbolic threat and stereotypes explained the label effect more completely; competition still had other supported relationships."
        }
      ],
      "figure": null,
      "kind": "reading"
    },
    {
      "id": "pearson-measures",
      "unit": "Research methods",
      "title": "Pearson: operational definitions & mediation",
      "source": "Assigned textbook notes · Pearson (2010) · pp. 121–130",
      "body": [
        "Realistic threat used 12 items on a 10-point disagreement–agreement scale about resources and material consequences. Symbolic threat used 12 items on a 10-point scale about values, morals and compatibility. Reverse-scored items ensured higher scores represented more threat.",
        "Negative stereotypes rated the estimated percentage possessing 12 qualities using ten percentage categories (0–10% through 90–100%); positive traits were recoded. Negative attitudes rated 11 emotions on a five-point frequency scale from almost never to almost always, with positive emotions recoded toward greater negativity.",
        "Social dominance orientation (SDO) used 16 items on a seven-point scale about group hierarchy/inequality. Zero-sum competition used four items on a seven-point agreement scale: gains for one group mean losses for another in jobs, housing, economics or politics. The feeling thermometer used 0–100 reported warmth, reverse-coded as emotional coldness. All were self-reports.",
        "Integrated threat theory (ITT) used realistic threat, symbolic threat and negative stereotypes. Together they statistically partially mediated negative attitudes and fully mediated emotional coldness. Negative stereotypes alone did not significantly mediate coldness. “Full” mediation describes a nonsignificant remaining direct effect in this model, not proof that every mechanism is known.",
        "The instrumental model of group conflict (IMGC) considered SDO and zero-sum competition. It supported SDO–competition–prejudice relationships, yet wording did not significantly predict either competition variable. Thus the study did not reject all competition theory: ITT better accounted for why these two labels differed. Cross-sectional self-report mediation and restricted recruitment remain limitations."
      ],
      "terms": [
        {
          "term": "Realistic threat",
          "definition": "Perceived material/resource threats; 12 items, 10-point agreement scale."
        },
        {
          "term": "Symbolic threat",
          "definition": "Perceived threats to values/morals; 12 items, 10-point agreement scale."
        },
        {
          "term": "Negative stereotypes",
          "definition": "Estimated prevalence of 12 qualities in percentage categories; higher recoded scores mean more negativity."
        },
        {
          "term": "Negative attitudes",
          "definition": "Frequency of 11 emotions on a five-point scale, recoded toward negativity."
        },
        {
          "term": "Emotional coldness",
          "definition": "Reverse-coded 0–100 self-reported feeling thermometer."
        },
        {
          "term": "Social dominance orientation",
          "definition": "Endorsement of group hierarchy/inequality; 16 items, seven-point scale."
        },
        {
          "term": "Zero-sum competition",
          "definition": "Belief that another group’s gains imply one’s losses; four items, seven-point scale."
        },
        {
          "term": "Mediation",
          "definition": "A model linking an IV to an outcome through a proposed intermediate variable; measured mediation alone does not prove causation."
        }
      ],
      "recall": "Pearson’s feeling thermometer measures…",
      "answer": "Reported warmth/coldness toward the group. It is a 0–100 self-report measure, reverse-coded as coldness.",
      "questions": [
        {
          "prompt": "Pearson’s feeling thermometer measures…",
          "choices": [
            "Reported warmth/coldness toward the group",
            "Body temperature after reading a label",
            "Observable discriminatory acts",
            "An implicit reaction-time association"
          ],
          "correct": 0,
          "explanation": "It is a 0–100 self-report measure, reverse-coded as coldness."
        },
        {
          "prompt": "“Their gains in jobs are our losses” operationalizes…",
          "choices": [
            "Zero-sum competition",
            "Symbolic values threat only",
            "Test–retest reliability",
            "A randomly assigned status"
          ],
          "correct": 0,
          "explanation": "Zero-sum beliefs treat gains and losses between groups as opposing."
        },
        {
          "prompt": "Which was a negative-stereotype measure?",
          "choices": [
            "Estimated percentages possessing particular qualities",
            "Actual arrest counts recorded by police",
            "Finger temperature measured by an electrode",
            "Whether participants chose to hire a person"
          ],
          "correct": 0,
          "explanation": "Participants rated prevalence of qualities; no behavioral or physiological stereotype measure was used."
        },
        {
          "prompt": "Why does statistical mediation not independently prove that threat caused prejudice?",
          "choices": [
            "Threat itself was measured, not randomly manipulated",
            "No wording condition was manipulated",
            "Every mediator was a biological measure",
            "Mediation means the study had no IV"
          ],
          "correct": 0,
          "explanation": "The randomized wording effect and the causal interpretation of measured mediators have different evidential strength."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "brain-methods",
      "unit": "Brain & behavior",
      "title": "Studying the brain & its major divisions",
      "source": "Brain and Behavior I · slides 4–10; assigned textbook notes · 4-1a–b",
      "body": [
        "Brain-damage evidence relates lost or changed abilities to injured structures. Lesions, stroke and traumatic brain injury can reveal what a region contributes. Interpretation requires care: damage may affect multiple regions or connections, and the brain can reorganize.",
        "fMRI tracks blood-oxygen changes associated with activity; PET uses a radioactive tracer to map metabolism or related processes. These are indirect measures of function. Structural scans show anatomy; EEG records electrical patterns useful for timing and sleep stages. Activity associated with a task does not by itself prove one region is the task’s sole cause.",
        "The spinal cord is part of the CNS and can coordinate reflexes without a command from the brain. Brainstem structures support survival. The cerebellum coordinates movement. Subcortical structures contribute drives, emotion, movement, and memory. The cerebral cortex supports complex mental activity; these systems cooperate.",
        "Contemporary methods differ in what they record or change: ERP averages EEG responses tied to events; single-cell recording samples individual neurons; MEG records magnetic signals; histology examines microscopic structure; skin conductance indexes arousal. Optogenetics uses light-sensitive neurons; TMS changes activity using magnetic stimulation. Choose a method for the question rather than calling every brain study imaging."
      ],
      "terms": [
        {
          "term": "fMRI",
          "definition": "Functional imaging based on blood-oxygen changes associated with neural activity."
        },
        {
          "term": "PET",
          "definition": "Functional imaging using a tracer; can reveal metabolism and related activity."
        },
        {
          "term": "EEG",
          "definition": "Electrical activity recorded at the scalp; useful for wave patterns and timing."
        },
        {
          "term": "Spinal cord",
          "definition": "CNS structure carrying information and supporting reflex circuits."
        },
        {
          "term": "ERP",
          "definition": "Averaged EEG responses time-linked to a stimulus."
        },
        {
          "term": "Single-cell recording",
          "definition": "Activity of a neuron recorded through an implanted electrode."
        },
        {
          "term": "MEG",
          "definition": "Tiny magnetic signals from neural activity."
        },
        {
          "term": "Histology",
          "definition": "Microscopic tissue structure."
        },
        {
          "term": "Optogenetics",
          "definition": "Control activity of light-sensitive neurons with light."
        }
      ],
      "recall": "Why can damage to a small area disrupt a complex task performed by several brain regions?",
      "answer": "The task depends on coordinated parts and connections. Damage to one necessary component can disrupt the whole process; it does not mean the task exists only in that spot.",
      "questions": [
        {
          "prompt": "Which method measures blood-oxygen changes related to brain activity?",
          "choices": [
            "fMRI",
            "A self-report survey",
            "A scatterplot",
            "Random assignment"
          ],
          "correct": 0,
          "explanation": "fMRI measures a blood-oxygen signal associated with neural activity."
        },
        {
          "prompt": "Which structure can coordinate some reflexes without brain input?",
          "choices": [
            "Spinal cord",
            "Corpus callosum",
            "Occipital lobe only",
            "Nucleus accumbens only"
          ],
          "correct": 0,
          "explanation": "Spinal reflex circuits can act locally."
        },
        {
          "prompt": "Brain activity during a task establishes…",
          "choices": [
            "An association between activity and the task",
            "That the region alone causes the task",
            "That all other regions are irrelevant",
            "That random assignment occurred"
          ],
          "correct": 0,
          "explanation": "Imaging alone does not isolate a sole cause."
        },
        {
          "prompt": "Which method averages electrical responses time-locked to a stimulus?",
          "choices": [
            "ERP",
            "Structural histology",
            "A self-report survey",
            "A hormone blood assay"
          ],
          "correct": 0,
          "explanation": "Event-related potentials isolate averaged EEG responses associated with particular events."
        }
      ],
      "figure": "assets/brain-overview.jpg",
      "kind": "combined"
    },
    {
      "id": "biological",
      "unit": "Brain & behavior",
      "title": "Mind–body links, protection & spinal reflexes",
      "source": "Assigned textbook notes · 4-1; 4-2; 4-3a",
      "body": [
        "Biological psychology studies reciprocal relationships between nervous systems, behavior and mental processes. In the textbook’s milkshake study, the same calories with different descriptions produced different ghrelin responses. Monism treats mind as what the brain does; dualism treats mind and physical being as separate. Cultural neuroscience studies interactions among culture, brains, genetics and behavior.",
        "The CNS consists of brain and spinal cord; the PNS extends outside them. Meninges protect the CNS. Ventricles are cavities containing circulating cerebrospinal fluid, which cushions neural tissue; blocked circulation can produce hydrocephalus. The fluid spaces are not additional brain lobes.",
        "Thirty-one pairs of spinal nerves carry information. Sensory neurons send input to the CNS; motor neurons carry commands out; interneurons connect circuits. A knee-jerk reflex can directly connect sensory input to a motor neuron without an interneuron or prior conscious brain decision. Other reflexes, such as withdrawal, use interneurons."
      ],
      "terms": [
        {
          "term": "Monism",
          "definition": "Mind understood as activity of the physical brain in this neuroscience framing."
        },
        {
          "term": "Dualism",
          "definition": "Mind and physical being understood as separate."
        },
        {
          "term": "Meninges",
          "definition": "Protective membranes surrounding CNS tissue."
        },
        {
          "term": "Ventricles/CSF",
          "definition": "Fluid-filled cavities and circulating fluid that cushions brain/spinal tissue."
        },
        {
          "term": "Spinal reflex",
          "definition": "A response coordinated in spinal circuitry without needing a prior conscious decision."
        }
      ],
      "recall": "Does every spinal reflex require an interneuron?",
      "answer": "No; the simple knee-jerk arc can directly connect sensory and motor neurons. The knee-jerk example differs from more complex interneuron-mediated reflexes.",
      "questions": [
        {
          "prompt": "Does every spinal reflex require an interneuron?",
          "choices": [
            "No; the simple knee-jerk arc can directly connect sensory and motor neurons",
            "Yes; sensory neurons cannot signal motor neurons",
            "No; reflexes never enter the CNS",
            "Yes; the brain must consciously approve each response"
          ],
          "correct": 0,
          "explanation": "The knee-jerk example differs from more complex interneuron-mediated reflexes."
        },
        {
          "prompt": "Blocked CSF circulation most directly concerns…",
          "choices": [
            "Fluid in and around ventricles/CNS tissue",
            "The neurotransmitter cleft at every synapse",
            "The retinal blind spot",
            "The corpus callosum’s language dominance"
          ],
          "correct": 0,
          "explanation": "CSF circulates within ventricles and around neural tissue; obstruction can cause hydrocephalus."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "brainstem",
      "unit": "Brain & behavior",
      "title": "Brainstem, arousal & cerebellum",
      "source": "Brain and Behavior I · slides 11–15",
      "body": [
        "The medulla regulates vital involuntary functions including breathing, heart rate and blood pressure. The pons connects the cerebellum to other regions and contributes to sleep, arousal and facial expressions. The midbrain contributes sensory reflexes, movement, pain and orientation.",
        "The reticular formation supports sleep, arousal and attention. Major damage can severely alter wakefulness. Link it to the consciousness unit: staying awake requires functioning arousal systems, not just intact sensory receptors.",
        "The cerebellum (“little brain”) contributes balance, timing, and motor coordination. It is anatomically distinct from the brainstem, even though the lecture introduces it alongside those structures. Damage can cause poorly coordinated movement and balance problems. The lecture also emphasizes contributions to perception, language and cognition, so do not reduce it to muscles alone."
      ],
      "terms": [
        {
          "term": "Medulla",
          "definition": "Vital involuntary functions: breathing, heart rate, blood pressure."
        },
        {
          "term": "Pons",
          "definition": "Connections with cerebellum; sleep, arousal and facial expressions."
        },
        {
          "term": "Midbrain",
          "definition": "Sensory reflexes, movement, pain and orientation."
        },
        {
          "term": "Reticular formation",
          "definition": "Arousal, sleep and attention."
        },
        {
          "term": "Cerebellum",
          "definition": "Balance and coordinated movement; also contributes to cognition."
        }
      ],
      "recall": "Compare a person with severe breathing regulation problems to someone who staggers but breathes normally. Which structures best match these symptoms?",
      "answer": "Breathing regulation points to medulla; poor coordination and balance point to cerebellum. Real clinical localization requires more evidence.",
      "questions": [
        {
          "prompt": "Damage most directly threatening breathing regulation implicates…",
          "choices": [
            "Medulla",
            "Hippocampus",
            "Occipital lobe",
            "Broca’s area"
          ],
          "correct": 0,
          "explanation": "The medulla regulates vital involuntary functions."
        },
        {
          "prompt": "An intact visual system but severely reduced arousal suggests a problem with…",
          "choices": [
            "Reticular formation",
            "Retinal cones",
            "Taste buds",
            "Corpus callosum alone"
          ],
          "correct": 0,
          "explanation": "The reticular formation contributes wakefulness and attention."
        },
        {
          "prompt": "Difficulty balancing and coordinating movement most strongly suggests…",
          "choices": [
            "Cerebellar dysfunction",
            "Increased rod sensitivity",
            "A valid survey",
            "Opponent processing"
          ],
          "correct": 0,
          "explanation": "The cerebellum supports balance and coordination."
        }
      ],
      "figure": "assets/brainstem.png",
      "kind": "lecture"
    },
    {
      "id": "subcortex",
      "unit": "Brain & behavior",
      "title": "Subcortical structures: map function to structure",
      "source": "Brain and Behavior I · slides 16–25; assigned textbook notes · 4-3b",
      "body": [
        "The forebrain includes cortex and subcortical structures. The lecture groups several structures under “limbic system”; use the functions emphasized in class while remembering they form interacting networks.",
        "Thalamus: sensory relay and contribution to consciousness. Basal ganglia: voluntary movement; connect to dopamine and Parkinson’s disease. Amygdala: fear, disgust and aggression. Hippocampus: formation of new memories. Hypothalamus: temperature, hunger, autonomic activity and hormone release; it links nervous and endocrine systems.",
        "Nucleus accumbens contributes reward, motivation/pleasure and social inclusion in the lecture. Connect it to addiction: drugs can strongly engage reward circuitry and reinforce behavior. Structures have multiple roles; a one-word mnemonic is a starting point, not a claim that each has only one function.",
        "The basal ganglia select goal-directed movement; the nucleus accumbens participates in reward circuitry. Anterior cingulate cortex supports decision making, autonomic/emotional responses and reward anticipation; posterior cingulate contributes to memory and visual processing. These structures form interacting networks rather than one isolated “emotional brain.”",
        "The hippocampus supports formation of new long-term memories: damage may spare intellect and many earlier memories. Amygdala functions extend beyond fear to social behavior and reward learning. Patient S.M. showed impaired fear recognition and unusual personal-space preferences; that is not a general loss of intelligence."
      ],
      "terms": [
        {
          "term": "Thalamus",
          "definition": "Sensory relay station; contributes to consciousness."
        },
        {
          "term": "Basal ganglia",
          "definition": "Voluntary movement and action control."
        },
        {
          "term": "Amygdala",
          "definition": "Emotion processing, including fear, disgust and aggression."
        },
        {
          "term": "Hippocampus",
          "definition": "Formation of new memories."
        },
        {
          "term": "Hypothalamus",
          "definition": "Homeostasis, hunger, temperature, ANS activity and hormone regulation."
        },
        {
          "term": "Nucleus accumbens",
          "definition": "Reward, motivation/pleasure and social inclusion."
        },
        {
          "term": "Basal ganglia",
          "definition": "Goal-directed movement selection, with movement and repetitive-behavior connections."
        },
        {
          "term": "ACC versus PCC",
          "definition": "Anterior cingulate: decision/emotion/autonomic/reward functions; posterior: memory/visual processing."
        }
      ],
      "recall": "Which structure links hunger and hormone release? Which forms new memories? Which relays most sensory input?",
      "answer": "Hypothalamus; hippocampus; thalamus. Smell is an important exception to the usual initial thalamic relay.",
      "questions": [
        {
          "prompt": "A person cannot form new lasting memories after injury. Which structure is central?",
          "choices": [
            "Hippocampus",
            "Medulla",
            "Pons",
            "Primary visual cortex"
          ],
          "correct": 0,
          "explanation": "The hippocampus is crucial to new memory formation."
        },
        {
          "prompt": "Temperature regulation and endocrine coordination point to…",
          "choices": [
            "Hypothalamus",
            "Corpus callosum",
            "Occipital cortex",
            "Cerebellar cortex alone"
          ],
          "correct": 0,
          "explanation": "The hypothalamus coordinates homeostatic and endocrine functions."
        },
        {
          "prompt": "Reward and addiction material most directly connects to…",
          "choices": [
            "Nucleus accumbens",
            "Optic nerve",
            "Taste pore",
            "Spinal motor neuron only"
          ],
          "correct": 0,
          "explanation": "The nucleus accumbens participates in reward circuitry."
        }
      ],
      "figure": "assets/subcortex.jpg",
      "kind": "combined"
    },
    {
      "id": "cortex",
      "unit": "Brain & behavior",
      "title": "Cortical lobes, language & the homunculus",
      "source": "Brain and Behavior I · slides 26–37; assigned textbook notes · 4-3c",
      "body": [
        "Frontal lobe: planning, thought and movement; primary motor cortex lies just in front of the central sulcus. Parietal lobe: touch and spatial processing; primary somatosensory cortex lies just behind the central sulcus. Temporal lobe: hearing, memory and language-related functions. Occipital lobe: vision.",
        "Broca’s area, usually in left frontal cortex, supports speech production; damage can produce effortful, nonfluent speech. Wernicke’s area, usually in left temporal cortex, supports language comprehension; damage can produce fluent but poorly meaningful speech and impaired comprehension. Reading a written word aloud requires coordinated visual, language and motor regions.",
        "The cortical homunculus maps body regions onto motor or somatosensory cortex. Representation is not proportional to body-part size: hands and lips occupy large areas because fine control or sensitivity requires more cortical processing. Nearby body parts have organized representations, useful for thinking about remapping and phantom limbs.",
        "Orbitofrontal cortex helps anticipate consequences and regulate impulses/social decisions; impairment can coexist with intact IQ or language. Right parietal damage may produce left neglect: impaired attention to space, rather than an eye’s inability to detect light. Mirror neurons respond during action and observation; monkey single-cell evidence and human network imaging should not be collapsed into an explanation of all empathy."
      ],
      "terms": [
        {
          "term": "Frontal lobe",
          "definition": "Planning and movement; contains primary motor cortex and typically Broca’s area."
        },
        {
          "term": "Parietal lobe",
          "definition": "Touch and spatial processing; contains primary somatosensory cortex."
        },
        {
          "term": "Temporal lobe",
          "definition": "Audition, memory and language comprehension networks."
        },
        {
          "term": "Occipital lobe",
          "definition": "Visual processing."
        },
        {
          "term": "Broca’s aphasia",
          "definition": "Typically effortful, nonfluent speech after damage to production-related networks."
        },
        {
          "term": "Wernicke’s aphasia",
          "definition": "Typically fluent but poorly meaningful speech with comprehension difficulty."
        },
        {
          "term": "Homunculus",
          "definition": "An organized cortical body map; representation reflects processing demands."
        },
        {
          "term": "Orbitofrontal cortex",
          "definition": "Prefrontal region involved in consequences, impulse control and social/emotional decisions."
        },
        {
          "term": "Neglect",
          "definition": "Failure to attend to opposite-side space, often after right parietal damage; not simply blindness."
        },
        {
          "term": "Mirror neurons",
          "definition": "Neurons responding both during an action and observation of relevant actions."
        }
      ],
      "recall": "Why are the lips and hands huge on a homunculus while the torso is small?",
      "answer": "The map represents cortical processing devoted to sensitivity or fine motor control, not the physical size of the body part.",
      "questions": [
        {
          "prompt": "Effortful, nonfluent speech most closely fits…",
          "choices": [
            "Broca’s aphasia",
            "Wernicke’s aphasia",
            "Opponent processing",
            "REM rebound"
          ],
          "correct": 0,
          "explanation": "Broca’s area is strongly associated with speech production."
        },
        {
          "prompt": "The primary somatosensory cortex lies in the…",
          "choices": [
            "Parietal lobe",
            "Occipital lobe",
            "Medulla",
            "Cerebellum"
          ],
          "correct": 0,
          "explanation": "It is behind the central sulcus in parietal cortex."
        },
        {
          "prompt": "A large hand representation on the homunculus reflects…",
          "choices": [
            "High sensory or motor processing demands",
            "The hand being physically largest",
            "All neurons being motor neurons",
            "An absence of cortical plasticity"
          ],
          "correct": 0,
          "explanation": "Cortical area tracks processing needs, not body size."
        },
        {
          "prompt": "A patient omits the left half of a clock drawing after right parietal damage. This best illustrates…",
          "choices": [
            "Spatial neglect",
            "Loss of all vision in the left eye",
            "A failure of auditory transduction",
            "Loss of every language function"
          ],
          "correct": 0,
          "explanation": "Neglect concerns attention to space; it is not equivalent to an eye disorder."
        }
      ],
      "figure": "assets/cortex.png",
      "kind": "combined"
    },
    {
      "id": "split",
      "unit": "Brain & behavior",
      "title": "Hemispheres & split-brain predictions",
      "source": "Brain and Behavior I · slides 38–45; assigned textbook notes · 4-3c, Table 4.2",
      "body": [
        "The corpus callosum enables communication between hemispheres. Cutting it can help control severe epilepsy and permits researchers to study what each hemisphere can do with isolated information. The left hemisphere is usually dominant for language; the right has strengths in spatial/perceptual tasks and facial recognition. These are relative specializations, not two separate personality types.",
        "Contralateral processing: each hemisphere predominantly controls the opposite side of the body. Crucially, visual FIELD is not the same as eye. With gaze fixed centrally, information in the left visual field from both eyes goes to the right hemisphere; right-field information goes to the left hemisphere.",
        "In a typical split-brain test, an object briefly shown in the left visual field cannot be named verbally because the information reached the right hemisphere and cannot reach left-language systems. Yet the left hand, controlled by the right hemisphere, can select it. An object shown in the right visual field can usually be named. These conclusions assume controlled fixation and the typical language pattern.",
        "Handedness predicts language lateralization imperfectly. The textbook reports left-language dominance in 96% of right-handers; among left-handers, 70% left, 15% right and 15% mixed. Connected hemispheres cooperate, so “left-brained logical person” versus “right-brained artist” is not a valid personality classification."
      ],
      "terms": [
        {
          "term": "Corpus callosum",
          "definition": "Major fiber connection between cerebral hemispheres."
        },
        {
          "term": "Contralateral",
          "definition": "Opposite-side organization of many sensory and motor pathways."
        },
        {
          "term": "Left visual field",
          "definition": "Projects to right hemisphere; includes input from both eyes."
        },
        {
          "term": "Right visual field",
          "definition": "Projects to left hemisphere; includes input from both eyes."
        },
        {
          "term": "Handedness and language",
          "definition": "Left-handedness does not imply right-hemisphere language; most left-handers still lateralize language left."
        }
      ],
      "recall": "A key flashes left of fixation. Predict speech and left-hand selection after callosal surgery.",
      "answer": "Typically the person cannot verbally name the key, but can pick it with the left hand. The right hemisphere has the visual information and controls that hand.",
      "questions": [
        {
          "prompt": "A split-brain patient sees a key only in the left visual field. Typically they can…",
          "choices": [
            "Pick it with the left hand but cannot name it",
            "Name it but cannot select it with either hand",
            "Name it because the left field goes left",
            "Receive the image only in the left eye"
          ],
          "correct": 0,
          "explanation": "Left field reaches right hemisphere, which controls the left hand but lacks the usual dominant language system."
        },
        {
          "prompt": "Which structure was surgically divided?",
          "choices": [
            "Corpus callosum",
            "Optic nerve",
            "Medulla",
            "Hippocampus"
          ],
          "correct": 0,
          "explanation": "Callosal surgery separates the hemispheres’ major communication pathway."
        },
        {
          "prompt": "Which statement is correct?",
          "choices": [
            "Visual fields, not entire eyes, project contralaterally",
            "The left eye sends all input to the right hemisphere",
            "The right hemisphere has no cognitive functions",
            "The hemispheres never communicate normally"
          ],
          "correct": 0,
          "explanation": "Each eye supplies both visual fields."
        }
      ],
      "figure": "assets/visual-fields.jpg",
      "kind": "combined"
    },
    {
      "id": "plasticity",
      "unit": "Brain & behavior",
      "title": "Neuroplasticity: development & recovery",
      "source": "Brain and Behavior I · slides 46–50; assigned textbook notes · 4-5a; 5-4b",
      "body": [
        "Neuroplasticity is the capacity for neural organization and function to change with development, experience or injury. Genes and environment interact in wiring the brain. Critical periods are developmental windows when specific input is especially important; early visual deprivation from cataracts can have lasting effects.",
        "Remapping can occur after sensory loss. Blindness or deafness can change how cortical regions are recruited. Phantom-limb sensations show that a missing limb’s sensory representation can persist or be altered. Mirror-box training provides visual feedback that can help some people with phantom-limb symptoms.",
        "After illness, stroke or surgery, training and remaining circuits can support recovery, though plasticity does not guarantee full restoration. The Jody video is a course example of recovery after major surgery; review what functions she retained or regained and what that demonstrates. The slides also mention retraining after stroke and motor training in multiple sclerosis.",
        "The textbook contrasts CNS glial scarring that inhibits axon regrowth with PNS conditions that can support regrowth. Functional adaptation and reorganization are a different issue: limited axon regrowth does not imply no brain plasticity or recovery. Sensory-map changes after Braille practice, amputation or prosthetic input illustrate that distinction."
      ],
      "terms": [
        {
          "term": "Neuroplasticity",
          "definition": "Changes in neural organization/function with experience, development or injury."
        },
        {
          "term": "Critical period",
          "definition": "A developmental window of heightened dependence on particular input."
        },
        {
          "term": "Phantom limb",
          "definition": "Sensation experienced as coming from a limb that is absent."
        },
        {
          "term": "Mirror-box training",
          "definition": "Use visual feedback to influence phantom-limb experiences."
        }
      ],
      "recall": "How can an absent limb still seem painful or present?",
      "answer": "Experience depends on neural representations, not only current signals from the limb. Those representations may persist and be affected by remapping.",
      "questions": [
        {
          "prompt": "A cortical region becomes recruited for new tasks after sensory loss. This is…",
          "choices": [
            "Neuroplasticity",
            "Random assignment",
            "Sensory transduction only",
            "Meta-analysis"
          ],
          "correct": 0,
          "explanation": "Neural organization can change with experience or injury."
        },
        {
          "prompt": "Why do early cataracts matter for later vision?",
          "choices": [
            "Visual input during critical developmental windows shapes wiring",
            "Vision develops independently of experience",
            "Only the cornea is affected permanently",
            "Cataracts prove the cortex cannot change"
          ],
          "correct": 0,
          "explanation": "Critical periods make some early input especially important."
        },
        {
          "prompt": "Mirror-box training is most directly connected to…",
          "choices": [
            "Phantom-limb symptoms",
            "Aphasia diagnosis",
            "Correlational scatterplots",
            "Survey wording"
          ],
          "correct": 0,
          "explanation": "It provides visual feedback affecting missing-limb experiences."
        }
      ],
      "figure": "assets/homunculus.jpg",
      "kind": "combined"
    },
    {
      "id": "nervous",
      "unit": "Brain & behavior",
      "title": "Nervous-system organization & endocrine links",
      "source": "Brain and Behavior II · slides 4–9; endocrine background; assigned textbook notes · 4-4a–b",
      "body": [
        "The central nervous system (CNS) consists of brain and spinal cord. The peripheral nervous system (PNS) links them to the rest of the body. The somatic system serves skeletal muscles and associated sensory pathways. The autonomic system regulates visceral functions.",
        "Sympathetic activity mobilizes the body for action (“fight or flight”); parasympathetic activity supports maintenance (“rest and digest”). These systems regulate organs rather than simply turning the entire body on or off. The enteric system is a network in the gut, emphasized in the lecture as communicating with endocrine processes.",
        "The nervous system communicates through neurons; the endocrine system uses hormones carried in the bloodstream. The hypothalamus coordinates both. Supplemental endocrine background: pituitary regulation influences other glands; adrenal hormones contribute stress responses; pancreas regulates blood glucose; thyroid hormones affect metabolism. Endocrine effects tend to be slower and longer-lasting than rapid neural signaling.",
        "The autonomic branches affect specific organs: sympathetic activity dilates pupils, speeds the heart, opens airways, and inhibits digestion/urination; parasympathetic activity generally reverses these patterns. They can cooperate in some functions. The enteric system regulates digestive contractions and secretions and communicates through the vagus and endocrine signals—the gut–brain axis."
      ],
      "terms": [
        {
          "term": "CNS",
          "definition": "Brain and spinal cord."
        },
        {
          "term": "PNS",
          "definition": "Neural pathways outside the brain and spinal cord."
        },
        {
          "term": "Somatic system",
          "definition": "Skeletal-muscle control and associated sensory communication."
        },
        {
          "term": "Sympathetic",
          "definition": "Autonomic mobilization for action."
        },
        {
          "term": "Parasympathetic",
          "definition": "Autonomic maintenance, digestion and recovery."
        },
        {
          "term": "Enteric system",
          "definition": "Neural network in the digestive tract."
        },
        {
          "term": "Hormone",
          "definition": "Endocrine chemical messenger carried through the bloodstream."
        },
        {
          "term": "Enteric nervous system",
          "definition": "Gut neuronal networks regulating digestion and communicating with brain/endocrine systems."
        },
        {
          "term": "Cranial versus spinal nerves",
          "definition": "The textbook describes 12 cranial-nerve pairs and 31 spinal-nerve pairs."
        }
      ],
      "recall": "After a scare your heart races, then digestion returns during rest. Which systems are prominent in each phase?",
      "answer": "Sympathetic mobilization during the scare, parasympathetic maintenance during rest. Hypothalamic coordination links neural and hormonal responses.",
      "questions": [
        {
          "prompt": "Brain and spinal cord together form the…",
          "choices": [
            "CNS",
            "PNS only",
            "Endocrine system",
            "Enteric system"
          ],
          "correct": 0,
          "explanation": "These two structures are the central nervous system."
        },
        {
          "prompt": "Rest-and-digest functions are associated with the…",
          "choices": [
            "Parasympathetic system",
            "Sympathetic system",
            "Occipital lobe only",
            "Somatic motor cortex only"
          ],
          "correct": 0,
          "explanation": "Parasympathetic regulation supports maintenance."
        },
        {
          "prompt": "The nervous and endocrine systems coordinate especially through the…",
          "choices": [
            "Hypothalamus",
            "Optic nerve",
            "Taste bud",
            "Corpus callosum"
          ],
          "correct": 0,
          "explanation": "The hypothalamus helps control hormone release and autonomic functions."
        },
        {
          "prompt": "Which pattern fits sympathetic activation?",
          "choices": [
            "Dilated pupils, faster heart, reduced digestion",
            "Constricted pupils, slower heart, increased digestion",
            "Only voluntary skeletal movement",
            "No change in organ activity"
          ],
          "correct": 0,
          "explanation": "Sympathetic responses generally mobilize energy; parasympathetic responses support rest and restoration."
        }
      ],
      "figure": "assets/nervous-system.jpg",
      "kind": "combined"
    },
    {
      "id": "endocrine",
      "unit": "Brain & behavior",
      "title": "Hormones: map glands to their messages",
      "source": "Assigned textbook notes · 4-4c, Figure 4.20",
      "body": [
        "Hormones enter the bloodstream and reach distant targets; synaptic neurotransmitters act across a local synapse. A chemical’s role depends on where and how it is released. Hypothalamus regulates the pituitary, which releases hormones and directs target glands. The pituitary’s “master gland” label does not mean it works independently.",
        "Pineal melatonin relates to sleep–wake cycles. Thyroid hormones regulate metabolic rate. Adrenal hormones include cortisol in stress-related signaling. Pancreatic islets release insulin for metabolic regulation. Ovaries and testes produce sex hormones under pituitary regulation.",
        "Pituitary-related oxytocin is linked with breastfeeding and social bonding; vasopressin with fluid regulation and social functions; growth hormone with growth/regeneration. These are textbook associations, not one-hormone explanations of personality. The supplied notes group these broadly and do not establish detailed anterior/posterior synthesis distinctions."
      ],
      "terms": [
        {
          "term": "Hormone",
          "definition": "Chemical message carried through blood to distant targets."
        },
        {
          "term": "Hypothalamus → pituitary",
          "definition": "Hypothalamic regulation directs pituitary signaling and target glands."
        },
        {
          "term": "Pineal",
          "definition": "Melatonin and sleep–wake rhythms."
        },
        {
          "term": "Thyroid",
          "definition": "Metabolic-rate regulation."
        },
        {
          "term": "Adrenals",
          "definition": "Stress-related hormones including cortisol."
        },
        {
          "term": "Pancreatic islets",
          "definition": "Insulin and metabolic regulation."
        },
        {
          "term": "Oxytocin / vasopressin",
          "definition": "Pituitary-related signals associated with breastfeeding/bonding and fluid regulation/social functions, respectively."
        }
      ],
      "recall": "Which gland–function pairing is correct?",
      "answer": "Thyroid → metabolic rate. Thyroid regulates metabolic rate; pineal melatonin and pancreatic insulin have different functions.",
      "questions": [
        {
          "prompt": "Which gland–function pairing is correct?",
          "choices": [
            "Thyroid → metabolic rate",
            "Pineal → insulin",
            "Pancreatic islets → melatonin",
            "Adrenals → visual transduction"
          ],
          "correct": 0,
          "explanation": "Thyroid regulates metabolic rate; pineal melatonin and pancreatic insulin have different functions."
        },
        {
          "prompt": "Why is the pituitary not an independent “master”?",
          "choices": [
            "It is regulated by the hypothalamus",
            "It cannot release hormones",
            "It is a spinal reflex nerve",
            "Every pituitary hormone is an action potential"
          ],
          "correct": 0,
          "explanation": "Endocrine regulation includes hypothalamus–pituitary–target gland relationships."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "neuron",
      "unit": "Brain & behavior",
      "title": "Neuron parts, cell types & myelin",
      "source": "Brain and Behavior II · slides 10–22",
      "body": [
        "Dendrites collect input; the cell body (soma) integrates it; the axon transmits an electrical signal toward axon terminals. A synapse is the communication junction with another cell. The neuron uses electrical signaling within the cell and chemical signaling across most synapses.",
        "Sensory (afferent) neurons bring information toward the CNS. Motor (efferent) neurons carry commands from the CNS toward muscles. Interneurons connect and integrate signals within the CNS and greatly outnumber the other categories in the lecture. The spinal withdrawal reflex illustrates input, integration and output.",
        "Glial cells provide physical/metabolic support, nutrients, aspects of the blood–brain barrier and myelin. Myelin insulates axons and speeds conduction. Action potentials are regenerated at nodes of Ranvier, producing saltatory (“jumping”) conduction in myelinated axons. Not every axon is myelinated. Demyelination can slow or disrupt communication; connect this to the lecture’s multiple-sclerosis example."
      ],
      "terms": [
        {
          "term": "Dendrites",
          "definition": "Receive incoming information."
        },
        {
          "term": "Soma",
          "definition": "Cell body; integrates information and maintains the cell."
        },
        {
          "term": "Axon",
          "definition": "Carries an electrical signal toward terminals."
        },
        {
          "term": "Afferent",
          "definition": "Sensory signals traveling toward the CNS."
        },
        {
          "term": "Efferent",
          "definition": "Motor signals traveling outward from the CNS."
        },
        {
          "term": "Interneuron",
          "definition": "Integrates/connects neurons within the CNS."
        },
        {
          "term": "Glia",
          "definition": "Support cells including cells involved in myelin and metabolic support."
        },
        {
          "term": "Nodes of Ranvier",
          "definition": "Gaps between myelin segments where action potentials are regenerated."
        }
      ],
      "recall": "Trace the withdrawal of your hand from a hot surface using afferent, interneuron, and efferent.",
      "answer": "Sensory afferents bring information to the spinal cord, interneurons integrate it, and motor efferents activate muscles to withdraw the hand.",
      "questions": [
        {
          "prompt": "An incoming sensory signal toward the CNS is…",
          "choices": [
            "Afferent",
            "Efferent",
            "Endocrine only",
            "An antagonist"
          ],
          "correct": 0,
          "explanation": "Afferent means toward the CNS."
        },
        {
          "prompt": "What is myelin’s key effect?",
          "choices": [
            "Faster conduction through insulation and node-to-node regeneration",
            "It replaces all neurotransmitters",
            "It removes nodes of Ranvier",
            "It makes every synapse electrical"
          ],
          "correct": 0,
          "explanation": "Myelin supports saltatory conduction."
        },
        {
          "prompt": "Which neuron component receives most incoming inputs?",
          "choices": [
            "Dendrites",
            "Axon terminals only",
            "Myelin",
            "Synaptic cleft"
          ],
          "correct": 0,
          "explanation": "Dendrites collect signals for integration."
        }
      ],
      "figure": "assets/neuron.jpg",
      "kind": "lecture"
    },
    {
      "id": "potential",
      "unit": "Brain & behavior",
      "title": "Action potentials: from rest to firing",
      "source": "Brain and Behavior II · slides 23–29",
      "body": [
        "At rest the neuron’s interior is more negative than its exterior. Ion gradients and selective membrane permeability maintain this membrane potential. Excitatory inputs tend to depolarize the membrane (make it less negative); inhibitory inputs can hyperpolarize it (make it more negative) or otherwise oppose firing.",
        "If sufficient depolarization reaches threshold, an action potential begins. Voltage-gated sodium channels open; Na⁺ enters and the voltage rises. Then sodium channels inactivate and potassium channels allow K⁺ to leave, repolarizing the membrane. A brief undershoot can make it more negative than rest before recovery.",
        "An action potential is all-or-none: a stronger stimulus does not create a taller spike in the same axon. Intensity can instead be represented by firing rate or number of recruited neurons. A refractory period limits immediate refiring and helps forward propagation. In myelinated axons, the signal is regenerated at nodes."
      ],
      "terms": [
        {
          "term": "Resting potential",
          "definition": "Inside is electrically more negative than outside."
        },
        {
          "term": "Depolarization",
          "definition": "Membrane potential becomes less negative; can bring the neuron toward threshold."
        },
        {
          "term": "Hyperpolarization",
          "definition": "Membrane becomes more negative than resting potential; generally reduces likelihood of firing."
        },
        {
          "term": "Threshold",
          "definition": "Level of depolarization needed to trigger an action potential."
        },
        {
          "term": "All-or-none",
          "definition": "An action potential occurs fully once threshold is reached."
        },
        {
          "term": "Refractory period",
          "definition": "Brief period after firing when another spike is impossible or harder to trigger."
        }
      ],
      "recall": "Why does “stronger stimulation produces bigger action potentials” fail?",
      "answer": "Spikes are all-or-none. Stronger stimulation can increase spike frequency or recruit more neurons, not enlarge each spike.",
      "questions": [
        {
          "prompt": "Sodium influx during the rising phase causes…",
          "choices": [
            "Depolarization",
            "Hyperpolarization",
            "Reuptake",
            "Myelin formation"
          ],
          "correct": 0,
          "explanation": "Positive sodium entering makes the inside less negative/more positive."
        },
        {
          "prompt": "A neuron becomes more negative than at rest. This is…",
          "choices": [
            "Hyperpolarization",
            "Depolarization",
            "Transduction of light",
            "Random assignment"
          ],
          "correct": 0,
          "explanation": "Hyperpolarization moves the voltage farther from typical firing threshold."
        },
        {
          "prompt": "A stronger signal is typically encoded by…",
          "choices": [
            "More frequent spikes rather than taller individual spikes",
            "Every spike doubling in size",
            "Removing threshold",
            "Stopping all potassium movement"
          ],
          "correct": 0,
          "explanation": "The amplitude of each action potential is all-or-none."
        }
      ],
      "figure": "assets/membrane.jpg",
      "kind": "lecture"
    },
    {
      "id": "synapse",
      "unit": "Brain & behavior",
      "title": "Synaptic transmission & how it ends",
      "source": "Brain and Behavior II · slides 30–32; III · slides 4–5; assigned textbook notes · 4-5b",
      "body": [
        "An action potential arrives at an axon terminal, prompting neurotransmitter release from vesicles into the synaptic cleft. Molecules diffuse across and bind to matching receptors on the receiving cell. Receptor effects can excite or inhibit that cell; the effect depends on the receptor and circuit, not just the transmitter’s name.",
        "Electrical signaling in an axon becomes chemical signaling across the cleft, then a change in the receiving cell’s activity. The postsynaptic neuron combines inputs rather than necessarily firing after every release.",
        "Transmission must be regulated and terminated. Reuptake transports transmitter back into the sending cell. Enzymes can deactivate transmitter. Autoreceptors on the sending neuron detect its own transmitter and provide feedback that regulates further release; they are not identical to the receiving cell’s receptors. These mechanisms explain how reuptake inhibitors or enzyme inhibitors can amplify transmitter action.",
        "Summation combines excitatory and inhibitory inputs near the soma–axon junction. Threshold depends on the combined input, not a vote by a single synapse. Inhibition is essential: the textbook’s tetanus example blocks inhibitory signaling and causes excessive contraction."
      ],
      "terms": [
        {
          "term": "Synaptic cleft",
          "definition": "Tiny gap between communicating cells."
        },
        {
          "term": "Neurotransmitter",
          "definition": "Chemical messenger released by a neuron."
        },
        {
          "term": "Receptor",
          "definition": "Binding site that translates transmitter binding into a cellular effect."
        },
        {
          "term": "Reuptake",
          "definition": "Removal of transmitter into the sending neuron."
        },
        {
          "term": "Autoreceptor",
          "definition": "Presynaptic receptor detecting the cell’s own transmitter to regulate signaling."
        },
        {
          "term": "Enzyme deactivation",
          "definition": "Chemical breakdown/inactivation of a neurotransmitter."
        },
        {
          "term": "Summation",
          "definition": "Combined effects of multiple excitatory/inhibitory inputs determine whether threshold is reached."
        }
      ],
      "recall": "Why does blocking reuptake amplify transmitter effects even if the drug does not imitate the transmitter?",
      "answer": "More transmitter remains available in the cleft to act on receptors. This is indirect amplification, not necessarily direct receptor activation.",
      "questions": [
        {
          "prompt": "After vesicle release, neurotransmitter molecules…",
          "choices": [
            "Cross the cleft and bind receptors",
            "Become myelin immediately",
            "Travel only through the blood",
            "Turn into a corpus callosum"
          ],
          "correct": 0,
          "explanation": "Chemical diffusion and receptor binding transmit the synaptic signal."
        },
        {
          "prompt": "An autoreceptor is located on the…",
          "choices": [
            "Sending neuron and responds to its own transmitter",
            "Only retina and responds to light",
            "Receiving cell exclusively",
            "Adrenal gland exclusively"
          ],
          "correct": 0,
          "explanation": "It provides presynaptic feedback."
        },
        {
          "prompt": "Blocking reuptake generally…",
          "choices": [
            "Increases transmitter availability in the cleft",
            "Prevents any transmitter from being released",
            "Turns a drug into a direct antagonist necessarily",
            "Destroys all receptors"
          ],
          "correct": 0,
          "explanation": "Slower removal can increase transmitter action."
        },
        {
          "prompt": "Many inhibitory inputs arrive alongside excitatory inputs. What determines firing?",
          "choices": [
            "The combined effect near the axon junction relative to threshold",
            "The largest single input alone, in every case",
            "Whether any transmitter exists anywhere in the brain",
            "Whether the action potential can grow bigger"
          ],
          "correct": 0,
          "explanation": "Summation integrates inputs; action potentials are all or none."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "transmitters",
      "unit": "Brain & behavior",
      "title": "Neurotransmitters: categories & functions",
      "source": "Brain and Behavior III · slides 6–24; assigned textbook notes · 4-5c, Table 4.4",
      "body": [
        "Learn the four lecture categories. Acetylcholine (ACh) supports muscle contraction, learning, memory, attention and sleep. Monoamines include epinephrine (adrenaline), norepinephrine, serotonin and dopamine. Amino acids include GABA and glutamate. Peptides include CCK, endorphins and substance P.",
        "Epinephrine supports sympathetic mobilization, including pupil dilation and increased blood flow/blood sugar. Norepinephrine supports physiological arousal and can narrow vessels. Serotonin contributes sleep–wake regulation, arousal and aggression regulation. Dopamine contributes movement, reward and motivation; degeneration of dopamine pathways in basal ganglia is important in Parkinson’s disease.",
        "GABA is a major inhibitory transmitter; glutamate is a major excitatory transmitter contributing learning and memory. CCK contributes digestion and satiety, with anxiety/panic effects noted in lecture. Endorphins reduce pain and are associated with calmness/pleasure; opioids act on related receptors. Substance P contributes pain, inflammation/vasodilation and stress/mood processes.",
        "The slides associate low ACh with Alzheimer’s and excess with spasms; low norepinephrine/serotonin with depression and excess with mania; low dopamine with depression and excess with schizophrenia; low GABA with anxiety/epilepsy/Huntington’s and excess with low motivation. Treat these as lecture associations, not complete explanations or diagnoses: effects vary by receptor, circuit and context.",
        "ACh blockade illustrates different mechanisms: curare blocks muscle ACh receptors, while botulinum toxin prevents ACh release. Both reduce muscle signaling but act at different steps. Dopamine supports movement, planning and reward; serotonin participates in appetite, sleep and mood. A transmitter’s effect depends on receptor and circuit context."
      ],
      "terms": [
        {
          "term": "ACh",
          "definition": "Muscle contraction; learning, memory, attention and sleep."
        },
        {
          "term": "Monoamines",
          "definition": "Epinephrine, norepinephrine, serotonin and dopamine."
        },
        {
          "term": "GABA",
          "definition": "Major inhibitory amino-acid transmitter."
        },
        {
          "term": "Glutamate",
          "definition": "Major excitatory amino-acid transmitter; learning and memory."
        },
        {
          "term": "CCK",
          "definition": "Peptide associated with digestion and satiety; anxiety effects in lecture."
        },
        {
          "term": "Endorphins",
          "definition": "Peptides involved in pain reduction and pleasure/calmness."
        },
        {
          "term": "Substance P",
          "definition": "Peptide associated with pain, inflammation and stress."
        },
        {
          "term": "Curare versus botulinum",
          "definition": "Curare blocks muscle ACh receptors; botulinum toxin prevents ACh release."
        }
      ],
      "recall": "Group GABA, serotonin, endorphins, dopamine, glutamate and CCK into their categories.",
      "answer": "Amino acids: GABA and glutamate. Monoamines: serotonin and dopamine. Peptides: endorphins and CCK.",
      "questions": [
        {
          "prompt": "Which pair consists of amino-acid neurotransmitters?",
          "choices": [
            "GABA and glutamate",
            "Dopamine and serotonin",
            "CCK and endorphins",
            "Acetylcholine and epinephrine"
          ],
          "correct": 0,
          "explanation": "GABA and glutamate are the inhibitory/excitatory amino-acid examples."
        },
        {
          "prompt": "Degeneration of dopamine neurons in basal ganglia is linked to…",
          "choices": [
            "Parkinson’s movement problems",
            "Opponent color afterimages",
            "A valid correlation",
            "Mirror recognition"
          ],
          "correct": 0,
          "explanation": "The lecture emphasizes dopamine’s role in movement."
        },
        {
          "prompt": "Which transmitter contributes to satiety?",
          "choices": [
            "CCK",
            "Substance P only",
            "GABA only",
            "Acetylcholine only"
          ],
          "correct": 0,
          "explanation": "CCK is a peptide involved in digestion and fullness."
        },
        {
          "prompt": "Natural pain-relieving peptides are…",
          "choices": [
            "Endorphins",
            "Monoamines only",
            "Glutamate",
            "Retinal cones"
          ],
          "correct": 0,
          "explanation": "Endorphins act in pain and emotion pathways."
        },
        {
          "prompt": "Which pairing correctly distinguishes ACh interference?",
          "choices": [
            "Curare blocks receptors; botulinum toxin prevents release",
            "Curare increases release; botulinum forms myelin",
            "Both only block serotonin reuptake",
            "Both only stimulate GABA receptors"
          ],
          "correct": 0,
          "explanation": "Blocking reception and blocking release are different ways to reduce ACh signaling."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "drugs",
      "unit": "Brain & behavior",
      "title": "Agonists, antagonists & drug mechanisms",
      "source": "Brain and Behavior III · slides 25–39; assigned textbook notes · 6-4b",
      "body": [
        "An agonist increases/amplifies a transmitter’s effect; an antagonist decreases/blocks it. In lecture this includes indirect effects such as blocking reuptake, not just drugs binding receptors. MAOIs reduce enzymatic monoamine breakdown. SSRIs (Prozac, Zoloft, Paxil) inhibit serotonin reuptake. Tricyclics (clomipramine, amitriptyline) amplify signaling by inhibiting reuptake, with norepinephrine emphasized in class.",
        "Antipsychotics antagonize dopamine and/or serotonin signaling in the lecture: typical agents emphasize dopamine receptors; atypical agents often affect both systems. Naloxone (Narcan) blocks opioid receptors. Alcohol/sedatives enhance GABA-related inhibition and reduce glutamate-related excitation. Benzodiazepines (Valium, Xanax) increase GABA receptor responses.",
        "Cocaine blocks reuptake of dopamine/norepinephrine; amphetamines increase their availability, including promoting release (the slide groups both as agonists and emphasizes reuptake). Nicotine activates nicotinic ACh receptors. Opioids activate receptors responsive to endogenous opioid peptides and engage reward circuitry. LSD acts through serotonin-related receptors. THC acts at cannabinoid receptors, can affect dopamine reward pathways, and can impair memory through hippocampal effects.",
        "Learn mechanism first, classification second. A drug that blocks removal can be an indirect agonist. A drug that blocks the receiving receptor is an antagonist. Chronic exposure can produce compensatory adaptation and tolerance; that is different from immediate action at the synapse.",
        "Caffeine is an antagonist at adenosine receptors, despite increasing alertness: blocking an inhibitory/modulating signal can make the overall experience stimulating. Amphetamines promote dopamine release and can reverse transporter action; cocaine inhibits reuptake. MDMA strongly promotes serotonin release, with oxytocin and smaller dopamine effects described in the text."
      ],
      "terms": [
        {
          "term": "Agonist",
          "definition": "Amplifies neurotransmitter effects directly or indirectly in lecture terminology."
        },
        {
          "term": "Antagonist",
          "definition": "Dampens or blocks neurotransmitter effects."
        },
        {
          "term": "SSRI",
          "definition": "Serotonin reuptake inhibitor; indirect amplification of serotonin action."
        },
        {
          "term": "MAOI",
          "definition": "Inhibits monoamine breakdown by monoamine oxidase."
        },
        {
          "term": "Naloxone",
          "definition": "Opioid receptor antagonist."
        },
        {
          "term": "Benzodiazepine",
          "definition": "Enhances GABA receptor responses."
        },
        {
          "term": "Nicotine",
          "definition": "Agonist at nicotinic acetylcholine receptors."
        },
        {
          "term": "THC",
          "definition": "Acts at cannabinoid receptors; lecture emphasizes reward and memory effects."
        },
        {
          "term": "Caffeine",
          "definition": "Adenosine receptor antagonist; stimulating effects do not make it an adenosine agonist."
        },
        {
          "term": "Amphetamine versus cocaine",
          "definition": "Amphetamine promotes release/transporter reversal; cocaine blocks reuptake."
        },
        {
          "term": "MDMA",
          "definition": "Text emphasizes serotonin release, oxytocin and smaller dopamine effects."
        }
      ],
      "recall": "Why is an SSRI called an agonist in this course even though it blocks something?",
      "answer": "It blocks reuptake, which amplifies serotonin’s action. Classify the effect on transmitter signaling, not the verb “blocks” in isolation.",
      "questions": [
        {
          "prompt": "An SSRI is an indirect agonist because it…",
          "choices": [
            "Blocks reuptake and increases serotonin availability",
            "Blocks serotonin receptors",
            "Destroys serotonin in the cleft",
            "Prevents all neural firing"
          ],
          "correct": 0,
          "explanation": "Blocking removal amplifies signaling."
        },
        {
          "prompt": "Naloxone is classified as…",
          "choices": [
            "An opioid antagonist",
            "A serotonin reuptake inhibitor",
            "A nicotinic agonist",
            "A myelin-forming hormone"
          ],
          "correct": 0,
          "explanation": "Naloxone blocks opioid receptors."
        },
        {
          "prompt": "Valium and Xanax primarily enhance responses to…",
          "choices": [
            "GABA",
            "Glutamate only",
            "CCK",
            "Substance P"
          ],
          "correct": 0,
          "explanation": "Benzodiazepines enhance inhibitory GABA signaling."
        },
        {
          "prompt": "Nicotine acts at receptors normally responsive to…",
          "choices": [
            "Acetylcholine",
            "Endorphins only",
            "Glutamate exclusively",
            "CCK"
          ],
          "correct": 0,
          "explanation": "Nicotine activates nicotinic ACh receptors."
        },
        {
          "prompt": "Caffeine increases alertness by blocking adenosine receptors. At those receptors it is…",
          "choices": [
            "An antagonist",
            "An agonist because all alerting drugs are agonists",
            "A neurotransmitter-clearing enzyme",
            "A myelin-producing glial cell"
          ],
          "correct": 0,
          "explanation": "Classification follows receptor action, not whether the person feels stimulated."
        },
        {
          "prompt": "Which mechanism is more specific to amphetamine than cocaine?",
          "choices": [
            "Promoting release and reversing dopamine transport",
            "Blocking dopamine reuptake as its only mechanism",
            "Blocking opioid receptors",
            "Producing acetylcholine-filled myelin"
          ],
          "correct": 0,
          "explanation": "The textbook distinguishes release/transporter reversal from cocaine’s reuptake blockade."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "addiction",
      "unit": "Brain & behavior",
      "title": "Dopamine, prediction, addiction & tolerance",
      "source": "Brain and Behavior III · slides 40–48; course video prompts + NIH background; assigned textbook notes · 6-4a",
      "body": [
        "Dopamine is important for learning what predicts rewarding outcomes and motivating behavior toward them. With learning, a response can shift from the reward itself to a predictive cue. The Sapolsky video highlights timing and intermittent reinforcement: uncertain rewards can sustain strong anticipatory signaling. Explain anticipation, not just pleasure after the reward.",
        "The Volkow prompts connect dopamine to learning/classical conditioning. Cues associated with drug use can acquire motivational power and trigger craving. Drugs can produce stronger dopamine effects than ordinary rewards. Vulnerability reflects interacting biological and environmental factors rather than a single cause.",
        "The lecture emphasizes lower dopamine D2 receptor availability with chronic abuse, PET evidence, overlap across addictions, and frontal-lobe self-control. Adaptation can reduce sensitivity to ordinary rewards and alter control. Tolerance means reduced effect from the same dose after repeated use; compensatory neural adaptation is a key explanation. Withdrawal is a response after stopping or reducing use; it is not the same as tolerance.",
        "The textbook defines addiction as compulsive use despite harm. Tolerance is compensatory adaptation and learned context effects; withdrawal can run opposite to acute drug effects. Reward circuits, prefrontal control and insula-related craving interact with environment. The Vietnam-return example emphasizes how changing context can change patterns of use."
      ],
      "terms": [
        {
          "term": "Conditioned drug cue",
          "definition": "A stimulus associated with drug effects that later evokes reward expectation or craving."
        },
        {
          "term": "D2 receptor change",
          "definition": "Lecture emphasizes reduced availability with chronic abuse and connections to self-control."
        },
        {
          "term": "Tolerance",
          "definition": "Repeated exposure reduces the response to the same dose."
        },
        {
          "term": "Withdrawal",
          "definition": "Symptoms arising after reduction or cessation following adaptation."
        },
        {
          "term": "Addiction",
          "definition": "Compulsive use despite harmful consequences; distinct from tolerance or withdrawal."
        }
      ],
      "recall": "Why can a picture associated with drug use provoke a response even when no drug is present?",
      "answer": "Through conditioning, the image becomes a predictor of the drug’s rewarding effects and can activate learned motivational responses.",
      "questions": [
        {
          "prompt": "A cue associated with drug use later triggers craving. This illustrates…",
          "choices": [
            "Classical conditioning",
            "Random sampling",
            "Sensory adaptation only",
            "A true independent variable necessarily"
          ],
          "correct": 0,
          "explanation": "A previously neutral cue acquires significance through association."
        },
        {
          "prompt": "The lecture connects chronic drug abuse with…",
          "choices": [
            "Reduced D2 receptor availability",
            "Permanent increases in every receptor",
            "No change in reward circuitry",
            "Complete elimination of learning"
          ],
          "correct": 0,
          "explanation": "D2 receptor reduction and control/reward changes are emphasized."
        },
        {
          "prompt": "Needing more drug for the same effect after repeated exposure is…",
          "choices": [
            "Tolerance",
            "Withdrawal",
            "Transduction",
            "Replication"
          ],
          "correct": 0,
          "explanation": "Tolerance is a reduced effect at the same dose."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "sensation",
      "unit": "Sensation & perception",
      "title": "Sensation, transduction & perception",
      "source": "Sensation and Perception · slides 3, 16–17; assigned textbook notes · 5-1–5-1b",
      "body": [
        "Sensation detects physical stimulation. Transduction converts stimulus energy into neural activity. Perception interprets the resulting information. For hearing, a pressure wave stimulates ear structures; hair cells convert motion into neural signals; the brain interprets a voice or song.",
        "Bottom-up processing builds perception from incoming sensory features. Top-down processing uses knowledge, expectations and context to interpret input. They cooperate. You can recognize a messy handwritten word partly because a sentence constrains what it is likely to mean.",
        "The Gestalt effect emphasizes organized wholes: perception is more than isolated elements. Grouping principles include proximity, similarity, closure and good continuation. You can perceive a complete shape from incomplete contours. Illusions help expose assumptions and organizing rules the system normally uses efficiently.",
        "Sensory adaptation reduces responses to unchanged input and helps novel information stand out. Top-down expectations also influence perception: proofreading can miss errors because familiar patterns shape what we think is present. Inattentional blindness shows that detectable input need not enter awareness."
      ],
      "terms": [
        {
          "term": "Sensation",
          "definition": "Detection of a stimulus."
        },
        {
          "term": "Transduction",
          "definition": "Conversion of stimulus energy into neural signals."
        },
        {
          "term": "Perception",
          "definition": "Interpretation of sensory information."
        },
        {
          "term": "Bottom-up processing",
          "definition": "Build interpretation from sensory input."
        },
        {
          "term": "Top-down processing",
          "definition": "Use prior knowledge, expectations and context."
        },
        {
          "term": "Gestalt effect",
          "definition": "Perceive organized wholes beyond individual components."
        },
        {
          "term": "Sensory adaptation",
          "definition": "Reduced response to sustained, unchanged stimulation."
        }
      ],
      "recall": "You read an ambiguous symbol as a letter in a word but as a number in an equation. What changed?",
      "answer": "The context changed the top-down interpretation even though the bottom-up symbol remained the same.",
      "questions": [
        {
          "prompt": "A photoreceptor converts light into a neural signal. This is…",
          "choices": [
            "Transduction",
            "Perception only",
            "Meta-analysis",
            "Random assignment"
          ],
          "correct": 0,
          "explanation": "Transduction converts stimulus energy into neural activity."
        },
        {
          "prompt": "Recognizing unclear handwriting using sentence context is…",
          "choices": [
            "Top-down processing",
            "Only bottom-up processing",
            "A motor reflex",
            "Reuptake"
          ],
          "correct": 0,
          "explanation": "Expectations constrain the interpretation."
        },
        {
          "prompt": "Seeing a complete outline despite gaps illustrates…",
          "choices": [
            "Gestalt closure",
            "Random sampling",
            "D2 downregulation",
            "A refractory period"
          ],
          "correct": 0,
          "explanation": "Perceptual organization fills missing contours."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "vision",
      "unit": "Sensation & perception",
      "title": "The visual pathway: eye to cortex",
      "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c",
      "body": [
        "Light passes through the cornea and pupil; the iris regulates pupil size. The lens focuses light onto the retina. Retinal photoreceptors (rods and cones) transduce light. Signals pass through retinal circuits to ganglion cells whose axons form the optic nerve, then through the thalamic relay to visual cortex in the occipital lobe and other cortical areas.",
        "Rods are sensitive in dim light, important in peripheral vision, and provide little color discrimination. Cones work best in brighter light and support color and fine detail; they are concentrated in the fovea. The blind spot is where the optic nerve leaves the retina and photoreceptors are absent.",
        "Wavelength relates to hue; amplitude/intensity relates to brightness. Human visible sensitivity covers only part of the electromagnetic spectrum. Ultraviolet is shorter wavelength than visible light; infrared is longer. The lecture’s nonhuman examples show that sensory access differs by species. Do not confuse wavelength with sound frequency or brightness with color.",
        "Accommodation changes lens shape to focus at different distances. Nasal retinal fibers cross at the optic chiasm; temporal fibers stay on the same side, so each hemisphere receives the opposite visual field from both eyes. Some photosensitive ganglion cells contribute to clock and pupil responses.",
        "Higher visual processing separates interacting pathways: ventral occipital–temporal processing supports recognition (“what”), while dorsal occipital–parietal processing supports spatial/action guidance. A hierarchy of feature processing is more useful than assuming a literal one-cell-for-each-grandmother rule."
      ],
      "terms": [
        {
          "term": "Retina",
          "definition": "Light-sensitive tissue at the back of the eye."
        },
        {
          "term": "Rods",
          "definition": "Dim-light sensitivity; little color information; strong peripheral representation."
        },
        {
          "term": "Cones",
          "definition": "Color and fine detail in brighter light; concentrated in the fovea."
        },
        {
          "term": "Fovea",
          "definition": "Central retinal region with high cone density and visual acuity."
        },
        {
          "term": "Blind spot",
          "definition": "Optic nerve exit with no photoreceptors."
        },
        {
          "term": "Visual cortex",
          "definition": "Occipital cortical region central to visual processing."
        },
        {
          "term": "Accommodation",
          "definition": "Lens-shape adjustment for focus at different distances."
        },
        {
          "term": "Ventral visual pathway",
          "definition": "Occipital–temporal recognition of objects/faces."
        },
        {
          "term": "Dorsal visual pathway",
          "definition": "Occipital–parietal spatial/action guidance."
        }
      ],
      "recall": "Why is it harder to identify color in a very dim room?",
      "answer": "Rods dominate dim-light vision and do not provide the cone comparisons needed for ordinary color discrimination.",
      "questions": [
        {
          "prompt": "Which cells transduce light?",
          "choices": [
            "Rods and cones",
            "Auditory hair cells",
            "Taste buds only",
            "The corpus callosum"
          ],
          "correct": 0,
          "explanation": "Retinal photoreceptors begin the visual neural signal."
        },
        {
          "prompt": "Which pathway best fits the lecture?",
          "choices": [
            "Retina → optic nerve → thalamus → visual cortex",
            "Retina → auditory cortex → cochlea",
            "Lens → pituitary → motor cortex",
            "Olfactory bulb → retina → pons"
          ],
          "correct": 0,
          "explanation": "Vision relays through retinal/optic pathways and thalamus to occipital cortex."
        },
        {
          "prompt": "Which physical property most directly relates to hue?",
          "choices": [
            "Wavelength",
            "Amplitude only",
            "Neural firing height",
            "Blood pressure"
          ],
          "correct": 0,
          "explanation": "Different wavelengths are associated with different perceived colors."
        },
        {
          "prompt": "Which pathway best matches identifying an object versus reaching toward it?",
          "choices": [
            "Ventral recognition; dorsal action guidance",
            "Dorsal recognition; ventral action guidance",
            "Both occur only in the retina",
            "Both are exclusively olfactory"
          ],
          "correct": 0,
          "explanation": "Temporal and parietal visual pathways emphasize recognition and visually guided action, respectively."
        }
      ],
      "figure": "assets/eye.png",
      "kind": "combined"
    },
    {
      "id": "color",
      "unit": "Sensation & perception",
      "title": "Color: trichromatic & opponent-process theories",
      "source": "Sensation and Perception · slides 12–15",
      "body": [
        "Trichromatic theory explains color through relative responses of three cone classes sensitive to short, medium and long wavelengths. A pattern across these classes represents a color. This is not a separate receptor for every hue.",
        "Opponent-process theory explains comparison in later visual processing: red–green, blue–yellow and light–dark channels respond in opposing ways. The two theories work at different stages and are complementary rather than mutually exclusive.",
        "Adaptation in an opponent channel can produce a complementary afterimage. After staring at green, a neutral surface can look reddish; yellow can produce blue; dark regions can produce light afterimages. The lecture’s green/yellow/black flag is an example. Afterimages expose relative channel activity, not a color physically added to the page."
      ],
      "terms": [
        {
          "term": "Trichromatic theory",
          "definition": "Color from the relative activity of three cone classes."
        },
        {
          "term": "Opponent-process theory",
          "definition": "Color comparisons in opposing channels: red–green, blue–yellow, light–dark."
        },
        {
          "term": "Afterimage",
          "definition": "A percept remaining after the stimulus is removed, often in complementary colors."
        }
      ],
      "recall": "How can both color theories be correct?",
      "answer": "Trichromatic coding describes cone input; opponent comparisons describe later processing of that input.",
      "questions": [
        {
          "prompt": "Three cone classes support which theory?",
          "choices": [
            "Trichromatic",
            "Opponent-process exclusively",
            "Activation-synthesis",
            "Threat rehearsal"
          ],
          "correct": 0,
          "explanation": "Trichromatic theory begins with three cone sensitivities."
        },
        {
          "prompt": "A reddish afterimage after prolonged green viewing supports…",
          "choices": [
            "Opponent processing",
            "A new red stimulus being present",
            "The absence of cones",
            "Purely auditory transduction"
          ],
          "correct": 0,
          "explanation": "Adaptation changes balance in an opponent channel."
        },
        {
          "prompt": "Which is an opponent pair?",
          "choices": [
            "Blue–yellow",
            "Blue–red only",
            "Green–yellow only",
            "Orange–purple only"
          ],
          "correct": 0,
          "explanation": "Blue–yellow is one of the lecture’s opponent channels."
        }
      ],
      "figure": "assets/rods-cones.png",
      "kind": "lecture"
    },
    {
      "id": "depth",
      "unit": "Sensation & perception",
      "title": "Depth cues: one eye or two?",
      "source": "Sensation and Perception · slides 18–27",
      "body": [
        "Monocular cues can work with one eye. Linear perspective: parallel lines appear to converge with distance. Occlusion: an object blocking another is perceived as nearer. Texture gradient: surface details become smaller and denser farther away. Relative size: for similarly sized objects, the smaller retinal image suggests greater distance.",
        "Motion parallax: as you move, nearby objects shift more rapidly across the visual field than distant objects. Trees close to a moving vehicle seem to sweep past faster than distant mountains. This cue uses movement, but not necessarily two eyes.",
        "Binocular disparity arises because the eyes view the scene from slightly different positions. The difference between their images supports stereopsis (depth perception from binocular information). Some texts also discuss convergence—the inward turning of the eyes for near objects—but disparity is the binocular cue explicitly emphasized in your lecture."
      ],
      "terms": [
        {
          "term": "Linear perspective",
          "definition": "Parallel lines visually converge with distance."
        },
        {
          "term": "Occlusion",
          "definition": "An overlapping object appears nearer than the object it hides."
        },
        {
          "term": "Texture gradient",
          "definition": "Texture becomes finer/denser with distance."
        },
        {
          "term": "Relative size",
          "definition": "Smaller images of similarly sized objects suggest greater distance."
        },
        {
          "term": "Motion parallax",
          "definition": "Nearby objects shift faster across view as the observer moves."
        },
        {
          "term": "Binocular disparity",
          "definition": "Differences between the two eyes’ images support depth."
        }
      ],
      "recall": "You close one eye and still see the nearer tree blocking the farther tree. Why?",
      "answer": "Occlusion is a monocular depth cue; two-eye comparison is unnecessary.",
      "questions": [
        {
          "prompt": "Nearby trees sweep by faster than distant hills. This is…",
          "choices": [
            "Motion parallax",
            "Binocular disparity",
            "Opponent processing",
            "Frisson"
          ],
          "correct": 0,
          "explanation": "Relative image motion supplies depth during observer movement."
        },
        {
          "prompt": "Which requires comparison of the eyes’ images?",
          "choices": [
            "Binocular disparity",
            "Occlusion",
            "Texture gradient",
            "Linear perspective"
          ],
          "correct": 0,
          "explanation": "Disparity is inherently binocular."
        },
        {
          "prompt": "Parallel railroad tracks seem to meet in the distance. This is…",
          "choices": [
            "Linear perspective",
            "Relative pitch",
            "A Hawthorne effect",
            "Hyperpolarization"
          ],
          "correct": 0,
          "explanation": "Apparent convergence of parallel lines is a monocular depth cue."
        }
      ],
      "figure": null,
      "kind": "lecture"
    },
    {
      "id": "illusions",
      "unit": "Sensation & perception",
      "title": "Visual illusions: useful assumptions can fail",
      "source": "Sensation and Perception · slides 29–31",
      "body": [
        "An illusion is a systematic mismatch between perception and the physical stimulus. It reveals how the perceptual system interprets ambiguous information using learned assumptions.",
        "The Ames room is distorted but viewed from a position that makes it look like an ordinary rectangular room. The normal-room assumption yields incorrect distance estimates, which alter perceived size. A person can seem to change size as they cross the room.",
        "The following-eyes/T-Rex illusion uses a concave face that is interpreted as convex. As you move, the incorrect depth interpretation makes its gaze seem to follow. Both examples show the influence of top-down assumptions rather than simply defective eyes. The lecture notes that some people with schizophrenia are less susceptible to some visual illusions; do not generalize this to all illusions or use it as a diagnostic test."
      ],
      "terms": [
        {
          "term": "Ames room",
          "definition": "Distorted room produces misleading distance and size interpretations."
        },
        {
          "term": "T-Rex / hollow-face illusion",
          "definition": "A concave face is perceived as convex; its apparent orientation changes unusually as you move."
        }
      ],
      "recall": "Why does knowing that a room is distorted not necessarily eliminate the illusion?",
      "answer": "Perceptual interpretation can operate automatically; explicit knowledge and the percept may differ.",
      "questions": [
        {
          "prompt": "Ames-room size distortion mainly reveals…",
          "choices": [
            "Assumptions about room geometry and distance",
            "That pupils cannot change size",
            "Only a lack of rods",
            "A true experimental IV in every viewing"
          ],
          "correct": 0,
          "explanation": "A familiar room assumption leads to incorrect distance and size interpretation."
        },
        {
          "prompt": "The following T-Rex gaze depends on…",
          "choices": [
            "Interpreting a concave face as convex",
            "The model physically rotating",
            "Dopamine D2 loss",
            "A new retina being formed"
          ],
          "correct": 0,
          "explanation": "The hollow-face depth interpretation creates apparent following."
        },
        {
          "prompt": "Illusions are valuable because they…",
          "choices": [
            "Expose rules and assumptions used in perception",
            "Prove perception is never useful",
            "Eliminate top-down processing",
            "Show that all senses are identical"
          ],
          "correct": 0,
          "explanation": "Systematic errors reveal normally useful processing rules."
        }
      ],
      "figure": null,
      "kind": "lecture"
    },
    {
      "id": "visual-organization",
      "unit": "Sensation & perception",
      "title": "Gestalt grouping, visual differences & culture",
      "source": "Assigned textbook notes · 5-2c–d",
      "body": [
        "Figure–ground organization separates an object from its background. Proximity groups nearby elements; similarity groups alike elements; continuity favors smooth paths; closure fills gaps; simplicity favors a coherent economical organization. These are perceptual tendencies, not guarantees that the inferred object is really present.",
        "The textbook adds shading and familiar size to depth interpretation and discusses Müller-Lyer, Ponzo, Moon and Shepard-table illusions. Context and learned assumptions can produce systematic errors. Trichromatic and opponent-process accounts address different stages; additive light mixing differs from mixing pigments.",
        "Myopia relates to an elongated eye/focus before the retina; hyperopia to a shorter eye/focus behind it; astigmatism to uneven curvature. Ishihara patterns assess color-vision differences. The text describes cultural differences in object/context emphasis at group level; they do not determine any individual’s perception. Sensory development/aging remains excluded."
      ],
      "terms": [
        {
          "term": "Proximity",
          "definition": "Group elements that are near each other."
        },
        {
          "term": "Similarity",
          "definition": "Group elements with similar visual properties."
        },
        {
          "term": "Closure",
          "definition": "Perceive incomplete contours as whole forms."
        },
        {
          "term": "Figure–ground",
          "definition": "Separate a focal object from its background."
        },
        {
          "term": "Myopia / hyperopia",
          "definition": "Near-/farsighted focusing patterns associated with elongated/shorter eyes."
        },
        {
          "term": "Astigmatism",
          "definition": "Uneven curvature distorts optical focus."
        }
      ],
      "recall": "You see an incomplete circle as a whole shape. Which grouping principle best fits?",
      "answer": "Closure. Closure fills gaps in a contour.",
      "questions": [
        {
          "prompt": "You see an incomplete circle as a whole shape. Which grouping principle best fits?",
          "choices": [
            "Closure",
            "Proximity",
            "Interaural timing",
            "Reuptake"
          ],
          "correct": 0,
          "explanation": "Closure fills gaps in a contour."
        },
        {
          "prompt": "Which statement about cultural visual differences is justified?",
          "choices": [
            "Group-level tendencies do not determine each individual’s perception",
            "Every member of a culture sees identically",
            "Culture replaces retinal transduction",
            "Context effects prove vision is unrelated to the brain"
          ],
          "correct": 0,
          "explanation": "A group association should not be turned into an absolute claim about individuals."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "hearing",
      "unit": "Sensation & perception",
      "title": "Hearing: transduction, pitch & sound location",
      "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e",
      "body": [
        "Sound is a pressure wave. The outer ear channels it to the eardrum; middle-ear ossicles transmit vibration to the oval window of the cochlea. Fluid motion moves the basilar membrane, bending hair-cell structures and generating neural signals. Auditory pathways carry signals through a thalamic relay to auditory cortex in the temporal lobe.",
        "Frequency (Hz, cycles per second) corresponds primarily to pitch; amplitude corresponds primarily to loudness (often described using dB). Infrasound lies below the usual human hearing range; ultrasound above it. The lecture’s species examples show different hearing ranges.",
        "Sound localization compares arrival time and intensity between ears. A sound from the right generally reaches the right ear sooner and may be louder there because the head reduces intensity at the far ear. These are distinct cues; they do not depend simply on recognizing the sound. Ear shape also contributes elevation/location information.",
        "Follow the full route: pinna → canal → tympanic membrane → ossicles → oval window → cochlear fluid/basilar membrane → hair cells in organ of Corti → auditory nerve → medulla → midbrain → thalamus → auditory cortex. The round window permits pressure displacement.",
        "High frequencies maximally stimulate the stiff basilar base near the oval window; low frequencies peak toward the flexible apex. The textbook places temporal coding mainly below about 4,000 Hz and place coding above; treat that as an approximate transition, not a universal sharp boundary. Pinna cues also help elevation, while arrival timing and intensity differences help side-to-side location."
      ],
      "terms": [
        {
          "term": "Cochlea",
          "definition": "Inner-ear structure housing the basilar membrane and auditory hair cells."
        },
        {
          "term": "Hair cells",
          "definition": "Convert mechanical motion into auditory neural signals."
        },
        {
          "term": "Frequency",
          "definition": "Cycles per second; strongly related to pitch."
        },
        {
          "term": "Amplitude",
          "definition": "Wave magnitude; strongly related to loudness."
        },
        {
          "term": "Interaural time difference",
          "definition": "Difference in a sound’s arrival time at the two ears."
        },
        {
          "term": "Interaural intensity difference",
          "definition": "Difference in sound strength at the two ears."
        },
        {
          "term": "Basilar base versus apex",
          "definition": "Base: stiff, high-frequency peaks; apex: flexible, low-frequency peaks."
        },
        {
          "term": "Round window",
          "definition": "Permits displacement of cochlear pressure."
        },
        {
          "term": "Organ of Corti",
          "definition": "Hair-cell sensory apparatus on the basilar membrane."
        }
      ],
      "recall": "A sound’s frequency doubles while its amplitude stays the same. Which perceptual property changes most directly?",
      "answer": "Pitch increases; loudness is more directly related to amplitude, although perception is not a perfect one-to-one mapping.",
      "questions": [
        {
          "prompt": "Auditory transduction occurs through…",
          "choices": [
            "Hair cells in the cochlea",
            "Cones in the retina",
            "Olfactory receptors",
            "The corpus callosum"
          ],
          "correct": 0,
          "explanation": "Hair cells convert mechanical motion to neural signals."
        },
        {
          "prompt": "Higher sound frequency generally produces…",
          "choices": [
            "Higher pitch",
            "Greater brightness",
            "Necessarily greater loudness",
            "A longer wavelength of light"
          ],
          "correct": 0,
          "explanation": "Frequency corresponds mainly to pitch."
        },
        {
          "prompt": "A right-side sound reaches one ear sooner and stronger. These differences support…",
          "choices": [
            "Sound localization",
            "Color afterimages",
            "Taste transduction",
            "Random assignment"
          ],
          "correct": 0,
          "explanation": "Interaural timing and intensity locate the source."
        },
        {
          "prompt": "Where does a high-frequency tone most strongly displace the basilar membrane?",
          "choices": [
            "Near its stiff base by the oval window",
            "Only at the flexible apex",
            "In the retina’s fovea",
            "At every location equally"
          ],
          "correct": 0,
          "explanation": "Frequency is mapped along the membrane; high-frequency peaks are nearer the base."
        }
      ],
      "figure": "assets/ear.png",
      "kind": "combined"
    },
    {
      "id": "auditory-illusions",
      "unit": "Sensation & perception",
      "title": "Auditory illusions, integration & frisson",
      "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e",
      "body": [
        "The McGurk effect shows that visual speech information can change what you hear: an identical sound can be perceived differently with different visible mouth movements. It demonstrates multisensory integration rather than that one sensory channel is always correct.",
        "The octave/scale illusion shows auditory grouping and organization: a listener may perceive a pattern differently from the physical sequence delivered to each ear. In phantom words, ambiguous repeated sounds seem to contain meaningful words; expectations and language shape what is heard.",
        "Frisson is a pleasurable chill or goosebump response, often to music. The lecture reports about 50–67% experience it; triggers include unexpected harmonies and sudden volume changes. Participants reporting frisson had more connections between auditory cortex and anterior insular cortex (emotion-related processing). This is an association; it does not by itself prove that the connections cause the response.",
        "Auditory grouping uses common onset, location and similarity. Ventriloquism illustrates visual influence on perceived sound location; sine-wave speech illustrates how top-down knowledge can make an initially strange signal intelligible. Sign languages are full languages, and ASL is not simply English expressed with hands."
      ],
      "terms": [
        {
          "term": "McGurk effect",
          "definition": "Visual mouth movements change perceived speech sounds."
        },
        {
          "term": "Phantom words",
          "definition": "Meaningful words seem to emerge from ambiguous repeated sounds."
        },
        {
          "term": "Frisson",
          "definition": "Pleasurable chills, often triggered by musical surprises."
        },
        {
          "term": "Anterior insular cortex",
          "definition": "Emotion-related region linked to auditory connectivity in the frisson lecture."
        },
        {
          "term": "Auditory grouping",
          "definition": "Combine sound components using cues such as onset, location and similarity."
        }
      ],
      "recall": "Why is the McGurk effect a cross-topic example of top-down or integrative processing?",
      "answer": "The perceived sound depends on other information, including the visible speaker. Hearing is an interpretation integrating input, not a literal copy of the sound wave.",
      "questions": [
        {
          "prompt": "A changing mouth video changes an identical perceived sound. This is…",
          "choices": [
            "McGurk effect",
            "Motion parallax",
            "REM rebound",
            "Saltatory conduction"
          ],
          "correct": 0,
          "explanation": "Visual speech alters auditory perception."
        },
        {
          "prompt": "The lecture associates frisson with stronger connections between auditory cortex and…",
          "choices": [
            "Anterior insular cortex",
            "Only the retina",
            "Spinal cord alone",
            "Olfactory receptors"
          ],
          "correct": 0,
          "explanation": "The anterior insula is involved in emotion-related processing."
        },
        {
          "prompt": "Hearing words in ambiguous repeated sounds illustrates…",
          "choices": [
            "Expectation and perceptual organization",
            "Only an increase in frequency",
            "Random assignment",
            "Endocrine transmission"
          ],
          "correct": 0,
          "explanation": "Language expectations can shape auditory interpretations."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "smell",
      "unit": "Sensation & perception",
      "title": "Smell & its emotional connections",
      "source": "Sensation and Perception · slides 46–51; assigned textbook notes · 5-5a",
      "body": [
        "Odor molecules interact with olfactory receptors in the nose, initiating transduction. Signals travel to the olfactory bulb and then to primary olfactory cortex and connected limbic regions. Unlike the usual initial route for vision and hearing, smell reaches primary olfactory cortex without a required initial thalamic relay.",
        "Connections with the amygdala and memory-related systems help explain why an odor can evoke strong emotion or recollection. This is a biological connection between sensation, emotion and memory, not merely a poetic association.",
        "The slides contrast about 5 million human olfactory receptors with about 220 million in dogs and give scent-detection examples. Memorize these as the approximate figures used in class, not universal counts for every human or dog. Receptor numbers and the organization of the system both contribute to sensitivity.",
        "Odor molecules dissolve in mucus and stimulate nasal receptors → olfactory nerve/bulb → olfactory cortex and amygdala-related pathways. Initial cortical olfactory processing bypasses the thalamic relay typical of other senses, but later routes involving thalamus/orbitofrontal cortex contribute to awareness. Thus “smell never involves thalamus” is too absolute. Receptor cells are replaced over roughly 4–6 weeks."
      ],
      "terms": [
        {
          "term": "Olfactory receptor",
          "definition": "Nasal receptor that responds to odor molecules."
        },
        {
          "term": "Olfactory bulb",
          "definition": "Early brain structure receiving olfactory input."
        },
        {
          "term": "Olfactory cortex",
          "definition": "Cortex receiving smell input after the bulb."
        },
        {
          "term": "Smell’s initial relay exception",
          "definition": "Primary olfactory access does not require an initial thalamic relay like vision/hearing."
        },
        {
          "term": "Initial olfactory bypass",
          "definition": "Early olfactory processing reaches cortex without the usual initial thalamic relay; later thalamic processing can occur."
        }
      ],
      "recall": "Why might a familiar perfume immediately bring back an emotional memory?",
      "answer": "Olfactory pathways connect closely with amygdala and memory-related networks, linking odor with emotion and recollection.",
      "questions": [
        {
          "prompt": "Which sense is an exception to the typical initial thalamic relay?",
          "choices": [
            "Smell",
            "Vision",
            "Hearing",
            "Touch"
          ],
          "correct": 0,
          "explanation": "Olfactory input reaches primary cortex through the bulb without that initial relay."
        },
        {
          "prompt": "An odor’s strong emotional effect is partly connected to the…",
          "choices": [
            "Amygdala",
            "Lens",
            "Basilar membrane",
            "Myelin nodes only"
          ],
          "correct": 0,
          "explanation": "Olfactory connections to emotion networks include the amygdala."
        },
        {
          "prompt": "Olfactory transduction begins with…",
          "choices": [
            "Odor molecules interacting with nasal receptors",
            "Light striking cones",
            "Vibration of the eardrum",
            "Hormones entering the iris"
          ],
          "correct": 0,
          "explanation": "Smell is a chemical sense."
        },
        {
          "prompt": "Which statement about smell and the thalamus is most accurate?",
          "choices": [
            "Initial cortical routes bypass it, but later processing can involve it",
            "No olfactory processing ever involves it",
            "Every odor must first cross the same thalamic relay as vision",
            "The olfactory bulb is itself the thalamus"
          ],
          "correct": 0,
          "explanation": "Distinguish an initial relay exception from the entire later processing network."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "body-taste",
      "unit": "Sensation & perception",
      "title": "Touch, pain & taste: text-topic essentials",
      "source": "Assigned textbook notes · 5-4b–c; 5-5b–e",
      "body": [
        "Somatosensation includes touch, temperature and body-related signals. Skin receptors and free nerve endings transduce stimulation; information travels through spinal/brain pathways to somatosensory cortex in parietal cortex. Different receptors respond to pressure, vibration, stretch, heat/cold or potentially damaging stimulation.",
        "Nociception signals potential tissue damage; experienced pain also depends on attention, expectation, emotion and brain processing. Gate-control accounts describe modulation of signals in spinal pathways; competing touch input can reduce some pain, as when rubbing a bumped elbow. Endorphins also influence pain signaling.",
        "Gustation is chemical sensing: dissolved molecules interact with taste receptor cells in taste buds. Basic tastes include sweet, sour, salty, bitter and umami. Signals reach brainstem, thalamic and gustatory cortical pathways. Flavor combines taste with smell, explaining why congestion can make food seem bland."
      ],
      "terms": [
        {
          "term": "Somatosensation",
          "definition": "Body senses including touch and temperature."
        },
        {
          "term": "Nociception",
          "definition": "Neural signaling of potentially damaging stimulation."
        },
        {
          "term": "Gate control",
          "definition": "Modulation of pain-related input in spinal pathways."
        },
        {
          "term": "Gustation",
          "definition": "Taste: chemical sensing through taste receptor cells."
        },
        {
          "term": "Flavor",
          "definition": "Combined experience involving taste, smell and other sensory input."
        }
      ],
      "recall": "Why can a blocked nose reduce flavor while you can still detect sweetness?",
      "answer": "Taste receptor cells still detect basic tastes, but reduced olfactory input removes a major component of flavor.",
      "questions": [
        {
          "prompt": "Why may rubbing a bumped elbow reduce some pain?",
          "choices": [
            "Touch input can modulate pain signaling",
            "It eliminates all tissue damage instantly",
            "It closes the optic nerve",
            "It raises sound frequency"
          ],
          "correct": 0,
          "explanation": "Gate-control accounts include interaction between touch and pain-related signals."
        },
        {
          "prompt": "Taste transduction begins when…",
          "choices": [
            "Dissolved chemicals interact with taste receptor cells",
            "Light enters the retina",
            "Pressure bends cochlear hair cells",
            "D2 receptors disappear"
          ],
          "correct": 0,
          "explanation": "Gustation is chemical sensing."
        },
        {
          "prompt": "Food tastes bland during congestion largely because…",
          "choices": [
            "Smell contributes strongly to flavor",
            "Taste buds all die immediately",
            "Vision cannot reach the thalamus",
            "Every food loses its chemicals"
          ],
          "correct": 0,
          "explanation": "Flavor combines olfactory and gustatory input."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "vestibular",
      "unit": "Sensation & perception",
      "title": "Balance, body position & sensory maps",
      "source": "Assigned textbook notes · 5-4a–b",
      "body": [
        "Vestibular hair cells in the inner ear signal head movement, acceleration and rotation. Vestibular processing interacts with medulla, cerebellum, vision and spinal posture circuits, and with thalamic/parietal pathways for voluntary action. The vestibulo-ocular reflex moves eyes opposite head motion to stabilize gaze.",
        "Body position is not all vestibular: somatosensory input also contributes. Skin stretch, vibration and pressure receptors and free endings send information through spinal pathways, thalamus and parietal somatosensory cortex; facial input uses cranial nerves.",
        "The somatosensory homunculus reflects cortical representation, not body-part physical size. Braille practice, musicianship, amputation and prosthetic input illustrate changing sensory maps. Phantom sensations can reflect reorganized processing. Map changes need not mean damaged CNS axons grew back. Brain tissue itself lacks nociceptors, while surrounding tissues can produce head pain."
      ],
      "terms": [
        {
          "term": "Vestibular sense",
          "definition": "Inner-ear information about head movement, acceleration and balance."
        },
        {
          "term": "Vestibulo-ocular reflex",
          "definition": "Eyes move opposite head movement to stabilize gaze."
        },
        {
          "term": "Sensory map plasticity",
          "definition": "Cortical representations can change with experience, injury or new input."
        }
      ],
      "recall": "As your head turns right, your eyes move left to keep a target stable. This is…",
      "answer": "The vestibulo-ocular reflex. Vestibular signals coordinate compensating eye motion.",
      "questions": [
        {
          "prompt": "As your head turns right, your eyes move left to keep a target stable. This is…",
          "choices": [
            "The vestibulo-ocular reflex",
            "A cochlear frequency code",
            "The opponent-color afterimage",
            "A pituitary hormone release"
          ],
          "correct": 0,
          "explanation": "Vestibular signals coordinate compensating eye motion."
        },
        {
          "prompt": "Why are hands large on a sensory homunculus?",
          "choices": [
            "Cortical representation is large relative to body size",
            "Hands physically occupy most of the body",
            "Their nerves all bypass the CNS",
            "Only hands have receptors"
          ],
          "correct": 0,
          "explanation": "The map depicts allocation of processing, not anatomical size."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "pain",
      "unit": "Sensation & perception",
      "title": "Pain: pathways, gates & expectation",
      "source": "Assigned textbook notes · 5-4c",
      "body": [
        "Fast sharp pain uses myelinated fibers; slower dull aching uses unmyelinated fibers. Spinal and thalamic pathways contribute to somatosensory processing of location. Cingulate, insula and amygdala-related processing contributes to affective aspects. Nociceptive input and the whole experience of pain are related but not identical.",
        "Spinal gate-control accounts describe modulation by other inputs, including touch from rubbing a bumped area. Descending brain signals also influence processing. Periaqueductal gray (PAG) and endorphin/opioid systems participate in pain modulation.",
        "Attention, stress, perceived control, expectations and context can influence pain. Placebo-related modulation does not mean the experience is imaginary. The spouse-hand study and cultural examples illustrate associations/context effects, not a universal rule that one social situation always removes pain."
      ],
      "terms": [
        {
          "term": "Fast versus slow pain",
          "definition": "Myelinated fibers support sharp/fast signaling; unmyelinated fibers support slower aching."
        },
        {
          "term": "PAG",
          "definition": "Midbrain periaqueductal gray involved in descending/opioid-related pain modulation."
        },
        {
          "term": "Pain’s sensory and affective aspects",
          "definition": "Location/intensity and emotional unpleasantness involve interacting processing systems."
        }
      ],
      "recall": "Why can rubbing an injured area alter pain without repairing the injury?",
      "answer": "Touch input can modulate spinal pain signaling. Pain experience depends on processing and modulation as well as tissue-related input.",
      "questions": [
        {
          "prompt": "Why can rubbing an injured area alter pain without repairing the injury?",
          "choices": [
            "Touch input can modulate spinal pain signaling",
            "The optic chiasm reverses the pain signal",
            "Every damaged nerve instantly regrows",
            "Rubbing necessarily eliminates nociception"
          ],
          "correct": 0,
          "explanation": "Pain experience depends on processing and modulation as well as tissue-related input."
        },
        {
          "prompt": "Which pathway difference fits sharp then aching pain?",
          "choices": [
            "Faster myelinated then slower unmyelinated fibers",
            "Only retinal rods then cones",
            "Unmyelinated always faster than myelinated",
            "Both depend on the same sound frequency"
          ],
          "correct": 0,
          "explanation": "Myelin changes conduction speed; the textbook distinguishes fast sharp and slower dull signals."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "taste-flavor",
      "unit": "Sensation & perception",
      "title": "Taste, flavor & contextual meaning",
      "source": "Assigned textbook notes · 5-5b–e",
      "body": [
        "Chemicals dissolved in saliva interact with taste cells in taste buds on papillae. The basic tastes are sweet, sour, salty, bitter and umami. Capsaicin’s burn is a pain-related signal, not a sixth basic taste. A rigid tongue map that confines each taste to a single zone is false.",
        "Taste signals pass through brainstem/medulla → thalamus → gustatory regions including insula and lower parietal cortex; orbitofrontal processing integrates flavor and pleasantness. Smell contributes strongly, so congestion can make food bland even when basic taste detection remains.",
        "Supertasters differ in papillae/taste sensitivity. Labels and learned associations change interpretation: an onion-like odor may seem like pizza or body odor depending on context; wintergreen can evoke candy or medicine. Traumatic odor associations and loneliness-related threat vigilance illustrate how social experience shapes perception, not just receptor input."
      ],
      "terms": [
        {
          "term": "Five basic tastes",
          "definition": "Sweet, sour, salty, bitter, umami."
        },
        {
          "term": "Capsaicin",
          "definition": "Produces a pain-related burning signal, not a basic taste."
        },
        {
          "term": "Supertaster",
          "definition": "Individual with greater taste sensitivity, associated with papillae differences."
        },
        {
          "term": "Orbitofrontal flavor integration",
          "definition": "Combine sensory/contextual information in evaluating flavor and pleasantness."
        }
      ],
      "recall": "Which statement about taste is accurate?",
      "answer": "Capsaicin burn is pain-related, and the rigid tongue map is false. Basic tastes are not isolated in exclusive tongue zones, and chili burn is not a basic taste quality.",
      "questions": [
        {
          "prompt": "Which statement about taste is accurate?",
          "choices": [
            "Capsaicin burn is pain-related, and the rigid tongue map is false",
            "Capsaicin is the sixth basic taste",
            "Sweetness exists only at the tongue tip",
            "Smell contributes nothing to flavor"
          ],
          "correct": 0,
          "explanation": "Basic tastes are not isolated in exclusive tongue zones, and chili burn is not a basic taste quality."
        },
        {
          "prompt": "The same odor seems pleasant with a food label and unpleasant with a body-odor label. This illustrates…",
          "choices": [
            "Context and top-down meaning influencing perception",
            "A chemical necessarily changing when named",
            "No involvement of smell receptors",
            "A purely random assignment error"
          ],
          "correct": 0,
          "explanation": "Sensory input is interpreted using expectations and learned associations."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "awareness",
      "unit": "Consciousness",
      "title": "What counts as consciousness?",
      "source": "Consciousness · slides 3–6; assigned textbook notes · 6-1",
      "body": [
        "The lecture gives three definitions from simplest to most complex: variations in alertness, awareness of ongoing sensations, and self-awareness. A person can be awake but inattentive to a stimulus; alertness alone does not guarantee detailed awareness.",
        "Mirror recognition is an operational approach to self-awareness. In a typical mark test, an unnoticed mark is placed on an animal or person; using a mirror to inspect or touch the mark on one’s own body supports recognition of the reflection as self. Responding only to the reflected “other” does not meet this criterion.",
        "Passing provides evidence for that form of self-recognition, not proof of every type of consciousness. Failing does not establish absence of consciousness: vision, motivation, species behavior and the task’s suitability matter. Humans typically pass during early childhood; some great apes and some other species show evidence, with species/method variation.",
        "The textbook distinguishes state (level of alertness), content (what is experienced) and self-awareness. In the readiness-potential example, activity preceded movement by about 550 ms and reported intention by about 200 ms before movement. This timing raises questions but does not by itself prove that free will is absent. Split-brain verbal rationalization likewise shows limits of conscious explanations."
      ],
      "terms": [
        {
          "term": "Alertness",
          "definition": "Level of wakefulness/arousal."
        },
        {
          "term": "Sensory awareness",
          "definition": "Awareness of ongoing experiences."
        },
        {
          "term": "Self-awareness",
          "definition": "Awareness of oneself as the subject of experience."
        },
        {
          "term": "Mirror recognition",
          "definition": "Behavior showing that a reflection is recognized as self; one operational measure."
        },
        {
          "term": "State / content / self",
          "definition": "Alertness level; experienced information; awareness of oneself."
        },
        {
          "term": "Readiness-potential limit",
          "definition": "Pre-movement activity precedes reported intention; timing alone does not settle free will."
        }
      ],
      "recall": "Why is “fails the mirror test, therefore not conscious” an invalid inference?",
      "answer": "The test operationalizes one kind of self-recognition and may be unsuitable for the species or individual. Consciousness has broader definitions.",
      "questions": [
        {
          "prompt": "Which definition is most complex in the lecture’s progression?",
          "choices": [
            "Self-awareness",
            "Variation in alertness",
            "Awareness of sensations",
            "Pupil dilation"
          ],
          "correct": 0,
          "explanation": "Self-awareness is the third and most complex listed definition."
        },
        {
          "prompt": "Touching a mark on one’s own body after viewing a mirror supports…",
          "choices": [
            "Mirror self-recognition",
            "Only a response to another animal",
            "Random assignment",
            "Auditory transduction"
          ],
          "correct": 0,
          "explanation": "The mirror is used to guide action toward the self."
        },
        {
          "prompt": "Failure on the mirror test establishes…",
          "choices": [
            "A limitation on evidence from that particular task",
            "Absence of all consciousness",
            "Absence of any sensory ability",
            "A proven lack of memory"
          ],
          "correct": 0,
          "explanation": "Task failure does not prove absence of broader awareness."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "consciousness-models",
      "unit": "Consciousness",
      "title": "Evolution, self-awareness & AI tests",
      "source": "Assigned textbook notes · 6-1a–b",
      "kind": "textbook",
      "figure": null,
      "body": [
        "Consciousness can support flexible responses: alertness, coordinating sleep/energy and responding to sensory information. Evolutionary examples connect sleep patterns with shelter and predation risk; they are accounts of possible functions rather than a single demonstrated purpose.",
        "Self-awareness involves representing oneself. Mirror self-recognition is one test of self-awareness, emerging around 18 months in human development. Performance on a particular behavioral test does not measure every form of awareness.",
        "Weak AI simulates a task or behavior; strong AI in the textbook refers to the full range of intelligent capacities. A Turing-style conversation test evaluates whether behavior can be distinguished from a human interlocutor, not direct proof of subjective experience. These are conceptual/historical distinctions, not claims about the latest AI systems."
      ],
      "terms": [
        {
          "term": "Weak versus strong AI",
          "definition": "Task/behavior simulation versus the full range of intelligent capacities in the textbook framing."
        },
        {
          "term": "Turing test limitation",
          "definition": "Conversational behavior is assessed; passing does not directly establish subjective experience."
        },
        {
          "term": "Mirror self-recognition",
          "definition": "A behavioral test of self-recognition, not a complete measure of consciousness."
        }
      ],
      "recall": "Does passing a conversational Turing test directly prove subjective experience?",
      "answer": "No. It evaluates distinguishability of behavior in conversation; subjective experience is a separate question.",
      "questions": [
        {
          "prompt": "What does a Turing-style conversation test directly assess?",
          "choices": [
            "Whether conversational behavior is distinguishable from a human’s",
            "Whether a system has proved subjective experience",
            "Whether its EEG contains sleep spindles",
            "Whether it has the same biological neurons as a person"
          ],
          "correct": 0,
          "explanation": "A behavioral test and proof of subjective experience are different evidential claims."
        },
        {
          "prompt": "Why should a mirror test not be treated as a complete measure of consciousness?",
          "choices": [
            "It tests a particular self-recognition behavior",
            "It measures only the number of spinal nerves",
            "It proves all nonpassing organisms lack any experience",
            "It is equivalent to irreversible brain death"
          ],
          "correct": 0,
          "explanation": "Consciousness includes alertness, content and self-awareness; one test does not exhaust those dimensions."
        }
      ]
    },
    {
      "id": "awake",
      "unit": "Consciousness",
      "title": "Waking EEG & the default mode network",
      "source": "Consciousness · slides 7–9; assigned textbook notes · 6-1b",
      "body": [
        "EEG records electrical patterns at the scalp. The lecture associates alpha waves with awake but relaxed states, beta waves with active data processing, and gamma waves with sensory processing. These categories are useful patterns, not one-wave-only labels for an entire brain.",
        "The default mode network (DMN) is a network active during internally oriented, non-task-focused thought, including mind wandering. The slides describe background activity, estimate about 50% of waking hours spent mind wandering, and connect this topic with alpha activity.",
        "Proposed adaptive functions include reflecting on self and social experiences, integrating memories, and imagining/planning future events. Treat these as proposed functions rather than proof that mind wandering is always beneficial. The DMN is not an “off” brain: lack of an external task can still involve organized mental activity.",
        "Consciousness depends on interacting cortical, thalamic and reticular systems, rather than a single sufficient “consciousness center.” The default mode network supports self/other thinking, remembering and imagining the future; it often decreases with external tasks but is not an idle, switched-off brain."
      ],
      "terms": [
        {
          "term": "Alpha",
          "definition": "Lecture: awake but relaxed."
        },
        {
          "term": "Beta",
          "definition": "Lecture: active data processing; also REM-like waking activity."
        },
        {
          "term": "Gamma",
          "definition": "Lecture: processing sensory input."
        },
        {
          "term": "DMN",
          "definition": "Default mode network; internally oriented thought during non-task-focused states."
        }
      ],
      "recall": "You sit quietly and imagine next week’s plans. Is the brain inactive?",
      "answer": "No. Internally oriented processing can recruit the default mode network even without an external task.",
      "questions": [
        {
          "prompt": "Awake and relaxed is associated in lecture with…",
          "choices": [
            "Alpha waves",
            "Delta waves only",
            "K complexes",
            "Sleep spindles"
          ],
          "correct": 0,
          "explanation": "Alpha is the lecture’s relaxed-wakefulness pattern."
        },
        {
          "prompt": "Active data processing is associated with…",
          "choices": [
            "Beta waves",
            "Only delta waves",
            "Only theta waves",
            "No EEG activity"
          ],
          "correct": 0,
          "explanation": "Beta is associated with active processing."
        },
        {
          "prompt": "Mind wandering is especially connected to the…",
          "choices": [
            "Default mode network",
            "Basilar membrane",
            "Taste bud",
            "Enteric reflex only"
          ],
          "correct": 0,
          "explanation": "DMN activity is associated with internally oriented thought."
        }
      ],
      "figure": "assets/wake-eeg.png",
      "kind": "combined"
    },
    {
      "id": "attention",
      "unit": "Consciousness",
      "title": "Attention: multitasking, Stroop & change blindness",
      "source": "Consciousness · slides 10–12",
      "body": [
        "Attention is limited. Performing multiple demanding tasks often involves rapid switching rather than fully parallel processing, with costs in speed and accuracy. Being confident you can multitask is not evidence that performance is unaffected.",
        "The Stroop effect occurs when naming the ink color is harder if a written color word conflicts with it. Automatic reading competes with the task of color naming; incongruent trials often take longer or produce more errors. The demo here asks for ink color, not the word.",
        "Change blindness is failure to notice a change in a scene, often when it occurs during a disruption or while attention is elsewhere. It shows that seeing a scene does not mean maintaining a detailed representation of everything in it. Distinguish inattentional blindness (missing an unexpected object) from change blindness (missing a change). Across the lecture examples, explain limits on simultaneous processing."
      ],
      "terms": [
        {
          "term": "Divided attention",
          "definition": "Allocation of limited attention across tasks, often with switching costs."
        },
        {
          "term": "Stroop interference",
          "definition": "Conflict between automatic word reading and naming the ink color."
        },
        {
          "term": "Change blindness",
          "definition": "Failure to notice a change in a scene."
        },
        {
          "term": "Inattentional blindness",
          "definition": "Failure to notice an unexpected stimulus while attention is elsewhere."
        }
      ],
      "recall": "Why does reading the word RED in blue ink slow a “name the color” response?",
      "answer": "The automatically activated word response conflicts with the required blue response, producing interference.",
      "questions": [
        {
          "prompt": "The word BLUE is printed in red ink. In a Stroop color task, the correct answer is…",
          "choices": [
            "Red",
            "Blue",
            "Either, because they are equivalent",
            "The word must be ignored by closing your eyes"
          ],
          "correct": 0,
          "explanation": "Name the ink color, not the text."
        },
        {
          "prompt": "Missing that a person changes during a brief interruption illustrates…",
          "choices": [
            "Change blindness",
            "Opponent color adaptation",
            "Tolerance",
            "Afferent communication"
          ],
          "correct": 0,
          "explanation": "The unnoticed feature changed between views."
        },
        {
          "prompt": "Why does demanding multitasking often harm performance?",
          "choices": [
            "Limited attention and switching costs",
            "All tasks become entirely automatic",
            "The DMN guarantees perfect attention",
            "The retina stops working"
          ],
          "correct": 0,
          "explanation": "Dividing attention across demanding tasks has costs."
        }
      ],
      "figure": null,
      "kind": "lecture"
    },
    {
      "id": "sleep-stages",
      "unit": "Consciousness",
      "title": "Sleep stages & the nightly cycle",
      "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c",
      "body": [
        "Use the stage labels from your lecture for the exam. NREM stage 1: theta waves and light sleep. Stage 2: sleep spindles and K complexes. Stages 3 and 4: delta-dominant slow-wave sleep. Modern systems commonly combine the old stages 3 and 4 into N3.",
        "REM means rapid eye movement. The lecture calls it paradoxical sleep: waking-like beta activity with body-muscle paralysis, increased sympathetic activity and vivid dreaming. The brain is active while many skeletal muscles are inhibited. Dreaming can occur outside REM too, so do not equate every dream with REM.",
        "Sleep cycles repeat during the night, roughly every 90 minutes with variation. Deep slow-wave sleep is more prominent early; REM periods tend to lengthen later. A hypnogram tracks stages over time, not the brain’s physical position. Learn to distinguish stage markers, rather than assuming all sleep is one uniform state.",
        "Text frequency bands are beta 15–30 Hz, alpha 9–12, gamma above 30, theta 4–7 and delta 1–4; boundaries are descriptive conventions. Stage 2 spindles and K-complexes relate to tuning out input and memory; early-night cycles contain more deep NREM, later cycles longer REM. First REM is roughly 90–120 minutes after sleep onset."
      ],
      "terms": [
        {
          "term": "Stage 1",
          "definition": "Theta activity; light NREM sleep."
        },
        {
          "term": "Stage 2",
          "definition": "Sleep spindles and K complexes."
        },
        {
          "term": "Stages 3 & 4",
          "definition": "Lecture’s slow-wave stages; prominent delta activity."
        },
        {
          "term": "REM",
          "definition": "Rapid eye movement, waking-like activity, muscle atonia and frequent vivid dreams."
        },
        {
          "term": "Paradoxical sleep",
          "definition": "REM: active brain with strong skeletal-muscle inhibition."
        },
        {
          "term": "Hypnogram",
          "definition": "Graph of sleep stage across the night."
        },
        {
          "term": "Nightly cycle shift",
          "definition": "More deep NREM early; longer REM periods later."
        },
        {
          "term": "Stage 2 features",
          "definition": "Sleep spindles and K-complexes."
        }
      ],
      "recall": "An EEG has sleep spindles and K complexes. Another has delta waves. A third has waking-like activity and muscle atonia. Identify each.",
      "answer": "Stage 2; stages 3/4 slow-wave sleep; REM.",
      "questions": [
        {
          "prompt": "Sleep spindles and K complexes indicate…",
          "choices": [
            "Stage 2",
            "Stage 1",
            "Relaxed wakefulness only",
            "REM exclusively"
          ],
          "correct": 0,
          "explanation": "These are stage 2 markers."
        },
        {
          "prompt": "Why is REM called paradoxical?",
          "choices": [
            "Waking-like brain activity coexists with muscle paralysis",
            "No brain activity occurs",
            "The body is active while the brain is dead",
            "It happens only before sleep"
          ],
          "correct": 0,
          "explanation": "The contrast between brain activation and muscle atonia is the paradox."
        },
        {
          "prompt": "Which nightly pattern is typical?",
          "choices": [
            "More slow-wave sleep early and longer REM periods later",
            "Only REM in the first hour",
            "No repeated cycles",
            "Stages always progress once and never repeat"
          ],
          "correct": 0,
          "explanation": "Sleep architecture changes across repeated cycles."
        }
      ],
      "figure": "assets/sleep-eeg.png",
      "kind": "combined"
    },
    {
      "id": "sleep-purpose",
      "unit": "Consciousness",
      "title": "Why sleep? Dreams, REM rebound & restoration",
      "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d",
      "body": [
        "Sleep supports restoration and integration of information. Sleep deprivation can impair memory and cognition; the lecture links sleep with human growth hormone release. REM makes up a larger share of sleep early in life and decreases across development.",
        "REM rebound is increased REM after it has been selectively interrupted or deprived. This supports the idea that REM has important functions, though it does not identify one exclusive purpose. Both REM and NREM contribute to memory-related processes; do not assign all memory consolidation to only one stage.",
        "The lecture contrasts explanations of dreams. Freud emphasized unconscious wishes and symbolism. Activation-synthesis proposes that the brain builds a narrative from internally generated neural activity. Threat-rehearsal accounts propose an evolved role in simulating threats. These are different theoretical explanations, not interchangeable descriptions or equally proven facts.",
        "The notes distinguish NREM memory reactivation/transformation and REM stabilization, along with restoration, immunity and metabolic regulation. Deep early NREM is associated with a growth-hormone peak. REM rebound follows deprivation, and infants spend a higher proportion in REM.",
        "Activation–synthesis links dreams to internally generated activity and interpretation; reduced frontal logic can help explain implausible dreams. Lucid dreams involve awareness of dreaming. Neither REM association nor a proposed dream theory means every dream occurs only in REM or has one established purpose."
      ],
      "terms": [
        {
          "term": "REM rebound",
          "definition": "Increased REM following interruption/deprivation of REM."
        },
        {
          "term": "Activation-synthesis",
          "definition": "Dream narratives emerge from the brain interpreting internally generated activity."
        },
        {
          "term": "Threat rehearsal",
          "definition": "Dreaming proposed as practice for coping with threatening situations."
        },
        {
          "term": "Freudian dream account",
          "definition": "Dream content reflects unconscious material and symbolism."
        },
        {
          "term": "Lucid dreaming",
          "definition": "Awareness that one is dreaming while the dream continues."
        }
      ],
      "recall": "How do activation-synthesis and threat-rehearsal explanations differ?",
      "answer": "The first focuses on the brain making sense of internal activity; the second proposes an adaptive simulation function.",
      "questions": [
        {
          "prompt": "Extra REM after REM interruption is…",
          "choices": [
            "REM rebound",
            "Change blindness",
            "A Hawthorne effect",
            "A mirror-test response"
          ],
          "correct": 0,
          "explanation": "REM rebounds following deprivation."
        },
        {
          "prompt": "Building a dream narrative from internally generated activation fits…",
          "choices": [
            "Activation-synthesis",
            "Only Freud’s symbolic account",
            "Purely random sampling",
            "Opponent-process color theory"
          ],
          "correct": 0,
          "explanation": "The theory synthesizes internally generated activity into a narrative."
        },
        {
          "prompt": "Which claim best fits the lecture?",
          "choices": [
            "Sleep supports memory and restoration",
            "Only wakefulness supports memory",
            "REM has no importance",
            "Sleep is a uniform inactive state"
          ],
          "correct": 0,
          "explanation": "The lecture emphasizes restoration/integration and memory costs of deprivation."
        }
      ],
      "figure": "assets/sleep-cycle.jpg",
      "kind": "combined"
    },
    {
      "id": "hypnosis",
      "unit": "Consciousness",
      "title": "Hypnosis & mindfulness",
      "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c",
      "body": [
        "Hypnosis involves heightened suggestibility and a feeling that actions occur involuntarily. Individuals vary in responsiveness. The hypnotized person is not simply asleep, and apparent involuntariness is an experience rather than evidence that all agency disappears.",
        "The lecture experiment compared hearing a spoken sentence with a hypnotic suggestion that a sentence had been spoken. PET scans showed similar right anterior cingulate activity in the perception and hallucination conditions. This suggests overlap in neural activity for actual and suggested experience; it does not prove they are identical in every respect. Hypnosis can help some people with pain and related symptom management.",
        "Mindfulness is nonjudgmental awareness of present-moment experiences. It involves observing thoughts/sensations without immediately judging or following them. The lecture notes physiological and cognitive benefits and examples from Madison schools/Center for Healthy Minds. Contrast deliberately bringing attention back to present experience with unstructured mind wandering. Supplemental evidence suggests mindfulness may reduce stress-related symptoms and improve sleep; these outcomes vary and do not mean every practice benefits everyone.",
        "The text emphasizes that hypnosis does not reliably improve memory and can worsen it. High-suggestibility participants told that words were gibberish showed less Stroop interference; comparison with low-suggestibility participants matters. Expectancy, trust and compliance are alternative influences, rather than proof of mind control.",
        "Mindfulness relates to attention, autonomic regulation and reduced default-mode activity in experienced meditators. Structural associations do not prove meditation caused the difference. Trance and interpersonal mimicry illustrate additional social/contextual altered experiences; imitation can support affiliation and increase after exclusion."
      ],
      "terms": [
        {
          "term": "Hypnosis",
          "definition": "Increased suggestibility with experienced involuntariness; responsiveness varies."
        },
        {
          "term": "Hypnosis experiment",
          "definition": "Similar right anterior cingulate activity for heard vs. hypnotically suggested sentences."
        },
        {
          "term": "Mindfulness",
          "definition": "Nonjudgmental awareness of present-moment experience."
        },
        {
          "term": "Hypnosis and memory",
          "definition": "Suggestion does not make recalled details reliably accurate; memory can worsen."
        },
        {
          "term": "Meditation association limit",
          "definition": "Brain differences correlated with practice do not alone establish causal change."
        }
      ],
      "recall": "Why does equal activity in one region not prove a hallucinated and real sentence are identical experiences?",
      "answer": "One shared activity measure does not establish identity of all neural processes, inputs, or subjective experience.",
      "questions": [
        {
          "prompt": "The lecture’s hypnosis PET result concerns the…",
          "choices": [
            "Right anterior cingulate cortex",
            "Retina",
            "Basilar membrane",
            "Spinal motor axon only"
          ],
          "correct": 0,
          "explanation": "The two conditions showed similar activity in that region."
        },
        {
          "prompt": "Mindfulness is best defined as…",
          "choices": [
            "Nonjudgmental present-moment awareness",
            "Eliminating every thought permanently",
            "Automatically following every distraction",
            "Only sleeping deeply"
          ],
          "correct": 0,
          "explanation": "Attention is brought to current experience without immediate judgment."
        },
        {
          "prompt": "Hypnosis responsiveness is…",
          "choices": [
            "Variable across individuals",
            "Identical for everyone",
            "Proof of sleep stage 4",
            "Only an endocrine function"
          ],
          "correct": 0,
          "explanation": "Suggestibility differs across people."
        },
        {
          "prompt": "A brain difference correlates with years of meditation. What additional question matters?",
          "choices": [
            "Whether preexisting differences or other factors explain the association",
            "Whether correlation automatically establishes causation",
            "Whether every meditator has identical anatomy",
            "Whether the fMRI is a measure of skull bumps"
          ],
          "correct": 0,
          "explanation": "Association and causal change are distinct; comparison/design determine what can be inferred."
        }
      ],
      "figure": null,
      "kind": "combined"
    },
    {
      "id": "sleep-text",
      "unit": "Consciousness",
      "title": "Circadian rhythms, disorders & damaged consciousness",
      "source": "Assigned textbook notes · 6-2a,e; 6-3b; SCN/locked-in terminology retained as supplemental background",
      "body": [
        "Circadian rhythms are approximately 24-hour biological cycles. The hypothalamic suprachiasmatic nucleus (SCN) helps coordinate the clock using light cues; pineal melatonin helps signal biological night. Jet lag occurs when internal timing is misaligned with the new local light–dark schedule.",
        "Sleep disorders: insomnia involves persistent difficulty sleeping; sleep apnea involves repeated breathing interruptions; narcolepsy involves sudden sleep attacks and can include cataplexy (loss of muscle tone); REM sleep behavior disorder involves loss of normal REM muscle inhibition and acting out dreams. Sleepwalking and night terrors commonly occur in deep NREM sleep, unlike the usual REM association of vivid nightmares.",
        "Brain damage can affect arousal, awareness or both. In coma, wakefulness and evident awareness are absent. Unresponsive wakefulness syndrome involves wake–sleep cycles without reliable behavioral evidence of awareness; a minimally conscious state shows limited but reproducible awareness. Locked-in syndrome differs: awareness can be preserved despite profound paralysis. Locked-in and minimally conscious terminology are retained as supplemental comparisons; the supplied notes do not fully develop them."
      ],
      "terms": [
        {
          "term": "Circadian rhythm",
          "definition": "An approximately 24-hour biological cycle."
        },
        {
          "term": "SCN",
          "definition": "Hypothalamic clock coordinating rhythms with light cues."
        },
        {
          "term": "Jet lag",
          "definition": "Misalignment between internal timing and local schedule."
        },
        {
          "term": "Sleep apnea",
          "definition": "Repeated interruptions of breathing during sleep."
        },
        {
          "term": "Narcolepsy",
          "definition": "Sudden sleep attacks, sometimes accompanied by cataplexy."
        },
        {
          "term": "Locked-in syndrome",
          "definition": "Severe movement/communication impairment with preserved awareness."
        }
      ],
      "recall": "Why should severe inability to move not automatically be interpreted as lack of awareness?",
      "answer": "Motor output and awareness are different functions. Locked-in syndrome illustrates preserved awareness despite profound paralysis.",
      "questions": [
        {
          "prompt": "Jet lag primarily reflects…",
          "choices": [
            "Misaligned circadian timing",
            "A lack of all neurotransmitters",
            "Permanent occipital damage",
            "A change in the IV definition"
          ],
          "correct": 0,
          "explanation": "The internal clock has not aligned with the new local cycle."
        },
        {
          "prompt": "Repeated breathing interruptions during sleep suggest…",
          "choices": [
            "Sleep apnea",
            "Normal stage 2 spindles",
            "Frisson",
            "A visual afterimage"
          ],
          "correct": 0,
          "explanation": "Apnea is a breathing-related sleep disorder."
        },
        {
          "prompt": "Which can preserve awareness despite profound paralysis?",
          "choices": [
            "Locked-in syndrome",
            "Coma by definition",
            "Ordinary stage 3 sleep",
            "A broken taste receptor only"
          ],
          "correct": 0,
          "explanation": "Lack of motor output does not necessarily mean lack of awareness."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "circadian",
      "unit": "Consciousness",
      "title": "Clock cues, jet lag & sleep timing",
      "source": "Assigned textbook notes · 6-2a",
      "body": [
        "Circadian rhythms are approximately 24-hour cycles. Zeitgebers are synchronizing cues, especially light but also food. Without external cues the textbook describes a clock slightly longer than 24 hours. Pineal melatonin relates to biological night; environmental light helps coordinate timing.",
        "Jet lag is a mismatch between internal time and destination schedule. Eastward travel usually requires an advance (earlier internal sleeping); westward travel requires a delay. For Los Angeles → New York, a destination 10 p.m.–6 a.m. schedule initially feels like 7 p.m.–3 a.m. to the old clock, which helps explain the challenge.",
        "Shift work and social jet lag can create repeated timing mismatches. Larks and owls differ in preferred schedules; younger people often favor later timing. These are study concepts, not personalized sleep treatment instructions. Development of sleep is retained; excluded sensory development is a separate topic."
      ],
      "terms": [
        {
          "term": "Zeitgeber",
          "definition": "An external cue that synchronizes biological rhythms."
        },
        {
          "term": "Circadian advance versus delay",
          "definition": "Shift timing earlier versus later; eastward versus westward travel commonly requires these, respectively."
        },
        {
          "term": "Social jet lag",
          "definition": "Mismatch between biological/preferred timing and social schedules."
        }
      ],
      "recall": "Eastward travel commonly requires which clock adjustment?",
      "answer": "An advance toward earlier sleep/wake timing. Destination bedtime arrives earlier relative to the old internal clock.",
      "questions": [
        {
          "prompt": "Eastward travel commonly requires which clock adjustment?",
          "choices": [
            "An advance toward earlier sleep/wake timing",
            "A delay toward later sleep/wake timing",
            "Elimination of the circadian rhythm",
            "A permanent loss of melatonin"
          ],
          "correct": 0,
          "explanation": "Destination bedtime arrives earlier relative to the old internal clock."
        },
        {
          "prompt": "What is a zeitgeber?",
          "choices": [
            "An external synchronizing cue such as light",
            "A receptor for all psychoactive drugs",
            "The deepest sleep stage",
            "A type of spinal reflex"
          ],
          "correct": 0,
          "explanation": "Environmental cues help align internal rhythms with the day."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "sleep-disorders",
      "unit": "Consciousness",
      "title": "Nightmares, terrors, cataplexy & apnea",
      "source": "Assigned textbook notes · 6-2e",
      "body": [
        "Vivid remembered nightmares usually occur in REM; night terrors typically arise from early deep NREM with little later memory. Sleepwalking is a deep-NREM event. REM sleep behavior disorder differs: normal REM atonia is impaired and dreams may be acted out. Sleep paralysis is persistence of immobility around falling asleep or awakening.",
        "Insomnia can concern sleep onset or maintaining sleep. Narcolepsy involves sleep attacks and loss of orexin-related cells, with genetic/autoimmune factors described in the text; cataplexy is loss of muscle tone while consciousness can remain. Cataplexy is not identical to falling asleep.",
        "Obstructive apnea involves airway blockage; central apnea involves interrupted central breathing drive. Restless legs has dopamine-related links. The SIDS triple-risk model combines vulnerability, a developmental period and an environmental stressor. Epworth measures reported sleepiness, not all tiredness and not a stand-alone diagnosis."
      ],
      "terms": [
        {
          "term": "Nightmare versus terror",
          "definition": "REM vivid recall versus early deep-NREM episode with little recall."
        },
        {
          "term": "REM sleep behavior disorder",
          "definition": "Reduced normal REM muscle inhibition allows acting out dreams."
        },
        {
          "term": "Cataplexy",
          "definition": "Sudden muscle-tone loss with potentially preserved consciousness."
        },
        {
          "term": "Obstructive versus central apnea",
          "definition": "Airway obstruction versus interrupted central breathing drive."
        },
        {
          "term": "Sleep paralysis",
          "definition": "Immobility around sleep onset or awakening."
        },
        {
          "term": "Orexin",
          "definition": "Sleep/wake-related neurons whose loss is linked with narcolepsy in the text."
        }
      ],
      "recall": "A person acts out a vivid dream during REM. Which distinction fits?",
      "answer": "REM sleep behavior disorder: impaired atonia. Acting out REM dreams is distinct from deep-NREM walking/terrors.",
      "questions": [
        {
          "prompt": "A person acts out a vivid dream during REM. Which distinction fits?",
          "choices": [
            "REM sleep behavior disorder: impaired atonia",
            "Ordinary NREM sleepwalking by definition",
            "Cataplexy always means a dream",
            "A night terror must be REM"
          ],
          "correct": 0,
          "explanation": "Acting out REM dreams is distinct from deep-NREM walking/terrors."
        },
        {
          "prompt": "Which description best fits cataplexy?",
          "choices": [
            "Muscle tone can collapse while consciousness remains",
            "Airway obstruction during sleep",
            "A conscious visual afterimage",
            "Every event is loss of awareness from a seizure"
          ],
          "correct": 0,
          "explanation": "Muscle tone and conscious state are separate dimensions."
        },
        {
          "prompt": "Which apnea pairing is correct?",
          "choices": [
            "Obstructive: blocked airway; central: interrupted breathing drive",
            "Obstructive: no clock cues; central: nightmares",
            "Both are ordinary REM eye movements",
            "Central: only blocked airway; obstructive: only lost awareness"
          ],
          "correct": 0,
          "explanation": "The breathing interruption can have different mechanisms."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "damaged-awareness",
      "unit": "Consciousness",
      "title": "Face recognition, coma & covert awareness",
      "source": "Assigned textbook notes · 6-3a–b",
      "body": [
        "Prosopagnosia involves impaired face recognition associated with fusiform-related damage; autonomic familiarity can remain despite inability to consciously identify a face. Capgras involves recognition with a disrupted familiar emotional response, leading to an impostor interpretation. These are different disruptions, not two names for blindness.",
        "Coma involves unarousability and absent normal wake–sleep cycling, often with reticular or bilateral cortical disruption. Vegetative state/unresponsive wakefulness involves cycles without reliable behavioral evidence of awareness. Some patients show task-related fMRI responses to imagery instructions, suggesting covert awareness; absence of ordinary movement alone is not sufficient proof of absent awareness.",
        "Brain death is irreversible loss of all brain function including brainstem function, distinct from coma or unresponsive wakefulness. Near-death reports after revival are not recoveries from true brain death. Proposed neural/REM-intrusion/chemical explanations remain hypotheses, rather than an established account of every reported experience."
      ],
      "terms": [
        {
          "term": "Prosopagnosia",
          "definition": "Impaired face recognition; physiological familiarity may be preserved."
        },
        {
          "term": "Capgras",
          "definition": "Familiar face recognition lacks its usual emotional familiarity and may be interpreted as an impostor."
        },
        {
          "term": "Coma",
          "definition": "Unarousable state without normal wake–sleep cycling."
        },
        {
          "term": "Unresponsive wakefulness",
          "definition": "Wake–sleep cycles without reliable behavioral evidence of awareness; covert responses may exist."
        },
        {
          "term": "Brain death",
          "definition": "Irreversible loss of all brain function, including brainstem function."
        }
      ],
      "recall": "A familiar face is identified visually but feels emotionally unfamiliar and is called an impostor. Which example fits?",
      "answer": "Capgras. Capgras differs from an inability to recognize the face.",
      "questions": [
        {
          "prompt": "A familiar face is identified visually but feels emotionally unfamiliar and is called an impostor. Which example fits?",
          "choices": [
            "Capgras",
            "Prosopagnosia as described in the notes",
            "Normal sensory adaptation",
            "A left visual-field blind spot"
          ],
          "correct": 0,
          "explanation": "Capgras differs from an inability to recognize the face."
        },
        {
          "prompt": "Why can imagery-task fMRI matter in an unresponsive patient?",
          "choices": [
            "Instruction-linked responses can reveal awareness without ordinary motor output",
            "Every active brain region proves full normal consciousness",
            "It makes brain death reversible",
            "It measures the patient’s body temperature"
          ],
          "correct": 0,
          "explanation": "Covert responses challenge assumptions based only on outward behavior."
        },
        {
          "prompt": "Which statement about brain death is correct?",
          "choices": [
            "It is distinct from coma and includes irreversible loss of brainstem function",
            "It is any inability to speak",
            "It is a synonym for ordinary deep sleep",
            "Every near-death survivor recovered from confirmed brain death"
          ],
          "correct": 0,
          "explanation": "The textbook separates irreversible brain death from potentially different states of impaired awareness."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "seizures",
      "unit": "Consciousness",
      "title": "Seizures, aura & familiar-feeling errors",
      "source": "Assigned textbook notes · 6-3c",
      "body": [
        "Focal/partial seizures begin in a restricted region; an aura can involve unusual sensations or experiences. Generalized seizures involve broader thalamocortical activity. Tonic–clonic events involve sustained contraction then rhythmic movement and recovery; absence events can briefly interrupt awareness with subtle signs.",
        "Reduced inhibition, including disrupted GABA-related activity, can contribute to uncontrolled neural activity. Temporal-region events can affect familiarity: déjà vu makes a new situation seem familiar, while jamais vu makes a familiar situation seem unfamiliar.",
        "These are the textbook’s study distinctions, not a diagnostic checklist. Do not infer that every faint, moment of distraction or familiarity illusion is a seizure. Brain circuits and event patterns provide the relevant context."
      ],
      "terms": [
        {
          "term": "Focal seizure / aura",
          "definition": "Localized onset; an aura may involve unusual sensory or experiential signs."
        },
        {
          "term": "Tonic–clonic versus absence",
          "definition": "Sustained then rhythmic movement versus brief awareness interruption."
        },
        {
          "term": "Déjà vu / jamais vu",
          "definition": "New seems familiar versus familiar seems unfamiliar."
        }
      ],
      "recall": "A familiar setting suddenly seems completely unfamiliar. Which term matches?",
      "answer": "Jamais vu. Jamais vu reverses ordinary familiarity; déjà vu makes a new event seem familiar.",
      "questions": [
        {
          "prompt": "A familiar setting suddenly seems completely unfamiliar. Which term matches?",
          "choices": [
            "Jamais vu",
            "Déjà vu",
            "REM rebound",
            "Prosopagnosia necessarily"
          ],
          "correct": 0,
          "explanation": "Jamais vu reverses ordinary familiarity; déjà vu makes a new event seem familiar."
        },
        {
          "prompt": "Which distinction matches the textbook?",
          "choices": [
            "Tonic–clonic: sustained then rhythmic movement; absence: brief interruption",
            "Absence: a new dream theory; tonic–clonic: only hormone change",
            "Every focal event begins across the entire cortex",
            "An aura always proves loss of every brain function"
          ],
          "correct": 0,
          "explanation": "Different seizure descriptions concern onset and event pattern."
        }
      ],
      "figure": null,
      "kind": "textbook"
    },
    {
      "id": "drug-classes",
      "unit": "Consciousness",
      "title": "Drug classes, adaptation & route of action",
      "source": "Assigned textbook notes · 6-4a–b",
      "body": [
        "Depressants such as alcohol enhance inhibitory GABA-related signaling and reduce glutamatergic excitation; they also engage reward systems. Stimulants include caffeine, nicotine, cocaine and amphetamine but have different receptor/synapse mechanisms. A shared behavioral class does not mean a shared molecular action.",
        "Opioids act at receptors responsive to endogenous opioid peptides and affect pain, reward and breathing-related systems. “Opiate” refers more narrowly to poppy-derived agents; “opioid” is broader. LSD acts through serotonin-related receptors. THC acts at cannabinoid/endocannabinoid systems, related to anandamide; the textbook groups cannabis with hallucinogens.",
        "Administration route influences timing: smoking delivers quickly, while chewing can produce slower, prolonged effects. Tolerance involves compensatory and learned responses; withdrawal can be opposite to the acute effect (for example excitation after depressant cessation). Neither tolerance nor withdrawal alone equals compulsive use despite harm.",
        "Do not confuse immediate drug action with adaptation after repeated use. Caffeine is an adenosine antagonist, nicotine an ACh agonist, cocaine a reuptake blocker and amphetamine a release/transporter-altering drug. Review the synapse-mechanism lesson to explain how each changes signaling."
      ],
      "terms": [
        {
          "term": "Opiate versus opioid",
          "definition": "Poppy-derived subset versus the broader family acting at opioid receptors."
        },
        {
          "term": "Cannabinoid systems",
          "definition": "THC acts at cannabinoid receptors; anandamide is an endogenous related signal."
        },
        {
          "term": "Withdrawal versus acute effect",
          "definition": "Adaptation can produce symptoms opposite to the drug’s acute effect."
        },
        {
          "term": "Administration route",
          "definition": "Changes speed and duration of drug delivery/effects."
        }
      ],
      "recall": "Which statement distinguishes drug class from mechanism?",
      "answer": "Several stimulants act through different receptor/synapse mechanisms. A similar overall behavioral effect does not imply identical molecular action.",
      "questions": [
        {
          "prompt": "Which statement distinguishes drug class from mechanism?",
          "choices": [
            "Several stimulants act through different receptor/synapse mechanisms",
            "All stimulants are dopamine-receptor agonists",
            "All depressants eliminate every action potential",
            "Every hallucinogen blocks acetylcholine"
          ],
          "correct": 0,
          "explanation": "A similar overall behavioral effect does not imply identical molecular action."
        },
        {
          "prompt": "Which example is adaptation rather than an immediate receptor action?",
          "choices": [
            "Reduced response to the same dose after repeated exposure",
            "Caffeine binding and blocking an adenosine receptor",
            "Nicotine activating an ACh receptor on exposure",
            "Naloxone blocking an opioid receptor"
          ],
          "correct": 0,
          "explanation": "Tolerance follows repeated exposure and compensatory/learned changes."
        }
      ],
      "figure": null,
      "kind": "textbook"
    }
  ],
  "videos": [
    {
      "title": "Infants: operational definitions",
      "url": "https://www.youtube.com/watch?v=F-UQkDs9I0I",
      "unit": "Research methods",
      "prompt": "What behavior is recorded? How is that used to infer a mental concept?",
      "answer": "Identify the actual looking/reaching/choice measure and scoring in the clip; infants cannot give ordinary verbal self-report. Exact scoring is not in the supplied slides."
    },
    {
      "title": "Primates: intuitive statistics",
      "url": "https://www.youtube.com/watch?v=HrFhLZSfK7A",
      "unit": "Research methods",
      "prompt": "Identify the measured choice and what it suggests about statistical expectations.",
      "answer": "Distinguish the observable response from the inferred ability. Confirm the clip’s exact procedure; it is absent from the slide text."
    },
    {
      "title": "Split-brain patient",
      "url": "https://mediaspace.wisc.edu/media/Split%20brain%20patient/1_b14uthxm",
      "unit": "Brain & behavior",
      "prompt": "Predict verbal naming and left-hand selection for a left-field object.",
      "answer": "Typically right hemisphere receives left-field information, enabling left-hand selection but not ordinary verbal naming."
    },
    {
      "title": "Jody: neuroplasticity",
      "url": "https://www.youtube.com/watch?v=9Ccnfa0lMbc",
      "unit": "Brain & behavior",
      "prompt": "Which abilities remain or recover after surgery? What does that reveal about plasticity?",
      "answer": "Track the functions actually described in the clip. Recovery demonstrates reorganization by remaining circuits; the exact personal details are not supplied in the slides."
    },
    {
      "title": "Action potential",
      "url": "https://www.youtube.com/watch?v=yQ-wQsEK21E",
      "unit": "Brain & behavior",
      "prompt": "Explain ion movement and voltage changes without reading the labels.",
      "answer": "Depolarization toward threshold, sodium influx, repolarization involving potassium efflux, possible undershoot, recovery/refractory period."
    },
    {
      "title": "Transmission at a synapse",
      "url": "https://www.youtube.com/watch?v=LT3VKAr4roo",
      "unit": "Brain & behavior",
      "prompt": "Trace electrical → chemical → receiving-cell response; how does signaling end?",
      "answer": "Terminal arrival, vesicle release, diffusion, receptor binding; removal by reuptake/breakdown and regulation by autoreceptors. Use the clip’s exact animation labels."
    },
    {
      "title": "Sapolsky: dopamine jackpot",
      "url": "https://www.youtube.com/watch?v=axrywDP9Ii0",
      "unit": "Brain & behavior",
      "prompt": "When does dopamine release shift with learning? What does uncertainty change?",
      "answer": "Connect learned predictive cues, anticipation and intermittent reward. Check the exact schedule/results in the original clip."
    },
    {
      "title": "Volkow: dopamine & addiction",
      "url": "https://www.youtube.com/watch?v=pUkrPNxLau0",
      "unit": "Brain & behavior",
      "prompt": "Explain reward learning, natural vs. drug reward, risk factors and D2 changes.",
      "answer": "Dopamine supports learned reward predictors; drugs strongly engage reward pathways; biology/environment influence risk; chronic abuse is linked in lecture to reduced D2 availability."
    },
    {
      "title": "Ames room",
      "url": "https://www.youtube.com/watch?v=gJhyu6nlGt8",
      "unit": "Sensation & perception",
      "prompt": "Why do people seem to change size?",
      "answer": "An ordinary-room assumption leads to incorrect distance estimates and perceived size."
    },
    {
      "title": "T-Rex / following eyes",
      "url": "https://www.youtube.com/watch?v=A4QcyW-qTUg",
      "unit": "Sensation & perception",
      "prompt": "What depth assumption is mistaken?",
      "answer": "A concave face is interpreted as convex, creating apparent following as you move."
    },
    {
      "title": "McGurk effect",
      "url": "https://www.youtube.com/watch?v=G-lN8vWm3m0",
      "unit": "Sensation & perception",
      "prompt": "Does the sound change, or does the perception change with the video?",
      "answer": "The visual articulation changes the auditory percept: multisensory integration."
    },
    {
      "title": "Octave / scale illusion",
      "url": "https://www.youtube.com/watch?v=by-pEVfQxH8",
      "unit": "Sensation & perception",
      "prompt": "Compare what each ear receives with the pattern you perceive.",
      "answer": "Auditory grouping can organize delivered sounds differently from their physical distribution. Headphones may be important; follow the clip’s instructions."
    },
    {
      "title": "Phantom words",
      "url": "https://www.youtube.com/watch?v=kB0I5x_Skzg",
      "unit": "Sensation & perception",
      "prompt": "What words do you hear? Does expectation change them?",
      "answer": "Ambiguous repeated sounds can become meaningful through language expectations and perceptual organization."
    },
    {
      "title": "Mirror recognition",
      "url": "https://www.youtube.com/watch?v=cKs_iW0QVNY",
      "unit": "Consciousness",
      "prompt": "What behavior counts as evidence of self-recognition?",
      "answer": "Use of the mirror to guide action toward a mark on the subject’s own body. Review which species/individuals the clip shows."
    },
    {
      "title": "Stroop effect",
      "url": "https://www.youtube.com/watch?v=E92GSwr46DY",
      "unit": "Consciousness",
      "prompt": "Compare congruent and incongruent color naming.",
      "answer": "Automatic word reading interferes with ink-color naming, typically increasing time/errors."
    },
    {
      "title": "Change blindness",
      "url": "http://go.wisc.edu/271ft8",
      "unit": "Consciousness",
      "prompt": "What changed, and why was it missed?",
      "answer": "A change can be missed when attention is not allocated to it or the transition is disrupted."
    },
    {
      "title": "Hypnosis",
      "url": "http://go.wisc.edu/irgpgf",
      "unit": "Consciousness",
      "prompt": "Describe suggestibility and the experiment’s two conditions.",
      "answer": "Perceived speech and suggested speech showed similar right anterior cingulate activity in the lecture example; responsiveness varies."
    },
    {
      "title": "Mindfulness",
      "url": "https://www.youtube.com/watch?v=Dzd444JvjCs",
      "unit": "Consciousness",
      "prompt": "What counts as nonjudgmental present-moment awareness?",
      "answer": "Observing current experience without immediate judgment and returning attention when distracted; review benefits/examples in the clip."
    }
  ],
  "references": [
    {
      "title": "Cross-sectional and longitudinal research",
      "url": "https://openstax.org/books/psychology-2e/pages/2-2-approaches-to-research"
    },
    {
      "title": "Research analysis and statistical inference",
      "url": "https://openstax.org/books/psychology-2e/pages/2-3-analyzing-findings"
    },
    {
      "title": "Research ethics",
      "url": "https://openstax.org/books/psychology-2e/pages/2-4-ethics"
    },
    {
      "title": "Endocrine background",
      "url": "https://openstax.org/books/psychology-2e/pages/3-5-the-endocrine-system"
    },
    {
      "title": "Touch, pain and taste background",
      "url": "https://openstax.org/books/psychology-2e/pages/5-5-the-other-senses"
    },
    {
      "title": "Sleep disorder background",
      "url": "https://openstax.org/books/psychology-2e/pages/4-4-sleep-problems-and-disorders"
    },
    {
      "title": "NIH: addiction and D2 receptors",
      "url": "https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction/drug-misuse-addiction"
    },
    {
      "title": "Pearson (2010): provisional article identification",
      "url": "https://www.tandfonline.com/doi/abs/10.1080/15534511003593679"
    },
    {
      "title": "NIH: taste and flavor",
      "url": "https://www.nidcd.nih.gov/health/taste-disorders"
    },
    {
      "title": "NIH: sleep and biological timing",
      "url": "https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-understanding-sleep"
    },
    {
      "title": "NIH: locked-in syndrome",
      "url": "https://rarediseases.info.nih.gov/diseases/6919/locked-in-syndrome"
    },
    {
      "title": "Tolerance and psychoactive-drug background",
      "url": "https://openstax.org/books/psychology-2e/pages/4-5-substance-use-and-abuse"
    },
    {
      "title": "Consciousness after severe brain injury",
      "url": "https://msktc.org/tbi/factsheets/facts-about-vegetative-and-minimally-conscious-states-after-severe-brain-injury"
    },
    {
      "title": "NIH: mindfulness and stress",
      "url": "https://www.nccih.nih.gov/health/stress"
    }
  ],
  "textbook": {
    "title": "Discovering Psychology: The Science of Mind · 4th edition",
    "authors": "John T. Cacioppo, Laura A. Freberg, Stephanie J. Cacioppo",
    "provenance": "Assigned-textbook notes supplied by you. Section, table and figure references are preserved; print page numbers were not available. These are structured notes, not a reproduction of the textbook.",
    "chapters": [
      {
        "title": "Chapter 2 — The Measure of Mind: The Scientific Methods of Psychology",
        "sections": [
          {
            "title": "Introduction and 2-1 — What Is Science?",
            "text": "Science learns about reality through **systematic observation and experimentation**. Its aims include understanding, predicting, and controlling phenomena. The introductory stuttering example contrasts traditional explanations with evidence from genetics, brain imaging, development, emotion, and social context. One perspective alone may be insufficient."
          },
          {
            "title": "2-1a — How Do We Develop a Scientific Mindset?",
            "text": "**Objectivity** means basing conclusions on facts rather than personal emotion or bias; subjectivity reflects a personal viewpoint. Scientists are human and cannot establish their own objectivity merely by introspection: methods must help prevent bias. **Systematic observation** goes beyond whatever happens around one's friends or acquaintances. A student's social circle can create an inaccurate impression of how widespread drinking is in the population (Figure 2.1).\n\n**Confirmation bias** is preferentially noticing and remembering supporting instances while overlooking contradictions. A person who believes women drive badly may remember women's mistakes while ignoring good driving by women and errors by men. Figure 2.2 contrasts such a stereotype with actual traffic-fatality data. Science requires observable, repeatable evidence and willingness to revise beliefs. Scientific knowledge can be stable in its core while changing at its frontier; uncertainty does not make all knowledge equally doubtful."
          },
          {
            "title": "2-1b — The Importance of Critical Thinking",
            "text": "Critical thinking involves clear, rational, independent reasoning: assess the claim, supporting evidence, alternative interpretations, evidence needed to distinguish them, and justified conclusions. Warning signs include unexamined gut decisions, wanting answers without reasoning, avoiding correction, and failing to review mistakes.\n\nThe text identifies several vulnerabilities: default acceptance of information, repetition and easy retrieval feeling like truth, pictures making unsupported statements seem credible, mistaken inferences filling gaps, prior beliefs interfering with learning, and overlooking decisive wording.\n\n**Text example:** A headline about social-media use and depression overgeneralized a survey of students at one university. The study concerned particular patterns of use rather than simply time spent online. Existing depressed/nondepressed groups were not randomly assigned. Depression might change social-media behavior, social-media behavior might influence mood, or social exclusion might affect both. A limited sample does not represent all members of a generation."
          },
          {
            "title": "2-1c — The Scientific Enterprise",
            "text": "**Theory:** an organized account of facts and their relationships that explains observations and predicts new ones. A scientific theory is more than an everyday hunch. **Hypothesis:** a specific, evidence-informed prediction connecting concrete variables. Consider both an expected effect and the possibility of no effect. Evidence can reinforce a hypothesis; future evidence can require revision. Figure 2.3 shows an iterative process: theory → hypotheses → systematic tests → retained/revised explanations → further predictions.\n\n**Peer review** subjects research to evaluation by knowledgeable scientists before publication. **Replication** independently attempts to reproduce results. Failure prompts investigation, not automatic acceptance or dismissal of an entire field. Differences in samples and procedures may matter. The text discusses preregistered methods/analyses, open sharing, and incentives favoring quality over sheer publication count. Figure 2.4 illustrates a pen-in-mouth study whose replication changed when a camera was added or removed: observation conditions can affect outcomes."
          },
          {
            "title": "2-2a — Descriptive Methods",
            "text": "| Method | What it supplies | Main limits and examples |\n|---|---|---|\n| Case study | Detailed investigation of one or a few individuals using interviews, records, observation, tests, or imaging | Useful for rare cases and hypothesis development, but limited generalization and replication. H.M.'s memory impairment after surgery clarified memory systems. A single counterexample can reject a universal hypothesis; one case cannot establish a general causal relationship. |\n| Naturalistic observation | Systematic observation in a natural setting | Captures everyday behavior; people may change when watched, and covert observation raises privacy concerns. Goodall's chimpanzee observations challenged assumptions about diet. At a gaming gathering, sleep loss, food, and other activities complicate interpretations of aggression. |\n| Survey | Self-reported attitudes or behavior from many people | Fast and relatively inexpensive; depends on representative sampling and honest responses. Social desirability can distort answers even when anonymous. Wording questions in the third person may reduce pressure to present oneself favorably. |\n\nA **population** is the group of interest; a **sample** is the subset studied. A large sample can still be unrepresentative. Convenience samples of psychology students, and technologically experienced online respondents, may differ from the population. Field recruitment across diverse locations can improve representation. Descriptive methods establish patterns/prevalence and generate hypotheses; they do not by themselves isolate causation."
          },
          {
            "title": "2-2b — Correlational Methods",
            "text": "A **variable** can take different values; a **measure** quantifies how much is observed. Correlation describes the direction and strength of an association. Positive: high values accompany high values (and low accompany low). Negative: high values accompany low values. Zero: no systematic relationship in the text's examples. Correlations support prediction and research where manipulation is impractical or unethical.\n\n**Directionality:** game playing might affect aggression, or aggressive people might prefer violent games. **Third variable:** bullying might influence both. Neither a strong association nor a plausible explanation makes the study causal. Prenatal alcohol exposure is a case where deliberately assigning exposure would be unethical; measured exposure can instead be related to child outcomes.\n\n**Figures 2.6–2.8:** Scatterplot dots pair two scores for each observation. Upward trends indicate positive association; downward trends indicate negative association; scattered points lack a clear relationship. A spurious association between actor film appearances and drownings illustrates why correlation is insufficient for causation."
          },
          {
            "title": "2-2c — Experimental Methods",
            "text": "An experiment manipulates an **independent variable (IV)** and measures its consequences using a **dependent variable (DV)**. Experimental groups receive different IV conditions; an appropriate **control group** provides a comparison or baseline. Controls may receive no experimental treatment, a nonviolent game, or an established treatment. Control experiences should otherwise be similar.\n\n**Random assignment** gives each participant an equal chance of entering each group, reducing systematic differences in personality, ability, motivation, and other preexisting characteristics. It does not guarantee identical groups. **Confounds** are irrelevant influences that can distort interpretation; individual differences and situational conditions (noise, heat, time) are examples. Random assignment helps with the former; keeping conditions constant helps with the latter.\n\n**Quasi-experiment:** resembles an experiment but lacks random assignment. Existing gender or program-eligibility groups may differ in additional ways. The text's Head Start example notes that poverty-linked eligibility complicates attributing later achievement differences solely to participation.\n\n**Operationalization** converts an abstract concept into a concrete manipulation or measure: identify the concept, specify a quantity, and develop the method for obtaining it. Aggression might be operationalized as chosen noise-blast duration, hot-sauce quantity, or frequency of physical fights. These are not interchangeable and may not generalize equally to real-world violence. Physiological measures (heart rate/pupil diameter), behavioral measures, and self-reports appear in the chapter's examples.\n\n**Experiment example (Figures 2.9–2.10):** randomly assign participants to violent versus nonviolent games, keep testing conditions constant, then measure the duration/intensity of a noise punishment participants choose. A broken air conditioner occurring only in one condition would confound game content with heat. Causal conclusions apply to the tested manipulation and outcome; extending them to mass shootings requires further evidence.\n\n**Meta-analysis** statistically combines studies on a topic. It can clarify a larger evidence base but depends on study quality and comparable measures. **Publication bias/file-drawer problem:** significant findings may be more likely to be published than null results, making the available literature unrepresentative. Cooperative versus solitary gaming also shows why social context and multiple perspectives matter.\n\n**Sampling versus assignment comparison:** the chapter's experiment diagram starts with a representative sample from a population, then separates participants into experimental/control groups. Recruitment determines whom results might generalize to; assignment determines comparability of conditions. The checklist term “random sampling” should be compared with the instructor's formal definition; the text emphasizes representative sampling and defines random assignment explicitly."
          },
          {
            "title": "2-2d — How Do We Study the Effects of Time?",
            "text": "| Design | Procedure | Strengths and limitations |\n|---|---|---|\n| Cross-sectional | Compare different age groups at a given time | Relatively fast/inexpensive; age differences can be confused with **cohort effects**, arising from growing up in different historical/cultural circumstances. |\n| Longitudinal | Follow the same individuals over a long period | Observes individual change and reduces cohort confounding; expensive, slow, and vulnerable to dropout that changes sample representativeness. |\n| Mixed longitudinal | Follow several age groups for a shorter interval, commonly about five years in the text | Combines approaches, reduces some cohort problems, and saves time relative to a full longitudinal study; expense and dropout remain. |\n\nFigure 2.11 tracks abilities with age to illustrate what longitudinal evidence can reveal. Do not mistake a one-time difference between generations for within-person change."
          },
          {
            "title": "2-3a — The Importance of Valid and Reliable Measures",
            "text": "**Reliability** concerns consistency: test–retest (across occasions), interrater (across observers), inter-method (across approaches), and internal consistency (related items within one test). The textbook calls the correspondence of SAT and grades an inter-method reliability example; preserve that terminology when comparing with lecture.\n\n**Validity** concerns measuring the intended concept and supporting correct conclusions. Compare a measure with established relevant measures/outcomes. A scale that consistently reports 150 pounds for a 200-pound person is reliable but invalid. Unpredictable readings lack reliability. Figure 2.12 uses targets: tightly clustered off-center arrows = consistent bias; clustered bullseye hits = reliability and validity. Its caption also calls widely spread but centered results “validity without reliability,” based on average accuracy. **Compare this framing with lecture before turning it into an absolute rule about validity requiring reliability.**"
          },
          {
            "title": "2-3b — Descriptive Statistics",
            "text": "Descriptive statistics organize and summarize the observed sample. A **frequency distribution/histogram** shows how often values occur. **Mean:** sum divided by number of scores, sensitive to extreme values. **Median:** middle of ordered scores, useful when outliers skew the mean. **Mode:** most frequent value; a distribution may have more than one peak. The text's bimodal age-of-onset example shows why an average can conceal two distinct high-frequency groups (Figure 2.14).\n\n**Standard deviation (SD)** measures spread around the mean. Small SD = tight clustering; large SD = greater spread (Figure 2.15). A **normal distribution** is symmetric and concentrated near the mean. The text/figure uses approximately 68%, 95%, and 99% within one, two, and three SDs. For an IQ scale with mean 100 and SD 15, one SD spans 85–115 and two span 70–130. **Compare the textbook's rounded three-SD 99% with any lecture use of 99.7%.**\n\n**Correlation coefficient:** ranges from −1 to +1; absolute magnitude gives strength and sign gives direction. −.90 is stronger than +.30; −1 and +1 are equally strong, perfect relationships with opposite directions. Figure 2.18 pairs GPA and math-SAT values as dots. The section's ESP example emphasizes methodological consistency, appropriate statistics, consent about stimuli, and replication rather than accepting a surprising significant result at face value."
          },
          {
            "title": "2-3c — Inferential Statistics",
            "text": "Inferential statistics support conclusions beyond sample descriptions, but cannot rescue an unrepresentative sample. The **null hypothesis** posits no underlying difference/relationship. A **p value** describes how likely a result at least as extreme as the observed result would be **if the null were true**; it is not the probability that the hypothesis is true, the percentage of participants affected, or effect size.\n\nThe text gives the conventional .05 threshold and discusses a proposed .005 threshold for new discoveries, with intermediate results called suggestive. **This is presented as a proposal: compare with lecture before assuming .005 is the course's required criterion.** Rejecting a null encourages considering alternatives, not automatic proof of a particular explanation.\n\n**Statistical significance versus importance:** an enormous sample can yield a small p value for a tiny effect. The Facebook-newsfeed example contrasts statistical significance with a very small effect size. The SAT example illustrates that a group test difference need not justify conclusions about an individual's ability or career. **Factor analysis** identifies clusters underlying large sets of related measures, originally developed by Spearman in studying intelligence and now used across disciplines."
          },
          {
            "title": "2-4a — Human Participants",
            "text": "**IRBs** review human-participant studies; **IACUCs** review animal studies. The chapter describes federal/professional standards, committee review, and outside-community representation.\n\nHuman participation must be voluntary, with reasonable incentives rather than coercion. **Informed consent** describes purpose/procedures sufficiently to allow a decision. Children or people unable to provide legal consent require appropriate guardian permission and additional review. Avoid irreversible harm. Deception requires justification and disclosure that deception will occur without necessarily revealing it in advance; **debriefing** explains the deception afterward and answers questions.\n\n**Privacy:** control over sharing personal information. **Confidentiality:** data are disclosed only with permission; codes and secure storage protect them. **Anonymity:** even researchers cannot link responses to identity. These are distinct. Tuskegee illustrates withholding diagnosis/treatment and informed consent; the Facebook manipulation illustrates concerns about conducting research without explicit consent."
          },
          {
            "title": "2-4b — Animal Subjects; application features and review",
            "text": "Animal research needs a clear beneficial purpose, excellent food/housing/veterinary care, and minimized suffering. **Three Rs:** reduce numbers, replace animals when other methods answer the question, refine methods to be more humane. Ethics restrict methods even if less restricted designs would produce more realistic data.\n\nThe relationships feature compares brain activity when viewing loved versus liked people: increased reward-related activity and decreased social-judgment activity (Figure 2.20). Imaging associations alone do not establish causal brain mechanisms. The pandemic feature applies naturalistic observation, surveys, and before/after natural policy comparisons; it highlights why randomly assigning harmful exposure would be unethical. These are methodological applications rather than extra health recommendations.\n\nThe chapter review's terms were checked against the sections above. No separate quiz was submitted."
          }
        ]
      },
      {
        "title": "Chapter 4 — The Biological Mind: The Physical Basis of Behavior",
        "sections": [
          {
            "title": "Introduction; 4-1 — What Is Biological Psychology?",
            "text": "**Biological psychology/behavioral neuroscience** studies reciprocal relationships among nervous-system structure/activity, behavior, and mental processes. Biology influences thoughts and actions; thoughts and actions also influence biology. The milkshake example held calories constant but changed the description of the drink, producing different ghrelin responses. The opening social-isolation example connects perceived social circumstances, hormonal signaling, and immune activity. These are textbook examples, not personal health advice.\n\n**Dualism** treats mind and physical being as separate; **monism**, used by neuroscience here, treats mind as what the brain does. Cultural neuroscience examines interactions among culture, genetics, brains, and behavior. Figure 4.1 compares activity during self/mother/other judgments across cultural groups; similar tasks need not produce identical patterns across cultures."
          },
          {
            "title": "4-1a–b — Early Attempts; Contemporary Approaches in Biological Psychology",
            "text": "Phrenology wrongly inferred traits from skull bumps, though its general suggestion that functions can be localized had merit. Clinical cases, autopsy, and histology preceded living-brain recording/imaging. Ramón y Cajal's **Neuron Doctrine** established separate cells rather than one continuous neural network. Jackson proposed hierarchical organization: damage or suppression of higher controls can release less regulated behavior.\n\n**Table 4.1 — methods:**\n\n| Method | What it records or changes | Useful distinction |\n|---|---|---|\n| Histology | Microscopic neural structure | Structure rather than ongoing living-brain activity |\n| Skin conductance | Electrical conductance across skin electrodes | Index of arousal; formerly galvanic skin response |\n| EEG | Scalp electrical activity | Broad neural activity patterns |\n| ERP | Averaged EEG responses time-linked to a stimulus | Responses to particular events |\n| Single-cell recording | Activity via an implanted electrode | Which stimuli activate an individual neuron |\n| MEG | Tiny magnetic signals from neural activity | Localization of responses to stimulation |\n| PET | Accumulation of radiolabeled glucose/oxygen | Regional activity/metabolic use |\n| fMRI | Oxygen-related signal changes using magnetism | Regional activity during tasks; indirect measure, not literal mind reading |\n| Electrical stimulation | Current via implanted electrodes | Behavior following stimulation |\n| Optogenetics | Genetically introduced light-sensitive proteins | Selectively activate particular cell types with light |\n| TMS | Magnetic fields applied near the scalp | Changes in behavior from altering neural activity |\n| Lesions | Natural or deliberate neural damage | Changes associated with disrupted tissue; clinical cases can be complicated |\n\nCompare recording/association with intervention: observing an active region does not by itself establish that it causes a behavior. The fMRI finger-tapping example compares activity during movement with activity while still. Ordinary structural MRI is not separately developed in this table; verify lecture coverage if a detailed MRI/fMRI contrast is needed."
          },
          {
            "title": "4-2 — How Is the Nervous System Organized?",
            "text": "**CNS:** brain and spinal cord, a continuous tissue system protected by skull/vertebrae. **PNS:** nerves extending outside them to the body. Figure 4.2 branches CNS into brain/spinal cord and PNS into somatic/autonomic systems; the later text adds the enteric subdivision of the autonomic system.\n\nThe brain works through richly connected, overlapping networks. Calling an area a single “center for” a complex behavior is too simple."
          },
          {
            "title": "4-3 — Structures and Functions of the CNS",
            "text": "**Meninges** are protective membranes; **ventricles** contain circulating **cerebrospinal fluid (CSF)**, which cushions and floats neural tissue. CSF circulates from internal spaces to around brain/spinal cord; blocked circulation can produce hydrocephalus. Figure 4.3 shows paired lateral ventricles and the third/fourth ventricles. Keep cavities and surrounding tissue distinct."
          },
          {
            "title": "4-3a — The Spinal Cord, Brainstem, and Cerebellum",
            "text": "The spinal cord carries ascending sensory information and descending motor commands and coordinates reflexes. **31 pairs of spinal nerves** serve the body. **Sensory neurons** bring body/environment information to the CNS; **motor neurons** carry CNS commands to muscles/glands; **interneurons** connect and process within neural circuits.\n\n**Knee-jerk sequence (Figure 4.5):** tapping stretches the thigh muscle → sensory fibers report stretch to spinal cord → motor neuron activates the muscle → contraction kicks the foot. The simple sensory–motor arc does not require an interneuron or a prior decision by the brain, though information also reaches the brain. Other reflexes do use interneurons.\n\n| Structure/location | Main textbook functions and implications |\n|---|---|\n| Medulla, just above spinal cord | Breathing, heart rate, blood pressure; essential life functions |\n| Pons, above medulla | Sleep, arousal, facial expression; bridges higher/lower brain and connects cerebellum |\n| Cerebellum, behind brainstem | Balance, coordination, timing/strength of movements; also automatic motor/mental skills and subtler cognitive, perceptual, language functions. Alcohol impairs its functions. |\n| Midbrain, above pons | Sensory reflexes, movement, pain; periaqueductal gray has opioid/endorphin-related pain modulation |\n| Reticular formation, core of brainstem from upper medulla into midbrain | Arousal; high activity accompanies waking, reduced activity sleep, and damage can produce unconsciousness |\n\n**Figure 4.6:** follow spinal cord upward through medulla → pons → midbrain beneath the hemispheres; locate cerebellum behind the stem and reticular formation within it. The hindbrain includes medulla, pons, cerebellum; forebrain development produces large cerebral hemispheres."
          },
          {
            "title": "4-3b — Subcortical Structures",
            "text": "These structures lie within hemispheric white matter below the cortex; most are paired. The text cautions that “limbic system/emotional brain” hides their many nonemotional functions.\n\n| Structure | Functions and useful damage/application distinctions |\n|---|---|\n| Thalamus, near brain center | Relays most sensory input to cortex (vision, hearing, touch, taste); memory and consciousness; sleep coordination with cortex. Not the homeostasis regulator. |\n| Basal ganglia, curved around thalamus | Select goal-directed voluntary movements; movement deficits in Parkinson's and involvement in repetitive/impulsive behavior |\n| Hypothalamus, below thalamus near pituitary | Homeostasis, hunger/thirst, temperature, rhythms, sex; directs autonomic and endocrine activity |\n| Hippocampus, curved temporal-region structure | Formation of new long-term memories; contributes to retrieval/storage elsewhere and stress regulation. Damage can impair new memory formation while sparing intellect, personality, and many earlier memories. |\n| Cingulate cortex, inner hemispheric fold | ACC: autonomic regulation, decision making, emotion, reward anticipation, empathy. PCC: memory and visual processing. |\n| Amygdala, deep temporal lobe | Salience, threat/fear, emotion, social behavior, reward learning; not restricted to negative emotion. Patient S.M. had difficulty recognizing fear and atypical personal-space behavior after bilateral damage. |\n| Nucleus accumbens | Reward/pleasure circuitry with midbrain connections; relevant to rewarding activities and addiction |\n\n**Figures 4.7–4.9:** basal ganglia curve around the thalamus; hypothalamus lies below; hippocampus/amygdala are distinct neighboring structures. Patient S.M.'s closer preferred distance to strangers illustrates a social-behavior consequence rather than a general loss of intelligence. An amygdala response to emotional faces can occur despite damage to primary visual cortex and absent conscious visual recognition."
          },
          {
            "title": "4-3c — The Cerebral Cortex",
            "text": "The **cerebral cortex** is a thin, folded outer layer; **gray matter** contains many cell bodies, whereas **white matter** consists mainly of axonal pathways. Folding fits more surface within the skull. **Corpus callosum:** large fiber bundle connecting hemispheres. Sensory cortex processes incoming information, motor cortex commands movement, and association cortex links sensation/action with language and abstract thought.\n\n| Lobe/areas | Location and functions | Damage/application examples |\n|---|---|---|\n| Frontal | Front; primary motor cortex at rear; Broca's area near motor cortex; prefrontal cortex farthest forward | Voluntary movement; Broca damage impairs speech production with relatively preserved understanding. Prefrontal damage can impair planning, attention, judgment. |\n| Orbitofrontal cortex | Prefrontal area just above/behind eyes | Anticipating consequences, impulse control, social/emotional decisions; impairment can coexist with preserved IQ and language. Gage illustrates frontal pathways/social regulation; alien-hand syndrome involves disrupted voluntary-control connections. |\n| Occipital | Rear; primary visual cortex | Initial analysis of borders, color, shading, movement; connects to temporal recognition and parietal visually guided movement pathways. |\n| Temporal | Side, beneath frontal/parietal lobes; primary auditory cortex and Wernicke's area | Hearing, higher visual recognition of objects/faces; Wernicke damage can yield fluent but meaningless speech and impaired comprehension. |\n| Parietal | Behind frontal lobe; primary somatosensory cortex toward front | Touch, pain, temperature, position; spatial attention and vision–action coordination. Right parietal damage may produce neglect of left space. |\n\n**Figure 4.12:** locate motor strip immediately anterior to somatosensory strip, occipital visual region posteriorly, auditory region in temporal lobe, frontal Broca and temporal Wernicke regions. The core chapter does not provide a detailed body-part homunculus map; compare with lecture.\n\n**Neglect (Figure 4.14)** is impaired attention to opposite-side space, often with lack of awareness of the deficit, not merely an eye problem. A patient may omit the left half of drawings or clock numbers.\n\n**Mirror neurons/systems:** respond during action and observation of relevant actions. Single-neuron monkey recordings differ from human fMRI evidence about larger systems. Expert-tennis predictions were associated with activity in mirror/motor-memory systems; expertise helped when the server had a prior intention. Avoid turning this association into a single-cell explanation of all empathy.\n\n**Lateralization:** some functions are more concentrated in one hemisphere. Motor/somatosensory processing is largely contralateral. **Visual field is not eye:** left visual field → right hemisphere; right visual field → left hemisphere. Both eyes contribute to each field.\n\n**Split-brain (Figures 4.15–4.16):** severing corpus-callosal connections can limit seizure spread while leaving ordinary personality, intelligence, and speech largely intact. With fixation maintained, “he” in left field reaches right hemisphere and “art” in right field reaches left. The person says “art” using left-hemisphere language but points to “he” with the left hand controlled by the right hemisphere. Do not assume a failure to name means failure to perceive.\n\nMost people lateralize language left; handedness predicts imperfectly. Table 4.2 gives 96% left-language dominance among right-handers; among left-handers, 70% left, 15% right, 15% mixed. Connected hemispheres cooperate. Artistic/logical occupations and talents are not explained by a supposedly dominant right/left brain. The text suggests multitasking advantages to lateralization. The legal-responsibility feature warns that group-level brain predictions cannot determine an individual's future actions with certainty. The EMDR feature uses competing explanations and study-quality limits to evaluate apparent treatment mechanisms."
          },
          {
            "title": "4-4a–b — Somatic and Autonomic Nervous Systems",
            "text": "**Somatic:** peripheral sensory input and voluntary skeletal-muscle commands; 31 spinal-nerve pairs and 12 cranial-nerve pairs. Figure 4.17 includes olfactory/smell, optic/vision, auditory/hearing and balance, and mixed sensory/motor cranial nerves. Vagus communicates with internal organs.\n\n**Autonomic:** glands and organs, usually operating without conscious direction. **Sympathetic:** energy expenditure, arousal, fight/flight. **Parasympathetic:** energy storage, rest, repair, and return toward baseline. They usually have opposing organ effects but can cooperate during sex.\n\n| Organ/function (Figure 4.18) | Sympathetic | Parasympathetic |\n|---|---|---|\n| Pupils | Dilate | Constrict |\n| Heart | Speed up | Slow down |\n| Airways | Relax/open | Constrict |\n| Salivation/digestion | Inhibit | Stimulate |\n| Urination | Inhibit | Promote |\n\n**Enteric:** neurons in gastrointestinal lining regulate digestive muscle contractions and secretions, communicate with endocrine signals and vagus (gut–brain axis), and contribute to hunger/fullness/pain and less conscious gut signals. Figure 4.19 shows networks around intestinal muscle moving food along. The microbiome participates in this communication; enteric functions are not simply voluntary somatic movement."
          },
          {
            "title": "4-4c — The Endocrine System",
            "text": "Hormones are chemical messages released into blood, influencing more distant targets than a synapse. Nervous and endocrine systems coordinate arousal, metabolism, growth, sex; hypothalamus governs much endocrine activity through pituitary regulation. The same chemical can have neurotransmitter or hormonal functions depending on where/how it acts.\n\n| Gland/location (Figure 4.20) | Hormone/functions emphasized |\n|---|---|\n| Pineal, brain | Melatonin and sleep–wake cycles; evening/light relationships connect to Chapter 6 |\n| Pituitary, below hypothalamus | “Master gland”: directly released hormones and signals to other glands; itself controlled by hypothalamus |\n| Pituitary-related oxytocin | Breastfeeding and social bonding/cooperation/trust associations |\n| Pituitary-related vasopressin | Fluid regulation and social-function associations |\n| Pituitary growth hormone | Growth/regeneration |\n| Thyroid, throat below larynx | Metabolic rate; low thyroid activity can resemble depressed symptoms |\n| Adrenals, above kidneys | Stress-related hormones, including cortisol, affecting body and brain |\n| Pancreatic islets of Langerhans | Insulin and digestive/metabolic regulation |\n| Ovaries/testes | Sex hormones; pituitary regulation of puberty/fertility |\n\nFollow the relationship **hypothalamus → pituitary → target glands → hormones → distant organs/brain**. The text groups pituitary-related hormones broadly; verify anterior versus posterior pituitary synthesis/release distinctions if required by lecture. The text's melatonin-regulatory comments are historical textbook statements, not current treatment instructions."
          },
          {
            "title": "4-5a — Neurons and Glia",
            "text": "**Cell body/soma:** nucleus and cellular maintenance. **Dendrites:** receive input. **Axon:** carries output; typically one per neuron, possibly branching, ending in terminals. **Synaptic vesicles** contain neurotransmitters. Membrane channels regulate movement between intracellular/extracellular fluid (Figure 4.21).\n\n**Glia** support location, clear debris, contribute to the blood–brain barrier, and form **myelin** around some axons. Myelin speeds signaling and reduces energy demand. **Nodes of Ranvier** are gaps between myelin segments rich in channels. Fast sharp pain uses myelinated fibers; slower aching signals use unmyelinated fibers.\n\n**Repair distinction:** the textbook contrasts CNS glial scarring that inhibits axon regrowth with PNS glia supporting regrowth, explaining why peripheral nerve repair/transplant reconnection is possible. Its broad statement that CNS damage is “permanent” should be compared with lecture on functional plasticity/recovery; blocked axonal regrowth and complete absence of adaptation are different claims. The section describes two myelin-producing glial types but does not name them in its prose; verify lecture naming requirements."
          },
          {
            "title": "4-5b — Neural Signaling",
            "text": "**Electrical within a neuron, chemical between neurons:** resting potential → adequate depolarization reaches threshold → action potential propagates down axon → transmitter release → postsynaptic effects → summation in the next neuron.\n\nAt **resting potential**, interior is negative relative to exterior. **Depolarization** reduces that difference; **hyperpolarization** increases it. At **threshold**, sodium channels open and positive Na⁺ enters rapidly, making the inside more positive. Potassium channels then open; positive K⁺ exits, returning voltage toward negative values. A **refractory period** follows, during which another action potential is impossible or less likely. Action potentials are **all or none**, not larger because a stimulus is stronger.\n\n**Figure 4.25** plots voltage over milliseconds: rest → threshold → steep depolarization → peak → repolarization/undershoot → recovery. Do not substitute a generic threshold value for the assigned figure without checking lecture. **Propagation (Figure 4.26):** unmyelinated axons regenerate signals successively along adjacent membrane; in myelinated axons current flows beneath insulation and action potentials regenerate at nodes. Fewer regeneration/restoration sites make conduction faster and more economical.\n\n**Synaptic sequence (Figure 4.27):** action potential reaches terminal → vesicles leave anchors → fuse with terminal membrane → neurotransmitter released into gap → binds compatible receptors → vesicle material recycled/refilled. Receptors resemble matching locks/keys. Termination occurs through diffusion, enzymatic breakdown, or **reuptake** by transporters into the releasing cell.\n\n**Excitatory input:** depolarizes, increasing probability of threshold. **Inhibitory input:** hyperpolarizes, reducing it. **Summation** combines many inputs near the cell-body/axon junction; firing depends on the combined result. Inhibition is essential for controlled movement. Figure 4.28 uses tetanus to illustrate excessive contraction when inhibitory signaling is blocked. Reuptake inhibition prolongs transmitter availability; the textbook's SSRI example is a simplified synaptic model, not a complete explanation of depression."
          },
          {
            "title": "4-5c — Types of Neurotransmitters",
            "text": "| Neurotransmitter | Functions in Table 4.4 and body text | Drug/damage connection |\n|---|---|---|\n| Acetylcholine (ACh) | Skeletal movement, autonomic action, learning/memory | Nicotine acts at ACh systems; curare blocks muscle ACh receptors; botulinum toxin prevents release. ACh circuits deteriorate in Alzheimer's. |\n| Epinephrine/adrenalin | Arousal | Appears in summary table |\n| Norepinephrine/noradrenalin | Arousal, vigilance, sympathetic functions | Relevant to conditions involving arousal disturbances |\n| Dopamine | Movement, planning, reward | Loss of movement-circuit dopamine neurons in Parkinson's; addictive drugs increase reward-circuit activity |\n| Serotonin | Mood, appetite, sleep, dominance/aggression | Reuptake inhibition prolongs synaptic availability |\n| Glutamate | Excitation of brain activity | Listed in table |\n| GABA | Inhibition of brain activity | Listed in table |\n| Endorphins | Endogenous opioid pain modulation | Morphine/heroin/oxycodone mimic activity at opioid receptors |\n\nOne neurotransmitter participates in many systems; an effect depends on receptors and circuit context. Chapter 6 develops agonists, antagonists, tolerance, and drug classes. The relationships feature places insula within the lateral sulcus, associating posterior activity with desire and anterior activity with romantic love; these are parts of networks, not a single “love center.” The loneliness feature contrasts reward-circuit responses to pleasant social versus nonsocial scenes."
          },
          {
            "title": "4-6 — Review and checklist-specific gaps",
            "text": "Review/key terms were checked. This chapter provides repair, myelination, and clinical-damage examples, but no extended standalone account of developmental neuroplasticity or detailed motor homunculi in the body text reviewed. Chapter 5 supplies a sensory homunculus and sensory-loss/experience-dependent plasticity examples. Do not fill remaining lecture needs with unmarked textbook claims."
          }
        ]
      },
      {
        "title": "Chapter 5 — The Perceiving Mind: Sensation and Perception",
        "sections": [
          {
            "title": "5-1–5-1b — From stimulus to experience",
            "text": "**Sensation** gathers stimulation from outside or inside the body; **perception** interprets it. **Transduction** converts physical stimulation into neural signals. A stimulus must reach an appropriate receptor within that sensory system's operating range. Species differ in what they detect because their ecological needs differ.\n\nAttention selects a limited part of incoming information. Novelty, change, and intensity attract attention. **Sensory adaptation** reduces responses to unchanging stimulation. **Inattentional blindness** is failing to notice a visible event while attending elsewhere: even radiologists searching scans can miss an unexpected gorilla image. Dividing attention has limits.\n\n**Bottom-up processing** builds a percept from incoming sensory information. **Top-down processing** uses knowledge, expectations, and context to interpret that information. Familiarity makes scrambled words readable and proofreading mistakes easy to overlook. Both processes usually contribute. The dress example illustrates differing interpretations of lighting and color from the same image.\n\n**Exam exclusion:** the Measuring Perception discussion, signal detection, absolute/difference thresholds, and psychophysics are deliberately omitted, including the corresponding summary/key terms."
          },
          {
            "title": "5-2a–b — Visual stimulus and transduction",
            "text": "Light is electromagnetic energy. **Wavelength** relates to perceived color; **amplitude** relates to brightness. Humans detect only part of the electromagnetic spectrum.\n\n**Pathway (Figures 5.5–5.9):** light → cornea, which bends it → pupil, whose size the iris controls → lens, which changes shape through accommodation to focus → retina. The retinal image is inverted. Light travels through other retinal layers to reach rods and cones. **Fovea:** central region specialized for fine detail. **Optic disk/blind spot:** optic-nerve exit with no photoreceptors; perception fills in the gap.\n\n| Receptor | Main contribution | Important distinction |\n|---|---|---|\n| Rods | Dim-light and peripheral vision | Sensitive; limited detail and no color discrimination |\n| Cones | Bright-light, fine-detail, color vision | Concentrated at the fovea |\n| Photosensitive ganglion cells | Brightness information for pupil responses and body clock | Functions beyond ordinary image formation |\n\nRetinal processing sends signals through ganglion-cell axons forming the **optic nerve**. At the **optic chiasm**, nasal-retina fibers cross; temporal-retina fibers stay on the same side. Optic tracts carry information mostly through thalamus to occipital visual cortex. Each hemisphere receives the opposite visual field from **both eyes**, not exclusively the opposite eye. Other routes support hypothalamic clock regulation, midbrain orienting/reflexes, and rapid emotional responses.\n\nOccipital-to-temporal pathways contribute to shape, color, object, and face recognition; occipital-to-parietal pathways contribute to movement and guiding action visually."
          },
          {
            "title": "5-2c — Color, objects, organization, and depth",
            "text": "**Trichromatic theory:** relative responses of short-, medium-, and long-wavelength cone types support color discrimination. Combining light differs from mixing pigments. Color-vision deficiencies usually involve altered/missing cone types rather than loss of all color experience.\n\n**Opponent-process theory:** red–green, blue–yellow, and black–white channels operate in opposing pairs. Adaptation to one member produces an afterimage emphasizing the opponent. These theories describe different processing levels and can both be correct. Ishihara illustrations demonstrate color differences; the accessibility feature recommends text, shapes, position, and contrast alongside color.\n\nObject recognition uses multiple levels of feature processing plus context. A single hypothetical “grandmother cell” is insufficient as a complete explanation. Labels can reveal a cow or Dalmatian in an initially confusing pattern of dots. Spatial-grating illustrations show how patterns can be represented by different levels of detail and contrast; excluded psychophysical measurement procedures are not expanded here.\n\n**Gestalt organization:** figure–ground separates an object from its background (vase/faces); proximity groups nearby elements; similarity groups like elements; continuity favors smooth paths; closure fills gaps; simplicity favors an uncomplicated organization. The panda logo illustrates closure.\n\n| Depth cue | How it helps |\n|---|---|\n| Linear perspective | Parallel lines appear to converge with distance |\n| Texture gradient | Texture becomes finer/denser farther away |\n| Shading | Light and shadow suggest surface shape |\n| Occlusion | Nearer objects block farther objects |\n| Relative/known size | Apparent size interpreted using comparison or familiarity |\n| Motion parallax | Nearby objects shift more quickly across the view than distant ones |\n| Retinal disparity | Differences between the two retinal images support depth |\n\nThe first six are **monocular**; retinal disparity is **binocular**. The body text emphasizes disparity; compare lecture separately for convergence.\n\nIllusions reveal useful assumptions that sometimes mislead: the **Ames room** conceals unequal distances with a distorted room; **Müller-Lyer** arrows alter apparent line length; **Ponzo** perspective cues make equal bars appear unequal; the horizon moon's surroundings affect apparent size; **Shepard tables** use perspective so identical shapes look different. Figures should be understood as explanations of perceptual construction, not simply names to memorize."
          },
          {
            "title": "5-2d — Retained individual and cultural differences",
            "text": "**Nearsightedness:** an elongated eye contributes to blurred distant vision. **Farsightedness:** a shorter eye makes near focusing difficult. **Astigmatism:** uneven corneal shape distorts focus. Cultural experience can emphasize objects/categories or context/relationships and influence visual interpretation; these are group tendencies, not predictions about every individual. Sensory developmental/aging material is excluded."
          },
          {
            "title": "5-3a–b — Auditory stimulus and transduction",
            "text": "Sound consists of molecular vibrations and requires a medium. **Frequency** relates to pitch; **amplitude** relates to loudness.\n\n**Figures 5.31–5.33:** pinna collects sound → auditory canal → tympanic membrane/eardrum → middle-ear ossicles → oval window → waves in cochlear fluid → basilar-membrane motion → bending of hair cells in the **organ of Corti** → neurotransmitter release → auditory nerve. The oval window transfers mechanical motion into fluid; the round window permits pressure displacement. The cochlear duct lies between the vestibular and tympanic canals.\n\nAuditory nerve → medulla → midbrain, including localization/reflex processing → thalamus → primary auditory cortex in temporal lobe → secondary areas for more complex sound processing. Hair-cell bending is the critical mechanical-to-neural step; the ear does not simply deliver sound waves directly to cortex."
          },
          {
            "title": "5-3c–e — Pitch, location, and interpretation",
            "text": "**Place theory:** the location of greatest basilar-membrane movement codes pitch. High frequencies peak near the narrow, stiff base by the oval window; low frequencies peak toward the wider, more flexible apex. The text emphasizes place coding above about 4,000 Hz. **Temporal theory:** neural firing patterns over time contribute especially below about 4,000 Hz. Preserve the textbook's term when comparing lecture terminology.\n\nSound location uses between-ear arrival-time differences and intensity differences caused by the head's sound shadow. The pinna helps with vertical location. Vision can dominate sound location: movie dialogue seems to come from an actor rather than a separate speaker. Sounds sharing location and onset/offset tend to be grouped together; knowledge of music and language also organizes perception.\n\n**McGurk effect (Figure 5.35):** a heard “ba” combined with visible “ga” lip movements can produce a perceived “da.” Auditory experience reflects integration with vision. Sine-wave speech may sound like unrelated noises until listeners are told it contains speech; recognition then changes through top-down processing.\n\n**Absolute pitch:** identifying a note without a comparison tone; the discussion connects it with individual brain, genetic, and connectivity differences. Deaf culture includes distinct signed languages; American Sign Language is not merely signed English, and different countries' signed languages differ. Developmental and age-related hearing material is excluded."
          },
          {
            "title": "5-4a — Body position and movement",
            "text": "The inner-ear **vestibular system** detects head position and movement, including acceleration and rotation. Fluid displacement bends hair cells. Continued fluid movement after spinning helps explain dizziness. Vestibular information reaches medulla/cerebellum and combines with vision and other body signals to maintain balance. Routes to spinal cord support postural reflexes; routes through thalamus and parietal somatosensory cortex inform voluntary movement. Eye movements opposite head movement stabilize the visual scene.\n\n**Lecture comparison:** the section emphasizes vestibular mechanisms. It does not provide an extended separate account of proprioception and muscle-spindle/joint-receptor mechanisms; do not treat vestibular sense as interchangeable with all limb-position information."
          },
          {
            "title": "5-4b — Touch and sensory maps",
            "text": "Mechanical bending/stretching of receptors produces signals for pressure, vibration, and stretch. Receptors occur in skin, hair follicles, joints, blood vessels, and internal organs. Typical route: receptor → spinal cord → thalamus → parietal somatosensory cortex; facial inputs arrive through cranial nerves.\n\nTouch also communicates comfort, greeting, affection, and sexuality. **Figure 5.37** locates specialized receptors within a skin cross-section; its supplied labels do not identify named receptor subtypes. Temperature is included among somatosensory functions, with skin nerve endings also contributing to pain from harmful heat/cold, but the reviewed sections do not develop a separate detailed thermal-receptor taxonomy. Compare that level of detail with lecture.\n\n**Sensory homunculus (Figure 5.38):** cortical area reflects sensitivity and processing demands rather than physical body-part size. Hands and lips have large representations. This is a sensory map, distinct from the motor map required in lecture. Rodents' large whisker representations illustrate species-specific demands.\n\n**Experience-dependent plasticity:** lost hand input can allow neighboring representations to recruit territory; touching another body area may evoke a phantom-hand sensation. Practice with fine touch, Braille, or string instruments changes representations. Cortical stimulation can supply touch feedback for prostheses. These examples concern changing maps, not necessarily regrowing damaged CNS axons. Some individuals with autism show unusually intense touch responses. Brain tissue itself lacks pain receptors; overlying tissues do not."
          },
          {
            "title": "5-4c — Pain pathways and modulation",
            "text": "Free nerve endings respond to potentially damaging mechanical, temperature, and chemical stimulation; capsaicin is an example. Fast myelinated pathways carry sharp pain; slower unmyelinated pathways contribute to dull aching. Spinal connections → thalamus → somatosensory cortex for location/intensity and anterior cingulate, insula, and amygdala for emotional dimensions.\n\n**Gate theory (Figure 5.39):** spinal processing can increase or reduce onward pain transmission. Rubbing an injured elbow supplies competing touch input that can reduce pain; stress and descending brain influences also modulate the gate. Pain is not a fixed readout of tissue damage.\n\nDescending control involving the **periaqueductal gray** and endogenous opioids/endorphins reduces pain signaling. Expectations and experience help construct pain; placebo effects illustrate this. Culture, perceived control, athletic experience, and supportive relationships alter pain experience. Holding a spouse's hand reduced activity associated with pain's emotional/arousing dimensions in the cited study, with larger effects associated with relationship quality. These are illustrations of modulation, not proof that severe pain is imaginary."
          },
          {
            "title": "5-5a — Olfaction",
            "text": "Airborne molecules dissolve in nasal mucus and interact with olfactory receptor cells. Receptor branches → olfactory nerve fibers → **olfactory bulbs** below the frontal lobes → olfactory cortex and amygdala (Figure 5.40). Receptor cells are replaced on roughly 4–6-week cycles.\n\n**Key pathway exception:** smell reaches cortex without an initial direct thalamic relay. Subsequent olfactory-cortex → thalamus → orbitofrontal routes contribute to conscious odor awareness. Connections with emotion-related structures help explain emotionally powerful odors. Figure labels include mucus, receptor cells, nerve/axons through bone, bulb, cortex, amygdala, and connected limbic regions."
          },
          {
            "title": "5-5b — Gustation",
            "text": "Taste detects chemicals dissolved in saliva and helps guide food selection. Major categories are sweet, sour, salty, bitter, and **umami** (savory/meaty). Capsaicin produces chemical irritation/pain and should not be casually equated with an additional basic taste.\n\n**Figure 5.41:** papillae are tongue bumps; most contain taste buds; buds contain receptor and supporting cells. Microvilli/cilia contact dissolved molecules, initiating transduction; cranial-nerve axons carry output. Cells are regularly replaced. **Tongue-map myth:** tastes are not confined to separate sweet/salty/bitter zones.\n\nTaste → medulla → thalamus → insula, lower parietal somatosensory cortex, and orbitofrontal cortex. Orbitofrontal processing contributes to pleasantness/unpleasantness and integration with smell."
          },
          {
            "title": "5-5c–e — Flavor, individual differences, culture",
            "text": "**Flavor** integrates taste and smell; a cold reduces flavor because olfactory input is reduced. The two pathways converge in orbitofrontal cortex. Expectations affect pleasantness: the same onion smell rated differently when labeled pizza versus body odor. Complex odor mixtures can be recognized as a single familiar experience.\n\n**Supertasters** have unusually many papillae/taste buds and often experience stronger flavors. The activity and Table 5.3 compare weak, moderate, and intense mint responses; strongly sensitive tasters show greater variation in food likes and may dislike bitter foods. These demonstrations are illustrations, not formal diagnoses. Odors associated with trauma can evoke distress; the cited veteran study links diesel odor, PTSD symptoms, and amygdala activity.\n\nCulture and experience influence odor categories, pleasantness, and food preferences: wintergreen associated with candy versus medicine receives different evaluations. Broad odor categories can be shared while finer distinctions differ. The text's prenatal/age-related taste material is excluded.\n\nThe loneliness feature extends perception to social experience: dissatisfaction with perceived connection matters more than simply counting friends. Heightened sensitivity to social threats may encourage self-protective behavior that further impairs relationships. **Summary 5.3** compares ear transduction, vestibular position/movement, skin receptors, airborne chemical receptors, and dissolved chemical receptors. Review/key terms were checked within the exclusions."
          }
        ]
      },
      {
        "title": "Chapter 6 — The Aware Mind: Elements of Consciousness",
        "sections": [
          {
            "title": "Introduction and 6-1 — What Does It Mean to Be Conscious?",
            "text": "**Consciousness** is awareness of internal experience and the surrounding world. Distinguish **state** (alert, drowsy, asleep, altered), **content** (what currently occupies awareness), and **self-awareness** (recognizing oneself as an individual). Summary 6.1 compares these meanings. William James's stream of consciousness emphasizes the apparent continuous flow; some mental processing remains unconscious.\n\nThe introduction treats conscious interpretation as something that can follow action. **Figure 6.1:** motor-cortex readiness activity begins about 550 milliseconds before movement; reported awareness of intent begins about 200 milliseconds before movement—a roughly 350-millisecond gap. This raises questions about conscious control, rather than conclusively settling philosophical free will. TMS changed hand choices while participants still felt they had freely chosen. A split-brain patient seeing an instruction to stand in the right hemisphere could stand and then explain it as wanting to stretch; the verbal interpreter supplies a plausible account without access to the actual instruction."
          },
          {
            "title": "6-1a — The Evolution of Consciousness",
            "text": "Different meanings of consciousness require different evidence. Varying alertness may conserve energy, support repair, and keep an animal inactive when poorly equipped for its environment. Predation and availability of safe shelter help explain species' sleep differences. Awareness of sensations may permit flexible choices instead of an automatic reaction. Self-awareness may support self-preservation and complex social interactions.\n\n**Mirror/rouge test:** place an unobtrusive mark on the subject and see whether it uses its reflection to investigate the mark on its own body. The text describes recognition emerging around 18 months in children and evidence from several other species. The behavior is evidence for a particular form of self-recognition; consciousness's exact evolutionary origin remains disputed. Collective problem-solving by ants further complicates simplistic definitions.\n\nThe machine-consciousness feature distinguishes **weak AI**, intelligent behavior without established subjective experience, from **strong AI**, the proposed full range of human cognition. A **Turing test** evaluates whether conversation distinguishes machine from human; successful imitation is a behavioral criterion, not direct access to subjective experience. Robot mirror and speech demonstrations illustrate the debate. These are the book's historical examples, not an assessment of present-day AI capabilities."
          },
          {
            "title": "6-1b — Searching for Consciousness in the Brain",
            "text": "Conscious experience depends on interacting networks rather than one isolated “consciousness center.” **Figure 6.2:** cortex, thalamus, reticular formation, and their connections enable consciousness. A necessary structure need not be sufficient: removing one TV component destroys a picture without making that component its sole source. Reticular formation helps regulate arousal and responsiveness; enabling awareness differs from specifying its content.\n\n**Default mode network (DMN; Figure 6.3):** active during mind wandering and thinking about self, others, past, and future. Labeled regions include medial prefrontal, medial/lateral parietal, and lateral temporal cortex. Activity often decreases during externally focused tasks. Unfocused thought is not an idle, energy-free brain; the text reports only a small energy increase during focused activity. Connectivity varies with age and is associated with cognitive functioning and some disorders; these associations do not establish simple causal explanations."
          },
          {
            "title": "6-2a — Circadian Rhythms",
            "text": "**Circadian** means approximately daily. Hypothalamic biological clocks coordinate sleep/waking, temperature, and hunger. **Zeitgebers** are external time cues, especially light and also eating patterns, that synchronize internal rhythms. Without light cues the human clock tends to run slightly longer than 24 hours, gradually drifting relative to the environment. The section does not name the suprachiasmatic nucleus; compare lecture for that anatomical detail.\n\nArtificial lighting and screens affect nighttime melatonin regulation; the chapter links disrupted schedules to health and performance difficulties. Its wording that light “breaks down” melatonin should be compared with lecture's account of secretion/regulation. **Shift maladaptation** includes mood, interpersonal, personality, and health difficulties in shift workers. **Social jet lag** reflects inconsistent weekday/weekend timing.\n\n**Jet lag:** internal clock and destination schedule disagree after crossing time zones; equal-distance north–south travel does not create the same mismatch. **Figure 6.5:** a 10 p.m.–6 a.m. destination schedule feels like 7 p.m.–3 a.m. to an LA traveler in New York, but 1 a.m.–9 a.m. to a New Yorker in LA. Eastward travel requires an earlier phase and is usually harder; westward travel delays the phase. Figures 6.4 and 6.6 illustrate limited time in bed and associations between abrupt clock changes, sleep loss, accidents, and cardiovascular events. Observational associations are not experimental proof of every proposed mechanism.\n\nSeasonal-pattern depression is associated with seasonal changes in light and circadian timing; the textbook discusses bright-light treatment. **Larks** favor early timing; **owls** favor late timing. Genetic differences and age-related changes contribute; adolescence/young adulthood tends toward later timing. These are sleep-development examples, retained because the exclusion concerns sensory modalities."
          },
          {
            "title": "6-2b–c — Waking, sleep stages, and nightly cycles",
            "text": "| State/stage | EEG markers in this textbook | Body and awareness |\n|---|---|---|\n| Alert waking | Beta, 15–30 cycles/second, rapid irregular low amplitude | Active processing, voluntary action, responsive |\n| Relaxed waking | Alpha, 9–12 cycles/second | Awake but relaxed; mind wandering often correlates with alpha/DMN activity |\n| Sensory processing | Gamma, above 30 cycles/second | Particularly associated with visual input |\n| N-REM stage 1 | Some theta, 4–7 cycles/second | Transition into sleep; reduced tension/heart rate; may deny sleeping |\n| N-REM stage 2 | Theta plus sleep spindles and K complexes | Clearly asleep; responsiveness and muscle tension decrease |\n| N-REM stages 3 and 4 | Delta, 1–4 cycles/second; more delta in stage 4 | Deepest sleep; hard to awaken; confusion on waking |\n| REM | Waking-like activity; body text describes beta/theta cycling | Rapid eye movements, major postural-muscle paralysis, irregular sympathetic activity, often vivid dreams |\n\n**Terminology flag:** this edition explicitly uses **four N-REM stages**. Preserve those labels when attributing to the book. If lecture uses a combined deep-sleep stage, reconcile the mapping explicitly rather than quietly changing textbook stage numbers.\n\n**Spindles** are brief bursts and **K complexes** distinctive large waveforms (Figure 6.8). The text connects spindles with memory consolidation and describes these waveforms as potentially helping tune out external input. REM is **paradoxical sleep**: active brain with an outwardly deeply sleeping, largely immobilized body. Heart rate, breathing, and blood pressure become rapid/irregular; sexual arousal can occur without corresponding dream content. Protective paralysis ordinarily prevents acting out dreams.\n\n**Figure 6.9:** the first REM episode usually begins 90–120 minutes after sleep onset. Early-night sleep contains most deep N-REM and brief REM periods. Later-night REM periods lengthen; N-REM stays lighter and deep stages become rare. The hypnogram shows repeated cycles, not a single one-way descent through stages. Summary 6.2 compares EEG, movement, autonomic activity, and responsiveness."
          },
          {
            "title": "6-2d — The Benefits of Sleep and Dreams",
            "text": "Sleep deprivation impairs reaction time, decisions, concentration, and memory. Sleep supports immune functioning, healing, and metabolic regulation. **Restorative hypothesis:** deep N-REM supports bodily repair. **Figure 6.10:** growth-hormone release peaks mainly during early-night deep N-REM. Selective deep-sleep deprivation can produce muscle/joint complaints.\n\nSleep supports **memory consolidation** and removal of unnecessary information: the text describes N-REM reactivating/transforming memories and REM stabilizing them. All-night studying therefore trades study time against later retention/retrieval. **REM rebound:** after REM deprivation, subsequent sleep contains unusually large amounts of REM, suggesting an important function.\n\n**Figure 6.11:** infants spend a greater proportion of sleep in REM than adults, supporting a possible developmental wiring/stimulation role. Mood disorders and REM patterns are associated; serotonin/norepinephrine brainstem neurons are relatively quiet during REM. Correlation does not establish a single function of REM or a single cause of mood disorders.\n\n**Activation–synthesis theory:** the brain constructs a dream story from ongoing neural activity. Paralysis can become inability-to-move content; vestibular activation can become flying/falling; sexual arousal can enter dreams. An overlapping-network account places waking thought, daydreaming, and sleep dreams on a continuum: reduced outside input and frontal activity allow less logical/self-aware narratives built from memory. These are scientific accounts distinct from unsupported claims that dreams predict the future.\n\n**Lucid dreaming:** awareness of dreaming while the dream continues, sometimes allowing control of its content. The text associates it with increased frontal/dorsolateral prefrontal activity. The Epworth activity measures likelihood of dozing in everyday situations, distinguishing sleepiness from merely feeling tired; its score is an illustration, not a diagnosis supplied by these notes."
          },
          {
            "title": "6-2e — Sleep Disorders",
            "text": "| Disorder/phenomenon | Main distinction and mechanism |\n|---|---|\n| Nightmare | Upsetting REM dream, often recalled |\n| Sleep terror | Distress during deep N-REM, usually early night; confusion if awakened and often no next-day memory |\n| Sleepwalking | Deep N-REM stages 3/4; ordinary REM paralysis prevents walking during REM |\n| REM sleep behavior disorder | REM paralysis fails, allowing dream-enactment movements |\n| Onset insomnia | Difficulty falling asleep; stress/anxiety can contribute |\n| Maintenance insomnia | Repeated awakenings or early waking; multiple possible contributors |\n| Narcolepsy | Sleep attacks and REM-like features intruding into waking; loss/damage of hypothalamic orexin-producing cells |\n| Cataplexy | Sudden loss of muscle tone while consciousness remains; REM-like paralysis during waking |\n| Sleep paralysis | REM-like immobility at sleep onset or awakening |\n| Sleep apnea | Breathing interruptions disrupt sleep; airway blockage versus malfunction of brainstem breathing control |\n| Restless legs syndrome | Uncomfortable limb sensations and movements disrupt rest; text discusses dopamine-function links and association with ADHD |\n| Sudden infant death syndrome | Unexpected infant death during sleep; triple-risk model combines individual vulnerability, developmental timing, and environmental stressors |\n\nNarcolepsy discussion combines genetic vulnerability and autoimmune damage, rather than treating genes alone as sufficient. Sleep apnea is not merely snoring or ordinary insomnia. The SIDS example shows how changing sleep position reduced deaths while leaving other risk factors relevant. Historical treatment, vaccine, and prevalence statements in the chapter are retained as context only where needed for mechanisms; these notes are not current clinical guidance."
          },
          {
            "title": "6-3a — Specific Damage and Awareness",
            "text": "**Prosopagnosia:** inability to recognize faces, associated here with temporal-lobe fusiform face area damage. A patient may lack explicit recognition yet show autonomic responses distinguishing familiar from unfamiliar faces. **Capgras syndrome:** the face is recognized but the normal sense of familiarity/emotional significance is disrupted, leading to the belief that an imposter replaced a familiar person. These dissociations show that visual features, recognition, and emotional familiarity involve separable processes."
          },
          {
            "title": "6-3b — Coma, Vegetative State, Brain Death, and Near-Death",
            "text": "| Condition | Textbook distinction |\n|---|---|\n| Coma | Profound unarousable unconsciousness; no normal sleep–wake cycles or voluntary behavior; typically reticular-formation or bilateral-hemisphere dysfunction |\n| Vegetative state (VS) | Wake-like cycles/eye opening without demonstrated conscious awareness; outward movements do not necessarily establish awareness |\n| Brain death | Irreversible loss of all brain functions, including brainstem functions; distinct from reversible coma or supported bodily circulation |\n| Near-death experience | Reported experience following a life-threatening event/revival, not proof of recovery from correctly established brain death |\n\n**Figures 6.12–6.13:** an unreactive coma alpha pattern differs from ordinary drowsy alpha; some patients diagnosed with VS show task-specific fMRI responses resembling healthy participants when imagining movement versus a spatial task. Lack of outward response does not prove absence of awareness. The circulation image shows flow outside the brain with absent brain flow; it illustrates evaluation, not a complete diagnostic protocol.\n\nNear-death reports include floating/out-of-body perspectives, lights/tunnels, and calm feelings. Proposed brain explanations involve REM-like intrusion, activity near cardiac arrest, and ketamine-like experiences; these hypotheses do not establish a final explanation."
          },
          {
            "title": "6-3c — Seizures",
            "text": "**Seizure:** uncontrolled electrical disturbance that can change awareness; recurrent seizures are discussed as epilepsy. Reduced GABA inhibition can allow excessive activity; enhancing inhibition can suppress seizures.\n\n**Partial seizures** begin at a focal site and may have an **aura**. **Generalized seizures** involve distributed thalamocortical circuits without the same initial focus (Figure 6.14). Temporal-lobe episodes may produce **déjà vu**, an inappropriate feeling of prior experience, or **jamais vu**, familiar surroundings suddenly feeling unfamiliar. **Tonic-clonic:** loss of awareness, sustained contraction followed by rhythmic contractions, then a recovery period. **Absence:** brief loss of awareness with limited movements such as blinking. Compare lecture for updated focal/generalized terminology and qualifications to the text's simplified classification."
          },
          {
            "title": "6-4a — Psychoactive Drugs, Tolerance, Withdrawal, Addiction",
            "text": "**Psychoactive drugs** alter consciousness. **Tolerance:** a larger amount is needed to obtain a prior effect. Repeated exposure produces compensatory responses maintaining **homeostasis**; the text explicitly includes biological and learned compensation. Do not confuse tolerance with simply enjoying a drug or with every aspect of addiction.\n\n**Withdrawal:** effects after stopping habitual use, often opposite the drug's effects. Removing a depressant can leave excessive excitation; removing a stimulant can produce fatigue. The text contrasts powerful physical withdrawal in some substances with less prominent withdrawal in others. Its claim that cocaine usually lacks significant withdrawal should be checked against lecture rather than taken to mean cessation has no effects.\n\n**Addiction:** compulsive use/behavior continuing despite negative consequences. **Figure 6.15:** dopamine pathways from midbrain to basal ganglia/nucleus accumbens support impulsive reward seeking; frontal systems evaluate consequences and control impulses; insula contributes to craving. Strong immediate reward, weak reflective control, and craving can reinforce continued use. Context and environment also matter, illustrated by changed heroin use after Vietnam veterans returned home."
          },
          {
            "title": "6-4b — Drug Mechanisms Linked to Chapter 4",
            "text": "| Drug/class | Mechanism emphasized in body text and Summary 6.3 | Effects/distinctions |\n|---|---|---|\n| Cannabis/THC | Acts at endogenous cannabinoid receptors; overlaps with anandamide signaling and influences dopamine reward activity | Altered time/space perception, euphoria or withdrawal from social activity; book classifies it as hallucinogenic |\n| LSD | Interacts with serotonin receptors | Visual hallucinations, altered network activity; possible later involuntary flashback experiences |\n| Caffeine | Blocks adenosine's normal inhibitory action | Increased alertness; withdrawal headache/fatigue. Blocking an inhibitor increases excitation. |\n| Nicotine | Mimics acetylcholine at relevant receptors | Alertness with muscular relaxation; increased heart rate/blood pressure; dependence |\n| Cocaine | Blocks dopamine transporters/reuptake | Dopamine remains available in synaptic gap; reward, alertness, elevated mood; high doses can produce psychotic symptoms |\n| Amphetamines/methamphetamine | Enter terminals, displace vesicular dopamine, reverse transporter action, impair normal retrieval | More dopamine released/remains outside cells; strong reward and stimulant effects |\n| Methylphenidate and amphetamine-salt medications | Increase dopamine/norepinephrine activity | Increased concentration/alertness; effects on sleep/appetite; text rejects the idea that concentration changes occur only in ADHD |\n| MDMA | Promotes serotonin release by disrupting vesicular storage and reversing transporters; oxytocin effects; smaller dopamine effect | Increased sociability and physiological arousal; excess serotonin can produce serotonin syndrome |\n| Alcohol | Enhances GABA inhibition, blocks glutamate receptors, and stimulates dopamine reward pathways | Depresses CNS; reduced cortical restraint can look behaviorally stimulating; impaired coordination and high-dose respiratory suppression |\n| Opioids | Mimic endogenous endorphins at opioid receptors; increase reward-circuit dopamine | Pain relief, euphoria, relaxation; high doses suppress breathing |\n\n**Agonist/antagonist connection:** the chapter's examples distinguish mimicking receptor activity (nicotine/opioids), blocking receptors (caffeine's adenosine blockade), prolonging transmitter presence (cocaine), and altering release/storage (methamphetamine/MDMA). Use lecture's formal agonist/antagonist definitions when assigning those labels to indirect mechanisms.\n\n**Opioid versus opiate:** opioid is the broader natural/synthetic receptor-acting category; opiates derive from the opium poppy. Morphine/codeine come from poppy; heroin is processed from morphine. The overdose figure depicts historical waves of prescription opioids, heroin, and synthetic opioids—not present-day statistics.\n\n**Figure 6.16:** cannabinoid receptors appear in hippocampus/memory, prefrontal reasoning, basal ganglia/cerebellar movement, hypothalamic appetite, medullary nausea, and spinal pain pathways. **Figure 6.19:** administration route changes time course—smoking nicotine produces a quicker rise, chewing a slower but more sustained concentration. **Figure 6.20:** methamphetamine illustrations connect brain changes and dental damage with the text's discussion. The caffeine chart illustrates multiple sources rather than a current product-dose reference.\n\nThe cannabis/psychosis feature applies Chapter 2: longitudinal associations, possible common vulnerability, reverse causation, and ethical constraints on random assignment complicate causal claims. The psychedelic study used MEG after placebo and LSD/psilocybin/ketamine, finding greater signal diversity; selected experienced users and screening limit generalization. **Entheogens** are hallucinogens used in religious contexts, illustrated by ayahuasca/DMT; commercialization changes social context. Treatment approvals and legal descriptions are historical textbook statements, not verified current status.\n\n**Reader issue:** Figure 6.17 is cited near the cannabis discussion, but its displayed caption/graph describes psilocybin-assisted alcohol treatment. It plots reduced drinking/heavy-drinking days following psychotherapy and two treatments. Do not use that graph as evidence about cannabis-induced psychosis."
          },
          {
            "title": "6-4c — Nondrug Altered States",
            "text": "**Hypnosis:** narrowed focused attention, reduced awareness outside the focus, and increased responsiveness to suggestion. Suggestibility varies. Dangerous-task compliance in early studies also occurred without hypnosis when participants trusted the experimenter; hypnosis is not evidence of irresistible mind control. The textbook says it does not reliably sharpen memory and can worsen accuracy. Discussed therapeutic uses include habit change, pain, and irritable-bowel symptoms.\n\n**Stroop task (Figure 6.22):** name the ink color, not the written color word. Incongruent words normally slow responses because practiced reading interferes with color naming. Highly suggestible participants told after hypnosis to treat the words as gibberish showed less interference; low-suggestibility participants retained the usual effect. This demonstrates a specific cognitive effect and individual differences, not universal improvement of memory. The credentialed-cat feature questions unregulated credentials.\n\n**Mindfulness:** present-focused, nonjudgmental awareness. Meditation methods vary; focused meditation and mindfulness need not produce identical recordings. Typical findings include more alpha activity, regulation of attention/autonomic functions, and reduced DMN activity in experienced meditators. **Figure 6.23:** compares experienced meditators with newly instructed controls in prefrontal/posterior-cingulate signal changes across three meditation methods. Structural/connectivity differences and health benefits are reported as associations; experience and study design matter for causation.\n\nOther altered-state contexts include sensory deprivation, sleep loss, starvation, altitude/underwater conditions, spinning, and rhythmic dance/drumming. A **trance** reduces responsiveness to outside stimulation; experiences may include altered time, vivid imagery, strong positive emotion, or unity. Religious and recreational settings shape interpretation; the text proposes reduced prefrontal activation as one possible shared mechanism.\n\nThe mimicry feature shows unconscious copying can improve liking and affiliation, with exclusion increasing later copying, particularly within one's group. The pandemic feature connects insomnia with stress, lost routines, and reduced daylight cues; it applies circadian principles to everyday conditions. Chapter review/key terms were checked."
          }
        ]
      }
    ]
  },
  "update": {
    "date": "October 1, 2026",
    "sources": [
      "Lecture decks and Exam 1 review",
      "Supplied assigned-textbook notes: Chapters 2, 4, 5, 6",
      "Full Pearson (2010) article"
    ],
    "remaining": [
      "Exact video transcripts or your notes for the assigned clips; current checkpoints follow slide prompts and identified background."
    ],
    "clarifications": [
      "Textbook notes use “mixed longitudinal” and a rounded 99% within three SDs; conventional more precise figure is 99.7%.",
      "The .005 significance threshold is a textbook proposal, not a supplied course rule.",
      "The textbook target figure uses an average-accuracy framing for “validity without reliability”; do not turn it into a universal individual-measurement rule.",
      "Limited CNS axon regrowth does not mean there is no functional plasticity.",
      "Some neuroscience detail retained from earlier supplemental background is labeled; do not treat it as directly verified textbook prose."
    ]
  }
};
