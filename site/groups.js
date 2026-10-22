/* Focused recall lists drawn from the site's retained lecture and textbook lessons. */
(() => {
  'use strict';
  const item = (name, functionText, target = '') => ({name, functionText, target});
  const family = (title, lessonIds, items, note = '') => ({title, lessonIds, items, note});
  const collections = [
    {id:'transmitters', title:'Neurotransmitter categories', intro:'Learn the lecture’s four categories, then connect each member to its main functions.', note:'A transmitter can serve several functions. Its effect depends on the receptor and circuit.', families:[
      family('Acetylcholine (ACh)', ['transmitters'], [
        item('Acetylcholine (ACh)', 'Muscle contraction; learning, memory, attention and sleep.')
      ], 'ACh is a category of its own in the lecture’s four-part list.'),
      family('Monoamines', ['transmitters'], [
        item('Epinephrine (adrenaline)', 'Sympathetic mobilization: pupil dilation and increased blood flow and blood sugar; arousal.'),
        item('Norepinephrine (noradrenaline)', 'Physiological arousal and vigilance; sympathetic functions, including narrowing blood vessels.'),
        item('Serotonin', 'Mood, appetite, sleep–wake regulation, arousal and aggression regulation.'),
        item('Dopamine', 'Movement, planning, reward and motivation. Movement-circuit dopamine loss is important in Parkinson’s disease.')
      ]),
      family('Amino acids', ['transmitters'], [
        item('GABA', 'Major inhibitory transmitter in the brain: reduces the likelihood of firing in the course’s basic model.'),
        item('Glutamate', 'Major excitatory transmitter in the brain; contributes to learning and memory.')
      ]),
      family('Peptides', ['transmitters'], [
        item('CCK (cholecystokinin)', 'Digestion and satiety; anxiety/panic effects are also noted in the lecture.'),
        item('Endorphins', 'Endogenous opioid pain reduction; associated with calmness and pleasure.'),
        item('Substance P', 'Pain signaling, inflammation/vasodilation, and stress/mood processes.')
      ])
    ]},
    {id:'drugs', title:'Drugs: targets & mechanisms', intro:'For each drug, say the target, the step it changes, and the resulting change in signaling.', note:'These are the main mechanisms emphasized in your course. “Agonist” includes indirect amplification in the lecture; blocking reuptake differs from blocking a receptor.', families:[
      family('Change release, reuptake or breakdown', ['drugs','transmitters','drug-classes'], [
        item('Cocaine', 'Blocks reuptake → transmitter remains available in the synaptic cleft longer, increasing signaling.', 'Dopamine and norepinephrine; the textbook emphasizes dopamine'),
        item('Amphetamine / methamphetamine', 'Promotes release and alters/reverses transporter action → more transmitter is available outside the sending cell.', 'Dopamine and norepinephrine; textbook mechanism emphasizes dopamine'),
        item('MDMA', 'Promotes serotonin release and reverses transporter action → increased serotonergic signaling; the notes also describe oxytocin and smaller dopamine effects.', 'Mainly serotonin'),
        item('SSRIs — Prozac, Zoloft, Paxil', 'Inhibit serotonin reuptake → serotonin remains available longer; indirect amplification.', 'Serotonin'),
        item('Tricyclics — clomipramine, amitriptyline', 'Inhibit reuptake → increase transmitter availability; norepinephrine is emphasized in class.', 'Norepinephrine and serotonin'),
        item('MAOIs', 'Inhibit monoamine oxidase → reduce enzymatic breakdown of monoamines.', 'Monoamines, including dopamine, norepinephrine and serotonin'),
        item('Botulinum toxin', 'Prevents ACh release → reduces muscle signaling.', 'Acetylcholine at the neuromuscular junction')
      ]),
      family('Act at receptors', ['drugs','transmitters','drug-classes'], [
        item('Nicotine', 'Activates nicotinic ACh receptors → amplifies signaling at those receptors.', 'Nicotinic acetylcholine receptors'),
        item('Curare', 'Blocks muscle ACh receptors → reduces muscle activation despite transmitter release.', 'Acetylcholine receptors at skeletal muscle'),
        item('Caffeine', 'Blocks adenosine receptors → reduces adenosine’s inhibitory/modulating action and increases alertness.', 'Adenosine receptors'),
        item('Benzodiazepines — Valium, Xanax', 'Enhance GABA receptor responses → increase inhibitory signaling. They amplify GABA’s action rather than supplying GABA.', 'GABA receptor system'),
        item('Naloxone (Narcan)', 'Blocks opioid receptors → opposes opioid receptor activation.', 'Opioid receptors'),
        item('Opioids — morphine, heroin, oxycodone', 'Activate receptors responsive to endogenous opioid peptides → pain relief; also engage reward pathways.', 'Opioid receptors / endorphin system'),
        item('Typical antipsychotics', 'Antagonize dopamine receptors → reduce signaling at the blocked receptors.', 'Dopamine receptors'),
        item('Atypical antipsychotics', 'Often affect both dopamine and serotonin receptor signaling; the lecture groups them with antagonists.', 'Dopamine and serotonin receptor systems'),
        item('LSD', 'Acts through serotonin-related receptors → altered perception and hallucinogenic effects.', 'Serotonin receptor system'),
        item('THC (cannabis)', 'Acts at cannabinoid receptors → altered perception and memory; can also influence reward-circuit dopamine.', 'Cannabinoid receptors / endocannabinoid system (anandamide)')
      ]),
      family('Affects several signaling systems', ['drugs','drug-classes'], [
        item('Alcohol', 'Enhances GABA-related inhibition and reduces glutamate-related excitation → overall CNS depression; also engages dopamine reward pathways.', 'GABA, glutamate and dopamine reward systems')
      ], 'A shared behavioral class, such as “stimulant,” does not imply a shared molecular mechanism.')
    ]},
    {id:'brain', title:'Brain structures & functions', intro:'Recall the members of each anatomical grouping and the functions emphasized in class.', note:'These are function maps for recall; the structures work together in networks.', families:[
      family('Brainstem & nearby structures', ['brainstem'], [
        item('Medulla', 'Vital involuntary functions: breathing, heart rate and blood pressure.'),
        item('Pons', 'Connections with the cerebellum; sleep, arousal and facial expressions.'),
        item('Midbrain', 'Sensory reflexes, movement, pain and orientation.'),
        item('Reticular formation', 'Arousal, sleep and attention; major damage can impair wakefulness.'),
        item('Cerebellum', 'Balance, movement timing and coordination; also contributes to cognitive and perceptual functions.')
      ], 'The cerebellum is beside the brainstem, not part of it. The reticular formation extends through the brainstem.'),
      family('Subcortical structures', ['subcortex'], [
        item('Thalamus', 'Sensory relay; contributes to consciousness.'),
        item('Basal ganglia', 'Voluntary movement, action control and goal-directed movement selection.'),
        item('Amygdala', 'Emotion processing, including fear, disgust and aggression; also social behavior and reward learning.'),
        item('Hippocampus', 'Formation of new long-term memories.'),
        item('Hypothalamus', 'Homeostasis: temperature, hunger, autonomic activity and hormone regulation.'),
        item('Nucleus accumbens', 'Reward, motivation/pleasure and social inclusion in the lecture.')
      ], 'These structures are not separate, mutually exclusive systems: the nucleus accumbens participates in basal-ganglia reward circuitry.'),
      family('Four cortical lobes', ['cortex'], [
        item('Frontal lobe', 'Planning, thought and movement; primary motor cortex and usually Broca’s speech-production area.'),
        item('Parietal lobe', 'Touch and spatial processing; primary somatosensory cortex.'),
        item('Temporal lobe', 'Hearing, memory and language-related functions; usually Wernicke’s comprehension-related area.'),
        item('Occipital lobe', 'Visual processing.')
      ])
    ]},
    {id:'nervous', title:'Nervous-system divisions', intro:'Keep the hierarchy straight: major divisions, peripheral systems, then the two autonomic branches.', note:'Enteric networks regulate the gut and interact with autonomic, brain and endocrine signals.', families:[
      family('Major divisions', ['nervous'], [
        item('Central nervous system (CNS)', 'Brain and spinal cord: the central structures of the nervous system.'),
        item('Peripheral nervous system (PNS)', 'Neural pathways outside brain and spinal cord; connects the CNS with the rest of the body.')
      ]),
      family('Peripheral systems emphasized in class', ['nervous'], [
        item('Somatic system', 'Skeletal-muscle control and associated sensory communication.'),
        item('Autonomic system', 'Regulates visceral/organ functions; includes sympathetic and parasympathetic branches.'),
        item('Enteric system', 'Gut neural networks regulating digestive contractions and secretions; communicates with brain and endocrine systems.')
      ]),
      family('Autonomic branches', ['nervous'], [
        item('Sympathetic', 'Mobilizes for action: dilates pupils, speeds the heart, opens airways, and inhibits digestion/urination.'),
        item('Parasympathetic', 'Maintenance, digestion and recovery; generally reverses those sympathetic organ patterns.')
      ], '“Fight or flight” and “rest and digest” are memory cues, not whole-body on/off switches.')
    ]},
    {id:'glands', title:'Glands, hormones & functions', intro:'Pair each gland with its messages and the main functions in the supplied notes.', note:'Regulatory route: hypothalamus → pituitary → target glands → hormones carried in blood.', families:[
      family('Glands & their main signals', ['endocrine'], [
        item('Pineal', 'Sleep–wake rhythms.', 'Melatonin'),
        item('Pituitary-related signals', 'Growth hormone: growth/regeneration. Oxytocin: breastfeeding and social bonding. Vasopressin: fluid regulation and social-function associations.', 'Growth hormone, oxytocin and vasopressin'),
        item('Thyroid', 'Metabolic-rate regulation.', 'Thyroid hormones'),
        item('Adrenals', 'Stress-related signaling.', 'Cortisol and other adrenal stress hormones'),
        item('Pancreatic islets', 'Metabolic / blood-glucose regulation.', 'Insulin'),
        item('Ovaries', 'Sex-hormone signaling, under pituitary regulation.', 'Sex hormones'),
        item('Testes', 'Sex-hormone signaling, under pituitary regulation.', 'Sex hormones')
      ], 'The pituitary is regulated by the hypothalamus. “Pituitary-related” follows the supplied notes’ grouping and does not specify where each hormone is synthesized.')
    ]}
  ];
  let selected = 'transmitters', mode = 'reference';
  function render(root, lessons, esc) {
    root.innerHTML = `<p class="eyebrow">NAME THE GROUP / NAME ITS MEMBERS / EXPLAIN THEIR ROLES</p><h1>Groups & functions.</h1><p>A focused memory map for the lists you need to keep straight. Read a set, hide it, then say the answer out loud before revealing.</p><div class="group-controls"><label>Grouping<select id="groupCollection" aria-label="Grouping">${collections.map(c=>`<option value="${c.id}" ${c.id===selected?'selected':''}>${esc(c.title)}</option>`).join('')}</select></label><div><span class="group-control-label" id="groupModeLabel">Study mode</span><div class="group-mode" role="group" aria-labelledby="groupModeLabel">${[['reference','Reference'],['members','Recall members'],['functions','Recall functions']].map(([id,title])=>`<button class="btn secondary ${mode===id?'active':''}" type="button" data-group-mode="${id}" aria-pressed="${mode===id}">${title}</button>`).join('')}</div></div></div><p class="subtle" id="groupCount" role="status"></p><div id="groupResults"></div>`;
    root.querySelector('#groupCollection').onchange = e => {selected=e.target.value;update();};
    root.querySelectorAll('[data-group-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.groupMode;root.querySelectorAll('[data-group-mode]').forEach(btn=>{btn.classList.toggle('active',btn.dataset.groupMode===mode);btn.setAttribute('aria-pressed',String(btn.dataset.groupMode===mode));});update();});
    function update() {
      const c=collections.find(c=>c.id===selected), count=c.families.reduce((n,f)=>n+f.items.length,0);
      root.querySelector('#groupCount').textContent=`${c.title} · ${c.families.length} ${c.families.length===1?'group':'groups'} · ${count} items · ${mode==='reference'?'Reference':mode==='members'?'Name each group’s members before opening the list.':'Explain each item’s function before revealing.'}`;
      function answer(i){return `${i.target?`<p class="group-target"><b>${selected==='drugs'?'Target / system':'Signal'}:</b> ${esc(i.target)}</p>`:''}<p>${esc(i.functionText)}</p>`;}
      function table(f){return `<table class="group-table"><thead><tr><th scope="col">Item</th><th scope="col">${selected==='drugs'?'Target → action → result':selected==='glands'?'Signal & function':'Main functions'}</th></tr></thead><tbody>${f.items.map(i=>`<tr><th scope="row">${esc(i.name)}</th><td>${mode==='functions'?`<details class="group-function"><summary>${selected==='drugs'?'Reveal target & action':'Reveal function'}</summary>${answer(i)}</details>`:answer(i)}</td></tr>`).join('')}</tbody></table>`;}
      root.querySelector('#groupResults').innerHTML=`<section class="group-intro"><h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p><p class="subtle">${esc(c.note)}</p></section>${c.families.map((f,index)=>`<section class="group-family" aria-labelledby="group-family-${index}"><div class="group-family-heading"><h2 id="group-family-${index}">${esc(f.title)}</h2><span class="badge">${f.items.length} ${f.items.length===1?'item':'members'}</span></div>${f.note?`<p class="subtle">${esc(f.note)}</p>`:''}${mode==='members'?`<p class="group-recall-prompt">Name ${f.items.length===1?'the item and explain its function':'all '+f.items.length+' members and explain their functions'} before revealing.</p><details class="group-members"><summary>Reveal ${f.items.length===1?'item':'members'} & functions</summary>${table(f)}</details>`:table(f)}<div class="group-sources">${f.lessonIds.map(id=>{const l=lessons.find(l=>l.id===id);return `<p>${esc(l.source)}<button class="text-btn" type="button" data-lesson="${l.id}">Review ${esc(l.title)}</button></p>`;}).join('')}</div></section>`).join('')}`;
    }
    update();
  }
  globalThis.StudyGroups = {collections, render};
})();
