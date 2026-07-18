(()=>{
  const intro=document.querySelector('.intro');if(intro)intro.id='about';
  document.querySelector('.about')?.remove();document.querySelector('.sac-extra')?.remove();
  const before=document.querySelector('.contact');if(!before)return;
  const sec=document.createElement('section');sec.className='sac-extra section';sec.id='why';
  sec.innerHTML='<div class="container"><div class="why-block"><span class="kicker">WHY SAC LOGISTICS</span><h2 class="why-title"></h2><div class="why-grid"></div></div></div>';before.before(sec);
  const content={
    ar:[['اختيار فني','مطابقة المعدة مع الحمل وبيئة التشغيل ومتطلبات السلامة.'],['شبكة توريد مؤهلة','الوصول إلى مصنعين وموردين محليين ودوليين موثوقين.'],['مقارنة واضحة','مقارنة المواصفات والأسعار والتوفر وشروط الدعم.'],['تنسيق متكامل','متابعة الاعتمادات والحجز والنقل والتسليم من جهة واحدة.'],['دعم ما بعد البيع','تنسيق الضمان وقطع الغيار والصيانة عند الحاجة.'],['تغطية المملكة','خدمة المشاريع والمنشآت في مختلف مناطق السعودية.']],
    en:[['Technical Selection','Equipment matched to load, operating conditions and safety requirements.'],['Qualified Supply Network','Access to reliable local and international manufacturers and suppliers.'],['Clear Comparison','Specifications, pricing, availability and support terms compared clearly.'],['Integrated Coordination','Approvals, booking, transport and delivery managed through one partner.'],['After-Sales Support','Warranty, spare parts and maintenance coordination when required.'],['Kingdom-Wide Coverage','Supporting projects and facilities across Saudi Arabia.']]
  };
  function sync(){const ar=document.documentElement.lang==='ar',list=ar?content.ar:content.en;sec.querySelector('.kicker').textContent=ar?'لماذا SAC LOGISTICS؟':'WHY SAC LOGISTICS';sec.querySelector('.why-title').textContent=ar?'قيمة عملية في كل مرحلة من التوريد.':'Practical value at every stage of supply.';sec.querySelector('.why-grid').innerHTML=list.map(x=>`<article><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}
  sync();document.getElementById('langBtn')?.addEventListener('click',()=>setTimeout(sync,0));
})();
