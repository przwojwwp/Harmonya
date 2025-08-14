export const faq = [
  {
    question: "Jak wygląda proces rozpoczęcia współpracy?",
    answer:
      "Proces rozpoczyna się od bezpłatnej konsultacji, podczas której poznajemy Twoje potrzeby i cele biznesowe. Następnie przygotowujemy spersonalizowaną propozycję współpracy, dopasowaną do Twoich potrzeb. Po akceptacji warunków rozpoczynamy od audytu Twojej obecnej sytuacji marketingowej i wdrażamy strategię działania.",
  },
  {
    question: "Jak długo trwa minimum współpracy?",
    answer:
      "Zalecamy minimum 3-miesięczną współpracę, aby osiągnąć widoczne i trwałe efekty. Marketing to proces, a budowanie solidnej obecności w sieci wymaga czasu. Po pierwszych 3 miesiącach przygotowujemy raport z wynikami i rekomendacjami na przyszłość.",
  },
  {
    question: "Czy specjalizujecie się tylko w branży wellness?",
    answer:
      "Tak, specjalizujemy się wyłącznie w branży wellness, co pozwala nam doskonale rozumieć jej specyfikę i potrzeby klientów. Pracujemy z centrami jogi, studiami pilatesu, gabinetami terapii naturalnych, dietetykami, trenerami personalnymi i innymi profesjonalistami z tego obszaru.",
  },
  {
    question: "Czy muszę dostarczać własne zdjęcia i teksty?",
    answer:
      "Nie, to my zajmujemy się tworzeniem profesjonalnych treści. W zależności od wybranego pakietu, możemy organizować sesje zdjęciowe, tworzyć treści tekstowe i graficzne. Współpracujemy też z ekspertami w dziedzinie wellness, którzy pomagają nam tworzyć wartościowe i merytoryczne treści.",
  },
  {
    question: "Jak mierzysz efekty swoich działań?",
    answer:
      "Regularnie monitorujemy i raportujemy kluczowe wskaźniki efektywności (KPI), takie jak: wzrost liczby obserwujących, poziom zaangażowania, zasięg postów, ruch na stronie, liczba zapytań i konwersji. Co miesiąc otrzymujesz przejrzysty raport z analizą wyników i rekomendacjami na kolejny okres.",
  },
  {
    question:
      "Czy pomagacie także w prowadzeniu płatnych kampanii reklamowych?",
    answer:
      "Tak, oferujemy kompleksowe prowadzenie kampanii reklamowych w mediach społecznościowych (Facebook, Instagram) oraz Google Ads. Zajmujemy się planowaniem, tworzeniem, optymalizacją i raportowaniem kampanii. Budżet reklamowy jest ustalany indywidualnie i jest kosztem dodatkowym do pakietu współpracy.",
  },
  {
    question: "Co jeśli mam już swój styl graficzny i branding?",
    answer:
      "Z przyjemnością dostosujemy się do Twojego istniejącego brandingu i stylu. Jeśli jednak zauważymy obszary, które mogłyby zostać ulepszone, zaproponujemy subtelne zmiany, które pomogą wzmocnić Twoją markę, ale ostateczna decyzja zawsze należy do Ciebie.",
  },
  {
    question: "Czy mogę w dowolnym momencie zakończyć współpracę?",
    answer:
      "Po zakończeniu minimalnego 3-miesięcznego okresu współpracy, możesz zakończyć współpracę z jednomiesięcznym wypowiedzeniem. Zależy nam na długoterminowych relacjach, ale rozumiemy, że potrzeby biznesowe mogą się zmieniać.",
  },
].map((item) => ({
  id: item.question
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-"),
  ...item,
}));
