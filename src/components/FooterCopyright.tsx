'use client';

import { useMemo } from 'react';

function FooterCopyright() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <p className="italic text-right text-sm sm:text-base">
      Allan Aoudji @ 2023 {currentYear > 2023 && ` - ${currentYear}`}
    </p>
  );
}

export default FooterCopyright;
