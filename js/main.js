(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Noise Reduction",
      text: "Advanced noise reduction for immersive listening, blocking out distractions effortlessly",
      image: "images/noise-reduction.svg",
    },
    {
      title: "Waterproof",
      text: "Reliable waterproofing for all-weather listening and sweat-resistant durability",
      image: "images/waterproof.svg",
    },
    {
      title: "Upgraded Sound Quality",
      text: "Enhanced sound with richer bass,clear mids, and sharp highs",
      image: "images/sound-quality.svg",
    },
    {
      title: "Bluetooth Connection",
      text: "Seamless Bluetooth connection for stable, lag-free, and easy pairing",
      image: "images/bluetooth.svg",
    },
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const imgHotspot = document.createElement("img");
      imgHotspot.src = infoBox.image;
      imgHotspot.style.width = "100px";

      const titleHotspot = document.createElement("h2");
      titleHotspot.textContent = infoBox.title;

      const textHotspot = document.createElement("p");
      textHotspot.textContent = infoBox.text;

      selected.appendChild(imgHotspot);
      selected.appendChild(titleHotspot);
      selected.appendChild(textHotspot);
    });
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
