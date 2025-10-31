'use client'
import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Stack,
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Modal,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MarkunreadIcon from '@mui/icons-material/Markunread'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

export default function Home() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center', position: 'relative' }}>
      {/* --- Contact Us Button (Top Right) --- */}

      {/* --- Logo and Tagline --- */}
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
        <img
          src="/logo/logo-hr-removebg-preview.png"
          alt="Roila Logo"
          width={160}
          height={'auto'}
          style={{ marginBottom: '10px' }}
        />
        <Typography variant="h5" fontWeight={500} color="text.primary" sx={{ mb: 4 }}>
          Auto Parts Website Development & Integration Services
        </Typography>

        {/* --- Services List --- */}
        <List
          sx={{
            width: '100%',
            maxWidth: 500,
            mx: 'auto',
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          <ListItem
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#f9fafb', transform: 'scale(1.01)' },
            }}
          >
            <ListItemIcon>
              <SettingsSuggestIcon sx={{ color: '#2E7D32' }} />
            </ListItemIcon>
            <ListItemText
              primary="Year Make Model Search Integration"
              secondary="Custom-fitment systems for precise auto part compatibility."
            />
          </ListItem>

          <Divider variant="middle" />

          <ListItem
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#f9fafb', transform: 'scale(1.01)' },
            }}
          >
            <ListItemIcon>
              <IntegrationInstructionsIcon sx={{ color: '#1565C0' }} />
            </ListItemIcon>
            <ListItemText
              primary="eBay Auto Parts Store Integration"
              secondary="Sync your eBay listings, inventory, and pricing with your website."
            />
          </ListItem>

          <Divider variant="middle" />

          <ListItem
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#f9fafb', transform: 'scale(1.01)' },
            }}
          >
            <ListItemIcon>
              <BuildCircleIcon sx={{ color: '#8E24AA' }} />
            </ListItemIcon>
            <ListItemText
              primary="Auto Parts Website Development"
              secondary="SEO-friendly, high-performance websites tailored for auto parts businesses."
            />
          </ListItem>
        </List>
      </Box>

      {/* --- Fixed Social Icons (Bottom) --- */}
      <Box sx={{  zIndex: 444, bottom: 20, marginTop:'40px',  }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ borderRadius: 5, padding:'10px 50px', textTransform: 'none', fontWeight: 'bold' }}
        >
          Contact Us
        </Button>
      </Box>



      {/* --- Contact Us Modal --- */}
      <Modal open={open} onClose={handleClose} aria-labelledby="contact-modal-title">
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
          <Typography id="contact-modal-title" variant="h6" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          
          <Divider variant="middle" sx={{my:3}} />

          <Stack direction="row" spacing={4} justifyContent="center">
            <Link href="https://www.facebook.com/profile.php?id=61582460623161" target="_blank" rel="noopener">
              <FacebookIcon sx={{ fontSize: 40, color: '#1877F2', transition: '0.3s', '&:hover': { opacity: 0.8 } }} />
            </Link>
            <Link href="https://www.linkedin.com/company/109541409/" target="_blank" rel="noopener">
              <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5', transition: '0.3s', '&:hover': { opacity: 0.8 } }} />
            </Link>
            <Link href="mailto:sales@roila.net">
              <MarkunreadIcon sx={{ fontSize: 40, color: '#34A853', transition: '0.3s', '&:hover': { opacity: 0.8 } }} />
            </Link>
          </Stack>
        </Box>
      </Modal>

      {/* Add bottom margin so content isn’t blocked by fixed icons */}
      <Box sx={{ height: 40 }} />
    </Container>
  )
}
