/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'spirulina' | 'superfoods' | 'functional_foods' | 'nutraceuticals' | 'agricultural_inputs' | 'healthy_foods' | 'future_products';
  categoryLabel: string;
  description: string;
  benefits: string[];
  specifications: { key: string; value: string }[];
  isFeatured?: boolean;
}

export interface CouncilMember {
  name: string;
  role: string;
  region: string;
  qualification: string;
}

export interface RegionalCouncilActivity {
  title: string;
  desc: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'news' | 'event' | 'success_story';
  categoryLabel: string;
  date: string;
  summary: string;
  content: string;
  imagePlaceholder: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  type: 'full_time' | 'internship' | 'volunteer';
  typeLabel: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface DownloadDoc {
  id: string;
  title: string;
  category: 'brochure' | 'reports' | 'certifications' | 'guidelines' | 'newsletters';
  categoryLabel: string;
  fileSize: string;
  format: 'PDF' | 'DOCX' | 'ZIP';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'khetibharat' | 'regional_council' | 'products' | 'certification';
}
