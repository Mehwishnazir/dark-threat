"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-12">
        <div className="bg-muted rounded-full p-1 flex">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 text-sm font-montserrat font-semibold rounded-full transition-colors ${
              !isAnnual ? "bg-primary text-black" : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 text-sm font-montserrat font-semibold rounded-full transition-colors ${
              isAnnual ? "bg-primary text-black" : "text-muted-foreground"
            }`}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          plan="Standard"
          monthlyPrice="$288"
          annualPrice="$2,000"
          discount="31%"
          isAnnual={isAnnual}
          features={[
            "Basic breach & credential monitoring",
            "1 x Domain coverage",
            "1 User",
            "Email notifications",
            "Web UI access",
          ]}
        />
        <PricingCard
          plan="Enterprise"
          monthlyPrice="$490"
          annualPrice="$3,400"
          discount="42%"
          popular
          isAnnual={isAnnual}
          features={[
            "Full domain & hacker chatter feeds",
            "2 x Domain/IP Coverage",
            "2 Users",
            "Email notifications",
            "Web UI access",
            "Priority support",
          ]}
        />
        <PricingCard
          plan="MSSP (WhiteLabel)"
          monthlyPrice="Custom"
          annualPrice="Custom"
          discount=""
          isCustom
          isAnnual={isAnnual}
          features={[
            "White-label portal",
            "Multi-tenant API",
            "Bulk onboarding",
            "Volume pricing",
            "Custom branding",
            "Dedicated support",
            "Custom threat intelligence feeds",
            "Unlimited API keys",
            "24/7 priority support",
          ]}
        />
      </div>
    </>
  );
}
