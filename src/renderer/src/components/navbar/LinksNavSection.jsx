import { NavLink } from '@mantine/core'
import { Link, useLocation } from 'wouter'
import { Nav_Items } from '../../utils/const'

function LinksNavSection() {
  const [location] = useLocation()

  return (
    <>
      {Nav_Items.map((item) => (
        <NavLink
          c="dimmed"
          key={item.name}
          sx={(theme) => ({
            padding: `${theme.spacing.xs} ${theme.spacing.md}`,
            borderRadius: theme.radius.sm,
            marginBottom: theme.spacing.xs,
            ':hover': {
              background:
                theme.colorScheme === 'dark'
                  ? theme.fn.darken(theme.colors.bg[2], 0.77)
                  : theme.fn.lighten(theme.colors.bg[5], 0.95)
            }
          })}
          label={item.name}
          active={item.path === location}
          icon={<item.icon stroke={1.5} size={'1.4rem'} />}
          component={Link}
          href={item.path}
        />
      ))}
    </>
  )
}

export default LinksNavSection
