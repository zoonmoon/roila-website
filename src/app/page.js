'use client'
import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Stack,
  Link,
  Divider,
  Button,
  Modal,
  Card,
  CardContent,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MarkunreadIcon from '@mui/icons-material/Markunread'

export default function Home() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* --- Logo and Title --- */}
      <Box textAlign="center" mb={6}>
        <img
          src="/logo/logo-hr-removebg-preview.png"
          alt="Roila Logo"
          width={160}
          height="auto"
          style={{ marginBottom: '10px' }}
        />
        <Typography variant="h5" fontWeight={600}>
          Auto Parts Website Development & Integration Services
        </Typography>
      </Box>

      {/* --- Cards Row --- */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        sx={{
          '& > *': {
            flex: '1 1 320px', // each card ~320px wide, wraps when smaller
            maxWidth: 360,
          },
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'translateY(-5px)' },
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Year Make Model Search Integration
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Lightning-fast YMM search tool for your website to boost conversions and reduce returns caused by fitment mismatches.
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Example Portfolio:
            </Typography>
            <Link
              href="https://store.ssrperformance.com"
              target="_blank"
              rel="noopener"
              sx={{ color: '#1565C0', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
            >
              SSR Performance
            </Link>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'translateY(-5px)' },
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              eBay Auto Parts Store Integration
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Zero manual work for managing products in website if you already own an eBay store.
              Automatically sync your eBay listings, inventory, and pricing in real-time with your website.
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Example Portfolio:
            </Typography>
            <Stack spacing={0.5}>

           
              <Link
                href="https://www.ebay.com/str/intlautoparts"
                target="_blank"
                rel="noopener"
                sx={{ color: '#1565C0', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
              >
                ebay.com/str/intlautoparts (eBay Store)
              </Link>
   <Typography variant="body2" color="text.secondary">
                ↕ Integration with
              </Typography>
              <Link
                href="https://intlautoparts.com"
                target="_blank"
                rel="noopener"
                sx={{ color: '#1565C0', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
              >
                intlautoparts.com (website)
              </Link>

            </Stack>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease',
            '&:hover': { transform: 'translateY(-5px)' },
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Auto Parts Website Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              SEO-friendly, high-performance websites designed specifically for auto parts businesses.
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Example Portfolio:
            </Typography>


                     <Link
              href="https://www.spastore.com/search.php"
              target="_blank"
              rel="noopener"
              sx={{ color: '#1565C0', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
            >
              Spa Store
            </Link>
            <Link
              href="https://store.ssrperformance.com"
              target="_blank"
              rel="noopener"
              sx={{my:1.3, display:'block', color: '#1565C0', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
            >
              SSR Performance
            </Link>
            <Link
              href="https://intlautoparts.com"
              target="_blank"
              rel="noopener"
              sx={{my:1.3, display:'block', color: '#1565C0', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}
            >
              INTL AUTO PARTS
            </Link>

          </CardContent>
        </Card>
      </Box>

      {/* --- Contact Button --- */}
      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{
            borderRadius: 5,
            px: 6,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* --- Modal --- */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Stack direction="row" spacing={4} justifyContent="center">
            <Link href="https://www.facebook.com/profile.php?id=61582460623161" target="_blank">
              <FacebookIcon sx={{ fontSize: 40, color: '#1877F2' }} />
            </Link>
            <Link href="https://www.linkedin.com/company/109541409/" target="_blank">
              <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5' }} />
            </Link>
            <Link href="mailto:sales@roila.net">
              <MarkunreadIcon sx={{ fontSize: 40, color: '#34A853' }} />
            </Link>
          </Stack>
        </Box>
      </Modal>
    </Container>
  )
}
