// attractions.js

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("attractions-container");

  const attractions = [
    {
      name: "Monkey River",
      image: "https://www.jungle-city.be/site/files/images/attracties/attractie008.jpg",
      minHeightWithAdult: "120cm",
      minHeightAlone: "130cm",
      isNew: true,
      frontText: "💦 Montez à bord de nos bûches pour une aventure sauvage !",
      backText: "🌊 Monkey River est une attraction familiale avec des virages et des éclaboussures. Parfait pour les amateurs de sensations douces."
    },
    {
      name: "Mini Safari",
      image: "https://via.placeholder.com/400x250?text=Mini+Safari",
      minHeightWithAdult: "90cm",
      minHeightAlone: "110cm",
      isNew: false,
      frontText: "🦁 Découvrez les animaux en jeep miniature !",
      backText: "🐾 Mini Safari vous fait traverser un décor peuplé d'animaux sauvages animés. Pour les jeunes explorateurs !"
    },
    {
      name: "Jungle Jump",
      image: "https://via.placeholder.com/400x250?text=Jungle+Jump",
      minHeightWithAdult: "100cm",
      minHeightAlone: "120cm",
      isNew: true,
      frontText: "🦘 Une tour de saut rebondissante pleine de fun !",
      backText: "🪂 Jungle Jump propulse les enfants en l'air dans un jeu de ressorts géants sécurisé."
    },
    {
      name: "Tunnels Mystérieux",
      image: "https://via.placeholder.com/400x250?text=Tunnels+Mystérieux",
      minHeightWithAdult: "0cm",
      minHeightAlone: "100cm",
      isNew: false,
      frontText: "🌌 Explore des tunnels sombres et rigolos !",
      backText: "🔦 Attention aux surprises ! Les tunnels sont pleins de lumières, sons et mystères amusants à découvrir."
    }
  ];

  attractions.forEach(attr => {
    const card = document.createElement("div");
    card.className = "attraction-card";

    if (attr.isNew) {
      card.innerHTML = `
        <div class="card-front">
          <div class="new-badge">NEW</div>
          <img src="${attr.image}" alt="${attr.name}" />
          <h3>${attr.name}</h3>
          <div class="heights">
            <span>Accompagné: ${attr.minHeightWithAdult}</span>
            <span>Seul: ${attr.minHeightAlone}</span>
          </div>
          <div class="hover-text">${attr.frontText}</div>
        </div>
        <div class="card-back">
          <p>${attr.backText}</p>
          <span class="click-back">🔙 Retour</span>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="card-front">
          <img src="${attr.image}" alt="${attr.name}" />
          <h3>${attr.name}</h3>
          <div class="heights">
            <span>Accompagné: ${attr.minHeightWithAdult}</span>
            <span>Seul: ${attr.minHeightAlone}</span>
          </div>
          <div class="hover-text">${attr.frontText}</div>
        </div>
        <div class="card-back">
          <p>${attr.backText}</p>
          <span class="click-back">🔙 Retour</span>
        </div>
      `;
    }

    // Flip logic
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    container.appendChild(card);
  });
});
