export const socialLinksMap: Record<string, string> = {
  bale: '/images/footer/socials/bale.png',
  rubika: '/images/footer/socials/rubika.png',
  eita: '/images/footer/socials/eita.png',
  facebook: '/images/footer/socials/facebook.png',
  instagram: '/images/footer/socials/instagram.png',
  telegram: '/images/footer/socials/telegram.png',
  linkedin: '/images/footer/socials/linkedin.png',
};

export default function SocialLink({
  link,
}: {
  link: { link: string; enTitle: string };
}) {
  
  return (
    <a
      href={link.link}
      aria-label={link.enTitle}
      className="flex size-14 items-center justify-center rounded-full bg-background-default text-error-main"
    >
      <button className="inline-flex cursor-pointer select-none items-center justify-center rounded-full border-none !bg-background-default bg-warning-main p-2 font-[inherit] text-[1.5rem] !text-text-primary text-common-white transition-colors duration-200 ease-in-out hover:bg-background-default hover:text-text-secondary">
        <img src={socialLinksMap[link.enTitle]} className="size-10 rounded-full  object-cover" alt={link.enTitle} />
      </button>
    </a>
  );
}
