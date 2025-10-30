import React from 'react';

export interface Course {
  name: string;
  icon: React.FC<{ className?: string }>;
  teacher?: string;
  price?: number;
  description: string;
  category: string;
  detailedDescription: string;
  learningOutcomes: string[];
  prerequisites: string[];
}
