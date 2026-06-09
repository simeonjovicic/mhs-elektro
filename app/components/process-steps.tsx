"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  PhoneCall,
  SearchCheck,
} from "lucide-react";

export type ProcessIcon =
  | "phone"
  | "calendar"
  | "search"
  | "clipboard"
  | "check";

export type ProcessItem = {
  title: string;
  text: string;
  icon: ProcessIcon;
};

type ProcessStepsProps = {
  items: ProcessItem[];
};

const icons = {
  phone: PhoneCall,
  calendar: CalendarCheck,
  search: SearchCheck,
  clipboard: ClipboardList,
  check: BadgeCheck,
};

export function ProcessSteps({ items }: ProcessStepsProps) {
  const flowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sequenceDelay = 180;

  useEffect(() => {
    const flow = flowRef.current;

    if (!flow) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.25,
      },
    );

    observer.observe(flow);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={flowRef}
      className={`process-flow${isVisible ? " is-visible" : ""}`}
    >
      {items.map((item, index) => {
        const Icon = icons[item.icon];

        return (
          <Fragment key={item.title}>
            <article
              className="process-step"
              style={{ animationDelay: `${index * 2 * sequenceDelay}ms` }}
            >
              <div className="process-icon-panel">
                <Icon size={42} aria-hidden="true" />
              </div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
            {index < items.length - 1 && (
              <div
                className="process-arrow"
                style={{
                  animationDelay: `${(index * 2 + 1) * sequenceDelay}ms`,
                }}
                aria-hidden="true"
              >
                <ArrowRight size={22} />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
