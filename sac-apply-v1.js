(()=>{
  const C=window.SAC_COPY;if(!C)return;
  const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
  function sync(){
    const ar=document.documentElement.lang==='ar',L=ar?C.ar:C.en;
    q('[data-i18n="heroTitle"]').textContent=L.heroTitle;
    q('[data-i18n="heroText"]').textContent=L.heroText;
    q('[data-i18n="heroCta"]').textContent=L.heroCta;
    q('[data-i18n="heroExplore"]').textContent=L.heroExplore;
    q('[data-i18n="introTitle"]').textContent=L.introTitle;
    q('[data-i18n="introText"]').textContent=L.introText;
    q('[data-i18n="equipmentTitle"]').textContent=ar?'معدات للمشاريع والمصانع والمستودعات.':'Equipment for projects, factories and warehouses.';
    q('[data-i18n="equipmentText"]').textContent=ar?'اختيار فني، مقارنة تجارية، توريد منسق ودعم مستمر.':'Technical selection, commercial comparison, coordinated supply and ongoing support.';
    q('[data-i18n="processTitle"]').textContent=ar?'مسار واضح من الاحتياج إلى التسليم.':'A clear path from requirement to delivery.';
    qa('.steps article').forEach((card,index)=>{const item=L.process[index];if(item){card.querySelector('h3').textContent=item[0];card.querySelector('p').textContent=item[1]}});
    const sectors=ar?['المقاولات والبنية التحتية','المصانع والمنشآت الصناعية','المستودعات ومراكز التوزيع','الموانئ وساحات الحاويات','التطوير العقاري','المشاريع الحكومية والخاصة']:['Construction & Infrastructure','Factories & Industrial Facilities','Warehouses & Distribution Centres','Ports & Container Yards','Real Estate Development','Government & Private Projects'];
    qa('.industry-grid div').forEach((el,index)=>el.textContent=sectors[index]||el.textContent);
    q('[data-i18n="contactTitle"]').textContent=ar?'أخبرنا ما المعدات التي تحتاجها.':'Tell us what equipment you need.';
    q('[data-i18n="contactText"]').textContent=ar?'شارك النوع والكمية والسعة والاستخدام والموقع وموعد التسليم المطلوب.':'Share the type, quantity, capacity, application, location and required delivery date.';
  }
  sync();q('#langBtn')?.addEventListener('click',()=>setTimeout(sync,0));
})();
