import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Join from './components/join/Join'
import Chat from './components/chat/Chat'
import { ColorProvider } from './components/join/theme/Color'

const App = () => (
<Router>
<ColorProvider> 
   <Route path='/' exact component={Join} />
   <Route path='/chat' exact component={Chat} />

</ColorProvider>
</Router>)
export default App
