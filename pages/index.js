import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import { Button } from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about">Go to the about page</Link>
        <Link data-test-id="nav--css-colors" href="/csscolors">
          CSS Color Names
        </Link>
        <Button>Test</Button>
        <Button color="primary">Test</Button>
        <Button color="secondary">Test</Button>

        <Button variant="outlined">Test</Button>
        <Button variant="outlined" color="primary">
          Test
        </Button>
        <Button variant="outlined" color="secondary">
          Test
        </Button>

        <Button variant="contained">Test</Button>
        <Button variant="contained" color="primary">
          Test
        </Button>
        <Button variant="contained" color="secondary">
          Test
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
