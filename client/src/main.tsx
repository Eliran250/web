import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = "614898702039-14p51dtoa02bhh9ctoqrm15d1thgpme8.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <StrictMode>
      <App />
    </StrictMode>,
  </GoogleOAuthProvider>

)
