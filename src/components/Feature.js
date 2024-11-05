import Image from 'next/image';
import { BlockEditorRenderer } from '@dotcms/react';

export default function Feature({ headline, content, image, preheadline }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24">
      <div className="grid gap-16 items-center lg:grid-cols-2">
        <div>
          <div className="mb-4">
            <span className="text-[16px] font-medium text-green">
              {preheadline}
            </span>
          </div>

          <div className="mb-6 [&_h2]:leading-none [&_h2]:text-[48px]">
            <h2>{headline}</h2>
          </div>
          
          <div className="text-[20px] text-black/60 [&_ul]:list-none [&_ul]:space-y-4 [&_li]:flex [&_li]:gap-2 [&_li]:pb-4 [&_li]:border-b [&_li]:border-green-500">
            <BlockEditorRenderer blocks={content} />
          </div>
        </div>

        <div className="relative">
          <Image
            src={`http://localhost:8080/dA/${image}/image`}
            alt={headline}
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
} 