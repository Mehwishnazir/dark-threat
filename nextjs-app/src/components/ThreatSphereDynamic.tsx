"use client";

import dynamic from "next/dynamic";

const ThreatSphereFallback = () => (
  <div
    aria-hidden
    className="w-full h-full min-h-[280px] bg-gradient-to-br from-primary/15 via-transparent to-primary/5"
  />
);

const ThreatSphere = dynamic(() => import("@/components/ThreatSphere"), {
  ssr: false,
  loading: () => <ThreatSphereFallback />,
});

export default ThreatSphere;
