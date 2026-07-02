/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Cyano Foods India OPC Pvt Ltd`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    const finalDesc = description || "Cyano Foods India OPC Private Limited is a global pioneer in microalgae biotechnology, sustainable agriculture, and future food technology. Leading with research, sustainability, and community-led farming (KhetiBharat).";
    metaDescription.setAttribute('content', finalDesc);
  }, [title, description]);

  return null;
}
