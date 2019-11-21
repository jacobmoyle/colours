import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MuiLink from '@material-ui/core/Link'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import { Button } from '@material-ui/core'

export default function CssColors() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about">Go to the about page</Link>
        <Link data-test-id="nav--index" href="/">
          About
        </Link>
        {/* <ProTip /> */}
        {/* <Copyright /> */}
      </Box>
    </Container>
  )
}