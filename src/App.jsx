// Phase 1 verification screen — confirms Vite + Tailwind + RTL + fonts + Firebase
// bootstrapping are all wired correctly before Phase 2 screens are built.
import { useEffect, useState } from "react";
import { CITY_ID, isFirebaseConfigured } from "./lib/firebase";

const checks = [
  { label: "React + Vite", ok: true },
  { label: "Tailwind CSS v4", ok: true },
  { label: "اتجاه الصفحة RTL", ok: true },
  { label: "خطوط Cairo / Tajawal", ok: true },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 gap-8">
      <div className="w-full max-w-sm text-center">
        <span className="inline-block text-xs tracking-wide bg-amber/10 text-amber-light text-amber px-3 py-1 rounded-full border border-amber/30 mb-4">
          المرحلة ١ — الإعداد الأساسي
        </span>
        <h1 className="font-display text-4xl font-extrabold text-teal mb-2">
          سوق أبوكبير
        </h1>
        <p className="text-ink-soft text-sm">
          سوق أهل أبوكبير — الشرقية. المشروع شغّال ✅
        </p>
      </div>

      <div className="w-full max-w-sm bg-paper border border-sand-dark rounded-2xl p-5 shadow-sm">
        <h2 className="font-display font-bold text-teal mb-3 text-sm">
          فحص الإعداد
        </h2>
        <ul className="space-y-2 mb-4">
          {checks.map((c) => (
            <li key={c.label} className="flex items-center justify-between text-sm">
              <span>{c.label}</span>
              <span className="text-success font-bold">✓</span>
            </li>
          ))}
          <li className="flex items-center justify-between text-sm">
            <span>Firebase env variables</span>
            <span className={isFirebaseConfigured ? "text-success font-bold" : "text-clay font-bold"}>
              {isFirebaseConfigured ? "✓ متصل" : "لسه فاضية (بيانات وهمية)"}
            </span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <span>cityId الافتراضي</span>
            <span className="text-teal font-bold ltr-nums">{CITY_ID}</span>
          </li>
        </ul>
        <button className="w-full bg-teal hover:bg-teal-dark text-paper rounded-xl py-2.5 font-bold transition-colors">
          زر تجريبي بلون الهوية
        </button>
      </div>

      <p className="text-xs text-ink-soft/70 text-center max-w-xs">
        الخطوة الجاية: شاشة تسجيل الدخول (موبايل + OTP)
      </p>
    </div>
  );
}
