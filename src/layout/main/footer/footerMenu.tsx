import type {  FooterLink } from '@/_types/_footer';
import LinkComponent from '@/components/linkComponent';
import setSvgHtml from '@/utils/setSvgHtml';
import { Typography } from '@mui/material';
import React from 'react';

export default function FooterMenu({menu}:{menu:FooterLink[]}) {
  return (
    <>
      {menu.map((item) => (
        <div key={item.title}>
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-warning-main p-1.5 text-common-white shadow-s10">
              <div className='size-full [&_svg]:size-full' dangerouslySetInnerHTML={setSvgHtml(item.icon)}></div>
            </span>
            <Typography variant="h5">{item.title}</Typography>
          </div>

          <div className="mr-4 mt-5 flex flex-col gap-4">
            {item.links.map((link) => (
              <LinkComponent
                key={link.url}
                href={link.title}
                className='relative pr-3 transition-colors duration-300 before:absolute before:right-0 before:mt-1 before:h-3 before:w-px before:bg-grey-400 before:transition-colors before:duration-300 before:content-[""] hover:text-primary-main before:hover:bg-primary-main'
              >
                {link.title}
              </LinkComponent>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
