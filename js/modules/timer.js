const timer = (id, deadline) => {
  const addZero = (num) => {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  };

  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor(((t / 1000) * 60 * 60) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      totalNow: t,
      daysNow: days,
      hoursNow: hours,
      minutesNow: minutes,
      secondsNow: seconds,
    };
  };

  const setCLock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const d = timer.querySelector("#days");
    const h = timer.querySelector("#hours");
    const m = timer.querySelector("#minutes");
    const s = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      d.textContent = addZero(t.daysNow);
      h.textContent = addZero(t.hoursNow);
      m.textContent = addZero(t.minutesNow);
      s.textContent = addZero(t.secondsNow);

      if (t.total <= 0) {
        d.textContent = "00";
        h.textContent = "00";
        m.textContent = "00";
        s.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  };

  setCLock(id, deadline);
};

export default timer;
