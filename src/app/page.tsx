import localFont from 'next/font/local';

import Section2 from './components/Section2';
import Backend from './components/skills/Backend';
import CyberSecurity from './components/skills/CyberSecurity';
import DevOps from './components/skills/DevOps';
import Frontend from './components/skills/Frontend';
import FullStack from './components/skills/FullStack';
import MLOps from './components/skills/MLOps';
import PostgreSQL from './components/skills/PostgreSQL';
import QA from './components/skills/QA';
import SoftwareArchitect from './components/skills/SoftwareArchitect';

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
      <div className="z-10 fixed bg-cover w-full h-screen bg-[url('/me/misohagi.jpg')] opacity" />
      <div className="z-20 relative">
        <Section1 />
        <Section2 />
        <Section3 />
        <div className="w-ful  bg-slate-50">
          <Frontend />
          <Backend />
          <FullStack />
          <DevOps />
          <MLOps />
          <CyberSecurity />
          <PostgreSQL />
          <QA />
          <SoftwareArchitect />
        </div>
        <div
          className="w-full h-screen flex flex-wrap items-center justify-center"
          style={{ backgroundColor: '#ADB367' }}
        >
          <div className="w-full flex items-center justify-center">
            <h1 className={`text-3xl font-bold ${fontKO.className}`}>
              茶しばかへん?
            </h1>
          </div>
          <div>
            <iframe title="kyouno-neko" width={800} height={800} src="https://misogihagi.github.io/kyouno-neko/" />
          </div>
        </div>
      </div>
    </main>
  );
}
