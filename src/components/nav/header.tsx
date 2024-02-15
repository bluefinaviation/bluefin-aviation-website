'use client'

import Link from 'next/link'
import * as React from 'react'

import { Logo } from '@/components/branding/logo'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const services: { title: string; href: string; description: string }[] = [
  {
    title: 'Trip Support',
    href: '/services/trip-support',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Fuel Support',
    href: '/services/fuel-support',
    description: 'For sighted users to preview content available behind a link.'
  }
]

export const Header = () => {
  return (
    <div className='mx-auto grid w-full max-w-7xl grid-cols-3 justify-between bg-red-500 py-5'>
      <Logo
        darkColor='#00184f'
        lightColor='#1d63ab'
        className='col-span-1 h-14 w-auto sm:h-14 lg:h-20'
      />
      <NavigationMenu className='col-span-1 col-start-3'>
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px] '>
                {services.map(service => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/contact' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

// // import { CustomPortableText } from '@/components/shared/CustomPortableText';

// // interface HeaderProps {
// //   centered?: boolean;
// //   description?: any[];
// //   title?: string;
// // }
// // export const Header = (props: HeaderProps) => {
// //   const { title, description, centered = false } = props;
// //   if (!description && !title) {
// //     return null;
// //   }
// //   return (
// //     <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
// //       {/* Title */}
// //       {title && (
// //         <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
// //           {title}
// //         </div>
// //       )}
// //       {/* Description */}
// //       {description && (
// //         <div className="mt-4 font-serif text-xl text-slate-600 md:text-2xl">
// //           <CustomPortableText value={description} />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };
