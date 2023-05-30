import { PageContainer } from '@/components/global/PageContainer';
import { LinktreeItem } from '@/components/pages/linktree/LinktreeItem';
import { LinktreeSocial } from '@/components/pages/linktree/LinktreeSocial';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { socials } from '@/data/socials';

export const LinktreePage = ({ data }: { data: any }) => {
  const { links } = data;
  return (
    <PageContainer className='lg:py-24" py-8 sm:py-16'>
      <div className="relative mx-5 max-w-3xl rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 px-5 py-10 sm:mx-auto sm:px-10 sm:py-20">
        <div className="flex flex-col items-center gap-y-3 text-center">
          <Avatar className="h-24 w-24 border-2 border-blue-900 bg-white sm:h-32 sm:w-32">
            <AvatarImage
              src="/images/bluefin-logo.png"
              alt="Bluefin Aviation"
              className=""
            />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>

          <h1 className="font-slate-50 text-lg font-bold uppercase text-slate-50 sm:text-2xl">
            Bluefin Aviation Services
          </h1>
        </div>

        <ul className="mt-10 space-y-5 sm:space-y-10">
          {links.map((link, linkIdx) => (
            <LinktreeItem key={linkIdx} link={link} />
          ))}
        </ul>

        <ul className="mt-10 flex place-content-center gap-x-7 sm:mt-20 sm:gap-x-10">
          {socials.map((social) => (
            <LinktreeSocial key={social.id} social={social} />
          ))}
        </ul>
      </div>
    </PageContainer>
  );
};
