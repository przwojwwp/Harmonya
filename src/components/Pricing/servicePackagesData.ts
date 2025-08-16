export const servicePackages = [
  {
    icon: "fas fa-peace",
    recommendation: false,
    title: "Kampania Reklamowa",
    price: 1599,
    period: "kampania",
    description:
      "Idealne uzupełnienie dla firm, które potrzebują szybkiego wzrostu rozpoznawalności.",
    services: [
      "Analiza grupy docelowej",
      "Strategia reklamowa",
      "Kreacja materiałów",
      "Ustawienie i optymalizacja",
      "Codzienny monitoring",
      "Raport wyników",
      "Rekomendacje",
    ],
    excludedServices: [],
    additionalCost: ["Budżet reklamowy płatny dodatkowo"],
  },
  {
    icon: "fas fa-seedling",
    recommendation: false,
    title: "Social Media",
    price: 1999,
    period: "miesiąc",
    description:
      "Idealne rozwiązanie dla firm, które chcą profesjonalnie zaistnieć w mediach społecznościowych.",
    services: [
      "Strategia komunikacji",
      "12 postów miesięcznie",
      "Stories 3x w tygodniu",
      "Profesjonalne grafiki",
      "Angażujące treści",
      "Moderacja komentarzy",
      "Raport miesięczny",
    ],
    excludedServices: [
      "Kampanie reklamowe",
      "Sesje zdjęciowe",
      "Kwartalna sesja zdjęciowa",
      "Newsletter (2x w miesiącu)",
      "Optymalizacja profili",
    ],
  },

  {
    icon: "fas fa-spa",
    recommendation: true,
    title: "Holistyczna Strategia Widoczności",
    price: 3499,
    period: "miesiąc",
    description:
      "Kompleksowe rozwiązanie dla biznesów, które chcą zaistnieć w świadomości klientów",
    services: [
      "Strategia komunikacji",
      "16 postów miesięcznie",
      "Stories 5x w tygodniu",
      "Profesjonalne grafiki",
      "Angażujące treści",
      "Moderacja komentarzy",
      "Raport miesięczny",
      "Kampanie reklamowe",
      "Kwartalna sesja zdjęciowa",
      "Newsletter (2x w miesiącu)",
      "Optymalizacja profili",
    ],
    excludedServices: [],
    additionalCost: ["Budżet reklamowy płatny dodatkowo"],
  },
].map((servicePackage) => ({
  id: servicePackage.title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-"),
  ...servicePackage,
}));
