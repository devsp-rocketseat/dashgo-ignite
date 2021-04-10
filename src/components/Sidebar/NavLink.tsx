import { ElementType } from 'react'
import { Icon, Link as Chakralink, Text, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <Chakralink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </Chakralink>
    </Link>
  )
}
