import React, {Component} from 'react';
import './App.css';
import Main from './main.js'
import Nav from './nav'
import About from './about'
import { Route } from 'react-router-dom'
import Contact from "./contact"
import Customers from "./customers"
import IPM from "./products/ipm"
import SPI from "./products/SPI"
import TwoFiveX_RAY from "./25x_ray"
import X_RAY_Counter from "./x_ray_counter"
import Fluxing from "./products/fluxing";
import Spea from "./spea";
import SemiConductor from "./semiConductor";
import AOI from "./AOI"
import AXI from "./products/AXI";
import Spea_4060 from "./products/spea_1";
import Spea_3030 from "./products/spea_2";
import OC_Scan from "./products/oc_scan";
import Hyperion from "./products/hyperion";
import Th1000S from "./products/th1000s";
import Tr1000S from "./products/tr1000s";
import Conformal_Coating_Product from "./products/conformal_coating_product";
import Conformal_Coating_Glue from "./products/conformal_coating_glue";
import Conformal_Coating from "./products/conformal_coating"
import Linkways_Products from "./products/linkways_product";
import Solutions from "./solutions";
import Solutions_SMT from "./solutions_SMT";

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Route exact path='/' component={Main} />
                <Route exact path='/about' component={About} />
                <Route exact path='/solutions' component={Solutions} />
                <Route exact path='/solutions/smt' component={Solutions_SMT} />
                <Route exaxt path='/solutions/smt/AOI' component={AOI} />
                <Route exaxt path='/solutions/smt/IPM' component={IPM} />
                <Route exaxt path='/solutions/smt/SPI' component={SPI}/>
                <Route exaxt path='/solutions/smt/AXI' component={AXI}/>
                <Route exaxt path='/solutions/smt/25X-ray' component={TwoFiveX_RAY}/>
                <Route exaxt path='/solutions/smt/fluxing' component={Fluxing}/>
                <Route exaxt path='/solutions/smt/x-ray-counter' component={X_RAY_Counter}/>
                <Route exaxt path='/solutions/semi-conductor/tr1000s' component={Tr1000S}/>
                <Route exaxt path='/solutions/semi-conductor/th1000s' component={Th1000S}/>
                <Route exaxt path='/solutions/smt/SPEA4060' component={Spea_4060}/>
                    <Route exaxt path='/solutions/smt/SPEA3030' component={Spea_3030} />
                <Route exaxt path='/solutions/smt/conformal-coating' component={Conformal_Coating}/>
                    <Route exaxt path='/solutions/smt/conformal-coating-product' component={Conformal_Coating_Product}/>
                <Route exaxt path='/solutions/smt/conformal-coating-glue' component={Conformal_Coating_Glue}/>
                <Route exaxt path='/solutions/smt/spea' component={Spea}/>
                <Route exaxt path='/solutions/smt/oc_scan' component={OC_Scan}/>
                <Route exaxt path='/solutions/smt/hyperion' component={Hyperion}/>
                <Route exaxt path='/solutions/semi-conductor' component={SemiConductor}/>
                <Route exaxt path='/solutions/linkways' component={Linkways_Products}/>
                <Route exaxt path='/contact' component={Contact}/>
                <Route exaxt path='/customers' component={Customers}/>
    </div>
    )
        ;
    }
}

export default App;
