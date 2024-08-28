
// Array di oggetti che rappresentano i membri del team
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];
console.log("Array dei membri del team:", team);

// Selezione del contenitore nel DOM dove verranno inserite le card
const container = document.getElementById('team-container');

console.log("Container selezionato:", container);

// Iterazione su ogni membro del team per generare le card dinamicamente
team.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('team-card');

    console.log("Generazione card per:", member.nome);

    card.innerHTML = `
        <img src="img/${member.foto}" alt="${member.nome}">
        <h3>${member.nome}</h3>
        <p>${member.ruolo}</p>
    `;
    console.log(`Percorso immagine per ${member.nome}: img/${member.foto}`);

    // Inserimento dell'HTML all'interno del div, includendo l'immagine, il nome e il ruolo del membro
    container.appendChild(card);
    console.log(`Card aggiunta al DOM per ${member.nome}`);
});