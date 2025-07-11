function checkboxisim(checkbox){
  const check1 = document.getElementById("ypd");
  const check2 = document.getElementById("ypmd");
  const alarm = document.getElementById("alarm");
  const alarm2 = document.getElementById("alarmkap");
  const alarmkap = document.getElementById("alarm-but");
  const alarmkap2 = document.getElementById("alarmkap-but");

  check1.addEventListener("change", () => {
    if (check1.checked) {
      check2.checked = false;
      alarm.classList.remove("gizli");
    }
  });

  check2.addEventListener("change", () => {
    if (check2.checked) {
      check1.checked = false;
      alarm2.classList.remove("gizli");
    }
  });

  alarmkap.addEventListener("click", () => {
    alarm.classList.add("gizli");
  });

  alarmkap2.addEventListener("click", () => {
    alarm2.classList.add("gizli");
  });
}

checkboxisim();

function listeyeni(){
  const listeyeni = document.getElementById("yeniliste");
  const tablo = document.getElementById("tb");
  const hedefsatir = tablo.rows[1];
  

  listeyeni.addEventListener("click", () => {
    const yenisatir = tablo.insertRow();
   
    for (let i = 0; i < hedefsatir.cells.length; i++) {
      const yenhucre = yenisatir.insertCell();
      yenhucre.innerHTML = hedefsatir.cells[i].innerHTML; }
    });
}
listeyeni();