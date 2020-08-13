import React from 'react';
import {BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom'
import Cards from './Cards'
import Archivedcards from './Archivedcards'
import Allcards from './Allcards'

function Routes() {

    return(
        <Router>
            <nav >
            <div className='header'>
            <h1 className='sitename'>Programming Flash Cards</h1>
                <ul className='navigation'>
                    <li className='navbutton'>
                        <Link to='/'>Active Cards</Link>
                    </li>
                    <li className='navbutton'>
                        <Link to='/Archive'>Archived Cards</Link>
                    </li>
                    <li className='navbutton'>
                        <Link to='/All'>All Cards</Link>
                    </li>
                </ul>
            </div>
                <Switch>
                    <Route exact path='/'>
                        <Cards/>
                    </Route>
                    <Route path ='/Archive'>
                        <Archivedcards/>
                    </Route>
                    <Route path ='/All'>
                        <Allcards/>
                    </Route>
                </Switch>
            </nav>
        </Router>
    )
}

export default Routes;