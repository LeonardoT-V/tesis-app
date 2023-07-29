import { NavLink } from '@mantine/core'
import { Link, useLocation } from 'wouter'
import { Pages_Items } from '../../utils/const'

function LinksNavSection() {
  const [location] = useLocation()

  return (
    <>
      {Pages_Items.map(
        (item) =>
          item.forNav && (
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
                      ? theme.fn.darken(theme.colors.bg[3], 0.2)
                      : theme.fn.lighten(theme.colors.bg[1], 0.2)
                }
              })}
              label={item.name}
              active={item.path === location}
              icon={<item.icon stroke={1.5} size={'1.4rem'} />}
              component={Link}
              href={item.path}
            />
          )
      )}
    </>
  )
}

export default LinksNavSection
