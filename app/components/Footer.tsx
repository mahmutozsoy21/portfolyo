export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-5xl mx-auto p-4 text-gray-500 text-center">
        <span>© {new Date().getFullYear()} Tüm Hakları Saklıdır</span>
        {/*<span>AI • Mobile • Intelligent Systems</span>*/}
      </div>
    </footer>
  );
}
