!function(){var m=new Date("2021/07/10 16:03:05");function u(n,m){return(Array(m).join(0)+n).slice(-m)}function n(){var n=new Date;n.setTime(n.getTime()+250),days=(n-m)/1e3/60/60/24,dnum=Math.floor(days),hours=(n-m)/1e3/60/60-24*dnum,hnum=Math.floor(hours),minutes=(n-m)/1e3/60-1440*dnum-60*hnum,mnum=Math.floor(minutes),seconds=(n-m)/1e3-86400*dnum-3600*hnum-60*mnum,snum=Math.round(seconds),hnum=u(hnum,2),mnum=u(mnum,2),snum=u(snum,2),document.getElementById("website-duration").innerHTML=`本站已运行&nbsp${dnum}&nbsp天&nbsp${hnum}&nbsp小时&nbsp${mnum}&nbsp分&nbsp${snum}&nbsp秒`}n(),setInterval(n,1e3)}();