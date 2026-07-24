import React from 'react';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`flex flex-col mb-14 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="h-[1px] w-10 bg-accent/40" />
        <span className="text-accent text-xs font-semibold uppercase tracking-widest">Section</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary mt-4 max-w-xl text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
