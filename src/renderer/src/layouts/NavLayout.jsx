/* eslint-disable react/prop-types */
import { AppShell, Box, Flex, Navbar, Title, useMantineTheme } from '@mantine/core'
import Logo from '../assets/vite.svg'
import InfoNavSection from '../components/navbar/InfoNavSection'
import ToolsNavSection from '../components/navbar/ToolsNavSection'
import LinksNavSection from '../components/navbar/LinksNavSection'

function NavLayout({ children }) {
  return (
    <AppShell
      padding={0}
      navbar={
        <Navbar
          p="xs"
          width={{ base: 250 }}
          fixed
          sx={(theme) => ({
            justifyContent: 'space-between',
            direction: 'flex',
            gap: theme.spacing.xs
          })}
          withBorder={false}
          styles={(theme) => ({
            root: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0]
            }
          })}
        >
          <NavSection>
            <Flex align="center" justify="center" gap="md">
              <img src={Logo} alt="logo" height={32} width={32} />
              <Title>MkApi</Title>
            </Flex>
          </NavSection>

          <NavSection grow isNav>
            <LinksNavSection />
          </NavSection>

          <NavSection>
            <InfoNavSection />
          </NavSection>

          <NavSection>
            <ToolsNavSection />
          </NavSection>
        </Navbar>
      }
    >
      <Box
        sx={(theme) => ({
          padding: `${theme.spacing.xs} ${theme.spacing.xs} ${theme.spacing.xs} 0`,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0],
          height: '100%',
          minHeight: '100%'
        })}
      >
        <Flex
          direction="column"
          rowGap={'xl'}
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[4] : theme.colors.bg[1],
            minHeight: '100%',
            height: '100%',
            boxShadow: theme.shadows.xs,
            padding: theme.spacing.md,
            borderRadius: theme.radius.sm
          })}
        >
          {children}
        </Flex>
      </Box>
    </AppShell>
  )
}

export default NavLayout

function NavSection({ children, grow, isNav }) {
  const mainTheme = useMantineTheme()
  const padding = isNav
    ? `${mainTheme.spacing.sm} ${mainTheme.spacing.sm}`
    : `${mainTheme.spacing.xs} ${mainTheme.spacing.md} 0 ${mainTheme.spacing.md}`
  return (
    <Navbar.Section
      grow={grow}
      sx={(theme) => ({
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[5] : theme.colors.bg[2],
        borderRadius: theme.radius.sm,
        padding
      })}
    >
      {children}
    </Navbar.Section>
  )
}
