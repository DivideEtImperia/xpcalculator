function calculateXP(btn) {
  let level = btn.form.elements['level'].value;
  level = parseInt(level);

  if (level >= 0) {
    btn.form.elements['xp'].value = Math.floor((level / 0.15) * (level / 0.15));
  }
}
