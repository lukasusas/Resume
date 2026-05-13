'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/content/types';
import { getSkillsByCategory } from '@/content';
import { Section } from '@/components/ui';

function getSkillColors(level: number): { dot: string; bg: string; border: string } {
  if (level >= 90) return { 
    dot: 'bg-emerald-500', 
    bg: 'bg-emerald-50 dark:bg-emerald-950/30', 
    border: 'border-emerald-200 dark:border-emerald-800/50' 
  };
  if (level >= 75) return { 
    dot: 'bg-blue-500', 
    bg: 'bg-blue-50 dark:bg-blue-950/30', 
    border: 'border-blue-200 dark:border-blue-800/50' 
  };
  if (level >= 60) return { 
    dot: 'bg-amber-500', 
    bg: 'bg-amber-50 dark:bg-amber-950/30', 
    border: 'border-amber-200 dark:border-amber-800/50' 
  };
  return { 
    dot: 'bg-gray-400', 
    bg: 'bg-gray-50 dark:bg-gray-800/30', 
    border: 'border-gray-200 dark:border-gray-700/50' 
  };
}

function SkillChip({ skill, yearsSuffix }: { skill: Skill; yearsSuffix: string }) {
  const colors = getSkillColors(skill.level);
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${colors.bg} ${colors.border} transition-shadow hover:shadow-sm`}
    >
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
        {skill.name}
      </span>
      {skill.yearsOfExperience && (
        <span className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">
          {skill.yearsOfExperience}{yearsSuffix}
        </span>
      )}
    </motion.div>
  );
}

interface SkillCategoryProps {
  category: string;
  index: number;
  skills: Skill[];
  yearsSuffix: string;
}

function SkillCategory({ category, index, skills, yearsSuffix }: SkillCategoryProps) {
  const categorySkills = getSkillsByCategory(skills, category);
  if (categorySkills.length === 0) return null;

  const sortedSkills = [...categorySkills].sort((a, b) => b.level - a.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {sortedSkills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} yearsSuffix={yearsSuffix} />
        ))}
      </div>
    </motion.div>
  );
}

interface SkillsSectionProps {
  title: string;
  subtitle: string;
  proficiencyLabel: string;
  expertLabel: string;
  advancedLabel: string;
  intermediateLabel: string;
  yearsSuffix: string;
  skillCategories: string[];
  skills: Skill[];
}

export function SkillsSection({
  title,
  subtitle,
  proficiencyLabel,
  expertLabel,
  advancedLabel,
  intermediateLabel,
  yearsSuffix,
  skillCategories,
  skills,
}: SkillsSectionProps) {
  return (
    <Section id="skills" title={title} subtitle={subtitle}>
      <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400 font-medium">{proficiencyLabel}</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-gray-600 dark:text-gray-400">{expertLabel}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-gray-600 dark:text-gray-400">{advancedLabel}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-gray-600 dark:text-gray-400">{intermediateLabel}</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category}
            category={category}
            index={index}
            skills={skills}
            yearsSuffix={yearsSuffix}
          />
        ))}
      </div>
    </Section>
  );
}
