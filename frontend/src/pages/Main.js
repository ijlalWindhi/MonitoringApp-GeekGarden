import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Landing Page/';
import Outlet from './Outlet/';
import Paket from './Paket';
import User from './User';
import Member from './Member';
import ChooseMember from './Pilih Member';
import Login from './Login/Login';
import Cart from './Keranjang/';
import Transaksi from './Transaksi/Transaksi';
import Detail_transaksi from './Detail Transaksi';
import Cetak from './Cetak';
import Laporan from './Laporan/Laporan';
import ChoosePaket from './Pilih Paket';

const Main = () => (
    
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/outlet" component={Outlet} />
        <Route path="/paket" component={Paket} />
        <Route path="/user" component={User} />
        <Route path="/member" component={Member} />
        <Route path="/choosemember" component={ChooseMember} />
        <Route path="/choosepaket" component={ChoosePaket} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/transaksi" component={Transaksi} />
        <Route path="/laporan" component={Laporan} />
        <Route path="/detail_transaksi" component={Detail_transaksi} />
        <Route path="/cetak" component={Cetak} />
    </Switch>
    
    
)

export default Main;