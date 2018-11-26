new PlayerCounter({
  element: element,
  ip: document.getElementById("playercounter").data-playercounter-ip,
  format: '{online}', // default {online}
  refreshRate: 1000 // default 5s (5000)
});