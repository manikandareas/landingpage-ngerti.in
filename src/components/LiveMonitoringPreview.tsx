"use client";

import * as React from "react";
import { Safari } from "@/components/ui/safari";

export const LiveMonitoringPreview = () => {
  const appUrl = import.meta.env.PUBLIC_APP_URL || "http://localhost:3000";
  const demoUrl = `${appUrl}/demo/activity`;

  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-20 lg:pt-6 lg:pb-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Safari Browser Frame */}
        <div className="relative max-w-6xl mx-auto">
          <Safari 
            url={demoUrl} 
            width={1203} 
            height={753} 
            mode="default" 
            className="w-full h-auto"
          >
            <iframe 
              src={demoUrl}
              className="w-full h-full border-0"
              title="Live Monitoring Dashboard"
              loading="lazy"
            />
          </Safari>
        </div>
      </div>
    </section>
  );
};
