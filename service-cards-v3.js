(()=>{
  const grid=document.querySelector('.equipment-grid');
  if(!grid)return;

  const images=[
    'assets/services/04-backhoe-loader.webp',
    'assets/services/05-mobile-crane.webp',
    'assets/services/06-road-transport.webp',
    'assets/services/07-pallet-stacker.webp',
    'assets/services/08-lowbed-highbed.webp',
    'assets/services/09-forklift.webp'
  ];
  const content={
    ar:[
      ['معدات الإنشاءات الثقيلة','باكهو لودر وحفارات ولوادر ومعدات مواقع مختارة وفق طبيعة العمل والسعة ومدة التشغيل.'],
      ['الكرينات ومعدات الرفع','كرينات متنقلة وحلول رفع للمشاريع والمصانع، مع اختيار الحمولة ومدى الوصول المناسبين.'],
      ['الشاحنات والنقل البري','شاحنات وتريلات لنقل البضائع ومواد المشاريع بين المدن والموانئ والمستودعات في مختلف مناطق المملكة.'],
      ['معدات مناولة المستودعات','ستاكر وعربات منصات ومعدات مناولة مدمجة للمخازن ومراكز التوزيع.'],
      ['تريلات Low-bed وHigh-bed','حلول نقل للمعدات الثقيلة والحمولات والمركبات، مع اختيار نوع التريلا وفق الأبعاد والوزن ومسار النقل.'],
      ['الرافعات الشوكية','رافعات شوكية بسعات وارتفاعات رفع مختلفة للمستودعات والمصانع والساحات.']
    ],
    en:[
      ['Heavy Construction Equipment','Backhoe loaders, excavators, wheel loaders and site equipment selected for the job, capacity and operating period.'],
      ['Mobile Cranes & Lifting','Mobile cranes and lifting solutions matched to the required load, reach and project conditions.'],
      ['Trucks & Road Transport','Trucks and trailers for moving cargo and project materials between cities, ports and warehouses across Saudi Arabia.'],
      ['Warehouse Handling Equipment','Stackers, pallet trucks and compact handling equipment for warehouses and distribution centres.'],
      ['Low-bed & High-bed Trailers','Transport solutions for heavy equipment, loads and vehicles, selected according to dimensions, weight and route conditions.'],
      ['Forklifts','Forklifts in multiple capacities and lift heights for warehouses, factories and yards.']
    ]
  };

  const style=document.createElement('style');
  style.textContent='.equipment-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:18px!important}.equipment-grid .eq-card{grid-row:auto!important;min-height:430px!important}.equipment-grid .eq-card:after{background:linear-gradient(180deg,rgba(3,22,34,.02) 8%,rgba(3,22,34,.96) 92%)!important}.equipment-grid .eq-copy h3{font-size:26px}@media(max-width:900px){.equipment-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:600px){.equipment-grid{grid-template-columns:1fr!important}.equipment-grid .eq-card{min-height:390px!important}}';
  document.head.appendChild(style);

  function render(){
    const list=document.documentElement.lang==='ar'?content.ar:content.en;
    grid.innerHTML=list.map((item,index)=>`<article class="eq-card service-card" style="background-image:url('${images[index]}');background-position:center;background-size:cover"><div class="eq-copy"><small>${String(index+1).padStart(2,'0')}</small><h3>${item[0]}</h3><p>${item[1]}</p></div></article>`).join('');
  }
  render();
  document.getElementById('langBtn')?.addEventListener('click',()=>setTimeout(render,0));
})();
