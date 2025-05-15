document.getElementById("bestel-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const naam = document.getElementById("naam").value;
    const bestelling = document.getElementById("bestelling").value;

    console.log("Naam:", naam);
    console.log("Bestelling:", bestelling);

    // Laat bevestiging zien
    document.getElementById("bevestiging").classList.remove("hidden");

    // Optioneel: formulier resetten
    e.target.reset();
});