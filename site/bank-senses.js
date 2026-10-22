// Curated PSYCH 202 sensation and consciousness bank. Stable retained IDs and answer positions.
// Original effective wording overrides preserve the original question concepts and correct positions.
globalThis.BANK_SENSES = [
  {
    "id": "s2-sensation-three-stages",
    "lessonId": "sensation",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which sequence separates detecting a sound, converting its energy to neural activity, and identifying its meaning?",
    "choices": [
      "Perception → transduction → sensation",
      "Transduction → sensation → perception",
      "Sensation → perception → transduction",
      "Sensation → transduction → perception"
    ],
    "correct": 3,
    "explanation": "Detection is sensation, conversion is transduction, and interpretation is perception.",
    "choiceExplanations": [
      "Incorrect. This places interpretation before the detection and conversion that supply its information.",
      "Incorrect. This places conversion before the detection step named in the stem.",
      "Incorrect. This places interpretation before conversion into neural information.",
      "Correct. Detection is sensation, conversion is transduction, and interpretation is perception."
    ],
    "misconception": "Detection is sensation, conversion is transduction, and interpretation is perception.",
    "source": "Sensation and Perception · slides 3, 16–17; assigned textbook notes · 5-1–5-1b"
  },
  {
    "id": "s2-sensation-bottom-up-features",
    "lessonId": "sensation",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "To identify an unfamiliar symbol, a reader first examines its strokes and curves. Which processing contribution is emphasized?",
    "choices": [
      "Sensory adaptation",
      "Gestalt closure",
      "Bottom-up processing",
      "Top-down processing"
    ],
    "correct": 2,
    "explanation": "The reader builds an interpretation from incoming features.",
    "choiceExplanations": [
      "Incorrect. Adaptation concerns reduced response to steady stimulation rather than analyzing features.",
      "Incorrect. Closure completes missing contours; the stem describes examining supplied features.",
      "Correct. The reader builds an interpretation from incoming features.",
      "Incorrect. Top-down processing would emphasize prior knowledge or contextual expectations."
    ],
    "misconception": "The reader builds an interpretation from incoming features.",
    "source": "Sensation and Perception · slides 3, 16–17; assigned textbook notes · 5-1–5-1b"
  },
  {
    "id": "s2-sensation-cooperative-processing",
    "lessonId": "sensation",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "A reader uses visible letter shapes and sentence meaning to decipher handwriting. Which account best fits?",
    "choices": [
      "Top-down knowledge supplies the word without visual evidence",
      "Sensory adaptation resolves the handwriting ambiguity",
      "Bottom-up features and top-down knowledge contribute together",
      "Bottom-up features determine the word without contextual input"
    ],
    "correct": 2,
    "explanation": "Visible shapes supply evidence while sentence meaning constrains the interpretation.",
    "choiceExplanations": [
      "Incorrect. This omits the visible letter shapes used by the reader.",
      "Incorrect. A decline in response to unchanged stimulation does not explain the stated combination.",
      "Correct. Visible shapes supply evidence while sentence meaning constrains the interpretation.",
      "Incorrect. This omits the sentence meaning explicitly used in the stem."
    ],
    "misconception": "Visible shapes supply evidence while sentence meaning constrains the interpretation.",
    "source": "Sensation and Perception · slides 3, 16–17; assigned textbook notes · 5-1–5-1b"
  },
  {
    "id": "s2-sensation-adaptation-function",
    "lessonId": "sensation",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Why can declining responsiveness to a steady background sensation help perception?",
    "choices": [
      "The background’s physical intensity increases",
      "Prior knowledge replaces the incoming sensation",
      "Attention becomes evenly distributed across the scene",
      "Changes become more prominent relative to the background"
    ],
    "correct": 3,
    "explanation": "Adaptation reduces response to unchanged stimulation, helping new information stand out.",
    "choiceExplanations": [
      "Incorrect. Adaptation changes responsiveness rather than increasing the stimulus.",
      "Incorrect. That describes an exaggerated top-down account rather than adaptation.",
      "Incorrect. The source connects adaptation with novelty standing out, not equal attention.",
      "Correct. Adaptation reduces response to unchanged stimulation, helping new information stand out."
    ],
    "misconception": "Adaptation reduces response to unchanged stimulation, helping new information stand out.",
    "source": "Sensation and Perception · slides 3, 16–17; assigned textbook notes · 5-1–5-1b"
  },
  {
    "id": "s2-sensation-dress-interpretation",
    "lessonId": "sensation",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "experiment",
    "prompt": "Viewers give different color reports for the same dress photograph because they infer different lighting. What is the relevant mechanism?",
    "choices": [
      "Adaptation to a previously viewed complementary color",
      "Top-down interpretation of illumination",
      "A change in the photograph’s pixel values",
      "Lens accommodation for different viewing distances"
    ],
    "correct": 1,
    "explanation": "Assumptions about lighting can alter experienced color while the image stays fixed.",
    "choiceExplanations": [
      "Incorrect. No preceding adapting color is described.",
      "Correct. Assumptions about lighting can alter experienced color while the image stays fixed.",
      "Incorrect. The stem specifies the same photograph.",
      "Incorrect. The stated difference concerns inferred lighting rather than distance focus."
    ],
    "misconception": "Assumptions about lighting can alter experienced color while the image stays fixed.",
    "source": "Sensation and Perception · slides 3, 16–17; assigned textbook notes · 5-1–5-1b"
  },
  {
    "id": "s2-vision-iris-control",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which structure adjusts the size of the opening through which light enters the eye?",
    "choices": [
      "Iris",
      "Lens",
      "Cornea",
      "Retina"
    ],
    "correct": 0,
    "explanation": "The iris regulates pupil size.",
    "choiceExplanations": [
      "Correct. The iris regulates pupil size.",
      "Incorrect. The lens adjusts focus through shape changes.",
      "Incorrect. The cornea bends incoming light.",
      "Incorrect. The retina contains receptors and neural circuits that receive light."
    ],
    "misconception": "The iris regulates pupil size.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-lens-versus-retina",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing correctly assigns optical focus and light transduction?",
    "choices": [
      "Iris: focus; ganglion cells: light transduction",
      "Visual cortex: focus; optic nerve: light transduction",
      "Lens: focus; rods and cones: transduction",
      "Rods and cones: focus; lens: transduction"
    ],
    "correct": 2,
    "explanation": "The lens directs light onto the retina, whose photoreceptors convert it to neural signals.",
    "choiceExplanations": [
      "Incorrect. The iris regulates pupil size; ganglion cells carry retinal output.",
      "Incorrect. Cortex processes neural information and the optic nerve transmits retinal output.",
      "Correct. The lens directs light onto the retina, whose photoreceptors convert it to neural signals.",
      "Incorrect. This reverses the optical and receptor roles."
    ],
    "misconception": "The lens directs light onto the retina, whose photoreceptors convert it to neural signals.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-dim-room-color",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "In a dim room, outlines remain visible but colors are difficult to distinguish. Which receptor difference explains this?",
    "choices": [
      "Cones become more sensitive than rods in dim light",
      "Rods specialize in color while cones specialize in brightness",
      "Cone color responses remain strong while rod responses decline",
      "Rods are sensitive in dim light but supply little color information"
    ],
    "correct": 3,
    "explanation": "Dim-light rod responses can preserve visibility without cone-based color discrimination.",
    "choiceExplanations": [
      "Incorrect. The notes give rods the dim-light advantage.",
      "Incorrect. This reverses the emphasized color contribution.",
      "Incorrect. This reverses the relative contribution described under dim illumination.",
      "Correct. Dim-light rod responses can preserve visibility without cone-based color discrimination."
    ],
    "misconception": "Dim-light rod responses can preserve visibility without cone-based color discrimination.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-fovea-detail",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Why does directing an image onto the fovea help with fine visual detail?",
    "choices": [
      "The fovea has a high density of cones",
      "The fovea is the exit point of ganglion-cell axons",
      "The fovea has the strongest rod representation",
      "Foveal cones specialize in dim-light sensitivity rather than detail"
    ],
    "correct": 0,
    "explanation": "Cone concentration supports high acuity under suitable lighting.",
    "choiceExplanations": [
      "Correct. Cone concentration supports high acuity under suitable lighting.",
      "Incorrect. The optic disk is the axon exit and lacks photoreceptors.",
      "Incorrect. The notes emphasize peripheral rods and central cones.",
      "Incorrect. The notes assign the dim-light advantage to rods and fine detail to cones."
    ],
    "misconception": "Cone concentration supports high acuity under suitable lighting.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-blindspot-cause",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "What anatomical feature creates the retinal blind spot?",
    "choices": [
      "Photoreceptors are absent at the optic-nerve exit",
      "Cones are densely concentrated at the optic-nerve exit",
      "The lens focuses light behind the retina",
      "Nasal fibers cross at the optic chiasm"
    ],
    "correct": 0,
    "explanation": "Light cannot be transduced at that receptor-free exit.",
    "choiceExplanations": [
      "Correct. Light cannot be transduced at that receptor-free exit.",
      "Incorrect. Dense cones characterize the fovea rather than the blind spot.",
      "Incorrect. That is associated with hyperopia, not the normal blind spot.",
      "Incorrect. Crossing organizes visual-field routing rather than creating the retinal gap."
    ],
    "misconception": "Light cannot be transduced at that receptor-free exit.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-ganglion-axons",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which retinal cells send the axons that form the optic nerve?",
    "choices": [
      "Ganglion cells",
      "Rod photoreceptors",
      "Cone photoreceptors",
      "Bipolar cells"
    ],
    "correct": 0,
    "explanation": "Ganglion-cell axons carry retinal output out of the eye.",
    "choiceExplanations": [
      "Correct. Ganglion-cell axons carry retinal output out of the eye.",
      "Incorrect. Rods transduce light and relay through retinal circuits before ganglion output.",
      "Incorrect. Cones transduce light rather than forming the optic-nerve axon bundle.",
      "Incorrect. Bipolar cells relay within retinal circuits before ganglion-cell output."
    ],
    "misconception": "Ganglion-cell axons carry retinal output out of the eye.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-intensity-property",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Two lights have the same wavelength, but one has greater intensity. Which perceived property is primarily changed?",
    "choices": [
      "Brightness",
      "Hue",
      "Color saturation",
      "Image sharpness"
    ],
    "correct": 0,
    "explanation": "Intensity relates primarily to brightness.",
    "choiceExplanations": [
      "Correct. Intensity relates primarily to brightness.",
      "Incorrect. Hue relates primarily to wavelength, which is held fixed.",
      "Incorrect. The manipulated property is intensity rather than the mixture or purity of wavelengths.",
      "Incorrect. Intensity is distinct from optical focus."
    ],
    "misconception": "Intensity relates primarily to brightness.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-uv-infrared",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "How do ultraviolet and infrared wavelengths compare with the visible range?",
    "choices": [
      "Ultraviolet and infrared are both shorter",
      "Ultraviolet and infrared are both longer",
      "Ultraviolet is shorter; infrared is longer",
      "Ultraviolet is longer; infrared is shorter"
    ],
    "correct": 2,
    "explanation": "The two categories lie beyond opposite wavelength ends of the visible range.",
    "choiceExplanations": [
      "Incorrect. Infrared lies on the longer-wavelength side.",
      "Incorrect. Ultraviolet lies on the shorter-wavelength side.",
      "Correct. The two categories lie beyond opposite wavelength ends of the visible range.",
      "Incorrect. This reverses their positions."
    ],
    "misconception": "The two categories lie beyond opposite wavelength ends of the visible range.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-accommodation",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "When looking from a nearby page to a distant sign, which change refocuses the image?",
    "choices": [
      "A change in retinal adaptation",
      "A change in lens shape",
      "A change in pupil opening",
      "A change in eye convergence"
    ],
    "correct": 1,
    "explanation": "Accommodation changes lens shape for different distances.",
    "choiceExplanations": [
      "Incorrect. Adaptation changes responsiveness rather than optical refocusing.",
      "Correct. Accommodation changes lens shape for different distances.",
      "Incorrect. The iris regulates light entry rather than providing the named distance-focus adjustment.",
      "Incorrect. Convergence changes eye orientation rather than the lens’s distance focus."
    ],
    "misconception": "Accommodation changes lens shape for different distances.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-chiasm-fibers",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which description matches retinal fiber routing at the optic chiasm?",
    "choices": [
      "Nasal fibers cross; temporal fibers remain on the same side",
      "Temporal fibers cross; nasal fibers remain on the same side",
      "Left-eye fibers cross; right-eye fibers remain on the same side",
      "Right-eye fibers cross; left-eye fibers remain on the same side"
    ],
    "correct": 0,
    "explanation": "This partial crossing combines opposite-field information from both eyes.",
    "choiceExplanations": [
      "Correct. This partial crossing combines opposite-field information from both eyes.",
      "Incorrect. This reverses the stated rule.",
      "Incorrect. The rule depends on retinal side in both eyes, not eye identity.",
      "Incorrect. This also treats eye identity as the crossing rule."
    ],
    "misconception": "This partial crossing combines opposite-field information from both eyes.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-visual-fields",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A stimulus appears in the left visual field and is viewed with both eyes. Which hemisphere receives that field’s information?",
    "choices": [
      "Left hemisphere, receiving contributions from both eyes",
      "Right hemisphere, receiving the right eye’s contribution",
      "Left hemisphere, receiving the left eye’s contribution",
      "Right hemisphere, receiving contributions from both eyes"
    ],
    "correct": 3,
    "explanation": "Partial chiasm crossing routes the opposite visual field to each hemisphere.",
    "choiceExplanations": [
      "Incorrect. This reverses the field-to-hemisphere relationship.",
      "Incorrect. This substitutes a one-eye route for the two-eye field representation.",
      "Incorrect. This confuses eye identity with visual-field routing.",
      "Correct. Partial chiasm crossing routes the opposite visual field to each hemisphere."
    ],
    "misconception": "Partial chiasm crossing routes the opposite visual field to each hemisphere.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-vision-nonimage-routes",
    "lessonId": "vision",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Beyond recognizing images, what functions are supported by additional light-responsive pathways in the notes?",
    "choices": [
      "Clock regulation, orienting responses and rapid emotional responses",
      "Fine-detail recognition, object naming and face naming",
      "Corneal bending, lens focusing and pupil opening",
      "Contour closure, similarity grouping and perspective interpretation"
    ],
    "correct": 0,
    "explanation": "Additional hypothalamic, midbrain and emotion-related routes support these functions.",
    "choiceExplanations": [
      "Correct. Additional hypothalamic, midbrain and emotion-related routes support these functions.",
      "Incorrect. Those describe image-recognition functions rather than the additional routes asked about.",
      "Incorrect. These are eye-level optical functions rather than the additional central routes.",
      "Incorrect. Those are perceptual organizations rather than the named clock/reflex/emotion functions."
    ],
    "misconception": "Additional hypothalamic, midbrain and emotion-related routes support these functions.",
    "source": "Sensation and Perception · slides 4–11; assigned textbook notes · 5-2a–c"
  },
  {
    "id": "s2-color-relative-cones",
    "lessonId": "color",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "How can three cone classes represent more than three perceived colors?",
    "choices": [
      "Each class represents a single fixed perceived color",
      "Rod activity determines the extra colors between cone classes",
      "The classes detect brightness while opponent channels supply the initial light input",
      "Colors are coded by relative activity across the classes"
    ],
    "correct": 3,
    "explanation": "Different response patterns across short-, medium- and long-wavelength classes support color discrimination.",
    "choiceExplanations": [
      "Incorrect. Perceived colors depend on combinations rather than three fixed color labels.",
      "Incorrect. Rods provide little ordinary color discrimination.",
      "Incorrect. Cones supply the trichromatic input; opponent comparisons occur later.",
      "Correct. Different response patterns across short-, medium- and long-wavelength classes support color discrimination."
    ],
    "misconception": "Different response patterns across short-, medium- and long-wavelength classes support color discrimination.",
    "source": "Sensation and Perception · slides 12–15"
  },
  {
    "id": "s2-color-stages-compatible",
    "lessonId": "color",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which account explains why trichromatic and opponent-process theories can both describe color vision?",
    "choices": [
      "Trichromatic theory explains brightness and opponent theory explains wavelength",
      "The two theories describe the same three independent receptors",
      "Cone responses provide input for later opponent comparisons",
      "Opponent channels replace the cones during bright-light viewing"
    ],
    "correct": 2,
    "explanation": "The accounts concern different processing levels.",
    "choiceExplanations": [
      "Incorrect. Trichromatic input includes color discrimination; the distinction is processing stage.",
      "Incorrect. Opponent channels compare inputs rather than simply naming the three cone classes.",
      "Correct. The accounts concern different processing levels.",
      "Incorrect. The accounts cooperate rather than alternate receptor use."
    ],
    "misconception": "The accounts concern different processing levels.",
    "source": "Sensation and Perception · slides 12–15"
  },
  {
    "id": "s2-color-afterimage-inference",
    "lessonId": "color",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "experiment",
    "prompt": "A white surface appears reddish after prolonged green viewing. The surface stays unchanged. What accounts for the changed appearance?",
    "choices": [
      "The lens changes focus from the green object to the white surface",
      "The white surface acquires a red wavelength from the green object",
      "The recent green stimulus increases its own channel’s dominance",
      "Adaptation shifts relative activity in an opponent channel"
    ],
    "correct": 3,
    "explanation": "Recent stimulation changes the visual response without adding red light to the surface.",
    "choiceExplanations": [
      "Incorrect. Refocusing does not explain the complementary color shift.",
      "Incorrect. The stem controls the surface; the account concerns neural adaptation.",
      "Incorrect. The opponent afterimage reflects relative adaptation rather than increased green dominance.",
      "Correct. Recent stimulation changes the visual response without adding red light to the surface."
    ],
    "misconception": "Recent stimulation changes the visual response without adding red light to the surface.",
    "source": "Sensation and Perception · slides 12–15"
  },
  {
    "id": "s2-color-deficiency-not-no-color",
    "lessonId": "color",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "According to the retained textbook notes, what commonly underlies color-vision deficiencies?",
    "choices": [
      "A change in lens accommodation",
      "Altered or missing cone types",
      "Reduced sensitivity of rod photoreceptors",
      "Uneven corneal curvature"
    ],
    "correct": 1,
    "explanation": "Cone-type variation can change color discrimination without eliminating color experience.",
    "choiceExplanations": [
      "Incorrect. Accommodation changes focus rather than the cone-type discrimination account.",
      "Correct. Cone-type variation can change color discrimination without eliminating color experience.",
      "Incorrect. Rod sensitivity affects dim-light vision rather than the emphasized cone-based color difference.",
      "Incorrect. That concerns astigmatism and optical focus."
    ],
    "misconception": "Cone-type variation can change color discrimination without eliminating color experience.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-depth-one-eye-preservation",
    "lessonId": "depth",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A static photograph is viewed with one eye. Which depth information remains available?",
    "choices": [
      "Different speeds of scenery during travel",
      "One object partly blocking another",
      "The difference between the two retinal images",
      "The inward turning of both eyes toward an object"
    ],
    "correct": 1,
    "explanation": "Occlusion is a monocular cue.",
    "choiceExplanations": [
      "Incorrect. Motion parallax requires movement that this static setup lacks.",
      "Correct. Occlusion is a monocular cue.",
      "Incorrect. Binocular disparity requires two-eye comparison.",
      "Incorrect. That is convergence rather than a static pictorial cue."
    ],
    "misconception": "Occlusion is a monocular cue.",
    "source": "Sensation and Perception · slides 18–27"
  },
  {
    "id": "s2-depth-texture-gradient",
    "lessonId": "depth",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "In a photograph, nearby cobblestones look coarse while distant cobblestones look finer and denser. Which cue is present?",
    "choices": [
      "Texture gradient",
      "Linear perspective",
      "Occlusion",
      "Motion parallax"
    ],
    "correct": 0,
    "explanation": "The changing apparent grain and density of a surface provides distance information.",
    "choiceExplanations": [
      "Correct. The changing apparent grain and density of a surface provides distance information.",
      "Incorrect. Perspective concerns convergence of parallel lines.",
      "Incorrect. Occlusion concerns one object hiding another.",
      "Incorrect. Parallax concerns distance-related image motion during observer movement."
    ],
    "misconception": "The changing apparent grain and density of a surface provides distance information.",
    "source": "Sensation and Perception · slides 18–27"
  },
  {
    "id": "s2-depth-size-assumption",
    "lessonId": "depth",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "A smaller image of one object is interpreted as greater distance. What assumption is needed for a relative-size comparison?",
    "choices": [
      "The objects have different physical sizes",
      "The observer is moving",
      "The two eyes receive different images",
      "The objects have similar physical sizes"
    ],
    "correct": 3,
    "explanation": "Otherwise a smaller image could reflect a smaller object rather than greater distance.",
    "choiceExplanations": [
      "Incorrect. That makes image-size differences ambiguous as distance information.",
      "Incorrect. Motion is not required for relative size.",
      "Incorrect. That describes disparity rather than the relative-size assumption.",
      "Correct. Otherwise a smaller image could reflect a smaller object rather than greater distance."
    ],
    "misconception": "Otherwise a smaller image could reflect a smaller object rather than greater distance.",
    "source": "Sensation and Perception · slides 18–27"
  },
  {
    "id": "s2-depth-occlusion-order",
    "lessonId": "depth",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A bicycle hides part of a car in a photograph. What does this cue directly support?",
    "choices": [
      "The bicycle is nearer at the overlap",
      "The bicycle is physically larger than the car",
      "The car is moving faster than the bicycle",
      "The car is farther by a known number of meters"
    ],
    "correct": 0,
    "explanation": "The blocking object is interpreted as in front.",
    "choiceExplanations": [
      "Correct. The blocking object is interpreted as in front.",
      "Incorrect. Overlap gives depth order rather than physical-size comparison.",
      "Incorrect. A static overlap does not supply relative motion.",
      "Incorrect. Occlusion gives order without a precise distance measurement."
    ],
    "misconception": "The blocking object is interpreted as in front.",
    "source": "Sensation and Perception · slides 18–27"
  },
  {
    "id": "s2-depth-shading",
    "lessonId": "depth",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Light and shadow make a flat drawing look like a raised surface. Which monocular cue explains the apparent shape?",
    "choices": [
      "Relative size",
      "Binocular disparity",
      "Shading",
      "Texture gradient"
    ],
    "correct": 2,
    "explanation": "Light/shadow patterns provide surface-shape information.",
    "choiceExplanations": [
      "Incorrect. Relative size compares apparent object sizes.",
      "Incorrect. The pictorial shading cue does not require comparison of two eye images.",
      "Correct. Light/shadow patterns provide surface-shape information.",
      "Incorrect. Texture gradient concerns changes in surface-detail size/density."
    ],
    "misconception": "Light/shadow patterns provide surface-shape information.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-depth-known-size",
    "lessonId": "depth",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A viewer uses a familiar doorway’s usual size to estimate distance in a photograph. Which cue is used?",
    "choices": [
      "Texture gradient",
      "Known size",
      "Occlusion",
      "Motion parallax"
    ],
    "correct": 1,
    "explanation": "Familiar physical size helps interpret apparent image size.",
    "choiceExplanations": [
      "Incorrect. The cue is knowledge of object size rather than surface grain.",
      "Correct. Familiar physical size helps interpret apparent image size.",
      "Incorrect. The stem does not describe an object hiding another.",
      "Incorrect. The static scene supplies no distance-related movement."
    ],
    "misconception": "Familiar physical size helps interpret apparent image size.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-illusions-ames-geometry",
    "lessonId": "illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Equal-sized people appear different sizes in an Ames room viewed from its intended position. Which interpretation causes the error?",
    "choices": [
      "Assuming ordinary room geometry produces wrong distance estimates",
      "Assuming the people’s physical sizes are equal prevents distance estimation",
      "A change in lens focus enlarges one person’s physical image",
      "Equal physical sizes require equal retinal image sizes at different distances"
    ],
    "correct": 0,
    "explanation": "Concealed unequal distances alter size interpretation when the room looks normal.",
    "choiceExplanations": [
      "Correct. Concealed unequal distances alter size interpretation when the room looks normal.",
      "Incorrect. The error arises from room geometry, not the equality of the bodies.",
      "Incorrect. The central account is misleading inferred distance rather than accommodation.",
      "Incorrect. Retinal size also depends on distance, which the distorted room conceals."
    ],
    "misconception": "Concealed unequal distances alter size interpretation when the room looks normal.",
    "source": "Sensation and Perception · slides 29–31"
  },
  {
    "id": "s2-illusions-hollowface-depth",
    "lessonId": "illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "In the hollow-face/T-Rex demonstration, a stationary model seems to turn toward a moving viewer. Which depth interpretation is central?",
    "choices": [
      "A convex face is perceived as concave",
      "A flat face is perceived as farther away",
      "A near face is perceived as physically larger",
      "A concave face is perceived as convex"
    ],
    "correct": 3,
    "explanation": "Reversed depth interpretation creates the unusual apparent orientation change.",
    "choiceExplanations": [
      "Incorrect. This reverses the actual/perceived geometry in the demonstration.",
      "Incorrect. The defining feature is a concave-to-convex interpretation.",
      "Incorrect. Size interpretation does not specify the hollow-face mechanism.",
      "Correct. Reversed depth interpretation creates the unusual apparent orientation change."
    ],
    "misconception": "Reversed depth interpretation creates the unusual apparent orientation change.",
    "source": "Sensation and Perception · slides 29–31"
  },
  {
    "id": "s2-illusions-susceptibility-limit",
    "lessonId": "illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "The lecture reports reduced susceptibility to some visual illusions in some people with schizophrenia. Which conclusion is justified?",
    "choices": [
      "The group’s perception is more accurate across sensory tasks",
      "The group lacks top-down visual interpretation",
      "The finding has a limited population and illusion scope",
      "Illusion resistance is sufficient to identify schizophrenia"
    ],
    "correct": 2,
    "explanation": "It cannot be extended to a general diagnostic or universal accuracy claim.",
    "choiceExplanations": [
      "Incorrect. The reported result does not assess that broad outcome.",
      "Incorrect. A limited susceptibility difference does not establish absence of that process.",
      "Correct. It cannot be extended to a general diagnostic or universal accuracy claim.",
      "Incorrect. The source warns against diagnostic use."
    ],
    "misconception": "It cannot be extended to a general diagnostic or universal accuracy claim.",
    "source": "Sensation and Perception · slides 29–31"
  },
  {
    "id": "s2-visual-organization-figure-ground",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A viewer separates a dark silhouette from the wall behind it. Which organization is involved?",
    "choices": [
      "Similarity",
      "Closure",
      "Good continuation",
      "Figure–ground"
    ],
    "correct": 3,
    "explanation": "Figure–ground organization assigns focal-object and background roles.",
    "choiceExplanations": [
      "Incorrect. Similarity groups elements with shared properties.",
      "Incorrect. Closure completes missing contours.",
      "Incorrect. Continuation follows smooth paths.",
      "Correct. Figure–ground organization assigns focal-object and background roles."
    ],
    "misconception": "Figure–ground organization assigns focal-object and background roles.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-proximity",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Identical dots appear in pairs because the gap within each pair is smaller than the gap between pairs. Which principle explains the grouping?",
    "choices": [
      "Closure",
      "Figure–ground",
      "Proximity",
      "Similarity"
    ],
    "correct": 2,
    "explanation": "Nearness provides the differentiating cue.",
    "choiceExplanations": [
      "Incorrect. No missing outline is being completed.",
      "Incorrect. The issue is grouping dots rather than separating object from background.",
      "Correct. Nearness provides the differentiating cue.",
      "Incorrect. The dots are identical throughout; similarity does not explain which ones form pairs."
    ],
    "misconception": "Nearness provides the differentiating cue.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-similarity",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Blue dots seem to form a group among orange dots, although the distances between dots are equal. Which cue explains the grouping?",
    "choices": [
      "Similarity",
      "Proximity",
      "Closure",
      "Good continuation"
    ],
    "correct": 0,
    "explanation": "Shared color is the grouping feature while distance is controlled.",
    "choiceExplanations": [
      "Correct. Shared color is the grouping feature while distance is controlled.",
      "Incorrect. Equal distances do not explain the color-based groups.",
      "Incorrect. No incomplete contour is described.",
      "Incorrect. No smooth contour path is described."
    ],
    "misconception": "Shared color is the grouping feature while distance is controlled.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-continuity",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "At a crossing, two curves are perceived as smooth paths rather than several abrupt turns. Which principle fits?",
    "choices": [
      "Proximity",
      "Closure",
      "Similarity",
      "Good continuation"
    ],
    "correct": 3,
    "explanation": "Continuity favors smooth paths through an ambiguous arrangement.",
    "choiceExplanations": [
      "Incorrect. The example emphasizes path direction rather than near elements.",
      "Incorrect. The task is following contours, not completing a missing outline.",
      "Incorrect. The defining cue is smooth continuation rather than shared visual properties.",
      "Correct. Continuity favors smooth paths through an ambiguous arrangement."
    ],
    "misconception": "Continuity favors smooth paths through an ambiguous arrangement.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-simplicity",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "An ambiguous pattern is perceived as a coherent, economical arrangement. Which Gestalt tendency is emphasized?",
    "choices": [
      "Simplicity",
      "Proximity",
      "Similarity",
      "Closure"
    ],
    "correct": 0,
    "explanation": "Simplicity favors an uncomplicated organized interpretation.",
    "choiceExplanations": [
      "Correct. Simplicity favors an uncomplicated organized interpretation.",
      "Incorrect. Proximity emphasizes the spacing between elements.",
      "Incorrect. Similarity emphasizes matching properties.",
      "Incorrect. Closure emphasizes missing contours being completed."
    ],
    "misconception": "Simplicity favors an uncomplicated organized interpretation.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-myopia",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which focus pattern matches the textbook’s account of myopia?",
    "choices": [
      "An elongated eye focuses light before the retina",
      "A shorter eye focuses light behind the retina",
      "Uneven curvature distorts the focal pattern",
      "A receptor-free exit interrupts retinal detection"
    ],
    "correct": 0,
    "explanation": "The notes connect this geometry with nearsightedness and distant blur.",
    "choiceExplanations": [
      "Correct. The notes connect this geometry with nearsightedness and distant blur.",
      "Incorrect. That is the hyperopia account.",
      "Incorrect. That is the astigmatism account.",
      "Incorrect. That describes the normal blind spot."
    ],
    "misconception": "The notes connect this geometry with nearsightedness and distant blur.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-hyperopia",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which focus pattern matches the textbook’s account of hyperopia?",
    "choices": [
      "Uneven curvature distorts the focal pattern",
      "A receptor-free exit interrupts retinal detection",
      "A shorter eye focuses light behind the retina",
      "An elongated eye focuses light before the retina"
    ],
    "correct": 2,
    "explanation": "The notes connect this geometry with farsightedness and difficult near focus.",
    "choiceExplanations": [
      "Incorrect. That is the astigmatism account.",
      "Incorrect. That describes the blind spot rather than hyperopia.",
      "Correct. The notes connect this geometry with farsightedness and difficult near focus.",
      "Incorrect. That is the myopia account."
    ],
    "misconception": "The notes connect this geometry with farsightedness and difficult near focus.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-astigmatism",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which anatomical feature is emphasized in the textbook’s account of astigmatism?",
    "choices": [
      "Uneven corneal curvature",
      "Elongation of the eye",
      "A shorter eye",
      "Altered cone types"
    ],
    "correct": 0,
    "explanation": "Uneven curvature distorts optical focus.",
    "choiceExplanations": [
      "Correct. Uneven curvature distorts optical focus.",
      "Incorrect. The notes associate elongation with myopia.",
      "Incorrect. The notes associate a shorter eye with hyperopia.",
      "Incorrect. That relates to color-vision differences rather than optical curvature."
    ],
    "misconception": "Uneven curvature distorts optical focus.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-accessible-color",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A diagram distinguishes two routes with red and green. Which revision best follows the textbook accessibility feature?",
    "choices": [
      "Increase the saturation of both colors",
      "Remove labels to simplify the color display",
      "Use matching labels and line patterns for the routes",
      "Give the routes distinct labels and line patterns"
    ],
    "correct": 3,
    "explanation": "Redundant noncolor information supports viewers whose color discrimination differs.",
    "choiceExplanations": [
      "Incorrect. Saturation continues to rely on color discrimination.",
      "Incorrect. Removing noncolor information makes the distinction less accessible.",
      "Incorrect. Matching noncolor cues do not distinguish the routes.",
      "Correct. Redundant noncolor information supports viewers whose color discrimination differs."
    ],
    "misconception": "Redundant noncolor information supports viewers whose color discrimination differs.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-muller-lyer",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Equal lines look different in length when their arrow endings differ. Which textbook illusion fits?",
    "choices": [
      "Ponzo",
      "Shepard tables",
      "Ames room",
      "Müller-Lyer"
    ],
    "correct": 3,
    "explanation": "Arrow context alters apparent line length.",
    "choiceExplanations": [
      "Incorrect. Ponzo uses perspective context around equal bars.",
      "Incorrect. Shepard tables use perspective to alter apparent shape.",
      "Incorrect. Ames geometry conceals unequal distances in a room.",
      "Correct. Arrow context alters apparent line length."
    ],
    "misconception": "Arrow context alters apparent line length.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-ponzo",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Equal bars appear unequal when placed between lines converging toward a horizon. Which illusion fits this mechanism?",
    "choices": [
      "Müller-Lyer",
      "Shepard tables",
      "Hollow-face illusion",
      "Ponzo"
    ],
    "correct": 3,
    "explanation": "Perspective cues change the apparent size of equal bars.",
    "choiceExplanations": [
      "Incorrect. That example emphasizes arrow endings rather than converging perspective lines.",
      "Incorrect. That example concerns perspective-related shape differences between tables.",
      "Incorrect. That example concerns concavity interpreted as a convex face.",
      "Correct. Perspective cues change the apparent size of equal bars."
    ],
    "misconception": "Perspective cues change the apparent size of equal bars.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-visual-organization-shepard",
    "lessonId": "visual-organization",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "What makes the Shepard-table illustration an illusion?",
    "choices": [
      "Identical shapes are perceived as different under perspective",
      "Different shapes are correctly perceived as different",
      "Identical shapes are correctly perceived as identical",
      "Different physical shapes are perceived as identical"
    ],
    "correct": 0,
    "explanation": "The stimulus/percept mismatch concerns shape interpretation.",
    "choiceExplanations": [
      "Correct. The stimulus/percept mismatch concerns shape interpretation.",
      "Incorrect. That describes accurate discrimination rather than the stated illusion.",
      "Incorrect. The illusion concerns different appearances of identical shapes.",
      "Incorrect. This reverses the physical/perceptual relation in the table illustration."
    ],
    "misconception": "The stimulus/percept mismatch concerns shape interpretation.",
    "source": "Assigned textbook notes · 5-2c–d"
  },
  {
    "id": "s2-hearing-outer-middle",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing correctly distinguishes the outer ear from the middle-ear ossicles?",
    "choices": [
      "Outer ear channels sound; ossicles transmit vibration",
      "Outer ear transduces sound; ossicles interpret pitch",
      "Outer ear relieves cochlear pressure; ossicles collect sound",
      "Outer ear produces neural output; ossicles locate the source"
    ],
    "correct": 0,
    "explanation": "The outer ear directs sound to the eardrum and the bones convey its vibration onward.",
    "choiceExplanations": [
      "Correct. The outer ear directs sound to the eardrum and the bones convey its vibration onward.",
      "Incorrect. Hair cells transduce and neural processing interprets pitch.",
      "Incorrect. The round window permits pressure displacement, and collecting is an outer-ear role.",
      "Incorrect. This does not match the collecting/transmitting distinction."
    ],
    "misconception": "The outer ear directs sound to the eardrum and the bones convey its vibration onward.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-oval-versus-round",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which assignment matches the oval and round windows?",
    "choices": [
      "Both permit pressure displacement without transferring ossicular vibration",
      "Oval: vibration enters fluid; round: pressure displacement",
      "Oval: pressure displacement; round: vibration enters fluid",
      "Both transfer ossicular vibration into the cochlear fluid"
    ],
    "correct": 1,
    "explanation": "The windows have these respective mechanical roles.",
    "choiceExplanations": [
      "Incorrect. The oval window transfers vibration from the ossicles into cochlear fluid.",
      "Correct. The windows have these respective mechanical roles.",
      "Incorrect. This reverses their roles.",
      "Incorrect. The round window supplies pressure displacement rather than the ossicle-driven entry role."
    ],
    "misconception": "The windows have these respective mechanical roles.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-basilar-to-hair",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "How does basilar-membrane movement lead to a neural auditory signal?",
    "choices": [
      "It bends hair-cell structures, initiating neural communication",
      "It causes the auditory nerve to carry fluid pressure toward the brain",
      "It initiates transduction in the ossicles before cochlear motion",
      "It initiates transduction at the round window as pressure is relieved"
    ],
    "correct": 0,
    "explanation": "Hair-cell bending is the mechanical-to-neural transduction step.",
    "choiceExplanations": [
      "Correct. Hair-cell bending is the mechanical-to-neural transduction step.",
      "Incorrect. The nerve carries neural signals after transduction rather than fluid pressure.",
      "Incorrect. Ossicles convey mechanical motion; cochlear hair cells transduce it.",
      "Incorrect. Pressure displacement and hair-cell transduction are different functions."
    ],
    "misconception": "Hair-cell bending is the mechanical-to-neural transduction step.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-amplitude-control",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "experiment",
    "prompt": "A tone’s frequency stays fixed while its amplitude increases. Which experience is primarily expected to change?",
    "choices": [
      "Loudness",
      "Pitch",
      "Source direction",
      "Tone duration"
    ],
    "correct": 0,
    "explanation": "Amplitude corresponds primarily to loudness.",
    "choiceExplanations": [
      "Correct. Amplitude corresponds primarily to loudness.",
      "Incorrect. Pitch primarily corresponds to frequency, which is controlled.",
      "Incorrect. No interaural or source-position change is specified.",
      "Incorrect. Amplitude is a wave-height property rather than the time the tone lasts."
    ],
    "misconception": "Amplitude corresponds primarily to loudness.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-frequency-control",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "experiment",
    "prompt": "Two tones have the same amplitude but different frequencies. Which difference is primarily expected?",
    "choices": [
      "The higher-frequency tone arrives sooner at the right ear",
      "The higher-frequency tone has higher pitch",
      "The higher-frequency tone has greater loudness",
      "The higher-frequency tone comes from a higher location"
    ],
    "correct": 1,
    "explanation": "Frequency corresponds primarily to pitch.",
    "choiceExplanations": [
      "Incorrect. The stem does not change lateral source position.",
      "Correct. Frequency corresponds primarily to pitch.",
      "Incorrect. The manipulated property is frequency, while amplitude is held fixed.",
      "Incorrect. Frequency is distinct from spatial source elevation."
    ],
    "misconception": "Frequency corresponds primarily to pitch.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-head-intensity",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Why can a lateral sound be weaker at the ear farther from its source?",
    "choices": [
      "The far ear has a lower-frequency basilar peak",
      "The listener has not recognized the source",
      "The sound arrives at the far ear before the near ear",
      "The head produces a sound-shadow effect"
    ],
    "correct": 3,
    "explanation": "Reduced intensity at the far ear contributes to localization.",
    "choiceExplanations": [
      "Incorrect. Place coding concerns frequency rather than the head-related intensity difference.",
      "Incorrect. Source recognition is not the physical cause of the intensity difference.",
      "Incorrect. The farther ear generally receives it later, and timing is distinct from the intensity mechanism.",
      "Correct. Reduced intensity at the far ear contributes to localization."
    ],
    "misconception": "Reduced intensity at the far ear contributes to localization.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-pinna-elevation",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which location information does outer-ear shape contribute in the textbook account?",
    "choices": [
      "The place of maximal basilar movement",
      "The rate of auditory-nerve firing over time",
      "The head’s interaural arrival-time delay",
      "Elevation-related information"
    ],
    "correct": 3,
    "explanation": "Pinna filtering contributes vertical/location cues.",
    "choiceExplanations": [
      "Incorrect. That is a cochlear frequency-coding property.",
      "Incorrect. That is temporal pitch coding.",
      "Incorrect. That is a between-ear cue rather than the additional pinna-shape contribution.",
      "Correct. Pinna filtering contributes vertical/location cues."
    ],
    "misconception": "Pinna filtering contributes vertical/location cues.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-low-apex",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Where does a low-frequency tone maximally stimulate the basilar membrane?",
    "choices": [
      "At the tympanic membrane",
      "At the round window",
      "Toward the flexible apex",
      "Near the stiff base by the oval window"
    ],
    "correct": 2,
    "explanation": "Low-frequency peaks occur toward the flexible apex.",
    "choiceExplanations": [
      "Incorrect. The tympanic membrane is an earlier structure, not a basilar location.",
      "Incorrect. The round window permits pressure displacement rather than defining the low-frequency membrane peak.",
      "Correct. Low-frequency peaks occur toward the flexible apex.",
      "Incorrect. That is the high-frequency peak location."
    ],
    "misconception": "Low-frequency peaks occur toward the flexible apex.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-place-code",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which observation most directly supports place coding of pitch?",
    "choices": [
      "A sound reaches one ear before the other",
      "Visible lip movement changes a perceived syllable",
      "Different frequencies produce peak movement at different membrane locations",
      "Different frequencies produce different firing patterns over time"
    ],
    "correct": 2,
    "explanation": "Place theory uses the location of greatest basilar stimulation.",
    "choiceExplanations": [
      "Incorrect. That supports source localization.",
      "Incorrect. That illustrates multisensory speech integration.",
      "Correct. Place theory uses the location of greatest basilar stimulation.",
      "Incorrect. That is the temporal-coding emphasis."
    ],
    "misconception": "Place theory uses the location of greatest basilar stimulation.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-temporal-code",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "What information is emphasized by temporal theory of pitch?",
    "choices": [
      "The visual location of a speaking face",
      "Neural firing patterns over time",
      "The position of maximum basilar movement",
      "The intensity difference between ears"
    ],
    "correct": 1,
    "explanation": "The text emphasizes timing patterns, especially at lower frequencies.",
    "choiceExplanations": [
      "Incorrect. That concerns visual influence on auditory perception.",
      "Correct. The text emphasizes timing patterns, especially at lower frequencies.",
      "Incorrect. That is place theory.",
      "Incorrect. That is a localization cue."
    ],
    "misconception": "The text emphasizes timing patterns, especially at lower frequencies.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-coding-boundary",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "The textbook discusses temporal coding below about 4,000 Hz and place coding above it. How should that number be interpreted?",
    "choices": [
      "The lowest frequency that can produce a pitch",
      "An amplitude value expressed in decibels",
      "An approximate transition in coding emphasis",
      "The maximum frequency detectable by a human ear"
    ],
    "correct": 2,
    "explanation": "The notes caution against treating it as a universal sharp boundary.",
    "choiceExplanations": [
      "Incorrect. The notes do not define it as the beginning of pitch perception.",
      "Incorrect. Hertz describes frequency, not amplitude.",
      "Correct. The notes caution against treating it as a universal sharp boundary.",
      "Incorrect. The number concerns coding emphasis rather than the complete hearing range."
    ],
    "misconception": "The notes caution against treating it as a universal sharp boundary.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-hearing-detailed-route",
    "lessonId": "hearing",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which order matches the central auditory route after the auditory nerve?",
    "choices": [
      "Auditory cortex → thalamus → midbrain → medulla",
      "Medulla → midbrain → thalamus → auditory cortex",
      "Thalamus → medulla → midbrain → auditory cortex",
      "Midbrain → auditory cortex → thalamus → medulla"
    ],
    "correct": 1,
    "explanation": "The retained route proceeds through these stations in this order.",
    "choiceExplanations": [
      "Incorrect. This reverses the ascending route.",
      "Correct. The retained route proceeds through these stations in this order.",
      "Incorrect. This places the thalamus before the earlier medulla and midbrain.",
      "Incorrect. This places cortical processing before its ascending relays."
    ],
    "misconception": "The retained route proceeds through these stations in this order.",
    "source": "Sensation and Perception · slides 32–40; assigned textbook notes · 5-3a–e"
  },
  {
    "id": "s2-auditory-illusions-mcgurk-control",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "experiment",
    "prompt": "To test the McGurk effect, a researcher keeps the audio unchanged and varies the mouth video. What is manipulated?",
    "choices": [
      "Sound-source position",
      "Participants’ hearing ability",
      "Visual speech information",
      "Acoustic frequency content"
    ],
    "correct": 2,
    "explanation": "Controlling audio isolates the contribution of the visible speech.",
    "choiceExplanations": [
      "Incorrect. The stem changes mouth movement rather than sound location.",
      "Incorrect. The researcher changes a stimulus rather than an existing participant ability.",
      "Correct. Controlling audio isolates the contribution of the visible speech.",
      "Incorrect. The audio is held unchanged."
    ],
    "misconception": "Controlling audio isolates the contribution of the visible speech.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-auditory-illusions-octave-sequence",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "In an octave/scale illusion, the heard pattern differs from the physical sequence sent to each ear. What does the mismatch reveal?",
    "choices": [
      "Perception reproduces each ear’s sequence independently",
      "Amplitude is the defining cue for the entire sequence",
      "The two ears must receive the same physical sequence",
      "Auditory grouping organizes the incoming pattern"
    ],
    "correct": 3,
    "explanation": "The percept reflects organization rather than a literal copy of each ear’s sequence.",
    "choiceExplanations": [
      "Incorrect. The mismatch shows that the percept is organized beyond independent literal copies.",
      "Incorrect. The demonstration concerns pattern organization beyond amplitude.",
      "Incorrect. The example compares perception with the sequences delivered to each ear.",
      "Correct. The percept reflects organization rather than a literal copy of each ear’s sequence."
    ],
    "misconception": "The percept reflects organization rather than a literal copy of each ear’s sequence.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-auditory-illusions-frisson-definition",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "A passage of music evokes a pleasurable chill and goosebumps. What is this response called?",
    "choices": [
      "McGurk effect",
      "Frisson",
      "Absolute pitch",
      "Phantom words"
    ],
    "correct": 1,
    "explanation": "Frisson is the music-linked pleasurable chill response.",
    "choiceExplanations": [
      "Incorrect. McGurk is visual influence on perceived speech identity.",
      "Correct. Frisson is the music-linked pleasurable chill response.",
      "Incorrect. Absolute pitch is note identification without a comparison tone.",
      "Incorrect. Phantom words are meaningful interpretations of ambiguous repeated sounds."
    ],
    "misconception": "Frisson is the music-linked pleasurable chill response.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-auditory-illusions-ventriloquism",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "Movie dialogue seems to come from the visible actor rather than a separate speaker. What is the relevant perceptual effect?",
    "choices": [
      "Interaural timing changes because the visible actor moves",
      "Vision influences perceived sound location",
      "Vision changes the sound’s physical source",
      "Cochlear place coding identifies the actor’s location"
    ],
    "correct": 1,
    "explanation": "Visible source information can draw auditory location toward it.",
    "choiceExplanations": [
      "Incorrect. The physical loudspeaker can stay fixed while visual information shifts perceived location.",
      "Correct. Visible source information can draw auditory location toward it.",
      "Incorrect. Perceived location can shift without moving the speaker.",
      "Incorrect. Place coding concerns pitch rather than visual source attraction."
    ],
    "misconception": "Visible source information can draw auditory location toward it.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-auditory-illusions-sinewave-knowledge",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "application",
    "prompt": "An unusual recording becomes intelligible after a listener learns that it contains speech. What explains the change?",
    "choices": [
      "The listener’s pinna changes the source location",
      "Sensory adaptation completes a missing sound contour",
      "Top-down knowledge organizes the same signal",
      "The recording acquires a new acoustic frequency"
    ],
    "correct": 2,
    "explanation": "Knowledge can alter interpretation while the recording stays fixed.",
    "choiceExplanations": [
      "Incorrect. The outcome is intelligibility, not source position.",
      "Incorrect. The example concerns knowledge-dependent speech recognition rather than response decline.",
      "Correct. Knowledge can alter interpretation while the recording stays fixed.",
      "Incorrect. The stem specifies a change in knowledge rather than the signal."
    ],
    "misconception": "Knowledge can alter interpretation while the recording stays fixed.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-auditory-illusions-asl-language",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Which statement matches the retained discussion of ASL?",
    "choices": [
      "ASL is a distinct language with its own linguistic system",
      "ASL is spoken English with a manual code for each word",
      "ASL is a set of gestures without a language system",
      "ASL is the shared signed language used across countries"
    ],
    "correct": 0,
    "explanation": "The notes reject treating ASL as simply English expressed with hand movements.",
    "choiceExplanations": [
      "Correct. The notes reject treating ASL as simply English expressed with hand movements.",
      "Incorrect. That reduces ASL to signed English, the account the notes reject.",
      "Incorrect. The notes describe signed languages as full languages.",
      "Incorrect. The retained discussion notes differences among signed languages."
    ],
    "misconception": "The notes reject treating ASL as simply English expressed with hand movements.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-auditory-illusions-absolute-pitch",
    "lessonId": "auditory-illusions",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which task tests absolute pitch as defined in the textbook?",
    "choices": [
      "Deciding which of two tones is higher",
      "Deciding which of two tones is louder",
      "Deciding which ear received a tone sooner",
      "Naming a musical note without hearing a reference note"
    ],
    "correct": 3,
    "explanation": "Absolute pitch identifies note identity without a comparison tone.",
    "choiceExplanations": [
      "Incorrect. That is a relative comparison.",
      "Incorrect. That tests loudness comparison.",
      "Incorrect. That tests an arrival-time localization cue.",
      "Correct. Absolute pitch identifies note identity without a comparison tone."
    ],
    "misconception": "Absolute pitch identifies note identity without a comparison tone.",
    "source": "Sensation and Perception · slides 41–45; assigned textbook notes · 5-3c–e"
  },
  {
    "id": "s2-smell-bulb-order",
    "lessonId": "smell",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Where does nasal olfactory receptor output travel before primary olfactory cortical processing?",
    "choices": [
      "Hippocampus",
      "Orbitofrontal cortex",
      "Olfactory bulb",
      "Thalamus"
    ],
    "correct": 2,
    "explanation": "The bulb is an early processing destination for olfactory receptor fibers.",
    "choiceExplanations": [
      "Incorrect. Memory-related olfactory connections do not replace the initial bulb destination.",
      "Incorrect. Later integrated evaluation is not the initial receptor-output destination.",
      "Correct. The bulb is an early processing destination for olfactory receptor fibers.",
      "Incorrect. Smell is the initial thalamic-relay exception in this course."
    ],
    "misconception": "The bulb is an early processing destination for olfactory receptor fibers.",
    "source": "Sensation and Perception · slides 46–51; assigned textbook notes · 5-5a"
  },
  {
    "id": "s2-body-taste-somatic-cortex",
    "lessonId": "body-taste",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which cortical destination is emphasized for skin and body-related sensory information?",
    "choices": [
      "Primary olfactory cortex",
      "Parietal somatosensory cortex",
      "Occipital visual cortex",
      "Temporal auditory cortex"
    ],
    "correct": 1,
    "explanation": "Spinal and brain pathways carry somatosensory information to this cortex.",
    "choiceExplanations": [
      "Incorrect. That processes olfactory input.",
      "Correct. Spinal and brain pathways carry somatosensory information to this cortex.",
      "Incorrect. That is the emphasized visual destination.",
      "Incorrect. That is the emphasized auditory destination."
    ],
    "misconception": "Spinal and brain pathways carry somatosensory information to this cortex.",
    "source": "Assigned textbook notes · 5-4b–c; 5-5b–e"
  },
  {
    "id": "s2-body-taste-nociception-pain",
    "lessonId": "body-taste",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which statement best distinguishes nociception from experienced pain?",
    "choices": [
      "Nociception specifies emotion; pain specifies receptor activity",
      "Nociception and pain both specify the tissue damage without context",
      "Nociception requires conscious reporting before receptors can signal",
      "Nociception signals potential damage; pain also includes contextual processing"
    ],
    "correct": 3,
    "explanation": "Attention, expectation and emotion contribute to the full experience.",
    "choiceExplanations": [
      "Incorrect. This reverses the input-versus-experience distinction.",
      "Incorrect. Pain experience can change with attention, expectation and emotion.",
      "Incorrect. Damage-related input can occur without a conscious report.",
      "Correct. Attention, expectation and emotion contribute to the full experience."
    ],
    "misconception": "Attention, expectation and emotion contribute to the full experience.",
    "source": "Assigned textbook notes · 5-4b–c; 5-5b–e"
  },
  {
    "id": "s2-vestibular-hair-cell-signal",
    "lessonId": "vestibular",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which stimulus information is supplied by vestibular hair cells?",
    "choices": [
      "Head movement, acceleration and rotation",
      "Sound frequency and amplitude",
      "Skin pressure and stretch",
      "The position of an object in the retinal image"
    ],
    "correct": 0,
    "explanation": "Inner-ear vestibular receptors provide these head-motion signals.",
    "choiceExplanations": [
      "Correct. Inner-ear vestibular receptors provide these head-motion signals.",
      "Incorrect. Cochlear auditory hair cells provide sound-related input.",
      "Incorrect. Those are somatosensory inputs.",
      "Incorrect. That is visual input rather than the vestibular receptor signal."
    ],
    "misconception": "Inner-ear vestibular receptors provide these head-motion signals.",
    "source": "Assigned textbook notes · 5-4a–b"
  },
  {
    "id": "s2-vestibular-multi-system-balance",
    "lessonId": "vestibular",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Which combination best describes how the body maintains balance in the retained notes?",
    "choices": [
      "Vestibular signals interact with vision, cerebellum and posture circuits",
      "Vestibular signals are interpreted without visual or body input",
      "Visual images are converted directly into voluntary muscle commands",
      "Body-position signals determine balance without head-motion information"
    ],
    "correct": 0,
    "explanation": "Balance depends on coordinated contributions across these systems.",
    "choiceExplanations": [
      "Correct. Balance depends on coordinated contributions across these systems.",
      "Incorrect. This omits integration emphasized in the notes.",
      "Incorrect. The account includes vestibular and reflex/postural coordination, not this direct single route.",
      "Incorrect. This omits vestibular head-motion input emphasized in the account."
    ],
    "misconception": "Balance depends on coordinated contributions across these systems.",
    "source": "Assigned textbook notes · 5-4a–b"
  },
  {
    "id": "s2-vestibular-body-position",
    "lessonId": "vestibular",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Why should vestibular sense not be equated with the complete sense of body position?",
    "choices": [
      "Somatosensory inputs also contribute position information",
      "Vestibular hair cells primarily identify sound pitch",
      "Body position is determined by retinal disparity",
      "Vestibular input is a motor command rather than sensation"
    ],
    "correct": 0,
    "explanation": "Skin and body signals contribute beyond vestibular head-motion input.",
    "choiceExplanations": [
      "Correct. Skin and body signals contribute beyond vestibular head-motion input.",
      "Incorrect. That is the cochlear auditory role.",
      "Incorrect. Visual cues can contribute, but this does not replace the body-related input described.",
      "Incorrect. The hair cells supply sensory information used by movement systems."
    ],
    "misconception": "Skin and body signals contribute beyond vestibular head-motion input.",
    "source": "Assigned textbook notes · 5-4a–b"
  },
  {
    "id": "s2-vestibular-map-plasticity",
    "lessonId": "vestibular",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "experiment",
    "prompt": "After extensive Braille practice, cortical touch representations differ from before practice. What does the change illustrate?",
    "choices": [
      "A fixed sensory map unaffected by practice",
      "Experience-dependent sensory-map plasticity",
      "Regeneration of peripheral sensory axons",
      "Physical enlargement of the practiced body part"
    ],
    "correct": 1,
    "explanation": "Practice can alter cortical representation without establishing regrowth of damaged axons.",
    "choiceExplanations": [
      "Incorrect. The observed representation change contradicts a fixed-map interpretation.",
      "Correct. Practice can alter cortical representation without establishing regrowth of damaged axons.",
      "Incorrect. A cortical representation change does not by itself establish peripheral axon regrowth.",
      "Incorrect. The map describes cortical allocation rather than body-part size."
    ],
    "misconception": "Practice can alter cortical representation without establishing regrowth of damaged axons.",
    "source": "Assigned textbook notes · 5-4a–b"
  },
  {
    "id": "s2-pain-location-affect",
    "lessonId": "pain",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing correctly distinguishes location-related and emotional pain processing?",
    "choices": [
      "Somatosensory pathways: location; spinal nociceptors: emotional interpretation",
      "Cingulate/insula/amygdala: physical tissue damage; somatosensory pathways: affect",
      "Somatosensory pathways: location; cingulate/insula/amygdala: affect",
      "Cingulate/insula/amygdala: location; somatosensory pathways: affect"
    ],
    "correct": 2,
    "explanation": "The notes distinguish sensory location from emotional dimensions of pain.",
    "choiceExplanations": [
      "Incorrect. The first part fits; emotional processing requires the central affect-related systems.",
      "Incorrect. Central activity is not the physical injury, and the sensory/affective roles are misassigned.",
      "Correct. The notes distinguish sensory location from emotional dimensions of pain.",
      "Incorrect. This reverses the emphasized roles."
    ],
    "misconception": "The notes distinguish sensory location from emotional dimensions of pain.",
    "source": "Assigned textbook notes · 5-4c"
  },
  {
    "id": "s2-pain-pag-endorphins",
    "lessonId": "pain",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which systems are named in the textbook’s descending pain-modulation account?",
    "choices": [
      "Somatosensory cortex and ascending location pathways",
      "Amygdala and insula in affect-related pain processing",
      "Periaqueductal gray and endogenous opioid systems",
      "Peripheral nociceptors and ascending sensory fibers"
    ],
    "correct": 2,
    "explanation": "PAG and endorphin/opioid signaling participate in pain regulation.",
    "choiceExplanations": [
      "Incorrect. These emphasize sensory location processing rather than the named PAG/opioid regulation.",
      "Incorrect. Those contribute to emotional dimensions rather than naming the PAG/opioid descending system.",
      "Correct. PAG and endorphin/opioid signaling participate in pain regulation.",
      "Incorrect. These provide damage-related input rather than the named descending modulation system."
    ],
    "misconception": "PAG and endorphin/opioid signaling participate in pain regulation.",
    "source": "Assigned textbook notes · 5-4c"
  },
  {
    "id": "s2-pain-placebo-real",
    "lessonId": "pain",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Pain decreases when expectations change, although the injury remains. Which interpretation fits the notes?",
    "choices": [
      "The report verifies that nociceptors have disappeared",
      "The response is unrelated to neural pain processing",
      "Expectations modulate a real pain experience",
      "The change demonstrates that the injury has healed"
    ],
    "correct": 2,
    "explanation": "A processing change does not make the experience imaginary or establish repair.",
    "choiceExplanations": [
      "Incorrect. An experience change does not establish receptor loss.",
      "Incorrect. The notes include expectancy effects in pain modulation.",
      "Correct. A processing change does not make the experience imaginary or establish repair.",
      "Incorrect. The stem explicitly states that the injury remains."
    ],
    "misconception": "A processing change does not make the experience imaginary or establish repair.",
    "source": "Assigned textbook notes · 5-4c"
  },
  {
    "id": "s2-taste-flavor-papillae-buds-cells",
    "lessonId": "taste-flavor",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which arrangement matches the gustatory anatomy described in the notes?",
    "choices": [
      "Receptor cells contain taste buds; buds contain papillae",
      "Papillae contain receptor cells; receptor cells contain taste buds",
      "Papillae contain taste buds; buds contain receptor and supporting cells",
      "Taste buds contain papillae; papillae contain receptor and supporting cells"
    ],
    "correct": 2,
    "explanation": "The notes distinguish tongue bumps, buds and their cells.",
    "choiceExplanations": [
      "Incorrect. This puts cells outside the larger structures that contain them.",
      "Incorrect. The buds contain the cells rather than the cells containing buds.",
      "Correct. The notes distinguish tongue bumps, buds and their cells.",
      "Incorrect. This reverses the relative nesting of papillae and buds."
    ],
    "misconception": "The notes distinguish tongue bumps, buds and their cells.",
    "source": "Assigned textbook notes · 5-5b–e"
  },
  {
    "id": "s2-taste-flavor-taste-route",
    "lessonId": "taste-flavor",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which order matches the gustatory pathway after taste-receptor signaling?",
    "choices": [
      "Medulla → thalamus → gustatory cortical regions",
      "Thalamus → medulla → gustatory cortical regions",
      "Gustatory cortex → medulla → thalamus",
      "Medulla → gustatory cortical regions → thalamus"
    ],
    "correct": 0,
    "explanation": "The retained route proceeds through brainstem, thalamus and gustatory cortex.",
    "choiceExplanations": [
      "Correct. The retained route proceeds through brainstem, thalamus and gustatory cortex.",
      "Incorrect. This reverses the early relays.",
      "Incorrect. This places cortex before its ascending relays.",
      "Incorrect. This places cortex before the thalamic relay."
    ],
    "misconception": "The retained route proceeds through brainstem, thalamus and gustatory cortex.",
    "source": "Assigned textbook notes · 5-5b–e"
  },
  {
    "id": "s2-taste-flavor-orbitofrontal",
    "lessonId": "taste-flavor",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which region is linked with combining taste and smell and evaluating flavor pleasantness?",
    "choices": [
      "Orbitofrontal cortex",
      "Olfactory receptor cells",
      "Taste buds",
      "Medulla"
    ],
    "correct": 0,
    "explanation": "The notes assign integrated flavor and pleasantness processing to orbitofrontal regions.",
    "choiceExplanations": [
      "Correct. The notes assign integrated flavor and pleasantness processing to orbitofrontal regions.",
      "Incorrect. These begin odor transduction rather than central taste–smell integration.",
      "Incorrect. These begin gustatory transduction rather than integrate the two pathways.",
      "Incorrect. The medulla is an earlier gustatory relay rather than the named integration region."
    ],
    "misconception": "The notes assign integrated flavor and pleasantness processing to orbitofrontal regions.",
    "source": "Assigned textbook notes · 5-5b–e"
  },
  {
    "id": "s2-taste-flavor-supertasters",
    "lessonId": "taste-flavor",
    "unit": "Sensation & perception",
    "kind": "combined",
    "type": "recall",
    "prompt": "What difference is associated with supertasters in the retained textbook notes?",
    "choices": [
      "More papillae/taste buds and stronger taste sensitivity",
      "Fewer taste buds and weaker bitter sensitivity",
      "More olfactory receptors and unchanged gustatory sensitivity",
      "A different set of exclusive taste zones"
    ],
    "correct": 0,
    "explanation": "The text connects increased sensitivity with papillae/taste-bud variation.",
    "choiceExplanations": [
      "Correct. The text connects increased sensitivity with papillae/taste-bud variation.",
      "Incorrect. This reverses the described sensitivity relationship.",
      "Incorrect. The supertaster account concerns gustatory anatomy and sensitivity.",
      "Incorrect. The notes reject a rigid tongue map."
    ],
    "misconception": "The text connects increased sensitivity with papillae/taste-bud variation.",
    "source": "Assigned textbook notes · 5-5b–e"
  },
  {
    "id": "s2-awareness-levels-order",
    "lessonId": "awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which progression matches the lecture’s three meanings of consciousness from simplest to most complex?",
    "choices": [
      "Alertness → awareness of sensations → self-awareness",
      "Self-awareness → awareness of sensations → alertness",
      "Awareness of sensations → alertness → self-awareness",
      "Alertness → self-awareness → awareness of sensations"
    ],
    "correct": 0,
    "explanation": "The lecture orders level of alertness, experienced input and self-representation this way.",
    "choiceExplanations": [
      "Correct. The lecture orders level of alertness, experienced input and self-representation this way.",
      "Incorrect. This reverses the progression.",
      "Incorrect. This reverses the first two levels.",
      "Incorrect. This reverses the last two levels."
    ],
    "misconception": "The lecture orders level of alertness, experienced input and self-representation this way.",
    "source": "Consciousness · slides 3–6; assigned textbook notes · 6-1"
  },
  {
    "id": "s2-awareness-state-content",
    "lessonId": "awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing distinguishes state from content of consciousness?",
    "choices": [
      "State: a seen object; content: an imagined object",
      "State: alertness level; content: what is experienced",
      "State: what is experienced; content: alertness level",
      "State: alertness level; content: degree of drowsiness"
    ],
    "correct": 1,
    "explanation": "These are different dimensions in the textbook.",
    "choiceExplanations": [
      "Incorrect. Both parts identify contents rather than distinguishing alertness state.",
      "Correct. These are different dimensions in the textbook.",
      "Incorrect. This reverses the definitions.",
      "Incorrect. The second part repeats a state dimension rather than identifying experienced content."
    ],
    "misconception": "These are different dimensions in the textbook.",
    "source": "Consciousness · slides 3–6; assigned textbook notes · 6-1"
  },
  {
    "id": "s2-awareness-unnoticed-mark-purpose",
    "lessonId": "awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "Why is a mark placed without the subject noticing it in a mirror-recognition task?",
    "choices": [
      "Mirror information can then explain mark-directed self-action",
      "Mark-directed action can be attributed to the remembered marking procedure",
      "The subject’s response becomes independent of visual ability",
      "The subject’s motivation is held constant by the mark"
    ],
    "correct": 0,
    "explanation": "Prior knowledge of the mark would provide another reason for touching it.",
    "choiceExplanations": [
      "Correct. Prior knowledge of the mark would provide another reason for touching it.",
      "Incorrect. Unnoticed application removes that alternative rather than supporting it.",
      "Incorrect. Visual ability still affects performance.",
      "Incorrect. Applying an unnoticed mark does not establish equal motivation."
    ],
    "misconception": "Prior knowledge of the mark would provide another reason for touching it.",
    "source": "Consciousness · slides 3–6; assigned textbook notes · 6-1"
  },
  {
    "id": "s2-awareness-readiness-timing",
    "lessonId": "awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "In the textbook example, readiness activity begins about 550 ms before movement and reported intention about 200 ms before movement. Which event occurs earlier?",
    "choices": [
      "Reported intention, by roughly 350 ms",
      "Movement, by roughly 200 ms",
      "The two measures, at approximately the same time",
      "Readiness activity, by roughly 350 ms"
    ],
    "correct": 3,
    "explanation": "Subtracting the times places the neural activity earlier than reported intention.",
    "choiceExplanations": [
      "Incorrect. This reverses the order.",
      "Incorrect. Both measures precede movement in the example.",
      "Incorrect. The reported timings include a gap.",
      "Correct. Subtracting the times places the neural activity earlier than reported intention."
    ],
    "misconception": "Subtracting the times places the neural activity earlier than reported intention.",
    "source": "Consciousness · slides 3–6; assigned textbook notes · 6-1"
  },
  {
    "id": "s2-awareness-readiness-inference",
    "lessonId": "awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Readiness-related neural activity precedes a participant’s reported intention to move. Which conclusion does this timing support?",
    "choices": [
      "The intention report gives a complete account of the movement’s causes",
      "Earlier neural activity identifies a unique explanation of the decision",
      "Reported intention follows some movement-related neural preparation",
      "Reported intention causes the earlier neural preparation"
    ],
    "correct": 2,
    "explanation": "The timing establishes this sequence but does not settle whether free will exists.",
    "choiceExplanations": [
      "Incorrect. The report leaves earlier neural preparation and other causal influences unexplained.",
      "Incorrect. Several interpretations can fit a temporal ordering; timing does not isolate one.",
      "Correct. The timing establishes this sequence but does not settle whether free will exists.",
      "Incorrect. A later report cannot establish that causal explanation for earlier activity."
    ],
    "misconception": "The timing establishes this sequence but does not settle whether free will exists.",
    "source": "Consciousness · slides 3–6; assigned textbook notes · 6-1"
  },
  {
    "id": "s2-consciousness-models-flexibility-function",
    "lessonId": "consciousness-models",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which possible function is linked to awareness of sensations in the textbook’s evolutionary discussion?",
    "choices": [
      "The same fixed response to a cue regardless of other information",
      "Sensory detection without considering alternative actions",
      "Automatic withdrawal before evaluating possible responses",
      "Flexible choices based on available information"
    ],
    "correct": 3,
    "explanation": "The account contrasts flexible responses with an automatic reaction.",
    "choiceExplanations": [
      "Incorrect. That contrasts with the proposed flexibility of awareness.",
      "Incorrect. That describes input acquisition rather than the proposed choice function.",
      "Incorrect. A rapid automatic response differs from choosing flexibly using available information.",
      "Correct. The account contrasts flexible responses with an automatic reaction."
    ],
    "misconception": "The account contrasts flexible responses with an automatic reaction.",
    "source": "Assigned textbook notes · 6-1a–b"
  },
  {
    "id": "s2-consciousness-models-weak-ai",
    "lessonId": "consciousness-models",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which distinction matches weak and strong AI in the textbook’s conceptual discussion?",
    "choices": [
      "Weak: slower task performance; strong: faster performance on the same task",
      "Weak: biological implementation; strong: computer implementation",
      "Weak: task simulation; strong: proposed full range of cognition",
      "Weak: full range of cognition; strong: task simulation"
    ],
    "correct": 2,
    "explanation": "The historical distinction concerns task behavior versus the proposed broader capacities.",
    "choiceExplanations": [
      "Incorrect. The distinction concerns range of capacities rather than speed on a task.",
      "Incorrect. The terms describe proposed capacities rather than biological versus computer substrate.",
      "Correct. The historical distinction concerns task behavior versus the proposed broader capacities.",
      "Incorrect. This reverses the textbook’s terms."
    ],
    "misconception": "The historical distinction concerns task behavior versus the proposed broader capacities.",
    "source": "Assigned textbook notes · 6-1a–b"
  },
  {
    "id": "s2-consciousness-models-turing-experience",
    "lessonId": "consciousness-models",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "A system’s conversation is indistinguishable from a human’s in a Turing-style test. Which inference is supported?",
    "choices": [
      "Its success establishes the full range of intelligent capacities",
      "Its conversation met the behavioral comparison criterion",
      "Its subjective experience was directly observed",
      "Its internal processes match human cognition"
    ],
    "correct": 1,
    "explanation": "The test assesses conversational behavior rather than directly verifying subjective experience.",
    "choiceExplanations": [
      "Incorrect. A conversation comparison is narrower than a complete capacity assessment.",
      "Correct. The test assesses conversational behavior rather than directly verifying subjective experience.",
      "Incorrect. Imitation does not provide direct access to experience.",
      "Incorrect. Matching behavior does not establish identical internal processes."
    ],
    "misconception": "The test assesses conversational behavior rather than directly verifying subjective experience.",
    "source": "Assigned textbook notes · 6-1a–b"
  },
  {
    "id": "s2-awake-eeg-measure",
    "lessonId": "awake",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "What does EEG measure as used in the consciousness lessons?",
    "choices": [
      "Electrical patterns recorded at the scalp",
      "An anatomical image of brain tissue",
      "A tracer-based measure of metabolic activity",
      "An image based on blood-oxygen changes"
    ],
    "correct": 0,
    "explanation": "EEG is a physiological record of electrical activity patterns.",
    "choiceExplanations": [
      "Correct. EEG is a physiological record of electrical activity patterns.",
      "Incorrect. Structural imaging differs from the scalp electrical record.",
      "Incorrect. That is a PET-type measurement rather than EEG.",
      "Incorrect. That is an fMRI-type measurement rather than EEG."
    ],
    "misconception": "EEG is a physiological record of electrical activity patterns.",
    "source": "Consciousness · slides 7–9; assigned textbook notes · 6-1b"
  },
  {
    "id": "s2-awake-gamma-processing",
    "lessonId": "awake",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which lecture EEG category is associated especially with sensory processing?",
    "choices": [
      "Theta",
      "Gamma",
      "Alpha",
      "Delta"
    ],
    "correct": 1,
    "explanation": "Gamma is associated with sensory processing, particularly visual input in the textbook.",
    "choiceExplanations": [
      "Incorrect. Theta is associated with light sleep.",
      "Correct. Gamma is associated with sensory processing, particularly visual input in the textbook.",
      "Incorrect. Alpha is associated with relaxed waking.",
      "Incorrect. Delta is associated with deep slow-wave sleep."
    ],
    "misconception": "Gamma is associated with sensory processing, particularly visual input in the textbook.",
    "source": "Consciousness · slides 7–9; assigned textbook notes · 6-1b"
  },
  {
    "id": "s2-awake-waves-not-exclusive",
    "lessonId": "awake",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Why should an alpha or beta label not be used as a complete description of the entire brain at one moment?",
    "choices": [
      "The wave category directly specifies the content of a thought",
      "The categories describe associated patterns within interacting activity",
      "Each label identifies one uniform pattern across all regions",
      "A frequency label identifies the anatomical source without further information"
    ],
    "correct": 1,
    "explanation": "The lesson warns against treating a pattern association as an exclusive whole-brain state.",
    "choiceExplanations": [
      "Incorrect. A state-associated pattern does not identify complete experienced content.",
      "Correct. The lesson warns against treating a pattern association as an exclusive whole-brain state.",
      "Incorrect. A category association does not imply identical simultaneous activity everywhere.",
      "Incorrect. Frequency categories alone do not identify a precise source."
    ],
    "misconception": "The lesson warns against treating a pattern association as an exclusive whole-brain state.",
    "source": "Consciousness · slides 7–9; assigned textbook notes · 6-1b"
  },
  {
    "id": "s2-awake-dmn-internal",
    "lessonId": "awake",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A student recalls a social encounter and imagines tomorrow’s plans while no external task is assigned. Which network is associated with this activity?",
    "choices": [
      "Somatosensory body map",
      "Default mode network",
      "Primary visual pathway",
      "Reticular arousal system"
    ],
    "correct": 1,
    "explanation": "The DMN is associated with internally oriented remembering, self/social thought and future imagining.",
    "choiceExplanations": [
      "Incorrect. That represents body-related sensory input rather than the described memory/planning activity.",
      "Correct. The DMN is associated with internally oriented remembering, self/social thought and future imagining.",
      "Incorrect. Visual transmission is not the network specifically associated with the described internal thought.",
      "Incorrect. That helps alertness but does not name the described internally oriented network."
    ],
    "misconception": "The DMN is associated with internally oriented remembering, self/social thought and future imagining.",
    "source": "Consciousness · slides 7–9; assigned textbook notes · 6-1b"
  },
  {
    "id": "s2-awake-dmn-not-off",
    "lessonId": "awake",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "What is misleading about describing the default mode network as an inactive brain?",
    "choices": [
      "The DMN directly measures the accuracy of each memory",
      "Internal remembering and planning are organized mental activity",
      "The DMN is defined by external color-naming tasks",
      "DMN activity is the same as deep delta sleep"
    ],
    "correct": 1,
    "explanation": "A lack of an external task does not mean absence of processing.",
    "choiceExplanations": [
      "Incorrect. Network activity does not itself verify remembered facts.",
      "Correct. A lack of an external task does not mean absence of processing.",
      "Incorrect. The network is associated with internally oriented thought.",
      "Incorrect. Mind wandering is a waking example distinct from deep NREM."
    ],
    "misconception": "A lack of an external task does not mean absence of processing.",
    "source": "Consciousness · slides 7–9; assigned textbook notes · 6-1b"
  },
  {
    "id": "s2-attention-confidence-evidence",
    "lessonId": "attention",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "A student claims demanding multitasking does not affect their performance. Which comparison would test the claim most directly?",
    "choices": [
      "Confidence before and after discussing the claim",
      "The number of tasks selected in a questionnaire",
      "Alertness ratings at the start and end of the day",
      "Speed and accuracy during single-task and alternating-task conditions"
    ],
    "correct": 3,
    "explanation": "Measured performance is needed to evaluate a claimed absence of switching cost.",
    "choiceExplanations": [
      "Incorrect. Confidence does not directly measure task performance.",
      "Incorrect. Task count does not measure how well they are performed.",
      "Incorrect. Alertness is broader than the specific multitasking-performance comparison.",
      "Correct. Measured performance is needed to evaluate a claimed absence of switching cost."
    ],
    "misconception": "Measured performance is needed to evaluate a claimed absence of switching cost.",
    "source": "Consciousness · slides 10–12"
  },
  {
    "id": "s2-attention-stroop-source",
    "lessonId": "attention",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Why do incongruent color words interfere with naming their ink color?",
    "choices": [
      "The required response is the word, and color naming distracts from it",
      "The participant must alternate the response rule after each word",
      "Practiced word reading competes with color naming",
      "The task requires reading the word and naming ink equally"
    ],
    "correct": 2,
    "explanation": "Automatic reading conflicts with the required color response.",
    "choiceExplanations": [
      "Incorrect. This reverses the task rule and the measured interference.",
      "Incorrect. The basic task keeps ink-color naming constant; conflicting word meaning supplies interference.",
      "Correct. Automatic reading conflicts with the required color response.",
      "Incorrect. The response rule is ink-color naming."
    ],
    "misconception": "Automatic reading conflicts with the required color response.",
    "source": "Consciousness · slides 10–12"
  },
  {
    "id": "s2-attention-change-inattention",
    "lessonId": "attention",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing correctly distinguishes two attention failures?",
    "choices": [
      "Change blindness: slow color naming; inattentional blindness: rapid task switching",
      "Change blindness: missed alteration; inattentional blindness: missed unexpected object",
      "Change blindness: missed unexpected object; inattentional blindness: missed alteration",
      "Change blindness: missed alteration; inattentional blindness: slow color naming"
    ],
    "correct": 1,
    "explanation": "The distinction concerns a changed item versus an unexpected item outside attention.",
    "choiceExplanations": [
      "Incorrect. Those describe Stroop and switching processes rather than these two failures.",
      "Correct. The distinction concerns a changed item versus an unexpected item outside attention.",
      "Incorrect. This reverses the definitions.",
      "Incorrect. The first part fits; the second describes a different attention task outcome."
    ],
    "misconception": "The distinction concerns a changed item versus an unexpected item outside attention.",
    "source": "Consciousness · slides 10–12"
  },
  {
    "id": "s2-sleep-stages-nrem-one",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which feature fits NREM stage 1 in the course’s retained stage system?",
    "choices": [
      "Rapid eye movements with postural-muscle atonia",
      "Theta activity during a light transition into sleep",
      "Spindles and K complexes during established sleep",
      "Delta-dominant activity during deep sleep"
    ],
    "correct": 1,
    "explanation": "Stage 1 is a light theta-associated transition.",
    "choiceExplanations": [
      "Incorrect. That fits REM.",
      "Correct. Stage 1 is a light theta-associated transition.",
      "Incorrect. Those are the characteristic stage-2 markers.",
      "Incorrect. That fits the older stages 3/4."
    ],
    "misconception": "Stage 1 is a light theta-associated transition.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-modern-map",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "How does modern N3 correspond to the older labels retained on this site?",
    "choices": [
      "It combines older NREM stages 3 and 4",
      "It combines older NREM stages 2 and 3",
      "It corresponds to older stage 3 without stage 4",
      "It corresponds to older stage 4 without stage 3"
    ],
    "correct": 0,
    "explanation": "The notes explicitly reconcile modern combined deep sleep with the older labels.",
    "choiceExplanations": [
      "Correct. The notes explicitly reconcile modern combined deep sleep with the older labels.",
      "Incorrect. Older stage 2 retains its distinct spindle/K-complex markers.",
      "Incorrect. The combined label includes both older deep stages.",
      "Incorrect. The combined label includes both older deep stages."
    ],
    "misconception": "The notes explicitly reconcile modern combined deep sleep with the older labels.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-rem-autonomic",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which autonomic pattern is associated with REM in the retained notes?",
    "choices": [
      "Heart rate, breathing and blood pressure can become irregular",
      "These measures define a steady relaxed-waking pattern",
      "Autonomic changes depend on overt dream-enactment movement",
      "The measures identify the sensory content of the dream"
    ],
    "correct": 0,
    "explanation": "REM includes sympathetic/autonomic irregularity along with waking-like activity and atonia.",
    "choiceExplanations": [
      "Correct. REM includes sympathetic/autonomic irregularity along with waking-like activity and atonia.",
      "Incorrect. The notes describe irregular REM activity rather than relaxed-waking constancy.",
      "Incorrect. Normal REM atonia can coexist with the autonomic changes.",
      "Incorrect. Physiological patterns do not specify a complete dream narrative."
    ],
    "misconception": "REM includes sympathetic/autonomic irregularity along with waking-like activity and atonia.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-atonia-function",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "What is a protective function of normal REM atonia?",
    "choices": [
      "Blocking incoming sensory information from reaching the cortex",
      "Producing the deep-NREM delta pattern",
      "Increasing movement during vivid dreaming",
      "Limiting physical enactment of dreams"
    ],
    "correct": 3,
    "explanation": "Inhibition of major postural muscles ordinarily helps prevent acting out dreams.",
    "choiceExplanations": [
      "Incorrect. Atonia refers to motor inhibition rather than complete sensory blockade.",
      "Incorrect. REM atonia accompanies waking-like activity rather than defining deep delta sleep.",
      "Incorrect. This reverses the movement-inhibition function.",
      "Correct. Inhibition of major postural muscles ordinarily helps prevent acting out dreams."
    ],
    "misconception": "Inhibition of major postural muscles ordinarily helps prevent acting out dreams.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-dream-nonrem",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Which statement best describes the relationship between dreaming and REM?",
    "choices": [
      "REM atonia prevents dreams from occurring",
      "Vivid dreaming is associated with REM, and dreams can occur in NREM",
      "A dream report identifies REM without additional evidence",
      "NREM is the characteristic state for vivid recalled nightmares"
    ],
    "correct": 1,
    "explanation": "The source warns against equating dreaming exclusively with REM.",
    "choiceExplanations": [
      "Incorrect. Atonia limits movement and coexists with dreaming.",
      "Correct. The source warns against equating dreaming exclusively with REM.",
      "Incorrect. A dream can occur outside REM, so the report is insufficient.",
      "Incorrect. The nightmare association in the notes is REM."
    ],
    "misconception": "The source warns against equating dreaming exclusively with REM.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-night-early",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "Which sleep pattern is most characteristic of the early part of a normal night?",
    "choices": [
      "More deep NREM with relatively short REM periods",
      "Long REM periods with little deep NREM",
      "A single sequence that ends once REM begins",
      "Relaxed waking alpha throughout the early cycles"
    ],
    "correct": 0,
    "explanation": "Deep slow-wave sleep is more prominent early; REM periods lengthen later.",
    "choiceExplanations": [
      "Correct. Deep slow-wave sleep is more prominent early; REM periods lengthen later.",
      "Incorrect. That better fits later-night architecture.",
      "Incorrect. The notes describe repeated cycles.",
      "Incorrect. Early sleep contains multiple sleep stages rather than relaxed waking throughout."
    ],
    "misconception": "Deep slow-wave sleep is more prominent early; REM periods lengthen later.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-hypnogram",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "What information does a hypnogram display?",
    "choices": [
      "A single averaged electrical frequency for the night",
      "Sleep-stage transitions over time",
      "The raw electrical waveforms recorded from the scalp",
      "A detailed account of dream content"
    ],
    "correct": 1,
    "explanation": "It depicts nightly architecture and repeated cycles.",
    "choiceExplanations": [
      "Incorrect. A hypnogram tracks stages rather than a single frequency average.",
      "Correct. It depicts nightly architecture and repeated cycles.",
      "Incorrect. A hypnogram depicts classified stages rather than the raw EEG trace.",
      "Incorrect. Stages do not directly specify dream narratives."
    ],
    "misconception": "It depicts nightly architecture and repeated cycles.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-stages-deep-awakening",
    "lessonId": "sleep-stages",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A sleeper has delta-dominant activity and is difficult to awaken, with brief confusion on awakening. Which older stage labels fit?",
    "choices": [
      "NREM stages 3 and 4",
      "NREM stage 1",
      "NREM stage 2",
      "REM"
    ],
    "correct": 0,
    "explanation": "The older deep stages are delta-dominant and associated with difficult awakening.",
    "choiceExplanations": [
      "Correct. The older deep stages are delta-dominant and associated with difficult awakening.",
      "Incorrect. Stage 1 is the light theta-associated transition.",
      "Incorrect. Spindles and K complexes define stage 2.",
      "Incorrect. REM has waking-like activity and atonia rather than the stated delta-dominant pattern."
    ],
    "misconception": "The older deep stages are delta-dominant and associated with difficult awakening.",
    "source": "Consciousness · slides 13–19; assigned textbook notes · 6-2b–c"
  },
  {
    "id": "s2-sleep-purpose-deprivation-cost",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "What tradeoff does an all-night study session create according to the notes?",
    "choices": [
      "The tradeoff concerns bodily repair without a memory component",
      "Later sleep restores the missed study material without prior learning",
      "More study exposure can be offset by worse retention and cognition",
      "More exposure establishes improved later recall"
    ],
    "correct": 2,
    "explanation": "Sleep deprivation can impair memory, concentration and decisions.",
    "choiceExplanations": [
      "Incorrect. The source includes memory-related effects.",
      "Incorrect. Sleep supports processing of learned information; it does not replace exposure to unstudied material.",
      "Correct. Sleep deprivation can impair memory, concentration and decisions.",
      "Incorrect. Study time alone does not establish retention or retrieval quality."
    ],
    "misconception": "Sleep deprivation can impair memory, concentration and decisions.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-sleep-purpose-restoration",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "What does the restorative hypothesis emphasize?",
    "choices": [
      "Interpreting dreams as unconscious wishes",
      "Bodily repair during deep NREM",
      "Simulating threats in dream narratives",
      "Constructing stories from internally generated activity"
    ],
    "correct": 1,
    "explanation": "The text connects deep sleep with restoration.",
    "choiceExplanations": [
      "Incorrect. That is the wish/symbol account contrasted in lecture.",
      "Correct. The text connects deep sleep with restoration.",
      "Incorrect. That is a dream-function account rather than the restorative emphasis.",
      "Incorrect. That is activation–synthesis."
    ],
    "misconception": "The text connects deep sleep with restoration.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-sleep-purpose-growth-hormone",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "When does growth-hormone release mainly peak in the textbook’s nightly example?",
    "choices": [
      "Late-night REM",
      "Relaxed waking before sleep",
      "The transition out of the final REM episode",
      "Early-night deep NREM"
    ],
    "correct": 3,
    "explanation": "The figure associates the main peak with early deep sleep.",
    "choiceExplanations": [
      "Incorrect. The described main peak is in early deep NREM.",
      "Incorrect. The example connects the peak with deep sleep.",
      "Incorrect. That is not the time emphasized in the figure.",
      "Correct. The figure associates the main peak with early deep sleep."
    ],
    "misconception": "The figure associates the main peak with early deep sleep.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-sleep-purpose-stages-cooperate",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Which statement correctly summarizes the textbook’s memory account of NREM and REM?",
    "choices": [
      "REM rebound identifies memory as the sole function of REM",
      "NREM reactivates/transforms memories; REM helps stabilize them",
      "REM reactivates/transforms memories; NREM helps stabilize them",
      "NREM supports bodily repair instead of contributing to memory"
    ],
    "correct": 1,
    "explanation": "The notes give contributions to both stages.",
    "choiceExplanations": [
      "Incorrect. Rebound suggests importance without uniquely identifying one function.",
      "Correct. The notes give contributions to both stages.",
      "Incorrect. This reverses the supplied emphasis.",
      "Incorrect. The source includes NREM memory-related processes."
    ],
    "misconception": "The notes give contributions to both stages.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-sleep-purpose-threat-rehearsal",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A dream account proposes that simulated danger helps prepare responses to threats. Which explanation fits?",
    "choices": [
      "Activation–synthesis",
      "Freud’s wish/symbol account",
      "Restorative hypothesis",
      "Threat rehearsal"
    ],
    "correct": 3,
    "explanation": "This account proposes an evolved role in simulating threats.",
    "choiceExplanations": [
      "Incorrect. That account builds narrative from internally generated activity.",
      "Incorrect. That account emphasizes unconscious wishes and symbolism.",
      "Incorrect. That emphasizes bodily repair during sleep.",
      "Correct. This account proposes an evolved role in simulating threats."
    ],
    "misconception": "This account proposes an evolved role in simulating threats.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-sleep-purpose-activation-content",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A flying dream is explained as a story built around internally generated movement-related activity. Which account fits?",
    "choices": [
      "Restorative hypothesis",
      "Activation–synthesis",
      "Threat rehearsal",
      "Freud’s wish/symbol account"
    ],
    "correct": 1,
    "explanation": "The account interprets ongoing neural activity into a dream narrative.",
    "choiceExplanations": [
      "Incorrect. That explains bodily repair rather than story construction.",
      "Correct. The account interprets ongoing neural activity into a dream narrative.",
      "Incorrect. That proposes a function in simulating danger.",
      "Incorrect. That emphasizes unconscious wishes and symbols."
    ],
    "misconception": "The account interprets ongoing neural activity into a dream narrative.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-sleep-purpose-lucid-awareness",
    "lessonId": "sleep-purpose",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A dreamer realizes that the ongoing experience is a dream. Which phenomenon is described?",
    "choices": [
      "A remembered nightmare",
      "Sleep paralysis",
      "Lucid dreaming",
      "REM rebound"
    ],
    "correct": 2,
    "explanation": "Lucidity involves awareness of dreaming while the dream continues.",
    "choiceExplanations": [
      "Incorrect. Recall after waking differs from awareness during the dream.",
      "Incorrect. Sleep paralysis concerns immobility near sleep onset or waking.",
      "Correct. Lucidity involves awareness of dreaming while the dream continues.",
      "Incorrect. Rebound concerns extra subsequent REM after deprivation."
    ],
    "misconception": "Lucidity involves awareness of dreaming while the dream continues.",
    "source": "Consciousness · slides 18–21; assigned textbook notes · 6-2d"
  },
  {
    "id": "s2-circadian-no-cues",
    "lessonId": "circadian",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "What happens to the intrinsic human clock without external light cues in the textbook account?",
    "choices": [
      "It tends to run slightly shorter than 24 hours",
      "It remains exactly synchronized with a 24-hour environment",
      "It stops producing an approximately daily rhythm",
      "It tends to run slightly longer than 24 hours"
    ],
    "correct": 3,
    "explanation": "Without synchronization, the clock can drift relative to the environment.",
    "choiceExplanations": [
      "Incorrect. This reverses the direction of the free-running tendency given in the notes.",
      "Incorrect. Without external synchronization, the clock can drift.",
      "Incorrect. The endogenous rhythm continues without light cues rather than vanishing.",
      "Correct. Without synchronization, the clock can drift relative to the environment."
    ],
    "misconception": "Without synchronization, the clock can drift relative to the environment.",
    "source": "Assigned textbook notes · 6-2a"
  },
  {
    "id": "s2-circadian-west-delay",
    "lessonId": "circadian",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A traveler moves from New York to Los Angeles. Which circadian adjustment is commonly required?",
    "choices": [
      "A delay toward later sleep/wake timing",
      "An advance toward earlier sleep/wake timing",
      "A shorter sleep period without changing its clock phase",
      "A longer sleep period without changing its clock phase"
    ],
    "correct": 0,
    "explanation": "Westward travel generally calls for later internal timing.",
    "choiceExplanations": [
      "Correct. Westward travel generally calls for later internal timing.",
      "Incorrect. That is the usual eastward direction.",
      "Incorrect. Sleep duration and phase are different; the destination calls for a phase adjustment.",
      "Incorrect. Extra duration by itself does not align internal and destination timing."
    ],
    "misconception": "Westward travel generally calls for later internal timing.",
    "source": "Assigned textbook notes · 6-2a"
  },
  {
    "id": "s2-circadian-la-ny-bedtime",
    "lessonId": "circadian",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A Los Angeles traveler in New York goes to bed at 10 p.m. local time. Initially, what time does that resemble to the old clock?",
    "choices": [
      "6 p.m.",
      "7 p.m.",
      "1 a.m.",
      "10 p.m."
    ],
    "correct": 1,
    "explanation": "The notes’ three-hour eastward example makes destination bedtime feel earlier to the LA clock.",
    "choiceExplanations": [
      "Incorrect. That uses a four-hour shift rather than the stated three-hour comparison.",
      "Correct. The notes’ three-hour eastward example makes destination bedtime feel earlier to the LA clock.",
      "Incorrect. That is the opposite-direction relationship.",
      "Incorrect. That assumes the clock has already aligned."
    ],
    "misconception": "The notes’ three-hour eastward example makes destination bedtime feel earlier to the LA clock.",
    "source": "Assigned textbook notes · 6-2a"
  },
  {
    "id": "s2-circadian-north-south",
    "lessonId": "circadian",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Why does equal-distance north–south travel not create the same clock mismatch as crossing time zones?",
    "choices": [
      "Jet lag depends on the local-time shift rather than mileage",
      "Mileage determines the size of the biological-clock shift",
      "North–south travel resets the clock faster than east–west travel",
      "Travel fatigue determines the destination’s clock difference"
    ],
    "correct": 0,
    "explanation": "The mismatch concerns internal time versus destination timing.",
    "choiceExplanations": [
      "Correct. The mismatch concerns internal time versus destination timing.",
      "Incorrect. Equal mileage can involve very different local-time changes.",
      "Incorrect. The example distinguishes time-zone change, not an inherently faster reset by direction.",
      "Incorrect. Fatigue and the difference between internal time and local time are separate features."
    ],
    "misconception": "The mismatch concerns internal time versus destination timing.",
    "source": "Assigned textbook notes · 6-2a"
  },
  {
    "id": "s2-circadian-social-weekend",
    "lessonId": "circadian",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A person repeatedly uses an early weekday schedule and a much later weekend schedule. Which term fits this timing mismatch?",
    "choices": [
      "Social jet lag",
      "REM rebound",
      "Sleep paralysis",
      "Maintenance insomnia"
    ],
    "correct": 0,
    "explanation": "The term concerns inconsistent social and biological/preferred timing.",
    "choiceExplanations": [
      "Correct. The term concerns inconsistent social and biological/preferred timing.",
      "Incorrect. That is increased REM following deprivation.",
      "Incorrect. That is immobility near sleep onset or waking.",
      "Incorrect. That concerns repeated or early awakening rather than schedule divergence."
    ],
    "misconception": "The term concerns inconsistent social and biological/preferred timing.",
    "source": "Assigned textbook notes · 6-2a"
  },
  {
    "id": "s2-circadian-larks-owls",
    "lessonId": "circadian",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "What do “larks” and “owls” describe in the circadian notes?",
    "choices": [
      "Preferences for earlier versus later sleep/wake timing",
      "Preferences for NREM versus REM sleep",
      "Differences in dream recall versus dream control",
      "Differences in initial versus middle-of-night sleep difficulty"
    ],
    "correct": 0,
    "explanation": "The terms describe timing preferences.",
    "choiceExplanations": [
      "Correct. The terms describe timing preferences.",
      "Incorrect. The distinction is daily schedule rather than sleep stage.",
      "Incorrect. Those are different features of dreaming.",
      "Incorrect. Those are insomnia dimensions rather than timing preferences."
    ],
    "misconception": "The terms describe timing preferences.",
    "source": "Assigned textbook notes · 6-2a"
  },
  {
    "id": "s2-sleep-disorders-nightmare-recall",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "In a textbook vignette, an upsetting vivid REM dream is recalled after awakening. Which phenomenon fits?",
    "choices": [
      "Sleep terror",
      "Sleepwalking",
      "Sleep paralysis",
      "Nightmare"
    ],
    "correct": 3,
    "explanation": "Nightmares are associated with upsetting REM dreams and recall.",
    "choiceExplanations": [
      "Incorrect. Terrors are associated with deep NREM, confusion and little later memory.",
      "Incorrect. Sleepwalking is a deep-NREM movement event.",
      "Incorrect. That concerns immobility at a sleep boundary.",
      "Correct. Nightmares are associated with upsetting REM dreams and recall."
    ],
    "misconception": "Nightmares are associated with upsetting REM dreams and recall.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-disorders-terror-stage",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A textbook vignette describes early-night distress during deep NREM, confusion on awakening and little next-day recall. Which phenomenon fits?",
    "choices": [
      "Nightmare",
      "Lucid dreaming",
      "REM sleep behavior disorder",
      "Sleep terror"
    ],
    "correct": 3,
    "explanation": "Those stage, awareness and recall features distinguish the terror example.",
    "choiceExplanations": [
      "Incorrect. The usual nightmare example is a vividly recalled REM dream.",
      "Incorrect. Lucidity involves awareness during the continuing dream.",
      "Incorrect. That involves dream enactment during REM when normal inhibition fails.",
      "Correct. Those stage, awareness and recall features distinguish the terror example."
    ],
    "misconception": "Those stage, awareness and recall features distinguish the terror example.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-disorders-sleepwalking-stage",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which stage association is given for sleepwalking in the retained textbook?",
    "choices": [
      "NREM stage 1",
      "REM with intact atonia",
      "Relaxed waking",
      "Deep NREM stages 3/4"
    ],
    "correct": 3,
    "explanation": "The notes contrast deep-NREM walking with inhibited movement in normal REM.",
    "choiceExplanations": [
      "Incorrect. Stage 1 is light transition sleep, not the stated association.",
      "Incorrect. Intact REM inhibition ordinarily limits movement.",
      "Incorrect. Sleepwalking is described as a sleep event.",
      "Correct. The notes contrast deep-NREM walking with inhibited movement in normal REM."
    ],
    "misconception": "The notes contrast deep-NREM walking with inhibited movement in normal REM.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-disorders-paralysis-boundary",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "A textbook example describes temporary immobility around falling asleep or awakening. Which term fits?",
    "choices": [
      "REM sleep behavior disorder",
      "Sleep paralysis",
      "Cataplexy",
      "Sleepwalking"
    ],
    "correct": 1,
    "explanation": "This is REM-like immobility at a sleep boundary.",
    "choiceExplanations": [
      "Incorrect. That involves impaired inhibition permitting movement.",
      "Correct. This is REM-like immobility at a sleep boundary.",
      "Incorrect. Cataplexy describes waking muscle-tone loss with possible preserved awareness.",
      "Incorrect. That involves movement from deep NREM."
    ],
    "misconception": "This is REM-like immobility at a sleep boundary.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-disorders-onset-maintenance",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing correctly distinguishes onset and maintenance insomnia?",
    "choices": [
      "Onset: REM dream distress; maintenance: deep-NREM distress",
      "Onset: difficulty falling asleep; maintenance: repeated or early waking",
      "Onset: repeated waking; maintenance: difficulty falling asleep",
      "Onset: airway blockage; maintenance: lost breathing drive"
    ],
    "correct": 1,
    "explanation": "The distinction separates initiating and sustaining sleep.",
    "choiceExplanations": [
      "Incorrect. That distinguishes nightmares and terrors rather than insomnia dimensions.",
      "Correct. The distinction separates initiating and sustaining sleep.",
      "Incorrect. This reverses the terms.",
      "Incorrect. That is the obstructive/central apnea distinction."
    ],
    "misconception": "The distinction separates initiating and sustaining sleep.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-disorders-narcolepsy-orexin",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which cells’ loss or damage is linked to narcolepsy in the textbook?",
    "choices": [
      "Dopamine-related cells associated with limb-restlessness mechanisms",
      "Brainstem breathing-control cells",
      "Hypothalamic orexin-producing cells",
      "Pineal melatonin-producing tissue"
    ],
    "correct": 2,
    "explanation": "The notes link these sleep–wake-related cells with narcolepsy.",
    "choiceExplanations": [
      "Incorrect. The narcolepsy cell-loss account specifically names orexin-producing cells.",
      "Incorrect. Their malfunction is the central-apnea comparison rather than the named narcolepsy cell loss.",
      "Correct. The notes link these sleep–wake-related cells with narcolepsy.",
      "Incorrect. Melatonin is discussed as night-related signaling rather than the named narcolepsy cell loss."
    ],
    "misconception": "The notes link these sleep–wake-related cells with narcolepsy.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-disorders-restless-legs",
    "lessonId": "sleep-disorders",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which textbook phenomenon involves uncomfortable limb sensations and movements that disrupt rest?",
    "choices": [
      "Sleep apnea",
      "Restless legs syndrome",
      "Cataplexy",
      "Sleep paralysis"
    ],
    "correct": 1,
    "explanation": "The notes describe this discomfort/movement pattern and dopamine-related links.",
    "choiceExplanations": [
      "Incorrect. That concerns breathing interruptions.",
      "Correct. The notes describe this discomfort/movement pattern and dopamine-related links.",
      "Incorrect. Cataplexy is sudden muscle-tone loss rather than discomfort-driven movement.",
      "Incorrect. That involves immobility rather than the described movement."
    ],
    "misconception": "The notes describe this discomfort/movement pattern and dopamine-related links.",
    "source": "Assigned textbook notes · 6-2e"
  },
  {
    "id": "s2-sleep-text-scn-location",
    "lessonId": "sleep-text",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "In the site’s explicitly labeled supplemental clock background, where is the SCN located?",
    "choices": [
      "Hypothalamus",
      "Pineal gland",
      "Reticular formation",
      "Occipital cortex"
    ],
    "correct": 0,
    "explanation": "The supplemental background identifies a hypothalamic clock coordinating light-related timing.",
    "choiceExplanations": [
      "Correct. The supplemental background identifies a hypothalamic clock coordinating light-related timing.",
      "Incorrect. The pineal is associated with melatonin rather than the SCN’s location.",
      "Incorrect. Reticular systems contribute arousal rather than the named clock location.",
      "Incorrect. That is a visual cortical region, not the SCN’s location."
    ],
    "misconception": "The supplemental background identifies a hypothalamic clock coordinating light-related timing.",
    "source": "Assigned textbook notes · 6-2a,e; 6-3b; SCN/locked-in terminology retained as supplemental background"
  },
  {
    "id": "s2-sleep-text-locked-in-dimensions",
    "lessonId": "sleep-text",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "What does the supplemental locked-in example illustrate about consciousness?",
    "choices": [
      "A recognition deficit is equivalent to loss of alertness",
      "Inability to speak is equivalent to coma",
      "Awareness can remain despite profound motor impairment",
      "Wake-like eye opening establishes normal awareness"
    ],
    "correct": 2,
    "explanation": "Motor output and awareness are separable dimensions.",
    "choiceExplanations": [
      "Incorrect. Specific recognition and arousal impairments are different.",
      "Incorrect. Speech/motor limitations do not by themselves establish unarousable unconsciousness.",
      "Correct. Motor output and awareness are separable dimensions.",
      "Incorrect. Eye opening alone is not sufficient evidence in the impaired-awareness comparisons."
    ],
    "misconception": "Motor output and awareness are separable dimensions.",
    "source": "Assigned textbook notes · 6-2a,e; 6-3b; SCN/locked-in terminology retained as supplemental background"
  },
  {
    "id": "s2-sleep-text-minimally-conscious",
    "lessonId": "sleep-text",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which description fits the site’s supplemental minimally conscious comparison?",
    "choices": [
      "Irreversible loss of brain and brainstem function",
      "Limited but reproducible evidence of awareness",
      "Wake-like cycling without reliable awareness evidence",
      "Profound unarousability without normal sleep–wake cycles"
    ],
    "correct": 1,
    "explanation": "The comparison distinguishes some reproducible awareness from absent reliable behavioral evidence.",
    "choiceExplanations": [
      "Incorrect. That describes brain death rather than limited awareness.",
      "Correct. The comparison distinguishes some reproducible awareness from absent reliable behavioral evidence.",
      "Incorrect. That describes the unresponsive-wakefulness comparison.",
      "Incorrect. That describes coma in the retained distinction."
    ],
    "misconception": "The comparison distinguishes some reproducible awareness from absent reliable behavioral evidence.",
    "source": "Assigned textbook notes · 6-2a,e; 6-3b; SCN/locked-in terminology retained as supplemental background"
  },
  {
    "id": "s2-hypnosis-focus-outside",
    "lessonId": "hypnosis",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which attention pattern matches the textbook definition of hypnosis?",
    "choices": [
      "Heightened monitoring of the entire environment",
      "An automatic motor reflex independent of attention",
      "Narrowed focus with reduced awareness outside it",
      "Evenly divided attention across demanding tasks"
    ],
    "correct": 2,
    "explanation": "Hypnosis combines focused attention and increased responsiveness to suggestion.",
    "choiceExplanations": [
      "Incorrect. The source describes reduced awareness beyond the focus.",
      "Incorrect. Hypnosis is not defined as a motor reflex.",
      "Correct. Hypnosis combines focused attention and increased responsiveness to suggestion.",
      "Incorrect. That does not match narrowed focus."
    ],
    "misconception": "Hypnosis combines focused attention and increased responsiveness to suggestion.",
    "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c"
  },
  {
    "id": "s2-hypnosis-pet-conditions",
    "lessonId": "hypnosis",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "Which conditions were compared in the lecture’s hypnosis PET example?",
    "choices": [
      "Hearing a sentence and a suggestion that one had been spoken",
      "Hearing two sentences with different acoustic frequencies",
      "Reading a written sentence and hearing it spoken",
      "Speaking a sentence aloud and silently rehearsing it"
    ],
    "correct": 0,
    "explanation": "The study compared actual and suggested sentence experience.",
    "choiceExplanations": [
      "Correct. The study compared actual and suggested sentence experience.",
      "Incorrect. That does not supply the perception-versus-suggestion contrast.",
      "Incorrect. That is a presentation-modality comparison rather than actual versus suggested hearing.",
      "Incorrect. That is a production/rehearsal comparison rather than the described perception–suggestion contrast."
    ],
    "misconception": "The study compared actual and suggested sentence experience.",
    "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c"
  },
  {
    "id": "s2-hypnosis-overlap-limit",
    "lessonId": "hypnosis",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Actual and suggested sentence experiences show similar right-anterior-cingulate activity. What does the result support?",
    "choices": [
      "The regional activity verifies the sentence’s factual content",
      "Some neural processing overlaps between the experiences",
      "The experiences have identical processing across the brain",
      "The suggestion supplied an external spoken sentence"
    ],
    "correct": 1,
    "explanation": "A regional overlap does not establish complete equivalence.",
    "choiceExplanations": [
      "Incorrect. Activity similarity does not determine whether sentence content is true.",
      "Correct. A regional overlap does not establish complete equivalence.",
      "Incorrect. One similar region does not establish that broad identity.",
      "Incorrect. Suggested experience need not contain the actual auditory stimulus."
    ],
    "misconception": "A regional overlap does not establish complete equivalence.",
    "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c"
  },
  {
    "id": "s2-hypnosis-dangerous-task-control",
    "lessonId": "hypnosis",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "Nonhypnotized participants also perform a dangerous-seeming task when they trust the experimenter. Why does this comparison matter?",
    "choices": [
      "Compliance establishes that the hypnotized participants trusted the experimenter less",
      "Compliance establishes that hypnosis uniquely produced the behavior",
      "Trust and compliance provide alternatives to a mind-control explanation",
      "The task directly establishes equal suggestibility across people"
    ],
    "correct": 2,
    "explanation": "Compliance outside hypnosis challenges attributing the effect to irresistible hypnotic control.",
    "choiceExplanations": [
      "Incorrect. The outcome does not establish that direction of trust difference.",
      "Incorrect. The nonhypnotized comparison shows another route to the same behavior.",
      "Correct. Compliance outside hypnosis challenges attributing the effect to irresistible hypnotic control.",
      "Incorrect. Compliance in one comparison does not establish identical suggestibility."
    ],
    "misconception": "Compliance outside hypnosis challenges attributing the effect to irresistible hypnotic control.",
    "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c"
  },
  {
    "id": "s2-hypnosis-memory-warning",
    "lessonId": "hypnosis",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Which conclusion about hypnosis and memory matches the retained textbook?",
    "choices": [
      "Memory is not reliably sharpened and accuracy can worsen",
      "Increased confidence verifies a recovered memory",
      "Reduced Stroop interference demonstrates accurate recollection",
      "A vivid suggested experience establishes a past event"
    ],
    "correct": 0,
    "explanation": "Suggestibility is not a guarantee of accurate recollection.",
    "choiceExplanations": [
      "Correct. Suggestibility is not a guarantee of accurate recollection.",
      "Incorrect. Confidence does not establish historical accuracy.",
      "Incorrect. Color-naming interference and memory accuracy are different outcomes.",
      "Incorrect. Vividness is not evidence that the event occurred."
    ],
    "misconception": "Suggestibility is not a guarantee of accurate recollection.",
    "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c"
  },
  {
    "id": "s2-hypnosis-low-suggestibility-control",
    "lessonId": "hypnosis",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "In the hypnosis–Stroop study, highly suggestible participants showed less interference after a gibberish suggestion, while low-suggestibility participants retained it. What does the comparison show?",
    "choices": [
      "The groups differed in the physical ink colors shown",
      "The effect depends on responsiveness to suggestion",
      "The suggestion produced an equal response across the groups",
      "The suggestion improved autobiographical memory"
    ],
    "correct": 1,
    "explanation": "The groups’ different task responses make individual differences relevant.",
    "choiceExplanations": [
      "Incorrect. The described group difference concerns suggestibility and task response.",
      "Correct. The groups’ different task responses make individual differences relevant.",
      "Incorrect. That contradicts the stated difference.",
      "Incorrect. The study measures Stroop interference rather than memory accuracy."
    ],
    "misconception": "The groups’ different task responses make individual differences relevant.",
    "source": "Consciousness · slides 22–29; assigned textbook notes · 6-4c"
  },
  {
    "id": "s2-damaged-awareness-prosopagnosia-recognition",
    "lessonId": "damaged-awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which deficit defines prosopagnosia in the textbook example?",
    "choices": [
      "Recognized faces lacking familiar emotional significance",
      "A familiar setting suddenly feeling unfamiliar",
      "Failure to identify both faces and other objects equally",
      "Impaired explicit face recognition"
    ],
    "correct": 3,
    "explanation": "The notes link this deficit with fusiform-related damage.",
    "choiceExplanations": [
      "Incorrect. That is the Capgras example.",
      "Incorrect. That is the jamais-vu comparison rather than a face-identification deficit.",
      "Incorrect. The textbook term specifically emphasizes faces rather than a demonstrated general recognition loss.",
      "Correct. The notes link this deficit with fusiform-related damage."
    ],
    "misconception": "The notes link this deficit with fusiform-related damage.",
    "source": "Assigned textbook notes · 6-3a–b"
  },
  {
    "id": "s2-damaged-awareness-autonomic-dissociation",
    "lessonId": "damaged-awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "A patient cannot identify familiar faces but shows different autonomic responses to familiar and unfamiliar faces. What does this reveal?",
    "choices": [
      "Loss of explicit recognition removes familiarity processing from the entire system",
      "Familiarity-related processing can remain without explicit recognition",
      "The patient consciously identified the faces despite the stated failure",
      "The autonomic response directly reports conscious naming of the face"
    ],
    "correct": 1,
    "explanation": "Physiological and consciously reportable recognition can dissociate.",
    "choiceExplanations": [
      "Incorrect. The measured response indicates that some familiarity-related processing remains.",
      "Correct. Physiological and consciously reportable recognition can dissociate.",
      "Incorrect. The measured autonomic difference is not the same as explicit identification.",
      "Incorrect. A physiological difference is not an explicit identity report."
    ],
    "misconception": "Physiological and consciously reportable recognition can dissociate.",
    "source": "Assigned textbook notes · 6-3a–b"
  },
  {
    "id": "s2-damaged-awareness-capgras-components",
    "lessonId": "damaged-awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which component is disrupted in the textbook’s Capgras example?",
    "choices": [
      "Emotional familiarity despite visual identity recognition",
      "Visual identity recognition despite physiological familiarity",
      "Both visual identity and emotional familiarity are absent",
      "Emotional familiarity is preserved while the face’s identity is unknown"
    ],
    "correct": 0,
    "explanation": "The person recognizes the face but lacks its usual familiar emotional significance.",
    "choiceExplanations": [
      "Correct. The person recognizes the face but lacks its usual familiar emotional significance.",
      "Incorrect. That describes the prosopagnosia dissociation.",
      "Incorrect. The Capgras example preserves identity recognition while disrupting emotional familiarity.",
      "Incorrect. This does not match recognized identity with missing emotional familiarity."
    ],
    "misconception": "The person recognizes the face but lacks its usual familiar emotional significance.",
    "source": "Assigned textbook notes · 6-3a–b"
  },
  {
    "id": "s2-damaged-awareness-coma-cycles",
    "lessonId": "damaged-awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which feature distinguishes coma from unresponsive wakefulness in the retained table?",
    "choices": [
      "Coma lacks normal sleep–wake cycles",
      "Coma is defined by wake-like eye-opening cycles",
      "Coma is defined by irreversible loss of brainstem functions",
      "Coma is defined by preserved awareness with paralysis"
    ],
    "correct": 0,
    "explanation": "Unresponsive wakefulness can include wake-like cycling or eye opening.",
    "choiceExplanations": [
      "Correct. Unresponsive wakefulness can include wake-like cycling or eye opening.",
      "Incorrect. That is the contrasting unresponsive-wakefulness feature.",
      "Incorrect. That imports the brain-death distinction into coma.",
      "Incorrect. That resembles the supplemental locked-in comparison."
    ],
    "misconception": "Unresponsive wakefulness can include wake-like cycling or eye opening.",
    "source": "Assigned textbook notes · 6-3a–b"
  },
  {
    "id": "s2-damaged-awareness-movement-awareness",
    "lessonId": "damaged-awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Why is ordinary outward movement an incomplete measure of awareness in these examples?",
    "choices": [
      "A lack of outward movement establishes absence of awareness",
      "Awareness and motor output can dissociate",
      "Motor output directly specifies the content of awareness",
      "Eye opening is equivalent to conscious self-recognition"
    ],
    "correct": 1,
    "explanation": "Movement need not establish awareness, and awareness may exist without ordinary output.",
    "choiceExplanations": [
      "Incorrect. The covert-response and paralysis comparisons challenge that inference.",
      "Correct. Movement need not establish awareness, and awareness may exist without ordinary output.",
      "Incorrect. A movement does not provide that complete information.",
      "Incorrect. A wake-like behavior does not establish that level of awareness."
    ],
    "misconception": "Movement need not establish awareness, and awareness may exist without ordinary output.",
    "source": "Assigned textbook notes · 6-3a–b"
  },
  {
    "id": "s2-damaged-awareness-imagery-task-specific",
    "lessonId": "damaged-awareness",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "experiment",
    "prompt": "An unresponsive patient produces different fMRI patterns when instructed to imagine movement versus a spatial task. Why is task specificity informative?",
    "choices": [
      "Nonspecific activity would provide equivalent evidence of following each instruction",
      "Responses linked to distinct instructions suggest covert awareness",
      "The patterns establish full normal consciousness",
      "The patterns show that imagined movement was physically performed"
    ],
    "correct": 1,
    "explanation": "Instruction-related pattern differences have stronger relevance than nonspecific activity.",
    "choiceExplanations": [
      "Incorrect. Different task-appropriate patterns matter more than an undifferentiated activity change.",
      "Correct. Instruction-related pattern differences have stronger relevance than nonspecific activity.",
      "Incorrect. Covert task responses do not establish the full range of normal function.",
      "Incorrect. The task asks for imagery, not demonstrated overt movement."
    ],
    "misconception": "Instruction-related pattern differences have stronger relevance than nonspecific activity.",
    "source": "Assigned textbook notes · 6-3a–b"
  },
  {
    "id": "s2-seizures-focal-origin",
    "lessonId": "seizures",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which description fits focal/partial onset in the textbook’s simplified classification?",
    "choices": [
      "An event begins with distributed thalamocortical involvement",
      "An event is classified from rhythmic movement without onset information",
      "An event is classified from duration of lost awareness without onset information",
      "An event begins in a restricted neural region"
    ],
    "correct": 3,
    "explanation": "Focal onset contrasts with the broader distributed circuitry described for generalized events.",
    "choiceExplanations": [
      "Incorrect. That is the generalized contrast in these notes.",
      "Incorrect. Movement pattern does not establish where an event began.",
      "Incorrect. Duration and awareness do not establish localized onset.",
      "Correct. Focal onset contrasts with the broader distributed circuitry described for generalized events."
    ],
    "misconception": "Focal onset contrasts with the broader distributed circuitry described for generalized events.",
    "source": "Assigned textbook notes · 6-3c"
  },
  {
    "id": "s2-seizures-aura",
    "lessonId": "seizures",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "What does an aura refer to in the focal-seizure discussion?",
    "choices": [
      "The rhythmic-contraction phase of a tonic–clonic event",
      "The brief loss of awareness used to describe an absence event",
      "An unusual sensory or experiential sign associated with the event",
      "The recovery period after sustained and rhythmic contractions"
    ],
    "correct": 2,
    "explanation": "The text describes possible experiences around a focal event.",
    "choiceExplanations": [
      "Incorrect. That is the clonic phase rather than the sensory or experiential aura.",
      "Incorrect. That is the absence-event distinction rather than an aura definition.",
      "Correct. The text describes possible experiences around a focal event.",
      "Incorrect. That is part of the tonic–clonic sequence rather than the aura term."
    ],
    "misconception": "The text describes possible experiences around a focal event.",
    "source": "Assigned textbook notes · 6-3c"
  },
  {
    "id": "s2-seizures-gaba-inhibition",
    "lessonId": "seizures",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "How can reduced GABA-related inhibition contribute to uncontrolled neural activity?",
    "choices": [
      "Increased GABA-related inhibition permits excessive activity by weakening restraint",
      "Reduced inhibition describes increased excitatory transmitter release directly",
      "Reduced restraint can permit excessive activity",
      "Reduced inhibition suppresses the remaining activity"
    ],
    "correct": 2,
    "explanation": "The text links reduced inhibition with excessive excitation.",
    "choiceExplanations": [
      "Incorrect. Increasing inhibitory signaling strengthens restraint rather than supplying the reduced-inhibition mechanism.",
      "Incorrect. Less inhibitory restraint can increase activity without establishing increased excitatory release.",
      "Correct. The text links reduced inhibition with excessive excitation.",
      "Incorrect. This reverses the direction of the proposed mechanism."
    ],
    "misconception": "The text links reduced inhibition with excessive excitation.",
    "source": "Assigned textbook notes · 6-3c"
  },
  {
    "id": "s2-seizures-familiarity-direction",
    "lessonId": "seizures",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which pairing correctly distinguishes déjà vu from jamais vu?",
    "choices": [
      "Déjà vu: new feels familiar; jamais vu: new feels familiar",
      "Déjà vu: familiar feels unfamiliar; jamais vu: familiar feels unfamiliar",
      "Déjà vu: new feels familiar; jamais vu: familiar feels unfamiliar",
      "Déjà vu: familiar feels unfamiliar; jamais vu: new feels familiar"
    ],
    "correct": 2,
    "explanation": "The two terms describe opposite familiarity mismatches.",
    "choiceExplanations": [
      "Incorrect. The second part repeats déjà vu instead of defining jamais vu.",
      "Incorrect. The first part repeats jamais vu instead of defining déjà vu.",
      "Correct. The two terms describe opposite familiarity mismatches.",
      "Incorrect. This reverses the definitions."
    ],
    "misconception": "The two terms describe opposite familiarity mismatches.",
    "source": "Assigned textbook notes · 6-3c"
  },
  {
    "id": "s2-seizures-tonic-clonic-order",
    "lessonId": "seizures",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which sequence matches the textbook description of a tonic–clonic event?",
    "choices": [
      "Sustained contraction → rhythmic contractions → recovery",
      "Rhythmic contractions → sustained contraction → recovery",
      "Brief awareness interruption → blinking → immediate continuation",
      "Preserved awareness → sudden tone loss → ordinary waking"
    ],
    "correct": 0,
    "explanation": "The text describes tonic contraction followed by clonic rhythmic movement.",
    "choiceExplanations": [
      "Correct. The text describes tonic contraction followed by clonic rhythmic movement.",
      "Incorrect. This reverses the tonic and clonic phases.",
      "Incorrect. That better matches the absence example.",
      "Incorrect. That resembles the cataplexy distinction."
    ],
    "misconception": "The text describes tonic contraction followed by clonic rhythmic movement.",
    "source": "Assigned textbook notes · 6-3c"
  },
  {
    "id": "s2-drug-classes-homeostasis",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "In the textbook account, how can repeated drug exposure produce tolerance?",
    "choices": [
      "Compensatory responses amplify the acute effect of each dose",
      "The drug’s receptor action becomes stronger after exposure",
      "Clearance after a single dose defines tolerance",
      "Compensatory responses oppose the drug’s disruption of equilibrium"
    ],
    "correct": 3,
    "explanation": "Biological and learned compensation can reduce the effect of a repeated dose.",
    "choiceExplanations": [
      "Incorrect. Tolerance involves a reduced response, rather than amplification of the acute effect.",
      "Incorrect. That would increase the response rather than explain the stated reduction.",
      "Incorrect. Tolerance concerns compensatory responses to repeated exposure rather than ordinary removal of one dose.",
      "Correct. Biological and learned compensation can reduce the effect of a repeated dose."
    ],
    "misconception": "Biological and learned compensation can reduce the effect of a repeated dose.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-withdrawal-definition",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "After habitual use stops, a person experiences effects opposite to the drug’s acute effects. Which concept describes this pattern?",
    "choices": [
      "Addiction",
      "Withdrawal",
      "Tolerance",
      "Acute intoxication"
    ],
    "correct": 1,
    "explanation": "Withdrawal can reveal compensatory changes that persist after the drug is removed.",
    "choiceExplanations": [
      "Incorrect. Compulsive use despite harm is distinct from the cessation-related effect described.",
      "Correct. Withdrawal can reveal compensatory changes that persist after the drug is removed.",
      "Incorrect. Tolerance is a reduced response to a dose during repeated exposure.",
      "Incorrect. Acute intoxication concerns the drug’s present action rather than effects after stopping."
    ],
    "misconception": "Withdrawal can reveal compensatory changes that persist after the drug is removed.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-addiction-definition",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which pattern meets the textbook’s definition of addiction?",
    "choices": [
      "A dose temporarily alters conscious experience",
      "Compulsive use continues despite negative consequences",
      "The same dose produces a weaker effect after repeated use",
      "Stopping habitual use produces rebound symptoms"
    ],
    "correct": 1,
    "explanation": "The definition concerns persistent compulsive use despite harm.",
    "choiceExplanations": [
      "Incorrect. That is a psychoactive effect and does not establish compulsive use despite harm.",
      "Correct. The definition concerns persistent compulsive use despite harm.",
      "Incorrect. That defines tolerance.",
      "Incorrect. That defines withdrawal."
    ],
    "misconception": "The definition concerns persistent compulsive use despite harm.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-reward-frontal",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which interaction fits the textbook’s account of persistent drug use?",
    "choices": [
      "Immediate reward seeking competes with frontal evaluation of consequences",
      "Frontal evaluation is the same process as immediate reward seeking",
      "Reward activity measures how carefully consequences were considered",
      "Craving establishes that reflective control has become stronger"
    ],
    "correct": 0,
    "explanation": "Reward circuits and reflective control contribute different influences on behavior.",
    "choiceExplanations": [
      "Correct. Reward circuits and reflective control contribute different influences on behavior.",
      "Incorrect. The account distinguishes those influences rather than equating them.",
      "Incorrect. Reward activity is not a direct measure of reflective evaluation.",
      "Incorrect. Craving can favor continued use; it does not establish stronger evaluation of consequences."
    ],
    "misconception": "Reward circuits and reflective control contribute different influences on behavior.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-caffeine-block-inhibitor",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "How can caffeine increase alertness while acting as an antagonist?",
    "choices": [
      "It blocks dopamine reuptake at transporters",
      "It activates acetylcholine receptors",
      "It blocks adenosine’s inhibitory action",
      "It mimics adenosine’s inhibitory action"
    ],
    "correct": 2,
    "explanation": "Blocking an inhibitory influence can increase excitation without mimicking that receptor’s normal signal.",
    "choiceExplanations": [
      "Incorrect. That is the cocaine mechanism emphasized in the notes.",
      "Incorrect. That is the nicotine mechanism emphasized in the notes.",
      "Correct. Blocking an inhibitory influence can increase excitation without mimicking that receptor’s normal signal.",
      "Incorrect. Mimicking the inhibitor would not explain the source’s blockade mechanism."
    ],
    "misconception": "Blocking an inhibitory influence can increase excitation without mimicking that receptor’s normal signal.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-nicotine-ach",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which synaptic mechanism does the textbook attribute to nicotine?",
    "choices": [
      "Blocking dopamine transporters",
      "Reversing serotonin transporters after disrupting storage",
      "Mimicking acetylcholine at relevant receptors",
      "Blocking adenosine receptors"
    ],
    "correct": 2,
    "explanation": "Nicotine is a receptor-activation example in these notes.",
    "choiceExplanations": [
      "Incorrect. That describes cocaine.",
      "Incorrect. That describes the MDMA mechanism emphasized here.",
      "Correct. Nicotine is a receptor-activation example in these notes.",
      "Incorrect. That describes caffeine."
    ],
    "misconception": "Nicotine is a receptor-activation example in these notes.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-cocaine-consequence",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "application",
    "prompt": "Cocaine blocks dopamine reuptake. What follows directly at the synapse?",
    "choices": [
      "Dopamine remains available in the synaptic gap longer",
      "Dopamine is removed from the gap more quickly",
      "Dopamine receptors are blocked from responding",
      "The presynaptic cell necessarily releases more dopamine"
    ],
    "correct": 0,
    "explanation": "Blocking retrieval prolongs transmitter availability outside the presynaptic cell.",
    "choiceExplanations": [
      "Correct. Blocking retrieval prolongs transmitter availability outside the presynaptic cell.",
      "Incorrect. That reverses the consequence of blocking reuptake.",
      "Incorrect. A transporter blockade differs from blocking postsynaptic receptors.",
      "Incorrect. Blocked retrieval prolongs availability without by itself establishing increased release."
    ],
    "misconception": "Blocking retrieval prolongs transmitter availability outside the presynaptic cell.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-cocaine-amphetamine",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "Which comparison matches the mechanisms emphasized for cocaine and amphetamine?",
    "choices": [
      "Cocaine blocks retrieval; amphetamine alters release, storage and transporter direction",
      "Cocaine alters vesicular storage; amphetamine blocks adenosine receptors",
      "Cocaine activates acetylcholine receptors; amphetamine blocks retrieval",
      "Cocaine blocks retrieval; amphetamine activates opioid receptors"
    ],
    "correct": 0,
    "explanation": "Both increase extracellular dopamine through different emphasized mechanisms.",
    "choiceExplanations": [
      "Correct. Both increase extracellular dopamine through different emphasized mechanisms.",
      "Incorrect. This misassigns both mechanisms.",
      "Incorrect. The cocaine part is nicotine’s receptor mechanism and the amphetamine account is incomplete.",
      "Incorrect. The first part fits, but opioid-receptor activation is not the amphetamine mechanism."
    ],
    "misconception": "Both increase extracellular dopamine through different emphasized mechanisms.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-depressant-disinhibition",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "Why can a CNS depressant such as alcohol initially produce more talkative or impulsive behavior?",
    "choices": [
      "Increased talkativeness establishes a stimulant synaptic mechanism",
      "Enhanced GABA signaling improves reflective restraint",
      "Reduced glutamate excitation increases precise coordination",
      "Depressing cortical restraint can release behavior"
    ],
    "correct": 3,
    "explanation": "Reduced inhibitory control over behavior can look stimulating despite an overall depressant action.",
    "choiceExplanations": [
      "Incorrect. Observable behavior does not by itself establish the drug’s molecular class.",
      "Incorrect. The example concerns reduced behavioral control, not improved restraint.",
      "Incorrect. The notes associate alcohol with impaired coordination rather than improved precision.",
      "Correct. Reduced inhibitory control over behavior can look stimulating despite an overall depressant action."
    ],
    "misconception": "Reduced inhibitory control over behavior can look stimulating despite an overall depressant action.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-opioid-opiate",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "How do the terms opioid and opiate relate in these notes?",
    "choices": [
      "Opioids are a synthetic subset of the broader opiate category",
      "Opioid names poppy origin; opiate names the broader receptor-acting family",
      "Opioid and opiate name separate receptor families",
      "Opiates are a poppy-derived subset of the broader opioid category"
    ],
    "correct": 3,
    "explanation": "Opioid includes natural and synthetic agents acting at the relevant receptors.",
    "choiceExplanations": [
      "Incorrect. This reverses the broader category and wrongly excludes natural opioids.",
      "Incorrect. This misassigns origin and broader receptor-based category.",
      "Incorrect. The relationship is a source-defined subset within the broader opioid category.",
      "Correct. Opioid includes natural and synthetic agents acting at the relevant receptors."
    ],
    "misconception": "Opioid includes natural and synthetic agents acting at the relevant receptors.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-thc-anandamide",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "THC’s receptor action is related to which endogenous signaling system in the textbook?",
    "choices": [
      "Cholinergic signaling involving acetylcholine",
      "Adenosine signaling that caffeine antagonizes",
      "Cannabinoid signaling involving anandamide",
      "Opioid signaling involving endorphins"
    ],
    "correct": 2,
    "explanation": "THC acts at cannabinoid receptors associated with endogenous signals such as anandamide.",
    "choiceExplanations": [
      "Incorrect. That is the nicotine comparison.",
      "Incorrect. That is the caffeine comparison.",
      "Correct. THC acts at cannabinoid receptors associated with endogenous signals such as anandamide.",
      "Incorrect. That is the opioid comparison rather than THC’s primary receptor system here."
    ],
    "misconception": "THC acts at cannabinoid receptors associated with endogenous signals such as anandamide.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-lsd-serotonin",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which receptor system is emphasized for LSD in the textbook drug comparison?",
    "choices": [
      "Opioid-peptide receptors",
      "Serotonin-related receptors",
      "Acetylcholine-related receptors",
      "Adenosine-related receptors"
    ],
    "correct": 1,
    "explanation": "The source links LSD with serotonin receptors.",
    "choiceExplanations": [
      "Incorrect. Those are the opioid mechanism comparison.",
      "Correct. The source links LSD with serotonin receptors.",
      "Incorrect. That is the nicotine receptor comparison.",
      "Incorrect. Those are blocked by caffeine."
    ],
    "misconception": "The source links LSD with serotonin receptors.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-mdma-serotonin",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "recall",
    "prompt": "Which mechanism is emphasized for MDMA in the notes?",
    "choices": [
      "Endorphin mimicry activates opioid receptors",
      "Disrupted serotonin storage and reversed transport promote release",
      "Adenosine blockade removes inhibitory signaling",
      "Acetylcholine mimicry activates relevant receptors"
    ],
    "correct": 1,
    "explanation": "MDMA’s emphasized mechanism increases extracellular serotonin by altering storage and transport.",
    "choiceExplanations": [
      "Incorrect. That is the opioid mechanism.",
      "Correct. MDMA’s emphasized mechanism increases extracellular serotonin by altering storage and transport.",
      "Incorrect. That is the caffeine mechanism.",
      "Incorrect. That is the nicotine mechanism."
    ],
    "misconception": "MDMA’s emphasized mechanism increases extracellular serotonin by altering storage and transport.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-medication-generalization",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "misconception",
    "prompt": "The textbook says concentration changes from stimulant medications can occur in people without ADHD. Which inference is warranted?",
    "choices": [
      "A concentration change distinguishes receptor activation from transporter blockade",
      "A concentration change demonstrates tolerance after repeated use",
      "A concentration change does not by itself establish an ADHD diagnosis",
      "A concentration change identifies the person’s original dopamine level"
    ],
    "correct": 2,
    "explanation": "The same broad effect can occur in people with different diagnostic histories.",
    "choiceExplanations": [
      "Incorrect. The outcome does not identify which molecular mechanism produced it.",
      "Incorrect. An acute improvement does not establish the repeated-exposure adaptation defining tolerance.",
      "Correct. The same broad effect can occur in people with different diagnostic histories.",
      "Incorrect. The behavioral effect does not directly measure a preexisting transmitter level."
    ],
    "misconception": "The same broad effect can occur in people with different diagnostic histories.",
    "source": "Assigned textbook notes · 6-4a–b"
  },
  {
    "id": "s2-drug-classes-route-nicotine",
    "lessonId": "drug-classes",
    "unit": "Consciousness",
    "kind": "combined",
    "type": "comparison",
    "prompt": "What difference does Figure 6.19 emphasize between smoking and chewing nicotine?",
    "choices": [
      "Chewing produces a quicker rise and a more sustained concentration than smoking",
      "Smoking produces a quicker rise; chewing produces a slower, more sustained concentration",
      "Chewing produces a quicker rise; smoking produces a slower, more sustained concentration",
      "Smoking produces a quicker rise and a more sustained concentration than chewing"
    ],
    "correct": 1,
    "explanation": "Route affects the time course of delivery.",
    "choiceExplanations": [
      "Incorrect. The more sustained chewing concentration fits, but smoking produces the quicker rise.",
      "Correct. Route affects the time course of delivery.",
      "Incorrect. This reverses the source’s time-course comparison.",
      "Incorrect. The quicker smoking rise fits, but the more sustained concentration is associated with chewing."
    ],
    "misconception": "Route affects the time course of delivery.",
    "source": "Assigned textbook notes · 6-4a–b"
  }
];
globalThis.OLD_SENSES_FEEDBACK = {
  "sensation-q0": {
    "prompt": "A photoreceptor converts incoming light into a neural signal. Which stage is illustrated?",
    "choices": [
      "Transduction",
      "Transmission",
      "Perceptual organization",
      "Sensory adaptation"
    ],
    "explanation": "Transduction converts stimulus energy into neural signaling.",
    "choiceExplanations": [
      "Correct. Transduction converts stimulus energy into neural signaling.",
      "Incorrect. Transmission carries an already-created signal along a pathway.",
      "Incorrect. Organization interprets relations among signals rather than converting light energy.",
      "Incorrect. Adaptation is a change in responsiveness to continuing stimulation."
    ],
    "misconception": "Transduction converts stimulus energy into neural signaling."
  },
  "sensation-q1": {
    "prompt": "A reader identifies an ambiguous handwritten letter by using the surrounding sentence. Which process contributes?",
    "choices": [
      "Top-down processing",
      "Bottom-up feature analysis",
      "Sensory adaptation",
      "Transduction"
    ],
    "explanation": "Knowledge of the sentence helps interpret an ambiguous input.",
    "choiceExplanations": [
      "Correct. Knowledge of the sentence helps interpret an ambiguous input.",
      "Incorrect. Feature analysis begins with the stimulus; the decisive cue here is sentence context.",
      "Incorrect. Continuing stimulation can change responsiveness, but that is not the use of sentence meaning.",
      "Incorrect. Conversion into neural signals does not explain the contextual interpretation."
    ],
    "misconception": "Knowledge of the sentence helps interpret an ambiguous input."
  },
  "sensation-q2": {
    "prompt": "Several gaps interrupt a circular outline, but the viewer perceives a complete circle. Which grouping principle fits?",
    "choices": [
      "Closure",
      "Proximity",
      "Similarity",
      "Continuity"
    ],
    "explanation": "Closure fills gaps in an incomplete form.",
    "choiceExplanations": [
      "Correct. Closure fills gaps in an incomplete form.",
      "Incorrect. Proximity groups nearby elements; it does not specifically describe completion of missing contour.",
      "Incorrect. Similarity groups elements with shared features.",
      "Incorrect. Continuity favors smoothly continuing paths, while this example emphasizes filling gaps."
    ],
    "misconception": "Closure fills gaps in an incomplete form."
  },
  "vision-q0": {
    "prompt": "Which retinal cells initiate light transduction?",
    "choices": [
      "Rods and cones",
      "Bipolar and ganglion cells",
      "Ganglion cells and optic-nerve axons",
      "Iris muscles and lens fibers"
    ],
    "explanation": "These photoreceptors convert light into neural signals.",
    "choiceExplanations": [
      "Correct. These photoreceptors convert light into neural signals.",
      "Incorrect. These participate in retinal processing after the photoreceptors.",
      "Incorrect. These carry retinal output rather than initiate phototransduction.",
      "Incorrect. These regulate entry and focus rather than transduce light."
    ],
    "misconception": "These photoreceptors convert light into neural signals."
  },
  "vision-q1": {
    "prompt": "Which sequence gives the main visual route emphasized in the lesson?",
    "choices": [
      "Retina → optic nerve → thalamus → visual cortex",
      "Retina → thalamus → optic nerve → visual cortex",
      "Retina → optic nerve → visual cortex → thalamus",
      "Visual cortex → optic nerve → retina → thalamus"
    ],
    "explanation": "This preserves the order of retinal output, relay and cortical processing.",
    "choiceExplanations": [
      "Correct. This preserves the order of retinal output, relay and cortical processing.",
      "Incorrect. The optic nerve precedes the thalamic relay.",
      "Incorrect. The main relay precedes visual cortex.",
      "Incorrect. This reverses sensory flow into the brain."
    ],
    "misconception": "This preserves the order of retinal output, relay and cortical processing."
  },
  "vision-q2": {
    "prompt": "Which physical property of visible light is most directly associated with hue?",
    "choices": [
      "Wavelength",
      "Intensity",
      "Spectral mixture or purity",
      "Duration of the light"
    ],
    "explanation": "Wavelength is the lesson’s physical counterpart of hue.",
    "choiceExplanations": [
      "Correct. Wavelength is the lesson’s physical counterpart of hue.",
      "Incorrect. Intensity is associated with brightness rather than hue.",
      "Incorrect. Mixture/purity contributes to saturation rather than the principal hue association asked here.",
      "Incorrect. Duration is the time a light persists rather than its spectral hue property."
    ],
    "misconception": "Wavelength is the lesson’s physical counterpart of hue."
  },
  "vision-q3": {
    "prompt": "Which division of labor best fits recognizing a mug and guiding a reach toward it?",
    "choices": [
      "Ventral processing contributes to recognition; dorsal processing contributes to the reach",
      "Dorsal processing contributes to recognition; ventral processing contributes to the reach",
      "Ventral processing contributes to both tasks; dorsal processing regulates the pupil",
      "Dorsal processing contributes to both tasks; ventral processing adjusts the lens"
    ],
    "explanation": "The ventral and dorsal streams emphasize what the object is and spatial/action guidance.",
    "choiceExplanations": [
      "Correct. The ventral and dorsal streams emphasize what the object is and spatial/action guidance.",
      "Incorrect. This reverses the emphasized roles.",
      "Incorrect. Pupil regulation is not the dorsal-stream function described.",
      "Incorrect. Accommodation is not the ventral-stream function described."
    ],
    "misconception": "The ventral and dorsal streams emphasize what the object is and spatial/action guidance."
  },
  "color-q0": {
    "prompt": "Which account begins color coding with three cone classes sensitive to different portions of the spectrum?",
    "choices": [
      "Trichromatic theory",
      "Opponent-process theory",
      "Color constancy",
      "Sensory adaptation"
    ],
    "explanation": "Trichromatic theory emphasizes relative activation of three cone classes.",
    "choiceExplanations": [
      "Correct. Trichromatic theory emphasizes relative activation of three cone classes.",
      "Incorrect. Opponent processing emphasizes paired downstream comparisons rather than the initial three classes.",
      "Incorrect. Color constancy concerns stable color appearance across illumination rather than the initial three-class mechanism.",
      "Incorrect. Adaptation concerns responsiveness after stimulation rather than three cone classes."
    ],
    "misconception": "Trichromatic theory emphasizes relative activation of three cone classes."
  },
  "color-q1": {
    "prompt": "After looking at red, a viewer sees a greenish afterimage on a neutral surface. Which account most directly explains the opponent hue?",
    "choices": [
      "Opponent-process theory",
      "Trichromatic theory by itself",
      "Brightness constancy",
      "Color deficiency"
    ],
    "explanation": "Adaptation in red–green opponent processing supports the opposing afterimage.",
    "choiceExplanations": [
      "Correct. Adaptation in red–green opponent processing supports the opposing afterimage.",
      "Incorrect. Cone classes explain initial spectral coding but the opponent relationship requires the paired-processing account.",
      "Incorrect. Stable brightness across illumination does not explain the reversed hue.",
      "Incorrect. A transient opponent afterimage does not establish impaired cone discrimination."
    ],
    "misconception": "Adaptation in red–green opponent processing supports the opposing afterimage."
  },
  "color-q2": {
    "prompt": "Which pair is one of the color-opponent pairs emphasized in the lesson?",
    "choices": [
      "Blue–yellow",
      "Blue–red",
      "Green–yellow",
      "Red–yellow"
    ],
    "explanation": "The lesson pairs blue with yellow and red with green.",
    "choiceExplanations": [
      "Correct. The lesson pairs blue with yellow and red with green.",
      "Incorrect. Blue and red are not paired in the stated opponent channels.",
      "Incorrect. Green is paired with red rather than yellow.",
      "Incorrect. Red is paired with green rather than yellow."
    ],
    "misconception": "The lesson pairs blue with yellow and red with green."
  },
  "depth-q0": {
    "prompt": "From a moving car, nearby trees sweep across the view faster than distant hills. Which depth cue is illustrated?",
    "choices": [
      "Motion parallax",
      "Binocular disparity",
      "Linear perspective",
      "Relative size"
    ],
    "explanation": "Relative motion across the image supplies distance information during observer movement.",
    "choiceExplanations": [
      "Correct. Relative motion across the image supplies distance information during observer movement.",
      "Incorrect. Disparity compares the two eyes’ images rather than image motion over time.",
      "Incorrect. Perspective concerns convergence of parallel lines.",
      "Incorrect. Relative size compares image size under an assumption about actual object size."
    ],
    "misconception": "Relative motion across the image supplies distance information during observer movement."
  },
  "depth-q1": {
    "prompt": "The visual system compares the slightly different images received by the two eyes. Which depth cue is used?",
    "choices": [
      "Binocular disparity",
      "Convergence",
      "Motion parallax",
      "Interposition"
    ],
    "explanation": "The difference between the eyes’ views supplies binocular depth information.",
    "choiceExplanations": [
      "Correct. The difference between the eyes’ views supplies binocular depth information.",
      "Incorrect. Convergence concerns inward eye positioning rather than the difference between retinal images.",
      "Incorrect. Motion parallax uses relative image movement.",
      "Incorrect. Interposition uses which object blocks another."
    ],
    "misconception": "The difference between the eyes’ views supplies binocular depth information."
  },
  "depth-q2": {
    "prompt": "Parallel railroad tracks appear to converge in the distance. Which depth cue fits?",
    "choices": [
      "Linear perspective",
      "Relative size",
      "Texture gradient",
      "Binocular disparity"
    ],
    "explanation": "Projected parallel lines appear to converge with distance.",
    "choiceExplanations": [
      "Correct. Projected parallel lines appear to converge with distance.",
      "Incorrect. Relative size compares objects assumed to have comparable real size.",
      "Incorrect. Texture elements appear denser and finer with distance.",
      "Incorrect. Disparity compares the two eyes’ views."
    ],
    "misconception": "Projected parallel lines appear to converge with distance."
  },
  "illusions-q0": {
    "prompt": "What assumption contributes to the striking apparent size difference between people in an Ames room?",
    "choices": [
      "The room is interpreted as ordinary geometry, distorting inferred distances",
      "The viewers’ retinas contain people of equal image size",
      "Equal physical size requires equal retinal image size at unequal distances",
      "The room is interpreted as distorted, correcting the apparent distance"
    ],
    "explanation": "A misleading room geometry supports mistaken distance and size interpretations.",
    "choiceExplanations": [
      "Correct. A misleading room geometry supports mistaken distance and size interpretations.",
      "Incorrect. The illusion does not require equal retinal size.",
      "Incorrect. Retinal size also depends on distance rather than physical size alone.",
      "Incorrect. Accurately detecting the unusual geometry would weaken the misleading interpretation."
    ],
    "misconception": "A misleading room geometry supports mistaken distance and size interpretations."
  },
  "illusions-q1": {
    "prompt": "The hollow T-Rex face appears to follow the viewer. Which interpretation contributes to the effect?",
    "choices": [
      "A concave surface is perceived as a convex face",
      "A convex surface is perceived as a concave face",
      "The face’s image is perceived as shrinking with distance",
      "Lens refocusing is interpreted as a change in the face’s orientation"
    ],
    "explanation": "The depth reversal supports the misleading apparent movement.",
    "choiceExplanations": [
      "Correct. The depth reversal supports the misleading apparent movement.",
      "Incorrect. This reverses the relevant depth interpretation.",
      "Incorrect. The key effect is depth reversal rather than ordinary relative size.",
      "Incorrect. Accommodation changes focus rather than supplying the concave-to-convex depth reversal."
    ],
    "misconception": "The depth reversal supports the misleading apparent movement."
  },
  "illusions-q2": {
    "prompt": "What do persistent visual illusions reveal about perception?",
    "choices": [
      "Useful interpretation rules can produce systematic errors in unusual displays",
      "Knowing the physical construction guarantees a corrected percept",
      "The retinal image supplies a complete interpretation without assumptions",
      "A misleading percept establishes that the stimulus was not detected"
    ],
    "explanation": "The same assumptions that organize ordinary scenes can mislead in constructed ones.",
    "choiceExplanations": [
      "Correct. The same assumptions that organize ordinary scenes can mislead in constructed ones.",
      "Incorrect. Some illusions persist despite explicit knowledge.",
      "Incorrect. Illusions expose the contribution of interpretation.",
      "Incorrect. Detection can occur while interpretation is misleading."
    ],
    "misconception": "The same assumptions that organize ordinary scenes can mislead in constructed ones."
  },
  "visual-organization-q0": {
    "prompt": "A viewer sees a full circle in a broken circular outline. Which principle explains this organization?",
    "choices": [
      "Closure",
      "Proximity",
      "Similarity",
      "Figure–ground organization"
    ],
    "explanation": "Closure completes missing parts of a form.",
    "choiceExplanations": [
      "Correct. Closure completes missing parts of a form.",
      "Incorrect. Proximity concerns grouping by spatial closeness.",
      "Incorrect. Similarity concerns grouping by shared features.",
      "Incorrect. Figure–ground organization distinguishes a selected object from its background."
    ],
    "misconception": "Closure completes missing parts of a form."
  },
  "visual-organization-q1": {
    "prompt": "A cultural group shows a different average susceptibility to an illusion. What conclusion about a particular member is justified?",
    "choices": [
      "The group average does not determine that person’s response",
      "That person’s response can be read directly from the group average",
      "The average difference establishes a genetic explanation",
      "The average difference establishes identical interpretation within the group"
    ],
    "explanation": "Group-level patterns allow individual variation.",
    "choiceExplanations": [
      "Correct. Group-level patterns allow individual variation.",
      "Incorrect. An average does not specify each member’s score.",
      "Incorrect. The comparison does not isolate genes from experience or context.",
      "Incorrect. A between-group difference does not eliminate within-group differences."
    ],
    "misconception": "Group-level patterns allow individual variation."
  },
  "hearing-q0": {
    "prompt": "Where does the auditory pathway convert mechanical vibration into receptor signaling?",
    "choices": [
      "Cochlear hair cells",
      "Eardrum",
      "Middle-ear ossicles",
      "Auditory cortex"
    ],
    "explanation": "Hair-cell bending initiates transduction in the cochlea.",
    "choiceExplanations": [
      "Correct. Hair-cell bending initiates transduction in the cochlea.",
      "Incorrect. The eardrum transfers sound-driven vibration.",
      "Incorrect. The ossicles transmit mechanical vibration toward the inner ear.",
      "Incorrect. Auditory cortex processes signals after peripheral transduction."
    ],
    "misconception": "Hair-cell bending initiates transduction in the cochlea."
  },
  "hearing-q1": {
    "prompt": "Holding other properties constant, increasing a sound wave’s frequency primarily changes which perceptual property?",
    "choices": [
      "Pitch",
      "Loudness",
      "Apparent source direction",
      "Timbre from harmonic composition"
    ],
    "explanation": "Higher frequency is associated with higher pitch.",
    "choiceExplanations": [
      "Correct. Higher frequency is associated with higher pitch.",
      "Incorrect. Loudness is most directly associated with amplitude.",
      "Incorrect. Direction relies on spatial cues such as differences between ears.",
      "Incorrect. Timbre depends on spectral composition, not a simple frequency increase by itself."
    ],
    "misconception": "Higher frequency is associated with higher pitch."
  },
  "hearing-q2": {
    "prompt": "A sound reaches the right ear earlier and more intensely than the left. These differences provide cues to what?",
    "choices": [
      "Source location",
      "Source pitch",
      "Source identity from timbre",
      "Source duration"
    ],
    "explanation": "Timing and intensity differences between ears contribute to localization.",
    "choiceExplanations": [
      "Correct. Timing and intensity differences between ears contribute to localization.",
      "Incorrect. Pitch depends principally on frequency coding.",
      "Incorrect. Timbre concerns spectral composition rather than these ear differences.",
      "Incorrect. Duration concerns how long the sound persists rather than which ear receives it first."
    ],
    "misconception": "Timing and intensity differences between ears contribute to localization."
  },
  "hearing-q3": {
    "prompt": "Where does a high-frequency sound produce its strongest basilar-membrane response in the simplified place account?",
    "choices": [
      "Near the stiff base by the oval window",
      "Near the flexible apex far from the oval window",
      "Equally along the membrane without a favored place",
      "In the middle-ear ossicles rather than on the basilar membrane"
    ],
    "explanation": "High frequencies favor the base; lower frequencies favor the more flexible apex.",
    "choiceExplanations": [
      "Correct. High frequencies favor the base; lower frequencies favor the more flexible apex.",
      "Incorrect. That is the lower-frequency region.",
      "Incorrect. Place coding depends on a location-dependent response.",
      "Incorrect. Ossicles transfer vibration but are not the frequency-place map."
    ],
    "misconception": "High frequencies favor the base; lower frequencies favor the more flexible apex."
  },
  "auditory-illusions-q0": {
    "prompt": "The same speech sound is heard differently when the speaker’s visible mouth movement changes. Which effect fits?",
    "choices": [
      "McGurk effect",
      "Ventriloquism effect",
      "Octave illusion",
      "Absolute pitch"
    ],
    "explanation": "Visible articulation changes auditory speech perception.",
    "choiceExplanations": [
      "Correct. Visible articulation changes auditory speech perception.",
      "Incorrect. Ventriloquism concerns perceived source location rather than speech identity.",
      "Incorrect. The octave illusion concerns organization of alternating pitch sequences.",
      "Incorrect. Absolute pitch concerns identifying a pitch without a reference tone."
    ],
    "misconception": "Visible articulation changes auditory speech perception."
  },
  "auditory-illusions-q1": {
    "prompt": "The lesson associates a tendency to experience musical frisson with stronger connectivity involving which region?",
    "choices": [
      "Anterior insular cortex",
      "Primary visual cortex",
      "Primary somatosensory cortex",
      "Primary auditory cortex alone"
    ],
    "explanation": "This is the region named in the lecture’s frisson association.",
    "choiceExplanations": [
      "Correct. This is the region named in the lecture’s frisson association.",
      "Incorrect. The named frisson finding concerns anterior insular connectivity.",
      "Incorrect. The lecture does not identify this as the specific connectivity association.",
      "Incorrect. Auditory processing is relevant to music, but the specified finding names anterior insular connectivity."
    ],
    "misconception": "This is the region named in the lecture’s frisson association."
  },
  "auditory-illusions-q2": {
    "prompt": "An ambiguous recording seems to say the phrase the listener was primed to expect. What contribution is illustrated?",
    "choices": [
      "Expectations help organize ambiguous sound",
      "The cue changes the recording’s frequency content",
      "The cue causes adaptation to a continuing background sound",
      "The listener has demonstrated absolute pitch"
    ],
    "explanation": "Prior information can guide interpretation when the auditory input is ambiguous.",
    "choiceExplanations": [
      "Correct. Prior information can guide interpretation when the auditory input is ambiguous.",
      "Incorrect. A changed interpretation need not mean changed sound waves.",
      "Incorrect. Adaptation concerns responsiveness to persistent input rather than the expected phrase guiding interpretation.",
      "Incorrect. Absolute pitch concerns pitch identification rather than ambiguous phrase interpretation."
    ],
    "misconception": "Prior information can guide interpretation when the auditory input is ambiguous."
  },
  "smell-q0": {
    "prompt": "Which sense is the exception to an initial thalamic relay before its first cortical processing in this course?",
    "choices": [
      "Smell",
      "Vision",
      "Hearing",
      "Taste"
    ],
    "explanation": "The initial olfactory route reaches cortex before the usual first thalamic relay.",
    "choiceExplanations": [
      "Correct. The initial olfactory route reaches cortex before the usual first thalamic relay.",
      "Incorrect. The main visual pathway includes a thalamic relay.",
      "Incorrect. The auditory pathway includes a thalamic relay.",
      "Incorrect. The course’s gustatory route includes the thalamus."
    ],
    "misconception": "The initial olfactory route reaches cortex before the usual first thalamic relay."
  },
  "smell-q1": {
    "prompt": "Which structure in the olfactory pathway is especially relevant to an odor’s emotional significance?",
    "choices": [
      "Amygdala",
      "Hippocampus",
      "Olfactory bulb",
      "Primary olfactory cortex"
    ],
    "explanation": "The amygdala contributes to emotional processing associated with odors.",
    "choiceExplanations": [
      "Correct. The amygdala contributes to emotional processing associated with odors.",
      "Incorrect. The hippocampus contributes to memory associations rather than the emphasized emotional role.",
      "Incorrect. The bulb is an early processing structure rather than the named emotional-association structure.",
      "Incorrect. Primary cortex receives olfactory information but is not the emphasized emotional structure."
    ],
    "misconception": "The amygdala contributes to emotional processing associated with odors."
  },
  "smell-q2": {
    "prompt": "Which description fits the initial stimulus–receptor interaction in smell?",
    "choices": [
      "Odorant chemicals interact with nasal olfactory receptors",
      "Sound pressure bends cochlear hair cells",
      "Light activates retinal photoreceptors",
      "Dissolved food chemicals contact taste receptor cells"
    ],
    "explanation": "Smell begins with chemical interaction at olfactory receptor cells.",
    "choiceExplanations": [
      "Correct. Smell begins with chemical interaction at olfactory receptor cells.",
      "Incorrect. That describes auditory transduction.",
      "Incorrect. That describes visual transduction.",
      "Incorrect. That describes gustatory transduction."
    ],
    "misconception": "Smell begins with chemical interaction at olfactory receptor cells."
  },
  "smell-q3": {
    "prompt": "Which statement accurately qualifies the initial olfactory thalamic exception?",
    "choices": [
      "Initial cortical access bypasses the thalamus, but later olfactory processing can involve it",
      "Initial cortical access requires the thalamus, while later processing bypasses it",
      "The olfactory bulb is another name for the thalamus",
      "The initial exception eliminates cortical processing of smell"
    ],
    "explanation": "The exception concerns the initial route rather than a complete absence of thalamic participation.",
    "choiceExplanations": [
      "Correct. The exception concerns the initial route rather than a complete absence of thalamic participation.",
      "Incorrect. This reverses the pathway distinction.",
      "Incorrect. The bulb and thalamus are different structures.",
      "Incorrect. Smell reaches cortex through the initial olfactory route."
    ],
    "misconception": "The exception concerns the initial route rather than a complete absence of thalamic participation."
  },
  "body-taste-q0": {
    "prompt": "Rubbing a bumped elbow can reduce the pain experience. Which explanation fits the course account?",
    "choices": [
      "Touch input can modulate pain signaling",
      "Rubbing immediately repairs the damaged tissue",
      "Rubbing prevents the injury from activating nociceptors",
      "Rubbing reduces pain by increasing damage at the site"
    ],
    "explanation": "Touch-related activity can affect how nociceptive information contributes to pain.",
    "choiceExplanations": [
      "Correct. Touch-related activity can affect how nociceptive information contributes to pain.",
      "Incorrect. Changes in pain experience can precede physical repair.",
      "Incorrect. The pain can be modulated despite continuing nociceptive input.",
      "Incorrect. The described reduction is modulation by touch input rather than increased damage."
    ],
    "misconception": "Touch-related activity can affect how nociceptive information contributes to pain."
  },
  "body-taste-q1": {
    "prompt": "How do food chemicals stimulate the taste system?",
    "choices": [
      "Dissolved chemicals interact with taste receptor cells",
      "Air pressure vibrates receptor membranes",
      "Photons activate specialized retinal pigments",
      "Head acceleration bends vestibular hair cells"
    ],
    "explanation": "Chemicals dissolved in saliva reach taste cells.",
    "choiceExplanations": [
      "Correct. Chemicals dissolved in saliva reach taste cells.",
      "Incorrect. That is an auditory mechanism.",
      "Incorrect. That is a visual mechanism.",
      "Incorrect. That is a balance-system mechanism."
    ],
    "misconception": "Chemicals dissolved in saliva reach taste cells."
  },
  "body-taste-q2": {
    "prompt": "Food seems much blander during nasal congestion. Which contribution has been reduced?",
    "choices": [
      "Olfactory input to flavor",
      "Taste-cell input for sweet and salty qualities",
      "Somatosensory input for food texture",
      "Trigeminal input for chili-like heat"
    ],
    "explanation": "Flavor combines taste with smell and other information.",
    "choiceExplanations": [
      "Correct. Flavor combines taste with smell and other information.",
      "Incorrect. Nasal congestion principally reduces smell’s contribution; taste cells can still signal these qualities.",
      "Incorrect. Texture contributes to flavor but is not the input directly reduced by nasal congestion.",
      "Incorrect. Pain/heat contributions differ from the olfactory contribution impaired by congestion."
    ],
    "misconception": "Flavor combines taste with smell and other information."
  },
  "vestibular-q0": {
    "prompt": "While the head turns right, the eyes move left to stabilize the viewed image. Which reflex is illustrated?",
    "choices": [
      "Vestibulo-ocular reflex",
      "Pupillary light reflex",
      "Accommodation response",
      "Convergence response"
    ],
    "explanation": "The reflex coordinates eye movement opposite head movement to stabilize gaze.",
    "choiceExplanations": [
      "Correct. The reflex coordinates eye movement opposite head movement to stabilize gaze.",
      "Incorrect. That reflex changes pupil size with illumination.",
      "Incorrect. Accommodation changes lens shape to focus.",
      "Incorrect. Convergence turns the eyes inward for near viewing."
    ],
    "misconception": "The reflex coordinates eye movement opposite head movement to stabilize gaze."
  },
  "vestibular-q1": {
    "prompt": "Why do the hands occupy a disproportionately large area in a sensory homunculus?",
    "choices": [
      "Cortical representation reflects sensory demands rather than physical body size",
      "Cortical area is proportional to the body part’s physical size",
      "The diagram shows muscle mass rather than sensory representation",
      "The diagram measures the length of nerves serving each body part"
    ],
    "explanation": "High sensory resolution can require more cortical representation.",
    "choiceExplanations": [
      "Correct. High sensory resolution can require more cortical representation.",
      "Incorrect. The disproportionate hand representation contradicts that rule.",
      "Incorrect. A sensory homunculus depicts cortical sensory allocation.",
      "Incorrect. Cortical allocation is distinct from peripheral nerve length."
    ],
    "misconception": "High sensory resolution can require more cortical representation."
  },
  "pain-q0": {
    "prompt": "A student rubs an injury and reports less pain although the damaged tissue is still present. Which interpretation fits?",
    "choices": [
      "Touch-related gating can alter the pain signal’s impact",
      "The tissue has healed because pain decreased",
      "The lower report establishes that nociceptors stopped signaling",
      "The spinal pathway is no longer involved in the signal"
    ],
    "explanation": "Modulation changes the pain experience without requiring immediate repair.",
    "choiceExplanations": [
      "Correct. Modulation changes the pain experience without requiring immediate repair.",
      "Incorrect. Reduced pain does not establish immediate tissue repair.",
      "Incorrect. Gating can change the impact of nociceptive information without eliminating that input.",
      "Incorrect. Modulation can occur within pathways that remain involved."
    ],
    "misconception": "Modulation changes the pain experience without requiring immediate repair."
  },
  "pain-q1": {
    "prompt": "A sharp pain is followed by a slower dull ache. Which fiber comparison fits the textbook?",
    "choices": [
      "Faster myelinated signaling precedes slower unmyelinated signaling",
      "Slower unmyelinated signaling precedes faster myelinated signaling",
      "Both components travel at the same speed despite different fiber types",
      "Myelination changes the pain location rather than transmission timing"
    ],
    "explanation": "Myelination contributes to the earlier sharp component; slower fibers contribute to the later ache.",
    "choiceExplanations": [
      "Correct. Myelination contributes to the earlier sharp component; slower fibers contribute to the later ache.",
      "Incorrect. This reverses the timing of the two components.",
      "Incorrect. The distinction emphasizes different transmission speeds.",
      "Incorrect. Myelination primarily contributes to the speed distinction in this example."
    ],
    "misconception": "Myelination contributes to the earlier sharp component; slower fibers contribute to the later ache."
  },
  "taste-flavor-q0": {
    "prompt": "Which statement correctly combines the capsaicin example with the tongue-map issue?",
    "choices": [
      "Capsaicin engages pain/heat pathways; basic tastes are not confined to separate tongue zones",
      "Capsaicin is a basic taste; basic tastes are not confined to separate tongue zones",
      "Capsaicin engages pain/heat pathways; each basic taste is confined to one tongue zone",
      "Capsaicin is a basic taste; each basic taste is confined to one tongue zone"
    ],
    "explanation": "Spiciness is not a basic taste, and the rigid tongue map is misleading.",
    "choiceExplanations": [
      "Correct. Spiciness is not a basic taste, and the rigid tongue map is misleading.",
      "Incorrect. The tongue-map part fits, but capsaicin’s pain/heat action is misclassified.",
      "Incorrect. The capsaicin part fits, but the rigid taste-zone claim does not.",
      "Incorrect. Both parts conflict with the course distinctions."
    ],
    "misconception": "Spiciness is not a basic taste, and the rigid tongue map is misleading."
  },
  "taste-flavor-q1": {
    "prompt": "The same odor is rated differently when labeled “pizza” versus “body odor.” What does this illustrate?",
    "choices": [
      "Context and expectations influence odor interpretation",
      "The labels necessarily alter which odor molecules are present",
      "The labels demonstrate different taste-receptor densities",
      "The labels change the initial route through the olfactory bulb"
    ],
    "explanation": "The physical odor can remain constant while its meaning and evaluation change.",
    "choiceExplanations": [
      "Correct. The physical odor can remain constant while its meaning and evaluation change.",
      "Incorrect. A verbal label can change interpretation without changing the chemical input.",
      "Incorrect. Odor evaluation does not directly measure taste-receptor density.",
      "Incorrect. Contextual interpretation does not establish a rerouted initial pathway."
    ],
    "misconception": "The physical odor can remain constant while its meaning and evaluation change."
  },
  "awareness-q0": {
    "prompt": "Which level in the lesson’s hierarchy adds awareness of oneself as an individual to awareness of sensations?",
    "choices": [
      "Self-awareness",
      "Sensory awareness",
      "Alertness",
      "Unconscious processing"
    ],
    "explanation": "Self-awareness is the most complex level identified in the lesson’s hierarchy.",
    "choiceExplanations": [
      "Correct. Self-awareness is the most complex level identified in the lesson’s hierarchy.",
      "Incorrect. Sensory awareness concerns experienced input without necessarily representing oneself as an individual.",
      "Incorrect. Alertness is the simplest level in this hierarchy.",
      "Incorrect. Unconscious processing can occur without reportable awareness."
    ],
    "misconception": "Self-awareness is the most complex level identified in the lesson’s hierarchy."
  },
  "awareness-q1": {
    "prompt": "In a mirror-mark task, an animal touches a mark on its own body after viewing the reflection. What does this behavior support?",
    "choices": [
      "Self-recognition in this task",
      "Recognition of the reflection as another animal",
      "Recognition of the mark without relating the reflection to the body",
      "A complete measurement of the animal’s conscious experiences"
    ],
    "explanation": "Using the reflection to act on the marked body supports recognizing it as one’s own.",
    "choiceExplanations": [
      "Correct. Using the reflection to act on the marked body supports recognizing it as one’s own.",
      "Incorrect. Acting on its own mark favors the self-recognition interpretation instead.",
      "Incorrect. The useful connection between reflected mark and its own body is the relevant evidence.",
      "Incorrect. The behavior supplies evidence about one task rather than a complete consciousness measure."
    ],
    "misconception": "Using the reflection to act on the marked body supports recognizing it as one’s own."
  },
  "awareness-q2": {
    "prompt": "An animal fails a mirror-mark task. Which conclusion respects the task’s limitations?",
    "choices": [
      "Its sensory priorities or ability to respond may limit the task",
      "It lacks sensory awareness because it did not touch the mark",
      "It lacks self-awareness in situations unrelated to mirrors",
      "It recognized itself but deliberately concealed the recognition"
    ],
    "explanation": "A failure can reflect task demands rather than an absence of consciousness.",
    "choiceExplanations": [
      "Correct. A failure can reflect task demands rather than an absence of consciousness.",
      "Incorrect. The task does not exhaust sensory awareness.",
      "Incorrect. The failure does not settle other forms of self-related processing.",
      "Incorrect. That particular motive is not established by a failed response."
    ],
    "misconception": "A failure can reflect task demands rather than an absence of consciousness."
  },
  "consciousness-models-q0": {
    "prompt": "What performance does the Turing test assess?",
    "choices": [
      "Whether conversational behavior can be distinguished from a human’s",
      "Whether a system has report-independent subjective experience",
      "Whether the system uses the same biological neurons as a human",
      "Whether the system recognizes itself in a mirror"
    ],
    "explanation": "The test uses externally observed conversation as its criterion.",
    "choiceExplanations": [
      "Correct. The test uses externally observed conversation as its criterion.",
      "Incorrect. Conversational indistinguishability does not directly measure subjective experience.",
      "Incorrect. The criterion is behavioral rather than biological implementation.",
      "Incorrect. Mirror recognition is a different test."
    ],
    "misconception": "The test uses externally observed conversation as its criterion."
  },
  "consciousness-models-q1": {
    "prompt": "What does success on a mirror-mark test most directly support?",
    "choices": [
      "Self-recognition within that particular task",
      "Human-like conversational competence",
      "A complete inventory of conscious states",
      "The biological origin of the subject’s awareness"
    ],
    "explanation": "The task links a reflection to one’s own marked body.",
    "choiceExplanations": [
      "Correct. The task links a reflection to one’s own marked body.",
      "Incorrect. Conversation is the criterion in the Turing-test comparison.",
      "Incorrect. A single behavior cannot inventory all conscious experience.",
      "Incorrect. The task does not identify how awareness arose biologically."
    ],
    "misconception": "The task links a reflection to one’s own marked body."
  },
  "awake-q0": {
    "prompt": "Which EEG pattern is emphasized for relaxed waking in the course?",
    "choices": [
      "Alpha",
      "Beta",
      "Theta",
      "Delta"
    ],
    "explanation": "Alpha is associated with relaxed waking.",
    "choiceExplanations": [
      "Correct. Alpha is associated with relaxed waking.",
      "Incorrect. Beta is emphasized for alert, active processing.",
      "Incorrect. Theta is associated with the transition into NREM sleep in this comparison.",
      "Incorrect. Delta is emphasized for deep NREM sleep."
    ],
    "misconception": "Alpha is associated with relaxed waking."
  },
  "awake-q1": {
    "prompt": "Which EEG pattern is emphasized for alert waking and active processing?",
    "choices": [
      "Beta",
      "Alpha",
      "Theta",
      "Delta"
    ],
    "explanation": "Beta is the alert-waking pattern in the comparison.",
    "choiceExplanations": [
      "Correct. Beta is the alert-waking pattern in the comparison.",
      "Incorrect. Alpha is emphasized for relaxed waking.",
      "Incorrect. Theta is prominent during the early-sleep transition.",
      "Incorrect. Delta is emphasized for deep NREM."
    ],
    "misconception": "Beta is the alert-waking pattern in the comparison."
  },
  "awake-q2": {
    "prompt": "Which network is associated with internally directed thought and mind wandering in the lesson?",
    "choices": [
      "Default mode network",
      "Dorsal visual stream",
      "Primary auditory pathway",
      "Vestibulo-ocular reflex circuit"
    ],
    "explanation": "DMN activity is associated with internally directed thought.",
    "choiceExplanations": [
      "Correct. DMN activity is associated with internally directed thought.",
      "Incorrect. That stream emphasizes spatial/action visual processing.",
      "Incorrect. That pathway carries and processes auditory signals.",
      "Incorrect. That circuit stabilizes gaze during head movement."
    ],
    "misconception": "DMN activity is associated with internally directed thought."
  },
  "attention-q0": {
    "prompt": "In a Stroop task, the word BLUE is printed in red ink. The instruction is to name the ink color. What is the correct response?",
    "choices": [
      "Red",
      "Blue",
      "“Blue in red,” naming both features",
      "No response because the features conflict"
    ],
    "explanation": "The relevant feature is ink color rather than the written word.",
    "choiceExplanations": [
      "Correct. The relevant feature is ink color rather than the written word.",
      "Incorrect. Blue names the word and follows the competing reading response.",
      "Incorrect. The requested response is the ink color, not both features.",
      "Incorrect. Incongruence increases interference but the requested color remains red."
    ],
    "misconception": "The relevant feature is ink color rather than the written word."
  },
  "attention-q1": {
    "prompt": "A brief interruption hides a change in a scene, and the viewer fails to notice it. Which effect fits?",
    "choices": [
      "Change blindness",
      "Inattentional blindness",
      "Stroop interference",
      "Sensory adaptation"
    ],
    "explanation": "Change blindness concerns failure to detect a change across views.",
    "choiceExplanations": [
      "Correct. Change blindness concerns failure to detect a change across views.",
      "Incorrect. That concerns missing an unexpected item when attention is engaged elsewhere.",
      "Incorrect. That concerns conflict between practiced reading and color naming.",
      "Incorrect. That concerns altered responsiveness during persistent stimulation."
    ],
    "misconception": "Change blindness concerns failure to detect a change across views."
  },
  "attention-q2": {
    "prompt": "Why can handling two demanding tasks at once reduce performance in the lesson’s account?",
    "choices": [
      "Attention switches incur costs and share limited processing resources",
      "Practice makes each task require more of the same limited resources",
      "Confidence in multitasking directly measures objective performance",
      "Task switching removes the need to reorient attention"
    ],
    "explanation": "Demanding multitasking often involves costly switching.",
    "choiceExplanations": [
      "Correct. Demanding multitasking often involves costly switching.",
      "Incorrect. Practice can support automaticity rather than necessarily increasing demand.",
      "Incorrect. Confidence can differ from measured performance.",
      "Incorrect. Reorientation is one reason switching can be costly."
    ],
    "misconception": "Demanding multitasking often involves costly switching."
  },
  "sleep-stages-q0": {
    "prompt": "Which textbook NREM stage is marked by sleep spindles and K complexes?",
    "choices": [
      "Stage 2",
      "Stage 1",
      "Stage 3",
      "Stage 4"
    ],
    "explanation": "These waveforms are characteristic of textbook stage 2.",
    "choiceExplanations": [
      "Correct. These waveforms are characteristic of textbook stage 2.",
      "Incorrect. Stage 1 is the transition with some theta activity.",
      "Incorrect. Stage 3 emphasizes deep-sleep delta activity.",
      "Incorrect. Stage 4 contains still more delta in the textbook’s four-stage scheme."
    ],
    "misconception": "These waveforms are characteristic of textbook stage 2."
  },
  "sleep-stages-q1": {
    "prompt": "Why is REM called paradoxical sleep?",
    "choices": [
      "Waking-like brain activity coexists with marked postural-muscle inhibition",
      "Slow delta activity coexists with alert voluntary action",
      "Waking-like brain activity coexists with ordinary voluntary walking",
      "Minimal cortical activity coexists with rapid eye movements"
    ],
    "explanation": "The active-brain and largely immobilized-body combination supplies the paradox.",
    "choiceExplanations": [
      "Correct. The active-brain and largely immobilized-body combination supplies the paradox.",
      "Incorrect. Delta characterizes deep NREM, and alert voluntary action does not describe typical REM.",
      "Incorrect. Normal REM atonia inhibits major postural movements.",
      "Incorrect. REM brain activity is active rather than minimal."
    ],
    "misconception": "The active-brain and largely immobilized-body combination supplies the paradox."
  },
  "sleep-stages-q2": {
    "prompt": "Which pattern describes a typical night in the textbook hypnogram?",
    "choices": [
      "Deep NREM is concentrated earlier; REM periods lengthen later",
      "REM is concentrated earlier; deep NREM periods lengthen later",
      "The sleeper descends through each stage once and stays in REM",
      "Each cycle repeats an identical duration of deep NREM and REM"
    ],
    "explanation": "Cycles recur, with early deep sleep and longer later REM.",
    "choiceExplanations": [
      "Correct. Cycles recur, with early deep sleep and longer later REM.",
      "Incorrect. This reverses the emphasized nightly distribution.",
      "Incorrect. The hypnogram shows repeated cycles rather than a one-way progression.",
      "Incorrect. Stage durations change across the night."
    ],
    "misconception": "Cycles recur, with early deep sleep and longer later REM."
  },
  "sleep-purpose-q0": {
    "prompt": "After selective REM interruption, subsequent sleep contains an unusually large amount of REM. What is this called?",
    "choices": [
      "REM rebound",
      "Circadian phase delay",
      "REM sleep behavior disorder",
      "Sleep paralysis"
    ],
    "explanation": "The term describes increased REM following REM deprivation.",
    "choiceExplanations": [
      "Correct. The term describes increased REM following REM deprivation.",
      "Incorrect. That is a later shift in biological timing.",
      "Incorrect. That concerns failure of normal REM muscle inhibition.",
      "Incorrect. That concerns immobility near sleep onset or awakening."
    ],
    "misconception": "The term describes increased REM following REM deprivation."
  },
  "sleep-purpose-q1": {
    "prompt": "Which account says the brain creates a dream narrative from ongoing neural activity?",
    "choices": [
      "Activation–synthesis theory",
      "Threat-simulation account",
      "Restorative hypothesis",
      "Memory-consolidation account"
    ],
    "explanation": "The brain synthesizes a story from internally generated activity.",
    "choiceExplanations": [
      "Correct. The brain synthesizes a story from internally generated activity.",
      "Incorrect. That emphasizes rehearsal of threatening situations.",
      "Incorrect. That emphasizes bodily repair during sleep.",
      "Incorrect. That emphasizes processing and stabilizing memories."
    ],
    "misconception": "The brain synthesizes a story from internally generated activity."
  },
  "sleep-purpose-q2": {
    "prompt": "Which statement correctly combines the textbook’s restoration and memory accounts of sleep?",
    "choices": [
      "Deep NREM supports bodily repair; NREM and REM contribute to memory processing",
      "Deep NREM contributes to memory; REM provides the main bodily repair period",
      "REM stabilizes memories; NREM has no memory-processing role",
      "Deep NREM supports bodily repair; memory consolidation occurs during alert waking rather than sleep"
    ],
    "explanation": "The notes describe physiological repair and complementary memory contributions.",
    "choiceExplanations": [
      "Correct. The notes describe physiological repair and complementary memory contributions.",
      "Incorrect. The memory contribution fits, but bodily restoration is emphasized for deep NREM.",
      "Incorrect. The first part fits, but the notes also describe NREM memory processing.",
      "Incorrect. The restoration part fits, but sleep also supports consolidation."
    ],
    "misconception": "The notes describe physiological repair and complementary memory contributions."
  },
  "hypnosis-q0": {
    "prompt": "In the lecture PET comparison, which region is specifically emphasized in the hypnotic-attention condition?",
    "choices": [
      "Right anterior cingulate",
      "Left anterior cingulate",
      "Right posterior cingulate",
      "Left posterior cingulate"
    ],
    "explanation": "The lecture’s specific comparison names this region.",
    "choiceExplanations": [
      "Correct. The lecture’s specific comparison names this region.",
      "Incorrect. This changes the side named in the specific lecture finding.",
      "Incorrect. This changes the cingulate region named in the finding.",
      "Incorrect. This changes both the side and the cingulate region."
    ],
    "misconception": "The lecture’s specific comparison names this region."
  },
  "hypnosis-q1": {
    "prompt": "Which description captures mindfulness in the retained notes?",
    "choices": [
      "Present-focused awareness with nonjudgmental observation",
      "Present-focused awareness with immediate evaluation of each thought",
      "Past-focused analysis aimed at explaining each memory",
      "Narrow focus accompanied by increased responsiveness to another person’s suggestion"
    ],
    "explanation": "Mindfulness emphasizes observing current experience without immediate judgment.",
    "choiceExplanations": [
      "Correct. Mindfulness emphasizes observing current experience without immediate judgment.",
      "Incorrect. Immediate judgment conflicts with the emphasized nonjudgmental stance.",
      "Incorrect. The definition emphasizes present experience rather than retrospective analysis.",
      "Incorrect. That better matches the hypnosis comparison."
    ],
    "misconception": "Mindfulness emphasizes observing current experience without immediate judgment."
  },
  "hypnosis-q2": {
    "prompt": "What does the course say about responsiveness to hypnotic suggestion?",
    "choices": [
      "It varies across people",
      "It is established by the participant’s confidence alone",
      "It is equivalent to improved memory accuracy",
      "It is equivalent to irresistible compliance with dangerous instructions"
    ],
    "explanation": "Suggestibility is an individual difference affecting the observed response.",
    "choiceExplanations": [
      "Correct. Suggestibility is an individual difference affecting the observed response.",
      "Incorrect. A confidence report does not establish actual suggestion responsiveness.",
      "Incorrect. Hypnosis does not reliably sharpen memory and can worsen accuracy.",
      "Incorrect. Trust and context can support compliance without hypnosis; mind control does not follow."
    ],
    "misconception": "Suggestibility is an individual difference affecting the observed response."
  },
  "hypnosis-q3": {
    "prompt": "Experienced meditators differ from newly instructed controls in an imaging comparison. What limits a claim that meditation caused the difference?",
    "choices": [
      "Preexisting differences can accompany meditation experience",
      "The imaging measure supplies no comparison between groups",
      "Brain activity cannot vary with attention during meditation",
      "A large difference would substitute for random assignment"
    ],
    "explanation": "An existing-groups comparison does not isolate training from other group differences.",
    "choiceExplanations": [
      "Correct. An existing-groups comparison does not isolate training from other group differences.",
      "Incorrect. The study does compare groups; comparability and causal design are the issue.",
      "Incorrect. The notes describe such differences; the limit concerns causal attribution.",
      "Incorrect. Effect magnitude does not eliminate systematic group differences."
    ],
    "misconception": "An existing-groups comparison does not isolate training from other group differences."
  },
  "sleep-text-q0": {
    "prompt": "Which mismatch defines jet lag in the retained notes?",
    "choices": [
      "Internal circadian timing differs from the destination’s local schedule",
      "Total sleep is shortened despite an aligned biological clock",
      "Weekday timing differs from weekend timing without time-zone travel",
      "Breathing is interrupted during sleep despite an aligned clock"
    ],
    "explanation": "The biological clock has not aligned with the destination’s timing.",
    "choiceExplanations": [
      "Correct. The biological clock has not aligned with the destination’s timing.",
      "Incorrect. Sleep loss can cause fatigue without the defining clock–destination mismatch.",
      "Incorrect. That is the social-jet-lag comparison rather than destination misalignment after travel.",
      "Incorrect. That is an apnea mechanism rather than the defining circadian mismatch."
    ],
    "misconception": "The biological clock has not aligned with the destination’s timing."
  },
  "sleep-text-q1": {
    "prompt": "Which sleep disorder is defined by repeated interruptions of breathing?",
    "choices": [
      "Sleep apnea",
      "Maintenance insomnia",
      "Narcolepsy",
      "REM sleep behavior disorder"
    ],
    "explanation": "Apnea involves interrupted breathing that can disrupt sleep.",
    "choiceExplanations": [
      "Correct. Apnea involves interrupted breathing that can disrupt sleep.",
      "Incorrect. This describes difficulty staying asleep rather than a breathing mechanism.",
      "Incorrect. This involves sleep attacks and sleep–wake regulation.",
      "Incorrect. This involves impaired muscle inhibition and dream enactment."
    ],
    "misconception": "Apnea involves interrupted breathing that can disrupt sleep."
  },
  "sleep-text-q2": {
    "prompt": "Which supplemental comparison allows preserved awareness despite profound paralysis?",
    "choices": [
      "Locked-in syndrome",
      "Coma",
      "Unresponsive wakefulness syndrome",
      "Ordinary deep NREM sleep"
    ],
    "explanation": "The supplemental comparison separates awareness from the ability to move or communicate.",
    "choiceExplanations": [
      "Correct. The supplemental comparison separates awareness from the ability to move or communicate.",
      "Incorrect. Coma involves absent wakefulness and evident awareness in these notes.",
      "Incorrect. Wake-like cycles occur without reliable behavioral evidence of awareness.",
      "Incorrect. Deep sleep is not the preserved-awareness paralysis comparison."
    ],
    "misconception": "The supplemental comparison separates awareness from the ability to move or communicate."
  },
  "circadian-q0": {
    "prompt": "Why is eastward travel often harder to adapt to in the textbook’s jet-lag comparison?",
    "choices": [
      "It requires advancing internal timing to an earlier local schedule",
      "It requires delaying internal timing to a later local schedule",
      "It changes the time-zone difference through the traveler’s preferred chronotype",
      "It creates jet lag from mileage independently of the local-time change"
    ],
    "explanation": "Eastward travel calls for an earlier phase; the clock tends naturally toward a slightly longer day.",
    "choiceExplanations": [
      "Correct. Eastward travel calls for an earlier phase; the clock tends naturally toward a slightly longer day.",
      "Incorrect. That is the westward requirement.",
      "Incorrect. Chronotype does not define the geographic time-zone difference.",
      "Incorrect. The defining mismatch concerns time zones rather than mileage."
    ],
    "misconception": "Eastward travel calls for an earlier phase; the clock tends naturally toward a slightly longer day."
  },
  "circadian-q1": {
    "prompt": "What is a zeitgeber?",
    "choices": [
      "An external cue that synchronizes biological timing",
      "An internal rhythm drifting without environmental cues",
      "A preferred early or late sleep schedule",
      "A later phase of the internal sleep schedule"
    ],
    "explanation": "Light and eating patterns are external time cues.",
    "choiceExplanations": [
      "Correct. Light and eating patterns are external time cues.",
      "Incorrect. That is the endogenous rhythm being synchronized.",
      "Incorrect. That is the lark–owl preference comparison.",
      "Incorrect. That is a phase delay rather than the synchronizing cue."
    ],
    "misconception": "Light and eating patterns are external time cues."
  },
  "sleep-disorders-q0": {
    "prompt": "In the textbook comparison, acting out a vivid dream during REM indicates failure of which normal feature?",
    "choices": [
      "REM muscle inhibition, as in REM sleep behavior disorder",
      "Deep-NREM responsiveness, as in ordinary sleepwalking",
      "Airway patency, as in obstructive apnea",
      "Sleep-onset timing, as in onset insomnia"
    ],
    "explanation": "Impaired atonia permits dream-enactment movement.",
    "choiceExplanations": [
      "Correct. Impaired atonia permits dream-enactment movement.",
      "Incorrect. Sleepwalking is a deep-NREM comparison rather than REM dream enactment.",
      "Incorrect. Airway blockage concerns breathing interruption rather than failed REM atonia.",
      "Incorrect. Difficulty falling asleep does not explain movement during REM."
    ],
    "misconception": "Impaired atonia permits dream-enactment movement."
  },
  "sleep-disorders-q1": {
    "prompt": "Which description best distinguishes cataplexy from a sleep attack?",
    "choices": [
      "Muscle tone can collapse while consciousness remains",
      "A person becomes asleep without a defining loss of muscle tone",
      "A person remains immobile briefly on awakening from sleep",
      "A person performs movements during a REM dream"
    ],
    "explanation": "Cataplexy separates loss of tone from loss of conscious awareness.",
    "choiceExplanations": [
      "Correct. Cataplexy separates loss of tone from loss of conscious awareness.",
      "Incorrect. That describes the sleep-attack comparison rather than cataplexy.",
      "Incorrect. That describes sleep paralysis.",
      "Incorrect. That describes the REM sleep behavior disorder comparison."
    ],
    "misconception": "Cataplexy separates loss of tone from loss of conscious awareness."
  },
  "sleep-disorders-q2": {
    "prompt": "Which pairing distinguishes the mechanisms of obstructive and central apnea?",
    "choices": [
      "Obstructive: blocked airway; central: interrupted breathing drive",
      "Obstructive: interrupted breathing drive; central: blocked airway",
      "Obstructive: blocked airway; central: persistent REM muscle inhibition on waking",
      "Obstructive: repeated early waking; central: interrupted breathing drive"
    ],
    "explanation": "The two labels distinguish airway obstruction from central control failure.",
    "choiceExplanations": [
      "Correct. The two labels distinguish airway obstruction from central control failure.",
      "Incorrect. This reverses the mechanisms.",
      "Incorrect. The first part fits; the second describes sleep paralysis rather than central apnea.",
      "Incorrect. The second part fits; early waking alone describes maintenance difficulty rather than obstruction."
    ],
    "misconception": "The two labels distinguish airway obstruction from central control failure."
  },
  "damaged-awareness-q0": {
    "prompt": "A person recognizes a familiar face but believes an impostor has replaced the person because the normal emotional familiarity is missing. Which distinction fits?",
    "choices": [
      "Capgras syndrome",
      "Prosopagnosia",
      "Jamais vu",
      "Déjà vu"
    ],
    "explanation": "Capgras separates recognized face identity from its normal emotional familiarity.",
    "choiceExplanations": [
      "Correct. Capgras separates recognized face identity from its normal emotional familiarity.",
      "Incorrect. Prosopagnosia involves impaired explicit face recognition.",
      "Incorrect. Jamais vu is a familiarity mismatch without the specific recognized-face impostor interpretation.",
      "Incorrect. Déjà vu makes a new situation feel previously experienced."
    ],
    "misconception": "Capgras separates recognized face identity from its normal emotional familiarity."
  },
  "damaged-awareness-q1": {
    "prompt": "An outwardly unresponsive patient produces different, appropriate fMRI patterns when instructed to imagine playing tennis versus navigating a home. What does this support?",
    "choices": [
      "Some awareness can be present without an outward motor response",
      "The patient physically performed the imagined movements",
      "A nonspecific rise in activity would supply the same evidence",
      "The patient’s full range of conscious experience has been measured"
    ],
    "explanation": "Task-specific responses support instruction-following despite limited behavioral output.",
    "choiceExplanations": [
      "Correct. Task-specific responses support instruction-following despite limited behavioral output.",
      "Incorrect. The response is to imagery instructions rather than demonstrated physical action.",
      "Incorrect. The distinction between instructed tasks is essential to the interpretation.",
      "Incorrect. The tasks probe particular responses rather than all experiences."
    ],
    "misconception": "Task-specific responses support instruction-following despite limited behavioral output."
  },
  "damaged-awareness-q2": {
    "prompt": "Which distinction separates brain death from coma in the textbook?",
    "choices": [
      "Brain death is irreversible loss of brain functions including brainstem functions",
      "Brain death is a reversible absence of voluntary movement",
      "Coma is defined by normal wake–sleep cycles without evident awareness",
      "Coma establishes irreversible absence of brainstem function"
    ],
    "explanation": "Coma is not defined by this irreversible loss of all brain functions.",
    "choiceExplanations": [
      "Correct. Coma is not defined by this irreversible loss of all brain functions.",
      "Incorrect. Reversibility and movement loss do not define brain death.",
      "Incorrect. That is the vegetative/unresponsive-wakefulness comparison.",
      "Incorrect. Coma does not by definition establish the irreversible brainstem loss described for brain death."
    ],
    "misconception": "Coma is not defined by this irreversible loss of all brain functions."
  },
  "seizures-q0": {
    "prompt": "A familiar setting suddenly feels unfamiliar. Which term names that experience?",
    "choices": [
      "Jamais vu",
      "Déjà vu",
      "Prosopagnosia",
      "Capgras syndrome"
    ],
    "explanation": "Jamais vu makes the familiar seem unfamiliar.",
    "choiceExplanations": [
      "Correct. Jamais vu makes the familiar seem unfamiliar.",
      "Incorrect. Déjà vu makes a new situation feel familiar.",
      "Incorrect. Prosopagnosia specifically impairs face recognition.",
      "Incorrect. Capgras involves a recognized familiar person interpreted as an impostor."
    ],
    "misconception": "Jamais vu makes the familiar seem unfamiliar."
  },
  "seizures-q1": {
    "prompt": "Which event-pattern pairing matches the textbook’s comparison?",
    "choices": [
      "Tonic–clonic: sustained then rhythmic contraction; absence: brief awareness interruption",
      "Tonic–clonic: rhythmic then sustained contraction; absence: brief awareness interruption",
      "Tonic–clonic: sustained then rhythmic contraction; absence: prolonged recovery after major contractions",
      "Tonic–clonic: brief awareness interruption with blinking; absence: sustained then rhythmic contraction"
    ],
    "explanation": "The comparison distinguishes the motor sequence from a brief interruption with limited movement.",
    "choiceExplanations": [
      "Correct. The comparison distinguishes the motor sequence from a brief interruption with limited movement.",
      "Incorrect. This reverses the tonic and clonic phases.",
      "Incorrect. The second part imports the tonic–clonic recovery sequence into absence.",
      "Incorrect. This swaps the event patterns."
    ],
    "misconception": "The comparison distinguishes the motor sequence from a brief interruption with limited movement."
  },
  "drug-classes-q0": {
    "prompt": "Which comparison correctly separates the stimulant class from molecular mechanism?",
    "choices": [
      "Caffeine, nicotine and cocaine can be stimulants while acting at different receptors or transporters",
      "Caffeine, nicotine and cocaine stimulate by activating dopamine receptors directly",
      "Caffeine, nicotine and cocaine stimulate by blocking acetylcholine receptors",
      "Caffeine, nicotine and cocaine stimulate by reversing serotonin transporters"
    ],
    "explanation": "A shared broad behavioral class does not imply one molecular mechanism.",
    "choiceExplanations": [
      "Correct. A shared broad behavioral class does not imply one molecular mechanism.",
      "Incorrect. The examples respectively emphasize adenosine blockade, ACh mimicry and dopamine reuptake blockade.",
      "Incorrect. Nicotine mimics ACh, while the others emphasize different targets.",
      "Incorrect. That is the MDMA comparison rather than a shared mechanism of these stimulants."
    ],
    "misconception": "A shared broad behavioral class does not imply one molecular mechanism."
  },
  "drug-classes-q1": {
    "prompt": "Which example reflects adaptation after repeated use rather than an immediate drug action?",
    "choices": [
      "Reduced response to the same dose after repeated exposure",
      "Caffeine blocks an adenosine receptor after a dose",
      "Nicotine activates an acetylcholine receptor after a dose",
      "Cocaine blocks dopamine reuptake after a dose"
    ],
    "explanation": "Tolerance is a repeated-exposure adaptation.",
    "choiceExplanations": [
      "Correct. Tolerance is a repeated-exposure adaptation.",
      "Incorrect. This is an immediate receptor action.",
      "Incorrect. This is an immediate receptor action.",
      "Incorrect. This is an immediate transporter action."
    ],
    "misconception": "Tolerance is a repeated-exposure adaptation."
  }
};
