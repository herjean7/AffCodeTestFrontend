import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const WalletInfo = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            WALLET INFO
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            RINKEBY
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <AccountBalanceWalletIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography
          color="textSecondary"
          variant="caption"
        >
          {props.walletAddress}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);