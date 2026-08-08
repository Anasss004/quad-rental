export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
      © {year} Elta Quad — Location de quads à l&apos;heure
    </footer>
  );
}
