import { Container, Typography, Box, Stack, Link, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MarkunreadIcon from '@mui/icons-material/Markunread'

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}>
        <img src="/logo/logo-hr-removebg-preview.png" alt="Roila Logo" width={150} height={'auto'} />
        <Typography variant="h5" >
          Auto Parts Website Development & Integration Services
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          <Grid item>
            <Link href="https://www.facebook.com/profile.php?id=61582460623161" target="_blank" rel="noopener">
              <FacebookIcon sx={{ fontSize: 40, color: '#1877F2' }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com/company/109541409/" target="_blank" rel="noopener">
              <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5' }} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="mailto:sales@roila.net">
              <MarkunreadIcon sx={{ fontSize: 40, color: '#34A853' }} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
