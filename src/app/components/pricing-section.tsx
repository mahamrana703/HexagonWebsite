import React from "react";
import { motion } from "motion/react";
import { GlassCard } from "./glass-card";
import { Check, Star, Zap, Package, RefreshCw, Wallet } from "lucide-react";
import { ParallaxElement } from "./parallax-element";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./magnetic-button";

const howItWorks = [
  {
    icon: Package,
    step: "01",
    title: "Buy Credit Packs",
    desc: "Purchase credit packs from your dashboard anytime — no commitment required. Credits are added instantly to your account.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Credits Deducted Per Minute",
    desc: "Every AI call deducts credits based on minutes used. You can track live usage from your dashboard in real time.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Top Up Whenever You Need",
    desc: "Running low? Head to the billing section and add more credit packs instantly. No approval process, no waiting.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Credits Never Expire",
    desc: "Your unused credits roll over indefinitely. There's no monthly reset — pay once, use at your own pace.",
  },
];

const creditPacks = [
  {
    credits: "$25",
    minutes: "~250 mins",
    perMin: "$0.10 / min",
    badge: null,
  },
  {
    credits: "$65",
    minutes: "~750 mins",
    perMin: "$0.087 / min",
    badge: "Save 13%",
  },
  {
    credits: "$100",
    minutes: "~1,250 mins",
    perMin: "$0.080 / min",
    badge: "Best Value",
  },
];

const subscription = {
  name: "Hexagon Monthly Plan",
  price: "$49",
  period: "/month",
  highlight: "500 mins included every month",
  note: "Additional usage billed at $0.08 / min from your credits",
  features: [
    "Priority queue processing",
    "Advanced analytics dashboard",
    "CRM & API integrations",
    "Custom voice training",
    "Multi-language support",
    "Dedicated support channel",
  ],
};

export function PricingSection() {
  return (
    <section className="pb-20 pt-30 px-6 relative z-20">
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Heading */}
        <ParallaxElement speed={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "700" }}
            >
              Simple,{" "}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Pay-As-You-Go
              </span>{" "}
              Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No seat fees, no hidden charges. Buy credits from your dashboard,
              use them at your own pace, and top up whenever you need.
            </p>
          </motion.div>
        </ParallaxElement>

        {/* How it works — 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {howItWorks.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1279e4]/10 to-[#189f6c]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1279e4]" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1279e4]/60 tracking-widest uppercase">
                      Step {step}
                    </span>
                    <h4 className="font-bold text-gray-800 mt-0.5 mb-2 text-base">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Credit packs + Subscription side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Credit Packs */}
          <ParallaxElement speed={0.2} direction="down">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Credit Packs
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Available in your dashboard under{" "}
                  <span className="font-medium text-gray-700">
                    Billing → One-Time Credit Top Up
                  </span>
                  . Buy as many packs as you need.
                </p>

                <div className="flex flex-col gap-4">
                  {creditPacks.map((pack, i) => (
                    <motion.div
                      key={pack.credits}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/60 border border-gray-100"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                          {pack.credits}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {pack.minutes}
                          </p>
                          <p className="text-xs text-gray-400">{pack.perMin}</p>
                        </div>
                      </div>
                      {pack.badge && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#189f6c]/10 to-[#1279e4]/10 text-[#189f6c] border border-[#189f6c]/20">
                          {pack.badge}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#1279e4]/5 border border-[#1279e4]/10">
                  <p className="text-sm text-gray-600">
                    💡{" "}
                    <span className="font-medium text-gray-700">
                      Larger packs = lower per-minute rate.
                    </span>{" "}
                    You can purchase multiple packs at once directly from the
                    billing page in your dashboard.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </ParallaxElement>

          {/* Monthly Subscription */}
          <ParallaxElement speed={0.25} direction="up">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg z-30 whitespace-nowrap"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              >
                <Star className="w-4 h-4 fill-white" />
                Best for Regular Users
              </motion.div>

              <GlassCard className="p-8 ring-2 ring-[#1279e4] h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {subscription.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Subscribe from your dashboard to get a monthly bundle of
                  minutes at a fixed rate.
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                      {subscription.price}
                    </span>
                    <span className="text-gray-500">{subscription.period}</span>
                  </div>
                  <p className="text-sm font-medium text-[#189f6c]">
                    {subscription.highlight}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {subscription.note}
                  </p>
                </div>

                <ul className="space-y-3">
                  {subscription.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#189f6c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#189f6c]" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 p-4 rounded-xl bg-[#189f6c]/5 border border-[#189f6c]/10">
                  <p className="text-sm text-gray-600">
                    💡{" "}
                    <span className="font-medium text-gray-700">
                      Manage your subscription
                    </span>{" "}
                    anytime from{" "}
                    <span className="font-medium text-gray-700">
                      Billing → Stripe Subscription & Payments
                    </span>{" "}
                    in your dashboard.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </ParallaxElement>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm">
            All billing is managed securely through{" "}
            <span className="font-medium text-gray-700">Stripe</span>. View
            invoices, change plans, and manage payment methods directly from
            your dashboard.
          </p>
        </motion.div>
        <div className="flex items-center justify-center mt-6">
          <Link to="https://hexagon-crm-five.vercel.app/register">
            <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-[#1279e4] to-[#5baffc] text-white rounded-lg font-semibold shadow-lg shadow-[#1279e4]/30 hover:shadow-xl hover:shadow-[#1279e4]/40 transition-all flex items-center gap-2">
              <span>Get Started </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
