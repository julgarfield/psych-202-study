/* Structured display of the instructor-provided review sheet. */
(() => {
  'use strict';
  const headings = ['Chapter 10: Language', 'Chapter 11: Development', 'Chapter 13: Social Psychology'];
  const anchorIds = ['review-language', 'review-development', 'review-social'];
  function parse(text) {
    const lines = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    const first = lines.indexOf(headings[0]);
    if (first < 0) throw new Error('Review sheet chapter headings are missing');
    const intro = lines.slice(0, first);
    const chapters = [];
    let chapter, kind = 'lecture';
    for (const line of lines.slice(first)) {
      const index = headings.indexOf(line);
      if (index !== -1) {
        chapter = {title: line, id: anchorIds[index], lecture: [], videos: [], text: [], notes: []};
        chapters.push(chapter); kind = 'lecture';
      } else if (line === 'Video:') kind = 'videos';
      else if (line === 'Text:') kind = 'text';
      else if (/^(You DO NOT need|Material on cooperation)/i.test(line)) chapter.notes.push(line);
      else if (chapter) chapter[kind].push(line);
    }
    return {intro, chapters};
  }
  function render(root, esc) {
    const {intro, chapters} = parse(EXAM3_REVIEW_TEXT);
    const list = items => `<ul class="review-questions">${items.map(item => `<li>${esc(item)}</li>`).join('')}</ul>`;
    const video = items => `<ul class="review-videos">${items.map(item => {
      const match = item.match(/^(.*?)(https?:\/\/\S+)$/i);
      if (!match) return `<li>${esc(item)}</li>`;
      const label = match[1].trim().replace(/:$/, '') || 'Watch video';
      return `<li><a href="${esc(match[2])}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a></li>`;
    }).join('')}</ul>`;
    root.innerHTML = `<div class="review-sheet">
      <p class="eyebrow">EXAM 03 / INSTRUCTOR MATERIAL</p>
      <h1>Exam 3 review sheet</h1>
      <p class="review-intro">The instructor’s questions are a sample of what to know, not an exhaustive list. The original Word document is available below.</p>
      <a class="btn review-download" href="assets/exam3/exam-3-review.docx" download>Download original review sheet</a>
      <section class="review-scope" aria-labelledby="review-scope-title">
        <p class="eyebrow">PSYCH 202 · ADDINGTON · FALL 2026</p>
        <h2 id="review-scope-title">What the exam covers</h2>
        <ul>${intro.slice(4,7).map(line=>`<li>${esc(line)}</li>`).join('')}</ul>
        ${intro.slice(8).map(line=>`<p>${esc(line)}</p>`).join('')}
      </section>
      <nav class="review-jump" aria-label="Jump to a review chapter"><span>Jump to</span>${chapters.map(c=>`<a href="#${c.id}">${esc(c.title.replace('Chapter ', 'Ch. '))}</a>`).join('')}</nav>
      ${chapters.map((c,i)=>`<section class="review-chapter" id="${c.id}" aria-labelledby="${c.id}-title">
        <div class="review-chapter-heading"><span class="review-chapter-number">${String(i+1).padStart(2,'0')}</span><div><p class="eyebrow">INSTRUCTOR REVIEW</p><h2 id="${c.id}-title">${esc(c.title)}</h2></div></div>
        <div class="review-block"><h3>Lecture questions</h3>${list(c.lecture)}</div>
        <div class="review-block"><h3>Assigned videos</h3>${video(c.videos)}</div>
        <div class="review-block"><h3>Textbook questions</h3>${list(c.text)}</div>
        ${c.notes.map(note=>`<p class="review-exclusion"><strong>Scope note</strong> ${esc(note)}</p>`).join('')}
      </section>`).join('')}
    </div>`;
  }
  globalThis.Exam3ReviewSheet = {parse, render};
})();
