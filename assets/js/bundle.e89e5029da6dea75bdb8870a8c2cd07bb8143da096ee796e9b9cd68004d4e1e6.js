(()=>{var n="details-opened",a="details-closed";var h="ease",t=class{constructor(i){this.el=i,this.summary=i.querySelector("summary"),this.content=[...i.children].find(s=>s.tagName!=="SUMMARY"),this.changeSummaryClass(i.open),this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",s=>this.onClick(s))}changeSummaryClass(i){i?(this.summary.classList.remove(a),this.summary.classList.add(n)):(this.summary.classList.remove(n),this.summary.classList.add(a))}onClick(i){i.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?(this.changeSummaryClass(!0),this.open()):(this.isExpanding||this.el.open)&&(this.changeSummaryClass(!1),this.shrink())}shrink(){this.isClosing=!0;let i=`${this.el.offsetHeight}px`,s=`${this.summary.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[i,s]},{duration:350,easing:h}),this.animation.onfinish=()=>this.onAnimationFinish(!1),this.animation.oncancel=()=>this.isClosing=!1}open(){this.el.style.height=`${this.el.offsetHeight}px`,this.el.open=!0,window.requestAnimationFrame(()=>this.expand())}expand(){this.isExpanding=!0;let i=`${this.el.offsetHeight}px`,s=`${this.summary.offsetHeight+this.content.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[i,s]},{duration:350,easing:h}),this.animation.onfinish=()=>this.onAnimationFinish(!0),this.animation.oncancel=()=>this.isExpanding=!1}onAnimationFinish(i){this.el.open=i,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("details").forEach(e=>new t(e))});})();
