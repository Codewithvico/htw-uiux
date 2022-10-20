import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Legal from './pages/legal';
import TermsOfService from './pages/terms';
import Privacy from './pages/privacy';
import MarketPrivacy from './pages/marketpolicy';
import RefundPolicy from './pages/RefundPolicy';
import SubpoenaPolicy from './pages/SubpoenaPolicy';
import CopyRightPolicy from './pages/CopyRightPolicy';
import DomainNameSearch from './pages/domainsearch';
import Webhosting from './pages/webhosting';
import Security from './pages/security';
import SslCertificate from './pages/SslCertificate';
import WhoisGuard from './pages/WhoisGuard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/legal" element={<Legal/>} />
        <Route exact path="/termsofservice" element={<TermsOfService/>} />
        <Route exact path="/privacy-policy" element={<Privacy/>} />
        <Route exact path="/marketplace-policy" element={<MarketPrivacy/>} />
        <Route exact path="/refund-policy" element={<RefundPolicy/>} />
        <Route exact path="/subpoena-policy" element={<SubpoenaPolicy/>} />
        <Route exact path="/copyright-policy" element={<CopyRightPolicy/>} />
        <Route exact path="/domain-name-search" element={<DomainNameSearch/>} />
        <Route exact path="/web-hosting" element={<Webhosting />} />
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/ssl-certificate" element={<SslCertificate />} />
        <Route exact path="/whois-guard" element={<WhoisGuard />} />
      </Routes>
    </Router>
  );
};

export default App;