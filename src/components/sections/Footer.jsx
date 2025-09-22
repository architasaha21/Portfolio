export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-6 text-center text-gray-400 text-sm">
      <p className="mb-2">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="text-white font-medium">Archita</span>
      </p>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()}. All Rights Reserved.
      </p>
      
    </footer>
  );
};
