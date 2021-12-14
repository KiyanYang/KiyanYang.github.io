!(function () {
  // 计时起始时间
  var start = new Date("2021/07/10 16:03:05");

  // 前面补零
  function prefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  }

  function update() {
    var now = new Date();
    now.setTime(now.getTime() + 250);
    days = (now - start) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - start) / 1000 / 60 / 60 - 24 * dnum;
    hnum = Math.floor(hours);
    minutes = (now - start) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum;
    mnum = Math.floor(minutes);
    seconds = (now - start) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum;
    snum = Math.round(seconds);

    hnum = prefixInteger(hnum, 2);
    mnum = prefixInteger(mnum, 2);
    snum = prefixInteger(snum, 2);

    document.getElementById(
      "website-duration"
    ).innerHTML = `本站已运行&nbsp${dnum}&nbsp天&nbsp${hnum}&nbsp小时&nbsp${mnum}&nbsp分&nbsp${snum}&nbsp秒`;
  }

  update();
  setInterval(update, 1000);
})();
