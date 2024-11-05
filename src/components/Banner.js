import { BlockEditorRenderer } from '@dotcms/react';
import CallToAction from './CallToAction';

export default function Banner({ headline, content, callToAction }) {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-[1440px] mx-auto px-6 py-24">
      <div className="max-w-[1024px]">
        <div className="mb-6 [&_h1]:leading-none [&_h2]:leading-none [&_h1_strong]:text-primary [&_h1_b]:text-primary [&_h2_strong]:text-primary [&_h2_b]:text-primary">
          <BlockEditorRenderer blocks={headline} />
        </div>
        
        <div className="text-[20px] text-black/60 mb-12">
          <BlockEditorRenderer blocks={content} />
        </div>

        {callToAction?.length > 0 && (
          <CallToAction 
            label={callToAction[0].label}
            href={callToAction[0].url}
            variant={callToAction[0].variant?.toLowerCase() || 'primary'}
          />
        )}
      </div>
    </section>
  );
} 