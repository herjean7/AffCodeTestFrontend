import { Box, Container, Grid } from '@mui/material';
import { Balance } from '../components/Dashboard/balance';
import { TokenInfo } from '../components/Dashboard/tokenInfo';
import { WalletInfo } from '../components/Dashboard/walletInfo';
import React, {  } from 'react';
import { SignTransaction } from '../components/Dashboard/signTransaction';
import axios from 'axios';

export default class Dashboard extends React.Component {
    state = {
        totalBal: [],
        cirTokenInfo: []
    }

    componentDidMount(){
        axios.get('https://localhost:7069/api/Dashboard/AccountBalance')
        .then(res => {
            const totalBal = res.data.result;
            console.log(res);
            this.setState({totalBal});
        })

        axios.get('https://localhost:7069/api/Dashboard/FynTokenInfo')
        .then(res2 => {
            const cirTokenInfo = res2.data.toLocaleString('fullwide', {useGrouping:false});
            console.log(res2);
            this.setState({cirTokenInfo});
        })
    }

    render(){
        return(
            <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
            <br></br>
          <Grid
            container
            spacing={4}
          >
              <Grid
              item
              lg={4}
              sm={3}
              xl={4}
              xs={12}
            >
              <WalletInfo walletAddress='0x4BC0345E17ff8C346867417f2E183FCd5e97bd5B' />
            </Grid>
            <Grid
              item
              lg={4}
              sm={3}
              xl={4}
              xs={12}
            >
              <Balance totalBalance={this.state.totalBal} />
            </Grid>
            <Grid
              item
              xl={4}
              lg={6}
              sm={3}
              xs={12}
            >
              <TokenInfo tokenInfo={this.state.cirTokenInfo} />
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              xs={12}
            >
              <SignTransaction />
            </Grid>
          </Grid>
        </Container>
      </Box>
        )
    }
}
