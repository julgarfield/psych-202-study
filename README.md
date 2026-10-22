# Psych 202 Study Lab

Published site: https://psych-202-exam-study.juliangarfield.chatgpt.site

The editable site is in `site/`, with access handling in `worker/`. `dist/` contains the deployment build. The site uses the existing ChatGPT account sign-in and progress sync.

## Development

Use Node.js to run:

```sh
npm run test:content
npm run test:progress
npm test
node scripts/build-offline.mjs
npm run build
```

The standalone local study copy is `site/offline.html`. Account sign-in and syncing require the hosted service.

## Content

Includes the October 22, 2026 audit of all five Exam 2 slide decks, 87 review prompts, and assigned textbook Chapters 7–10. Chapter 10 is separated into Exam 3. Excluded motivation material remains optional. Assigned video contents have not been fully audited.

`site/exam2-gap-fill.js` (October 22) appends 7 lessons and 70 practice questions for review-sheet prompts that had thin or no question coverage. It changes no existing lesson, question or ID. Content marked "background research" goes beyond the supplied slides.

Sites project: `appgprj_6abc330e6534819199785fbb210e759b`.
