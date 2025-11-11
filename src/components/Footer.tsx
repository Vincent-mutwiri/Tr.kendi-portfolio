import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Winfred Kendi
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} Winfred Kendi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
