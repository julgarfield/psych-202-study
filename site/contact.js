/* Fixed-recipient email forwarding; no account, progress or session data is submitted. */
(() => {
  'use strict';
  const recipient='juliangarfield@icloud.com',endpoint='https://formsubmit.co/ajax/'+recipient;
  const site='https://psych-202-exam-study.juliangarfield.chatgpt.site';
  const drafts=new Map(),statuses=new Map(),pending=new Set(),lastSubmission=new Map();
  function render(root,exam,esc){
    const draft=drafts.get(exam.id)||'',status=statuses.get(exam.id)||'';
    root.innerHTML=`<p class="eyebrow">CONTACT / ${esc(exam.label)}</p><h1>Missing something or want something added?</h1><p>Contact us with a missing topic, a correction, or an idea for the study site.</p><section class="panel contact-panel"><form id="contactForm" data-exam="${esc(exam.id)}" action="https://formsubmit.co/${recipient}" method="POST"><label for="contactMessage">Your message</label><textarea id="contactMessage" name="message" rows="7" maxlength="5000" required placeholder="Tell us what’s missing or what you’d like added…">${esc(draft)}</textarea><input type="hidden" name="_subject" value="PSYCH 202 · ${esc(exam.label)} · Website feedback"><input type="hidden" name="_url" value="${site}"><input class="contact-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><p class="subtle">About: <strong>${esc(exam.label)}</strong>. Your message will be forwarded to <a href="mailto:${recipient}">${recipient}</a> via FormSubmit.</p>${location.protocol==='file:'?`<p class="subtle">To send from the downloaded copy, <a href="${site}" target="_blank" rel="noopener">open the live site</a> or use Email directly.</p>`:''}<div class="actions"><button class="btn" type="submit" id="sendContact" ${pending.has(exam.id)?'disabled':''}>${pending.has(exam.id)?'Sending…':'Send'}</button><a class="text-btn" href="mailto:${recipient}">Email directly</a></div><p id="contactStatus" class="contact-status" role="status">${esc(status)}</p></form></section>`;
    const form=root.querySelector('#contactForm'),area=root.querySelector('#contactMessage');
    area.oninput=()=>drafts.set(exam.id,area.value);
    form.onsubmit=async e=>{
      e.preventDefault();if(pending.has(exam.id))return;
      const message=area.value.trim(),statusEl=root.querySelector('#contactStatus'),button=root.querySelector('#sendContact');
      function say(text){statuses.set(exam.id,text);if(root.querySelector('#contactForm')?.dataset.exam===exam.id)root.querySelector('#contactStatus').textContent=text;}
      if(!message){say('Please enter a message.');area.focus();return;}
      if(location.protocol==='file:'){say('Open the live site to send automatically, or use Email directly. Your draft stays here.');return;}
      if(!navigator.onLine){say('You’re offline. Your message is kept here; reconnect before sending.');return;}
      if(form.elements._honey.value){say('Could not submit this message. You can use the email link instead.');return;}
      if(Date.now()-(lastSubmission.get(exam.id)||0)<30000){say('Please wait a few seconds before submitting another message.');return;}
      drafts.set(exam.id,message);pending.add(exam.id);button.disabled=true;button.textContent='Sending…';statusEl.textContent='Submitting your message…';
      const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
      try{
        const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},credentials:'omit',referrerPolicy:'strict-origin-when-cross-origin',signal:controller.signal,body:JSON.stringify({message,exam:exam.label,_subject:'PSYCH 202 · '+exam.label+' · Website feedback',_url:site,_template:'table',_captcha:'false',_honey:''})});
        const result=await response.json();
        if(response.ok&&/activat/i.test(String(result.message||''))&&!(result.success===true||result.success==='true')){
          lastSubmission.set(exam.id,Date.now());
          say('Email forwarding is awaiting activation by the site owner. Your message is kept here; you can use Email directly in the meantime.');
          return;
        }
        if(!response.ok||!(result.success===true||result.success==='true'))throw Error('Not accepted');
        lastSubmission.set(exam.id,Date.now());drafts.delete(exam.id);
        if(root.querySelector('#contactForm')?.dataset.exam===exam.id)root.querySelector('#contactMessage').value='';
        say('Message submitted for forwarding to '+recipient+'. Thank you!');
      }catch{say('Your message could not be confirmed. It is kept here so you can retry, or use Email directly.');}
      finally{clearTimeout(timer);pending.delete(exam.id);if(root.querySelector('#contactForm')?.dataset.exam===exam.id){root.querySelector('#sendContact').disabled=false;root.querySelector('#sendContact').textContent='Send';}}
    };
  }
  globalThis.ContactTab={render};
})();
