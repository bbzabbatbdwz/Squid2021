let isMotionAllowed=window.matchMedia('(prefers-reduced-motion: no-preference)');if(isMotionAllowed.matches){function splitLines(node,openTag,closingTag){var spans=node.children,top=0,tmp='';node.innerHTML=node.textContent.replace(/\S+/g,'<n>$&</n>');let count=0;let tempopenTag=openTag;for(let i=0;i<spans.length;i++){var rect=spans[i].getBoundingClientRect().top;if(top<rect){count++;delay=150+(count*50);openTag=openTag.replace('data-jazzy-scroll-delay',`style="transition-delay:${delay}ms"`);tmp+=closingTag+openTag;openTag=tempopenTag;}
top=rect;tmp+=spans[i].textContent+' ';}
node.innerHTML=tmp+=closingTag;}
document.querySelectorAll('[data-jazzy-scroll="split-lines"]').forEach(element=>{splitLines(element,'<span class="overflow-none"><span data-jazzy-scroll="slide-up" data-jazzy-scroll-delay>','</span></span>')});const JAZZYSCROLL=new JazzyScroll({speed:600,delay:0,offset:0});}
if(document.querySelectorAll('.features .feature-prop[id]').length){const options={root:null,rootMargin:'0px 0px -50% 0px',threshold:[0]}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{const id=entry.target.getAttribute('id');if(!document.querySelector(`.sticky-nav li a[href="#${id}"]`)){return;}
const navEl=document.querySelector(`.sticky-nav li a[href="#${id}"]`).parentElement;const prevSectionEl=document.querySelector(`.features .feature-prop[id=${id}]`).previousElementSibling;if(entry.isIntersecting){navEl.classList.add('active');if(prevSectionEl&&prevSectionEl.getAttribute('data-observed')!=='false'&&prevSectionEl.getAttribute('id')){prevSectionEl.setAttribute('data-observed','false');observer.unobserve(prevSectionEl);document.querySelector(`.sticky-nav li a[href="#${prevSectionEl.getAttribute('id')}"]`).parentElement.classList.remove('active');}}else{navEl.classList.remove('active');if(prevSectionEl&&prevSectionEl.getAttribute('data-observed')==='false'&&prevSectionEl.getAttribute('id')){prevSectionEl.setAttribute('data-observed','true');observer.observe(prevSectionEl);document.querySelector(`.sticky-nav li a[href="#${prevSectionEl.getAttribute('id')}"]`).parentElement.classList.add('active');}}});},options);document.querySelectorAll('.features .feature-prop[id]').forEach((section)=>{observer.observe(section);});}
const stickyNav=document.querySelector('.sticky-nav');if(stickyNav){const options={threshold:[1],rootMargin:'-1px 0px 0px 0px'}
const observer=new IntersectionObserver(([e])=>{if(e.boundingClientRect.top-10<=0){e.target.classList.toggle('super-sticky',e.intersectionRatio<1);}else{e.target.classList.remove('super-sticky');}},options);observer.observe(stickyNav);}
jQuery(function($){$('.reviews').slick({slidesToShow:2,slidesToScroll:1,adaptiveHeight:true,variableWidth:true,prevArrow:'.prev',nextArrow:'.next',infinite:false,});function scrollHelper(){let scrollTop=$(window).scrollTop();if(scrollTop>0){$('header').addClass('super-sticky');}else{$('header').removeClass('super-sticky');}}
$(window).scroll(function(){scrollHelper();});scrollHelper();const $menu=$('.mobile-menu');const $header=$('header');function mobileFiltering(){$menu.click(function(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();let status=$header.hasClass('active');if(status){$header.removeClass('active');$('html').removeClass('active');}else{$header.addClass('active');$('html').addClass('active');}});}
function mobileDrops(){$header.find('li.menu-item-has-children > a').click(function(e){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();let $link=$(this).parent();let status=$link.hasClass('active');if(status){$link.removeClass('active');}else{$link.addClass('active');}});}
function endMobile(){$menu.unbind();$header.removeClass('active');$header.find('li.menu-item-has-children > a').unbind();$header.find('li.menu-item-has-children').unbind().removeClass('active');$('html').removeClass('active');}
function checkMobile(){if(window.matchMedia('only screen and (max-width: 50em)').matches){mobileFiltering();mobileDrops();}else{endMobile();}}
checkMobile();$(window).on('resize load',function(){checkMobile();});$('.customization ul ul li p').click(function(){const $el=$(this);$el.parent().toggleClass('active');$el.next().slideToggle(300);});});$.get('/resources/script/servers.txt',function(data){$('.statistics ul li:nth-of-type(1) h4').html(data);});$.get('/resources/script/users.txt',function(data){$('.statistics ul li:nth-of-type(3) h4').html(data);});$.get('/resources/script/tickets.txt',function(data){$('.statistics ul li:nth-of-type(2) h4').html(data);});