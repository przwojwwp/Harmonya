export const benefits = [
  {
    title: "Zaopiekowany Marketing",
    icon: "fas fa-hand-holding-heart",
    description:
      "Przejmujemy pełną odpowiedzialność za Twój marketing, abyś mógł skupić się na prowadzeniu swojego biznesu i pracy z klientami.",
  },
  {
    title: "Profesjonalne Social Media",
    icon: "fas fa-hashtag",
    description:
      "Tworzymy angażujące treści i budujemy społeczność wokół Twojej marki, zwiększając rozpoznawalność i zaufanie do Twoich usług.",
  },
  {
    title: "Eksperckie Wsparcie",
    icon: "fas fa-chart-line",
    description:
      "Nasz zespół specjalistów z doświadczeniem w branży wellness zapewnia strategiczne doradztwo i rozwiązania dopasowane do Twoich potrzeb.",
  },
  {
    title: "Holistyczne Podejście",
    icon: "fas fa-sync-alt",
    description:
      "Łączymy różne kanały komunikacji i marketingu, tworząc spójny przekaz, który rezonuje z wartościami Twojej marki i Twoich klientów.",
  },
].map((item) => ({
  id: item.title
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-"),
  ...item,
}));
