import localFont from 'next/font/local';

import Frontend from './components/skills/Frontend';
import Section2 from './components/Section2';

const fontKO = localFont({ src: './KaiseiOpti-Medium.ttf' });
function Section1() {
  return (
    <div className={`w-full h-screen backdrop-blur-md flex items-center justify-center ${fontKO.className}`}>
      <h1 className="text-9xl font-bold text-gray-50">
        Hi it&#39;s 禊萩👋
      </h1>
    </div>
  );
}
function Section3() {
  return (
    <div className={`w-full h-screen flex items-center justify-center ${fontKO.className}`}>
      <h1 className="text-9xl font-bold text-gray-50">
        Skills
      </h1>
    </div>
  );
}

export default function Me() {
  return (
    <main>
      <div className="z-10 fixed bg-cover w-full h-screen bg-[url('/misohagi.jpg')] opacity" />
      <div className="z-20 relative">
        <Section1 />
        <Section2 />
        <Section3 />
        <div className="w-ful  bg-slate-50">
          <Frontend />
        </div>
        <div
          className="w-full h-screen flex items-center justify-center"
          style={{ backgroundColor: '#ADB367' }}
        >
          <h1 className={`text-3xl font-bold ${fontKO.className}`}>
            茶しばかへん?
          </h1>
        </div>
      </div>
    </main>
  );
}