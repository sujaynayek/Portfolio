import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="section-container">
        <SectionHeading label="Background" title="Education" />

        <div className="max-w-full">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  <GraduationCap
                    size={22}
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-display font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-base font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {edu.field}
                  </p>
                </div>
              </div>

              {/* Institution info */}
              <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-2 mb-5 text-sm">
                <span
                  className="font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  {edu.institution}
                </span>
                <div className=" flex flex-col items-start sm:items-end justify-center">
                  <span
                    className="flex items-center gap-1.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <MapPin size={12} /> {edu.location}
                  </span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <Calendar size={12} /> {edu.duration}
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div
                className="pt-5"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen
                    size={14}
                    style={{ color: "var(--color-primary)" }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Relevant Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
