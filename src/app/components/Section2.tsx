'use client';

import { useEffect, useState } from 'react';
import localFont from 'next/font/local';

const fontKO = localFont({ src: '../KaiseiOpti-Medium.ttf' });

export default function Section2() {
  const [motto, setMotto] = useState('');

  useEffect(() => {
    setMotto('明日は明日の風が吹く');
  }, []);
  return (
    <div className={`w-full h-screen backdrop-blur flex items-center justify-center ${fontKO.className}`}>
      <h1 className="text-7xl font-bold text-gray-50">
        モットー：
        {' '}
        {motto}
      </h1>
    </div>
  );
}
